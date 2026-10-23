import { InvalidArgumentException } from "@/lib/cpsdm/exceptions/InvalidArgumentException.ts";
import CardProperties from "./CardProperties.ts";
// TODO: 全文字に対して型を指定する
export namespace CardType {
  /**
   * Common card properties
   */
  export interface Common {
    /** カードID */
    readonly ID: number;
    /** カード名 */
    readonly Name: string;
    /** 説明文 */
    readonly Description: string;
    /** 公式説明文 */
    readonly OfficialDescription: string;
    /** 属性 */
    readonly Attribute: CardProperties.Attribute;
    /** レアリティ */
    readonly Rarity: CardProperties.Rarity;
    /** クールタイム */
    readonly CoolTime: number;
    /** 入手可能ランク */
    readonly Rank: CardProperties.Rank;
    /** コラボID */
    readonly CollaboId: number;
    /** 発動時間 */
    readonly InvokeTime: CardProperties.InvokeTime;
    /** カードステータス */
    readonly Status: CardProperties.Status;
    /** 1レベル当たりのカードステータス上昇率 */
    readonly StatusLvUP: CardProperties.Status;
    /** 検索キーワード */
    readonly keywords: string[];
    /** カードカテゴリ */
    readonly Types: CardProperties.Type[];
  }

  /**
   * 防御カード
   */
  export interface Barrier extends Common {
    /** 防御率 */
    readonly BarrierCutValue: number;
    /** 効果時間 */
    readonly BarrierTime: number;
    /** 回復 */
    readonly BarrierHeal: boolean;
  }

  /**
   * 強化カード
   */
  export interface Buff extends Common {
    /** 強化タイプ */
    readonly BuffTypes: CardProperties.BuffType[];
    /** 強化の値 */
    readonly BuffValues: number[];
    /** 効果時間 */
    readonly BuffTime: number;
    /** 強化対象 */
    readonly BuffTarget: CardProperties.Target;
    /** 強化対象の範囲 */
    readonly BuffRange: CardProperties.EffectArea;
    /** 付属効果 */
    readonly BuffEffect: CardProperties.EffectType;
  }

  /**
   * Debuff card properties
   */
  export interface Debuff extends Common {
    /** Debuff types */
    readonly DebuffTypes: CardProperties.DebuffType[];
    /** Debuff values */
    readonly DebuffValues: number[];
    /** Debuff time */
    readonly DebuffTime: number;
    /** Debuff target */
    readonly DebuffTarget: CardProperties.Target;
    /** Debuff range */
    readonly DebuffRange: CardProperties.EffectArea;
    /** Debuff effect */
    readonly DebuffEffect: CardProperties.EffectType;
  }

  /**
   * Heal card properties
   */
  export interface Heal extends Common {
    /** 回復量 */
    readonly HealValue: number;
    /** 回復対象 */
    readonly HealTarget: CardProperties.Target;
    /** 回復範囲 */
    readonly HealArea: CardProperties.EffectArea;
    /** 回復時間(0=瞬間) */
    readonly HealTime: number;
    /** 状態異常回復 */
    readonly HealClearEffect: boolean;
  }

  /**
   * Reflect card properties
   */
  export interface Reflect extends Common {
    /** Reflect attack value */
    readonly ReflectAttackValue: number;
    /** Reflect type */
    readonly ReflectType: CardProperties.ReflectType;
  }

  /**
   * Teleport card properties
   */
  export interface Teleport extends Common {
    /** Teleport type */
    readonly TeleportType: CardProperties.TeleportType;
    /** Teleport effect */
    readonly TeleportEffect: CardProperties.EffectType;
    /** Teleport attack value */
    readonly TeleportAttackValue: number;
    /** Teleport effect value */
    readonly TeleportEffectValue: number;
    /** Teleport effect time */
    readonly TeleportEffectTime: number;
  }

  /**
   * Weapon card properties
   */
  export interface Weapon extends Common {
    /** Weapon type */
    readonly WeaponType: CardProperties.Type;
    /** Weapon attack value */
    readonly WeaponAttackValue: number;
    /** Weapon effect */
    readonly WeaponEffect: CardProperties.EffectType;
    /** Weapon effect value */
    readonly WeaponEffectValue: number;
    /** Weapon effect time */
    readonly WeaponEffectTime: number;
  }

  /**
   * Trap card properties
   */
  export interface Trap extends Common {
    /** Effect type */
    readonly EffectType: CardProperties.EffectType;
    /** Effect value */
    readonly EffectValue: number;
    /** Effect time */
    readonly EffectTime: number;
  }

  /**
   * Belt card properties
   */
  export interface Belt extends Common {
    /** Belt effect type */
    readonly BeltEffectType: CardProperties.EffectType;
    /** Belt effect value */
    readonly BeltEffectValue: number;
    /** Belt effect time */
    readonly BeltEffectTime: number;
    /** Belt available time */
    readonly BeltAvailableTime: number;
  }

  /**
   * Wall card properties
   */
  export interface Wall extends Common {
    /** Wall effect type */
    readonly WallEffectType: CardProperties.EffectType;
    /** Wall effect value */
    readonly WallEffectValue: number;
    /** Wall effect time */
    readonly WallEffectTime: number;
    /** Wall available time */
    readonly WallAvailableTime: number;
  }

  /**
   * 打消し(除)
   */
  export interface EraseBuffs extends Common {
    /** 打ち消す対象 */
    readonly Target: CardProperties.Target;
    /** 打ち消す範囲 */
    readonly Range: CardProperties.EffectArea;
    /** ガードブレイク */
    readonly GuardBreak: boolean;
  }

  /**
   * 妨害
   */
  export interface Interference extends Common {
    /** 妨害対象 */
    readonly Target: CardProperties.Target;
    /** 妨害範囲 */
    readonly Range: CardProperties.EffectArea;
    /** 妨害効果 */
    readonly Effect: CardProperties.EffectType;
    /** 妨害時間 */
    readonly Time: number;
  }
  /** 閃光 */
  export interface Flash {

  }
}
