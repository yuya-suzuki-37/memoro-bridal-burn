/* ============================================================
   Memoro 共通ゲート v2 — 各ブートキャンプの先頭で読み込む"鍵穴"
   メール ＋ 共通パスワード方式（名簿にいる人だけ通す）

   使い方（各 index.html の <body> 先頭あたり）:
     <script>window.MEMORO_AUTH={
       api:'https://memoro-auth.<あなた>.workers.dev',  // 認証WorkerのURL
       product:'kogao',                                  // この講座のID（kogao/posture/fatburn/yoga/pilates）
       title:'30日間 小顔ケア ブートキャンプ'            // ログイン画面の見出し
     }</script>
     <script src="gate.js"></script>

   ・認証OKになるまでページ本体を隠し、ログイン画面をかぶせる
   ・ログインは「メール＋共通パスワード」。名簿から消された人・期限切れの人は入れない
   ・トークンは端末内(localStorage)に保存。開くたびにサーバーへ再照合するので
     「名簿から削除 → 次に開いた瞬間ロック」が効く
   ・api 未設定なら「開発モード」で素通り（ローカル制作中に邪魔しない）
   ・api:'demo' は Worker不要のデモ。admin.html と同じブラウザなら名簿が連動
     （デモの共通パスワードは "demo"）
   ============================================================ */
