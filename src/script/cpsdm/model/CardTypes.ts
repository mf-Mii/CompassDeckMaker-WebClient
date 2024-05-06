import "../exceptions/InvalidArgumentException";
import CardProperties from "./CardProperties";
export namespace CardType {
    /**
     * @private
     */
    export abstract class Common {
        /**
         * カードID
         */
        private readonly _ID: number;
        /**
         * カード名
         */
        private readonly _Name: string;
        /**
         * 説明文
         */
        private readonly _description: string;
        /**
         * 公式説明文
         */
        private readonly _officialDescription: string;
        /**
         * 属性
         */
        private readonly _Attribute: CardProperties.Attribute;
        /**
         * レアリティ
         */
        private readonly _Rarity: CardProperties.Rarity;
        /**
         * クールタイム
         */
        private readonly _CT: number;
        /**
         * 入手可能ランク
         */
        private readonly _Rank: CardProperties.Rank;
        /**
         * コラボイベントの種類(恒常、シーズンの場合はNONE)
         */
        private readonly _EventType: CardProperties.EventType;
        /**
         * 発動時間
         */
        private readonly _InvokeTime: CardProperties.InvokeTime;
        /**
         * カードのステータス
         */
        private readonly _Status: CardProperties.Status;
        /**
         * カードLvUP時の上昇値
         */
        private readonly _StatusLvUP: CardProperties.Status;
        /**
         * カードの別名、検索ワード
         */
        private readonly _keywords: string[];
        /**
         * カードのカテゴリ
         */
        private readonly Category: CardProperties.Category;

        /**
         * カードの基本情報
         * @param ID カードID
         * @param NAME カード名
         * @param description 説明文
         * @param officialDescription 公式説明文
         * @param ATTRIBUTE 属性
         * @param Rarity レアリティ
         * @param CT クールタイム
         * @param RANK 入手可能ランク
         * @param EventType コラボイベントの種類(恒常、シーズンの場合はNONE)
         * @param InvokeTime 発動時間
         * @param Status カードのステータス
         * @param StatusLvUP カードLvUP時の上昇値
         * @param keywords カードの別名、検索ワード
         * @param Category カードのカテゴリ
         */

        protected constructor(ID: number, NAME: string, description: string, officialDescription: string,
                              ATTRIBUTE: CardProperties.Attribute, Rarity: CardProperties.Rarity, CT: number, RANK: CardProperties.Rank,
                              EventType: CardProperties.EventType, InvokeTime: CardProperties.InvokeTime, Status: CardProperties.Status,
                              StatusLvUP: CardProperties.Status ,keywords: string[], Category: CardProperties.Category) {
            this._ID = ID;
            this._Name = NAME;
            this._description = description;
            this._officialDescription = officialDescription;
            this._Attribute = ATTRIBUTE;
            this._Rarity = Rarity;
            this._CT = CT;
            this._Rank = RANK;
            this._EventType = EventType;
            this._InvokeTime = InvokeTime;
            this._Status = Status;
            this._StatusLvUP = StatusLvUP;
            this._keywords = keywords;
            this.Category = Category;
        }

        /**
         * カードID
         * @return {number}
         */
        public get ID(): number {
            return this._ID;
        }

        /**
         * カード名
         * @return {string}
         */
        public get Name(): string {
            return this._Name;
        }

        /**
         * 説明文
         * @return {string}
         */
        public get Description(): string {
            return this._description;
        }

        /**
         * 公式の説明文
         * @return {string}
         */
        public get OfficialDescription(): string {
            return this._officialDescription;
        }

        /**
         * 属性
         * @return {CardProperties.Attribute}
         */
        public get Attribute(): CardProperties.Attribute {
            return this._Attribute;
        }

        /**
         * レアリティ
         * @return {CardProperties.Rarity}
         */
        public get Rarity(): CardProperties.Rarity {
            return this._Rarity;
        }

        /**
         * クールタイム
         * @return {number}
         */
        public get CoolTime(): number {
            return this._CT;
        }

        /**
         * 入手可能ランク
         * @return {CardProperties.Rank}
         */
        public get Rank(): CardProperties.Rank {
            return this._Rank;
        }

        /**
         * コラボイベントの種類(恒常、シーズンの場合はNONE)
         * @return {CardProperties.EventType}
         */
        public get EventType(): CardProperties.EventType {
            return this._EventType;
        }

