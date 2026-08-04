// ===================================================================
// 30日 脂肪燃焼ボディメイク — 30日プログラム生成
// 1日 = ウォームアップ → 部位筋トレ → 全身燃焼サーキット(○周) → クールダウン
// Phase1(1-10) ならす / Phase2(11-20) 燃やす / Phase3(21-30) 仕上げる
// 週ごとにサーキット周回・レスト・テンポを漸進。7/14/21/28はアクティブレスト。
// Day27-30 は当日コンディション優先で控えめ(テーパー)。
// ===================================================================
import { buildFatburnPool, isAerobic, isDrainage } from './fatburn-engine.js?v=2';

const LEG_HIP = ['leg','hip'];   // 消費の大きい下半身大筋群（サーキットに毎回入れてcore偏重を防ぐ）

function pickLeastUsed(list, usage, count, excludeIds){
  const ex = new Set(excludeIds);
  const sorted = list.filter(e => !ex.has(e.id)).sort((a,b)=>(usage[a.id]||0)-(usage[b.id]||0));
  const picked = sorted.slice(0, count);
  if (picked.length < count){
    const rest = list.filter(e => !picked.includes(e)).sort((a,b)=>(usage[a.id]||0)-(usage[b.id]||0));
    while (picked.length < count && rest.length) picked.push(rest.shift());
  }
  return picked;
}

export const PHASE_INFO = {
  1: { name:'ならす',   en:'PREP',   note:'フォームを覚え、体を燃えやすく起こす10日間。', rounds:2, rest:'40秒' },
  2: { name:'燃やす',   en:'BURN',   note:'サーキットを増やし、脂肪燃焼を本格化する10日間。', rounds:3, rest:'30秒' },
  3: { name:'仕上げる', en:'FINISH', note:'燃焼を最大化しつつ、当日ベストへ整える10日間。', rounds:3, rest:'20秒' },
};

function burnLevelFor(phase, resting, taper){
  if (resting) return 0;
  if (taper) return 2;
  return phase; // 1→2→3 と燃焼度が上がる
}

// 回数の見せ方（Phaseで"実数"漸進：口先でなく回数・秒数・セットを実際に増やす）
// 過負荷の原則: Phaseが進むほど reps/秒/セットが実数で増える。
function parseDuration(str){
  if (!str) return { kind:'raw', raw:'' };
  const perSide = /各/.test(str);
  const setM = str.match(/×\s*(\d+)\s*セット/);
  const sets = setM ? +setM[1] : 1;
  let m;
  if ((m = str.match(/(\d+)\s*(回|歩)/))) return { kind:'reps', unit:m[2], value:+m[1], sets, perSide };
  if ((m = str.match(/(\d+)\s*秒/)))     return { kind:'sec',  value:+m[1], sets, perSide };
  return { kind:'raw', raw:str };   // 「100カウント」「1分」等の規定動作は据え置き
}
const round5 = n => Math.round(n/5)*5;

// circuit=true の種目はセット表記を出さない（強度は「周回数」と「レスト短縮」で表現するため）
export function repsFor(ex, phase, taper, circuit=false){
  const p = parseDuration(ex.duration || '');
  if (p.kind === 'raw') return p.raw || (ex.duration || '');
  const repMul = taper ? 0.85 : [1, 1.2, 1.4][phase-1];   // 回数: +0% / +20% / +40%
  const secMul = taper ? 0.85 : [1, 1.3, 1.6][phase-1];   // 秒数: +0% / +30% / +60%
  const side = p.perSide ? '各' : '';
  // セット: サーキットは0（周回で表現）／単発種目は0／部位トレは 2→3→3 で漸進
  const sets = circuit ? 0 : (p.sets <= 1 ? 0 : (taper ? 2 : [2, 3, 3][phase-1]));
  if (p.kind === 'reps'){
    const reps = Math.max(1, Math.round(p.value * repMul));
    return sets ? `${side}${reps}${p.unit} × ${sets}セット` : `${side}${reps}${p.unit}`;
  }
  const sec = Math.max(10, round5(p.value * secMul));
  return sets ? `${side}${sec}秒 × ${sets}セット` : `${side}${sec}秒`;
}

// フェーズ別の強度傾斜（過負荷の原則: 同じ刺激の反復では体は変わらない）
// 低〜中強度はPhase1、中強度はPhase2、高強度(3)はPhase3に温存して単調に上げる。
function poolForPhase(list, phase){
  const lo  = list.filter(e => (e.intensity || 1) <= 2);  // 低〜中(1-2)
  const mid = list.filter(e => (e.intensity || 1) === 2); // 中(2)
  const hi  = list.filter(e => (e.intensity || 1) >= 2);  // 中〜高(2-3・3が主役)
  if (phase === 1) return lo.length  >= 4 ? lo  : list;
  if (phase === 2) return mid.length >= 4 ? mid : (lo.length >= 4 ? lo : list);
  return hi.length >= 4 ? hi : list;                      // Phase3: 高強度で仕上げ
}

