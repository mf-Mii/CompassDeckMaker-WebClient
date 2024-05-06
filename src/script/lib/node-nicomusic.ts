export class NodeNicoMusic {
    private readonly __VERSION__ = '0.1.0.0'
    private readonly WatchAPI_Guest:string = "https://www.nicovideo.jp/api/watch/v3_guest";
    private readonly Default_Headers:StringObject = {
        Referer: 'https://vocaloid-collection.jp/',
        Origin: 'https://embed.nicovideo.jp'
    }
    private readonly videoId: string;
    private readonly isBrowser: boolean;
    private readonly proxy_list: ProxyObject[] = [
        {url: '', is_encoded: false},
        {url: "https://corsproxy.io/?", is_encoded: true},
        {url: "http://localhost:8080/", is_encoded: false},
        {url: null, is_encoded: false}
    ];
    private readonly proxy_index = 0;
    private videoInfo : any = null;
    private sessionInfo: any = null;

    /**
     * Create NicoMusic Instance
     * @param videoId NicoNico Video ID
     * @param isBrowser
     * @param proxy ProxyIndex or [ProxyObject]
     * ## ProxyList
     * | index | proxy |
     * | --- | --- |
     * | 0 | _NONE(direct)_ |
     * | 1 | corsproxy.io |
     * | 2 | localhost:8080 |
     * | 3 | custom proxy(unsetable) |
     */
    constructor(videoId: string, appName: string,isBrowser: boolean = (typeof window !== 'undefined' && typeof window.document !== 'undefined'), proxy: ProxyObject | number = undefined) {
        this.videoId = videoId;
        this.videoInfo = {__isNull__:true}
        this.appName = appName;
        this.Default_headers = this.header({
            'User-Agent': ((appName)?appName + ' |':'')+' Node-NicoMusic v' + this.__VERSION__+' by mf_Mii (https://x.com/JP_mf_Mii)'
        })
        this.isBrowser = isBrowser;
        if (proxy != undefined) {
            if (typeof proxy == "number") this.proxy_index = proxy;
            else {
                this.proxy_list[3] = proxy;
                this.proxy_index = 3;
            }
        }
    }
    async get_audio() {
        if (this.videoInfo.__isNull__) {
            await this.get_videoInfo();
        }
        const is_session_available = this.is_session_available();
        if (!is_session_available) await this.generate_session();
        const downloaded_file = await this.download_audio(this.sessionInfo).then(async (res) => {
            return res.arrayBuffer();
        });
        return downloaded_file;
    }
    async get_audio_as_blob() {
        if (this.videoInfo.__isNull__) {
            await this.get_videoInfo();
        }
        const is_session_available = this.is_session_available();
        if (!is_session_available) await this.generate_session();
        const downloaded_file = await this.download_audio(this.sessionInfo).then(async (res) => {
            return new Blob([await res.blob()], {type: "audio/mp4"})
        });
        return downloaded_file;
    }

    private async download_audio(session: any) {
        return await this.request_get(session.content_uri, this.Default_Headers);
    }

    private is_session_available(): boolean {
        if (this.sessionInfo === undefined || this.sessionInfo === null) return false;
        return this.sessionInfo.session_operation_auth.session_operation_auth_by_signature.expire_time >= new Date().getTime();
    }

    private async generate_session(cors_proxy: boolean = true) {
        if (!this.videoInfo.media.delivery.movie.session) {
            return null;
        }
        const session = this.videoInfo.media.delivery.movie.session;
        const session_url = session["urls"][0]["url"];
        //create session body
        const session_req_body = {
            session: {
                content_type: 'audio',
                protocol: {
                    name: 'http',
                    parameters: {
                        http_parameters: {
                            method: 'GET',
                            parameters: {
                                http_output_download_parameters: {
                                    file_extension: 'mp4',
                                    use_ssl: 'yes',
                                    use_well_known_port: 'yes',
                                    transfer_preset: session.transferPresets[0]
                                }
                            }
                        }
                    }
                },
                session_operation_auth: {
                    session_operation_auth_by_signature: {
                        token: session.token,
                        signature: session.signature
                    }
                },
                content_src_id_sets: [{}],
                content_id: session.contentId,
                recipe_id: session.recipeId,
                timing_constraint: 'unlimited',
                client_info: {
                    player_id: session.playerId
                },
                keep_method: {
                    heartbeat: {
                        lifetime: session.heartbeatLifetime
                    }
                },
                priority: session.priority,
                content_auth: {
                    auth_type: session.authTypes.http,
                    content_key_timeout: session.contentKeyTimeout,
                    service_id: 'nicovideo',
                    service_user_id: session.serviceUserId
                }
            }
        };
        session_req_body.session.content_src_id_sets = [];
        for (const audio_prop of session.audios) {
            session_req_body.session.content_src_id_sets.push({content_src_ids: [audio_prop]})
        }
        //create session
        const res = await this.request_post(session_url + "?_format=json", this.Default_Headers, session_req_body);
        if (res.ok) {
            const res_data = await res.json();
            this.sessionInfo = res_data.data.session;
            console.log(res_data.data.session);
            return this.sessionInfo;
        }else {
            throw new Error("session create failed");
        }
    }

    async get_videoInfo() {
        const res = await this.request_get(
            this.WatchAPI_Guest + "/" + this.videoId + "?_frontendId=0&_frontendVersion=0&actionTrackId=0_0",
            this.Default_Headers).then((response) => {
            const jsonPromise = response.json().then(r => {
                this.videoInfo = r.data;
                console.log(r.data);
                return r.data;
            });
            return jsonPromise;
        });
        return res;
    }

    private request_get (url: string, headers: HeadersInit) {
        if (this.isBrowser) return this.request_get_browser(url, headers);
        return fetch(url, {
            method: "GET",
            headers,
            cache: "no-cache",
        })
    }

    private request_post (url: string, headers: HeadersInit, body: any) {
        if (this.isBrowser) return this.request_post_browser(url, headers, body);
        return fetch(url, {
            method: "POST",
            headers,
            cache: "no-cache",
            body: JSON.stringify(body)
        })
    }

    /**
     * GET Request on browser
     * @param url request url
     * @param headers request headers
     * @private
     */
    private request_get_browser (url: string, headers: HeadersInit) {
        const proxy_url = this.proxy_list[this.proxy_index].url;
        const is_proxy_encoded = this.proxy_list[this.proxy_index].is_encoded;
        if (this.proxy_index === 2 && url.substring(0, 8) === "https://") url = url.substring(8);
        url =proxy_url + (is_proxy_encoded ? encodeURIComponent(url) : url);
        return fetch(url, {
            method: "GET",
            headers,
            cache: "no-cache",
            mode: "cors"
        })
    }
    /**
     * POST Request on browser
     * @param url request url
     * @param headers request headers
     * @param body request body
     * @param proxy_id proxy id. 0: no proxy, 1: corsproxy.io, 2: original server
     * @private
     */
    private request_post_browser (url: string, headers: HeadersInit, body: any) {
        const proxy_url = this.proxy_list[this.proxy_index].url;
        const is_proxy_encoded = this.proxy_list[this.proxy_index].is_encoded;
        if (this.proxy_index === 2 && url.substring(0, 8) === "https://") url = url.substring(8);
        url =proxy_url + (is_proxy_encoded ? encodeURIComponent(url) : url);
        return fetch(url, {
            method: "POST",
            headers,
            cache: "no-cache",
            mode: "cors",
            body: (typeof body === "string") ? body : JSON.stringify(body)
        })
    }

    private header(custom_headers: StringObject) {
        let headers = this.Default_Headers;
        for (let customHeadersKey in custom_headers) {
            headers[customHeadersKey] = custom_headers[customHeadersKey];
        }
        const header_res :HeadersInit = headers;
        return header_res;
    }
}
export interface StringObject {
    [key: string]: string
}
export interface ProxyObject {
    url: string,
    is_encoded: boolean
}
