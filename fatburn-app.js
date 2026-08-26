// ===================================================================
// 30日 脂肪燃焼ボディメイク — メインコントローラ
// 問診 → プロファイル → 30日燃焼プラン → カレンダー → 日別詳細
// 日別 = ウォームアップ → 部位トレ → 燃焼サーキット(○周) → クールダウン
// ===================================================================
import { QUESTIONS, buildProfile, planTitle, messageFor, foodFor, neatFor,
         DIET_BASICS, SWELL_CARE, SLEEP_CARE, DIET_TOOL_URL, DISCLAIMER, PREGNANCY_NOTICE, SAFETY_NOTE } from './fatburn-data.js?v=7';
import { build30Day, PHASE_INFO, repsFor } from './fatburn-program.js?v=3';
import { AREA_LABEL } from './fatburn-engine.js?v=2';
import { EX_VISUALS } from './ex-visuals.js?v=1';

const $ = s => document.querySelector(s);
const PROGRESS_KEY = 'memoro-fatburn-progress-v1';
let CURRENT_DAYS = [];

// ---- LP: ツールを開く ----
document.querySelectorAll('.js-reveal').forEach(a => a.addEventListener('click', e => {
  e.preventDefault();
  const s = $('#start'); s.hidden = false; s.scrollIntoView({ behavior:'smooth', block:'start' });
}));

// ---- 免責 ----
$('#bm-foot-disc').textContent = DISCLAIMER;
$('#bm-start-disc').textContent = '※ ' + DISCLAIMER;

// ---- 問診描画 ----
function buildQuestions(){
  const wrap = $('#bm-questions'); wrap.innerHTML = '';
  QUESTIONS.forEach((q, qi) => {
    const fs = document.createElement('fieldset'); fs.className = 'bm-q';
    const hint = q.hint ? `<p class="bm-q-hint">${q.hint}</p>` : '';
    const multi = q.type === 'multi';
    fs.innerHTML = `<legend>Q${qi+1}. ${q.q}${multi?' <span class="bm-multi">複数選択OK</span>':''}</legend>${hint}`;
    const opts = document.createElement('div'); opts.className = 'bm-opts';
    q.o.forEach(op => {
      const lab = document.createElement('label'); lab.className = 'bm-opt';
      const input = multi
        ? `<input type="checkbox" name="${q.id}" value="${op.v}">`
        : `<input type="radio" name="${q.id}" value="${op.v}">`;
      lab.innerHTML = `${input}<span>${op.t}</span>`;
      opts.appendChild(lab);
    });
    fs.appendChild(opts); wrap.appendChild(fs);
  });
  wrap.addEventListener('change', onAnswerChange);
  updateProgress();
}
function onAnswerChange(e){
  const t = e.target;
  if (t && t.name === 'safety'){
    if (t.value === 'none' && t.checked){
      document.querySelectorAll('input[name="safety"]').forEach(i => { if (i.value!=='none') i.checked=false; });
    } else if (t.value !== 'none' && t.checked){
      const none = document.querySelector('input[name="safety"][value="none"]'); if (none) none.checked=false;
    }
  }
  updateProgress();
}
function collect(){
  const ans = {};
  QUESTIONS.forEach(q => {
    if (q.type === 'multi'){
      ans[q.id] = [...document.querySelectorAll(`input[name="${q.id}"]:checked`)].map(i => i.value);
    } else {
      const sel = document.querySelector(`input[name="${q.id}"]:checked`);
      ans[q.id] = sel ? sel.value : null;
    }
  });
  return ans;
}
function isComplete(ans){
  return QUESTIONS.every(q => q.type==='multi' ? (ans[q.id] && ans[q.id].length>0) : !!ans[q.id]);
}
function updateProgress(){
  const ans = collect();
  const total = QUESTIONS.length;
  let done = 0;
  QUESTIONS.forEach(q => { if (q.type==='multi' ? (ans[q.id] && ans[q.id].length) : ans[q.id]) done++; });
  $('#bm-progress-bar').style.width = (done/total*100) + '%';
  const txt = $('#bm-progress-text');
  if (done >= total){ txt.textContent = 'すべて回答できました ✓ プランを作成できます'; txt.classList.add('bm-ready'); }
  else { txt.textContent = `${done} / ${total} 問`; txt.classList.remove('bm-ready'); }
}

