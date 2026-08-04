// ===================================================================
// SVG ILLUSTRATION LIBRARY v3 — INSTRUCTIONAL DIAGRAMS
// 「絵だけでやり方が分かる」を目標に全面リデザイン
// 各図の構成:
//   ・人間らしい認識しやすい姿勢(顔つき・肉付きした胴体・関節のある手脚)
//   ・開始姿勢=淡色ゴースト / 終了姿勢=濃色 で動きの方向を明示
//   ・赤い太矢印で動作方向
//   ・対象部位はオレンジで強調
//   ・下部に動作ラベル
// 共通: viewBox 200x200
// ===================================================================

const _DEF = `<defs>
  <marker id="mv" viewBox="0 0 12 12" refX="9" refY="6" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
    <path d="M1,1 L11,6 L1,11 z" fill="#ef4444"/>
  </marker>
  <marker id="mv2" viewBox="0 0 12 12" refX="9" refY="6" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
    <path d="M1,1 L11,6 L1,11 z" fill="#0ea5e9"/>
  </marker>
  <style>
    .limb{stroke:#334155;stroke-width:7;fill:none;stroke-linecap:round;stroke-linejoin:round}
    .limbF{stroke:#f97316;stroke-width:8;fill:none;stroke-linecap:round;stroke-linejoin:round}
    .head{fill:#fde9c8;stroke:#334155;stroke-width:2.5}
    .face{fill:#334155}
    .torso{fill:#bfdbfe;stroke:#334155;stroke-width:2.5;stroke-linejoin:round}
    .torsoF{fill:#fed7aa;stroke:#f97316;stroke-width:3;stroke-linejoin:round}
    .ghost{stroke:#cbd5e1;stroke-width:6;fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:2 7}
    .ghostH{fill:none;stroke:#cbd5e1;stroke-width:2.5;stroke-dasharray:2 5}
    .ground{stroke:#cbd5e1;stroke-width:3;fill:none;stroke-linecap:round}
    .mat{fill:#eef2f7;stroke:#d4dbe4;stroke-width:1.5}
    .arrow{stroke:#ef4444;stroke-width:3.5;fill:none;stroke-linecap:round}
    .arrowB{stroke:#0ea5e9;stroke-width:3.5;fill:none;stroke-linecap:round}
    .breath{fill:#fdb4c4;opacity:.5}
    .tool{fill:#34d399;stroke:#334155;stroke-width:2}
    .roller{fill:#22d3ee;stroke:#334155;stroke-width:2}
    .wall{fill:#e2e8f0}
    .lbl{font-size:13px;fill:#475569;font-family:-apple-system,sans-serif;font-weight:700;text-anchor:middle}
  </style>
</defs>`;

const _wrap = (inner) => `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">${_DEF}${inner}</svg>`;

// 顔つきの頭(向きを示す目つき)。dir: 'R'(右向き) 'F'(正面) 'L'(左向き)
const _head = (cx, cy, r, dir='R', cls='head') => {
  let eyes = '';
  if (dir === 'F') eyes = `<circle class="face" cx="${cx-r*0.32}" cy="${cy-2}" r="1.8"/><circle class="face" cx="${cx+r*0.32}" cy="${cy-2}" r="1.8"/>`;
  else if (dir === 'R') eyes = `<circle class="face" cx="${cx+r*0.45}" cy="${cy-1}" r="1.8"/>`;
  else eyes = `<circle class="face" cx="${cx-r*0.45}" cy="${cy-1}" r="1.8"/>`;
  return `<circle class="${cls}" cx="${cx}" cy="${cy}" r="${r}"/>${eyes}`;
};

