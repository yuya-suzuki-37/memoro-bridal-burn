// ===================================================================
// 整体師セルフケア (SEITAI) — ストレッチ・筋膜リリース・モビリティ
// 全エントリ: courses:['seitai'] を含む (一部は yoga にも所属)
// ===================================================================

import { SVG2 } from './svg-library.js';

const DB_SEITAI = [
  // ============== NECK / 首 (12種) ==============
  {
    id:'st_neck_retract', name:'チンタック', courses:['seitai','personal','pilates'],
    targetProblems:['forwardHead','thoracicKyphosis'],
    category:'selfcare', technique:'mobility', bodyPart:'neck', intensity:1,
    equipment:'なし', position:'sitting', duration:'10回 × 2セット',
    illustration: SVG2.neckRotation,
    purpose:'頭部前方位の根本筋・深部頸屈筋を再教育する。',
    how:['椅子に座り背筋を伸ばす。','あごを軽く引き、後頭部を真後ろに平行移動。','5秒キープしてゆっくり戻す。'],
    cues:{do:'二重あごを作る感覚で。',dont:'うつむかない。'},
    why:'デスクワーク姿勢で硬直した深部頸屈筋を活性化。1日数回で首こりが軽くなる。'
  },
  {
    id:'st_neck_lateral', name:'首側屈ストレッチ', courses:['seitai','yoga'],
    targetProblems:['forwardHead','roundedShoulders'],
    category:'selfcare', technique:'stretch', bodyPart:'neck', intensity:1,
    equipment:'なし', position:'sitting', duration:'各20秒 × 2セット',
    illustration: SVG2.neckSide,
    purpose:'肩こりの主犯・上部僧帽筋と肩甲挙筋をリリース。',
    how:['椅子に座り片手で椅子の縁を握る。','反対の手を頭の上に乗せ、ゆっくり耳を肩へ。','20秒キープ。反対側も。'],
    cues:{do:'肩は下げたまま。',dont:'頭を強く引っ張らない。'},
    why:'上部僧帽筋は緊張性頭痛の主因。リリースで頭が軽くなる。'
  },
  {
    id:'st_neck_rotation', name:'首の回旋ストレッチ', courses:['seitai','yoga'],
    targetProblems:['forwardHead','lateralAsymmetry'],
    category:'selfcare', technique:'mobility', bodyPart:'neck', intensity:1,
    equipment:'なし', position:'sitting', duration:'各方向5回 × 2セット',
    illustration: SVG2.neckRotation,
    purpose:'首の回旋可動域を取り戻し、肩こり・寝違え予防。',
    how:['背筋を伸ばして座る。','ゆっくり顔を右に向け、視界の端まで。','3秒キープして戻る。左も同様。'],
    cues:{do:'肩は動かさない。',dont:'反動をつけない。'},
    why:'C1-C2の回旋制限は頭痛・めまいの隠れた原因。'
  },
  {
    id:'st_suboccipital', name:'後頭下筋リリース', courses:['seitai'],
    targetProblems:['forwardHead','thoracicKyphosis'],
    category:'selfcare', technique:'release', bodyPart:'neck', intensity:1,
    equipment:'テニスボール2個', position:'supine', duration:'2分',
    illustration: SVG2.ballRelease,
    purpose:'眼精疲労・緊張型頭痛の元凶、後頭下筋群を圧迫リリース。',
    how:['仰向けで靴下にテニスボールを2個入れ後頭部の付け根に置く。','重みで沈み込ませ2分。','深呼吸を続ける。'],
    cues:{do:'目を閉じて呼吸に集中。',dont:'痛みを我慢しない。'},
    why:'後頭下筋群は眼球運動と神経直結。リリースで視界がクリアになる。'
  },
  {
    id:'st_neck_extend', name:'頸長後屈ストレッチ', courses:['seitai'],
    targetProblems:['forwardHead'],
    category:'selfcare', technique:'stretch', bodyPart:'neck', intensity:1,
    equipment:'なし', position:'sitting', duration:'20秒 × 3セット',
    illustration: SVG2.neckTilt,
    purpose:'後頭下筋・上部僧帽筋・頭半棘筋をリリース。',
    how:['背筋を伸ばし座る。あごを軽く引く。','頭頂を天井へ引き上げ、首の後ろを伸ばす。','20秒キープ。'],
    cues:{do:'頭頂を上に牽引するイメージ。',dont:'強くうつむかない。'},
    why:'眼精疲労・頭痛が劇的に軽くなる。'
  },
  {
    id:'st_scm_stretch', name:'胸鎖乳突筋ストレッチ', courses:['seitai'],
    targetProblems:['forwardHead','roundedShoulders'],
    category:'selfcare', technique:'stretch', bodyPart:'neck', intensity:2,
    equipment:'なし', position:'sitting', duration:'各15秒 × 2セット',
    illustration: SVG2.neckTilt,
    purpose:'頭部前方位で短縮するSCMを伸ばし、首前面を解放。',
    how:['鎖骨上を反対の手で軽く押さえる。','顔を斜め上に向け、首の前外側を伸ばす。','15秒キープ。反対側も。'],
    cues:{do:'痛気持ちいい範囲で。',dont:'呼吸を止めない。'},
    why:'SCMは頭部前方位を悪化させる主役。緩めると姿勢が自然に整う。'
  },
  {
    id:'st_scalene_stretch', name:'斜角筋ストレッチ', courses:['seitai'],
    targetProblems:['forwardHead','roundedShoulders'],
    category:'selfcare', technique:'stretch', bodyPart:'neck', intensity:2,
    equipment:'なし', position:'sitting', duration:'各20秒 × 2セット',
    illustration: SVG2.neckSide,
    purpose:'呼吸を浅くする斜角筋を緩める。手のしびれにも有効。',
    how:['椅子の縁を片手で握り肩を固定。','反対の手で頭を斜め後ろへ倒す。','20秒キープ。反対も。'],
    cues:{do:'胸を張ったまま。',dont:'肩がすくまないように。'},
    why:'斜角筋は呼吸補助筋。緩めると呼吸が深くなる。'
  },
  {
    id:'st_levator_stretch', name:'肩甲挙筋ストレッチ', courses:['seitai'],
    targetProblems:['forwardHead','roundedShoulders'],
    category:'selfcare', technique:'stretch', bodyPart:'neck', intensity:1,
    equipment:'なし', position:'sitting', duration:'各20秒 × 2セット',
    illustration: SVG2.neckSide,
    purpose:'肩こりの主犯・肩甲挙筋をピンポイントで伸ばす。',
    how:['顔を斜め下(脇の下を見る方向)に向ける。','同側の手で後頭部を軽く前下へ引く。','20秒キープ。'],
    cues:{do:'肩は下げる。',dont:'反対の肩が上がらない。'},
    why:'肩甲挙筋は「肩こりトリガーゾーン」の代表格。'
  },
  {
    id:'st_upper_trap_pin', name:'上部僧帽筋ピンプレス', courses:['seitai'],
    targetProblems:['forwardHead','roundedShoulders'],
    category:'selfcare', technique:'release', bodyPart:'neck', intensity:2,
    equipment:'指/ボール', position:'sitting', duration:'2分',
    illustration: SVG2.neckLymph,
    purpose:'デスクワークで凝り固まる上部僧帽筋を圧迫＋揺らしで解放。',
    how:['首と肩の付け根のコリポイントを反対の指で圧迫。','30秒押したまま首をゆっくり左右に倒す。','左右合計2分。'],
    cues:{do:'痛気持ちいい強さ。',dont:'強く揉み込まない。'},
    why:'指圧後にストレッチで「動きながら緩める」が最も効果的。'
  },
  {
    id:'st_neck_drain', name:'首リンパ流し', courses:['seitai'],
    targetProblems:['general'],
    category:'selfcare', technique:'massage', bodyPart:'neck', intensity:1,
    equipment:'なし', position:'sitting', duration:'1分',
    illustration: SVG2.neckLymph,
    purpose:'首〜鎖骨のリンパを流し、顔のむくみ・小顔効果。',
    how:['耳下から鎖骨まで指4本でなでる(片手3回ずつ)。','鎖骨上のくぼみを軽く押す。','左右で合計1分。'],
    cues:{do:'力は紙1枚なでる程度。',dont:'こすって赤くしない。'},
    why:'首のリンパは顔の老廃物の出口。むくみ・くすみ改善に直結。'
  },
  {
    id:'st_chin_glide', name:'チングライド', courses:['seitai','pilates'],
    targetProblems:['forwardHead','thoracicKyphosis'],
    category:'selfcare', technique:'mobility', bodyPart:'neck', intensity:1,
    equipment:'なし', position:'sitting', duration:'10回 × 2セット',
    illustration: SVG2.neckRotation,
    purpose:'あごを前→後ろに滑らせ、頸椎の分節モビリティを高める。',
    how:['背筋を伸ばし座る。','あごを真っ直ぐ前にスライドさせる。','次に真っ直ぐ後ろへ。10往復。'],
    cues:{do:'頭が上下しない。',dont:'うつむかない。'},
    why:'頸椎は前後の滑り運動が苦手。これだけで首の重さが半分に感じる人も。'
  },
  {
    id:'st_neck_circle', name:'首ぐるぐるモビリティ', courses:['seitai'],
    targetProblems:['general','forwardHead'],
    category:'selfcare', technique:'mobility', bodyPart:'neck', intensity:1,
    equipment:'なし', position:'sitting', duration:'各方向5周',
    illustration: SVG2.neckRotation,
    purpose:'首の全方向モビリティを取り戻す。',
    how:['ゆっくり頭で大きな円を描く。','右回り5周、左回り5周。','各点で1秒止まって伸びを感じる。'],
    cues:{do:'ゆっくり大きく。',dont:'痛みのある角度は飛ばす。'},
    why:'毎朝30秒で頸椎の朝のこわばりが消える。'
  },

  // ============== SHOULDER / 肩 (15種) ==============
  {
    id:'st_shoulder_roll', name:'肩回し(前後)', courses:['seitai','yoga','pilates'],
    targetProblems:['roundedShoulders','forwardHead'],
    category:'selfcare', technique:'mobility', bodyPart:'shoulder', intensity:1,
    equipment:'なし', position:'sitting', duration:'各方向10回',
    illustration: SVG2.shoulderRoll,
    purpose:'肩甲骨の動きをリセットし巻き肩を解除。',
    how:['両肩で大きな円を描くように後ろ回し10回。','次に前回し10回。','ゆっくり大きく動かす。'],
    cues:{do:'肩甲骨を意識する。',dont:'首をすくめない。'},
    why:'肩甲骨は背骨と繋がる「動く骨」。動かさない日が続くと癒着する。'
  },
  {
    id:'st_doorway_chest', name:'ドアフレーム胸ストレッチ', courses:['seitai','personal','yoga'],
    targetProblems:['roundedShoulders','forwardHead','thoracicKyphosis'],
    category:'selfcare', technique:'stretch', bodyPart:'chest', intensity:2,
    equipment:'ドア枠', position:'standing', duration:'30秒 × 左右2セット',
    illustration: SVG2.shoulderOpen,
    purpose:'巻き肩の主犯・大胸筋と小胸筋をリリース。',
    how:['ドア枠に前腕を当てる(肘90度・肩90度)。','体を前にゆっくり踏み出す。','30秒キープ。腕の高さを45/90/120度で変える。'],
    cues:{do:'肩甲骨を下げてから胸を開く。',dont:'頭を前に突き出さない。'},
    why:'小胸筋は胸郭出口症候群の主因。'
  },
  {
    id:'st_scap_squeeze', name:'肩甲骨スクイーズ', courses:['seitai','personal','pilates'],
    targetProblems:['roundedShoulders','thoracicKyphosis'],
    category:'selfcare', technique:'mobility', bodyPart:'shoulder', intensity:1,
    equipment:'なし', position:'sitting', duration:'15回 × 2セット',
    illustration: SVG2.shoulderBlade,
    purpose:'菱形筋・下部僧帽筋を活性化し背中を起こす。',
    how:['椅子に座り胸を張る。','肩甲骨を寄せ合うようにギュッと収縮。','5秒キープしてリラックス。15回。'],
    cues:{do:'背骨の方へ寄せる。',dont:'肩がすくまない。'},
    why:'巻き肩で弱化する菱形筋を「目覚めさせる」基本エクササイズ。'
  },
  {
    id:'st_pec_minor_release', name:'小胸筋リリース', courses:['seitai'],
    targetProblems:['roundedShoulders','forwardHead'],
    category:'selfcare', technique:'release', bodyPart:'chest', intensity:2,
    equipment:'テニスボール', position:'standing', duration:'各60秒',
    illustration: SVG2.ballRelease,
    purpose:'巻き肩の真犯人・小胸筋をピンポイントで解放。',
    how:['鎖骨の下指2本のくぼみにボールを当てて壁に押し付ける。','痛気持ちいいポイントで60秒。','反対側も。'],
    cues:{do:'呼吸を止めない。',dont:'神経のしびれを感じたらすぐ中止。'},
    why:'小胸筋は全長10cmしかないが、巻き肩の最大原因。'
  },
  {
    id:'st_wall_angel', name:'ウォールエンジェル', courses:['seitai','personal','pilates'],
    targetProblems:['roundedShoulders','thoracicKyphosis','forwardHead'],
    category:'selfcare', technique:'mobility', bodyPart:'shoulder', intensity:2,
    equipment:'壁', position:'standing', duration:'10回 × 2セット',
    illustration: SVG2.shoulderBlade,
    purpose:'背中・後頭部・お尻を壁につけたまま腕を上下し肩甲骨の動きを再教育。',
    how:['壁に背中をつけ後頭部・両肩・お尻を壁に。','腕を「W」の形にして壁につける。','ゆっくり「Y」になるまで上に。10回。'],
    cues:{do:'腕は終始壁に。',dont:'腰を反らない。'},
    why:'肩甲骨上方回旋の最重要エクササイズ。'
  },
  {
    id:'st_tspine_extension', name:'胸椎エクステンション', courses:['seitai','personal'],
    targetProblems:['thoracicKyphosis','roundedShoulders','forwardHead'],
    category:'selfcare', technique:'mobility', bodyPart:'back', intensity:2,
    equipment:'フォームローラー', position:'supine', duration:'10回 × 2セット',
    illustration: SVG2.foamRoll,
    purpose:'凍りついた胸椎の伸展可動域を取り戻す。',
    how:['フォームローラーを胸椎中部の真下に横向きに。','両手で頭を支えお尻は床。','息を吐きながら胸を反らす。'],
    cues:{do:'反るのは胸椎、腰は反らさない。',dont:'首を強く反らさない。'},
    why:'胸椎モビリティは肩こり・腰痛両方の鍵。'
  },
  {
    id:'st_tspine_foam_roll', name:'胸郭フォームロール', courses:['seitai'],
    targetProblems:['thoracicKyphosis','roundedShoulders'],
    category:'selfcare', technique:'release', bodyPart:'back', intensity:2,
    equipment:'フォームローラー', position:'supine', duration:'2分',
    illustration: SVG2.foamRoll,
    purpose:'脊柱起立筋・胸腰筋膜のリリース。',
    how:['ローラーを胸椎中部に。','両手を頭の後ろで支え、お尻を上げて前後に転がす。','痛気持ちいいポイントで30秒静止。'],
    cues:{do:'呼吸を続ける。',dont:'首の上では転がさない。'},
    why:'胸郭の固さは深い呼吸を妨げる。'
  },
  {
    id:'st_lat_stretch', name:'広背筋ストレッチ', courses:['seitai','yoga'],
    targetProblems:['roundedShoulders','thoracicKyphosis'],
    category:'selfcare', technique:'stretch', bodyPart:'back', intensity:2,
    equipment:'なし', position:'standing', duration:'各30秒 × 2セット',
    illustration: SVG2.sideStretch,
    purpose:'腕を上げにくくする広背筋を伸ばす。',
    how:['立位で片手を頭上に伸ばし反対側に体を倒す。','脇から腰までの一直線を感じる。','30秒。反対側も。'],
    cues:{do:'息を吐きながら深く。',dont:'前傾しない。'},
    why:'広背筋は腕と骨盤を繋ぐ大きな筋。緊張すると姿勢全体が崩れる。'
  },
  {
    id:'st_thread_needle', name:'糸通しのポーズ', courses:['seitai','yoga'],
    targetProblems:['thoracicKyphosis','lateralAsymmetry'],
    category:'selfcare', technique:'mobility', bodyPart:'back', intensity:2,
    equipment:'マット', position:'quadruped', duration:'各30秒 × 2セット',
    illustration: SVG2.threadNeedle,
    purpose:'胸椎回旋と肩甲骨を同時にリリース。',
    how:['四つん這いから右手を左腕の下に通す。','右肩と頭をマットに下ろす。','30秒。反対も。'],
    cues:{do:'お尻は高い位置でキープ。',dont:'首に体重を乗せない。'},
    why:'デスクワークで失う胸椎回旋を取り戻す名作。'
  },
  {
    id:'st_shoulder_dislocate', name:'タオル肩回し', courses:['seitai','personal'],
    targetProblems:['roundedShoulders','forwardHead'],
    category:'selfcare', technique:'mobility', bodyPart:'shoulder', intensity:2,
    equipment:'タオル', position:'standing', duration:'10回 × 2セット',
    illustration: SVG2.shoulderOpen,
    purpose:'肩関節の全方向モビリティ。',
    how:['タオルを肩幅より広く持つ。','腕を伸ばしたまま頭上から背中側へ。','再び前へ。10回。'],
    cues:{do:'腕は曲げない。',dont:'痛みのある角度では止める。'},
    why:'肩関節の全可動域を1分でチェック&改善できる。'
  },
  {
    id:'st_eagle_arm', name:'イーグルアーム', courses:['seitai','yoga'],
    targetProblems:['roundedShoulders'],
    category:'selfcare', technique:'stretch', bodyPart:'shoulder', intensity:2,
    equipment:'なし', position:'sitting', duration:'各30秒 × 2セット',
    illustration: SVG2.shoulderBlade,
    purpose:'後ろ側の肩甲骨周りをストレッチ。',
    how:['右腕を左腕の下に絡める。','手の甲または手のひらを合わせ前方に。','肘を上に持ち上げ30秒。反対も。'],
    cues:{do:'肩甲骨を広げる感覚。',dont:'首がすくまない。'},
    why:'巻き肩の人ほど背中側の癒着が強い。'
  },
  {
    id:'st_reverse_prayer', name:'リバースプレイヤー', courses:['seitai','yoga'],
    targetProblems:['roundedShoulders','forwardHead'],
    category:'selfcare', technique:'stretch', bodyPart:'shoulder', intensity:3,
    equipment:'なし', position:'standing', duration:'30秒 × 2セット',
    illustration: SVG2.shoulderOpen,
    purpose:'胸・肩前面・手首を同時に開く。',
    how:['背中側で両手のひらを合わせて指先を上へ。','肩甲骨を寄せて胸を開く。','30秒キープ。'],
    cues:{do:'肘を後ろへ。',dont:'背中を反らない。'},
    why:'巻き肩・スマホ手首の両方に効く一石二鳥。'
  },
  {
    id:'st_rib_breath', name:'肋骨呼吸', courses:['seitai','yoga','pilates'],
    targetProblems:['roundedShoulders','thoracicKyphosis'],
    category:'selfcare', technique:'breathing', bodyPart:'chest', intensity:1,
    equipment:'なし', position:'sitting', duration:'2分',
    illustration: SVG2.ribBreath,
    purpose:'胸郭の拡張を回復し、呼吸を深くする。',
    how:['両手を肋骨の側面に当てる。','息を吸い肋骨を横に押し広げる。','吐きながら手で肋骨を寄せる。10呼吸。'],
    cues:{do:'肩は上げない。',dont:'お腹だけで呼吸しない。'},
    why:'胸郭が固いと呼吸が浅くなり全身代謝が落ちる。'
  },
  {
    id:'st_pec_doorway_low', name:'低位胸ストレッチ', courses:['seitai'],
    targetProblems:['roundedShoulders'],
    category:'selfcare', technique:'stretch', bodyPart:'chest', intensity:2,
    equipment:'ドア枠', position:'standing', duration:'各30秒',
    illustration: SVG2.shoulderOpen,
    purpose:'大胸筋下部繊維をピンポイントで。',
    how:['ドア枠に肘を肩より下の位置で当てる。','体を前へ。下部繊維の伸びを感じる。','30秒。'],
    cues:{do:'腕の高さを変えて全方向を網羅。',dont:'首が前に出ない。'},
    why:'大胸筋は3方向の繊維がある。全部伸ばす。'
  },
  {
    id:'st_pec_doorway_high', name:'高位胸ストレッチ', courses:['seitai'],
    targetProblems:['roundedShoulders','thoracicKyphosis'],
    category:'selfcare', technique:'stretch', bodyPart:'chest', intensity:2,
    equipment:'ドア枠', position:'standing', duration:'各30秒',
    illustration: SVG2.shoulderOpen,
    purpose:'大胸筋上部繊維をピンポイントで。',
    how:['ドア枠に肘を肩より高い位置で当てる。','体を前へ。鎖骨下の伸びを感じる。','30秒。'],
    cues:{do:'胸を張る。',dont:'反り腰にならない。'},
    why:'上部繊維は鎖骨下のラインを作る美容ポイント。'
  },

  // ============== BACK / 背中・胸郭 (12種) ==============
  {
    id:'st_cat_cow', name:'キャット&カウ', courses:['seitai','yoga','pilates'],
    targetProblems:['thoracicKyphosis','anteriorPelvicTilt','swayBack'],
    category:'selfcare', technique:'mobility', bodyPart:'back', intensity:1,
    equipment:'マット', position:'quadruped', duration:'10往復 × 2セット',
    illustration: SVG2.catCowPose,
    purpose:'脊柱全体の分節モビリティを呼吸と連動させて取り戻す。',
    how:['四つん這い。手は肩の下、膝は股関節の下。','息を吸って背骨を反らす(カウ)。','息を吐いて丸める(キャット)。'],
    cues:{do:'呼吸と動きを連動。',dont:'肘をロックしない。'},
    why:'姿勢改善の土台になる脊柱の動的可動域を作る。'
  },
  {
    id:'st_tspine_book_open', name:'胸椎ブックオープナー', courses:['seitai'],
    targetProblems:['thoracicKyphosis','roundedShoulders','lateralAsymmetry'],
    category:'selfcare', technique:'mobility', bodyPart:'back', intensity:2,
    equipment:'マット', position:'side-lying', duration:'各10回',
    illustration: SVG2.spineTwist,
    purpose:'胸椎回旋＋肩前面ストレッチを一度に。',
    how:['横向きで膝を90度に重ね両手を前。','息を吸って上の手を本のページのように開く。','視線も追って胸を開く。10回。'],
    cues:{do:'下半身は固定。',dont:'腰で回旋しない。'},
    why:'胸椎の片側10〜15度の回旋差は1週間で改善可能。'
  },
  {
    id:'st_thread_needle_supine', name:'仰向け糸通し', courses:['seitai'],
    targetProblems:['thoracicKyphosis','lateralAsymmetry'],
    category:'selfcare', technique:'stretch', bodyPart:'back', intensity:2,
    equipment:'マット', position:'supine', duration:'各30秒 × 2セット',
    illustration: SVG2.threadNeedle,
    purpose:'仰向けで胸椎回旋＋臀部を同時に伸ばす。',
    how:['仰向けで右膝を立て左に倒す。','視線は右へ。両肩はマットに付けたまま。','30秒。反対も。'],
    cues:{do:'肩が浮かないように。',dont:'勢いで倒さない。'},
    why:'寝る前に行うと睡眠の質も上がる。'
  },
  {
    id:'st_qlblock', name:'QLストレッチ(腰方形筋)', courses:['seitai'],
    targetProblems:['lateralAsymmetry','swayBack','anteriorPelvicTilt'],
    category:'selfcare', technique:'stretch', bodyPart:'back', intensity:2,
    equipment:'なし', position:'standing', duration:'各30秒',
    illustration: SVG2.sideStretch,
    purpose:'腰方形筋(QL)を伸ばし腰のだるさを解消。',
    how:['足を腰幅。右手を上に伸ばし左に倒す。','腰の右側面の伸びを感じる。','30秒キープ。反対も。'],
    cues:{do:'お尻を反対側に押し出す。',dont:'前傾・後傾しない。'},
    why:'QLは「裏の腹筋」と呼ばれる。固まると慢性腰痛に。'
  },
  {
    id:'st_lower_back_release', name:'腰部ボールリリース', courses:['seitai'],
    targetProblems:['anteriorPelvicTilt','swayBack','lateralAsymmetry'],
    category:'selfcare', technique:'release', bodyPart:'back', intensity:2,
    equipment:'テニスボール', position:'supine', duration:'各60秒',
    illustration: SVG2.ballRelease,
    purpose:'腰の脊柱起立筋・QLをポイントリリース。',
    how:['仰向けで腰の片側の張りポイントにボールを置く。','膝を立てて体重で圧迫。60秒。','反対も。'],
    cues:{do:'呼吸を続け沈み込む。',dont:'背骨の上では転がさない。'},
    why:'背骨の両脇2cmは「触れる腰痛のスイッチ」。'
  },
  {
    id:'st_qlrunner', name:'ランナーズQLストレッチ', courses:['seitai','yoga'],
    targetProblems:['anteriorPelvicTilt','swayBack'],
    category:'selfcare', technique:'stretch', bodyPart:'back', intensity:2,
    equipment:'なし', position:'standing', duration:'各30秒',
    illustration: SVG2.sideStretch,
    purpose:'ランナー・立ち仕事の人のQL・腸腰筋複合ケア。',
    how:['足を前後に開き後ろ脚を伸ばす。','後ろ脚側の手を頭上に上げ前方に体を倒す。','30秒。反対も。'],
    cues:{do:'お尻を前へ押し出す。',dont:'反り腰にならない。'},
    why:'QL＋腸腰筋＋大腿直筋の連鎖を一度に解放。'
  },
  {
    id:'st_low_back_rocker', name:'ローバックロッカー', courses:['seitai','yoga','pilates'],
    targetProblems:['anteriorPelvicTilt','swayBack'],
    category:'selfcare', technique:'mobility', bodyPart:'back', intensity:1,
    equipment:'マット', position:'supine', duration:'10往復',
    illustration: SVG2.spineFlex,
    purpose:'腰のこわばりを軽い揺れで解放。',
    how:['仰向けで両膝を抱える。','膝を胸へ引き寄せお尻を浮かす。','ゆっくり前後に揺らす。'],
    cues:{do:'リズミカルに。',dont:'首に力を入れない。'},
    why:'起床後の腰のこわばり解消に最適。'
  },
  {
    id:'st_seated_twist', name:'座位ツイスト', courses:['seitai','yoga'],
    targetProblems:['thoracicKyphosis','lateralAsymmetry'],
    category:'selfcare', technique:'mobility', bodyPart:'back', intensity:1,
    equipment:'マット/椅子', position:'sitting', duration:'各30秒',
    illustration: SVG2.seatedTwist,
    purpose:'胸椎・腰椎の回旋モビリティ。',
    how:['長座またはあぐら。背筋を伸ばす。','片手を反対の膝外側に置きツイスト。','30秒。反対も。'],
    cues:{do:'背骨をまず伸ばしてから捻る。',dont:'肩で捻らない。'},
    why:'仕事の合間にできるリセット動作。'
  },
  {
    id:'st_sphinx_release', name:'スフィンクスリリース', courses:['seitai','yoga'],
    targetProblems:['thoracicKyphosis','swayBack'],
    category:'selfcare', technique:'mobility', bodyPart:'back', intensity:1,
    equipment:'マット', position:'prone', duration:'1分',
    illustration: SVG2.sphinx,
    purpose:'胸椎を優しく伸展。',
    how:['うつ伏せ。前腕を肩の下に。','胸を持ち上げて1分キープ。','深呼吸。'],
    cues:{do:'お尻はリラックス。',dont:'腰を強く反らない。'},
    why:'コブラより優しく、誰でもできる胸郭オープナー。'
  },
  {
    id:'st_supine_chest_open', name:'仰向け胸オープナー', courses:['seitai','yoga'],
    targetProblems:['thoracicKyphosis','roundedShoulders'],
    category:'selfcare', technique:'stretch', bodyPart:'chest', intensity:1,
    equipment:'タオル/ローラー', position:'supine', duration:'2分',
    illustration: SVG2.chestOpener,
    purpose:'巻いたタオルを胸椎下に置き重力で胸を開く。',
    how:['タオルを縦に細長く巻き胸椎中部下に。','両腕を頭の上にバンザイ。','2分キープし深呼吸。'],
    cues:{do:'リラックス。',dont:'痛みがあれば中止。'},
    why:'最も簡単な胸郭オープナー。寝る前にもおすすめ。'
  },
  {
    id:'st_lat_pulldown_self', name:'広背筋セルフリリース', courses:['seitai'],
    targetProblems:['roundedShoulders','lateralAsymmetry'],
    category:'selfcare', technique:'release', bodyPart:'back', intensity:2,
    equipment:'フォームローラー', position:'side-lying', duration:'各60秒',
    illustration: SVG2.foamRoll,
    purpose:'広背筋・脇下のリリース。',
    how:['横向きで片腕を頭上に伸ばす。','脇の下〜肋骨側面にローラー。','ゆっくり前後に転がす。'],
    cues:{do:'息を吐きながら沈み込む。',dont:'肋骨の上では止めない。'},
    why:'広背筋が緩むと肩の上がり方が変わる。'
  },
  {
    id:'st_rib_glide', name:'肋骨グライド', courses:['seitai','pilates'],
    targetProblems:['lateralAsymmetry','swayBack'],
    category:'selfcare', technique:'mobility', bodyPart:'back', intensity:1,
    equipment:'なし', position:'standing', duration:'各10回',
    illustration: SVG2.sideStretch,
    purpose:'肋骨と骨盤の位置関係をリセット。',
    how:['足を腰幅。骨盤の位置はそのまま。','肋骨だけを左右に水平移動。','各10回。'],
    cues:{do:'骨盤は固定。',dont:'体ごと傾けない。'},
    why:'スウェイバック改善の鍵動作。'
  },

  // ============== HIP / 股関節 (12種) ==============
  {
    id:'st_hip_flexor', name:'ヒップフレクサーストレッチ', courses:['seitai','personal','yoga'],
    targetProblems:['anteriorPelvicTilt','swayBack'],
    category:'selfcare', technique:'stretch', bodyPart:'hip', intensity:2,
    equipment:'マット', position:'kneeling', duration:'各45秒 × 2セット',
    illustration: SVG2.lungeStretch,
    purpose:'反り腰の主犯・腸腰筋を伸ばす。',
    how:['膝立ちから片足を前に踏み出す。','後ろの膝はマットに。お尻を前に押し出す。','45秒。反対も。'],
    cues:{do:'お腹を縦に伸ばす。',dont:'腰を反らない。'},
    why:'1日座る時間が長いほど腸腰筋は短縮する。'
  },
  {
    id:'st_9090_hip', name:'90/90ヒップストレッチ', courses:['seitai','yoga'],
    targetProblems:['lateralAsymmetry','kneeValgus','anteriorPelvicTilt'],
    category:'selfcare', technique:'stretch', bodyPart:'hip', intensity:2,
    equipment:'マット', position:'sitting', duration:'各45秒',
    illustration: SVG2.ninetyNinety,
    purpose:'股関節の内旋・外旋を同時にストレッチ。',
    how:['前脚膝90度・後ろ脚膝90度に床に置く。','背筋を伸ばし前傾。','45秒。脚を入れ替えて反対も。'],
    cues:{do:'両側のお尻を地面に。',dont:'背中を丸めない。'},
    why:'股関節の左右差を解消する最強種目。'
  },
  {
    id:'st_pigeon', name:'ピジョンストレッチ', courses:['seitai','yoga'],
    targetProblems:['lateralAsymmetry','kneeValgus'],
    category:'selfcare', technique:'stretch', bodyPart:'hip', intensity:2,
    equipment:'マット', position:'prone', duration:'各1分',
    illustration: SVG2.pigeonRest,
    purpose:'外旋筋群(梨状筋等)をしっかり伸ばす。',
    how:['四つん這いから片膝を体の前へ。','後ろ脚をまっすぐ後ろへ伸ばす。','1分キープ。反対も。'],
    cues:{do:'お尻を均等に床へ。',dont:'膝に痛みが出る場合は角度調整。'},
    why:'梨状筋症候群・坐骨神経痛の予防。'
  },
  {
    id:'st_butterfly', name:'バタフライストレッチ', courses:['seitai','yoga'],
    targetProblems:['lateralAsymmetry','posteriorPelvicTilt'],
    category:'selfcare', technique:'stretch', bodyPart:'hip', intensity:1,
    equipment:'マット', position:'sitting', duration:'2分',
    illustration: SVG2.butterflyHip,
    purpose:'内転筋・股関節内側を開く。',
    how:['両足裏を合わせて座る。','膝を床に近づけるよう優しく押す。','背筋を伸ばし前傾。2分。'],
    cues:{do:'呼吸を続ける。',dont:'反動で押さない。'},
    why:'骨盤底筋群もリラックスし生理痛にも有効。'
  },
  {
    id:'st_frog', name:'フロッグストレッチ', courses:['seitai','yoga'],
    targetProblems:['kneeValgus','posteriorPelvicTilt'],
    category:'selfcare', technique:'stretch', bodyPart:'hip', intensity:3,
    equipment:'マット', position:'quadruped', duration:'1分',
    illustration: SVG2.butterflyHip,
    purpose:'内転筋を強く伸ばす。',
    how:['四つん這いから膝を外に大きく開く。','つま先も外向き、すねは床と平行に。','お尻を後ろに引きキープ。'],
    cues:{do:'呼吸を深く。',dont:'痛みのある角度では止める。'},
    why:'内転筋の柔軟性は股関節の自由度を決める。'
  },
  {
    id:'st_glute_release', name:'お尻ボールリリース', courses:['seitai'],
    targetProblems:['lateralAsymmetry','swayBack'],
    category:'selfcare', technique:'release', bodyPart:'hip', intensity:2,
    equipment:'テニスボール', position:'sitting', duration:'各2分',
    illustration: SVG2.ballRelease,
    purpose:'梨状筋・大臀筋深部を圧迫リリース。',
    how:['床に座りお尻の下にボール。','痛気持ちいいポイントで体重をかける。','膝を内外に倒す。2分。反対も。'],
    cues:{do:'深呼吸でリラックス。',dont:'強く転がしすぎない。'},
    why:'長時間座る人の必須メンテ。'
  },
  {
    id:'st_outer_hip_stretch', name:'外側股関節ストレッチ', courses:['seitai','yoga'],
    targetProblems:['lateralAsymmetry','kneeValgus'],
    category:'selfcare', technique:'stretch', bodyPart:'hip', intensity:2,
    equipment:'なし', position:'sitting', duration:'各30秒',
    illustration: SVG2.hipOpener,
    purpose:'大腿筋膜張筋・腸脛靱帯のテンションリリース。',
    how:['長座で右膝を立て左の太もも外に置く。','左肘で右膝を体側へ押す。','30秒。反対も。'],
    cues:{do:'背筋を伸ばす。',dont:'肩で押さない。'},
    why:'O脚・X脚の改善に直結。'
  },
  {
    id:'st_supine_figure4', name:'仰向けフィギュア4', courses:['seitai','yoga'],
    targetProblems:['lateralAsymmetry','swayBack'],
    category:'selfcare', technique:'stretch', bodyPart:'hip', intensity:2,
    equipment:'マット', position:'supine', duration:'各45秒',
    illustration: SVG2.hipOpener,
    purpose:'梨状筋・お尻深部を仰向けで安全に伸ばす。',
    how:['仰向けで右足首を左膝に。','左膝を引き寄せ右ふくらはぎ越しに。','45秒。反対も。'],
    cues:{do:'頭はマットに。',dont:'お尻を浮かさない。'},
    why:'寝る前のリセットに最適。'
  },
  {
    id:'st_lizard', name:'リザードポーズ', courses:['seitai','yoga'],
    targetProblems:['anteriorPelvicTilt','kneeValgus'],
    category:'selfcare', technique:'stretch', bodyPart:'hip', intensity:3,
    equipment:'マット', position:'prone', duration:'各1分',
    illustration: SVG2.lungeStretch,
    purpose:'股関節屈筋・内転筋・ハムストリングを同時に。',
    how:['四つん這いから右足を右手の外側に。','後ろ脚は伸ばし前腕を床へ。','1分。反対も。'],
    cues:{do:'呼吸を深く。',dont:'前膝が内に入らない。'},
    why:'股関節周りの「全方位ストレッチ」。'
  },
  {
    id:'st_glute_bridge_hold', name:'グルートブリッジホールド', courses:['seitai','personal','pilates'],
    targetProblems:['anteriorPelvicTilt','posteriorPelvicTilt','swayBack'],
    category:'training', technique:'strength', bodyPart:'hip', intensity:2,
    equipment:'マット', position:'supine', duration:'30秒 × 3セット',
    illustration: SVG2.bridgeBase,
    purpose:'眠った大臀筋を再活性化。',
    how:['仰向けで膝を立てる。','お尻を持ち上げ膝〜肩を一直線に。','30秒キープ。'],
    cues:{do:'お腹も使う。',dont:'腰を反らない。'},
    why:'臀筋健忘症の最初の処方。'
  },
  {
    id:'st_hip_circle', name:'ヒップサークル', courses:['seitai','yoga'],
    targetProblems:['general','lateralAsymmetry'],
    category:'selfcare', technique:'mobility', bodyPart:'hip', intensity:1,
    equipment:'なし', position:'standing', duration:'各方向10周',
    illustration: SVG2.hipOpener,
    purpose:'股関節を全方向に動かす。',
    how:['立位で片膝を上げる。','膝で大きな円を描く。','各方向10周。反対脚も。'],
    cues:{do:'軸足は安定。',dont:'背中を丸めない。'},
    why:'股関節の動きを毎朝チェックできる。'
  },
  {
    id:'st_happy_baby', name:'ハッピーベイビー', courses:['seitai','yoga'],
    targetProblems:['posteriorPelvicTilt','anteriorPelvicTilt'],
    category:'selfcare', technique:'stretch', bodyPart:'hip', intensity:1,
    equipment:'マット', position:'supine', duration:'1分',
    illustration: SVG2.happyBaby,
    purpose:'股関節・内転筋・腰のリラックス。',
    how:['仰向けで両膝を胸に。','両手で土踏まずまたは足首を持つ。','膝を脇に近づけ1分キープ。'],
    cues:{do:'肩はマットに。',dont:'力を入れすぎない。'},
    why:'寝る前のリラックスポーズの定番。'
  },

  // ============== LEG / 脚・足 (12種) ==============
  {
    id:'st_hamstring', name:'ハムストリングストレッチ', courses:['seitai','yoga','pilates'],
    targetProblems:['posteriorPelvicTilt','swayBack'],
    category:'selfcare', technique:'stretch', bodyPart:'leg', intensity:1,
    equipment:'タオル/ベルト', position:'supine', duration:'各45秒',
    illustration: SVG2.forwardFold,
    purpose:'ハムストリングを安全に伸ばす。',
    how:['仰向けで片脚を天井へ。','タオルを土踏まずに引っ掛け引き寄せる。','45秒。反対も。'],
    cues:{do:'膝は軽く曲げてOK。',dont:'腰が浮かない。'},
    why:'ハム短縮はスウェイバックの原因。'
  },
  {
    id:'st_seated_fold', name:'長座前屈', courses:['seitai','yoga'],
    targetProblems:['posteriorPelvicTilt'],
    category:'selfcare', technique:'stretch', bodyPart:'leg', intensity:2,
    equipment:'マット', position:'sitting', duration:'1分',
    illustration: SVG2.seatedForwardFold,
    purpose:'ハムストリング・背中をまとめて伸ばす。',
    how:['長座。背筋を伸ばす。','骨盤から前傾。手は脚の方へ。','1分キープ。'],
    cues:{do:'息を吐きながら深く。',dont:'背中を丸めて先に倒れない。'},
    why:'柔軟性の指標になる定番ポーズ。'
  },
  {
    id:'st_calf_stretch', name:'ふくらはぎストレッチ', courses:['seitai','yoga'],
    targetProblems:['ankleStiffness','swelling'],
    category:'selfcare', technique:'stretch', bodyPart:'leg', intensity:1,
    equipment:'壁', position:'standing', duration:'各30秒',
    illustration: SVG2.calfStretch,
    purpose:'腓腹筋・ヒラメ筋を伸ばし足首背屈改善。',
    how:['壁に手をつき片脚を後ろへ。','後ろのかかとを床に押し付ける。','30秒。膝を曲げて再度30秒(ヒラメ筋)。'],
    cues:{do:'つま先は真っ直ぐ前。',dont:'お尻が後ろに引けない。'},
    why:'足首の固さは膝・腰の代償動作の元。'
  },
  {
    id:'st_plantar_ball', name:'足底ボールリリース', courses:['seitai'],
    targetProblems:['ankleStiffness','swelling','kneeValgus'],
    category:'selfcare', technique:'release', bodyPart:'foot', intensity:1,
    equipment:'テニス/ゴルフボール', position:'standing', duration:'各2分',
    illustration: SVG2.ballRelease,
    purpose:'足底筋膜・短趾屈筋をリリース。',
    how:['立位または座位でボールを土踏まずの下に。','ゆっくり前後左右に転がす。','2分。反対足も。'],
    cues:{do:'快適な圧で。',dont:'痛みを我慢しない。'},
    why:'足底は「第二の心臓」。リリースで全身循環アップ。'
  },
  {
    id:'st_toe_yoga', name:'足指ヨガ', courses:['seitai','yoga'],
    targetProblems:['ankleStiffness','swelling'],
    category:'selfcare', technique:'mobility', bodyPart:'foot', intensity:1,
    equipment:'なし', position:'sitting', duration:'2分',
    illustration: SVG2.footToes,
    purpose:'足指の独立した動きを取り戻す。',
    how:['親指だけ持ち上げ他は床。','次に親指以外を持ち上げ親指は床。','各10回ずつ。'],
    cues:{do:'集中して。',dont:'足全体が動かない。'},
    why:'足指の働きで体幹の安定性が変わる。'
  },
  {
    id:'st_ankle_mobility', name:'足首モビリティ', courses:['seitai','personal','pilates'],
    targetProblems:['ankleStiffness'],
    category:'selfcare', technique:'mobility', bodyPart:'foot', intensity:2,
    equipment:'壁', position:'kneeling', duration:'各15回',
    illustration: SVG2.calfStretch,
    purpose:'足首背屈の制限を解消。',
    how:['壁の前で片膝立ち。','前足のつま先と壁を5cm離す。','膝を壁にタッチさせる。15回。'],
    cues:{do:'かかとは床から浮かさない。',dont:'膝が内に入らない。'},
    why:'足首背屈10度の差はスクワット深さに直結。'
  },
  {
    id:'st_calf_roll', name:'ふくらはぎフォームロール', courses:['seitai'],
    targetProblems:['ankleStiffness','swelling'],
    category:'selfcare', technique:'release', bodyPart:'leg', intensity:2,
    equipment:'フォームローラー', position:'sitting', duration:'各2分',
    illustration: SVG2.foamRoll,
    purpose:'ふくらはぎの硬さをリリース。',
    how:['長座でふくらはぎの下にローラー。','お尻を浮かせ前後に転がす。','2分。反対も。'],
    cues:{do:'呼吸を続ける。',dont:'膝裏は転がさない。'},
    why:'ふくらはぎはむくみの最大エリア。'
  },
  {
    id:'st_quad_stretch', name:'大腿四頭筋ストレッチ', courses:['seitai','yoga'],
    targetProblems:['anteriorPelvicTilt','swayBack'],
    category:'selfcare', technique:'stretch', bodyPart:'leg', intensity:2,
    equipment:'なし', position:'standing', duration:'各30秒',
    illustration: SVG2.quadStretch,
    purpose:'反り腰・膝張りを生む大腿直筋を伸ばす。',
    how:['立位で片足首を手で掴みお尻に近づける。','膝を後ろに引く。','30秒。反対も。'],
    cues:{do:'骨盤後傾を意識。',dont:'反り腰にならない。'},
    why:'大腿直筋は二関節筋。骨盤前傾の犯人。'
  },
  {
    id:'st_inner_thigh_stretch', name:'内転筋ストレッチ', courses:['seitai','yoga'],
    targetProblems:['kneeValgus','lateralAsymmetry'],
    category:'selfcare', technique:'stretch', bodyPart:'leg', intensity:2,
    equipment:'マット', position:'sitting', duration:'1分',
    illustration: SVG2.adductorStretch,
    purpose:'内ももを伸ばしKnee-in改善。',
    how:['脚を大きく左右に開いて長座。','背筋を伸ばし前傾。','1分キープ。'],
    cues:{do:'お尻の下にタオルを挟む。',dont:'背中を丸めない。'},
    why:'内転筋は骨盤の安定に重要。'
  },
  {
    id:'st_calf_pump', name:'カーフポンプ', courses:['seitai','pilates'],
    targetProblems:['swelling','ankleStiffness'],
    category:'selfcare', technique:'mobility', bodyPart:'leg', intensity:1,
    equipment:'なし', position:'sitting', duration:'30秒 × 3セット',
    illustration: SVG2.calfStretch,
    purpose:'ふくらはぎポンプで下肢血流UP。',
    how:['座位または立位でかかと上下。','つま先は床に固定。','30秒間リズミカルに。'],
    cues:{do:'最大可動域で。',dont:'勢いだけで動かさない。'},
    why:'デスクワークのむくみ予防のゴールドスタンダード。'
  },
  {
    id:'st_itband_roll', name:'腸脛靱帯ロール', courses:['seitai'],
    targetProblems:['kneeValgus','lateralAsymmetry'],
    category:'selfcare', technique:'release', bodyPart:'leg', intensity:3,
    equipment:'フォームローラー', position:'side-lying', duration:'各2分',
    illustration: SVG2.foamRoll,
    purpose:'腸脛靱帯の張りをリリース(慎重に)。',
    how:['横向きで太もも外側の下にローラー。','上腕で支えながら太もも上下に転がす。','痛気持ちいい範囲で2分。反対も。'],
    cues:{do:'呼吸を止めない。',dont:'激痛なら中止。'},
    why:'ランナー膝の予防・改善。'
  },
  {
    id:'st_shin_release', name:'前脛骨筋リリース', courses:['seitai'],
    targetProblems:['ankleStiffness','swelling'],
    category:'selfcare', technique:'release', bodyPart:'leg', intensity:2,
    equipment:'指/ボール', position:'sitting', duration:'各1分',
    illustration: SVG2.foamRoll,
    purpose:'すねの張りを取りむくみ解消。',
    how:['すねの外側を指で押しほぐす。','膝下からくるぶしまで。','1分ずつ両足。'],
    cues:{do:'痛気持ちいい強さ。',dont:'骨は押さない。'},
    why:'すねの張りは足首の動きを制限する。'
  },

  // ============== BREATHING & RELAX (8種) ==============
  {
    id:'st_belly_breath', name:'腹式呼吸', courses:['seitai','yoga','pilates'],
    targetProblems:['general','swayBack'],
    category:'selfcare', technique:'breathing', bodyPart:'core', intensity:1,
    equipment:'なし', position:'supine', duration:'3分',
    illustration: SVG2.breathing,
    purpose:'横隔膜呼吸で自律神経を整える。',
    how:['仰向けで両手をお腹に。','鼻から4秒吸いお腹を膨らます。','口から8秒で吐く。10呼吸。'],
    cues:{do:'胸は動かない。',dont:'肩が上がらない。'},
    why:'自律神経の唯一のスイッチは呼吸。'
  },
  {
    id:'st_box_breath', name:'ボックスブリージング', courses:['seitai','yoga'],
    targetProblems:['general'],
    category:'selfcare', technique:'breathing', bodyPart:'core', intensity:1,
    equipment:'なし', position:'sitting', duration:'3分',
    illustration: SVG2.breathing,
    purpose:'集中力UP・ストレス軽減の呼吸法。',
    how:['吸う4秒→止める4秒→吐く4秒→止める4秒。','これを繰り返す。','3分。'],
    cues:{do:'リズムを保つ。',dont:'息切れしない強度で。'},
    why:'米海軍特殊部隊も使う集中呼吸法。'
  },
  {
    id:'st_lying_relax', name:'シャバアサナ', courses:['seitai','yoga'],
    targetProblems:['general'],
    category:'selfcare', technique:'meditation', bodyPart:'fullbody', intensity:1,
    equipment:'マット', position:'supine', duration:'5分',
    illustration: SVG2.savasana,
    purpose:'全身脱力で完全リラックス。',
    how:['仰向けで手のひら上、足は自然に開く。','頭の上から順に脱力。','5分。'],
    cues:{do:'寝てもOK。',dont:'考え事を追わない。'},
    why:'運動後の身体への栄養・神経の鎮静。'
  },
  {
    id:'st_yawning_release', name:'あくびリリース', courses:['seitai'],
    targetProblems:['general'],
    category:'selfcare', technique:'mobility', bodyPart:'fullbody', intensity:1,
    equipment:'なし', position:'standing', duration:'1分',
    illustration: SVG2.shoulderOpen,
    purpose:'全身を意図的に伸び＋あくびで一気にリセット。',
    how:['両手を頭上に伸びる。','あごを開き大きく深呼吸。','腰を反らせる。1分。'],
    cues:{do:'本物のあくびを誘発。',dont:'急がない。'},
    why:'迷走神経刺激でリラックスモードに。'
  },
  {
    id:'st_progressive_relax', name:'漸進的筋弛緩法', courses:['seitai'],
    targetProblems:['general'],
    category:'selfcare', technique:'meditation', bodyPart:'fullbody', intensity:1,
    equipment:'マット', position:'supine', duration:'5分',
    illustration: SVG2.savasana,
    purpose:'部位ごとに緊張→弛緩を繰り返し全身脱力。',
    how:['足→脚→お尻→腹→胸→腕→顔の順。','各部位5秒ギュッと→脱力10秒。','5分。'],
    cues:{do:'緊張と弛緩の差を感じる。',dont:'呼吸を止めない。'},
    why:'不眠改善のエビデンスがある手法。'
  },
  {
    id:'st_neck_drain_breath', name:'首リンパ呼吸法', courses:['seitai'],
    targetProblems:['general'],
    category:'selfcare', technique:'breathing', bodyPart:'neck', intensity:1,
    equipment:'なし', position:'sitting', duration:'2分',
    illustration: SVG2.breathing,
    purpose:'呼吸＋首ドレナージュで朝のスッキリ感。',
    how:['鎖骨上のくぼみに指を置く。','鼻から吸って口から「ハー」と吐く。','吐きながら指で軽く下へ。10回。'],
    cues:{do:'吐く時に首の力を抜く。',dont:'指を強く押さない。'},
    why:'リンパ循環＋呼吸の合わせ技。'
  },
  {
    id:'st_478_breath', name:'4-7-8呼吸法', courses:['seitai','yoga'],
    targetProblems:['general'],
    category:'selfcare', technique:'breathing', bodyPart:'core', intensity:1,
    equipment:'なし', position:'sitting', duration:'2分',
    illustration: SVG2.breathing,
    purpose:'入眠・ストレス緩和の即効呼吸法。',
    how:['鼻から4秒吸う。','7秒止める。','口から8秒で吐く。4サイクル。'],
    cues:{do:'吐く時間が長いほど効果大。',dont:'初回は3サイクルでOK。'},
    why:'副交感神経を強制的に優位にする。'
  },
  {
    id:'st_legs_up_wall', name:'壁脚上げポーズ', courses:['seitai','yoga'],
    targetProblems:['swelling','general'],
    category:'selfcare', technique:'mobility', bodyPart:'leg', intensity:1,
    equipment:'壁', position:'supine', duration:'5分',
    illustration: SVG2.legRaise,
    purpose:'下肢のリンパ・血流を一気に戻す。',
    how:['お尻を壁に近づけ仰向け。','両脚を壁に沿って上げる。','5分キープ。'],
    cues:{do:'目を閉じる。',dont:'腰に違和感あれば中止。'},
    why:'夕方のむくみ・疲労を10分でリセット。'
  },

  // ============== EXPANSION PACK 1 (30種追加) ==============
  {
    id:'st_thumb_release', name:'親指筋膜リリース', courses:['seitai'],
    targetProblems:['roundedShoulders','general'],
    category:'selfcare', technique:'release', bodyPart:'arm', intensity:1,
    equipment:'なし', position:'sitting', duration:'各60秒',
    illustration: SVG2.handOpen,
    purpose:'スマホ親指疲労と前腕の張りをリリース。',
    how:['親指の付け根を反対の手で押さえる。','円を描くようにマッサージ。','痛気持ちいい強さで60秒。'],
    cues:{do:'呼吸を続ける。',dont:'強く押しすぎない。'},
    why:'親指の使い過ぎは肩こり・首こりに連動する。'
  },
  {
    id:'st_forearm_release', name:'前腕筋膜リリース', courses:['seitai'],
    targetProblems:['roundedShoulders'],
    category:'selfcare', technique:'release', bodyPart:'arm', intensity:1,
    equipment:'テニスボール', position:'sitting', duration:'各2分',
    illustration: SVG2.ballRelease,
    purpose:'デスクワークの前腕の張りをほどく。',
    how:['前腕をテーブルに置く。','テニスボールで上下に転がす。','痛い箇所は20秒静圧。'],
    cues:{do:'ゆっくり丁寧に。',dont:'骨の上を圧迫しない。'},
    why:'前腕の張りは肩の巻き・首こりに直結。'
  },
  {
    id:'st_wrist_extension', name:'手首伸展ストレッチ', courses:['seitai','yoga'],
    targetProblems:['roundedShoulders'],
    category:'selfcare', technique:'stretch', bodyPart:'arm', intensity:1,
    equipment:'なし', position:'kneeling', duration:'各30秒',
    illustration: SVG2.wristStretch,
    purpose:'手首の屈筋群と前腕内側を伸ばす。',
    how:['四つ這いで指先を膝向きに置く。','体重を後方にずらして手首前面を伸ばす。','30秒×2セット。'],
    cues:{do:'肘を伸ばす。',dont:'痛みが出たら戻す。'},
    why:'タイピング疲労の蓄積を解放。'
  },
  {
    id:'st_pec_minor_release', name:'小胸筋圧迫リリース', courses:['seitai'],
    targetProblems:['roundedShoulders','forwardHead'],
    category:'selfcare', technique:'release', bodyPart:'chest', intensity:2,
    equipment:'テニスボール', position:'standing', duration:'各2分',
    illustration: SVG2.ballRelease,
    purpose:'巻き肩の元凶・小胸筋をピンポイントで緩める。',
    how:['鎖骨の下、肩寄りにテニスボールを当て壁に押し付ける。','腕を上下に動かす。','痛気持ちいい強さで2分。'],
    cues:{do:'呼吸を続ける。',dont:'痛みを我慢しない。'},
    why:'小胸筋短縮が改善すると胸が一気に開く。'
  },
  {
    id:'st_glute_med_release', name:'中臀筋テニスボールリリース', courses:['seitai'],
    targetProblems:['kneeValgus','lateralAsymmetry'],
    category:'selfcare', technique:'release', bodyPart:'hip', intensity:2,
    equipment:'テニスボール', position:'sidelying', duration:'各2分',
    illustration: SVG2.ballRelease,
    purpose:'骨盤安定の要・中臀筋トリガーポイントを解放。',
    how:['横向きで骨盤の外側上部にボール。','痛気持ちいい点で静圧2分。','反対側も。'],
    cues:{do:'呼吸を深く。',dont:'骨の上に当てない。'},
    why:'中臀筋の硬さは膝痛・腰痛の隠れた原因。'
  },
  {
    id:'st_quad_foam_roll', name:'大腿四頭筋フォームロール', courses:['seitai'],
    targetProblems:['anteriorPelvicTilt','kneeValgus'],
    category:'selfcare', technique:'release', bodyPart:'leg', intensity:2,
    equipment:'フォームローラー', position:'prone', duration:'2分',
    illustration: SVG2.foamRoll,
    purpose:'前ももの張りを徹底的にほどき、骨盤前傾を改善。',
    how:['うつ伏せで前腕で支える。','前ももの下にフォームローラー。','膝〜骨盤付近をゆっくり転がす。'],
    cues:{do:'痛い点で30秒静止。',dont:'膝の上は避ける。'},
    why:'前もも短縮は反り腰の主犯。'
  },
  {
    id:'st_it_band_roll', name:'腸脛靭帯フォームロール', courses:['seitai'],
    targetProblems:['kneeValgus','lateralAsymmetry'],
    category:'selfcare', technique:'release', bodyPart:'leg', intensity:2,
    equipment:'フォームローラー', position:'sidelying', duration:'各2分',
    illustration: SVG2.foamRoll,
    purpose:'外もも(IT band)の張りで膝の痛みやO脚を改善。',
    how:['横向きで外ももの下にローラー。','体を支えながらゆっくり上下。','痛い点で20秒静止。'],
    cues:{do:'ゆっくり。',dont:'勢いで転がさない。'},
    why:'外もも硬化は膝の外側痛・腸脛靭帯炎の原因。'
  },
  {
    id:'st_hamstring_roll', name:'ハムストリングフォームロール', courses:['seitai'],
    targetProblems:['posteriorPelvicTilt','swayBack'],
    category:'selfcare', technique:'release', bodyPart:'leg', intensity:2,
    equipment:'フォームローラー', position:'sitting', duration:'各2分',
    illustration: SVG2.foamRoll,
    purpose:'ハムストリングを解放し腰痛を予防。',
    how:['長座でローラーを膝裏の下に。','お尻を浮かせて前後に転がす。','痛い点で静圧。'],
    cues:{do:'ゆっくり。',dont:'膝裏は避ける。'},
    why:'ハム硬化は骨盤後傾と腰痛に直結。'
  },
  {
    id:'st_glute_foam_roll', name:'臀筋フォームロール', courses:['seitai'],
    targetProblems:['anteriorPelvicTilt','swayBack'],
    category:'selfcare', technique:'release', bodyPart:'hip', intensity:2,
    equipment:'フォームローラー', position:'sitting', duration:'各2分',
    illustration: SVG2.foamRoll,
    purpose:'お尻のコリを解放し坐骨神経痛を予防。',
    how:['ローラーにお尻を乗せ片足を反対の膝に。','体重を傾けゆっくり転がす。','反対も。'],
    cues:{do:'痛気持ちいい強さで。',dont:'痛みを我慢しない。'},
    why:'臀筋トリガーポイントは坐骨神経痛の主因。'
  },
  {
    id:'st_lat_roll', name:'広背筋フォームロール', courses:['seitai'],
    targetProblems:['thoracicKyphosis','roundedShoulders'],
    category:'selfcare', technique:'release', bodyPart:'back', intensity:2,
    equipment:'フォームローラー', position:'sidelying', duration:'各2分',
    illustration: SVG2.foamRoll,
    purpose:'広背筋を解放し肩可動域を取り戻す。',
    how:['横向きで腕を伸ばし脇下にローラー。','体重を乗せて前後にゆっくり。','痛い点で静圧。'],
    cues:{do:'呼吸を続ける。',dont:'肋骨を強く圧迫しない。'},
    why:'広背筋短縮は猫背と肩可動制限の主因。'
  },
  {
    id:'st_upper_back_roll', name:'胸椎フォームロール', courses:['seitai'],
    targetProblems:['thoracicKyphosis'],
    category:'selfcare', technique:'mobility', bodyPart:'back', intensity:1,
    equipment:'フォームローラー', position:'supine', duration:'2分',
    illustration: SVG2.foamRoll,
    purpose:'胸椎の伸展可動域を一気に解放。',
    how:['仰向けでローラーを肩甲骨の下に横向きに。','頭を支え背中を反らせる。','少しずつ位置を変えて2分。'],
    cues:{do:'呼吸で深める。',dont:'腰を反らさない。'},
    why:'毎日3分で猫背が改善。'
  },
  {
    id:'st_calf_roll', name:'ふくらはぎフォームロール', courses:['seitai'],
    targetProblems:['ankleStiffness','swayBack'],
    category:'selfcare', technique:'release', bodyPart:'leg', intensity:1,
    equipment:'フォームローラー', position:'sitting', duration:'各2分',
    illustration: SVG2.foamRoll,
    purpose:'ふくらはぎを解放し浮腫みと足首固さを改善。',
    how:['長座でローラーを片方のふくらはぎ下に。','お尻を浮かせ上下に転がす。','内外側も。'],
    cues:{do:'痛い点で静圧。',dont:'アキレス腱は避ける。'},
    why:'ふくらはぎ硬化は冷え・むくみ・腰痛の隠れた原因。'
  },
  {
    id:'st_plantar_release', name:'足裏ボールリリース', courses:['seitai'],
    targetProblems:['ankleStiffness'],
    category:'selfcare', technique:'release', bodyPart:'foot', intensity:1,
    equipment:'テニスボール', position:'standing', duration:'各2分',
    illustration: SVG2.ballRelease,
    purpose:'足底筋膜をほどき全身の連動性を改善。',
    how:['立位で片足の下にボール。','体重を乗せながらゆっくり前後左右に転がす。','2分後反対側。'],
    cues:{do:'ゆっくり呼吸。',dont:'激痛は無理しない。'},
    why:'足底筋膜は全身の筋膜と繋がる。'
  },
  {
    id:'st_psoas_stretch', name:'腸腰筋ストレッチ', courses:['seitai','yoga'],
    targetProblems:['anteriorPelvicTilt','swayBack'],
    category:'selfcare', technique:'stretch', bodyPart:'hip', intensity:2,
    equipment:'なし', position:'kneeling', duration:'各30秒',
    illustration: SVG2.lungeStretch,
    purpose:'反り腰の主犯・腸腰筋を伸ばす。',
    how:['片膝立ち、もう片足を前に。','骨盤を後傾させながら前方に体重を移す。','30秒キープ。'],
    cues:{do:'お尻を締める。',dont:'腰を反らせない。'},
    why:'腸腰筋短縮は反り腰の最大要因。'
  },
  {
    id:'st_pec_doorway', name:'ドア枠胸開きストレッチ', courses:['seitai','personal'],
    targetProblems:['roundedShoulders','thoracicKyphosis'],
    category:'selfcare', technique:'stretch', bodyPart:'chest', intensity:1,
    equipment:'ドア枠', position:'standing', duration:'各30秒',
    illustration: SVG2.shoulderOpen,
    purpose:'大胸筋と小胸筋を同時に伸ばす王道ストレッチ。',
    how:['ドア枠に肘を90度で当てる。','片足を前に踏み出し胸を開く。','30秒キープ。'],
    cues:{do:'肩甲骨を寄せる。',dont:'肩がすくまない。'},
    why:'毎日続けると巻き肩が劇的改善。'
  },
  {
    id:'st_thread_needle', name:'スレッドザニードル', courses:['seitai','yoga'],
    targetProblems:['thoracicKyphosis','lateralAsymmetry'],
    category:'selfcare', technique:'stretch', bodyPart:'spine', intensity:1,
    equipment:'マット', position:'kneeling', duration:'各30秒',
    illustration: SVG2.threadNeedle,
    purpose:'胸椎回旋と肩関節を同時にケア。',
    how:['四つ這いから片手を反対脇下に通す。','肩と頭をマットに。','30秒キープ。'],
    cues:{do:'息を吐いて深める。',dont:'首に痛みあれば中止。'},
    why:'胸椎回旋制限を解放。'
  },
  {
    id:'st_neck_traction', name:'首牽引リラクゼーション', courses:['seitai'],
    targetProblems:['forwardHead'],
    category:'selfcare', technique:'release', bodyPart:'neck', intensity:1,
    equipment:'タオル', position:'supine', duration:'3分',
    illustration: SVG2.neckTilt,
    purpose:'頸椎の自然なカーブを取り戻す。',
    how:['仰向けでタオルを丸めて後頭部の付け根に。','両端を握り頭を軽く引き上げる。','3分静止。'],
    cues:{do:'ゆっくり呼吸。',dont:'強く引っ張らない。'},
    why:'頸椎の自然なカーブを回復させる。'
  },
  {
    id:'st_levator_stretch', name:'肩甲挙筋ストレッチ', courses:['seitai'],
    targetProblems:['forwardHead','roundedShoulders'],
    category:'selfcare', technique:'stretch', bodyPart:'neck', intensity:1,
    equipment:'なし', position:'sitting', duration:'各30秒',
    illustration: SVG2.neckSide,
    purpose:'肩こりの主犯・肩甲挙筋をピンポイントで伸ばす。',
    how:['椅子に座る。','顔を斜め下45度に向け、同側の手で頭頂を引く。','30秒キープ。'],
    cues:{do:'肩を下げる。',dont:'強く引かない。'},
    why:'肩甲挙筋は慢性肩こりの真の原因。'
  },
  {
    id:'st_rib_breathing', name:'肋骨呼吸エクササイズ', courses:['seitai','pilates'],
    targetProblems:['thoracicKyphosis','general'],
    category:'breath', technique:'breath', bodyPart:'breath', intensity:1,
    equipment:'なし', position:'supine', duration:'5分',
    illustration: SVG2.ribBreath,
    purpose:'胸郭の可動性を高め、呼吸を深くする。',
    how:['仰向けで両手を肋骨に置く。','鼻から吸い肋骨を360度に広げる。','口から長く吐く。10呼吸×5セット。'],
    cues:{do:'肩を動かさない。',dont:'お腹だけで呼吸しない。'},
    why:'胸郭可動性が姿勢全体に影響。'
  },
  {
    id:'st_jaw_release', name:'顎関節リリース', courses:['seitai'],
    targetProblems:['forwardHead'],
    category:'selfcare', technique:'release', bodyPart:'neck', intensity:1,
    equipment:'なし', position:'sitting', duration:'2分',
    illustration: SVG2.jawRelease,
    purpose:'顎関節の緊張を解放し頭痛・首こりを改善。',
    how:['指で顎関節(耳前)を円を描きほぐす。','続いて咬筋(頬骨下)も。','深呼吸しながら2分。'],
    cues:{do:'ゆっくり。',dont:'痛みを我慢しない。'},
    why:'食いしばりが頭痛・首こりの隠れた原因。'
  },
  {
    id:'st_eye_release', name:'眼周りリリース', courses:['seitai'],
    targetProblems:['forwardHead'],
    category:'selfcare', technique:'release', bodyPart:'neck', intensity:1,
    equipment:'なし', position:'sitting', duration:'2分',
    illustration: SVG2.eyeCare,
    purpose:'眼精疲労と前頭部緊張をリセット。',
    how:['目を閉じ眉毛の下を指で押し上げる。','こめかみを円マッサージ。','頬骨下も。'],
    cues:{do:'目を閉じてリラックス。',dont:'眼球を直接押さない。'},
    why:'眼精疲労は頭痛・首こりに直結。'
  },
  {
    id:'st_shoulder_circles', name:'肩甲骨サークル', courses:['seitai','yoga','pilates'],
    targetProblems:['roundedShoulders','forwardHead'],
    category:'selfcare', technique:'mobility', bodyPart:'shoulder', intensity:1,
    equipment:'なし', position:'standing', duration:'各方向10回',
    illustration: SVG2.shoulderRoll,
    purpose:'肩甲骨の全方向モビリティを取り戻す。',
    how:['腕を脱力。','肩を前→上→後→下に大きく回す。','逆回転も。'],
    cues:{do:'大きくゆっくり。',dont:'反動を使わない。'},
    why:'肩甲骨可動性は姿勢の土台。'
  },
  {
    id:'st_arm_swing', name:'アームスイング', courses:['seitai','personal'],
    targetProblems:['roundedShoulders','thoracicKyphosis'],
    category:'selfcare', technique:'mobility', bodyPart:'shoulder', intensity:1,
    equipment:'なし', position:'standing', duration:'2分',
    illustration: SVG2.shoulderRoll,
    purpose:'肩関節を全方向にスムーズに動かす。',
    how:['立位で両腕を前後に大きくスイング。','上下スイング、左右クロスも。','各30秒。'],
    cues:{do:'力を抜いて。',dont:'勢いを使いすぎない。'},
    why:'朝の起床時にも有効。'
  },
  {
    id:'st_hip_circles', name:'股関節サークル', courses:['seitai','yoga'],
    targetProblems:['anteriorPelvicTilt','kneeValgus'],
    category:'selfcare', technique:'mobility', bodyPart:'hip', intensity:1,
    equipment:'なし', position:'standing', duration:'各方向10回',
    illustration: SVG2.hipOpener,
    purpose:'股関節の全方向モビリティを取り戻す。',
    how:['片脚立ち、もう片足を上げて円を描く。','大きく10回、逆回りも。','反対脚も。'],
    cues:{do:'軸足を安定させる。',dont:'骨盤が動かない。'},
    why:'股関節可動性は骨盤の動きに直結。'
  },
  {
    id:'st_ankle_circles', name:'足首サークル', courses:['seitai'],
    targetProblems:['ankleStiffness'],
    category:'selfcare', technique:'mobility', bodyPart:'foot', intensity:1,
    equipment:'なし', position:'sitting', duration:'各方向10回',
    illustration: SVG2.calfStretch,
    purpose:'足首の可動性を取り戻す。',
    how:['椅子に座り片足を組む。','足首を大きく回す。','逆回りも。'],
    cues:{do:'大きく。',dont:'反動なし。'},
    why:'足首は全身の土台。固さは膝・腰痛の原因に。'
  },
  {
    id:'st_toe_spread', name:'足指グーチョキパー', courses:['seitai'],
    targetProblems:['ankleStiffness','kneeValgus'],
    category:'selfcare', technique:'mobility', bodyPart:'foot', intensity:1,
    equipment:'なし', position:'sitting', duration:'2分',
    illustration: SVG2.calfStretch,
    purpose:'足指の機能を取り戻し足底アーチを再構築。',
    how:['足指を握る(グー)。','親指のみ上(チョキ)。','全指を大きく開く(パー)。各10回。'],
    cues:{do:'ゆっくり丁寧に。',dont:'痛みなら無理しない。'},
    why:'足指機能は土踏まずと姿勢の根幹。'
  },
  {
    id:'st_supine_twist', name:'仰向け脊柱ツイスト', courses:['seitai','yoga'],
    targetProblems:['lateralAsymmetry','thoracicKyphosis'],
    category:'selfcare', technique:'stretch', bodyPart:'spine', intensity:1,
    equipment:'マット', position:'supine', duration:'各60秒',
    illustration: SVG2.spineTwist,
    purpose:'脊柱回旋とお尻のリリースを同時に。',
    how:['仰向けで両腕を横に開く。','片膝を反対側に倒す。','顔は逆向き。60秒。'],
    cues:{do:'吐きながら深める。',dont:'肩が浮かない。'},
    why:'腰痛予防と内臓マッサージ効果。'
  },
  {
    id:'st_happy_baby', name:'ハッピーベイビーポーズ', courses:['seitai','yoga'],
    targetProblems:['anteriorPelvicTilt','swayBack'],
    category:'selfcare', technique:'stretch', bodyPart:'hip', intensity:1,
    equipment:'マット', position:'supine', duration:'1分',
    illustration: SVG2.happyBaby,
    purpose:'股関節と腰のリリース。骨盤底のリラックスも。',
    how:['仰向けで両膝を胸へ。','両手で土踏まずを掴む。','膝を脇に近づけ揺れる。1分。'],
    cues:{do:'呼吸を深く。',dont:'背中を反らせない。'},
    why:'骨盤底筋のリラックスと股関節解放。'
  },
  {
    id:'st_supine_figure4', name:'仰向けフィギュア4', courses:['seitai','yoga'],
    targetProblems:['kneeValgus','anteriorPelvicTilt'],
    category:'selfcare', technique:'stretch', bodyPart:'hip', intensity:1,
    equipment:'マット', position:'supine', duration:'各60秒',
    illustration: SVG2.pigeonRest,
    purpose:'お尻と梨状筋を伸ばす定番ストレッチ。',
    how:['仰向けで片足首を反対の膝に乗せる。','下の脚を胸に近づける。','60秒。'],
    cues:{do:'お尻が伸びる感覚。',dont:'首に力を入れない。'},
    why:'梨状筋ケアで腰痛・坐骨神経痛を予防。'
  },
];

export { DB_SEITAI };
