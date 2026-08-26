// ===================================================================
// 種目ごとの「連続動作イラスト＋図解オーバーレイ」ビジュアル
//   idにエントリがあれば、exerciseCard は棒人間SVGの代わりに
//   全幅の連続動作イラスト＋正確なSVG図解（番号/動作矢印/ガイド線）を表示。
//   無い種目は従来 svg-library.js のSVGにフォールバック（段階移行）。
//   overlay は <svg viewBox=vb> の"中身"。座標系は各画像の実寸(1672x941)。
//   図解はヘルパー(arrow/label/guide/badges)で統一。marker idは種目ごとに固有化。
// ===================================================================
const SANS = "'Zen Kaku Gothic New','Hiragino Kaku Gothic ProN',sans-serif";
const SERIF = "'Shippori Mincho',serif";

// 動作方向の矢印（ローズ・破線）
const arrow = (id, d) =>
  `<defs><marker id="${id}" markerWidth="10" markerHeight="10" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#C88A82"/></marker></defs>` +
  `<path d="${d}" fill="none" stroke="#C88A82" stroke-width="6" stroke-dasharray="3 13" stroke-linecap="round" marker-end="url(#${id})"/>`;
// 動作の注記（ローズ文字）
const label = (x, y, t, anchor = 'start') =>
  `<text x="${x}" y="${y}" text-anchor="${anchor}" font-family="${SANS}" font-size="31" font-weight="700" fill="#B06E60">${t}</text>`;
// フォーム/可動域ガイド（ゴールド破線＋ゴールド文字）
const guide = (x1, y1, x2, y2, tx, ty, t, anchor = 'start') =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#C2A268" stroke-width="4" stroke-dasharray="11 8"/>` +
  `<text x="${tx}" y="${ty}" text-anchor="${anchor}" font-family="${SANS}" font-size="26" font-weight="700" fill="#9A7B4F">${t}</text>`;
// ①②③ 手順番号バッジ（ゴールド円・白数字）
const badges = pts =>
  `<g text-anchor="middle" font-family="${SERIF}" font-weight="700" font-size="30" fill="#fff">` +
  pts.map((p, i) => `<circle cx="${p[0]}" cy="${p[1]}" r="27" fill="#C2A268"/><text x="${p[0]}" y="${p[1] + 11}">${i + 1}</text>`).join('') +
  `</g>`;

