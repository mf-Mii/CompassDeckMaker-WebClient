import { CardType } from "./CardTypes";
import {Hero} from "./Hero";

export class Deck {
    /**
     * デッキのID
     * @type {string} UUID
     * @private
     */
    private readonly _id: string;
    private _cards: CardType.Common[];
    /**
     * デッキのカードの状態をユーザーの所持カードと同期するか
     * @private {boolean}
     */
    private _sync_userCardStatus: boolean = false;
    private _name: string = "New Deck";
    private _description: string = "";
    private _hero: Hero | null = null;
    private _levelLock: number | null = null;// レベル固定(null: レベル固定なし, 1~99: レベル固定)
    /**
     * デッキの作成
     * @param id デッキのID(UUID)
     * @param cards カードの配列(4枚)
     * @param sync_userCardStatus デッキのカードの状態をユーザーの所持カードと同期するか
     * @param name デッキの名前
     * @param description デッキの説明
     * @param hero デッキのヒーロー
     */
    constructor(id :string, cards: CardType.Common[], sync_userCardStatus: boolean = false,name: string = "New Deck", description: string = "", hero: Hero | null = null) {
        if (cards.length > 4) throw new Error("Deck cannot have more than 4 cards");
        this._id = id;
        this._cards = cards;
        this._sync_userCardStatus = sync_userCardStatus;
        this._name = name;
        this._description = description;
        this._hero = hero;
    }

    /**
     * デッキのID
     * @returns {string} UUID
     */
    get id(): string {
        return this._id;
    }

    setCard(index: number, card: CardType.Common) {
        if (index < 0 || index > 3) throw new Error("Index out of range");
        this._cards[index] = card;
    }

    set cards(cards: CardType.Common[]) {
        if (cards.length > 4) throw new Error("Deck cannot have more than 4 cards");
        this._cards = cards;
    }

    get cards(): CardType.Common[] {
        return this._cards;
    }

    get sync_userCardStatus(): boolean {
        return this._sync_userCardStatus;
    }

    set sync_userCardStatus(sync_userCardStatus: boolean) {
        this._sync_userCardStatus = sync_userCardStatus;
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get description(): string {
        return this._description;
    }

    set description(description: string) {
        this._description = description;
    }

    get hero(): Hero | null {
        return this._hero;
    }

    set hero(hero: Hero | null) {
        this._hero = hero;
    }
}
