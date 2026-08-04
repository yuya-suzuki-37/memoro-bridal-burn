// ===================================================================
// 低衝撃 有酸素 (CARDIO_LOW) — ジャンプなしで心拍を上げる自宅有酸素
// 「燃焼サーキット」に実体を与える中核。膝にやさしく、器具は基本不要。
// technique:'cardio_low' は安全フィルタのNG_TECH(cardio/plyometric)に
// 該当しない別カテゴリ＝サーキットに採用される。bodyPart:'fullbody'。
// ===================================================================
import { SVG2 } from './svg-library.js';

export const DB_CARDIO = [
  {
    id:'cd_march', name:'その場マーチング', courses:['personal'],
    targetProblems:[], category:'training', technique:'cardio_low', bodyPart:'fullbody', intensity:2,
    equipment:'なし', position:'standing', duration:'40秒',
    illustration: SVG2.marchHighKnee,
    purpose:'いちばん手軽な有酸素。心拍を上げて脂肪燃焼のスイッチを入れる。',
    how:['背すじを伸ばして立つ。','その場で腿を上げて足踏み。腕も大きく振る。','弾まず、リズムよく続ける。'],
    cues:{ do:'かかとから静かに着地。', dont:'背中を丸めて下を向かない。' },
    why:'膝への衝撃ゼロで心拍を上げられる、自宅有酸素の基本。'
  },
  {
    id:'cd_highknee', name:'ハイニー（腿上げ）', courses:['personal'],
    targetProblems:[], category:'training', technique:'cardio_low', bodyPart:'fullbody', intensity:3,
    equipment:'なし', position:'standing', duration:'40秒',
    illustration: SVG2.marchHighKnee,
    purpose:'腿を高く速く上げて、消費カロリーと体幹を同時に。',
    how:['その場で片膝を腰の高さまで引き上げる。','左右を速めのテンポで入れ替える。','お腹の力で脚を引き上げる意識。'],
    cues:{ do:'着地は音を立てず静かに。', dont:'腰を反らせない。' },
    why:'マーチングより強度が高く、下腹と心肺にしっかり効く。'
  },
  {
    id:'cd_sidestep', name:'サイドステップ・タッチ', courses:['personal'],
    targetProblems:[], category:'training', technique:'cardio_low', bodyPart:'fullbody', intensity:2,
    equipment:'なし', position:'standing', duration:'40秒',
    illustration: SVG2.sideStep,
    purpose:'左右に動いて、内ももとお尻も使う横方向の有酸素。',
    how:['右へ一歩、左足を寄せてタッチ。','左へ戻る。腕も合わせて振る。','テンポよく左右に往復。'],
    cues:{ do:'膝はつま先と同じ向きに。', dont:'上体が左右に倒れない。' },
    why:'前後だけでなく横の動きで、脚全体をまんべんなく使える。'
  },
  {
    id:'cd_skater', name:'スケーター（ジャンプなし）', courses:['personal'],
    targetProblems:[], category:'training', technique:'cardio_low', bodyPart:'fullbody', intensity:3,
    equipment:'なし', position:'standing', duration:'40秒',
    illustration: SVG2.sideStep,
    purpose:'横方向の重心移動で、お尻・内ももを強めに使う燃焼系。',
    how:['右足に体重を乗せ、左足を後ろへ斜めにクロス。','反対も。スケートのように左右へ。','ジャンプせず、滑らかに大きく。'],
    cues:{ do:'軸脚のお尻で体を支える。', dont:'膝が内側に入らない。' },
    why:'ジャンプなしでも横移動で心拍と下半身にしっかり効く。'
  },
  {
    id:'cd_boxer', name:'ボクサー・ジャブ', courses:['personal'],
    targetProblems:[], category:'training', technique:'cardio_low', bodyPart:'fullbody', intensity:2,
    equipment:'なし', position:'standing', duration:'45秒',
    illustration: SVG2.standing,
    purpose:'上半身を大きく動かして、腕・背中・心肺を温める。',
    how:['軽く足を開き、両手を顔の前でガード。','左右交互にまっすぐパンチを打つ。','小さく足踏みしながらリズムよく。'],
    cues:{ do:'肩の力を抜いて速く。', dont:'肘を伸ばしきって痛めない。' },
    why:'上半身主導で心拍を上げられ、二の腕・背中もすっきり。'
  },
  {
    id:'cd_kneeelbow', name:'ニー・トゥ・エルボー', courses:['personal'],
    targetProblems:[], category:'training', technique:'cardio_low', bodyPart:'fullbody', intensity:2,
    equipment:'なし', position:'standing', duration:'40秒',
    illustration: SVG2.marchHighKnee,
    purpose:'膝と対角の肘を近づけ、くびれ作りと有酸素を同時に。',
    how:['立って両手を頭の後ろに添える。','右膝を上げ、左肘を近づける。','左右交互にリズムよく。'],
    cues:{ do:'お腹をひねって近づける。', dont:'首を手で引っぱらない。' },
    why:'腹斜筋（くびれ）を使いながら心拍も上がる一石二鳥。'
  },
  {
    id:'cd_mtnclimber', name:'マウンテンクライマー（ゆっくり）', courses:['personal'],
    targetProblems:[], category:'training', technique:'cardio_low', bodyPart:'fullbody', intensity:3,
    equipment:'なし', position:'prone', duration:'40秒',
    illustration: SVG2.bearCrawl,
    purpose:'プランク姿勢から膝を胸へ。全身と体幹の強めの燃焼。',
    how:['手は肩の下、体を一直線にしたプランク姿勢。','片膝を胸に引き寄せ、戻して反対も。','速すぎず、腰を落とさずに。'],
    cues:{ do:'お尻を上げすぎず一直線をキープ。', dont:'腰が反って落ちない。' },
    why:'体幹を固めながら脚を動かす、消費の大きい定番の燃焼種目。'
  },
  {
    id:'cd_toetap', name:'クイック・トウタップ', courses:['personal'],
    targetProblems:[], category:'training', technique:'cardio_low', bodyPart:'fullbody', intensity:2,
    equipment:'椅子', position:'standing', duration:'30秒',
    illustration: SVG2.toeTap,
    purpose:'つま先で軽快にタッチ。心拍をキープする小刻みな有酸素。',
    how:['低い椅子や段差の前に立つ。','つま先で交互に軽くタッチする。','腕も振って速いテンポで。'],
    cues:{ do:'足首をやわらかく弾ませる。', dont:'かかとからドスンと踏まない。' },
    why:'省スペースで手軽に、心拍を上げ続けられる。'
  },
];