        /**
         * 発動時間
         * @return {CardProperties.InvokeTime}
         */
        public get InvokeTime(): CardProperties.InvokeTime {
            return this._InvokeTime;
        }

        /**
         * カードのステータス
         * @return {CardProperties.Status}
         */
        public get Status(): CardProperties.Status {
            return this._Status;
        }

        /**
         * カードLvUP時の上昇値
         * @return {CardProperties.Status}
         */
        public get StatusLvUP(): CardProperties.Status {
            return this._StatusLvUP;
        }

        /**
         * カードの別名、検索ワード
         * @return [string]
         */
        public get keywords(): string[] {
            return this._keywords;
        }
    }

    /**
     * 防御カード
     */
    export class Barrier extends Common {
        /**
         * 防御率(0.0~1.0)
         */
        private readonly _barrierCutValue: number;
        /**
         * 防御時間(秒)
         */
        private readonly _barrierTime: number;
        /**
         * 回復効果があるか(妻系統)
         */
        private readonly _isBarrierHeal: boolean;

        constructor(ID: number, NAME: string, description: string, officialDescription: string,
                    ATTRIBUTE: CardProperties.Attribute, Rarity: CardProperties.Rarity, CT: number, RANK: CardProperties.Rank,
                    EventType: CardProperties.EventType, InvokeTime: CardProperties.InvokeTime, StatusLvUP: CardProperties.Status, Status: CardProperties.Status,
                    keywords: string[],
                    barrierCutValue: number, barrierTime: number, barrierHeal: boolean) {
            super(ID, NAME, description, officialDescription, ATTRIBUTE, Rarity, CT, RANK, EventType, InvokeTime,
                Status, StatusLvUP, keywords, CardProperties.Category.BARRIER);
            this._barrierCutValue = barrierCutValue;
            this._barrierTime = barrierTime;
            this._isBarrierHeal = barrierHeal;
        }

        /**
         * 防御率(0.0~1.0)
         * 1.0 = 100%カット(ディバ全)
         * @return {number} 0.0~1.0
         */
        public get BarrierCutValue(): number {
            return this._barrierCutValue;
        }

        /**
         * 防御効果時間
         * @return {number} 秒
         */
        public get BarrierTime(): number {
            return this._barrierTime;
        }

        /**
         * 回復効果があるか(妻系統)
         * @return {boolean}
         */
        public get IsBarrierHeal(): boolean {
            return this._isBarrierHeal;
        }
    }

    /**
     * 強化カード
     */
    export class Buff extends Common {
        private readonly _buffTypes: CardProperties.BuffType[];// 最大3
        private readonly _buffValues: number[];//float 0.0~1.0%
        private readonly _buffTime: number;//-1 = 単発
        private readonly _buffEffect: CardProperties.EffectType;
        /**
         * 強化の効果対象
         */
        private readonly _buffTarget: CardProperties.Target;
        /**
         * 強化の対象を中心とした効果範囲
         */
        private readonly _buffRange: CardProperties.EffectArea;

        constructor(ID: number, NAME: string, description: string, officialDescription: string,
                    ATTRIBUTE: CardProperties.Attribute, Rarity: CardProperties.Rarity, CT: number, RANK: CardProperties.Rank,
                    EventType: CardProperties.EventType, InvokeTime: CardProperties.InvokeTime, StatusLvUP: CardProperties.Status, Status: CardProperties.Status,
                    keywords: string[], buffTypes: CardProperties.BuffType[], buffValues: number[], buffTime: number,
                    buffTarget: CardProperties.Target, buffRange: CardProperties.EffectArea, buffEffect: CardProperties.EffectType) {
            super(ID, NAME, description, officialDescription, ATTRIBUTE, Rarity, CT,
                RANK, EventType, InvokeTime, Status, StatusLvUP, keywords, CardProperties.Category.BUFF);
            this._buffTypes = buffTypes;
            this._buffValues = buffValues;
            this._buffTime = buffTime;
            this._buffTarget = buffTarget;
            this._buffRange = buffRange;
            this._buffEffect = buffEffect;
        }