// ---- 生成 ----
$('#bm-generate').addEventListener('click', async () => {
  const ans = collect();
  if (!isComplete(ans)){ alert('すべての質問にお答えください。'); return; }
  const profile = buildProfile(ans);
  const days = profile.pregnant
    ? build30Day({ focusAreas:[], minutes:10, level:'beginner', careOnly:true })
    : build30Day(profile);
  await runAnalyzing();   // 解析リング＋項目チェックの演出（診断→結果の"間"）
  renderPlan(profile, days, profile.pregnant);
  const r = $('#bm-result'); r.hidden = false; r.scrollIntoView({ behavior:'smooth', block:'start' });
});

// 解析中の演出（進捗リング0→100% ＋ 診断項目の順次チェック）
function runAnalyzing(){
  return new Promise(resolve => {
    const items = ['体のバランスと現在地', '気になる部位のクセ', '運動のレベル', 'むくみ・巡り', '生活リズム'];
    const ov = document.createElement('div');
    ov.className = 'analyzing-ov';
    ov.innerHTML = `
      <div class="az-card">
        <div class="az-ring">
          <svg viewBox="0 0 80 80"><circle class="az-track" cx="40" cy="40" r="34"/><circle class="az-prog" cx="40" cy="40" r="34"/></svg>
          <span class="az-pct">0%</span>
        </div>
        <p class="az-title">あなたの体を解析しています</p>
        <ul class="az-list">${items.map((t) => `<li><span class="az-check"></span>${t}</li>`).join('')}</ul>
      </div>`;
    document.body.appendChild(ov);
    requestAnimationFrame(() => ov.classList.add('in'));
    ov.querySelectorAll('.az-list li').forEach((li, i) => setTimeout(() => li.classList.add('done'), 380 + i * 330));
    const pctEl = ov.querySelector('.az-pct'), progEl = ov.querySelector('.az-prog');
    let p = 0;
    const tick = setInterval(() => {
      p = Math.min(100, p + 2); pctEl.textContent = p + '%';
      progEl.style.strokeDashoffset = String(214 * (1 - p / 100));
      if (p >= 100) clearInterval(tick);
    }, 34);
    setTimeout(() => { ov.classList.add('out'); setTimeout(() => { ov.remove(); resolve(); }, 400); }, 2200);
  });
}
function showLoading(t){ $('#bm-loading-text').textContent = t || '処理中…'; $('#bm-loading').hidden = false; }
function hideLoading(){ $('#bm-loading').hidden = true; }

// ---- 進捗(localStorage) ----
function loadProgress(){ try { return JSON.parse(localStorage.getItem(PROGRESS_KEY) || '{}'); } catch(e){ return {}; } }
function saveProgress(p){ try { localStorage.setItem(PROGRESS_KEY, JSON.stringify(p)); } catch(e){} }
function toggleDone(day){ const p = loadProgress(); if (p[day]) delete p[day]; else p[day] = true; saveProgress(p); return p; }

const stars = n => '★'.repeat(n);