const RAW = {

  // ============================================================
  // NECK 首
  // ============================================================
  neckTilt: _wrap(`
    <line class="ground" x1="55" y1="185" x2="145" y2="185"/>
    <path class="torso" d="M80 120 Q100 114 120 120 L126 178 L74 178 Z"/>
    <line class="limb" x1="76" y1="128" x2="62" y2="168"/>
    <line class="limb" x1="124" y1="128" x2="138" y2="168"/>
    <!-- ゴースト: まっすぐ -->
    <line class="ghost" x1="100" y1="118" x2="100" y2="76"/>
    <circle class="ghostH" cx="100" cy="58" r="16"/>
    <!-- 終了: 右に倒す -->
    <line class="limbF" x1="100" y1="118" x2="122" y2="80"/>
    ${_head(128,64,16,'F')}
    <path class="arrow" d="M118 36 Q132 44 130 60" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="200">耳を肩へ近づける</text>
  `),

  neckRotation: _wrap(`
    <line class="ground" x1="55" y1="185" x2="145" y2="185"/>
    <path class="torso" d="M80 118 Q100 112 120 118 L126 178 L74 178 Z"/>
    <line class="limb" x1="76" y1="126" x2="62" y2="168"/>
    <line class="limb" x1="124" y1="126" x2="138" y2="168"/>
    <line class="limbF" x1="100" y1="116" x2="100" y2="74"/>
    ${_head(100,56,17,'R')}
    <!-- 回転矢印 -->
    <path class="arrow" d="M64 38 Q100 22 136 38" marker-end="url(#mv)" marker-start="url(#mv)"/>
    <text class="lbl" x="100" y="200">首をゆっくり左右に向ける</text>
  `),

  neckSide: _wrap(`
    <line class="ground" x1="55" y1="185" x2="145" y2="185"/>
    <path class="torso" d="M80 120 Q100 114 120 120 L126 178 L74 178 Z"/>
    <line class="limb" x1="76" y1="128" x2="62" y2="168"/>
    <line class="limb" x1="124" y1="128" x2="138" y2="168"/>
    <line class="ghost" x1="100" y1="118" x2="100" y2="76"/>
    <!-- 伸びる側を強調 -->
    <path class="limbF" d="M100 118 Q86 96 78 80"/>
    ${_head(74,64,16,'L')}
    <path class="arrow" d="M84 38 Q70 46 72 62" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="200">首すじを伸ばす</text>
  `),

  // ============================================================
  // SHOULDER 肩
  // ============================================================
  shoulderRoll: _wrap(`
    <line class="ground" x1="55" y1="185" x2="145" y2="185"/>
    ${_head(100,44,15,'F')}
    <path class="torso" d="M78 105 Q100 99 122 105 L128 175 L72 175 Z"/>
    <line class="limb" x1="100" y1="60" x2="100" y2="105"/>
    <!-- 肩の円運動 -->
    <circle class="limbF" cx="78" cy="92" r="9" fill="none"/>
    <circle class="limbF" cx="122" cy="92" r="9" fill="none"/>
    <path class="arrow" d="M70 80 A12 12 0 1 1 68 96" marker-end="url(#mv)"/>
    <path class="arrow" d="M130 80 A12 12 0 1 0 132 96" marker-end="url(#mv)"/>
    <line class="limb" x1="78" y1="110" x2="64" y2="150"/>
    <line class="limb" x1="122" y1="110" x2="136" y2="150"/>
    <text class="lbl" x="100" y="200">肩を大きく後ろに回す</text>
  `),

  shoulderOpen: _wrap(`
    <line class="ground" x1="55" y1="185" x2="145" y2="185"/>
    ${_head(100,42,15,'F')}
    <path class="torsoF" d="M78 102 Q100 96 122 102 L126 168 L74 168 Z"/>
    <!-- 胸を開き腕を後ろへ -->
    <line class="ghost" x1="82" y1="110" x2="64" y2="140"/>
    <line class="ghost" x1="118" y1="110" x2="136" y2="140"/>
    <path class="limbF" d="M82 108 Q60 110 52 128"/>
    <path class="limbF" d="M118 108 Q140 110 148 128"/>
    <line class="limb" x1="86" y1="168" x2="80" y2="184"/>
    <line class="limb" x1="114" y1="168" x2="120" y2="184"/>
    <path class="arrow" d="M70 96 Q52 100 48 116" marker-end="url(#mv)"/>
    <path class="arrow" d="M130 96 Q148 100 152 116" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="200">胸を開いて腕を後ろへ</text>
  `),

  shoulderBlade: _wrap(`
    <line class="ground" x1="55" y1="185" x2="145" y2="185"/>
    ${_head(100,42,15,'F')}
    <path class="torso" d="M78 102 Q100 96 122 102 L126 170 L74 170 Z"/>
    <!-- 肘を引いて肩甲骨を寄せる -->
    <path class="limbF" d="M80 108 Q66 116 70 134"/>
    <path class="limbF" d="M120 108 Q134 116 130 134"/>
    <!-- 肩甲骨マーク -->
    <path class="arrow" d="M88 118 L100 118" marker-end="url(#mv)"/>
    <path class="arrow" d="M112 118 L100 118" marker-end="url(#mv)"/>
    <line class="limb" x1="86" y1="170" x2="82" y2="184"/>
    <line class="limb" x1="114" y1="170" x2="118" y2="184"/>
    <text class="lbl" x="100" y="200">肘を引き肩甲骨を寄せる</text>
  `),

  wallAngel: _wrap(`
    <rect class="wall" x="30" y="14" width="12" height="172"/>
    <line class="ground" x1="30" y1="186" x2="170" y2="186"/>
    ${_head(58,48,14,'F')}
    <path class="torso" d="M46 64 L74 64 L74 128 L46 128 Z"/>
    <!-- W→Yに腕を上下 -->
    <path class="ghost" d="M74 78 L98 64 L112 80"/>
    <path class="limbF" d="M74 96 L104 78 L120 60"/>
    <line class="limb" x1="50" y1="128" x2="50" y2="184"/>
    <line class="limb" x1="70" y1="128" x2="70" y2="184"/>
    <path class="arrow" d="M126 96 L138 60" marker-end="url(#mv)"/>
    <text class="lbl" x="108" y="200">壁に沿って腕を上下</text>
  `),

  // ============================================================
  // SPINE 背骨
  // ============================================================
  spineTwist: _wrap(`
    <line class="ground" x1="40" y1="185" x2="160" y2="185"/>
    <!-- 座位でひねる(上から見た雰囲気の腰) -->
    <ellipse class="torsoF" cx="100" cy="120" rx="34" ry="22"/>
    <line class="limb" x1="78" y1="160" x2="78" y2="182"/>
    <line class="limb" x1="122" y1="160" x2="122" y2="182"/>
    <line class="limbF" x1="100" y1="100" x2="100" y2="64"/>
    ${_head(100,50,15,'L')}
    <path class="arrow" d="M58 96 Q100 78 142 96" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="200">上半身を左右にひねる</text>
  `),

  spineFlex: _wrap(`
    <line class="ground" x1="40" y1="185" x2="160" y2="185"/>
    <!-- 背中を丸める -->
    <path class="ghost" d="M70 170 L70 90"/>
    <path class="limbF" d="M70 172 Q70 110 110 96 Q140 86 132 64"/>
    ${_head(130,52,15,'L')}
    <line class="limb" x1="70" y1="172" x2="58" y2="182"/>
    <line class="limb" x1="70" y1="172" x2="92" y2="178"/>
    <path class="arrow" d="M150 78 Q138 64 122 64" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="200">背中を丸めて伸ばす</text>
  `),

  spineExt: _wrap(`
    <line class="ground" x1="10" y1="178" x2="190" y2="178"/>
    <rect class="mat" x="10" y="173" width="180" height="8"/>
    <!-- うつ伏せから胸を反らす -->
    <path class="ghost" d="M150 168 Q110 162 60 166"/>
    ${_head(46,118,14,'L')}
    <path class="limbF" d="M58 128 Q108 150 152 162"/>
    <line class="limb" x1="64" y1="128" x2="52" y2="166"/>
    <line class="limb" x1="150" y1="162" x2="170" y2="172"/>
    <path class="arrow" d="M44 150 Q40 130 50 116" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="198">胸を起こして背中を反らす</text>
  `),

  sideStretch: _wrap(`
    <line class="ground" x1="55" y1="185" x2="145" y2="185"/>
    <!-- 体側を横に倒す -->
    <path class="ghost" d="M100 170 L100 70"/>
    <path class="torso" d="M86 118 Q100 112 116 120 L122 172 L80 172 Z"/>
    <line class="limb" x1="84" y1="172" x2="80" y2="184"/>
    <line class="limb" x1="118" y1="172" x2="122" y2="184"/>
    <!-- 伸びる側面と挙げた腕 -->
    <path class="limbF" d="M100 116 Q108 92 124 74"/>
    <path class="limbF" d="M112 84 Q132 70 142 52"/>
    ${_head(116,66,15,'R')}
    <path class="arrow" d="M150 70 Q156 88 148 104" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="200">体側を横に倒して伸ばす</text>
  `),

  catCowPose: _wrap(`
    <line class="ground" x1="10" y1="178" x2="190" y2="178"/>
    <rect class="mat" x="10" y="173" width="180" height="8"/>
    <!-- 四つ這い 背中丸める⇔反らす -->
    ${_head(44,108,14,'L')}
    <path class="ghost" d="M56 116 Q108 128 150 118"/>
    <path class="limbF" d="M56 112 Q108 86 150 114"/>
    <line class="limb" x1="60" y1="120" x2="56" y2="172"/>
    <line class="limb" x1="148" y1="120" x2="158" y2="172"/>
    <path class="arrow" d="M104 124 L104 96" marker-end="url(#mv)" marker-start="url(#mv)"/>
    <text class="lbl" x="100" y="198">背中を丸める⇔反らす</text>
  `),

  seatedTwist: _wrap(`
    <line class="ground" x1="20" y1="180" x2="180" y2="180"/>
    <rect class="mat" x="20" y="175" width="160" height="6"/>
    <!-- 床座位ねじり -->
    <line class="limb" x1="60" y1="160" x2="140" y2="160"/>
    <path class="torsoF" d="M86 110 Q100 104 114 110 L120 150 L80 150 Z"/>
    <line class="limbF" x1="100" y1="106" x2="100" y2="70"/>
    ${_head(100,56,15,'L')}
    <!-- ねじりに添える腕 -->
    <path class="limb" d="M114 120 Q130 116 124 100"/>
    <path class="arrow" d="M60 92 Q100 74 140 92" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="198">床に座って上体をねじる</text>
  `),

  // ============================================================
  // HIP / LEG / GLUTE 股関節・脚・お尻
  // ============================================================
  hipOpener: _wrap(`
    <line class="ground" x1="20" y1="180" x2="180" y2="180"/>
    <rect class="mat" x="20" y="175" width="160" height="6"/>
    <!-- 低い前屈ランジで股関節を開く -->
    ${_head(70,70,14,'R')}
    <path class="torso" d="M64 84 Q80 90 86 110 L74 120 L58 96 Z"/>
    <!-- 前脚(深く曲げる) -->
    <line class="limbF" x1="84" y1="112" x2="120" y2="120"/>
    <line class="limbF" x1="120" y1="120" x2="120" y2="170"/>
    <!-- 後ろ脚(伸ばす) -->
    <line class="limb" x1="78" y1="116" x2="40" y2="168"/>
    <line class="limb" x1="70" y1="92" x2="92" y2="116"/>
    <path class="arrow" d="M96 150 Q86 160 70 162" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="198">深いランジで股関節を開く</text>
  `),

  butterflyHip: _wrap(`
    <line class="ground" x1="30" y1="182" x2="170" y2="182"/>
    <rect class="mat" x="30" y="177" width="140" height="6"/>
    <!-- 合蹠(あぐら) 足裏を合わせる -->
    ${_head(100,66,15,'F')}
    <path class="torso" d="M86 82 Q100 76 114 82 L120 124 L80 124 Z"/>
    <!-- 開いた両脚(ひし形) -->
    <path class="limbF" d="M84 124 L60 162 L100 152 L140 162 L116 124"/>
    <!-- 足裏合わせ -->
    <ellipse cx="100" cy="154" rx="9" ry="5" fill="#fed7aa" stroke="#f97316" stroke-width="2"/>
    <path class="arrow" d="M72 138 L84 150" marker-end="url(#mv)"/>
    <path class="arrow" d="M128 138 L116 150" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="198">足裏を合わせ膝を開く</text>
  `),

  pigeonRest: _wrap(`
    <line class="ground" x1="10" y1="180" x2="190" y2="180"/>
    <rect class="mat" x="10" y="175" width="180" height="6"/>
    <!-- 鳩のポーズ 前脚を曲げ後ろ脚を伸ばす -->
    ${_head(54,96,14,'R')}
    <path class="torso" d="M50 108 Q70 116 80 134 L66 146 L42 116 Z"/>
    <!-- 前すね(横) -->
    <line class="limbF" x1="78" y1="140" x2="120" y2="150"/>
    <!-- 後ろ脚を長く伸ばす -->
    <line class="limb" x1="84" y1="138" x2="172" y2="166"/>
    <path class="arrow" d="M150 140 L172 162" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="198">前脚を曲げお尻を伸ばす</text>
  `),

  figure4: _wrap(`
    <line class="ground" x1="10" y1="180" x2="190" y2="180"/>
    <rect class="mat" x="10" y="175" width="180" height="6"/>
    <!-- 仰向け4の字 -->
    ${_head(34,128,14,'R')}
    <path class="torso" d="M48 122 L96 122 L96 150 L48 150 Z"/>
    <!-- 支持脚(膝立て) -->
    <line class="limb" x1="96" y1="134" x2="146" y2="106"/>
    <line class="limb" x1="146" y1="106" x2="146" y2="168"/>
    <!-- 4の字にかけた脚 -->
    <line class="limbF" x1="96" y1="146" x2="138" y2="124"/>
    <line class="limbF" x1="138" y1="124" x2="116" y2="84"/>
    <path class="arrow" d="M150 130 Q140 116 124 108" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="198">脚を4の字に組みお尻を伸ばす</text>
  `),

  squat: _wrap(`
    <line class="ground" x1="20" y1="185" x2="180" y2="185"/>
    <!-- ゴースト: 立位 -->
    ${_head(58,46,13,'R','ghostH')}
    <path class="ghost" d="M58 60 L58 120"/>
    <path class="ghost" d="M58 120 L56 182"/>
    <!-- 終了: しゃがむ -->
    ${_head(128,56,15,'R')}
    <path class="torsoF" d="M114 72 Q128 66 142 72 L146 110 L110 110 Z"/>
    <line class="limb" x1="114" y1="80" x2="100" y2="106"/>
    <line class="limb" x1="142" y1="80" x2="156" y2="106"/>
    <!-- 太もも水平→すね -->
    <line class="limbF" x1="112" y1="110" x2="98" y2="138"/>
    <line class="limbF" x1="98" y1="138" x2="104" y2="183"/>
    <line class="limbF" x1="144" y1="110" x2="158" y2="138"/>
    <line class="limbF" x1="158" y1="138" x2="152" y2="183"/>
    <path class="arrow" d="M82 70 Q80 100 92 130" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="200">お尻を引いてしゃがむ</text>
  `),

  squatHold: _wrap(`
    <rect class="wall" x="150" y="14" width="12" height="172"/>
    <line class="ground" x1="30" y1="186" x2="162" y2="186"/>
    <!-- 壁スクワット保持 -->
    ${_head(120,56,15,'R')}
    <path class="torsoF" d="M108 72 L148 72 L148 116 L108 116 Z"/>
    <line class="limb" x1="112" y1="86" x2="96" y2="110"/>
    <!-- 太もも水平キープ -->
    <line class="limbF" x1="110" y1="116" x2="70" y2="116"/>
    <line class="limbF" x1="70" y1="116" x2="70" y2="184"/>
    <line class="limbF" x1="140" y1="116" x2="100" y2="116"/>
    <line class="limbF" x1="100" y1="116" x2="100" y2="184"/>
    <text class="lbl" x="96" y="200">壁にもたれ空気イスでキープ</text>
  `),

  lungeStretch: _wrap(`
    <line class="ground" x1="20" y1="185" x2="180" y2="185"/>
    <!-- ランジ 前脚曲げ後ろ脚伸ばす -->
    ${_head(96,52,15,'R')}
    <path class="torso" d="M84 68 Q96 62 108 68 L112 104 L80 104 Z"/>
    <line class="limb" x1="96" y1="74" x2="108" y2="100"/>
    <!-- 前脚 -->
    <line class="limbF" x1="104" y1="104" x2="132" y2="138"/>
    <line class="limbF" x1="132" y1="138" x2="132" y2="183"/>
    <!-- 後ろ脚を長く -->
    <line class="limb" x1="86" y1="104" x2="48" y2="183"/>
    <path class="arrow" d="M68 150 L52 178" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="200">前脚を曲げ後ろ股関節を伸ばす</text>
  `),

  calfStretch: _wrap(`
    <rect class="wall" x="150" y="14" width="12" height="172"/>
    <line class="ground" x1="20" y1="186" x2="162" y2="186"/>
    <!-- 壁押し ふくらはぎ伸ばし -->
    ${_head(70,60,14,'R')}
    <path class="torso" d="M64 74 L86 92 L78 104 L56 86 Z"/>
    <path class="limb" d="M80 86 Q120 80 148 84"/>
    <!-- 前脚(曲げ) -->
    <line class="limb" x1="72" y1="100" x2="96" y2="140"/>
    <line class="limb" x1="96" y1="140" x2="96" y2="184"/>
    <!-- 後ろ脚(伸ばしてかかと押す) -->
    <line class="limbF" x1="68" y1="100" x2="44" y2="184"/>
    <path class="arrow" d="M40 168 L46 184" marker-end="url(#mv)"/>
    <text class="lbl" x="96" y="200">壁を押しふくらはぎを伸ばす</text>
  `),

  legRaise: _wrap(`
    <line class="ground" x1="10" y1="180" x2="190" y2="180"/>
    <rect class="mat" x="10" y="175" width="180" height="6"/>
    <!-- 横向きで上の脚を上げる -->
    ${_head(40,128,14,'R')}
    <path class="torso" d="M54 122 L120 122 L120 150 L54 150 Z"/>
    <!-- 下の脚 -->
    <line class="limb" x1="120" y1="146" x2="168" y2="168"/>
    <!-- 上の脚を高く(ゴースト→上) -->
    <line class="ghost" x1="120" y1="130" x2="168" y2="150"/>
    <line class="limbF" x1="120" y1="128" x2="172" y2="86"/>
    <path class="arrow" d="M150 132 Q166 112 170 92" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="198">上の脚を真上に持ち上げる</text>
  `),

  glutesPunch: _wrap(`
    <line class="ground" x1="10" y1="180" x2="190" y2="180"/>
    <rect class="mat" x="10" y="175" width="180" height="6"/>
    <!-- 四つ這いキックバック -->
    ${_head(40,104,14,'L')}
    <path class="torso" d="M52 108 Q90 100 122 112 L116 126 L48 122 Z"/>
    <line class="limb" x1="56" y1="124" x2="52" y2="172"/>
    <line class="limb" x1="84" y1="120" x2="84" y2="172"/>
    <!-- 蹴り上げる脚(ゴースト→上) -->
    <line class="ghost" x1="118" y1="118" x2="150" y2="150"/>
    <line class="limbF" x1="118" y1="116" x2="120" y2="160"/>
    <line class="limbF" x1="120" y1="160" x2="168" y2="148"/>
    <path class="arrow" d="M150 130 Q166 132 170 150" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="198">かかとを天井へ蹴り上げる</text>
  `),

  bridge: _wrap(`
    <line class="ground" x1="10" y1="180" x2="190" y2="180"/>
    <rect class="mat" x="10" y="175" width="180" height="6"/>
    <!-- 仰向けからお尻を持ち上げる -->
    ${_head(40,148,14,'R')}
    <line class="ghost" x1="54" y1="158" x2="118" y2="158"/>
    <!-- 持ち上がった胴〜お尻 -->
    <path class="limbF" d="M54 156 Q92 108 122 124"/>
    <!-- 太もも・すね -->
    <line class="limb" x1="122" y1="124" x2="150" y2="158"/>
    <line class="limb" x1="150" y1="158" x2="150" y2="176"/>
    <path class="arrow" d="M96 150 L96 112" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="198">お尻を高く持ち上げる</text>
  `),

  forwardFold: _wrap(`
    <line class="ground" x1="40" y1="185" x2="160" y2="185"/>
    <!-- 立位前屈 -->
    <line class="ghost" x1="100" y1="180" x2="100" y2="70"/>
    ${_head(100,150,14,'L')}
    <path class="limbF" d="M100 138 Q104 100 100 72"/>
    <!-- 脚(伸ばす) -->
    <line class="limbF" x1="100" y1="72" x2="96" y2="40"/>
    <line class="limb" x1="100" y1="78" x2="92" y2="180"/>
    <line class="limb" x1="100" y1="78" x2="108" y2="180"/>
    <!-- 垂れた腕 -->
    <line class="limb" x1="98" y1="142" x2="92" y2="168"/>
    <path class="arrow" d="M126 90 Q124 120 110 144" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="200">股関節から前に倒す</text>
  `),

  // ============================================================
  // CORE 体幹
  // ============================================================
  plank: _wrap(`
    <line class="ground" x1="10" y1="178" x2="190" y2="178"/>
    <rect class="mat" x="10" y="173" width="180" height="6"/>
    <line class="ghostH" x1="34" y1="116" x2="172" y2="116"/>
    ${_head(40,104,14,'R')}
    <path class="torsoF" d="M52 100 L150 110 L150 124 L52 118 Z"/>
    <!-- 前腕 -->
    <line class="limb" x1="54" y1="118" x2="44" y2="172"/>
    <line class="limb" x1="44" y1="172" x2="68" y2="172"/>
    <!-- 脚 -->
    <line class="limb" x1="150" y1="118" x2="174" y2="172"/>
    <text class="lbl" x="100" y="196">頭〜かかとを一直線にキープ</text>
  `),

  plankBasic: _wrap(`
    <line class="ground" x1="10" y1="178" x2="190" y2="178"/>
    <rect class="mat" x="10" y="173" width="180" height="6"/>
    <line class="ghostH" x1="30" y1="110" x2="174" y2="110"/>
    ${_head(38,98,14,'R')}
    <path class="torsoF" d="M50 96 L152 106 L152 120 L50 112 Z"/>
    <!-- 伸ばした腕 -->
    <line class="limb" x1="52" y1="112" x2="40" y2="172"/>
    <line class="limb" x1="152" y1="114" x2="174" y2="172"/>
    <text class="lbl" x="100" y="196">手で支え体を一直線に</text>
  `),

  sidePlank: _wrap(`
    <line class="ground" x1="10" y1="180" x2="190" y2="180"/>
    <rect class="mat" x="10" y="175" width="180" height="6"/>
    <!-- 横向き一直線 -->
    ${_head(48,70,14,'R')}
    <path class="torsoF" d="M58 80 L150 156 L142 168 L50 92 Z"/>
    <!-- 支持腕 -->
    <line class="limb" x1="58" y1="84" x2="58" y2="170"/>
    <!-- 上腕を天井へ -->
    <line class="limbF" x1="66" y1="86" x2="78" y2="40"/>
    <path class="arrow" d="M88 60 L78 42" marker-end="url(#mv)"/>
    <text class="lbl" x="110" y="196">横向きで体を一直線に支える</text>
  `),

  deadBugBase: _wrap(`
    <line class="ground" x1="10" y1="180" x2="190" y2="180"/>
    <rect class="mat" x="10" y="175" width="180" height="6"/>
    <!-- 仰向け 対角の手脚を伸ばす -->
    ${_head(40,120,14,'R')}
    <path class="torso" d="M54 116 L108 116 L108 144 L54 144 Z"/>
    <!-- 上げた腕(片方ゴースト) -->
    <line class="limbF" x1="60" y1="118" x2="40" y2="78"/>
    <line class="ghost" x1="72" y1="118" x2="84" y2="80"/>
    <!-- 上げた脚 -->
    <line class="limbF" x1="106" y1="124" x2="150" y2="92"/>
    <line class="limbF" x1="150" y1="92" x2="170" y2="108"/>
    <line class="ghost" x1="106" y1="138" x2="150" y2="120"/>
    <path class="arrow" d="M46 96 L36 78" marker-end="url(#mv)"/>
    <path class="arrow" d="M158 100 L172 104" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="198">対角の手と脚を伸ばす</text>
  `),

  hundred: _wrap(`
    <line class="ground" x1="10" y1="180" x2="190" y2="180"/>
    <rect class="mat" x="10" y="175" width="180" height="6"/>
    <!-- 仰向け 頭肩を上げ脚45度 手を上下 -->
    ${_head(44,128,14,'R')}
    <path class="torsoF" d="M56 124 L104 116 L106 138 L58 146 Z"/>
    <!-- 伸ばした脚 -->
    <line class="limb" x1="104" y1="128" x2="170" y2="98"/>
    <!-- 浮かせた腕を小刻みに上下 -->
    <line class="limbF" x1="64" y1="126" x2="96" y2="150"/>
    <path class="arrow" d="M86 138 L86 124" marker-end="url(#mv)" marker-start="url(#mv)"/>
    <text class="lbl" x="100" y="198">脚を上げ手を小刻みに上下</text>
  `),

  abLift: _wrap(`
    <line class="ground" x1="10" y1="180" x2="190" y2="180"/>
    <rect class="mat" x="10" y="175" width="180" height="6"/>
    <!-- 仰向け 両脚を天井へ -->
    ${_head(34,150,14,'R')}
    <path class="torso" d="M48 144 L96 144 L96 166 L48 166 Z"/>
    <line class="ghost" x1="96" y1="150" x2="150" y2="138"/>
    <!-- 脚を真上 -->
    <line class="limbF" x1="96" y1="150" x2="112" y2="50"/>
    <line class="limbF" x1="104" y1="160" x2="120" y2="58"/>
    <path class="arrow" d="M132 92 L120 56" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="198">両脚を天井へ引き上げる</text>
  `),

  bicycleAb: _wrap(`
    <line class="ground" x1="10" y1="180" x2="190" y2="180"/>
    <rect class="mat" x="10" y="175" width="180" height="6"/>
    <!-- 自転車こぎ 対角の肘と膝 -->
    ${_head(40,138,14,'R')}
    <path class="torsoF" d="M54 134 L100 128 L102 150 L56 156 Z"/>
    <!-- 引き寄せる膝 -->
    <line class="limbF" x1="100" y1="140" x2="134" y2="106"/>
    <line class="limbF" x1="134" y1="106" x2="118" y2="138"/>
    <!-- 伸ばす脚 -->
    <line class="limb" x1="100" y1="150" x2="170" y2="160"/>
    <!-- 対角の肘 -->
    <line class="limbF" x1="64" y1="132" x2="110" y2="120"/>
    <path class="arrow" d="M92 122 L116 122" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="198">対角の肘と膝を近づける</text>
  `),

  boatPose: _wrap(`
    <line class="ground" x1="20" y1="180" x2="180" y2="180"/>
    <rect class="mat" x="20" y="175" width="160" height="6"/>
    <!-- V字バランス -->
    ${_head(56,70,14,'R')}
    <path class="torsoF" d="M62 82 L92 128 L78 138 L50 88 Z"/>
    <!-- 伸ばした脚 -->
    <line class="limbF" x1="88" y1="126" x2="160" y2="66"/>
    <!-- 前へ伸ばす腕 -->
    <line class="limb" x1="74" y1="92" x2="128" y2="104"/>
    <text class="lbl" x="100" y="198">V字で体を支えてキープ</text>
  `),

  birdDog: _wrap(`
    <line class="ground" x1="10" y1="178" x2="190" y2="178"/>
    <rect class="mat" x="10" y="173" width="180" height="6"/>
    <!-- 四つ這い 対角の手脚を伸ばす -->
    ${_head(48,106,14,'L')}
    <path class="torso" d="M60 110 Q100 102 140 114 L134 128 L56 124 Z"/>
    <!-- 支持の手脚 -->
    <line class="limb" x1="64" y1="124" x2="58" y2="172"/>
    <line class="limb" x1="138" y1="124" x2="148" y2="172"/>
    <!-- 前に伸ばす腕 -->
    <line class="limbF" x1="60" y1="116" x2="18" y2="86"/>
    <!-- 後ろに伸ばす脚 -->
    <line class="limbF" x1="138" y1="118" x2="184" y2="150"/>
    <path class="arrow" d="M30 92 L18 84" marker-end="url(#mv)"/>
    <path class="arrow" d="M170 142 L184 150" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="196">対角の手と脚を伸ばす</text>
  `),

  swimming: _wrap(`
    <line class="ground" x1="10" y1="180" x2="190" y2="180"/>
    <rect class="mat" x="10" y="175" width="180" height="6"/>
    <!-- うつ伏せ 対角の手脚を浮かす -->
    ${_head(52,140,14,'L')}
    <path class="torsoF" d="M64 144 Q108 138 152 150 L148 162 L60 158 Z"/>
    <!-- 浮かせた腕 -->
    <line class="limbF" x1="64" y1="146" x2="22" y2="108"/>
    <!-- 浮かせた脚 -->
    <line class="limbF" x1="150" y1="150" x2="186" y2="112"/>
    <!-- 床側の手脚 -->
    <line class="limb" x1="68" y1="156" x2="40" y2="174"/>
    <line class="limb" x1="146" y1="158" x2="178" y2="172"/>
    <path class="arrow" d="M34 122 L22 108" marker-end="url(#mv)"/>
    <path class="arrow" d="M174 124 L186 112" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="198">対角の手脚を浮かせる</text>
  `),

  // ============================================================
  // YOGA
  // ============================================================
  childPose: _wrap(`
    <line class="ground" x1="10" y1="180" x2="190" y2="180"/>
    <rect class="mat" x="10" y="175" width="180" height="6"/>
    <!-- 正座から前に伏せる -->
    <path class="torsoF" d="M150 150 Q110 130 70 152 L70 168 L150 168 Z"/>
    ${_head(60,158,14,'L')}
    <!-- 前に伸ばした腕 -->
    <line class="limbF" x1="74" y1="150" x2="34" y2="166"/>
    <!-- 折りたたんだ脚 -->
    <line class="limb" x1="150" y1="160" x2="170" y2="168"/>
    <path class="arrow" d="M56 142 L34 160" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="198">正座で上体を前に伏せる</text>
  `),

  downDog: _wrap(`
    <line class="ground" x1="10" y1="180" x2="190" y2="180"/>
    <rect class="mat" x="10" y="175" width="180" height="6"/>
    <!-- 下向き犬(山型) -->
    ${_head(46,96,13,'R')}
    <path class="limbF" d="M40 104 L100 56 L160 104"/>
    <!-- 腕 -->
    <line class="limb" x1="46" y1="104" x2="36" y2="172"/>
    <!-- 脚 -->
    <line class="limb" x1="154" y1="104" x2="168" y2="172"/>
    <path class="arrow" d="M100 40 L100 54" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="198">お尻を高く山型に</text>
  `),

  cobra: _wrap(`
    <line class="ground" x1="10" y1="180" x2="190" y2="180"/>
    <rect class="mat" x="10" y="175" width="180" height="6"/>
    <!-- コブラ 上体を反らす -->
    <path class="ghost" d="M150 168 Q110 162 56 166"/>
    ${_head(44,108,14,'L')}
    <path class="limbF" d="M56 120 Q104 152 150 164"/>
    <!-- 支える腕 -->
    <line class="limb" x1="60" y1="124" x2="56" y2="166"/>
    <path class="arrow" d="M40 142 Q36 122 48 108" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="198">手で支え上体を反らす</text>
  `),

  warrior: _wrap(`
    <line class="ground" x1="10" y1="186" x2="190" y2="186"/>
    <!-- 戦士のポーズ 前脚曲げ両腕水平 -->
    ${_head(96,46,15,'F')}
    <path class="torso" d="M84 62 Q96 56 108 62 L112 100 L80 100 Z"/>
    <!-- 水平に伸ばした両腕 -->
    <line class="limbF" x1="84" y1="72" x2="34" y2="72"/>
    <line class="limbF" x1="108" y1="72" x2="158" y2="72"/>
    <!-- 前脚(曲げ) -->
    <line class="limb" x1="104" y1="100" x2="140" y2="130"/>
    <line class="limb" x1="140" y1="130" x2="140" y2="184"/>
    <!-- 後ろ脚(伸ばす) -->
    <line class="limb" x1="86" y1="100" x2="48" y2="184"/>
    <text class="lbl" x="100" y="200">前脚を曲げ両腕を水平に</text>
  `),

  triangle: _wrap(`
    <line class="ground" x1="10" y1="186" x2="190" y2="186"/>
    <!-- 三角のポーズ 体側を倒し上下に腕 -->
    ${_head(72,58,14,'R')}
    <path class="torsoF" d="M66 72 L96 100 L86 112 L56 84 Z"/>
    <!-- 上下の腕(一直線) -->
    <line class="limbF" x1="80" y1="92" x2="120" y2="40"/>
    <line class="limbF" x1="74" y1="100" x2="56" y2="150"/>
    <!-- 開いた両脚 -->
    <line class="limb" x1="90" y1="108" x2="60" y2="184"/>
    <line class="limb" x1="96" y1="104" x2="150" y2="184"/>
    <path class="arrow" d="M132 56 L120 42" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="200">脚を開き体側を倒す</text>
  `),

  treePose: _wrap(`
    <line class="ground" x1="60" y1="186" x2="140" y2="186"/>
    <!-- 木のポーズ 片脚立ち 合掌 -->
    ${_head(100,40,15,'F')}
    <path class="torso" d="M88 56 Q100 50 112 56 L114 104 L86 104 Z"/>
    <!-- 合掌の腕 -->
    <path class="limbF" d="M88 64 Q100 44 100 30"/>
    <path class="limbF" d="M112 64 Q100 44 100 30"/>
    <!-- 軸脚 -->
    <line class="limbF" x1="98" y1="104" x2="96" y2="184"/>
    <!-- 曲げて当てた脚 -->
    <line class="limb" x1="108" y1="106" x2="96" y2="140"/>
    <path class="arrow" d="M126 120 L110 130" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="200">片脚立ちで安定させる</text>
  `),

  // ============================================================
  // BODYWEIGHT
  // ============================================================
  pushup: _wrap(`
    <line class="ground" x1="10" y1="178" x2="190" y2="178"/>
    <rect class="mat" x="10" y="173" width="180" height="6"/>
    <line class="ghostH" x1="30" y1="96" x2="170" y2="116"/>
    ${_head(40,100,14,'R')}
    <path class="torsoF" d="M52 104 L150 116 L150 130 L52 118 Z"/>
    <!-- 曲げる腕 -->
    <line class="limbF" x1="56" y1="120" x2="48" y2="150"/>
    <line class="limbF" x1="48" y1="150" x2="60" y2="174"/>
    <!-- 脚 -->
    <line class="limb" x1="150" y1="124" x2="174" y2="172"/>
    <path class="arrow" d="M100 96 L100 124" marker-end="url(#mv)" marker-start="url(#mv)"/>
    <text class="lbl" x="100" y="196">肘を曲げ胸を床に近づける</text>
  `),

  jumpingJack: _wrap(`
    <line class="ground" x1="20" y1="186" x2="180" y2="186"/>
    <!-- ジャンピングジャック 手脚開閉 -->
    ${_head(100,40,14,'F')}
    <path class="torso" d="M88 54 Q100 48 112 54 L116 104 L84 104 Z"/>
    <!-- ゴースト: 閉じた手脚 -->
    <line class="ghost" x1="90" y1="60" x2="84" y2="104"/>
    <line class="ghost" x1="92" y1="104" x2="92" y2="184"/>
    <!-- 開いた腕 -->
    <line class="limbF" x1="88" y1="60" x2="44" y2="28"/>
    <line class="limbF" x1="112" y1="60" x2="156" y2="28"/>
    <!-- 開いた脚 -->
    <line class="limbF" x1="86" y1="104" x2="50" y2="184"/>
    <line class="limbF" x1="114" y1="104" x2="150" y2="184"/>
    <path class="arrow" d="M64 50 L48 34" marker-end="url(#mv)"/>
    <path class="arrow" d="M136 50 L152 34" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="200">手脚をリズムよく開閉</text>
  `),

  standing: _wrap(`
    <line class="ground" x1="60" y1="186" x2="140" y2="186"/>
    <!-- 基本の立位アライメント -->
    ${_head(100,40,14,'F')}
    <path class="torso" d="M88 56 Q100 50 112 56 L114 106 L86 106 Z"/>
    <line class="limb" x1="88" y1="64" x2="80" y2="110"/>
    <line class="limb" x1="112" y1="64" x2="120" y2="110"/>
    <line class="limbF" x1="92" y1="106" x2="90" y2="186"/>
    <line class="limbF" x1="108" y1="106" x2="110" y2="186"/>
    <!-- 基準の鉛直線 -->
    <line class="ghostH" x1="100" y1="26" x2="100" y2="186"/>
    <text class="lbl" x="100" y="200">耳・肩・骨盤を一直線に</text>
  `),

  // ============================================================
  // RELEASE リリース
  // ============================================================
  ballRelease: _wrap(`
    <line class="ground" x1="10" y1="180" x2="190" y2="180"/>
    <rect class="mat" x="10" y="175" width="180" height="6"/>
    <!-- 仰向け ボールで圧迫 -->
    ${_head(40,118,14,'R')}
    <path class="torso" d="M54 116 L128 116 L128 144 L54 144 Z"/>
    <line class="limb" x1="128" y1="132" x2="160" y2="160"/>
    <!-- ボール -->
    <circle class="tool" cx="92" cy="150" r="11"/>
    <path class="arrow" d="M92 132 L92 162" marker-end="url(#mv)" marker-start="url(#mv)"/>
    <text class="lbl" x="100" y="198">ボールを当て体重で圧迫</text>
  `),

  foamRoll: _wrap(`
    <line class="ground" x1="10" y1="180" x2="190" y2="180"/>
    <rect class="mat" x="10" y="175" width="180" height="6"/>
    <!-- フォームローラー転がし -->
    ${_head(38,108,14,'R')}
    <path class="torso" d="M52 106 L120 106 L120 134 L52 134 Z"/>
    <line class="limb" x1="120" y1="124" x2="150" y2="150"/>
    <rect class="roller" x="78" y="140" width="54" height="20" rx="10"/>
    <path class="arrow" d="M62 166 L148 166" marker-end="url(#mv)" marker-start="url(#mv)"/>
    <text class="lbl" x="100" y="196">ローラーで前後に転がす</text>
  `),

  handMassage: _wrap(`
    <line class="ground" x1="55" y1="185" x2="145" y2="185"/>
    ${_head(100,54,18,'F')}
    <path class="torso" d="M80 78 Q100 72 120 78 L126 168 L74 168 Z"/>
    <!-- 両手で首・肩をほぐす -->
    <path class="limbF" d="M82 92 Q70 70 88 56"/>
    <path class="limbF" d="M118 92 Q130 70 112 56"/>
    <circle cx="86" cy="58" r="4" fill="#fed7aa" stroke="#f97316" stroke-width="2"/>
    <circle cx="114" cy="58" r="4" fill="#fed7aa" stroke="#f97316" stroke-width="2"/>
    <text class="lbl" x="100" y="200">指で首・肩をほぐす</text>
  `),

  // ============================================================
  // BREATH / MEDITATION 呼吸・瞑想
  // ============================================================
  breathing: _wrap(`
    ${_head(100,44,17,'F')}
    <path class="torso" d="M82 64 Q100 58 118 64 L120 92 L80 92 Z"/>
    <!-- ふくらむお腹(呼吸) -->
    <circle class="breath" cx="100" cy="122" r="36"/>
    <ellipse cx="100" cy="124" rx="30" ry="33" fill="#fed7aa" stroke="#f97316" stroke-width="3"/>
    <!-- お腹に当てた手 -->
    <path class="limb" d="M78 100 Q88 122 96 126"/>
    <path class="limb" d="M122 100 Q112 122 104 126"/>
    <path class="arrow" d="M100 96 L100 80" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="190">お腹をふくらませ深呼吸</text>
  `),

  meditation: _wrap(`
    <line class="ground" x1="40" y1="184" x2="160" y2="184"/>
    <!-- あぐら座位 瞑想 -->
    ${_head(100,52,17,'F')}
    <path class="torso" d="M80 76 Q100 70 120 76 L124 132 L76 132 Z"/>
    <!-- あぐらの脚 -->
    <path class="limb" d="M76 130 Q100 150 124 130"/>
    <path class="limb" d="M76 130 Q100 138 124 130"/>
    <!-- 膝に置いた手 -->
    <path class="limb" d="M80 100 Q70 124 80 134"/>
    <path class="limb" d="M120 100 Q130 124 120 134"/>
    <circle class="ghostH" cx="100" cy="52" r="30"/>
    <text class="lbl" x="100" y="200">背すじを伸ばし静かに呼吸</text>
  `),

  // ============================================================
  // SELF-CARE 小物リリース (Batch1)
  // ============================================================
  neckLymph: _wrap(`
    <line class="ground" x1="55" y1="185" x2="145" y2="185"/>
    ${_head(100,50,18,'F')}
    <path class="torso" d="M78 76 Q100 70 122 76 L128 168 L72 168 Z"/>
    <line class="limb" x1="128" y1="92" x2="150" y2="130"/>
    <path class="limbF" d="M84 92 Q94 102 98 70"/>
    <path class="arrow" d="M106 66 L101 104" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="200">首を上から下へ流す</text>
  `),

  faceMassage: _wrap(`
    ${_head(100,86,42,'F')}
    <path class="limb" d="M52 130 Q64 104 80 96"/>
    <path class="limb" d="M148 130 Q136 104 120 96"/>
    <circle cx="80" cy="94" r="4.5" fill="#f97316"/>
    <circle cx="120" cy="94" r="4.5" fill="#f97316"/>
    <text class="lbl" x="100" y="190">顔を指でやさしくほぐす</text>
  `),

  eyeCare: _wrap(`
    ${_head(100,88,42,'F')}
    <path class="limb" d="M50 132 Q68 104 84 86"/>
    <path class="limb" d="M150 132 Q132 104 116 86"/>
    <ellipse class="focus" cx="84" cy="84" rx="7" ry="4.5"/>
    <ellipse class="focus" cx="116" cy="84" rx="7" ry="4.5"/>
    <text class="lbl" x="100" y="192">目元・こめかみをほぐす</text>
  `),

  scalpMassage: _wrap(`
    ${_head(100,98,42,'F')}
    <path class="limbF" d="M72 76 Q66 54 82 50"/>
    <path class="limbF" d="M128 76 Q134 54 118 50"/>
    <circle cx="82" cy="62" r="4" fill="#f97316"/>
    <circle cx="118" cy="62" r="4" fill="#f97316"/>
    <text class="lbl" x="100" y="198">頭皮をもみほぐす</text>
  `),

  jawRelease: _wrap(`
    ${_head(100,84,42,'F')}
    <path class="limbF" d="M64 134 Q78 120 92 112"/>
    <path class="limbF" d="M136 134 Q122 120 108 112"/>
    <path class="focus" d="M86 118 Q100 128 114 118"/>
    <text class="lbl" x="100" y="196">あご・顎関節をゆるめる</text>
  `),

  wristStretch: _wrap(`
    <line class="ground" x1="55" y1="185" x2="145" y2="185"/>
    ${_head(84,46,15,'F')}
    <path class="torso" d="M68 62 Q84 56 100 62 L106 150 L62 150 Z"/>
    <line class="limb" x1="70" y1="150" x2="66" y2="180"/>
    <line class="limb" x1="100" y1="150" x2="104" y2="180"/>
    <line class="limbF" x1="100" y1="80" x2="150" y2="80"/>
    <path class="limb" d="M150 80 Q162 72 158 60"/>
    <path class="arrow" d="M150 70 Q162 76 158 90" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="200">手首を反らして伸ばす</text>
  `),

  handOpen: _wrap(`
    <line class="ground" x1="55" y1="185" x2="145" y2="185"/>
    <line class="limb" x1="100" y1="184" x2="100" y2="120"/>
    <circle class="torsoF" cx="100" cy="104" r="16"/>
    <line class="limbF" x1="93" y1="92" x2="84" y2="58"/>
    <line class="limbF" x1="99" y1="89" x2="96" y2="50"/>
    <line class="limbF" x1="105" y1="89" x2="108" y2="50"/>
    <line class="limbF" x1="111" y1="92" x2="120" y2="56"/>
    <line class="limbF" x1="86" y1="104" x2="64" y2="94"/>
    <text class="lbl" x="100" y="200">手をグーパーする</text>
  `),

  ankleRotation: _wrap(`
    <line class="ground" x1="20" y1="185" x2="180" y2="185"/>
    ${_head(58,58,15,'R')}
    <path class="torso" d="M46 74 Q58 68 70 74 L74 120 L42 120 Z"/>
    <line class="limb" x1="70" y1="116" x2="118" y2="122"/>
    <line class="limbF" x1="118" y1="122" x2="148" y2="110"/>
    <circle class="focus" cx="150" cy="108" r="11" fill="none"/>
    <path class="arrow" d="M159 99 A11 11 0 1 1 157 118" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="200">足首をぐるぐる回す</text>
  `),

  footToes: _wrap(`
    <path class="torsoF" d="M46 118 Q70 98 132 102 L150 118 L150 142 L46 142 Z"/>
    <line class="limbF" x1="150" y1="110" x2="174" y2="100"/>
    <line class="limbF" x1="150" y1="120" x2="178" y2="118"/>
    <line class="limbF" x1="150" y1="130" x2="174" y2="136"/>
    <path class="arrow" d="M168 92 L178 96" marker-end="url(#mv)"/>
    <path class="arrow" d="M168 146 L178 142" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="188">足の指を開く・握る</text>
  `),

  // ============================================================
  // CARDIO / STANDING 有酸素・立位 (Batch2)
  // ============================================================
  stepUp: _wrap(`
    <line class="ground" x1="10" y1="185" x2="190" y2="185"/>
    <rect x="120" y="150" width="60" height="35" rx="3" fill="#e2e8f0" stroke="#94a3b8" stroke-width="2"/>
    ${_head(70,52,15,'R')}
    <path class="torso" d="M58 68 Q70 62 82 68 L86 108 L54 108 Z"/>
    <line class="limb" x1="70" y1="74" x2="84" y2="104"/>
    <!-- 段に乗せる脚 -->
    <line class="limbF" x1="80" y1="108" x2="130" y2="118"/>
    <line class="limbF" x1="130" y1="118" x2="135" y2="150"/>
    <!-- 支持脚 -->
    <line class="limb" x1="62" y1="108" x2="58" y2="185"/>
    <path class="arrow" d="M104 100 Q120 96 132 110" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="200">台に片脚を乗せ上り下り</text>
  `),

  calfRaiseUp: _wrap(`
    <line class="ground" x1="55" y1="185" x2="145" y2="185"/>
    ${_head(100,46,15,'F')}
    <path class="torso" d="M86 62 Q100 56 114 62 L116 104 L84 104 Z"/>
    <line class="limb" x1="86" y1="68" x2="78" y2="106"/>
    <line class="limb" x1="114" y1="68" x2="122" y2="106"/>
    <!-- かかと上げ つま先立ち -->
    <line class="ghost" x1="92" y1="104" x2="90" y2="184"/>
    <line class="limbF" x1="92" y1="104" x2="90" y2="168"/>
    <line class="limbF" x1="108" y1="104" x2="110" y2="168"/>
    <path class="focus" d="M84 168 L96 176"/>
    <path class="focus" d="M104 176 L116 168"/>
    <path class="arrow" d="M135 150 L135 120" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="200">かかとを上げてつま先立ち</text>
  `),

  marchHighKnee: _wrap(`
    <line class="ground" x1="55" y1="185" x2="145" y2="185"/>
    ${_head(96,46,15,'F')}
    <path class="torso" d="M82 62 Q96 56 110 62 L114 104 L78 104 Z"/>
    <line class="limb" x1="82" y1="70" x2="70" y2="100"/>
    <line class="limb" x1="110" y1="70" x2="122" y2="100"/>
    <!-- 支持脚 -->
    <line class="limb" x1="90" y1="104" x2="86" y2="184"/>
    <!-- 高く上げた膝 -->
    <line class="limbF" x1="108" y1="106" x2="128" y2="120"/>
    <line class="limbF" x1="128" y1="120" x2="118" y2="150"/>
    <path class="arrow" d="M118 138 Q128 124 124 112" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="200">ももを高く上げて足踏み</text>
  `),

  sideStep: _wrap(`
    <line class="ground" x1="20" y1="185" x2="180" y2="185"/>
    ${_head(100,46,15,'F')}
    <path class="torso" d="M86 62 Q100 56 114 62 L118 102 L82 102 Z"/>
    <line class="limbF" x1="86" y1="70" x2="58" y2="86"/>
    <line class="limbF" x1="114" y1="70" x2="142" y2="86"/>
    <!-- 開いた両脚 -->
    <line class="limb" x1="90" y1="102" x2="60" y2="184"/>
    <line class="limb" x1="110" y1="102" x2="140" y2="184"/>
    <path class="arrow" d="M44 150 L66 150" marker-end="url(#mv)" marker-start="url(#mv)"/>
    <text class="lbl" x="100" y="200">左右に大きくサイドステップ</text>
  `),

  singleLegBalance: _wrap(`
    <line class="ground" x1="60" y1="185" x2="140" y2="185"/>
    ${_head(100,44,15,'F')}
    <path class="torso" d="M86 60 Q100 54 114 60 L116 104 L84 104 Z"/>
    <!-- 横に広げた腕 -->
    <line class="limbF" x1="86" y1="66" x2="50" y2="58"/>
    <line class="limbF" x1="114" y1="66" x2="150" y2="58"/>
    <!-- 軸脚 -->
    <line class="limbF" x1="98" y1="104" x2="96" y2="184"/>
    <!-- 浮かせた脚 -->
    <line class="limb" x1="108" y1="106" x2="134" y2="130"/>
    <path class="arrow" d="M122 150 Q130 130 124 116" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="200">片脚立ちでバランスキープ</text>
  `),

  warrior3: _wrap(`
    <line class="ground" x1="20" y1="185" x2="180" y2="185"/>
    <!-- T字バランス(ウォリアー3) -->
    ${_head(56,80,15,'L')}
    <path class="torsoF" d="M70 76 Q92 70 112 80 L108 94 L66 90 Z"/>
    <!-- 前に伸ばした腕 -->
    <line class="limbF" x1="70" y1="80" x2="28" y2="74"/>
    <!-- 軸脚 -->
    <line class="limb" x1="110" y1="86" x2="118" y2="184"/>
    <!-- 後方水平の脚 -->
    <line class="limbF" x1="108" y1="84" x2="172" y2="92"/>
    <path class="arrow" d="M150 76 L172 84" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="200">体を前に倒しT字バランス</text>
  `),

  hipShift: _wrap(`
    <line class="ground" x1="40" y1="185" x2="160" y2="185"/>
    ${_head(100,44,15,'F')}
    <!-- 骨盤を左右にシフト -->
    <ellipse class="ghostH" cx="100" cy="110" rx="22" ry="13"/>
    <path class="torsoF" d="M84 96 Q100 90 116 96 L132 116 L88 116 Z"/>
    <line class="limb" x1="100" y1="58" x2="100" y2="92"/>
    <line class="limb" x1="96" y1="116" x2="92" y2="184"/>
    <line class="limb" x1="120" y1="116" x2="128" y2="184"/>
    <path class="arrow" d="M70 110 L94 110" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="200">骨盤を左右にスライド</text>
  `),

  // ============================================================
  // PILATES CORE 仰向けコア (Batch3)
  // ============================================================
  tableTop: _wrap(`
    <line class="ground" x1="10" y1="180" x2="190" y2="180"/>
    <rect class="mat" x="10" y="175" width="180" height="6"/>
    ${_head(40,140,14,'R')}
    <path class="torso" d="M54 136 L100 136 L100 162 L54 162 Z"/>
    <line class="limbF" x1="100" y1="142" x2="118" y2="104"/>
    <line class="limbF" x1="118" y1="104" x2="158" y2="104"/>
    <line class="limbF" x1="100" y1="152" x2="124" y2="112"/>
    <line class="limbF" x1="124" y1="112" x2="162" y2="112"/>
    <text class="lbl" x="100" y="198">脚を90度に上げて保持</text>
  `),

  toeTap: _wrap(`
    <line class="ground" x1="10" y1="180" x2="190" y2="180"/>
    <rect class="mat" x="10" y="175" width="180" height="6"/>
    ${_head(40,140,14,'R')}
    <path class="torso" d="M54 136 L100 136 L100 162 L54 162 Z"/>
    <!-- 片脚はテーブルトップ -->
    <line class="limb" x1="100" y1="142" x2="116" y2="106"/>
    <line class="limb" x1="116" y1="106" x2="154" y2="106"/>
    <!-- 反対脚をつま先で床タップ -->
    <line class="limbF" x1="100" y1="152" x2="126" y2="120"/>
    <line class="limbF" x1="126" y1="120" x2="138" y2="168"/>
    <path class="arrow" d="M138 138 L138 166" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="198">つま先を床に下げてタップ</text>
  `),

  singleLegStretch: _wrap(`
    <line class="ground" x1="10" y1="180" x2="190" y2="180"/>
    <rect class="mat" x="10" y="175" width="180" height="6"/>
    ${_head(40,138,14,'R')}
    <path class="torsoF" d="M54 134 L96 126 L98 150 L56 158 Z"/>
    <!-- 胸に引き寄せる膝 -->
    <line class="limbF" x1="96" y1="134" x2="108" y2="104"/>
    <line class="limbF" x1="108" y1="104" x2="86" y2="118"/>
    <!-- 伸ばした脚 -->
    <line class="limb" x1="96" y1="146" x2="168" y2="120"/>
    <path class="arrow" d="M120 116 L98 116" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="198">片膝を胸へ・反対脚は伸ばす</text>
  `),

  doubleLegStretch: _wrap(`
    <line class="ground" x1="10" y1="180" x2="190" y2="180"/>
    <rect class="mat" x="10" y="175" width="180" height="6"/>
    ${_head(44,140,14,'R')}
    <path class="torsoF" d="M56 134 L98 126 L100 150 L58 158 Z"/>
    <!-- 頭上に伸ばす腕 -->
    <line class="limbF" x1="58" y1="132" x2="16" y2="118"/>
    <!-- 斜めに伸ばす両脚 -->
    <line class="limbF" x1="98" y1="138" x2="170" y2="108"/>
    <line class="limbF" x1="98" y1="148" x2="172" y2="120"/>
    <path class="arrow" d="M30 124 L16 118" marker-end="url(#mv)"/>
    <path class="arrow" d="M156 100 L174 92" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="198">手脚を遠くへ伸ばす</text>
  `),

  reverseCrunch: _wrap(`
    <line class="ground" x1="10" y1="180" x2="190" y2="180"/>
    <rect class="mat" x="10" y="175" width="180" height="6"/>
    ${_head(40,150,14,'R')}
    <path class="torso" d="M54 146 L94 146 L94 168 L54 168 Z"/>
    <line class="ghost" x1="94" y1="152" x2="150" y2="140"/>
    <!-- 膝を胸へ巻き込む + お尻浮かす -->
    <line class="limbF" x1="94" y1="150" x2="108" y2="116"/>
    <line class="limbF" x1="108" y1="116" x2="86" y2="120"/>
    <path class="arrow" d="M134 132 Q112 118 94 122" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="198">膝を胸へ巻き込む</text>
  `),

  scissors: _wrap(`
    <line class="ground" x1="10" y1="180" x2="190" y2="180"/>
    <rect class="mat" x="10" y="175" width="180" height="6"/>
    ${_head(40,154,14,'R')}
    <path class="torso" d="M54 150 L92 150 L92 170 L54 170 Z"/>
    <!-- 片脚を顔側へ・片脚を床側へ(交互) -->
    <line class="limbF" x1="92" y1="154" x2="120" y2="64"/>
    <line class="limbF" x1="92" y1="164" x2="150" y2="150"/>
    <path class="arrow" d="M104 100 L112 74" marker-end="url(#mv)"/>
    <path class="arrow" d="M132 150 L148 150" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="198">脚を上下に交差させる</text>
  `),

  legLower: _wrap(`
    <line class="ground" x1="10" y1="180" x2="190" y2="180"/>
    <rect class="mat" x="10" y="175" width="180" height="6"/>
    ${_head(40,154,14,'R')}
    <path class="torso" d="M54 150 L92 150 L92 170 L54 170 Z"/>
    <line class="ghost" x1="92" y1="156" x2="118" y2="70"/>
    <!-- そろえた両脚を下ろす -->
    <line class="limbF" x1="92" y1="156" x2="140" y2="108"/>
    <line class="limbF" x1="92" y1="164" x2="142" y2="118"/>
    <path class="arrow" d="M126 80 Q140 100 138 120" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="198">そろえた両脚を下ろす</text>
  `),

  pelvicTilt: _wrap(`
    <line class="ground" x1="10" y1="180" x2="190" y2="180"/>
    <rect class="mat" x="10" y="175" width="180" height="6"/>
    ${_head(40,150,14,'R')}
    <path class="torsoF" d="M54 146 L110 146 L110 166 L54 166 Z"/>
    <!-- 膝立て -->
    <line class="limb" x1="110" y1="150" x2="146" y2="120"/>
    <line class="limb" x1="146" y1="120" x2="150" y2="170"/>
    <!-- 骨盤の前後傾 -->
    <path class="arrow" d="M86 138 Q100 132 112 138" marker-end="url(#mv)" marker-start="url(#mv)"/>
    <text class="lbl" x="100" y="198">骨盤を前後にゆらす</text>
  `),

  // ============================================================
  // YOGA BACKBEND ヨガ後屈 (Batch4)
  // ============================================================
  sphinx: _wrap(`
    <line class="ground" x1="10" y1="180" x2="190" y2="180"/>
    <rect class="mat" x="10" y="175" width="180" height="6"/>
    ${_head(44,118,14,'L')}
    <path class="limbF" d="M58 128 Q108 144 156 160"/>
    <!-- 前腕で支える -->
    <line class="limb" x1="58" y1="126" x2="44" y2="172"/>
    <line class="limb" x1="44" y1="172" x2="80" y2="172"/>
    <path class="arrow" d="M42 148 Q40 132 50 120" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="198">前腕で支え胸をやさしく起こす</text>
  `),

  locust: _wrap(`
    <line class="ground" x1="10" y1="180" x2="190" y2="180"/>
    <rect class="mat" x="10" y="175" width="180" height="6"/>
    ${_head(48,150,14,'L')}
    <path class="torsoF" d="M60 154 Q104 148 150 158 L146 168 L58 166 Z"/>
    <!-- 後ろへ伸ばし浮かす腕 -->
    <line class="limbF" x1="60" y1="156" x2="22" y2="142"/>
    <!-- 浮かせた両脚 -->
    <line class="limbF" x1="150" y1="156" x2="186" y2="130"/>
    <path class="arrow" d="M34 150 L22 140" marker-end="url(#mv)"/>
    <path class="arrow" d="M172 142 L186 128" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="198">うつ伏せで手脚を浮かせる</text>
  `),

  bow: _wrap(`
    <line class="ground" x1="10" y1="180" x2="190" y2="180"/>
    <rect class="mat" x="10" y="175" width="180" height="6"/>
    ${_head(56,130,14,'L')}
    <!-- 弓なりの胴 -->
    <path class="torsoF" d="M68 138 Q104 120 132 140 L126 152 L66 150 Z"/>
    <!-- 上げた脚 -->
    <line class="limbF" x1="130" y1="142" x2="150" y2="108"/>
    <!-- 足首をつかむ腕 -->
    <path class="limb" d="M70 140 Q120 96 150 108"/>
    <path class="arrow" d="M150 120 L150 104" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="198">足首をつかみ弓なりに反る</text>
  `),

  camel: _wrap(`
    <line class="ground" x1="20" y1="185" x2="180" y2="185"/>
    <!-- ひざ立ちで後屈 -->
    ${_head(88,52,15,'R')}
    <path class="torsoF" d="M78 66 Q96 62 108 74 L98 110 L74 100 Z"/>
    <!-- 後ろに反る + 手はかかとへ -->
    <path class="limbF" d="M104 78 Q124 96 120 120"/>
    <!-- 太もも垂直・すね -->
    <line class="limb" x1="92" y1="106" x2="96" y2="150"/>
    <line class="limb" x1="96" y1="150" x2="130" y2="170"/>
    <path class="arrow" d="M104 60 Q120 64 124 80" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="200">ひざ立ちで胸を開き後屈</text>
  `),

  wheel: _wrap(`
    <line class="ground" x1="10" y1="180" x2="190" y2="180"/>
    <rect class="mat" x="10" y="175" width="180" height="6"/>
    <!-- ブリッジ(車輪) 高いアーチ -->
    <path class="limbF" d="M44 168 Q100 60 156 168"/>
    ${_head(46,150,13,'L')}
    <!-- 手 -->
    <line class="limb" x1="50" y1="158" x2="44" y2="172"/>
    <!-- 足 -->
    <line class="limb" x1="152" y1="158" x2="158" y2="172"/>
    <path class="arrow" d="M100 110 L100 78" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="198">手足で支え高く反る</text>
  `),

  fish: _wrap(`
    <line class="ground" x1="10" y1="180" x2="190" y2="180"/>
    <rect class="mat" x="10" y="175" width="180" height="6"/>
    <!-- 仰向けで胸を反らし頭頂を床へ -->
    ${_head(36,150,13,'L')}
    <path class="torsoF" d="M48 152 Q86 120 110 150 L150 150 L150 162 L48 164 Z"/>
    <line class="limb" x1="150" y1="156" x2="180" y2="168"/>
    <path class="arrow" d="M84 132 L84 116" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="198">仰向けで胸を持ち上げ開く</text>
  `),

  standBackbend: _wrap(`
    <line class="ground" x1="55" y1="185" x2="145" y2="185"/>
    <line class="ghost" x1="100" y1="180" x2="100" y2="60"/>
    <!-- 立位で軽く後屈 -->
    ${_head(112,52,15,'R')}
    <path class="torsoF" d="M96 66 Q112 62 122 72 L118 108 L92 104 Z"/>
    <!-- 腰に手 -->
    <path class="limb" d="M96 80 Q82 92 92 104"/>
    <!-- 脚 -->
    <line class="limb" x1="98" y1="106" x2="96" y2="184"/>
    <line class="limb" x1="112" y1="106" x2="108" y2="184"/>
    <path class="arrow" d="M120 58 Q132 70 128 86" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="200">腰を支え軽く後ろへ反る</text>
  `),

  chestOpener: _wrap(`
    <line class="ground" x1="10" y1="180" x2="190" y2="180"/>
    <rect class="mat" x="10" y="175" width="180" height="6"/>
    <!-- 仰向けで胸を開く(ロール/支持) -->
    <rect class="roller" x="86" y="150" width="40" height="14" rx="7"/>
    ${_head(40,140,14,'R')}
    <path class="torsoF" d="M54 138 L110 132 L112 152 L56 158 Z"/>
    <!-- 横に開いた腕 -->
    <line class="limbF" x1="60" y1="136" x2="34" y2="118"/>
    <line class="limb" x1="112" y1="146" x2="156" y2="150"/>
    <path class="arrow" d="M48 128 L34 116" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="198">胸を開いて深く呼吸</text>
  `),

  // ============================================================
  // YOGA STANDING/BALANCE/FOLD ヨガ立位 (Batch5)
  // ============================================================
  warrior1: _wrap(`
    <line class="ground" x1="20" y1="185" x2="180" y2="185"/>
    ${_head(96,40,15,'F')}
    <path class="torso" d="M84 56 Q96 50 108 56 L112 92 L80 92 Z"/>
    <!-- 頭上に伸ばす両腕 -->
    <line class="limbF" x1="86" y1="60" x2="74" y2="22"/>
    <line class="limbF" x1="106" y1="60" x2="120" y2="22"/>
    <!-- 前脚(曲げ) -->
    <line class="limb" x1="104" y1="92" x2="138" y2="124"/>
    <line class="limb" x1="138" y1="124" x2="138" y2="184"/>
    <!-- 後ろ脚(伸ばす) -->
    <line class="limb" x1="86" y1="92" x2="46" y2="184"/>
    <path class="arrow" d="M100 36 L100 22" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="200">前脚を曲げ両腕を上へ</text>
  `),

  halfMoon: _wrap(`
    <line class="ground" x1="20" y1="185" x2="180" y2="185"/>
    <!-- 半月: 片手床・片手天井・片脚水平 -->
    ${_head(70,70,15,'L')}
    <path class="torsoF" d="M76 78 L104 104 L94 116 L66 90 Z"/>
    <line class="limbF" x1="86" y1="94" x2="116" y2="44"/>
    <line class="limb" x1="74" y1="104" x2="56" y2="160"/>
    <!-- 軸脚 -->
    <line class="limb" x1="98" y1="110" x2="120" y2="184"/>
    <!-- 後方水平の脚 -->
    <line class="limbF" x1="96" y1="106" x2="36" y2="92"/>
    <path class="arrow" d="M108 60 L116 44" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="200">片手と片脚で半月のバランス</text>
  `),

  reverseWarrior: _wrap(`
    <line class="ground" x1="20" y1="185" x2="180" y2="185"/>
    ${_head(96,52,15,'F')}
    <path class="torsoF" d="M84 66 Q96 60 108 66 L112 100 L80 100 Z"/>
    <!-- 上に伸ばす前腕(側屈) -->
    <line class="limbF" x1="98" y1="68" x2="128" y2="30"/>
    <!-- 後ろ脚へ添える手 -->
    <line class="limb" x1="86" y1="92" x2="64" y2="120"/>
    <!-- 前脚(曲げ) -->
    <line class="limb" x1="104" y1="100" x2="136" y2="130"/>
    <line class="limb" x1="136" y1="130" x2="136" y2="184"/>
    <!-- 後ろ脚 -->
    <line class="limb" x1="84" y1="100" x2="46" y2="184"/>
    <path class="arrow" d="M116 44 L128 30" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="200">前腕を上へ・体側を伸ばす</text>
  `),

  seatedForwardFold: _wrap(`
    <line class="ground" x1="10" y1="180" x2="190" y2="180"/>
    <rect class="mat" x="10" y="175" width="180" height="6"/>
    <!-- 長座から前屈 -->
    <line class="limbF" x1="60" y1="168" x2="160" y2="168"/>
    <path class="torsoF" d="M54 168 Q70 150 84 152"/>
    ${_head(86,148,13,'R')}
    <!-- 足先へ伸ばす腕 -->
    <line class="limb" x1="80" y1="152" x2="150" y2="164"/>
    <path class="arrow" d="M110 140 Q130 152 146 162" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="198">長座で上体を前に倒す</text>
  `),

  wideLegFold: _wrap(`
    <line class="ground" x1="20" y1="185" x2="180" y2="185"/>
    <!-- 開脚前屈 -->
    <line class="limb" x1="100" y1="120" x2="50" y2="184"/>
    <line class="limb" x1="100" y1="120" x2="150" y2="184"/>
    <path class="torsoF" d="M100 122 Q96 100 100 82"/>
    ${_head(100,150,13,'F')}
    <path class="limbF" d="M100 122 Q102 100 100 84"/>
    <!-- 床へ伸ばす腕 -->
    <line class="limb" x1="100" y1="138" x2="100" y2="170"/>
    <path class="arrow" d="M124 92 Q120 124 104 150" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="200">脚を開いて前に倒す</text>
  `),

  // ============================================================
  // SIDE-BEND / TWIST / HIP (Batch6)
  // ============================================================
  mermaid: _wrap(`
    <line class="ground" x1="20" y1="182" x2="180" y2="182"/>
    <rect class="mat" x="20" y="177" width="160" height="5"/>
    <!-- 横座りで体側を伸ばす -->
    <path class="limb" d="M70 168 Q110 160 150 168"/>
    <path class="torso" d="M82 120 Q96 116 106 124 L100 160 L74 158 Z"/>
    ${_head(80,104,14,'R')}
    <!-- 頭上に伸ばす腕 -->
    <path class="limbF" d="M98 122 Q124 100 134 70"/>
    <line class="limb" x1="80" y1="130" x2="64" y2="150"/>
    <path class="arrow" d="M142 80 Q148 100 138 118" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="198">横座りで体側を伸ばす</text>
  `),

  itbStretch: _wrap(`
    <line class="ground" x1="40" y1="185" x2="160" y2="185"/>
    ${_head(96,52,15,'R')}
    <path class="torsoF" d="M84 66 Q98 62 110 70 L106 104 L80 100 Z"/>
    <!-- 頭上の腕(倒す側) -->
    <path class="limbF" d="M98 68 Q120 50 130 30"/>
    <!-- 脚を交差(後ろで組む) -->
    <line class="limb" x1="92" y1="102" x2="84" y2="184"/>
    <line class="limb" x1="104" y1="102" x2="118" y2="184"/>
    <line class="limb" x1="104" y1="150" x2="80" y2="184"/>
    <path class="focus" d="M88 120 Q96 150 84 180"/>
    <path class="arrow" d="M120 40 Q132 56 126 76" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="200">脚を交差し体側を倒す</text>
  `),

  supineTwist: _wrap(`
    <line class="ground" x1="10" y1="180" x2="190" y2="180"/>
    <rect class="mat" x="10" y="175" width="180" height="6"/>
    ${_head(40,140,14,'R')}
    <path class="torso" d="M54 134 L96 134 L96 160 L54 160 Z"/>
    <!-- T字に開いた腕 -->
    <line class="limb" x1="60" y1="136" x2="60" y2="110"/>
    <!-- 横に倒した膝 -->
    <line class="limbF" x1="96" y1="150" x2="120" y2="120"/>
    <line class="limbF" x1="120" y1="120" x2="150" y2="138"/>
    <path class="arrow" d="M112 138 Q124 126 140 132" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="198">膝を横に倒して背骨をねじる</text>
  `),

  adductorStretch: _wrap(`
    <line class="ground" x1="10" y1="182" x2="190" y2="182"/>
    <rect class="mat" x="10" y="177" width="180" height="5"/>
    <!-- 開脚して座る -->
    ${_head(100,70,15,'F')}
    <path class="torso" d="M86 86 Q100 80 114 86 L118 130 L82 130 Z"/>
    <!-- 大きく開いた両脚 -->
    <line class="limbF" x1="88" y1="128" x2="36" y2="170"/>
    <line class="limbF" x1="112" y1="128" x2="164" y2="170"/>
    <path class="arrow" d="M52 150 L40 162" marker-end="url(#mv)"/>
    <path class="arrow" d="M148 150 L160 162" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="198">脚を大きく開いて内ももを伸ばす</text>
  `),

  innerThighLift: _wrap(`
    <line class="ground" x1="10" y1="180" x2="190" y2="180"/>
    <rect class="mat" x="10" y="175" width="180" height="6"/>
    <!-- 横向き 下の脚を持ち上げる(内もも) -->
    ${_head(40,128,14,'R')}
    <path class="torso" d="M54 122 L118 122 L118 148 L54 148 Z"/>
    <!-- 上の脚は前で膝立て -->
    <line class="limb" x1="118" y1="130" x2="150" y2="110"/>
    <line class="limb" x1="150" y1="110" x2="150" y2="160"/>
    <!-- 下の脚を持ち上げる(内もも) -->
    <line class="ghost" x1="118" y1="142" x2="166" y2="164"/>
    <line class="limbF" x1="118" y1="142" x2="172" y2="138"/>
    <path class="arrow" d="M150 158 L168 142" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="198">下の脚を持ち上げ内ももを鍛える</text>
  `),

  // ============================================================
  // GLUTE / LEG variations (Batch7)
  // ============================================================
  clamShell: _wrap(`
    <line class="ground" x1="10" y1="180" x2="190" y2="180"/>
    <rect class="mat" x="10" y="175" width="180" height="6"/>
    <!-- 横向き 膝を曲げて上の膝を開く -->
    ${_head(40,124,14,'R')}
    <path class="torso" d="M54 120 L110 120 L110 146 L54 146 Z"/>
    <!-- 下の脚(曲げ) -->
    <line class="limb" x1="110" y1="140" x2="148" y2="150"/>
    <line class="limb" x1="148" y1="150" x2="138" y2="172"/>
    <!-- 上の膝を開く(かかとは合わせたまま) -->
    <line class="ghost" x1="110" y1="128" x2="146" y2="138"/>
    <line class="limbF" x1="110" y1="128" x2="150" y2="116"/>
    <line class="limbF" x1="150" y1="116" x2="142" y2="150"/>
    <path class="arrow" d="M150 132 L150 116" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="198">かかとを付け上の膝を開く</text>
  `),

  fireHydrant: _wrap(`
    <line class="ground" x1="10" y1="180" x2="190" y2="180"/>
    <rect class="mat" x="10" y="175" width="180" height="6"/>
    <!-- 四つ這いから曲げた膝を横に上げる -->
    ${_head(40,104,14,'L')}
    <path class="torso" d="M52 108 Q88 100 120 112 L114 126 L48 122 Z"/>
    <line class="limb" x1="56" y1="124" x2="52" y2="172"/>
    <line class="limb" x1="84" y1="120" x2="84" y2="172"/>
    <!-- 横に上げる曲げ膝 -->
    <line class="ghost" x1="118" y1="120" x2="120" y2="170"/>
    <line class="limbF" x1="118" y1="118" x2="150" y2="132"/>
    <line class="limbF" x1="150" y1="132" x2="170" y2="118"/>
    <path class="arrow" d="M134 150 Q150 140 150 128" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="198">膝を曲げたまま横に上げる</text>
  `),

  happyBaby: _wrap(`
    <line class="ground" x1="10" y1="180" x2="190" y2="180"/>
    <rect class="mat" x="10" y="175" width="180" height="6"/>
    <!-- 仰向けで両足裏を持つ -->
    ${_head(40,150,14,'R')}
    <path class="torso" d="M54 146 L92 146 L92 166 L54 166 Z"/>
    <!-- 両膝を脇へ・足裏を上に -->
    <line class="limbF" x1="92" y1="150" x2="120" y2="118"/>
    <line class="limbF" x1="120" y1="118" x2="124" y2="150"/>
    <line class="limbF" x1="92" y1="160" x2="118" y2="134"/>
    <line class="limbF" x1="118" y1="134" x2="120" y2="160"/>
    <!-- 足をつかむ腕 -->
    <path class="limb" d="M74 148 Q100 120 122 122"/>
    <path class="arrow" d="M110 108 L122 118" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="198">両足裏を持ち膝を脇へ</text>
  `),

  singleLegDeadlift: _wrap(`
    <line class="ground" x1="20" y1="185" x2="180" y2="185"/>
    <line class="ghost" x1="96" y1="180" x2="96" y2="64"/>
    <!-- 片脚立ちで前傾(後ろ脚水平) -->
    ${_head(64,80,14,'L')}
    <path class="torsoF" d="M76 78 Q96 72 112 82 L106 96 L72 92 Z"/>
    <!-- 垂らした腕 -->
    <line class="limb" x1="80" y1="88" x2="72" y2="120"/>
    <!-- 軸脚 -->
    <line class="limbF" x1="106" y1="90" x2="112" y2="184"/>
    <!-- 後方へ伸ばす脚 -->
    <line class="limbF" x1="104" y1="86" x2="168" y2="70"/>
    <path class="arrow" d="M148 60 L168 68" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="200">片脚立ちで股関節から前傾</text>
  `),

  // ============================================================
  // VISUAL VARIANTS (Batch8) — 見た目が異なる変種
  // ----- 呼吸/瞑想 -----
  lionBreath: _wrap(`
    <line class="ground" x1="40" y1="184" x2="160" y2="184"/>
    ${_head(100,52,18,'F')}
    <!-- 大きく開けた口 + 舌 -->
    <ellipse cx="100" cy="58" rx="7" ry="9" fill="#fff" stroke="#334155" stroke-width="2"/>
    <path d="M97 64 Q100 78 103 64" fill="#f97316"/>
    <path class="torso" d="M82 78 Q100 72 118 78 L122 130 L78 130 Z"/>
    <path class="limb" d="M78 130 Q100 148 122 130"/>
    <line class="limbF" x1="84" y1="92" x2="64" y2="120"/>
    <line class="limbF" x1="116" y1="92" x2="136" y2="120"/>
    <text class="lbl" x="100" y="200">口を開け舌を出し息を吐く</text>
  `),

  alternateNostril: _wrap(`
    <line class="ground" x1="40" y1="184" x2="160" y2="184"/>
    ${_head(100,52,18,'F')}
    <path class="torso" d="M82 78 Q100 72 118 78 L122 132 L78 132 Z"/>
    <path class="limb" d="M78 130 Q100 148 122 130"/>
    <!-- 鼻に当てる手 -->
    <path class="limbF" d="M122 118 Q112 88 102 58"/>
    <circle cx="100" cy="56" r="3" fill="#f97316"/>
    <text class="lbl" x="100" y="200">指で片鼻を押さえ呼吸</text>
  `),

  humming: _wrap(`
    <line class="ground" x1="40" y1="184" x2="160" y2="184"/>
    ${_head(100,52,18,'F')}
    <path class="torso" d="M82 78 Q100 72 118 78 L122 132 L78 132 Z"/>
    <!-- 両手で耳をふさぐ -->
    <path class="limbF" d="M76 96 Q70 64 84 52"/>
    <path class="limbF" d="M124 96 Q130 64 116 52"/>
    <circle cx="84" cy="54" r="3.5" fill="#f97316"/>
    <circle cx="116" cy="54" r="3.5" fill="#f97316"/>
    <text class="lbl" x="100" y="200">耳をふさぎ低く響かせる</text>
  `),

  ribBreath: _wrap(`
    <line class="ground" x1="40" y1="184" x2="160" y2="184"/>
    ${_head(100,50,17,'F')}
    <path class="torsoF" d="M80 74 Q100 68 120 74 L124 130 L76 130 Z"/>
    <!-- 肋骨に当てた両手 -->
    <path class="limb" d="M74 96 Q86 104 92 102"/>
    <path class="limb" d="M126 96 Q114 104 108 102"/>
    <path class="arrow" d="M88 100 L78 100" marker-end="url(#mv)"/>
    <path class="arrow" d="M112 100 L122 100" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="198">肋骨を横に広げて呼吸</text>
  `),

  savasana: _wrap(`
    <line class="ground" x1="10" y1="172" x2="190" y2="172"/>
    <rect class="mat" x="10" y="168" width="180" height="6"/>
    <!-- 仰向けで全身脱力 -->
    ${_head(36,150,13,'F')}
    <path class="torso" d="M50 144 L120 144 L120 164 L50 164 Z"/>
    <line class="limb" x1="56" y1="150" x2="48" y2="166"/>
    <line class="limb" x1="120" y1="150" x2="170" y2="156"/>
    <line class="limb" x1="120" y1="160" x2="172" y2="164"/>
    <text class="lbl" x="100" y="196">仰向けで全身を脱力</text>
  `),

  // ----- スクワット変種 -----
  sumoSquat: _wrap(`
    <line class="ground" x1="20" y1="185" x2="180" y2="185"/>
    ${_head(100,52,15,'F')}
    <path class="torsoF" d="M86 68 Q100 62 114 68 L118 104 L82 104 Z"/>
    <line class="limb" x1="100" y1="74" x2="100" y2="104"/>
    <!-- 大きく開いた脚・つま先外 -->
    <line class="limbF" x1="84" y1="104" x2="50" y2="140"/>
    <line class="limbF" x1="50" y1="140" x2="40" y2="184"/>
    <line class="limbF" x1="116" y1="104" x2="150" y2="140"/>
    <line class="limbF" x1="150" y1="140" x2="160" y2="184"/>
    <path class="arrow" d="M100 112 L100 138" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="200">脚を大きく開いてしゃがむ</text>
  `),

  cossackSquat: _wrap(`
    <line class="ground" x1="20" y1="185" x2="180" y2="185"/>
    ${_head(70,70,15,'R')}
    <path class="torso" d="M58 84 Q72 80 84 86 L88 116 L56 112 Z"/>
    <!-- 片脚深く曲げ・片脚横に伸ばす -->
    <line class="limbF" x1="74" y1="116" x2="66" y2="150"/>
    <line class="limbF" x1="66" y1="150" x2="74" y2="184"/>
    <line class="limbF" x1="84" y1="114" x2="160" y2="172"/>
    <line class="limb" x1="70" y1="92" x2="120" y2="120"/>
    <path class="arrow" d="M88 98 Q78 120 74 144" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="200">片脚を横に伸ばし深くしゃがむ</text>
  `),

  jumpSquat: _wrap(`
    <line class="ground" x1="20" y1="188" x2="180" y2="188"/>
    ${_head(100,44,15,'F')}
    <path class="torso" d="M86 60 Q100 54 114 60 L116 96 L84 96 Z"/>
    <!-- 上げた腕 -->
    <line class="limbF" x1="86" y1="64" x2="72" y2="34"/>
    <line class="limbF" x1="114" y1="64" x2="128" y2="34"/>
    <!-- 伸びた脚(浮く) -->
    <line class="limb" x1="90" y1="96" x2="86" y2="160"/>
    <line class="limb" x1="110" y1="96" x2="114" y2="160"/>
    <path class="arrow" d="M100 130 L100 100" marker-end="url(#mv)"/>
    <path class="arrow" d="M60 150 L66 168"/>
    <path class="arrow" d="M140 150 L134 168"/>
    <text class="lbl" x="100" y="202">しゃがんで真上にジャンプ</text>
  `),

  singleLegSquat: _wrap(`
    <line class="ground" x1="20" y1="185" x2="180" y2="185"/>
    ${_head(80,54,15,'R')}
    <path class="torsoF" d="M68 70 Q82 64 94 72 L92 104 L64 100 Z"/>
    <!-- 前に伸ばす脚 -->
    <line class="limb" x1="90" y1="102" x2="168" y2="96"/>
    <!-- 軸脚(曲げてしゃがむ) -->
    <line class="limbF" x1="80" y1="104" x2="70" y2="140"/>
    <line class="limbF" x1="70" y1="140" x2="86" y2="184"/>
    <line class="limb" x1="76" y1="86" x2="120" y2="92"/>
    <path class="arrow" d="M70 116 L66 140" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="200">片脚を前に伸ばし片脚でしゃがむ</text>
  `),

  chairPose: _wrap(`
    <line class="ground" x1="55" y1="185" x2="145" y2="185"/>
    ${_head(92,46,15,'R')}
    <path class="torsoF" d="M80 62 Q94 56 106 64 L104 98 L76 92 Z"/>
    <!-- 頭上に伸ばす腕 -->
    <line class="limbF" x1="92" y1="62" x2="118" y2="28"/>
    <!-- 軽く曲げた両脚(お尻引く) -->
    <line class="limb" x1="86" y1="96" x2="78" y2="134"/>
    <line class="limb" x1="78" y1="134" x2="86" y2="184"/>
    <line class="limb" x1="100" y1="96" x2="94" y2="134"/>
    <line class="limb" x1="94" y1="134" x2="100" y2="184"/>
    <path class="arrow" d="M108 44 L120 30" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="200">椅子に座るように腕を上げて</text>
  `),

  // ----- 腕立て/ランジ/プランク/ツイスト変種 (Batch8b) -----
  wallPushup: _wrap(`
    <rect class="wall" x="150" y="14" width="12" height="172"/>
    <line class="ground" x1="20" y1="186" x2="162" y2="186"/>
    ${_head(78,58,15,'R')}
    <path class="torsoF" d="M66 72 L92 88 L84 100 L58 84 Z"/>
    <!-- 壁につく腕(曲げる) -->
    <path class="limbF" d="M86 88 Q120 84 148 92"/>
    <!-- 斜めの体・脚 -->
    <line class="limb" x1="74" y1="96" x2="48" y2="184"/>
    <path class="arrow" d="M118 70 L132 84" marker-end="url(#mv)"/>
    <text class="lbl" x="96" y="200">壁を押して肘を曲げ伸ばし</text>
  `),

  pikePushup: _wrap(`
    <line class="ground" x1="10" y1="180" x2="190" y2="180"/>
    <rect class="mat" x="10" y="175" width="180" height="6"/>
    <!-- 山型から頭を下げる -->
    <path class="limbF" d="M40 172 L96 70 L150 172"/>
    ${_head(74,96,13,'R')}
    <line class="limb" x1="44" y1="172" x2="40" y2="172"/>
    <path class="arrow" d="M74 110 L74 130" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="198">山型で頭を床へ下ろす</text>
  `),

  sideLunge: _wrap(`
    <line class="ground" x1="20" y1="185" x2="180" y2="185"/>
    ${_head(96,50,15,'F')}
    <path class="torso" d="M84 66 Q96 60 108 66 L110 100 L82 100 Z"/>
    <line class="limb" x1="96" y1="72" x2="110" y2="98"/>
    <!-- 曲げた脚(横) -->
    <line class="limbF" x1="104" y1="100" x2="150" y2="130"/>
    <line class="limbF" x1="150" y1="130" x2="156" y2="184"/>
    <!-- 伸ばした脚 -->
    <line class="limb" x1="88" y1="100" x2="40" y2="184"/>
    <path class="arrow" d="M120 116 L146 128" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="200">横に踏み出し片膝を曲げる</text>
  `),

  curtseyLunge: _wrap(`
    <line class="ground" x1="20" y1="185" x2="180" y2="185"/>
    ${_head(98,50,15,'F')}
    <path class="torso" d="M86 66 Q98 60 110 66 L114 102 L84 102 Z"/>
    <!-- 前脚 -->
    <line class="limbF" x1="92" y1="102" x2="86" y2="140"/>
    <line class="limbF" x1="86" y1="140" x2="86" y2="184"/>
    <!-- 後ろで斜めにクロスする脚 -->
    <line class="limb" x1="110" y1="102" x2="60" y2="150"/>
    <line class="limb" x1="60" y1="150" x2="40" y2="184"/>
    <path class="arrow" d="M104 130 L74 150" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="200">後ろ斜めに脚を引いて沈む</text>
  `),

  reverseNordic: _wrap(`
    <line class="ground" x1="20" y1="185" x2="180" y2="185"/>
    <rect class="mat" x="20" y="180" width="160" height="5"/>
    <!-- ひざ立ちで後ろに倒れる(前もも) -->
    ${_head(70,60,15,'R')}
    <path class="torsoF" d="M62 74 Q80 78 90 96 L78 106 L56 84 Z"/>
    <line class="limbF" x1="84" y1="100" x2="110" y2="150"/>
    <line class="limbF" x1="110" y1="150" x2="150" y2="170"/>
    <line class="limb" x1="66" y1="80" x2="92" y2="100"/>
    <path class="arrow" d="M58 70 Q48 86 56 100" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="200">ひざ立ちで後ろへ倒れ前ももを伸ばす</text>
  `),

  quadStretch: _wrap(`
    <line class="ground" x1="55" y1="185" x2="145" y2="185"/>
    ${_head(96,48,15,'F')}
    <path class="torso" d="M84 64 Q96 58 108 64 L110 102 L82 102 Z"/>
    <line class="limb" x1="84" y1="70" x2="74" y2="100"/>
    <!-- 軸脚 -->
    <line class="limb" x1="92" y1="102" x2="90" y2="184"/>
    <!-- かかとをお尻へ引く脚 -->
    <line class="limbF" x1="108" y1="104" x2="124" y2="140"/>
    <line class="limbF" x1="124" y1="140" x2="104" y2="120"/>
    <!-- つかむ手 -->
    <path class="limb" d="M108 72 Q120 100 106 120"/>
    <path class="arrow" d="M124 134 Q116 122 106 122" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="200">かかとをお尻へ引き前ももを伸ばす</text>
  `),

  rollDown: _wrap(`
    <line class="ground" x1="55" y1="185" x2="145" y2="185"/>
    <line class="ghost" x1="100" y1="180" x2="100" y2="58"/>
    <!-- 背骨を上から丸めて下ろす -->
    <path class="limbF" d="M100 78 Q104 110 92 138"/>
    ${_head(88,150,13,'L')}
    <line class="limbF" x1="100" y1="78" x2="98" y2="50"/>
    <line class="limb" x1="100" y1="80" x2="94" y2="180"/>
    <line class="limb" x1="100" y1="80" x2="106" y2="180"/>
    <line class="limb" x1="90" y1="142" x2="84" y2="168"/>
    <path class="arrow" d="M118 86 Q116 120 102 144" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="200">背骨を一つずつ丸めて下ろす</text>
  `),

  bearCrawl: _wrap(`
    <line class="ground" x1="10" y1="180" x2="190" y2="180"/>
    <rect class="mat" x="10" y="175" width="180" height="6"/>
    <!-- 四つ這いで膝を浮かす -->
    ${_head(46,108,14,'L')}
    <path class="torsoF" d="M58 112 Q98 104 138 116 L132 130 L54 126 Z"/>
    <line class="limb" x1="60" y1="126" x2="54" y2="172"/>
    <line class="limb" x1="136" y1="126" x2="150" y2="172"/>
    <!-- 浮いた膝(曲げ) -->
    <line class="limbF" x1="100" y1="120" x2="108" y2="150"/>
    <line class="limbF" x1="108" y1="150" x2="92" y2="160"/>
    <path class="arrow" d="M118 158 L100 158" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="198">膝を浮かせて四つ這いで進む</text>
  `),

  crabWalk: _wrap(`
    <line class="ground" x1="10" y1="180" x2="190" y2="180"/>
    <rect class="mat" x="10" y="175" width="180" height="6"/>
    <!-- 逆テーブルトップ(お腹を上に) -->
    ${_head(44,118,14,'R')}
    <path class="torsoF" d="M56 122 L120 122 L120 138 L56 134 Z"/>
    <line class="limb" x1="58" y1="130" x2="48" y2="172"/>
    <line class="limbF" x1="120" y1="130" x2="150" y2="108"/>
    <line class="limbF" x1="150" y1="108" x2="150" y2="172"/>
    <path class="arrow" d="M88 116 L88 102" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="198">お腹を上に向け手足で支える</text>
  `),

  reversePlank: _wrap(`
    <line class="ground" x1="10" y1="180" x2="190" y2="180"/>
    <rect class="mat" x="10" y="175" width="180" height="6"/>
    <line class="ghostH" x1="34" y1="120" x2="170" y2="120"/>
    <!-- 体を一直線(お腹上) -->
    ${_head(40,118,14,'R')}
    <path class="torsoF" d="M52 122 L150 132 L150 118 L52 110 Z"/>
    <line class="limb" x1="54" y1="120" x2="44" y2="172"/>
    <line class="limb" x1="150" y1="126" x2="174" y2="172"/>
    <text class="lbl" x="100" y="198">お腹を上に体を一直線に支える</text>
  `),

  threadNeedle: _wrap(`
    <line class="ground" x1="10" y1="180" x2="190" y2="180"/>
    <rect class="mat" x="10" y="175" width="180" height="6"/>
    <!-- 四つ這いで片腕を通す -->
    ${_head(150,118,14,'R')}
    <path class="torso" d="M86 112 Q120 106 142 116 L138 128 L84 126 Z"/>
    <line class="limb" x1="140" y1="126" x2="150" y2="172"/>
    <line class="limb" x1="92" y1="118" x2="90" y2="172"/>
    <!-- 通す腕 -->
    <line class="limbF" x1="96" y1="124" x2="40" y2="150"/>
    <path class="arrow" d="M64 138 L40 150" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="198">片腕を体の下に通してねじる</text>
  `),

  ninetyNinety: _wrap(`
    <line class="ground" x1="10" y1="182" x2="190" y2="182"/>
    <rect class="mat" x="10" y="177" width="180" height="5"/>
    <!-- 座位90/90股関節 -->
    ${_head(100,72,15,'F')}
    <path class="torso" d="M88 88 Q100 82 112 90 L116 124 L84 124 Z"/>
    <!-- 前の脚(横に曲げ) -->
    <line class="limbF" x1="88" y1="122" x2="50" y2="138"/>
    <line class="limbF" x1="50" y1="138" x2="60" y2="166"/>
    <!-- 後ろの脚(横に曲げ) -->
    <line class="limbF" x1="112" y1="122" x2="150" y2="140"/>
    <line class="limbF" x1="150" y1="140" x2="140" y2="168"/>
    <text class="lbl" x="100" y="198">両膝を90度に曲げ床に座る</text>
  `),

  upDog: _wrap(`
    <line class="ground" x1="10" y1="180" x2="190" y2="180"/>
    <rect class="mat" x="10" y="175" width="180" height="6"/>
    <!-- アップドッグ: 太もも浮かせ胸を反らす -->
    ${_head(44,104,14,'L')}
    <path class="limbF" d="M56 114 Q104 142 150 150"/>
    <!-- 伸ばした腕 -->
    <line class="limb" x1="58" y1="112" x2="52" y2="172"/>
    <!-- 甲で支える脚 -->
    <line class="limb" x1="150" y1="150" x2="176" y2="172"/>
    <path class="arrow" d="M42 132 Q38 114 50 102" marker-end="url(#mv)"/>
    <text class="lbl" x="100" y="198">腕を伸ばし胸を高く反らす</text>
  `),

  // alias placeholders（下で設定）
  deadBug: null, lunge: null, bicycle: null, crunch: null, twist: null,
  calfRaise: null, superman: null, YTW: null, vsit: null,
  sideLeg: null, stand: null, donkeyKick: null,
  wallSquat: null, pullup: null, tricepsDip: null, burpee: null,
  bridgeBase: null,
};