// ===== メイン: 30日生成 =====
// opts: { focusAreas:[], minutes:10|20|30, level:'beginner'|'intermediate', careOnly:false }
export function build30Day(opts){
  const { focusAreas=[], minutes=20, level='beginner', careOnly=false, safety=[] } = opts||{};
  const pool = buildFatburnPool(focusAreas, safety);
  const sList = pool.strength, cList = pool.circuit, wList = pool.warmup;

  let strengthN = minutes>=30 ? 3 : minutes>=20 ? 2 : 1;
  let circuitN  = minutes>=30 ? 4 : 3;
  if (level==='intermediate'){ strengthN += 1; circuitN += 1; }  // 運動習慣ありはしっかり増やす

  const sUsage = Object.fromEntries(sList.map(e=>[e.id,0]));
  const cUsage = Object.fromEntries(cList.map(e=>[e.id,0]));
  const wUsage = Object.fromEntries(wList.map(e=>[e.id,0]));
  const days = [];

  for (let day=1; day<=30; day++){
    const phase  = day<=10 ? 1 : day<=20 ? 2 : 3;
    const isRest = (day % 7 === 0);
    const taper  = (day >= 27);
    const pinfo  = PHASE_INFO[phase];
    const prev   = days[days.length-1];
    const prevIds = prev
      ? [...(prev.strength||[]), ...((prev.circuit&&prev.circuit.exercises)||[]), ...(prev.warmup||[]), ...(prev.cooldown||[])].map(e=>e.id)
      : [];

    let rounds = pinfo.rounds;
    if (level==='intermediate' && !isRest && !taper) rounds += 1;
    if (taper) rounds = 2;

    let warmup=[], strength=[], circuit=null, cooldown=[];

    if (careOnly){
      // 妊娠中など：筋トレ・サーキットなし。ほぐし中心
      const rest = pickLeastUsed(wList, wUsage, isRest ? 2 : 3, prevIds);
      rest.forEach(e=>wUsage[e.id]++);
      warmup = rest;
    } else if (isRest){
      // アクティブレスト：ほぐし多め、サーキットなし
      const rest = pickLeastUsed(wList, wUsage, 3, prevIds);
      rest.forEach(e=>wUsage[e.id]++);
      warmup = rest;
    } else {
      const wu = pickLeastUsed(wList, wUsage, 2, prevIds);
      wu.forEach(e=>wUsage[e.id]++);
      warmup = wu.slice(0,1); cooldown = wu.slice(1,2);
      if (day >= 24) {   // 当日前1週間: クールダウンをむくみ流し優先に（当日ピーキング）
        const drain = pickLeastUsed(wList.filter(isDrainage), wUsage, 1, [...prevIds, ...warmup.map(e=>e.id)]);
        if (drain.length){ drain.forEach(e=>wUsage[e.id]++); cooldown = drain; }
      }
      const usedW = [...warmup, ...cooldown].map(e=>e.id);
      strength = pickLeastUsed(poolForPhase(sList, phase), sUsage, strengthN, [...prevIds, ...usedW]);
      strength.forEach(e=>sUsage[e.id]++);
      // サーキット構成: ①有酸素1つ ②大筋群(脚・尻)1つ ③残りは自由
      // 心拍を上げ、消費の大きい下半身を毎回入れてcore偏重を防ぐ。
      const cExclude = [...prevIds, ...strength.map(e=>e.id)];
      const aero = pickLeastUsed(poolForPhase(cList.filter(isAerobic), phase), cUsage, 1, cExclude);
      aero.forEach(e=>cUsage[e.id]++);
      const used1 = [...cExclude, ...aero.map(e=>e.id)];
      const big = pickLeastUsed(poolForPhase(cList.filter(e=>!isAerobic(e) && LEG_HIP.includes(e.bodyPart)), phase), cUsage, 1, used1);
      big.forEach(e=>cUsage[e.id]++);
      const used2 = [...used1, ...big.map(e=>e.id)];
      const restN = Math.max(1, circuitN - 1 - big.length);
      const rest = pickLeastUsed(poolForPhase(cList.filter(e=>!isAerobic(e)), phase), cUsage, restN, used2);
      rest.forEach(e=>cUsage[e.id]++);
      const circEx = [...aero, ...big, ...rest];
      circuit = { exercises:circEx, rounds, rest:pinfo.rest };
    }

    days.push({
      day, phase, isRest, taper,
      warmup, strength, circuit, cooldown,
      burnLevel: burnLevelFor(phase, (isRest||careOnly), taper),
    });
  }
  return days;
}