(function () {
  const cfg = window.MEMORO_AUTH || {};
  const API = (cfg.api || '').replace(/\/$/, '');
  const PRODUCT = cfg.product || '';
  const TITLE = cfg.title || 'Memoro ブートキャンプ';
  const LS = 'memoro_auth_token';
  const DEMO = API === 'demo';
  const DEMO_LS = 'memoro_demo_roster';   // admin.html と共有する疑似名簿

  // 開発モード: api 未設定なら素通り（ローカル制作の邪魔をしない）
  if (!API) { console.warn('[Memoro gate] MEMORO_AUTH.api 未設定 → 開発モードで素通り'); return; }

  // ---- デモ用の名簿照合（本番は同じ判定をWorkerが行う）----
  const normEmail = (e) => String(e || '').trim().toLowerCase();
  function isExpired(exp) { if (!exp) return false; const t = Date.parse(exp + 'T23:59:59+09:00'); return isFinite(t) && Date.now() > t; }
  function planAllows(plan, product) {
    if (!product) return true;
    if (plan === 'all' || plan === '*') return true;
    return String(plan || '').split(',').map((s) => s.trim()).includes(product);
  }
  function demoEntry(email) { try { return JSON.parse(localStorage.getItem(DEMO_LS) || '{}')[normEmail(email)] || null; } catch (e) { return null; } }
  function demoCheck(email) {   // 名簿にいて・期限内・この講座OKなら true
    const en = demoEntry(email);
    return !!(en && !isExpired(en.expires) && planAllows(en.plan, PRODUCT));
  }

  // ---- オーバーレイ（本体を隠すログイン画面）----
  const gate = document.createElement('div');
  gate.id = 'memoro-gate';
  gate.innerHTML = `
    <style>
      #memoro-gate{ position:fixed; inset:0; z-index:2147483647;
        background:linear-gradient(180deg,#FAF6F1,#F3ECE3);
        display:flex; align-items:center; justify-content:center; padding:24px;
        font-family:"Zen Kaku Gothic New",-apple-system,"Hiragino Kaku Gothic ProN","Noto Sans JP",sans-serif;
        color:#33302B; letter-spacing:.02em; }
      #memoro-gate *{ box-sizing:border-box; }
      #memoro-gate .mg-card{ width:min(420px,92vw); background:#fff;
        border:1px solid #E7DED2; border-radius:22px; padding:38px 30px 34px;
        box-shadow:0 24px 60px -30px rgba(80,60,40,.4); text-align:center; }
      #memoro-gate .mg-brand{ font-family:"Shippori Mincho",serif; font-size:1.5rem;
        letter-spacing:.28em; text-indent:.28em; margin-bottom:.3em; }
      #memoro-gate .mg-kicker{ font-size:.62rem; letter-spacing:.4em; color:#9A794F; text-indent:.4em; }
      #memoro-gate .mg-title{ font-family:"Shippori Mincho",serif; font-weight:600;
        font-size:1.15rem; margin:22px 0 6px; line-height:1.5; }
      #memoro-gate .mg-lead{ font-size:.8rem; color:#6B645B; line-height:1.7; margin-bottom:22px; }
      #memoro-gate .mg-field{ margin-bottom:12px; }
      #memoro-gate input{ width:100%; font-family:inherit; font-size:1rem; color:#33302B;
        padding:14px 16px; border:1.5px solid #E7DED2; border-radius:12px; background:#FFFDFA;
        text-align:center; letter-spacing:.08em; }
      #memoro-gate input:focus{ outline:none; border-color:#B4936A; background:#fff; }
      #memoro-gate .mg-btn{ width:100%; font-family:inherit; font-size:1rem; font-weight:500;
        letter-spacing:.08em; color:#fff; background:#B4936A; border:none; border-radius:100px;
        padding:15px; cursor:pointer; transition:.2s; box-shadow:0 12px 26px -14px #9A794F; margin-top:4px; }
      #memoro-gate .mg-btn:hover{ background:#9A794F; }
      #memoro-gate .mg-btn:disabled{ background:#D8CDBE; box-shadow:none; cursor:wait; }
      #memoro-gate .mg-err{ color:#C0563F; font-size:.82rem; margin-top:12px; min-height:1.2em; }
      #memoro-gate .mg-note{ font-size:.7rem; color:#9A897A; margin-top:20px; line-height:1.7; }
      #memoro-gate .mg-spin{ display:inline-block; width:16px; height:16px; vertical-align:-3px;
        border:2px solid rgba(255,255,255,.5); border-top-color:#fff; border-radius:50%;
        animation:mg-rot .8s linear infinite; margin-right:8px; }
      @keyframes mg-rot{ to{ transform:rotate(360deg); } }
    </style>
    <div class="mg-card">
      <div class="mg-kicker">MEMORO</div>
      <div class="mg-brand">Memoro</div>
      <div class="mg-title">${TITLE}</div>
      <p class="mg-lead">受講者ページです。<br>ご登録のメールと、お渡ししたパスワードを入力してください。</p>
      <form id="mg-form" autocomplete="on">
        <div class="mg-field"><input id="mg-email" type="email" placeholder="メールアドレス" autocomplete="email" enterkeyhint="next"></div>
        <div class="mg-field"><input id="mg-pw" type="password" placeholder="パスワード" autocomplete="current-password" enterkeyhint="go"></div>
        <button class="mg-btn" id="mg-go" type="submit">ログイン</button>
      </form>
      <div class="mg-err" id="mg-err"></div>
      <p class="mg-note">メール・パスワードは購入者の方にお渡ししています。<br>お手元にない場合はご連絡ください。</p>
    </div>`;

  function mount() {
    document.documentElement.style.overflow = 'hidden';
    (document.body || document.documentElement).appendChild(gate);
  }
  function unlock() { gate.remove(); document.documentElement.style.overflow = ''; }
  const $ = (s) => gate.querySelector(s);

  // ---- トークン検証（開くたびに実行。サーバーで名簿を再照合）----
  async function verify(token) {
    if (DEMO) { const em = String(token || '').startsWith('demo:') ? token.slice(5) : ''; return em ? demoCheck(em) : false; }
    try {
      const r = await fetch(`${API}/verify`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, product: PRODUCT }),
      });
      return (await r.json()).ok === true;
    } catch (e) { return false; }
  }

  function bindForm() {
    const btn = $('#mg-go'), email = $('#mg-email'), pw = $('#mg-pw'), err = $('#mg-err'), form = $('#mg-form');
    async function submit() {
      const em = email.value.trim(), password = pw.value.trim();
      if (!em) { email.focus(); return; }
      if (!password) { pw.focus(); return; }
      btn.disabled = true; err.textContent = '';
      btn.innerHTML = '<span class="mg-spin"></span>確認中…';

      if (DEMO) {
        var cpw = 'demo';
        try { cpw = JSON.parse(localStorage.getItem('memoro_demo_pw') || '{}')[PRODUCT] || 'demo'; } catch (e) {}
        if (password === cpw && demoCheck(em)) { localStorage.setItem(LS, 'demo:' + normEmail(em)); unlock(); return; }
        const en = demoEntry(em);
        err.textContent = (en && isExpired(en.expires)) ? 'サポート期間が終了しました'
          : (en && !planAllows(en.plan, PRODUCT)) ? 'この講座の受講権がありません'
          : 'メールアドレスまたはパスワードが違います';
        btn.disabled = false; btn.textContent = 'ログイン'; pw.focus(); return;
      }
      try {
        const r = await fetch(`${API}/login`, {
          method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: em, password, product: PRODUCT }),
        });
        const j = await r.json();
        if (j.ok && j.token) { localStorage.setItem(LS, j.token); unlock(); return; }
        err.textContent = j.error || 'ログインできませんでした';
      } catch (e) {
        err.textContent = '通信エラーです。電波の良い場所で再度お試しください。';
      }
      btn.disabled = false; btn.textContent = 'ログイン';
    }
    btn.addEventListener('click', (e) => { e.preventDefault(); submit(); });
    form.addEventListener('submit', (e) => { e.preventDefault(); submit(); });
    email.focus();
  }

  // ---- 起動: 既存トークンを検証 → OKなら素通り、NGならログイン画面 ----
  (async () => {
    mount();
    const token = localStorage.getItem(LS);
    if (token && (await verify(token))) { unlock(); return; }
    localStorage.removeItem(LS);
    bindForm();
  })();
})();