        /**
         * 強化の種類
         * インデックスはbuffValuesと対応
         * @return [CardProperties.BuffType] 最大3
         */
        public get BuffTypes(): CardProperties.BuffType[] {
            return this._buffTypes;
        }

        /**
         * 強化の量(%, 0.0~1.0)
         * インデックスはbuffTypesと対応
         * @return [number] 最大3
         */
        public get BuffValues(): number[] {
            return this._buffValues;
        }

        /**
         * 強化の効果時間(-1 = 単発)
         * @return {number} 秒
         */
        public get BuffTime(): number {
            return this._buffTime;
        }

        /**
         * 強化の対象
         * @return {CardProperties.Target}
         */
        public get BuffTarget(): CardProperties.Target {
            return this._buffTarget;
        }

        /**
         * 強化の範囲
         */
        public get BuffRange(): CardProperties.EffectArea {
            return this._buffRange;
        }

        /**
         * 強化の追加効果
         */
        public get BuffEffect(): CardProperties.EffectType {
            return this._buffEffect;
        }
    }

    /**
     * 弱体化カード
     */
    export class Debuff extends Common {
        private readonly _debuffTypes: CardProperties.DebuffType[];// 最大3
        private readonly _debuffValues: number[];//float 0.0~1.0%
        private readonly _debuffTime: number;//-1 = 単発
        private readonly _debuffEffect: CardProperties.EffectType;
        /**
         * 弱体化の効果対象
         */
        private readonly _debuffTarget: CardProperties.Target;
        /**
         * 弱体化の対象を中心とした効果範囲
         */
        private readonly _debuffRange: CardProperties.EffectArea;

        constructor(ID: number, NAME: string, description: string, officialDescription: string,
                    ATTRIBUTE: CardProperties.Attribute, Rarity: CardProperties.Rarity, CT: number, RANK: CardProperties.Rank,
                    EventType: CardProperties.EventType, InvokeTime: CardProperties.InvokeTime, StatusLvUP: CardProperties.Status, Status: CardProperties.Status,
                    keywords: string[], debuffTypes: CardProperties.DebuffType[], debuffValues: number[], debuffTime: number,
                    debuffTarget: CardProperties.Target, debuffRange: CardProperties.EffectArea, debuffEffect: CardProperties.EffectType) {
            super(ID, NAME, description, officialDescription, ATTRIBUTE, Rarity, CT,
                RANK, EventType, InvokeTime, Status, StatusLvUP, keywords, CardProperties.Category.DEBUFF);
            this._debuffTypes = debuffTypes;
            this._debuffValues = debuffValues;
            this._debuffTime = debuffTime;
            this._debuffTarget = debuffTarget;
            this._debuffRange = debuffRange;
            this._debuffEffect = debuffEffect;
        }

        /**
         * 弱体化の種類
         * インデックスはdebuffValuesと対応
         * @return [CardProperties.DebuffType] 最大3
         */
        public get DebuffTypes(): CardProperties.DebuffType[] {
            return this._debuffTypes;
        }

        /**
         * 弱体化の量(%, 0.0~1.0)
         * インデックスはdebuffTypesと対応
         * @return [number] 最大3
         */
        public get DebuffValues(): number[] {
            return this._debuffValues;
        }

        /**
         * 弱体化の効果時間(-1 = 単発)
         * @return {number} 秒
         */
        public get DebuffTime(): number {
            return this._debuffTime;
        }

        /**
         * 弱体化の対象
         * @return {CardProperties.Target}
         */
        public get DebuffTarget(): CardProperties.Target {
            return this._debuffTarget;
        }

        /**
         * 弱体化の範囲
         * @return {CardProperties.EffectArea}
         */
        public get DebuffRange(): CardProperties.EffectArea {
            return this._debuffRange;
        }

        /**
         * 弱体化の追加効果
         */
        public get DebuffEffect(): CardProperties.EffectType {
            return this._debuffEffect;
        }
    }


    /**
     * 回復カード
     */
    export class Heal extends Common {
        /**
         * 回復量(0.0~1.0)
         * @private
         */
        private readonly _healValue: number;
        /**
         * 回復対象
         * @private
         */
        private readonly _healTarget: CardProperties.Target;
        /**
         * 回復範囲
         * @private
         */
        private readonly _healArea: CardProperties.EffectArea;
        /**
         * 回復効果時間
         * -1 = 単発
         * @private
         */
        private readonly _healTime: number;

