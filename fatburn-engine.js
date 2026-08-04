// ===================================================================
// 30日 脂肪燃焼ボディメイク — 種目プール生成エンジン
// 既存3DB(personal=自重筋トレ主軸 / pilates=コア / seitai=ほぐし)を
// 「筋トレ(部位引き締め) / 燃焼サーキット(全身) / ウォームアップ・CD」の
// 3役に仕分け、花嫁×自宅×脂肪燃焼に安全キュレーションする。
// ===================================================================
import { DB_PERSONAL } from './db-personal.js';
import { DB_PILATES } from './db-pilates.js';
import { DB_SEITAI } from './db-seitai.js';
import { DB_CARDIO } from './db-cardio.js';

// personalを先頭＝筋トレ主軸。pilates(コア)・seitai(ほぐし)・cardio(低衝撃有酸素)で補完
const ALL = [...DB_PERSONAL, ...DB_PILATES, ...DB_SEITAI, ...DB_CARDIO];
export const BY_ID = Object.fromEntries(ALL.map(e => [e.id, e]));

// --- 部位ラベル ---
export const AREA_LABEL = {
  arm:'二の腕', back:'背中・肩甲骨', decolte:'デコルテ・バスト',
  waist:'ウエスト・お腹', hip_leg:'ヒップ・脚',
};

// 引き締めトレ対象部位 → 既存bodyPart
const AREA_BODYPARTS = {
  arm:     ['arm'],
  back:    ['back','shoulder'],
  decolte: ['chest','shoulder'],
  waist:   ['core','spine'],
  hip_leg: ['leg','hip','hamstring'],
};
// 大筋群＝燃焼サーキット向き（多関節・消費が大きい）
const BIG_MUSCLE = ['leg','hip','core','fullbody','whole','back','chest'];

// --- 花嫁×自宅 安全フィルタ ---
const OK_EQUIP = new Set(['なし','マット','壁','椅子','ソファ/椅子','タオル','クッション']);
// ジャンプ・高衝撃有酸素は除外（サーキット化=筋トレを連続で回して心拍を上げる方式にする）
const NG_TECH = new Set(['plyometric','cardio']);
// 花嫁が自宅で無理・危険な上級自重／要バー懸垂系を除外（サーキット有効な低衝撃種目は残す）
const EXCLUDE_IDS = new Set([
  'pt_pseudo_planche','pt_dive_bomber','pt_dragon_flag_prep','pt_l_sit_progression',
  'pt_archer_pushup','pt_diamond_pushup','pt_decline_pushup','pt_pike_pushup','pt_pike_holds',
  'pt_shrimp_squat','pt_skater_squat','pt_pistol_progression','pt_reverse_nordic',
  'pt_dead_hang','pt_inverted_row','pt_scapular_pullup','pt_wall_walk','pt_hanging_knee_raise',
]);

function equipOk(eq){ return !eq || OK_EQUIP.has(eq); }
function safe(ex, safety){
  if (EXCLUDE_IDS.has(ex.id)) return false;
  if (NG_TECH.has(ex.technique)) return false;
  if (!equipOk(ex.equipment)) return false;
  if (ex.intensity >= 4) return false;   // 中強度(3)まで許可＝脂肪燃焼に必要な負荷を確保
  // 体の不安部位: 高強度(3)の負担種目だけ除外（低〜中強度は残してトレは継続できるように）
  if (safety && safety.length && ex.intensity >= 3){
    if (safety.includes('waist') && (ex.bodyPart==='spine' || /反ら|エクステンション|コブラ|ローカスト|スーパーマン|ボウ|キャメル|ホロウ|ロシアンツイスト/.test(ex.name))) return false;
    if (safety.includes('knee') && (ex.bodyPart==='leg' || /ランジ|ピストル|シュリンプ|ジャンプ/.test(ex.name))) return false;
    if (safety.includes('shoulder') && (ex.bodyPart==='shoulder' || ex.bodyPart==='chest' || /プッシュ|プランク|ダウンドッグ|ディップ/.test(ex.name))) return false;
  }
  return true;
}

// --- 役割分類 ---
const MOBILITY_TECH = new Set(['stretch','release','mobility','breathing','breath','meditation','massage','pranayama']);
export function isMobility(ex){
  return ex.category==='selfcare' || ex.category==='mobility' || ex.category==='breath'
    || MOBILITY_TECH.has(ex.technique);
}
export function isStrength(ex){ return !isMobility(ex); }               // 筋トレ(strength/core/balance/isometric)
export function isCircuit(ex){ return isStrength(ex) && BIG_MUSCLE.includes(ex.bodyPart); } // 全身・大筋群
export function isAerobic(ex){ return ex.technique === 'cardio_low'; }  // 低衝撃有酸素（心拍を上げる）
// むくみ流し（当日前ピーキングでクールダウンに優先配置）: 脚上げ・カーフポンプ・リンパ・足首
const DRAINAGE_IDS = new Set(['st_legs_up_wall','st_calf_pump','st_calf_roll','st_calf_stretch','st_neck_drain','st_neck_drain_breath','st_ankle_circles','st_ankle_mobility']);
export function isDrainage(ex){ return DRAINAGE_IDS.has(ex.id); }

function addUnique(map, list){ list.forEach(ex => { if (!map.has(ex.id)) map.set(ex.id, ex); }); }

// ===== プール生成 =====
// focusAreas: 引き締めたい部位(Q4)
export function buildFatburnPool(focusAreas, safety=[]){
  const strength = new Map();  // 部位フォーカスの引き締め筋トレ
  const circuit  = new Map();  // 全身の燃焼サーキット
  const warmup   = new Map();  // ウォームアップ／クールダウン（ほぐし）

  // 1) 筋トレ：選択部位の strength を集める
  (focusAreas||[]).forEach(a => {
    const parts = new Set(AREA_BODYPARTS[a] || []);
    addUnique(strength, ALL.filter(ex => safe(ex, safety) && isStrength(ex) && parts.has(ex.bodyPart)));
  });
  // 少なければ全身の大筋群トレで補完
  if (strength.size < 6){
    addUnique(strength, ALL.filter(ex => safe(ex, safety) && isStrength(ex) && BIG_MUSCLE.includes(ex.bodyPart)));
  }

  // 2) 燃焼サーキット：全身・大筋群の多関節種目（部位問わず広く）
  addUnique(circuit, ALL.filter(ex => safe(ex, safety) && isCircuit(ex)));

  // 3) ウォームアップ／クールダウン：軽いストレッチ・可動域（強度低め）
  addUnique(warmup, ALL.filter(ex => safe(ex, safety) && isMobility(ex) && ex.intensity <= 2));

  return {
    strength: [...strength.values()],
    circuit:  [...circuit.values()],
    warmup:   [...warmup.values()],
  };
}

// UI用: プール統計
export function poolStats(focusAreas){
  const p = buildFatburnPool(focusAreas);
  return { strength:p.strength.length, circuit:p.circuit.length, warmup:p.warmup.length };
}