// ===== エイリアス: DB側の別名を、画像/SVGを持つ"基底キー"へ寄せる =====
// 値=基底キー名。画像ファイルもSVGフォールバックも基底キーを共有する。
const ALIASES = {
  bridgeBase:'bridge', deadBug:'deadBugBase', crunch:'abLift', bicycle:'bicycleAb',
  twist:'seatedTwist', lunge:'lungeStretch', calfRaise:'calfStretch',
  superman:'swimming', YTW:'wallAngel', vsit:'boatPose', sideLeg:'legRaise',
  stand:'standing', donkeyKick:'glutesPunch',
  wallSquat:'squatHold', pullup:'shoulderBlade', tricepsDip:'pushup', burpee:'jumpingJack',
};

// RAW から null プレースホルダを除いた基底キー集合
const BASE_KEYS = Object.keys(RAW).filter(k => RAW[k]);

// 公開レジストリ SVG2: 各キー→SVG文字列を直接描画(軽量・通信なし)
const SVG2 = {};
BASE_KEYS.forEach(k => { SVG2[k] = RAW[k]; });
// エイリアスは基底キーのSVGを共有
Object.entries(ALIASES).forEach(([alias, base]) => { SVG2[alias] = RAW[base]; });

// 生のSVG文字列も必要に応じて取り出せるよう公開
const SVG_RAW = {};
BASE_KEYS.forEach(k => { SVG_RAW[k] = RAW[k]; });
Object.entries(ALIASES).forEach(([alias, base]) => { SVG_RAW[alias] = RAW[base]; });

export { SVG2, SVG_RAW };
