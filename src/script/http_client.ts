import {getConfigValue} from "@/config.ts";

const defaultHeaders = {
  "Content-Type": "application/json",
  "Cache-Control": "no-cache",
  "X-ClientApp": "CpsDM-Vue v" + getConfigValue('app.version'),
}

const get = (url: string, headers: HeadersInit = {}) => {
  return fetch(url, {
    method: "GET",
    headers,
    cache: "no-cache",
  });
}

const post = (url: string, body: any, headers: HeadersInit = {}) => {
  headers = { ...defaultHeaders, ...headers }
  return fetch(url, {
    method: "POST",
    headers,
    cache: "no-cache",
    body: JSON.stringify(body)
  });
}

export { get, post }