// ---- 変化の記録（before/after・端末内のみ・外部送信なし） ----
const REC_KEY = 'memoro-fatburn-record-v1';
const REC_SLOTS = [['start','開始時'],['d10','10日目'],['d20','20日目'],['d30','30日目']];
function loadRecords(){ try { return JSON.parse(localStorage.getItem(REC_KEY) || '{}'); } catch(e){ return {}; } }
function saveRecords(r){ try { localStorage.setItem(REC_KEY, JSON.stringify(r)); return true; } catch(e){ alert('保存容量が上限に達しました。古い写真を削除してから保存してください。'); return false; } }
function compressImage(file, cb){
  const img = new Image(); const url = URL.createObjectURL(file);
  img.onload = () => {
    const maxW = 440, sc = Math.min(1, maxW/img.width);
    const w = Math.round(img.width*sc), h = Math.round(img.height*sc);
    const cv = document.createElement('canvas'); cv.width=w; cv.height=h;
    cv.getContext('2d').drawImage(img, 0, 0, w, h);
    URL.revokeObjectURL(url);
    cb(cv.toDataURL('image/jpeg', 0.72));
  };
  img.onerror = () => { URL.revokeObjectURL(url); alert('この画像は読み込めませんでした。JPEG/PNGでお試しください。'); };
  img.src = url;
}
function renderRecords(){
  const recs = loadRecords();
  const slotsEl = document.querySelector('#bm-rec-slots'); if(!slotsEl) return;
  slotsEl.innerHTML = REC_SLOTS.map(([k,label]) => {
    const has = recs[k];
    return `<div class="bm-rec-slot${has?' has':''}" data-slot="${k}">
      ${has ? `<img src="${has}" alt="${label}"><button class="bm-rec-del" data-del="${k}" title="削除">×</button>` : `<span class="bm-rec-plus">＋</span>`}
      <span class="bm-rec-label">${label}</span></div>`;
  }).join('');
  slotsEl.querySelectorAll('.bm-rec-slot').forEach(el => {
    el.addEventListener('click', ev => {
      if (ev.target.classList.contains('bm-rec-del')) return;
      const k = el.dataset.slot;
      const inp = document.createElement('input'); inp.type='file'; inp.accept='image/*';
      inp.onchange = e => { const f = e.target.files[0]; if(!f) return; compressImage(f, durl => { const r = loadRecords(); r[k] = durl; if(saveRecords(r)) renderRecords(); }); };
      inp.click();
    });
  });
  slotsEl.querySelectorAll('.bm-rec-del').forEach(b => {
    b.addEventListener('click', ev => { ev.stopPropagation(); const r = loadRecords(); delete r[b.dataset.del]; saveRecords(r); renderRecords(); });
  });
  const cmp = document.querySelector('#bm-rec-compare'); if(!cmp) return;
  const filled = REC_SLOTS.filter(([k]) => recs[k]);
  cmp.innerHTML = filled.length>=2
    ? `<p class="bm-rec-cmp-ttl">Before → After</p><div class="bm-rec-compare">${filled.map(([k,label])=>`<figure><img src="${recs[k]}" alt="${label}"><figcaption>${label}</figcaption></figure>`).join('')}</div>`
    : '';
}

// ---- 達成率・連続日数 ----
function calcStats(){
  const prog = loadProgress();
  const doneDays = Object.keys(prog).filter(k => prog[k]).map(Number).sort((a,b)=>a-b);
  const count = doneDays.length;
  const pct = Math.round(count/30*100);
  let maxStreak=0, cur=0, prev=null;
  for (const d of doneDays){ cur = (prev!==null && d===prev+1) ? cur+1 : 1; if (cur>maxStreak) maxStreak=cur; prev=d; }
  return { count, pct, maxStreak };
}
function statsMessage(pct){
  if (pct>=100) return '30日完走、おめでとうございます！ 最高の一日を、自信を持って。';
  if (pct>=90)  return '完走目前！ ここまで来たら、あと少し。';
  if (pct>=60)  return 'ゴールが見えてきました。習慣になってきましたね。';
  if (pct>=30)  return 'いい調子！ 半分に向けて、この勢いで。';
  if (pct>0)    return 'いいスタート。1日ずつ積み上げていきましょう。';
  return 'まずはDay1をひらいて、今日から始めましょう。';
}
function renderStats(){
  const el = document.querySelector('#bm-stats'); if(!el) return;
  const { count, pct, maxStreak } = calcStats();
  el.innerHTML = `
    <div class="bm-stats-row">
      <div class="bm-stat"><b>${count}<small>/30</small></b><span>完了した日</span></div>
      <div class="bm-stat"><b>${pct}<small>%</small></b><span>達成率</span></div>
      <div class="bm-stat"><b>${maxStreak}<small>日</small></b><span>最長連続</span></div>
    </div>
    <div class="bm-stats-bar"><i style="width:${pct}%"></i></div>
    <p class="bm-stats-msg">${statsMessage(pct)}</p>`;
}