        constructor(ID: number, NAME: string, description: string, officialDescription: string,
                    ATTRIBUTE: CardProperties.Attribute, Rarity: CardProperties.Rarity, CT: number, RANK: CardProperties.Rank,
                    EventType: CardProperties.EventType, InvokeTime: CardProperties.InvokeTime, StatusLvUP: CardProperties.Status, Status: CardProperties.Status,
                    keywords: string[], healValue: number, healTarget: CardProperties.Target, healArea: CardProperties.EffectArea, healTime: number) {
            super(ID, NAME, description, officialDescription, ATTRIBUTE, Rarity, CT,
                RANK, EventType, InvokeTime, Status, StatusLvUP, keywords, CardProperties.Category.HEAL);
            if (healTarget == CardProperties.Target.ENEMY) throw new InvalidArgumentException("healTarget must not be ENEMY");
            if (healTarget == CardProperties.Target.ALLY_ENEMY) throw new InvalidArgumentException("healTarget must not be ALLY_ENEMY");
            if (healTarget == CardProperties.Target.NONE) throw new InvalidArgumentException("healTarget must not be NONE");

            if (healValue < 0 || healValue > 1) throw new InvalidArgumentException("healValue must be 0.0~1.0");
            this._healValue = healValue;
            this._healTarget = healTarget;
            this._healArea = healArea;
            this._healTime = healTime;
        }

        /**
         * 回復量(%, 0.0~1.0)
         * @return {number}
         */
        public get HealValue(): number {
            return this._healValue;
        }

        /**
         * 回復の対象
         * @return {CardProperties.Target}
         */
        public get HealTarget(): CardProperties.Target {
            return this._healTarget;
        }

        /**
         * 回復の効果範囲
         * @return {CardProperties.EffectArea}
         */
        public get HealArea(): CardProperties.EffectArea {
            return this._healArea;
        }

        /**
         * 回復の効果時間(-1 = 単発)
         * @return {number} 秒
         */
        public get HealTime(): number {
            return this._healTime;
        }
    }

    /**
     * 反射カード
     */
    export class Reflect extends Common {
        private readonly _reflectAttackValue: number;
        private readonly _reflectType: CardProperties.ReflectType;

        constructor(ID: number, NAME: string, description: string, officialDescription: string,
                    ATTRIBUTE: CardProperties.Attribute, Rarity: CardProperties.Rarity, CT: number, RANK: CardProperties.Rank,
                    EventType: CardProperties.EventType, InvokeTime: CardProperties.InvokeTime, StatusLvUP: CardProperties.Status, Status: CardProperties.Status,
                    keywords: string[], reflectAttackValue: number, reflectType: CardProperties.ReflectType) {
            super(ID, NAME, description, officialDescription, ATTRIBUTE, Rarity, CT,
                RANK, EventType, InvokeTime, Status, StatusLvUP, keywords, CardProperties.Category.REFLECT);
            this._reflectAttackValue = reflectAttackValue;
            this._reflectType = reflectType;
        }

        /**
         * 反射量(%, 0.0~)
         * @return {number}
         */
        public get ReflectAttackValue(): number {
            return this._reflectAttackValue;
        }

        /**
         * 反射の種類
         * @return {CardProperties.ReflectType}
         */
        public get ReflectType(): CardProperties.ReflectType {
            return this._reflectType;
        }
    }

    /**
     * 移動カード
     */
    export class Teleport extends Common {
        private readonly _teleportType: CardProperties.TeleportType;
        private readonly _teleportEffect: CardProperties.EffectType;
        private readonly _teleportAttackValue: number;
        private readonly _teleportEffectValue: number;
        private readonly _teleportEffectTime: number;

        constructor(ID: number, NAME: string, description: string, officialDescription: string,
                    ATTRIBUTE: CardProperties.Attribute, Rarity: CardProperties.Rarity, CT: number, RANK: CardProperties.Rank,
                    EventType: CardProperties.EventType, InvokeTime: CardProperties.InvokeTime, StatusLvUP: CardProperties.Status, Status: CardProperties.Status,
                    keywords: string[],
                    teleportType: CardProperties.TeleportType, teleportEffect: CardProperties.EffectType,
                    teleportEffectValue: number, teleportEffectTime: number,
                    teleportAttackValue: number) {
            super(ID, NAME, description, officialDescription, ATTRIBUTE, Rarity, CT,
                RANK, EventType, InvokeTime, Status, StatusLvUP, keywords, CardProperties.Category.TELEPORT);
            this._teleportType = teleportType;
            this._teleportEffect = teleportEffect;
            this._teleportEffectValue = teleportEffectValue;
            this._teleportEffectTime = teleportEffectTime;
            this._teleportAttackValue = teleportAttackValue;
        }

