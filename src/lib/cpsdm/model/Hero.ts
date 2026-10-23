export class Hero {
    private readonly _id :number;
    private readonly _name: string;
    private readonly _role: HeroProperties.Role;
    private readonly _status: HeroProperties.Status;
    private readonly _speed: number;// 移動速度 (マス/秒)
    private readonly _attackRange: number;// 通常攻撃範囲 (マス)
    private readonly _attackInterval: number[][];// 通常攻撃間隔 ([n回目]秒)[1撃目[1hit,2hit,3hit,...]]
    private readonly _attackValue: number[];// 通常攻撃力
    private readonly _attackCount: number;// 通常攻撃回数(hit)
    private readonly _heroAction: HeroProperties.HeroAction;// HA
    private readonly _heroSkill: HeroProperties.HeroSkill;// HS
    private readonly _ability: HeroProperties.Ability;// アビリティ
    private readonly _cardLaunchTime: HeroProperties.CardLaunchTime;// カード発動時間
    private readonly _pushes: HeroProperties.Pushes;// 押し出し

    constructor(id: number, name: string, role: HeroProperties.Role, status: HeroProperties.Status, speed: number, attackRange: number, attackInterval: number[][], attackValue: number[], attackCount: number, heroAction: HeroProperties.HeroAction, heroSkill: HeroProperties.HeroSkill, ability: HeroProperties.Ability, cardLaunchTime: HeroProperties.CardLaunchTime, pushes: HeroProperties.Pushes) {
        this._id = id;
        this._name = name;
        this._role = role;
        this._status = status;
        this._speed = speed;
        this._attackRange = attackRange;
        this._attackInterval = attackInterval;
        this._attackValue = attackValue;
        this._attackCount = attackCount;
        this._heroAction = heroAction;
        this._heroSkill = heroSkill;
        this._ability = ability;
        this._cardLaunchTime = cardLaunchTime;
        this._pushes = pushes;
    }

    /**
     * ヒーローのID
     * @returns {number}
     */
    get id(): number {
        return this._id;
    }

    /**
     * ヒーローの名前
     * @returns {string}
     */
    get name(): string {
        return this._name;
    }

    /**
     * ヒーローのロール
     * @returns {HeroProperties.Role}
     */
    get role(): HeroProperties.Role {
        return this._role;
    }

    /**
     * ヒーローのステータス
     * @returns {HeroProperties.Status}
     */
    get status(): HeroProperties.Status {
        return this._status;
    }

    /**
     * ヒーローの移動速度
     * @returns {number} マス/秒
     */
    get speed(): number {
        return this._speed;
    }

    /**
     * ヒーローの通常攻撃範囲
     * @returns {number} マス
     */
    get attackRange(): number {
        return this._attackRange;
    }

    /**
     * ヒーローの通常攻撃間隔
     * @returns {number[][]} [n回目]秒)[1撃目[1hit,2hit,3hit,...]]
     */
    get attackInterval(): number[][] {
        return this._attackInterval;
    }

    /**
     * ヒーローの通常攻撃力
     * @returns {number[]} 通常攻撃力 [1撃目,2撃目,3撃目,...]
     */
    get attackValue(): number[] {
        return this._attackValue;
    }

    /**
     * ヒーローの通常攻撃回数(hit)
     * @returns {number} 通常攻撃回数(hit)
     */
    get attackCount(): number {
        return this._attackCount;
    }

    /**
     * ヒーローのヒーローアクション
     * @returns {HeroProperties.HeroAction}
     */
    get heroAction(): HeroProperties.HeroAction {
        return this._heroAction;
    }

    /**
     * HS
     * @returns {HeroProperties.HeroSkill}
     */
    get heroSkill(): HeroProperties.HeroSkill {
        return this._heroSkill;
    }

    /**
     * アビリティ
     * @returns {HeroProperties.Ability}
     */
    get ability(): HeroProperties.Ability {
        return this._ability;
    }

    /**
     * カード発動時間
     * @returns {HeroProperties.CardLaunchTime}
     */
    get cardLaunchTime(): HeroProperties.CardLaunchTime {
        return this._cardLaunchTime;
    }

    /**
     * 押し出し量
     * @returns {HeroProperties.Pushes}
     */
    get pushes(): HeroProperties.Pushes {
        return this._pushes;
    }


}

namespace HeroProperties {

    export enum Role {
        ATTACKER,// アタッカー
        TANK,// タンク
        SPRINTER,// スプリンター
        GUNNER,// ガンナー
    }
    export interface Status {
        Attack: number;
        Defense: number;
        Life: number;
    }

    export interface HeroAction {
        name: string;
        description: string;
        long: number;//射程
        range: number;//範囲
        launch_time: number;//発動時間
    }

    export interface HeroSkill {
        name: string;// スキル名
        description: string;// 説明文
        hs_charge_time: number;// チャージ時間 (秒)
        hs_time: number;// 効果時間 (秒)
        hs_god_time: number;// 無敵時間 (秒)

    }

    export interface Ability {
        name: string;
        description: string;
    }

    export interface Pushes {
        push: string & { length: 1; };//水平
        brust: string & { length: 1; };//放物線
        launch: string & { length: 1; };//垂直
    }

    export interface CardLaunchTime {
        speed: {
            none: CardLaunchTime.Normal;
            short: CardLaunchTime.Normal;
            long: CardLaunchTime.Normal;
        };
        type: {
            near: CardLaunchTime.Normal;
            range: CardLaunchTime.Normal;
            far: CardLaunchTime.Multiple;
            consecutive: CardLaunchTime.Multiple;
            teleport: CardLaunchTime.Normal;
        }
    }
    namespace CardLaunchTime {
        export class Normal {
            private readonly launchTime: number;
            private readonly freezeTime: number;
            constructor(launchTime: number, freezeTime: number) {
                this.launchTime = launchTime;
                this.freezeTime = freezeTime;
            }
            public get LaunchTime(): number {
                return this.launchTime;
            }
            public get FreezeTime(): number {
                return this.freezeTime;
            }
        }
        export class Multiple extends Normal {
            private readonly allHitTime: number;
            constructor(launchTime: number, freezeTime: number, allHitTime: number) {
                super(launchTime, freezeTime);
                this.allHitTime = allHitTime;
            }
            public get AllHitTime(): number {
                return this.allHitTime;
            }
        }
    }
}