// ---- プラン描画 ----
function renderPlan(profile, days, pregnant){
  CURRENT_DAYS = days;
  const prog = loadProgress();
  const title = pregnant ? 'やさしいマタニティ・ケアプラン' : planTitle(profile);
  const focusLabels = profile.focusAreas.map(a => AREA_LABEL[a]).filter(Boolean).join('・');
  const chipLabels = profile.focusAreas.map(a => AREA_LABEL[a]).filter(Boolean);
  const focusChips = (chipLabels.length ? chipLabels : ['全身をバランスよく']).map(l => `<span class="dx-chip">${l}</span>`).join('');

  const phaseCards = [1,2,3].map(p => {
    const info = PHASE_INFO[p];
    const range = p===1 ? '1-10' : p===2 ? '11-20' : '21-30';
    return `<div class="bm-phase bm-phase-${p}"><span class="bm-phase-en">PHASE ${p}</span>
      <h4>${info.name}<small>Day ${range}</small></h4><p>${info.note}</p></div>`;
  }).join('');

  const cal = days.map(d => {
    const done = prog[d.day] ? ' bm-done' : '';
    const kind = d.isRest ? ' bm-rest' : (d.taper ? ' bm-taper' : '');
    const label = d.isRest ? '休息' : (d.circuit ? stars(d.burnLevel) : 'ケア');
    return `<button class="bm-cell bm-phase-b${d.phase}${kind}${done}" data-day="${d.day}">
      <span class="bm-cell-day">${d.day}</span><span class="bm-cell-label">${label}</span></button>`;
  }).join('');

  const pregNotice = pregnant ? `<div class="bm-notice">${PREGNANCY_NOTICE}</div>` : '';
  const safetyNotes = (profile.safety||[]).filter(s => SAFETY_NOTE[s]).map(s => `<li>${SAFETY_NOTE[s]}</li>`).join('');
  const safetyBlock = safetyNotes
    ? `<div class="bm-block"><h4>あなたへの注意ポイント</h4><ul class="bm-safety">${safetyNotes}</ul></div>` : '';

  const dietHtml = DIET_BASICS.map(x =>
    `<div class="bm-diet-item"><span class="bm-diet-icon">${x.icon}</span><div class="bm-diet-txt"><b>${x.title}</b><p>${x.body}</p></div></div>`).join('');
  const swellHtml = SWELL_CARE.map(x =>
    `<div class="bm-diet-item"><span class="bm-diet-icon">${x.icon}</span><div class="bm-diet-txt"><b>${x.title}</b><p>${x.body}</p></div></div>`).join('');
  const sleepHtml = SLEEP_CARE.map(x =>
    `<div class="bm-diet-item"><span class="bm-diet-icon">${x.icon}</span><div class="bm-diet-txt"><b>${x.title}</b><p>${x.body}</p></div></div>`).join('');

  $('#bm-result-body').innerHTML = `
    <section class="result-hero">
      <div class="rh-visual">
        <img src="assets/result-visual.png?v=2" alt="" onerror="this.closest('.rh-visual').classList.add('no-img')">
        <span class="rh-script">your body care</span>
      </div>
      <div class="rh-body">
        <p class="announce">YOUR 30-DAY FAT BURN</p>
        <h2 class="type-name">${title}</h2>
        <div class="dx-chips">${focusChips}</div>
        <p class="type-desc">${focusLabels ? focusLabels+'を重点に、' : ''}30日間・1日約${profile.minutes}分・自宅でOKのプランができました。</p>
      </div>
    </section>
    <p class="lx-sec-note">脂肪は全身から燃え、選んだ部位は鍛えて形を整えます（特定の部位だけを落とすことはできません）。続けるほど、全身がすっきり引き締まります。</p>
    ${pregNotice}
    <div class="bm-phases">${phaseCards}</div>
    ${safetyBlock}
    <div class="bm-block bm-stats-block">
      <h4>あなたの30日</h4>
      <div id="bm-stats"></div>
    </div>
    <div class="bm-block">
      <h4>30日カレンダー</h4>
      <p class="bm-cal-help">日付をタップでその日のメニュー。<b>★＝燃焼度</b>（Phaseが進むほど上がります）。7・14・21・28日目は休息日です。</p>
      <div class="bm-cal">${cal}</div>
    </div>
    <div class="bm-block bm-diet">
      <h4>🔥 脂肪燃焼を後押しする「食事の基本」</h4>
      <p class="bm-cal-help">脂肪を落とすいちばんの土台は食事です。運動と両輪で。まずはできる1つから。</p>
      <div class="bm-diet-grid">${dietHtml}</div>
      <a class="bm-diet-cta" href="${DIET_TOOL_URL}" target="_blank" rel="noopener">
        <span class="bm-diet-cta-body"><b>📷 もっと正確に、写真で食事管理</b><span>脂肪を落とす主役は「食事」。撮るだけでカロリー・栄養がわかる無料の食事診断へ。</span></span>
        <span class="bm-diet-cta-arrow">→</span>
      </a>
    </div>
    <div class="bm-block bm-diet bm-swell">
      <h4>💧 当日きれいに魅せる「むくみ・巡りケア」</h4>
      <p class="bm-cal-help">脂肪と違い、むくみは1〜3日で見た目が変わります。挙式前の1週間は、ここをとくに意識して。</p>
      <div class="bm-diet-grid">${swellHtml}</div>
    </div>
    <div class="bm-block bm-diet bm-sleep">
      <h4>😴 燃える体をつくる「睡眠・回復」</h4>
      <p class="bm-cal-help">睡眠は、脂肪燃焼と美肌の土台。ホルモンが整い、日中の食欲も安定します。まずは早く寝る日を1日つくることから。</p>
      <div class="bm-diet-grid">${sleepHtml}</div>
    </div>
    <div class="bm-block bm-record">
      <h4>📸 変化を記録する</h4>
      <p class="bm-cal-help">開始時・10日・20日・30日で写真を残すと、変化がひと目でわかります。<b>🔒 写真は端末内だけに保存</b>され、外部には送信されません。</p>
      <div class="bm-rec-slots" id="bm-rec-slots"></div>
      <div id="bm-rec-compare"></div>
    </div>
    <div class="bm-actions"><button class="lx-btn lx-btn-ghost" id="bm-restart">もう一度作る</button></div>
    <p class="pc-disclaimer">${DISCLAIMER}</p>
  `;

  $('#bm-result-body').querySelectorAll('.bm-cell').forEach(b => {
    b.addEventListener('click', () => openDay(+b.dataset.day));
  });
  $('#bm-restart').addEventListener('click', () => {
    $('#bm-result').hidden = true; $('#start').scrollIntoView({ behavior:'smooth', block:'start' });
  });
  renderRecords();
  renderStats();
}

