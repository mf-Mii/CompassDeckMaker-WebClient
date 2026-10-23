import {CardProperties} from "../model/CardProperties.ts";
import Attribute = CardProperties.Attribute;
import TeleportType = CardProperties.TeleportType;
import Rank = CardProperties.Rank;
import EventType = CardProperties.CollaboType;
import InvokeTime = CardProperties.InvokeTime;
import Category = CardProperties.Type;
import EffectType = CardProperties.EffectType;
import Rarity = CardProperties.Rarity;
import type {CardType} from "@/lib/cpsdm/model/CardTypes.ts";

const createWeapon = (
    ID: number,
    Name: string,
    Description: string,
    OfficialDescription: string,
    AttributeValue: Attribute,
    RarityValue: Rarity,
    CoolTime: number,
    RankValue: Rank,
    CollaboId: EventType,
    InvokeTimeValue: InvokeTime,
    Status: CardProperties.Status,
    StatusLvUP: CardProperties.Status,
    keywords: string[],
    WeaponType: Category,
    WeaponAttackValue: number,
    WeaponEffect: EffectType,
    WeaponEffectValue: number,
    WeaponEffectTime: number,
): CardType.Weapon => ({
    ID, Name, Description, OfficialDescription,
    Attribute: AttributeValue, Rarity: RarityValue, CoolTime,
    Rank: RankValue, CollaboId, InvokeTime: InvokeTimeValue,
    Status, StatusLvUP, keywords, Types: [WeaponType],
    WeaponType, WeaponAttackValue, WeaponEffect, WeaponEffectValue, WeaponEffectTime,
});

const createTeleport = (
    ID: number,
    Name: string,
    Description: string,
    OfficialDescription: string,
    AttributeValue: Attribute,
    RarityValue: Rarity,
    CoolTime: number,
    RankValue: Rank,
    CollaboId: EventType,
    InvokeTimeValue: InvokeTime,
    Status: CardProperties.Status,
    StatusLvUP: CardProperties.Status,
    keywords: string[],
    TeleportType: TeleportType,
    TeleportEffect: EffectType,
    TeleportAttackValue: number,
    TeleportEffectValue: number,
    TeleportEffectTime: number,
): CardType.Teleport => ({
    ID, Name, Description, OfficialDescription,
    Attribute: AttributeValue, Rarity: RarityValue, CoolTime,
    Rank: RankValue, CollaboId, InvokeTime: InvokeTimeValue,
    Status, StatusLvUP, keywords, Types: [Category.TELEPORT],
    TeleportType, TeleportEffect, TeleportAttackValue,
    TeleportEffectValue, TeleportEffectTime,
});

const AllCards: (CardType.Weapon | CardType.Teleport)[] = [
    createWeapon(1, '祭りのお供！手持ち花火', "前方に約250%の攻撃", "前方に攻撃（小ダメージ）", Attribute.FIRE, Rarity.N, 16, Rank.F, EventType.NONE, InvokeTime.NONE, {
        Attack: 1.897959183673469,
        Defense: 0.6122448979591837,
        Physical: 12.36734693877551
    }, {
        Attack: 55,
        Defense: 18,
        Physical: 363
    }, [], Category.WEAPON_NEAR, 2.5, EffectType.NONE, 0, 0),
    createWeapon(2, '血塗れチェーンソウ', "前方に約250%の攻撃", "前方に攻撃（小ダメージ）", Attribute.WATER, Rarity.N, 16, Rank.F, EventType.NONE, InvokeTime.NONE, {
        Attack: 1.897959183673469,
        Defense: 0.6122448979591837,
        Physical: 12.36734693877551
    }, {
        Attack: 43,
        Defense: 17,
        Physical: 512
    }, [], Category.WEAPON_NEAR, 2.5, EffectType.NONE, 0, 0),
    createTeleport(21, 'エナジー缶 500ml', "ライフ60％回復でスタート位置に戻る",
        "ライフ60％回復でスタート位置に戻る", Attribute.WATER, Rarity.N, 20, Rank.F, EventType.NONE,
        InvokeTime.SHORT, {
            Attack: 0.1525423728813559,
            Defense: 0.0677966101694915,
            Physical: 1.457627118644068,
        }, {
            Attack: 4,
            Defense: 2,
            Physical: 43,
        }, ["エナ缶"], TeleportType.RESPAWN, EffectType.NONE, 0, 0, 0),
    createTeleport(64, 'エナジー缶 1000ml', "ライフ60％回復でスタート位置に戻る",
        "ライフ60％回復でスタート位置に戻る", Attribute.WATER, Rarity.R, 20, Rank.D, EventType.NONE,
        InvokeTime.SHORT, {
            Attack: 0.1836734693877551,
            Defense: 0.1020408163265306,
            Physical: 1.897959183673469,
        }, {
            Attack: 5,
            Defense: 2,
            Physical: 47,
        }, ["エナ缶"], TeleportType.RESPAWN, EffectType.NONE, 0, 0, 0),
    createTeleport(122, 'エナジー缶 4000ml', "ライフ60％回復でスタート位置に戻る",
        "ライフ60％回復でスタート位置に戻る", Attribute.WATER, Rarity.SR, 20, Rank.B, EventType.NONE,
        InvokeTime.SHORT, {
            Attack: 0.2372881355932203,
            Defense: 0.1186440677966102,
            Physical: 2.423728813559322,
        }, {
            Attack: 5,
            Defense: 3,
            Physical: 51,
        }, ["エナ缶"], TeleportType.RESPAWN, EffectType.NONE, 0, 0, 0),
    createTeleport(183, 'エナジー缶 100000ml', "ライフ60％回復でスタート位置に戻る",
        "ライフ60％回復でスタート位置に戻る", Attribute.WATER, Rarity.UR, 20, Rank.S, EventType.NONE,
        InvokeTime.SHORT, {
            Attack: 0.3050847457627119,
            Defense: 0.1525423728813559,
            Physical: 3,
        }, {
            Attack: 5,
            Defense: 3,
            Physical: 55,
        }, ["エナ缶"], TeleportType.RESPAWN, EffectType.NONE, 0, 0, 0),
]

export default AllCards;
export {AllCards};