        /**
         * テレポートの対象を取得
         * @return {CardProperties.TeleportType}
         */
        public get TeleportType(): CardProperties.TeleportType {
            return this._teleportType;
        }

        /**
         * テレポートの追加効果を取得
         * @return {CardProperties.EffectType}
         */
        public get TeleportEffect(): CardProperties.EffectType {
            return this._teleportEffect;
        }

        /**
         * テレポート攻撃の場合、倍率を取得(0.0~)
         * @return {number|null}
         * @example 3.5
         */
        public get TeleportAttackValue(): number {
            return this._teleportAttackValue;
        }

        /**
         * テレポートの追加効果の値を取得
         * @return {number|null}
         * @example 0.5
         */
        public get TeleportEffectValue(): number {
            return this._teleportEffectValue;
        }

        /**
         * テレポートの追加効果の時間を取得
         * @return {number|null}
         * @example 5
         */
        public get TeleportEffectTime(): number {
            return this._teleportEffectTime;
        }
    }

    /**
     * ダメージカード
     */
    export class Weapon extends Common {
        private readonly _weaponType: CardProperties.Category;
        private readonly _weaponAttackValue: number;
        private readonly _weaponEffect: CardProperties.EffectType;
        private readonly _weaponEffectValue: number;
        private readonly _weaponEffectTime: number;

        constructor(ID: number, NAME: string, description: string, officialDescription: string,
                    ATTRIBUTE: CardProperties.Attribute, Rarity: CardProperties.Rarity, CT: number, RANK: CardProperties.Rank,
                    EventType: CardProperties.EventType, InvokeTime: CardProperties.InvokeTime, StatusLvUP: CardProperties.Status, Status: CardProperties.Status,
                    keywords: string[],
                    weaponType: CardProperties.Category, weaponAttackValue: number, weaponEffect: CardProperties.EffectType,
                    weaponEffectValue: number, weaponEffectTime: number) {
            super(ID, NAME, description, officialDescription, ATTRIBUTE, Rarity, CT,
                RANK, EventType, InvokeTime, Status, StatusLvUP, keywords, weaponType);
            this._weaponType = weaponType;
            this._weaponAttackValue = weaponAttackValue;
            this._weaponEffect = weaponEffect;
            this._weaponEffectValue = weaponEffectValue;
            this._weaponEffectTime = weaponEffectTime;
        }

        /**
         * カードの種類を取得
         */
        public get WeaponType(): CardProperties.Category {
            return this._weaponType;
        }

        /**
         * カードの攻撃量を取得
         * @return {number} 0.0~
         */
        public get WeaponAttackValue(): number {
            return this._weaponAttackValue;
        }

        /**
         * カードの追加効果を取得
         * @return {CardProperties.EffectType}
         */
        public get WeaponEffect(): CardProperties.EffectType {
            return this._weaponEffect;
        }

        /**
         * カードの追加効果の値を取得
         */
        public get WeaponEffectValue(): number {
            return this._weaponEffectValue;
        }

        /**
         * カードの追加効果の時間を取得
         */
        public get WeaponEffectTime(): number {
            return this._weaponEffectTime;
        }
    }

    export class Trap extends Common {
        private readonly _effectType: CardProperties.EffectType;
        private readonly _effectValue: number;
        private readonly _effectTime: number;

        constructor(ID: number, NAME: string, description: string, officialDescription: string,
                    ATTRIBUTE: CardProperties.Attribute, Rarity: CardProperties.Rarity, CT: number, RANK: CardProperties.Rank,
                    EventType: CardProperties.EventType, InvokeTime: CardProperties.InvokeTime, StatusLvUP: CardProperties.Status, Status: CardProperties.Status,
                    keywords: string[],
                    effectType: CardProperties.EffectType, effectValue: number, effectTime: number) {
            super(ID, NAME, description, officialDescription, ATTRIBUTE, Rarity, CT,
                RANK, EventType, InvokeTime, Status, StatusLvUP, keywords, CardProperties.Category.TRAP);
            this._effectType = effectType;
            this._effectValue = effectValue;
            this._effectTime = effectTime;
        }