// ---- 種目カード ----
function exerciseCard(ex, phase, taper, kind='strength'){
  const cleanStep = h => h
    .replace(/[、。]?\s*各?\d+\s*(回|秒|カウント|歩)(\s*×\s*\d+\s*セット)?\s*。?\s*$/, '。')
    .replace(/各?\d+\s*(回|秒|カウント|歩)。?\s*(反対も|左右交互|逆も|反対側も)/, '$2')
    .replace(/。。+/g,'。');
  const how = (ex.how||[]).map(cleanStep).filter(h => h && h!=='。').map(h => `<li>${h}</li>`).join('');
  const cues = ex.cues ? `<p class="bm-cue"><b>◎</b> ${ex.cues.do||''}　<b>×</b> ${ex.cues.dont||''}</p>` : '';
  const presc = kind==='plain' ? (ex.duration||'') : repsFor(ex, phase, taper, kind==='circuit');
  const body = `<div class="bm-ex-body">
      <div class="bm-ex-head"><h5>${ex.name}</h5><span class="bm-ex-presc">${presc}</span></div>
      ${ex.purpose ? `<p class="bm-ex-purpose">${ex.purpose}</p>` : ''}
      <ol class="bm-ex-how">${how}</ol>
      ${cues}
    </div>`;
  const vis = EX_VISUALS[ex.id];
  if (vis){   // 新ビジュアル（連続動作イラスト＋図解）を全幅表示
    return `<div class="bm-ex bm-ex-rich">
    <div class="ex-vis"><img src="${vis.img}?v=1" alt="${ex.name}の連続動作" loading="lazy"><svg class="ex-vis-ovl" viewBox="${vis.vb}" preserveAspectRatio="none" aria-hidden="true">${vis.overlay}</svg></div>
    ${body}
  </div>`;
  }
  return `<div class="bm-ex">
    <div class="bm-ex-illust">${ex.illustration || ''}</div>
    ${body}
  </div>`;
}

