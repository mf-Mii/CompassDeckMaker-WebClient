export namespace CardProperties {
    export interface Status {
        Attack: number;
        Defense: number;
        Physical: number;
    }
    export enum Category {
        BARRIER,//防
        BUFF,//強
        DEBUFF,//弱
        HEAL,//療
        REFLECT,//反
        TELEPORT,//移
        WEAPON_NEAR,//近
        WEAPON_FAR,//遠
        WEAPON_RANGE,//周
        WEAPON_CONSECUTIVE,//連
        WEAPON_WAVE,//波
        TRAP,//罠
        BELT,//帯
        WALL,//壁
    }

    /**
     * カードの効果の対象<br>
     * 攻撃カードは対象外(NONE)
     */
    export enum Target {
        SELF,//自分
        ALLY,//味方
        ENEMY,//敵
        ALLY_ENEMY,//全体(敵+味方)
        NONE,//なし
    }

    /**
     * カードの効果の範囲<br>
     * 攻撃カードは対象外(NONE)
     */
    export enum EffectArea {
        SELF,//単体
        FRONT,//前方
        ALL,//全体
        RANGE,//周囲
        PORTAL,//ポータル周囲
        NONE,//None
    }

    /**
     * 強化カードに関する情報
     */
    export enum BuffType {
        ATTACK,//攻撃力
        DEFENSE,//防御力
        SPEED,//移動速度
        HEAL,//攻撃分だけ回復
    }

    /**
     * 弱体化カードに関する情報
     */
    export enum DebuffType {
        ATTACK,//攻撃力
        DEFENSE,//防御力
        SPEED,//移動速度
        ALL,//全行動速度
    }

    /**
     * 反射カードに関する情報
     */
    export enum ReflectType {
        FRONT,//前方
        RANGE,//周囲
        BEHIND,//敵背後
    }

    /**
     * 移動カードに関する情報
     */
    export enum TeleportType {
        FRONT_ENEMY_BEHIND,
        NEAREST_ENEMY,
        PORTAL,
        RESPAWN
    }

    /**
     * カードの特殊効果の種類
     */
    export enum EffectType {
        /**
         * なし
         */
        NONE,
        /**
         * スタン(アバ)[止]
         */
        STAN ,
        /**
         * 通常毒(シャドウ)[毒]
         */
        POISON,
        /**
         * 接地毒(液体金属)[毒]
         */
        POISON_AREA,
        /**
         * サイレント[黙]
         */
        SILENT,
        /**
         * HP吸収(ヴァル)
         */
        STEAL_HP,
        /**
         * HS吸収(旗)
         */
        STEAL_HS,
        /**
         * フラッシュ[閃]
         */
        FLASH,
        /**
         * ガードブレイク(カノ)
         */
        GUARD_BREAK,
        /**
         * 押し出し(GB)[押]
         */
        PUSH,
        /**
         * 引き寄せ(クルエル)[引]
         */
        ATTRACT,
    }

    /**
     * カードのレアリティ
     */
    export enum Rarity {
        N,
        R,
        SR,
        UR,
    }

    /**
     * カードの属性
     */
    export enum Attribute {
        FIRE,//火
        WATER,//水
        WOOD,//木
    }

    /**
     * カードの発動時間
     */
    export enum InvokeTime {
        NONE,//無
        SHORT,//短
        LONG,//長
    }

    /**
     * カードの入手可能ランク
     */
    export enum Rank {
        F,
        E,
        D,
        C,
        B,
        A,
        S,
        /**
         * コラボイベントカード
         */
        EVENT,
        SEASON,
        /**
         * コラボ推測
         */
        SUGGEST
    }

    export enum EventType {
        NONE= -1,
        TOARU,
        TENSURA,
        NIER,
        SAO,
        OVERLORD,
        PERSONA,
        RYZA,
        BUNGO,
        FF15,
        DANMACHI,
        CHO_KABUKI,
        FATE,
        SteinsGate,
        NEKOMIYA,
        SINGEKI,
        KONOSUBA,
        DANGANRONPA,
        SATSURIKU,
        BEATLESS,
        RE_ZERO,
        THE_REFLECTION,
        STREET_FIGHTER,
        HACKA_DOLL,
        VOCALOID,
        GUILTY_GEAR,
        MUSHOKU_TENSEI,
        ROCKMAN_EXE,
    }
    export const EVENT_NAMES = {
        [EventType.NONE]: null,
        [EventType.TOARU]: 'とある科学の超電磁砲T',
        [EventType.TENSURA]: '転生したらスライムだった件',
        [EventType.NIER]: 'ニーア オートマタ',
        [EventType.SAO]: 'ソードアート・オンライン',
        [EventType.OVERLORD]: 'オーバーロード',
        [EventType.PERSONA]: 'ペルソナ5',
        [EventType.RYZA]: 'ライザのアトリエ2',
        [EventType.BUNGO]: '文豪ストレイドッグス',
        [EventType.FF15]: 'ファイナルファンタジー15',
        [EventType.DANMACHI]: 'ダンジョンに出会いを求めるのは間違っているだろうか',
        [EventType.CHO_KABUKI]: '超歌舞伎×千本桜',
        [EventType.FATE]: 'Fate/Stay Night',
        [EventType.SteinsGate]: 'STEINS;GATE',
        [EventType.NEKOMIYA]: '猫宮ひなた',
        [EventType.SINGEKI]: '進撃の巨人',
        [EventType.KONOSUBA]: 'この素晴らしい世界に祝福を！',
        [EventType.DANGANRONPA]: 'ダンガンロンパ',
        [EventType.SATSURIKU]: '殺戮の天使',
        [EventType.BEATLESS]: 'BEATLESS',
        [EventType.RE_ZERO]: 'Re:ゼロから始める異世界生活',
        [EventType.THE_REFLECTION]: 'THE REFLECTION',
        [EventType.STREET_FIGHTER]: 'ストリートファイターⅤ',
        [EventType.HACKA_DOLL]: 'ハッカドール',
        [EventType.VOCALOID]: 'VOCALOID',
        [EventType.GUILTY_GEAR]: 'ギルティギア',
        [EventType.MUSHOKU_TENSEI]: '無職転生',
        [EventType.ROCKMAN_EXE]: 'ロックマンエグゼ',
    }
}
export default CardProperties;