        /**
         * トラップの効果を取得
         * @return {CardProperties.EffectType}
         */
        public get EffectType(): CardProperties.EffectType {
            return this._effectType;
        }

        /**
         * トラップの効果量を取得
         * @return {number}
         */
        public get EffectValue(): number {
            return this._effectValue;
        }

        /**
         * トラップの効果時間を取得
         * @return {number}
         */
        public get EffectTime(): number {
            return this._effectTime;
        }
    }

    export class Belt extends Common {
        private readonly _beltEffectType: CardProperties.EffectType;
        private readonly _beltEffectValue: number;
        private readonly _beltEffectTime: number;
        private readonly _beltAvailableTime: number;
        constructor(ID: number, NAME: string, description: string, officialDescription: string,
                    ATTRIBUTE: CardProperties.Attribute, Rarity: CardProperties.Rarity, CT: number, RANK: CardProperties.Rank,
                    EventType: CardProperties.EventType, InvokeTime: CardProperties.InvokeTime, StatusLvUP: CardProperties.Status, Status: CardProperties.Status,
                    keywords: string[],
                    beltEffectType: CardProperties.EffectType, beltEffectValue: number, beltEffectTime: number, beltAvailableTime: number) {
            super(ID, NAME, description, officialDescription, ATTRIBUTE, Rarity, CT,
                RANK, EventType, InvokeTime, Status, StatusLvUP, keywords, CardProperties.Category.BELT);
            this._beltEffectType = beltEffectType;
            this._beltEffectValue = beltEffectValue;
            this._beltEffectTime = beltEffectTime;
            this._beltAvailableTime = beltAvailableTime;
        }

        /**
         * ベルトの効果を取得
         */
        public get BeltEffectType(): CardProperties.EffectType {
            return this._beltEffectType;
        }

        /**
         * ベルトの効果量を取得
         */
        public get BeltEffectValue(): number {
            return this._beltEffectValue;
        }

        /**
         * ベルトの効果時間を取得
         */
        public get BeltEffectTime(): number {
            return this._beltEffectTime;
        }

        /**
         * ベルトの有効時間を取得
         */
        public get BeltAvailableTime(): number {
            return this._beltAvailableTime;
        }
    }

    export class Wall extends Common {
        private readonly _wallEffectType: CardProperties.EffectType;
        private readonly _wallEffectValue: number;
        private readonly _wallEffectTime: number;
        private readonly _wallAvailableTime: number;
        constructor(ID: number, NAME: string, description: string, officialDescription: string,
                    ATTRIBUTE: CardProperties.Attribute, Rarity: CardProperties.Rarity, CT: number, RANK: CardProperties.Rank,
                    EventType: CardProperties.EventType, InvokeTime: CardProperties.InvokeTime, StatusLvUP: CardProperties.Status, Status: CardProperties.Status,
                    keywords: string[],
                    wallEffectType: CardProperties.EffectType, wallEffectValue: number, wallEffectTime: number, wallAvailableTime: number) {
            super(ID, NAME, description, officialDescription, ATTRIBUTE, Rarity, CT,
                RANK, EventType, InvokeTime, Status, StatusLvUP, keywords, CardProperties.Category.WALL);
            this._wallEffectType = wallEffectType;
            this._wallEffectValue = wallEffectValue;
            this._wallEffectTime = wallEffectTime;
            this._wallAvailableTime = wallAvailableTime;
        }


        /**
         * 壁の効果を取得
         */
        public get WallEffectType(): CardProperties.EffectType {
            return this._wallEffectType;
        }

        /**
         * 壁の効果量を取得
         */
        public get WallEffectValue(): number {
            return this._wallEffectValue;
        }

        /**
         * 壁の効果時間を取得
         */
        public get WallEffectTime(): number {
            return this._wallEffectTime;
        }

        /**
         * 壁の有効時間を取得
         */
        public get WallAvailableTime(): number {
            return this._wallAvailableTime;
        }
    }
}