// ---- 日別詳細 ----
function openDay(day){
  const d = CURRENT_DAYS.find(x => x.day === day); if (!d) return;
  const info = PHASE_INFO[d.phase];
  const done = !!loadProgress()[day];

  const wu = (d.warmup||[]).map(ex => exerciseCard(ex, d.phase, d.taper, 'plain')).join('');
  const st = (d.strength||[]).map(ex => exerciseCard(ex, d.phase, d.taper, 'strength')).join('');
  const cd = (d.cooldown||[]).map(ex => exerciseCard(ex, d.phase, d.taper, 'plain')).join('');
  let circuitHtml = '';
  if (d.circuit && d.circuit.exercises.length){
    const cir = d.circuit.exercises.map(ex => exerciseCard(ex, d.phase, d.taper, 'circuit')).join('');
    circuitHtml = `<div class="bm-day-sec bm-circuit-sec">
      <h4>🔥 燃焼サーキット <small>${d.circuit.rounds}周・種目間レスト${d.circuit.rest}</small></h4>
      <p class="bm-circuit-note">下の種目を続けて行い、1周したら軽く休んで繰り返します。止まらず続けるほど燃えます。</p>
      ${cir}</div>`;
  }

  $('#bm-day-body').innerHTML = `
    <div class="bm-day-head bm-phase-b${d.phase}">
      <span class="bm-day-phase">PHASE ${d.phase}・${info.name}${d.burnLevel ? `　燃焼度 ${stars(d.burnLevel)}` : ''}</span>
      <h3>Day ${d.day}${d.isRest ? '　休息日' : ''}</h3>
      <p class="bm-day-msg">${messageFor(d.day)}</p>
    </div>
    ${wu ? `<div class="bm-day-sec"><h4>ウォームアップ</h4>${wu}</div>` : ''}
    ${st ? `<div class="bm-day-sec"><h4>部位トレ</h4>${st}</div>` : ''}
    ${circuitHtml}
    ${cd ? `<div class="bm-day-sec"><h4>クールダウン</h4>${cd}</div>` : ''}
    <div class="bm-day-food"><b>🍽 今日の食事ワンポイント</b><p>${foodFor(d.day)}</p></div>
    <div class="bm-day-neat"><b>👟 今日のプラス運動</b><p>${neatFor(d.day)}</p></div>
    <button class="lx-btn ${done ? 'lx-btn-ghost' : 'lx-btn-green'} bm-done-btn" id="bm-done-btn">
      ${done ? '✓ 完了済み（取り消す）' : '今日の分を完了にする'}
    </button>
  `;
  $('#bm-done-btn').addEventListener('click', () => {
    toggleDone(day);
    const cell = document.querySelector(`.bm-cell[data-day="${day}"]`);
    if (cell) cell.classList.toggle('bm-done', !!loadProgress()[day]);
    openDay(day);
    renderStats();
  });
  $('#bm-day-modal').hidden = false;
  document.body.style.overflow = 'hidden';
}
function closeDay(){ $('#bm-day-modal').hidden = true; document.body.style.overflow = ''; }
$('#bm-day-close').addEventListener('click', closeDay);
$('#bm-day-modal').addEventListener('click', e => { if (e.target === $('#bm-day-modal')) closeDay(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !$('#bm-day-modal').hidden) closeDay(); });

buildQuestions();
