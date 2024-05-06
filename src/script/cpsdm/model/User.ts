import {Deck} from "./Deck";
import {Hero} from "./Hero";
import {CardType} from "./CardTypes";

export class User {
    /**
     * ユーザーのID
     * @type {string} UUID
     * @private
     */
    private readonly _id: string;
    /**
     * ユーザーの名前
     * @type {string}
     * @private
     */
    private _name: string;
    /**
     * ユーザーの紹介文
     * @type {string}
     * @private
     */
    private _description: string;
    /**
     * ユーザーのフレンドコード
     * @private
     */
    private _friendCode: string;
    /**
     * ユーザーの応援コード
     * @private
     */
    private _supportCode: string;
    private _decks: Deck[];
    private _cardStatus: User.CardStatus[];
    private _heroStatus: User.HeroStatus[];

    /**
     * ユーザーの作成
     * @param id ユーザーのID(UUID)
     * @param name ユーザーの名前
     * @param description ユーザーの紹介文
     * @param friendCode ユーザーのフレンドコード
     * @param supportCode ユーザーの応援コード
     * @param decks {@link Deck[]} ユーザーのデッキ
     * @param cardStatus {@link User.CardStatus[]} ユーザーの所持カード
     * @param heroStatus {@link User.HeroStatus[]} ユーザーの所持ヒーロー
     */
    constructor(id: string, name: string, description: string, friendCode: string, supportCode: string ,decks: Deck[], cardStatus: User.CardStatus[], heroStatus: User.HeroStatus[]) {
        this._id = id;
        this._name = name;
        this._description = description;
        this._friendCode = friendCode;
        this._supportCode = supportCode;
        this._decks = decks;
        this._cardStatus = cardStatus;
        this._heroStatus = heroStatus;
    }

    /**
     * ユーザーのID
     * @returns {string} UUID
     */
    get id(): string {
        return this._id;
    }

    /**
     * ユーザーの名前
     * @returns {string}
     */
    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    /**
     * ユーザーの紹介文
     * @returns {string}
     */
    get description(): string {
        return this._description;
    }

    set description(description: string) {
        this._description = description;
    }

    /**
     * ユーザーのフレンドコード
     * @returns {string}
     */
    get friendCode(): string {
        return this._friendCode;
    }

    set friendCode(friendCode: string) {
        this._friendCode = friendCode;
    }

    /**
     * ユーザーの応援コード
     * @returns {string}
     */
    get supportCode(): string {
        return this._supportCode;
    }

    set supportCode(supportCode: string) {
        this._supportCode = supportCode;
    }

    get decks(): Deck[] {
        return this._decks;
    }

    set decks(decks: Deck[]) {
        this._decks = decks;
    }

    get cardStatus(): User.CardStatus[] {
        return this._cardStatus;
    }

    set cardStatus(cardStatus: User.CardStatus[]) {
        this._cardStatus = cardStatus;
    }

    get heroStatus(): User.HeroStatus[] {
        return this._heroStatus;
    }

    set heroStatus(heroStatus: User.HeroStatus[]) {
        this._heroStatus = heroStatus;
    }

}
export namespace User {
    export class CardStatus {
        private readonly _card: CardType.Common; // CardID
        private _memo: string;
        private _count: number;// 0: 未所持, 1~: 所持数
        private _level: number;// 0: 未所持, 1~60: レベル
        private _limitBreak: number;// 凸数(0~4)

        constructor(card: CardType.Common, memo: string,count: number, level: number, limitBreak: number) {
            this._card = card;
            this._memo = memo;
            this._count = count;
            this._level = level;
            this._limitBreak = limitBreak;
        }

        get card(): CardType.Common {
            return this._card;
        }

        get memo(): string {
            return this._memo;
        }

        set memo(memo: string) {
            this._memo = memo;
        }

        get count(): number {
            return this._count;
        }

        set count(count: number) {
            this._count = count;
        }

        get level(): number {
            return this._level;
        }

        set level(level: number) {
            this._level = level;
        }

        get limitBreak(): number {
            return this._limitBreak;
        }

        set limitBreak(limitBreak: number) {
            this._limitBreak = limitBreak;
        }
    }
    export class HeroStatus {
        private readonly _hero: Hero;
        private _memo: string;
        private _heroMedals: HeroMedal[];// ヒーローメダル(0~3枚)

        constructor(hero: Hero, memo: string, heroMedals: HeroMedal[]) {
            this._hero = hero;
            this._memo = memo;
            this._heroMedals = heroMedals;
        }

        get hero(): Hero {
            return this._hero;
        }

        get memo(): string {
            return this._memo;
        }

        set memo(memo: string) {
            this._memo = memo;
        }

        get heroMedals(): HeroMedal[] {
            return this._heroMedals;
        }

        set heroMedals(heroMedals: HeroMedal[]) {
            this._heroMedals = heroMedals;
        }
    }

    export class HeroMedal {
        private _type: HeroMedalTypes;
        private _color: HeroMedalColor;
        private _level: number;// 1~3

        constructor(type: HeroMedalTypes, color: HeroMedalColor, level: number) {
            this._type = type;
            this._color = color;
            this._level = level;
        }

        get type(): HeroMedalTypes {
            return this._type;
        }

        set type(type: HeroMedalTypes) {
            this._type = type;
        }

        get color(): HeroMedalColor {
            return this._color;
        }

        set color(color: HeroMedalColor) {
            this._color = color;
        }

        get level(): number {
            return this._level;
        }

        set level(level: number) {
            this._level = level;
        }
    }

    export enum HeroMedalTypes {
        ATTACK,
        DEFENSE,
        LIFE,
        SPEED,
        COOLTIME,
        HS_GAUGE,
        PORTAL,
        ATTR_FIRE,
        ATTR_WATER,
        ATTR_WOOD,
        STATE_STAN,
        STATE_SILENT,
        STATE_POISON
    }

    export class HeroMedalTypeModel {
        private _id: number;
        private _name: string;
        private _description: string;

        constructor(id: number, name: string, description: string) {
            this._id = id;
            this._name = name;
            this._description = description;
        }
    }
    export enum HeroMedalColor {
        WHITE,
        GREEN,
        PURPLE,
        YELLOW
    }
}