export const EX_VISUALS = {
  // ベーシックスクワット（真横・3コマ）
  pt_squat_basic: { img: 'assets/ex-squat.png', vb: '0 0 1672 941',
    overlay: arrow('mk_squat', 'M340,112 Q790,175 1185,352')
      + label(430, 104, '下ろす（戻すは逆の順で）')
      + guide(1112, 690, 1486, 690, 1110, 672, '太ももが床と平行まで')
      + badges([[250, 898], [815, 898], [1290, 898]]) },

  // スモウスクワット（正面・3コマ・ワイドスタンス）
  pt_sumo_squat: { img: 'assets/ex-sumo.png', vb: '0 0 1672 941',
    overlay: arrow('mk_sumo', 'M440,150 Q905,255 1300,368')
      + label(470, 140, '腰を真下に下ろす')
      + guide(1235, 700, 1545, 700, 1233, 682, '太ももが床と平行まで')
      + badges([[345, 900], [880, 900], [1375, 900]]) },

  // リバースランジ（真横・3コマ）
  pt_reverse_lunge: { img: 'assets/ex-lunge.png', vb: '0 0 1672 941',
    overlay: arrow('mk_lunge', 'M365,158 Q855,185 1235,318')
      + label(395, 146, '後ろに引いて沈む')
      + guide(1330, 648, 1560, 648, 1250, 630, '前ももが床と平行')
      + badges([[290, 900], [810, 900], [1310, 900]]) },

  // グルートブリッジ（真横・仰向け・3コマ）
  pt_glute_bridge: { img: 'assets/ex-bridge.png', vb: '0 0 1672 941',
    overlay: arrow('mk_bridge', 'M430,560 Q860,470 1160,415')
      + label(470, 300, 'お尻を持ち上げる', 'middle')
      + guide(1120, 522, 1470, 450, 1290, 360, '肩・お尻・ひざを一直線に', 'middle')
      + badges([[300, 720], [820, 720], [1300, 720]]) },

  // デッドバグ（仰向け・対角の手足伸ばし・3コマ）
  pt_dead_bug: { img: 'assets/ex-deadbug.png', vb: '0 0 1672 941',
    overlay: label(836, 175, '対角の手と脚を伸ばす（左右交互）', 'middle')
      + guide(655, 596, 910, 596, 655, 636, '腰は床につけたまま')
      + badges([[250, 700], [770, 700], [1280, 700]]) },

  // その場マーチング（正面・ひざ上げ・3コマ）
  cd_march: { img: 'assets/ex-march.png', vb: '0 0 1672 941',
    overlay: arrow('mk_march', 'M1190,600 L1190,458')
      + label(1225, 500, 'ひざは腰の高さまで')
      + badges([[420, 905], [850, 905], [1290, 905]]) },

  // プランク（真横・1コマのキープ種目＝番号なし・フォーム一直線ガイド）
  pt_plank: { img: 'assets/ex-plank.png', vb: '0 0 1672 941',
    overlay: guide(350, 432, 1495, 548, 720, 360, '頭からかかとまで一直線に', 'middle')
      + label(720, 662, 'お尻を上げ下げせず、体幹に力', 'middle') },

  // スケーター（正面・左右クロス・3コマ）
  cd_skater: { img: 'assets/ex-skater.png', vb: '0 0 1672 941',
    overlay: label(565, 450, '左右に重心を移す', 'middle')
      + label(1090, 490, '後ろへ斜めにクロス', 'middle')
      + badges([[310, 905], [830, 905], [1360, 905]]) },

  // ── 第2バッチ：燃焼サーキット（低衝撃有酸素）──

  // ハイニー（正面・もも上げ・3コマ）
  cd_highknee: { img: 'assets/ex-highknee.png', vb: '0 0 1672 941',
    overlay: arrow('mk_highknee', 'M1400,655 L1400,470')
      + label(836, 92, 'お腹の力で、ひざを腰の高さまで速く', 'middle')
      + badges([[355, 895], [833, 895], [1290, 895]]) },

  // サイドステップ・タッチ（正面・左右往復・3コマ）
  cd_sidestep: { img: 'assets/ex-sidestep.png', vb: '0 0 1672 941',
    overlay: arrow('mk_sstepL', 'M842,158 L440,158')
      + arrow('mk_sstepR', 'M842,158 L1244,158')
      + label(842, 116, '左右にテンポよく往復', 'middle')
      + badges([[356, 905], [830, 905], [1360, 905]]) },

  // ボクサー・ジャブ（正面・左右パンチ・3コマ）
  cd_boxer: { img: 'assets/ex-boxer.png', vb: '0 0 1672 941',
    overlay: label(836, 84, '左右交互にまっすぐパンチ', 'middle')
      + arrow('mk_boxer2', 'M702,252 L800,220')
      + arrow('mk_boxer3', 'M1496,252 L1392,216')
      + label(836, 872, 'ひじは伸ばしきらないように', 'middle')
      + badges([[330, 905], [820, 905], [1345, 905]]) },

  // ニー・トゥ・エルボー（正面・対角ひねり・3コマ）
  cd_kneeelbow: { img: 'assets/ex-kneeelbow.png', vb: '0 0 1672 941',
    overlay: label(836, 80, '対角のひじとひざを近づける', 'middle')
      + label(836, 120, 'お腹をひねって脇腹（くびれ）に', 'middle')
      + arrow('mk_ke3', 'M1262,452 L1210,374')
      + badges([[372, 900], [804, 900], [1290, 900]]) },

  // マウンテンクライマー（横・プランク膝寄せ・3コマ）
  cd_mtnclimber: { img: 'assets/ex-mtnclimber.png', vb: '0 0 1672 941',
    overlay: guide(180, 402, 516, 560, 300, 352, '頭からかかとまで一直線', 'middle')
      + arrow('mk_mtn3', 'M1368,560 Q1306,506 1250,474')
      + label(1250, 452, 'ひざを胸へ交互に', 'middle')
      + badges([[300, 735], [820, 735], [1320, 735]]) },

  // クイック・トウタップ（正面・段差つま先タッチ・3コマ）
  cd_toetap: { img: 'assets/ex-toetap.png', vb: '0 0 1672 941',
    overlay: label(836, 84, 'つま先で軽快に交互タッチ', 'middle')
      + label(836, 124, '足首をやわらかく弾ませる', 'middle')
      + arrow('mk_toe1', 'M372,606 L372,704')
      + arrow('mk_toe3', 'M1322,606 L1322,704')
      + badges([[350, 876], [820, 876], [1300, 876]]) },

  // ── 第3バッチ：背中・胸の筋トレ ──

  // プッシュアップ（真横・胸を床へ・3コマ）
  pt_pushup: { img: 'assets/ex-pushup.png', vb: '0 0 1672 941',
    overlay: guide(50, 378, 512, 560, 270, 345, '体は一直線（腰を反らない）', 'middle')
      + arrow('mk_pushup', 'M790,425 L790,530')
      + label(790, 398, 'ひじを曲げて胸を床へ', 'middle')
      + badges([[290, 700], [800, 700], [1300, 700]]) },

  // 膝つきプッシュアップ（真横・入門版・3コマ）※画像は上限リセット後に生成

  // スーパーマン（真横・胸腕脚を持ち上げ・3コマ）
  pt_superman: { img: 'assets/ex-superman.png', vb: '0 0 1672 941',
    overlay: label(836, 120, '背中とお尻で、胸・腕・脚を同時に持ち上げる', 'middle')
      + arrow('mk_super_a', 'M1120,545 L1120,432')
      + arrow('mk_super_l', 'M1565,545 L1565,440')
      + badges([[290, 690], [820, 690], [1320, 690]]) },

  // スイマー（斜め上・対角の手脚交互・3コマ）
  pt_swimmer: { img: 'assets/ex-swimmer.png', vb: '0 0 1672 941',
    overlay: label(836, 120, '対角の手と脚を交互に上げる（水泳のように）', 'middle')
      + arrow('mk_swim_a', 'M615,500 L615,405')
      + arrow('mk_swim_l', 'M1050,450 L1050,358')
      + badges([[290, 700], [810, 700], [1320, 700]]) },

  // バックエクステンション（真横・上体起こし・3コマ）
  pt_back_extension: { img: 'assets/ex-backext.png', vb: '0 0 1672 941',
    overlay: label(760, 140, '胸から上体をゆっくり起こす', 'middle')
      + arrow('mk_backext', 'M1470,540 Q1500,450 1508,360')
      + guide(1120, 565, 1260, 565, 1190, 612, '脚は床につけたまま', 'middle')
      + badges([[300, 720], [860, 720], [1390, 720]]) },

  // Y-T-W（後ろ斜め上・肩甲骨・3コマ＝Y/T/Wの形）
  pt_y_t_w: { img: 'assets/ex-ytw.png', vb: '0 0 1672 941',
    overlay: label(836, 90, '腕でY・T・Wの形をつくる（肩甲骨を寄せる）', 'middle')
      + `<g text-anchor="middle" font-family="${SERIF}" font-weight="700" font-size="50" fill="#9A7B4F"><text x="290" y="840">Y</text><text x="800" y="840">T</text><text x="1330" y="840">W</text></g>` },
};
