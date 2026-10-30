/* Stops are shown in travel order. Dashed map lines are not driving routes. */
/* Japanese text sits next to the Chinese as *_ja fields; a missing *_ja falls back to Chinese. */
const TRIP_DATES=["","2/18","2/19","2/20","2/21","2/22"];
const TRIP_DATE_RANGE="2/18–2/22";
const PLACES={
  airport:{name:"阿蘇熊本機場",lat:32.8372,lng:130.8553,query:"阿蘇熊本機場",area:"抵達、用餐與租車"},
  still_hotel:{name:"THE STILL HOTEL",lat:32.8781399,lng:130.8663223,query:"THE STILL HOTEL 熊本 大津町",area:"Day 1 住宿・肥後大津站旁"},
  shirakawa:{name:"白川水源",lat:32.8231,lng:131.0873,query:"白川水源",area:"南阿蘇"},
  kusasenri:{name:"阿蘇草千里",lat:32.8818,lng:131.0538,query:"草千里ヶ浜",area:"阿蘇山"},
  crater:{name:"阿蘇火山口",lat:32.8846,lng:131.0857,query:"阿蘇中岳火口",area:"僅開放時可前往"},
  aso:{name:"阿蘇午餐區域",lat:32.9373,lng:131.0801,query:"阿蘇市 餐廳",area:"阿蘇"},
  yufuin:{name:"由布院・金鱗湖",lat:33.2667,lng:131.369,query:"金鱗湖",area:"由布院"},
  beppu:{name:"別府市區",lat:33.2796,lng:131.5002,query:"別府駅",area:"住宿與晚餐區域"},
  beppu_hotel:{name:"Beppu Kanko Hotel Ace",lat:33.2920944,lng:131.4604677,query:"Beppu Kanko Hotel Ace",area:"Day 2、Day 3 住宿・別府 IC 附近"},
  safari:{name:"九州自然動物園",lat:33.3549,lng:131.4112,query:"九州自然動物公園 アフリカンサファリ",area:"必去"},
  umi:{name:"海地獄",lat:33.3134,lng:131.4712,query:"海地獄",area:"別府地獄"},
  takegawara:{name:"竹瓦溫泉周邊",lat:33.2779,lng:131.507,query:"竹瓦温泉",area:"別府市區"},
  aso_onsen:{name:"民宿あそげん",lat:32.934736,lng:131.0402001,query:"民宿あそげん 阿蘇",area:"Day 3 C 路線住宿・阿蘇市乙姬"},
  strawberry:{name:"阿蘇健康農園・採草莓",lat:32.8928795,lng:131.0043561,query:"阿蘇健康農園",area:"阿蘇市"},
  daikanbo:{name:"大觀峰",lat:32.9962,lng:131.0674,query:"大観峰",area:"阿蘇北外輪山"},
  kumamoto:{name:"熊本市區",lat:32.8034,lng:130.7100,query:"熊本市中央區",area:"第二次住宿區域"},
  kumamoto_hotel:{name:"相鐵 GRAND FRESA 熊本",lat:32.7988,lng:130.7082,query:"相鉄グランドフレッサ 熊本",area:"Day 4 住宿・下通"},
  castle:{name:"熊本城・城彩苑",lat:32.8058,lng:130.706,query:"熊本城 桜の馬場 城彩苑",area:"熊本城"},
  suizenji:{name:"水前寺成趣園",lat:32.7908,lng:130.7343,query:"水前寺成趣園",area:"熊本市區"},
  shopping:{name:"上通・下通",lat:32.8028,lng:130.7096,query:"熊本 下通商店街",area:"熊本市中心"}
};
const JA_PLACE_NAMES={airport:"阿蘇くまもと空港",still_hotel:"THE STILL HOTEL",shirakawa:"白川水源",kusasenri:"草千里ヶ浜",crater:"阿蘇中岳火口",aso:"阿蘇の昼食エリア",yufuin:"由布院・金鱗湖",beppu:"別府市街",beppu_hotel:"別府観光ホテル エース",safari:"九州自然動物公園アフリカンサファリ",umi:"海地獄",takegawara:"竹瓦温泉周辺",aso_onsen:"民宿あそげん",strawberry:"阿蘇健康農園・いちご狩り",daikanbo:"大観峰",kumamoto:"熊本市街",kumamoto_hotel:"相鉄グランドフレッサ 熊本",castle:"熊本城・桜の馬場 城彩苑",suizenji:"水前寺成趣園",shopping:"上通・下通"};
const PLACE_INFO={
  airport:{scene:"kumamoto",priority:"必要節點",priority_ja:"重要な拠点",level:"core",stay:"用餐 40–50 分鐘",stay_ja:"食事 40〜50分",description:"第一晚的任務是順利吃飯和前往住宿。航廈一樓及そらよかダイニング有抵達旅客可使用的餐飲選擇。",description_ja:"初日の目的は、無事に食事をとって宿泊先へ向かうことです。ターミナル1階や「そらよかダイニング」に、到着後も利用できる飲食店があります。",family:"先準備延誤時可直接吃的輕食，並確認前往肥後大津站的空港 Liner 末班車。",family_ja:"遅延に備えて、すぐ食べられる軽食を用意し、肥後大津駅行き空港ライナーの最終便を確認します。"},
  still_hotel:{scene:"still-hotel",priority:"Day 1 住宿",priority_ja:"Day 1 の宿泊",level:"core",stay:"入住後休息",stay_ja:"チェックイン後は休憩",description:"第一晚確定入住 THE STILL HOTEL，位於肥後大津站旁。從阿蘇熊本機場可搭空港 Liner 前往肥後大津站，再步行約 1 分鐘；晚間務必先確認末班車。",description_ja:"初日は肥後大津駅前の THE STILL HOTEL に宿泊します。阿蘇くまもと空港から空港ライナーで肥後大津駅へ行き、駅から徒歩約1分です。夜は最終便を事前に確認します。",family:"飯店客房未提供嬰兒床或加床的資訊，訂房前應再次確認房型、床寬與幼兒同睡規則；錯過接駁時改搭計程車。",family_ja:"ベビーベッドやエキストラベッドの案内は確認できないため、予約前に部屋タイプ・ベッド幅・添い寝条件を確認します。空港ライナーに間に合わない場合はタクシーを利用します。"},
  shirakawa:{scene:"shirakawa",priority:"建議保留",priority_ja:"おすすめ",level:"flex",stay:"30–40 分鐘",stay_ja:"30〜40分",description:"南阿蘇代表性的清澈湧泉，水邊與樹蔭形成舒服的短程散步，適合早上取車後先讓孩子活動。",description_ja:"南阿蘇を代表する澄んだ湧き水です。水辺と木陰を歩く短い散策が心地よく、朝にレンタカーを受け取った後、子どもが体を動かすのにちょうどよい場所です。",family:"石板和水邊可能濕滑，推車遇階差時改用揹帶較省力。",family_ja:"石畳や水辺は滑りやすいことがあります。段差ではベビーカーより抱っこひもが楽です。"},
  kusasenri:{scene:"kusasenri",priority:"建議保留",priority_ja:"おすすめ",level:"flex",stay:"40–50 分鐘",stay_ja:"40〜50分",description:"阿蘇火山地形中的大片草原，視野開闊，適合在長途行車前後伸展。天候變化會直接影響體感與能見度。",description_ja:"阿蘇の火山地形に広がる大草原で、見晴らしが抜群です。長距離ドライブの前後に体を伸ばすのに向いています。天候によって体感温度や視界が大きく変わります。",family:"風大時加外套；停車、上廁所與走到草原都要算進停留時間。",family_ja:"風が強い日は上着を一枚追加します。駐車、トイレ、草原までの移動も滞在時間に含めて考えます。"},
  crater:{scene:"aso",priority:"開放才考慮",priority_ja:"開放時のみ",level:"optional",stay:"30–45 分鐘",stay_ja:"30〜45分",description:"中岳火山口景觀很有震撼力，但會因火山活動、氣體、道路和天候臨時管制，目前不能當成固定行程。",description_ja:"中岳火口の景観は迫力がありますが、火山活動・火山ガス・道路状況・天候によって急に規制されることがあるため、現時点では確定の予定に入れていません。",family:"出發前與抵達山上時各查一次官方狀態；不開放就直接用餐。",family_ja:"出発前と山上に着いた時点で、それぞれ公式の規制情報を確認します。入れない場合はそのまま昼食にします。"},
  aso:{scene:"aso",priority:"必要休息",priority_ja:"必須の休憩",level:"core",stay:"45–60 分鐘",stay_ja:"45〜60分",description:"阿蘇午餐是 Day 2 與景觀線 Day 4 的節奏轉換點，先讓孩子吃飽，再把較長車程接下午睡。",description_ja:"阿蘇での昼食は、Day 2 と Day 4（景観ルート）の流れの切り替えポイントです。先に子どもにしっかり食べさせ、その後の長めの移動を昼寝の時間にあてます。",family:"選有停車場、兒童椅和能快速出餐的店，比追熱門名店更實際。",family_ja:"人気店を狙うより、駐車場と子ども用の椅子があり、料理がすぐ出るお店を選ぶほうが現実的です。"},
  yufuin:{scene:"yufuin",priority:"延誤可縮短",priority_ja:"遅れたら短縮",level:"optional",stay:"40–60 分鐘",stay_ja:"40〜60分",description:"金鱗湖與湯之坪街道適合輕鬆散步，但 Day 2 已有多段山路，因此把它當成可伸縮的午後停留。",description_ja:"金鱗湖と湯の坪街道は気軽な散策に向いています。ただし Day 2 は山道の移動が多いため、午後の立ち寄りは時間を調整しやすい予定にしています。",family:"湖畔與街道擇一即可；遇塞車或孩子仍在睡就縮成 20–30 分鐘。",family_ja:"湖畔か街道のどちらか一方で十分です。渋滞したときや子どもがまだ寝ているときは 20〜30分に短縮します。"},
  beppu:{scene:"beppu",priority:"住宿基地",priority_ja:"宿泊拠点",level:"core",stay:"依用餐安排",stay_ja:"食事の予定に合わせて",description:"別府連住兩晚，市區可安排冷麵、唐揚、豐後牛，也能依孩子體力只在飯店周邊散步。",description_ja:"別府には2連泊します。市街では冷麺・唐揚げ・豊後牛などを楽しめ、子どもの体力次第でホテル周辺の散策だけにすることもできます。",family:"熱門餐廳先查候位方式；晚餐排隊太久就改定食或外帶。",family_ja:"人気店は事前に順番待ちの方法を確認します。夕食の行列が長すぎる場合は、定食やテイクアウトに切り替えます。"},
  beppu_hotel:{scene:"beppu-hotel",priority:"Day 2、3 住宿",priority_ja:"Day 2・3 の宿泊",level:"core",stay:"連住兩晚",stay_ja:"2連泊",description:"別府住宿確定為 Beppu Kanko Hotel Ace，位於別府 IC 附近，適合自駕進出由布院、九州自然動物園與海地獄。",description_ja:"別府では別府観光ホテル エースに2連泊します。別府ICの近くにあり、由布院・九州自然動物公園・海地獄へ車で移動しやすい立地です。",family:"飯店有停車場；入住前再確認幼兒同睡、早餐、晚間餐飲與大浴場等實際訂房條件。",family_ja:"駐車場があります。予約前に、幼児の添い寝・朝食・夜の食事・大浴場など、実際の宿泊条件を確認します。"},
  safari:{scene:"safari",priority:"本行程必去",priority_ja:"この旅のメイン",level:"must",stay:"2.5–3 小時",stay_ja:"2.5〜3時間",description:"九州自然動物園是全程核心景點，可選自駕動物區或叢林巴士，再到互動區近距離看動物。",description_ja:"九州自然動物公園アフリカンサファリはこの旅のメインです。マイカーで回るサファリゾーンかジャングルバスを選び、その後ふれあいエリアで動物を間近に見ます。",family:"先查當季開園和巴士班次；車上備水與簡單點心，離園前先上廁所。",family_ja:"その季節の開園時間とバスの運行を事前に確認します。車内に水と軽いおやつを用意し、退園前にトイレを済ませます。"},
  umi:{scene:"umi-jigoku",priority:"延誤可縮短",priority_ja:"遅れたら短縮",level:"optional",stay:"60–75 分鐘",stay_ja:"60〜75分",description:"海地獄以鈷藍色溫泉池和蒸氣景觀為主，單點參觀即可，不需要為了集章走完整套地獄巡禮。",description_ja:"海地獄はコバルトブルーの温泉池と湯けむりが見どころです。ここだけの見学で十分で、スタンプ集めのために地獄めぐりを全部回る必要はありません。",family:"園內蒸氣和熱水區注意孩子動線；動物園玩太久時縮短停留。",family_ja:"園内には湯けむりや熱湯のエリアがあるため、子どもの動きに注意します。動物公園で長く過ごした場合は滞在を短縮します。"},
  takegawara:{scene:"beppu",priority:"有精神再去",priority_ja:"余力があれば",level:"optional",stay:"30–60 分鐘",stay_ja:"30〜60分",description:"竹瓦溫泉周邊保留別府舊城氣氛，適合傍晚散步並接市區晚餐。",description_ja:"竹瓦温泉の周辺には別府の古い町並みの雰囲気が残っており、夕方に散策してそのまま市街で夕食をとるのに向いています。",family:"孩子累了就取消散步，直接在飯店附近吃飯。",family_ja:"子どもが疲れていたら散策はやめて、ホテルの近くで食事をします。"},
  aso_onsen:{scene:"asogen",priority:"Day 3 C 路線住宿",priority_ja:"Day 3 C ルートの宿泊",level:"core",stay:"16:00 起入住・10:00 前退房",stay_ja:"16:00からチェックイン・10:00までにチェックアウト",description:"Day 3 C 路線確定入住民宿あそげん，位於阿蘇市乙姬、國道 57 號沿線。民宿主打阿蘇在地食材與鄉土料理，適合結束長途移動後留在館內休息。",description_ja:"Day 3 の C ルートでは、阿蘇市乙姫の国道57号沿いにある民宿あそげんに宿泊します。阿蘇の食材を使った郷土料理が特徴で、長い移動の後は館内でゆっくり過ごせます。",family:"訂房時確認幼兒的餐食、寢具及費用方案；若預訂含晚餐方案，要預留 16:00 後入住與用餐時間。",family_ja:"予約時に幼児の食事・寝具・料金プランを確認します。夕食付きプランの場合は、16:00以降のチェックインと食事の時間に余裕を持たせます。"},
  strawberry:{scene:"strawberry",priority:"C 路線重點",priority_ja:"C ルートの見どころ",level:"flex",stay:"約 60 分鐘",stay_ja:"約60分",description:"阿蘇健康農園安排在 C 路線的早晨，從民宿あそげん退房後先採草莓，再一路往熊本市區。",description_ja:"阿蘇健康農園は C ルートの朝に組み込んでいます。民宿あそげんをチェックアウトした後にいちご狩りを楽しみ、そのまま熊本市街へ向かいます。",family:"出發前確認當季採果開放日、最後入園時間、是否需要預約與幼兒收費規則；溫室內可準備薄外套與濕紙巾。",family_ja:"出発前に、その季節のいちご狩りの営業日、最終受付時間、予約の要否、幼児の料金を確認します。ハウス内に備えて、薄手の上着とウェットティッシュを用意します。"},
  daikanbo:{scene:"daikanbo",priority:"景觀線選項",priority_ja:"景観ルート限定",level:"flex",stay:"30–40 分鐘",stay_ja:"30〜40分",description:"大觀峰位於阿蘇北外輪山，可從不同角度眺望阿蘇五岳，是避免重複草千里的中繼站。",description_ja:"大観峰は阿蘇の北外輪山にあり、草千里ヶ浜とは違う角度から阿蘇五岳を望めます。草千里ヶ浜と景色が重ならないように選んだ、途中の立ち寄り先です。",family:"濃霧、強風或下雨時景觀價值大幅下降，可直接取消改回熊本。",family_ja:"濃霧・強風・雨の日は眺望がほとんど期待できないため、立ち寄らずにそのまま熊本へ向かいます。"},
  kumamoto:{scene:"kumamoto",priority:"住宿基地",priority_ja:"宿泊拠点",level:"core",stay:"依入住安排",stay_ja:"チェックインの時間に合わせて",description:"熊本市區最後一晚以停車、入住、晚餐與整理行李為主，景點安排依 Day 4 路線調整。",description_ja:"熊本市街での最後の夜は、駐車・チェックイン・夕食・荷物の整理が中心です。観光の予定は Day 4 のルートによって変わります。",family:"先確認飯店停車和入住時間，避免帶著孩子繞市區找車位。",family_ja:"ホテルの駐車場とチェックイン時間を事前に確認し、子ども連れで駐車場を探し回らないようにします。"},
  kumamoto_hotel:{scene:"kumamoto",priority:"Day 4 住宿",priority_ja:"Day 4 の宿泊",level:"core",stay:"15:00 後入住・11:00 前退房",stay_ja:"15:00からチェックイン・11:00までにチェックアウト",description:"第四晚確定入住相鐵 GRAND FRESA 熊本，地址為熊本市中央區下通 2-2-23；位於下通商店街周邊，方便晚餐與隔日市區行程。",description_ja:"4泊目は相鉄グランドフレッサ 熊本（熊本市中央区下通2-2-23）に宿泊します。下通商店街のそばにあり、夕食や翌日の市街観光に便利です。",family:"飯店沒有自有停車場，需使用步行範圍內的合作停車場，滿車時再改停附近的投幣式停車場。出發前向飯店確認合作停車場的位置、費用、限高及能否中途出庫；帶幼兒與行李時，先在安全位置完成下車再由一位成人前往停車。",family_ja:"ホテル専用の駐車場はなく、徒歩圏内の提携駐車場を利用します。満車の場合は近くのコインパーキングを使います。出発前にホテルへ、提携駐車場の場所・料金・高さ制限と、途中で出し入れできるかを確認します。幼児と荷物があるときは安全な場所で先に降り、大人1人が車を停めに行きます。"},
  castle:{scene:"castle-josaien",priority:"建議保留",priority_ja:"おすすめ",level:"flex",stay:"1.5–2 小時",stay_ja:"1.5〜2時間",description:"熊本城與城彩苑可把歷史景觀、地方小吃和伴手禮放在同一站完成。是否放 Day 4 或 Day 5 取決於回熊本的路線。",description_ja:"熊本城と桜の馬場 城彩苑では、歴史ある景観・ご当地グルメ・お土産を一か所で楽しめます。Day 4 と Day 5 のどちらで訪れるかは、熊本へ戻るルートによって決まります。",family:"園區有坡道與台階，揹帶通常比全程推車靈活；注意最晚入園時間。",family_ja:"園内は坂道や階段が多いため、ベビーカーより抱っこひもの方が動きやすいことが多いです。最終入園時間に注意します。"},
  suizenji:{scene:"suizenji",priority:"替代方案",priority_ja:"代替プラン",level:"optional",stay:"40–60 分鐘",stay_ja:"40〜60分",description:"水前寺成趣園是池泉回遊式庭園，適合已在前一天逛過熊本城時，安排一段節奏較慢的晨間散步。",description_ja:"水前寺成趣園は池泉回遊式の日本庭園です。前日に熊本城を見学済みの場合に、朝ゆっくり散策する場所として組み込んでいます。",family:"園內沒有一般遊客專用停車場，先選好附近付費停車場。",family_ja:"一般来園者用の専用駐車場はないため、周辺の有料駐車場を事前に決めておきます。"},
  shopping:{scene:"kumamoto",priority:"彈性安排",priority_ja:"自由時間",level:"optional",stay:"60–120 分鐘",stay_ja:"60〜120分",description:"上通與下通是有遮蔽的市中心商店街，可集中處理晚餐、小吃和伴手禮。",description_ja:"上通・下通はアーケードのある中心街の商店街で、夕食・食べ歩き・お土産をまとめて済ませられます。",family:"把必買清單先寫好；返程日依實際交通方式，倒推取行李與機場報到時間。",family_ja:"買う物のリストを事前に作っておきます。帰国日は利用する交通手段に合わせ、荷物の受け取りと空港でのチェックインから逆算して動きます。"}
};
const ATTRACTION_PLACES=new Set(["shirakawa","kusasenri","crater","yufuin","safari","umi","takegawara","daikanbo","castle","suizenji","strawberry"]);
const ILLUSTRATED_INFO_PLACES=new Set(["still_hotel","beppu_hotel","aso_onsen"]);
const DAYS={
  1:{title:"熊本機場周邊・抵達日",title_ja:"熊本空港周辺・到着日",subtitle:"18:15 抵達後不租車、不進市區。先吃飯，再入住 THE STILL HOTEL。",subtitle_ja:"18:15 に到着後、レンタカーは借りず、市街にも行きません。食事をしてから THE STILL HOTEL に宿泊します。",insight:"第一晚入住 THE STILL HOTEL。從機場搭空港 Liner 至肥後大津站後步行約 1 分鐘；先查當日晚間末班車，若錯過則改搭計程車。",insight_ja:"初日は THE STILL HOTEL に宿泊します。空港ライナーで肥後大津駅へ行き、駅から徒歩約1分です。当日の最終便を確認し、間に合わない場合はタクシーを利用します。",events:[
    {time:"15:00–18:15",title:"台中飛往熊本",title_ja:"台中 → 熊本（フライト）",detail:"航班時間依原行程；以實際機票為準。",detail_ja:"フライト時刻は元の旅程によるものです。実際の航空券の内容を優先してください。",place:"airport",tag:"航班",tag_ja:"フライト"},
    {time:"約 18:30–19:20",title:"入境、領行李",title_ja:"入国審査・手荷物の受け取り",detail:"抓約 50 分鐘緩衝；依排隊與行李提領順延。",detail_ja:"約50分の余裕を見ています。混雑や荷物の受け取りの状況に応じて後ろにずらします。",place:"airport"},
    {time:"約 19:20–20:05",title:"機場周邊晚餐",title_ja:"空港周辺で夕食",detail:"優先選抵達後可進入的航廈 1F 或そらよかダイニング；若延誤，改飯店附近或預備輕食。先查當日最後點餐時間。",detail_ja:"到着後でも入れるターミナル1階や「そらよかダイニング」を優先します。遅延した場合はホテル周辺のお店か、用意しておいた軽食にします。当日のラストオーダーを事前に確認します。",place:"airport",tag:"先用餐",tag_ja:"まず食事"},
    {time:"約 20:15",title:"前往 THE STILL HOTEL",title_ja:"THE STILL HOTEL へ",detail:"搭空港 Liner 至肥後大津站後步行約 1 分鐘；先確認末班車，若已錯過則改搭計程車。",detail_ja:"空港ライナーで肥後大津駅へ行き、駅から徒歩約1分です。最終便を確認し、間に合わない場合はタクシーを利用します。",place:"still_hotel",tag:"Day 1 住宿",tag_ja:"Day 1 の宿泊"},
    {time:"約 20:40",title:"THE STILL HOTEL 入住與休息",title_ja:"THE STILL HOTEL にチェックイン・休憩",detail:"完成入住後早點休息，為隔天早上返回機場取車保留體力。",detail_ja:"チェックイン後は早めに休み、翌朝空港へ戻ってレンタカーを受け取るために体力を温存します。",place:"still_hotel",illustrated:true}
  ]},
  2:{title:"機場周邊 → 白川水源 → 草千里 → 由布院 → 別府",title_ja:"空港周辺 → 白川水源 → 草千里ヶ浜 → 由布院 → 別府",subtitle:"南阿蘇水源先走，接草千里；午後往由布院的路段安排午睡。",subtitle_ja:"まず南阿蘇の白川水源、続いて草千里ヶ浜へ。午後の由布院への移動中に昼寝の時間をとります。",insight:"白川水源先於草千里，方向順。火山口目前受管制，不能列為固定景點；若出發時重新開放且時間充裕，才加看 30–45 分鐘，並縮短由布院停留。各段車程為規劃估值，出發前看導航。",insight_ja:"白川水源を先に回ると、草千里ヶ浜への道順がスムーズです。阿蘇中岳火口は現在規制中のため、確定の予定には入れていません。出発時に規制が解除され、時間に余裕がある場合のみ 30〜45分立ち寄り、その分由布院の滞在を短くします。各区間の所要時間は計画上の目安なので、出発前にナビで確認します。",events:[
    {time:"07:45–08:15",title:"THE STILL HOTEL 早餐、退房",title_ja:"THE STILL HOTEL で朝食・チェックアウト",detail:"退房後搭空港 Liner 或計程車返回機場租車點；前一晚先確認班次與取車營業所位置。",detail_ja:"チェックアウト後、空港ライナーまたはタクシーで空港のレンタカー営業所へ戻ります。前夜に時刻と営業所の場所を確認します。",place:"still_hotel"},
    {time:"08:30–09:00",title:"取車與安裝兒童座椅",title_ja:"レンタカー受け取り・チャイルドシート装着",detail:"2/19 08:30 預約取車；確認座椅、ETC、導航語言，以及 2/21 18:30 的還車門市與流程。",detail_ja:"2/19 08:30 にレンタカーを受け取ります。チャイルドシート、ETC、ナビの言語、2/21 18:30 の返却店舗と手順を確認します。",place:"airport",tag:"固定取車時間",tag_ja:"受取時刻確定"},
    {time:"09:00–09:50",title:"開往白川水源",title_ja:"白川水源へ",detail:"規劃抓約 45–60 分鐘；以實際道路與停車位置為準。",detail_ja:"約45〜60分を見込んでいます。実際の道路状況と駐車場所によって変わります。",place:"shirakawa"},
    {time:"09:50–10:25",title:"白川水源短走",title_ja:"白川水源を散策",detail:"約 30–35 分鐘，讓孩子活動、補水。",detail_ja:"約30〜35分。子どもが体を動かし、水分補給をする時間です。",place:"shirakawa"},
    {time:"10:25–11:10",title:"上山前往草千里",title_ja:"山を上って草千里ヶ浜へ",detail:"山路抓約 35–50 分鐘，留轉彎與停車緩衝。",detail_ja:"山道で約35〜50分。カーブの多い道と駐車のために余裕を持たせます。",place:"kusasenri"},
    {time:"11:10–11:55",title:"草千里散步",title_ja:"草千里ヶ浜を散策",detail:"看草原、走平坦路段；火山口是否開放當天再查。",detail_ja:"草原を眺め、平坦な道を歩きます。火口の規制状況は当日に再確認します。",place:"kusasenri"},
    {time:"12:00–12:45",title:"阿蘇午餐",title_ja:"阿蘇で昼食",detail:"盡量在午睡前吃完。火山口若恢復開放，需挪用午餐或由布院的彈性時間。",detail_ja:"なるべく昼寝の前に食べ終えます。火口が開放された場合は、昼食か由布院の予備時間を使います。",place:"aso"},
    {time:"13:00–15:00",title:"前往由布院・車上午睡",title_ja:"由布院へ・車内で昼寝",detail:"規劃抓約 1 小時 45 分至 2 小時 15 分；含休息時可更久。",detail_ja:"約1時間45分〜2時間15分を見込んでいます。休憩を含めると、さらにかかることがあります。",place:"yufuin",tag:"午睡",tag_ja:"昼寝"},
    {time:"15:00–15:50",title:"金鱗湖、湯之坪街道",title_ja:"金鱗湖・湯の坪街道",detail:"湖畔和商店擇一段走；若火山口加進來或山路慢行，這段優先縮短。",detail_ja:"湖畔か商店街のどちらかを歩きます。火口に立ち寄った場合や山道に時間がかかった場合は、ここを優先的に短縮します。",place:"yufuin"},
    {time:"15:50–17:00",title:"前往 Beppu Kanko Hotel Ace 並入住",title_ja:"別府観光ホテル エースへ・チェックイン",detail:"由布院到飯店抓約 45–60 分鐘，再預留停車與入住時間。",detail_ja:"由布院からホテルまで約45〜60分。駐車とチェックインの時間も見込みます。",place:"beppu_hotel",illustrated:true,tag:"別府第 1 晚",tag_ja:"別府 1泊目"},
    {time:"17:30",title:"別府晚餐與休息",title_ja:"別府で夕食・休憩",detail:"冷麵、唐揚或豐後牛，依孩子狀態選飯店周邊或方便停車的店。",detail_ja:"冷麺・唐揚げ・豊後牛など。子どもの様子を見て、ホテル周辺か駐車しやすいお店を選びます。",place:"beppu_hotel"}
  ]},
  3:{title:"九州自然動物園 → 海地獄 → 別府市區",title_ja:"九州自然動物公園 → 海地獄 → 別府市街",subtitle:"動物園是今日主角；午餐後去海地獄，傍晚留給別府散步與晚餐。",subtitle_ja:"今日の主役は動物公園です。昼食後に海地獄へ行き、夕方は別府の散策と夕食にあてます。",insight:"海地獄目前公告 08:00–17:00；排在午後仍要留意離園及車程。若動物園玩得久，海地獄以單點短逛，晚間逛街依孩子體力決定。",insight_ja:"海地獄の営業時間は現在 8:00〜17:00 と案内されています。午後の訪問でも、退園時間と移動時間に注意します。動物公園で長く過ごした場合は海地獄を短時間だけ見学し、夜の散策は子どもの体力次第で決めます。",events:[
    {time:"07:50",title:"從 Beppu Kanko Hotel Ace 出發",title_ja:"別府観光ホテル エースを出発",detail:"山路、停車與入園排隊留緩衝。",detail_ja:"山道・駐車・入園の待ち時間に余裕を持たせます。",place:"beppu_hotel"},
    {time:"約 09:00–11:30",title:"九州自然動物園",title_ja:"九州自然動物公園アフリカンサファリ",detail:"自駕或叢林巴士，並視時間逛互動區；營業和巴士班次依當季公告。",detail_ja:"マイカーかジャングルバスでサファリを回り、時間があればふれあいエリアへ。営業時間とバスの運行は、その季節の公式案内に従います。",place:"safari",tag:"必去",tag_ja:"必ず行く",must:true},
    {time:"11:30–12:15",title:"園內午餐",title_ja:"園内で昼食",detail:"離園前補水、上廁所，準備下段車程。",detail_ja:"退園前に水分補給とトイレを済ませ、次の移動に備えます。",place:"safari"},
    {time:"12:15–13:05",title:"往海地獄・短車程午睡",title_ja:"海地獄へ・短い移動中に昼寝",detail:"車程先抓 35–50 分鐘；孩子若仍在睡，可稍候或縮短海地獄停留。",detail_ja:"移動は約35〜50分。子どもがまだ寝ていれば少し待つか、海地獄の滞在を短くします。",place:"umi",tag:"午睡機會",tag_ja:"昼寝のチャンス"},
    {time:"13:15–14:30",title:"海地獄",title_ja:"海地獄",detail:"只看海地獄，不排七地獄巡禮。天候或孩子狀態不佳可縮短。",detail_ja:"海地獄だけを見学し、地獄めぐりはしません。天候や子どもの様子によっては短縮します。",place:"umi"},
    {time:"15:00–16:30",title:"回飯店休息或別府市區慢走",title_ja:"ホテルで休憩、または別府市街を散策",detail:"先確認入住飯店位置；想散步可到站前、竹瓦溫泉周邊。",detail_ja:"まずホテルの場所を確認します。散策するなら、駅前や竹瓦温泉の周辺へ。",place:"takegawara"},
    {time:"17:30",title:"別府晚餐、逛街",title_ja:"別府で夕食・散策",detail:"在別府市區用餐，仍有精神再散步；早點回飯店。",detail_ja:"別府市街で夕食をとり、元気があれば少し散策します。早めにホテルへ戻ります。",place:"beppu",tag:"別府第 2 晚",tag_ja:"別府 2泊目"}
  ]}
};
const DAY4={
  scenic:{title:"別府 → 大觀峰 → 熊本｜景觀線",title_ja:"別府 → 大観峰 → 熊本｜景観ルート",subtitle:"早退房，走山線到大觀峰短停；下午回熊本逛商店街。",subtitle_ja:"早めにチェックアウトし、山のルートで大観峰に短く立ち寄ります。午後は熊本に戻って商店街を散策します。",insight:"大觀峰與草千里是不同觀景點，但這條山線仍較長、受天候影響。規劃行車合計約 3.5–4.5 小時，再加觀景、午餐；熊本城留到 Day 5。",insight_ja:"大観峰と草千里ヶ浜は別の展望スポットですが、この山のルートは距離が長く、天候の影響も受けます。運転時間は合計約3.5〜4.5時間で、これに見学と昼食の時間が加わります。熊本城は Day 5 に回します。",events:[
    {time:"08:30",title:"Beppu Kanko Hotel Ace 退房出發",title_ja:"別府観光ホテル エースをチェックアウト・出発",detail:"往阿蘇北外輪山。山路時間依當天導航調整。",detail_ja:"阿蘇の北外輪山へ向かいます。山道の所要時間は当日のナビで調整します。",place:"beppu_hotel"},
    {time:"約 10:45–11:20",title:"大觀峰短停",title_ja:"大観峰に立ち寄り",detail:"看阿蘇全景、伸展約 30–35 分鐘；遇濃霧或大風可取消。",detail_ja:"阿蘇の全景を眺め、30〜35分ほど体を伸ばします。濃霧や強風のときは取りやめます。",place:"daikanbo",tag:"中繼站",tag_ja:"途中の立ち寄り"},
    {time:"11:30–12:15",title:"附近午餐",title_ja:"周辺で昼食",detail:"選方便停車的阿蘇店家，先餵飽孩子。",detail_ja:"駐車しやすい阿蘇のお店を選び、まず子どもに食べさせます。",place:"aso"},
    {time:"12:15–14:15",title:"前往熊本・車上午睡",title_ja:"熊本へ・車内で昼寝",detail:"抓約 1.5–2 小時，依道路、休息和市區交通調整。",detail_ja:"約1.5〜2時間。道路状況・休憩・市街の交通に応じて調整します。",place:"kumamoto",tag:"午睡",tag_ja:"昼寝"},
    {time:"約 15:00",title:"相鐵 GRAND FRESA 熊本入住",title_ja:"相鉄グランドフレッサ 熊本にチェックイン",detail:"飯店沒有自有停車場；停進步行範圍內的合作停車場（滿車時改停附近的投幣式停車場），再帶行李步行入住。",detail_ja:"ホテル専用の駐車場はないため、徒歩圏内の提携駐車場に停めます（満車の場合は近くのコインパーキング）。駐車後、荷物を持って歩いてチェックインします。",place:"kumamoto_hotel",tag:"熊本市區住宿",tag_ja:"熊本市内泊"},
    {time:"16:00–18:30",title:"上通、下通與晚餐",title_ja:"上通・下通と夕食",detail:"下午逛商店街、吃熊本料理。熊本城留 Day 5。",detail_ja:"午後は商店街を散策し、熊本料理を味わいます。熊本城は Day 5 に回します。",place:"shopping"}
  ]},
  highway:{title:"別府 → 熊本｜高速線",title_ja:"別府 → 熊本｜高速ルート",subtitle:"直接走高速公路回熊本，把多出的時間留給熊本城。",subtitle_ja:"高速道路でまっすぐ熊本へ戻り、浮いた時間を熊本城にあてます。",insight:"NEXCO 的別府 IC→熊本 IC 查詢約 2 小時 8 分；加上旅館到交流道、熊本市區和休息，門到門先抓約 2 小時 45 分至 3 小時 15 分。相較景觀線通常可省約 1–2 小時的總行程時間，仍以當日導航為準。",insight_ja:"NEXCO で別府IC→熊本IC を調べると約2時間8分です。宿からICまでの移動、熊本市街の移動、休憩を加えると、ドア・ツー・ドアで約2時間45分〜3時間15分を見込みます。景観ルートより全体で1〜2時間ほど短縮できることが多いですが、当日のナビを優先します。",events:[
    {time:"08:30",title:"Beppu Kanko Hotel Ace 退房出發",title_ja:"別府観光ホテル エースをチェックアウト・出発",detail:"高速公路直回熊本，途中視孩子狀況在休息區停車。",detail_ja:"高速道路で熊本へ直行し、子どもの様子を見てサービスエリアで休憩します。",place:"beppu_hotel"},
    {time:"約 11:15–12:15",title:"熊本市區午餐",title_ja:"熊本市街で昼食",detail:"抵達時間受交流道、塞車與停車影響。",detail_ja:"到着時間は、ICの出入り・渋滞・駐車の状況によって変わります。",place:"kumamoto"},
    {time:"12:15–13:30",title:"午睡或安靜休息",title_ja:"昼寝、または静かに休憩",detail:"可在車上接午睡，成人留在車旁照看；若飯店可提早入住則回房休息。",detail_ja:"車内で昼寝を続け、大人が車のそばで見守ります。ホテルに早めにチェックインできれば、部屋で休みます。",place:"kumamoto",tag:"午睡",tag_ja:"昼寝"},
    {time:"14:00–16:00",title:"熊本城與城彩苑",title_ja:"熊本城と城彩苑",detail:"官方一般季節最晚 16:00 入園；若午睡延長就改先逛城彩苑，熊本城移回 Day 5。",detail_ja:"通常期の最終入園は 16:00 です。昼寝が長引いた場合は先に城彩苑を回り、熊本城は Day 5 に移します。",place:"castle"},
    {time:"16:15",title:"相鐵 GRAND FRESA 熊本入住",title_ja:"相鉄グランドフレッサ 熊本にチェックイン",detail:"飯店沒有自有停車場；停進步行範圍內的合作停車場（滿車時改停附近的投幣式停車場），再帶行李步行入住。",detail_ja:"ホテル専用の駐車場はないため、徒歩圏内の提携駐車場に停めます（満車の場合は近くのコインパーキング）。駐車後、荷物を持って歩いてチェックインします。",place:"kumamoto_hotel",tag:"熊本市區住宿",tag_ja:"熊本市内泊"},
    {time:"17:30",title:"熊本晚餐",title_ja:"熊本で夕食",detail:"下通周邊找家適合孩子的餐廳。",detail_ja:"下通周辺で、子ども連れに向いたお店を探します。",place:"shopping"}
  ]},
  aso:{title:"民宿あそげん → 採草莓 → 熊本｜C 路線",title_ja:"民宿あそげん → いちご狩り → 熊本｜C ルート",subtitle:"從民宿あそげん退房後採草莓，下午進熊本城與城彩苑。",subtitle_ja:"民宿あそげんをチェックアウトしていちご狩りへ。午後は熊本城と城彩苑へ。",insight:"此版本承接 Day 3 入住民宿あそげん。採果出發前務必確認當季營業、入園與預約規則；中午以簡單用餐和車上午睡銜接，讓下午仍能保留熊本城時間。",insight_ja:"このプランは、Day 3 に民宿あそげんに泊まる場合の続きです。いちご狩りに出かける前に、その季節の営業状況・入園・予約のルールを必ず確認してください。昼は手早く食事を済ませて車内での昼寝につなげ、午後に熊本城を見学する時間を確保します。",events:[
    {time:"09:00",title:"民宿あそげん退房",title_ja:"民宿あそげんをチェックアウト",detail:"早餐後出發；以民宿實際位置與阿蘇健康農園當日導航為準。",detail_ja:"朝食後に出発します。民宿の場所と、阿蘇健康農園までの当日のナビを優先します。",place:"aso_onsen"},
    {time:"09:30–10:40",title:"阿蘇健康農園採草莓",title_ja:"阿蘇健康農園でいちご狩り",detail:"預留約 60 分鐘採果；先確認採果季、開放日、最後入園時間及是否需預約。",detail_ja:"いちご狩りは約60分を見込みます。シーズン・営業日・最終受付時間・予約の要否を事前に確認します。",place:"strawberry",tag:"C 路線重點",tag_ja:"C ルートの見どころ"},
    {time:"10:40–12:10",title:"前往熊本市區",title_ja:"熊本市街へ",detail:"由阿蘇往熊本抓約 1 小時 20 分至 1 小時 40 分；依道路、休息與孩子狀況調整。",detail_ja:"阿蘇から熊本まで約1時間20分〜1時間40分を見込みます。道路状況・休憩・子どもの様子に応じて調整します。",place:"kumamoto",tag:"長車程",tag_ja:"長めの移動"},
    {time:"12:15–13:00",title:"熊本市區午餐",title_ja:"熊本市街で昼食",detail:"優先選停車方便、能快速出餐的店，讓午後行程準時接上。",detail_ja:"駐車しやすく料理がすぐに出るお店を優先し、午後の予定に遅れないようにします。",place:"kumamoto"},
    {time:"13:00–14:15",title:"車上午睡或安靜休息",title_ja:"車内で昼寝、または静かに休憩",detail:"可在車上接午睡；成人陪同，醒來後再前往熊本城。",detail_ja:"車内で昼寝を続け、大人が付き添います。起きてから熊本城へ向かいます。",place:"kumamoto",tag:"午睡",tag_ja:"昼寝"},
    {time:"14:30–16:15",title:"熊本城、城彩苑",title_ja:"熊本城・城彩苑",detail:"以天守閣與城彩苑為主；若午睡延長，優先保留城彩苑與外圍散步。",detail_ja:"天守閣と城彩苑が中心です。昼寝が長引いた場合は、城彩苑と城の周辺の散策を優先します。",place:"castle",tag:"午後重點",tag_ja:"午後の見どころ"},
    {time:"16:30",title:"相鐵 GRAND FRESA 熊本入住",title_ja:"相鉄グランドフレッサ 熊本にチェックイン",detail:"飯店沒有自有停車場，但 C 路線當天就還車，不需停車過夜。辦理入住時先暫停步行範圍內的合作停車場（滿車時改停附近的投幣式停車場），卸下行李入住後，再依租車預約單前往還車門市。",detail_ja:"ホテル専用の駐車場はありませんが、C ルートは当日中にレンタカーを返却するため、夜間の駐車は不要です。チェックインの間は徒歩圏内の提携駐車場（満車の場合は近くのコインパーキング）に一時的に停め、荷物を降ろしてチェックインした後、予約票に記載された返却店舗へ向かいます。",place:"kumamoto_hotel",tag:"熊本市區住宿",tag_ja:"熊本市内泊"},
    {time:"17:15–18:20",title:"加油、前往還車門市",title_ja:"給油・レンタカー返却店舗へ",detail:"還車門市依租車預約單確認；保留市區車流、加油與辦理手續時間。",detail_ja:"返却店舗は予約票で確認します。市街の渋滞、給油、返却手続きの時間に余裕を持たせます。",place:"kumamoto",tag:"固定還車前準備",tag_ja:"返却前の準備"},
    {time:"18:30",title:"完成還車",title_ja:"レンタカー返却",detail:"2/21 18:30 為固定還車時間；完成後改以步行、大眾運輸或計程車移動。",detail_ja:"2/21 18:30 が確定した返却時刻です。返却後は徒歩、公共交通機関、またはタクシーで移動します。",tag:"固定時間",tag_ja:"確定時刻"},
    {time:"19:00",title:"熊本晚餐",title_ja:"熊本で夕食",detail:"回下通周邊找適合孩子的餐廳；晚間不再塞景點。",detail_ja:"下通周辺で、子ども連れに向いたお店を探します。夜は観光の予定を入れません。",place:"shopping"}
  ]}
};
const DAY5={
  scenic:{title:"熊本城・城彩苑・返程",title_ja:"熊本城・城彩苑・帰路",subtitle:"若前一天尚未逛熊本城，今天上午集中賞城。",subtitle_ja:"前日に熊本城へ行っていない場合は、午前中にじっくり見学します。",insight:"帶揹帶應對熊本城坡道與台階；15:15 出發往機場是返程硬時間。",insight_ja:"熊本城の坂道や階段に備えて、抱っこひもを持参します。15:15 の空港への出発は、帰国便に間に合わせるため動かせない時間です。",events:[
    {time:"09:30–11:30",title:"熊本城、城彩苑",title_ja:"熊本城・城彩苑",detail:"以天守閣與城彩苑為主，抓約 2 小時。",detail_ja:"天守閣と城彩苑を中心に、約2時間を見込みます。",place:"castle"},
    {time:"11:45–12:30",title:"城彩苑午餐",title_ja:"城彩苑で昼食",detail:"排隊久就改市區簡餐。",detail_ja:"行列が長い場合は、市街で軽めの食事に切り替えます。",place:"castle"},
    {time:"12:30–13:30",title:"午睡或安靜休息",title_ja:"昼寝、または静かに休憩",detail:"若回飯店，先確認延遲退房；也可推車休息或在車上由成人陪同。",detail_ja:"ホテルに戻る場合は、レイトチェックアウトを事前に確認します。ベビーカーで休ませるか、大人が付き添って車内で休むこともできます。",place:"kumamoto",tag:"午睡",tag_ja:"昼寝"},
    {time:"13:30–15:00",title:"上通、下通小吃與伴手禮",title_ja:"上通・下通で食べ歩き・お土産",detail:"按取車、回飯店取行李的時間縮短。",detail_ja:"車を出す時間と、ホテルで荷物を受け取る時間に合わせて短縮します。",place:"shopping"}
  ]},
  highway:{title:"水前寺成趣園・街區美食・返程",title_ja:"水前寺成趣園・街歩きグルメ・帰路",subtitle:"若前一天已逛熊本城，今天換成庭園短走與街區美食。",subtitle_ja:"前日に熊本城を見学済みの場合は、庭園の散策と街歩きグルメに切り替えます。",insight:"水前寺成趣園 08:30 開園，園方建議散步約 30–40 分鐘；園內沒有一般遊客專用停車場，使用周邊付費停車場。若前日因延誤未去熊本城，切回 Day 5 的熊本城版本。",insight_ja:"水前寺成趣園は 8:30 開園で、園の案内では散策の目安は30〜40分です。一般来園者用の専用駐車場はないため、周辺の有料駐車場を利用します。前日に予定が遅れて熊本城へ行けなかった場合は、Day 5 の熊本城プランに戻します。",events:[
    {time:"09:30–10:30",title:"水前寺成趣園",title_ja:"水前寺成趣園",detail:"庭園散步約 30–40 分鐘，另留停車與孩子步行時間。",detail_ja:"庭園の散策は約30〜40分。駐車と、子どものゆっくりした歩みの分も時間をとります。",place:"suizenji"},
    {time:"11:00–12:00",title:"上通、下通與午餐",title_ja:"上通・下通で昼食",detail:"吃熊本小吃、選伴手禮，避免午餐高峰排太久。",detail_ja:"熊本グルメを味わい、お土産を選びます。昼食のピークを避けて、並ぶ時間を減らします。",place:"shopping"},
    {time:"12:15–13:30",title:"孩子午睡或安靜休息",title_ja:"子どもの昼寝、または静かに休憩",detail:"退房後可在車上由成人陪同；也可找方便休息的室內地點。",detail_ja:"チェックアウト後は、大人が付き添って車内で休めます。休憩しやすい屋内の場所を探してもかまいません。",place:"kumamoto",tag:"午睡",tag_ja:"昼寝"},
    {time:"13:30–15:00",title:"補逛市區、取行李",title_ja:"市街を散策・荷物の受け取り",detail:"可再逛商店街；15:15 必須前往機場。",detail_ja:"商店街をもう一度回れます。15:15 には必ず空港へ出発します。",place:"shopping"}
  ]},
  aso:{title:"水前寺成趣園・街區美食・返程｜C 路線",title_ja:"水前寺成趣園・街歩きグルメ・帰路｜C ルート",subtitle:"Day 4 已完成熊本城，最後一天換成庭園散步與市區收尾。",subtitle_ja:"熊本城は Day 4 に見学済みなので、最終日は庭園の散策と市街めぐりで締めくくります。",insight:"C 路線已於 2/21 18:30 還車。Day 5 從飯店搭市電或計程車前往水前寺，再回下通取行李；15:15 前往機場仍是不能壓縮的返程硬時間。",insight_ja:"C ルートは 2/21 18:30 にレンタカーを返却済みです。Day 5 はホテルから市電またはタクシーで水前寺へ行き、下通に戻って荷物を受け取ります。15:15 の空港への出発は短縮できない時間です。",events:[
    {time:"09:30–10:30",title:"水前寺成趣園",title_ja:"水前寺成趣園",detail:"從飯店搭市電或計程車前往；庭園散步約 30–40 分鐘，另留孩子步行時間。",detail_ja:"ホテルから市電またはタクシーで向かいます。庭園の散策は約30〜40分で、子どものゆっくりした歩みの分も時間をとります。",place:"suizenji"},
    {time:"11:00–12:00",title:"上通、下通與午餐",title_ja:"上通・下通で昼食",detail:"吃熊本小吃、選伴手禮，避免午餐高峰排太久。",detail_ja:"熊本グルメを味わい、お土産を選びます。昼食のピークを避けて、並ぶ時間を減らします。",place:"shopping"},
    {time:"12:15–13:30",title:"孩子午睡或安靜休息",title_ja:"子どもの昼寝、または静かに休憩",detail:"已無租車，以推車午睡、商場休息區或安靜的室內空間為主；行李先寄放飯店。",detail_ja:"レンタカーは返却済みです。ベビーカーでの昼寝、商業施設の休憩スペース、静かな屋内を利用し、荷物はホテルに預けます。",place:"kumamoto",tag:"午睡",tag_ja:"昼寝"},
    {time:"13:30–15:00",title:"補逛市區、取行李",title_ja:"市街を散策・荷物の受け取り",detail:"可再逛商店街；15:15 必須前往機場。",detail_ja:"商店街をもう一度回れます。15:15 には必ず空港へ出発します。",place:"shopping"}
  ]}
};
const AIRPORT_EVENTS=[
  {time:"17:00",title:"機場報到",title_ja:"空港でチェックイン",detail:"整理託運行李與孩子用品。",detail_ja:"預け荷物と子どもの持ち物を整理します。",place:"airport"},
  {time:"19:15–20:45",title:"飛返台灣",title_ja:"台湾へ帰国（フライト）",detail:"原行程航班時間；以實際訂票紀錄為準。",detail_ja:"元の旅程のフライト時刻です。実際の予約記録を優先してください。",place:"airport",tag:"航班",tag_ja:"フライト"}
];
const RETURN_EVENTS=[
  {time:"15:15–16:15",title:"前往機場、加油還車",title_ja:"空港へ・給油してレンタカー返却",detail:"留市區車流與加油緩衝，約 16:15 還車。",detail_ja:"市街の渋滞と給油の時間を見込み、16:15 ごろに返却します。",place:"airport",tag:"返程緩衝",tag_ja:"帰路の予備時間"},
  ...AIRPORT_EVENTS
];
const RETURN_EVENTS_C=[
  {time:"15:15–16:30",title:"從市區前往熊本機場",title_ja:"市街から熊本空港へ",detail:"租車已於 2/21 18:30 歸還；從相鐵 GRAND FRESA 熊本步行前往熊本櫻町巴士總站搭機場巴士，或改搭計程車。依當日班次提早出發。",detail_ja:"レンタカーは 2/21 18:30 に返却済みです。相鉄グランドフレッサ熊本から熊本桜町バスターミナルまで歩き、空港リムジンバスに乗るか、タクシーを利用します。当日の時刻表に合わせて早めに出発します。",place:"airport",tag:"無租車返機場",tag_ja:"レンタカーなし"},
  ...AIRPORT_EVENTS
];
const overviewItems=()=>[
  {title:"THE STILL HOTEL 過夜",title_ja:"THE STILL HOTEL に宿泊",desc:"18:15 抵達，吃飯後搭空港 Liner 前往肥後大津站。",desc_ja:"18:15 に到着し、食事の後に空港ライナーで肥後大津駅へ向かいます。"},
  {title:"白川水源・草千里・由布院",title_ja:"白川水源・草千里ヶ浜・由布院",desc:"2/19 08:30 取車，午睡車程後進別府。",desc_ja:"2/19 08:30 にレンタカーを受け取り、昼寝をしながら移動して別府へ。"},
  activeDay3==="aso"?{title:"自然動物園・海地獄・民宿あそげん",title_ja:"動物公園・海地獄・民宿あそげん",desc:"海地獄短逛後，下午前往民宿あそげん。",desc_ja:"海地獄を短時間見学した後、午後は民宿あそげんへ。"}:{title:"自然動物園・海地獄",title_ja:"動物公園・海地獄",desc:"上午看動物，午後看海地獄、逛別府。",desc_ja:"午前は動物公園、午後は海地獄と別府の散策。"},
  activeDay4==="aso"?{title:"採草莓後回熊本",title_ja:"いちご狩りの後、熊本へ",desc:"上午採果、下午熊本城，2/21 18:30 還車。",desc_ja:"午前はいちご狩り、午後は熊本城へ。2/21 18:30 にレンタカーを返却します。"}:{title:"大觀峰或高速返熊本",title_ja:"大観峰経由、または高速で熊本へ",desc:"兩條路線可切換；市區時間不同。",desc_ja:"2つのルートを切り替えられます。市街で過ごせる時間が変わります。"},
  activeDay5==="aso"?{title:"水前寺・街區美食・返程",title_ja:"水前寺・街歩きグルメ・帰路",desc:"已還車，搭機場巴士或計程車返機場。",desc_ja:"レンタカー返却後のため、空港バスまたはタクシーで空港へ。"}:{title:"熊本市區與返程",title_ja:"熊本市街・帰路",desc:"依 Day 4 是否逛城，換不同景點。",desc_ja:"Day 4 に熊本城へ行ったかどうかで、見学先が変わります。"}
];
let activeDay=0,activeDay3="aso",activeDay4="aso",activeDay5="aso",activePlace=null,map=null,markers=[],routeLine=null,overviewOptionsOpen=false,language="zh-Hant";
const $=id=>document.getElementById(id);
try{language=localStorage.getItem("kumamoto-language")||"zh-Hant";}catch(error){}
/* ?lang=ja opens the page in Japanese, e.g. a link shared with Japanese friends or counter staff. */
const urlLanguage=new URLSearchParams(window.location.search).get("lang");
if(urlLanguage==="ja"||urlLanguage==="zh-Hant")language=urlLanguage;
const isJa=()=>language==="ja";
const loc=(obj,key)=>isJa()&&obj&&obj[`${key}_ja`]!==undefined?obj[`${key}_ja`]:obj[key];
const placeName=id=>isJa()?(JA_PLACE_NAMES[id]||PLACES[id].name):PLACES[id].name;
const localizedEvent=event=>!isJa()?event:{...event,sourceTitle:event.title,time:loc(event,"time"),title:loc(event,"title"),detail:loc(event,"detail"),tag:loc(event,"tag")};
const localizedDay=data=>!isJa()?data:{...data,title:loc(data,"title"),subtitle:loc(data,"subtitle"),insight:loc(data,"insight"),events:data.events.map(localizedEvent)};
const DAY3={beppu:DAYS[3],aso:{title:"九州自然動物園 → 海地獄 → 民宿あそげん｜C 路線",title_ja:"九州自然動物公園 → 海地獄 → 民宿あそげん｜C ルート",subtitle:"動物園後先看海地獄，再入住民宿あそげん；取消別府市區晚餐與逛街。",subtitle_ja:"動物公園の後に海地獄を見学し、民宿あそげんに泊まります。別府市街での夕食と散策はなくなります。",insight:"這條線承接後續 Day 4、Day 5 的 C 路線。海地獄維持為單點短逛，離園後直接前往阿蘇市乙姬的民宿あそげん；官方入住時間為 16:00 起，抵達時間與晚餐方案需依預訂內容確認。",insight_ja:"このルートは、続く Day 4・Day 5 の C ルートにつながります。海地獄は短時間の見学にとどめ、退園後は阿蘇市乙姫の民宿あそげんへ向かいます。チェックインは16:00からです。到着時間と夕食プランは予約内容に合わせて確認します。",events:[
  {time:"07:50",title:"從 Beppu Kanko Hotel Ace 出發",title_ja:"別府観光ホテル エースを出発",detail:"山路、停車與入園排隊留緩衝。",detail_ja:"山道・駐車・入園の待ち時間に余裕を持たせます。",place:"beppu_hotel"},
  {time:"約 09:00–11:30",title:"九州自然動物園",title_ja:"九州自然動物公園アフリカンサファリ",detail:"自駕或叢林巴士，並視時間逛互動區；營業和巴士班次依當季公告。",detail_ja:"マイカーかジャングルバスでサファリを回り、時間があればふれあいエリアへ。営業時間とバスの運行は、その季節の公式案内に従います。",place:"safari",tag:"必去",tag_ja:"必ず行く",must:true},
  {time:"11:30–12:15",title:"園內午餐",title_ja:"園内で昼食",detail:"離園前補水、上廁所，準備海地獄與下午往阿蘇的車程。",detail_ja:"退園前に水分補給とトイレを済ませ、海地獄と午後の阿蘇への移動に備えます。",place:"safari"},
  {time:"12:15–13:05",title:"往海地獄・短車程午睡",title_ja:"海地獄へ・短い移動中に昼寝",detail:"車程先抓 35–50 分鐘；孩子若仍在睡，可縮短海地獄停留。",detail_ja:"移動は約35〜50分。子どもがまだ寝ていれば、海地獄の滞在を短くします。",place:"umi",tag:"午睡機會",tag_ja:"昼寝のチャンス"},
  {time:"13:15–14:00",title:"海地獄短逛",title_ja:"海地獄を短時間見学",detail:"保留海地獄單點，不排七地獄巡禮；為阿蘇飯店入住時間留緩衝。",detail_ja:"海地獄だけを見学し、地獄めぐりはしません。阿蘇のホテルのチェックインに間に合うよう、余裕を持たせます。",place:"umi"},
  {time:"14:00–16:15",title:"前往民宿あそげん・車上午睡",title_ja:"民宿あそげんへ・車内で昼寝",detail:"先抓約 2 小時至 2 小時 30 分；實際依山路、休息與當日導航調整。",detail_ja:"約2時間〜2時間30分を見込んでいます。山道・休憩・当日のナビに合わせて調整します。",place:"aso_onsen",tag:"午睡",tag_ja:"昼寝"},
  {time:"16:30",title:"民宿あそげん入住",title_ja:"民宿あそげんにチェックイン",detail:"官方入住時間為 16:00 起；地址為阿蘇市乙姬 1506。",detail_ja:"チェックインは16:00から。住所は阿蘇市乙姫1506です。",place:"aso_onsen",illustrated:true,tag:"C 路線住宿",tag_ja:"C ルートの宿泊"},
  {time:"傍晚",time_ja:"夕方",title:"民宿晚餐、浴池與休息",title_ja:"民宿で夕食・入浴・休憩",detail:"依預訂方案享用阿蘇鄉土料理；不再安排別府市區行程，晚上留給孩子休息。",detail_ja:"予約プランに合わせて阿蘇の郷土料理を楽しみます。別府市街の予定は入れず、夜は子どもとゆっくり休みます。",place:"aso_onsen"}
]}};
const baseDayData=day=>day===3?DAY3[activeDay3]:day===4?DAY4[activeDay4]:day===5?{...DAY5[activeDay5],events:[...DAY5[activeDay5].events,...(activeDay5==="aso"?RETURN_EVENTS_C:RETURN_EVENTS)]}:DAYS[day];
const dayData=day=>localizedDay(baseDayData(day));
const uniquePlaces=events=>[...new Set(events.map(e=>e.place).filter(Boolean))];
const currentPlaces=()=>activeDay===0?["airport","still_hotel","shirakawa","kusasenri","aso","yufuin","beppu_hotel","beppu","safari",...(activeDay3==="aso"?["umi","aso_onsen"]:["umi"]),...uniquePlaces(dayData(4).events),...uniquePlaces(dayData(5).events)]:uniquePlaces(dayData(activeDay).events);
const placeURL=id=>`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(PLACES[id].query)}`;
const isAttractionPlace=id=>ATTRACTION_PLACES.has(id);
const isAttractionEvent=event=>{
  if(!event||!isAttractionPlace(event.place))return false;
  const title=event.sourceTitle||event.title;
  if(event.must)return true;
  if(event.place==="shirakawa")return /白川水源短走/.test(title);
  if(event.place==="kusasenri")return /草千里散步/.test(title);
  if(event.place==="yufuin")return /金鱗湖|湯之坪街道/.test(title)&&!/前往/.test(title);
  if(event.place==="safari")return /九州自然動物園/.test(title);
  if(event.place==="umi")return /^海地獄/.test(title);
  if(event.place==="daikanbo")return /大觀峰短停/.test(title);
  if(event.place==="castle")return /熊本城/.test(title)&&!/午餐/.test(title);
  if(event.place==="suizenji")return /水前寺成趣園/.test(title);
  if(event.place==="strawberry")return /阿蘇健康農園採草莓/.test(title);
  if(event.place==="takegawara")return /竹瓦溫泉/.test(title);
  if(event.place==="crater")return /火山口/.test(title);
  return false;
};
const driveBuffer=event=>{
  const title=event.sourceTitle||event.title;if(!/(出發|前往|開往|上山|返熊本|還車)/.test(title))return "";
  if(/高速/.test(title)||activeDay===4&&activeDay4==="highway")return isJa()?"ナビの表示時間に加えて、ICの出入り・市街の渋滞・サービスエリアでの休憩・子どもの急な対応のために 20〜40分の余裕を見てください。":"導航時間之外，另留 20–40 分鐘給交流道、市區車流、休息區與孩子臨時需求。";
  if(["shirakawa","kusasenri","yufuin","daikanbo"].includes(event.place))return isJa()?"ナビの表示時間に加えて、山道の徐行・駐車・トイレ・子どもの休憩のために 15〜30分の余裕を見てください。霧や雨の日はさらにかかることがあります。":"導航時間之外，另留 15–30 分鐘給山路慢行、停車、廁所與孩子臨時休息；遇霧雨可能再增加。";
  return isJa()?"ナビの表示時間に加えて、駐車・荷物の出し入れ・子どもの急な対応のために 15〜20分の余裕を見てください。":"導航時間之外，另留 15–20 分鐘給停車、取物與孩子臨時需求。";
};
const priorityBadge=event=>{
  if(!event.place||!isAttractionEvent(event)||!PLACE_INFO[event.place])return "";
  const info=PLACE_INFO[event.place];
  return `<span class="priority-pill ${info.level}">${loc(info,"priority")}</span>`;
};
function overviewChoice(){
  const ja=isJa();
  const day3Summary=activeDay3==="aso"?"C 海地獄・民宿あそげん":(ja?"A 別府に連泊":"A 別府連住");
  const day3Labels=ja?{beppu:"A 別府に連泊",aso:"C 海地獄・民宿あそげん"}:{beppu:"A 別府連住",aso:"C 海地獄・民宿あそげん"};
  const day4Labels=ja?{scenic:"A 景観ルート・大観峰",highway:"B 高速ルート・熊本城",aso:"C いちご狩り・熊本城"}:{scenic:"A 景觀線・大觀峰",highway:"B 高速線・熊本城",aso:"C 採草莓・熊本城"};
  const day4Summary=activeDay4==="aso"?(ja?"C いちご狩り → 熊本城":"C 採草莓 → 熊本城"):day4Labels[activeDay4];
  const day5Labels=ja?{scenic:"A 熊本城・城彩苑",highway:"B 水前寺・街歩き",aso:"C 水前寺・街歩き"}:{scenic:"A 熊本城・城彩苑",highway:"B 水前寺・街區",aso:"C 水前寺・街區"};
  const buttons=(day,labels,active)=>Object.entries(labels).map(([key,label])=>`<button type="button" data-overview-day${day}-option="${key}" aria-pressed="${active===key}">${label}</button>`).join("");
  const toggleLabel=overviewOptionsOpen?(ja?"選択肢を閉じる ↑":"收起選項 ↑"):(ja?"ルートを変更 ↓":"調整路線 ↓");
  const note=activeDay3==="aso"?(ja?"C ルートが基本プランです。2/19 08:30 に受け取り、2/21 18:30 に返却します。A／B は予備案です。":"C 路線為定案；2/19 08:30 取車、2/21 18:30 還車，A／B 僅保留為備案。"):(ja?"A／B は状況に応じた予備案です。選択内容は概要と地図にすぐ反映されます。":"A／B 為臨時狀況備案；選項會直接更新總覽與地圖。");
  return `<div class="choice-summary"><span>${ja?"現在の選択":"目前選擇"}</span><strong>2/20 Day 3｜${day3Summary}</strong><strong>2/21 Day 4｜${day4Summary}</strong><strong>2/22 Day 5｜${day5Labels[activeDay5]}</strong><button type="button" data-toggle-overview-options aria-expanded="${overviewOptionsOpen}">${toggleLabel}</button><div class="overview-route-options" ${overviewOptionsOpen?"":"hidden"}><div><small>${ja?"Day 3 の宿泊先":"Day 3 晚上住哪裡？"}</small><div class="segmented">${buttons(3,day3Labels,activeDay3)}</div></div><div><small>${ja?"Day 4 熊本への戻り方":"Day 4 回熊本"}</small><div class="segmented">${buttons(4,day4Labels,activeDay4)}</div></div><div><small>${ja?"Day 5 熊本市街":"Day 5 熊本市區"}</small><div class="segmented">${buttons(5,day5Labels,activeDay5)}</div></div><p>${note}</p></div></div>`;
}
function renderTabs(){
  const notes=isJa()?["5 DAYS","空港周辺泊","阿蘇・由布院",activeDay3==="aso"?"動物公園・海地獄・阿蘇":"動物公園・海地獄",activeDay4==="aso"?"C いちご狩り・熊本":"A／B から選択",activeDay5==="aso"?"C 水前寺・帰路":"熊本・帰路"]:["5 DAYS","機場過夜","阿蘇・由布院",activeDay3==="aso"?"動物園・海地獄・阿蘇":"動物園・海地獄",activeDay4==="aso"?"C 採草莓・熊本":"A／B 兩線擇一",activeDay5==="aso"?"C 水前寺・返程":"熊本・返程"];
  const tabNotes=notes.map((note,day)=>day===0?`${TRIP_DATE_RANGE} · ${note}`:`${TRIP_DATES[day]} · ${note}`);
  $("dayTabs").innerHTML=[isJa()?"概要":"總覽","Day 1","Day 2","Day 3","Day 4","Day 5"].map((label,day)=>`<button type="button" class="day-tab" role="tab" aria-selected="${day===activeDay}" data-day="${day}">${label}<small>${tabNotes[day]}</small></button>`).join("");
  $("dayTabs").querySelectorAll("[data-day]").forEach(b=>b.addEventListener("click",()=>setDay(Number(b.dataset.day))));
}
function renderOption(){
  const day3Wrap=$("day3OptionWrap");day3Wrap.hidden=activeDay!==3;
  day3Wrap.querySelectorAll("[data-day3-option]").forEach(b=>{const selected=b.dataset.day3Option===activeDay3;b.classList.toggle("is-active",selected);b.setAttribute("aria-pressed",String(selected));});
  const wrap=$("day4OptionWrap");wrap.hidden=activeDay!==4;
  wrap.querySelectorAll("[data-day4-option]").forEach(b=>{const selected=b.dataset.day4Option===activeDay4;b.classList.toggle("is-active",selected);b.setAttribute("aria-pressed",String(selected));});
  const day5Wrap=$("day5OptionWrap");day5Wrap.hidden=activeDay!==5;
  day5Wrap.querySelectorAll("[data-day5-option]").forEach(b=>{const selected=b.dataset.day5Option===activeDay5;b.classList.toggle("is-active",selected);b.setAttribute("aria-pressed",String(selected));});
  const ja=isJa();
  $("day5LinkNote").textContent=activeDay3==="aso"?(ja?"C ルートでは 2/21 18:30 に返却済みのため、2/22 は空港バスまたはタクシーで空港へ向かいます。":"C 路線已於 2/21 18:30 還車，2/22 改搭機場巴士或計程車前往機場。"):activeDay4===activeDay5?(ja?"Day 4 のルートに合わせたおすすめプランです。自由に切り替えることもできます。":"這是依 Day 4 路線帶入的建議版本；也可自行切換。"):(ja?"Day 5 のプランを個別に変更しました。前日に実際に回った場所に合わせて選んでください。":"已自行改選 Day 5 版本；請依前一天實際去過的景點決定。");
}
function renderTimeline(){
  renderOption();
  if(activeDay===0){
    $("dayKicker").textContent=`${TRIP_DATE_RANGE} · ${isJa()?"5 DAYS · 4 NIGHTS":"THE FIVE DAY STORY"}`;$("dayTitle").textContent=isJa()?"5日間・4泊の概要":"五天四夜總覽";$("daySubtitle").textContent=activeDay3==="aso"?(isJa()?"空港周辺 1泊 → 別府 1泊 → 阿蘇 1泊 → 熊本市街 1泊":"機場周邊 1 晚 → 別府 1 晚 → 阿蘇 1 晚 → 熊本市區 1 晚。"):(isJa()?"空港周辺 1泊 → 別府 2泊 → 熊本市街 1泊":"機場周邊 1 晚 → 別府 2 晚 → 熊本市區 1 晚。");$("dayNumber").textContent="05";
    $("copyDayButton").hidden=true;
    $("timeline").innerHTML=overviewChoice()+overviewItems().map((item,i)=>`<button type="button" class="overview-day" data-overview-day="${i+1}"><span class="overview-date">DAY ${i+1} · ${TRIP_DATES[i+1]}</span><span><strong>${loc(item,"title")}</strong><small>${loc(item,"desc")}</small></span><span class="arrow" aria-hidden="true">↗</span></button>`).join("");
    $("timeline").querySelectorAll("[data-overview-day]").forEach(b=>b.addEventListener("click",()=>setDay(Number(b.dataset.overviewDay))));
    $("timeline").querySelector("[data-toggle-overview-options]").addEventListener("click",()=>{overviewOptionsOpen=!overviewOptionsOpen;renderTimeline();});
    $("timeline").querySelectorAll("[data-overview-day3-option]").forEach(b=>b.addEventListener("click",()=>setDay3Option(b.dataset.overviewDay3Option)));
    $("timeline").querySelectorAll("[data-overview-day4-option]").forEach(b=>b.addEventListener("click",()=>setDay4Option(b.dataset.overviewDay4Option)));
    $("timeline").querySelectorAll("[data-overview-day5-option]").forEach(b=>b.addEventListener("click",()=>setDay5Option(b.dataset.overviewDay5Option)));
    $("insightCard").innerHTML=isJa()?`<strong>この旅のペース</strong><p>${TRIP_DATE_RANGE}。C ルートを基本プランとし、2/19 08:30 にレンタカーを受け取り、2/21 18:30 に返却します。A／B ルートは状況に応じた予備案です。</p>`:`<strong>這趟行程的節奏</strong><p>${TRIP_DATE_RANGE}，以 C 路線為定案；2/19 08:30 取車、2/21 18:30 還車。A／B 路線保留作為臨時狀況的備案。</p>`;
    return;
  }
  const data=dayData(activeDay);$("dayKicker").textContent=`DAY ${String(activeDay).padStart(2,"0")} · ${TRIP_DATES[activeDay]}`;$("dayTitle").textContent=data.title;$("daySubtitle").textContent=data.subtitle;$("dayNumber").textContent=String(activeDay).padStart(2,"0");
  $("copyDayButton").hidden=false;
  $("timeline").innerHTML=data.events.map((event,i)=>{const buffer=driveBuffer(event),attraction=isAttractionEvent(event);return `<article class="timeline-event" id="event-${i}" data-event-place="${event.place||""}"><span class="event-time">${event.time}</span><div class="event-content"><div class="event-top"><h4>${event.title}</h4>${event.tag?`<span class="event-tag ${event.must?"highlight":""}">${event.tag}</span>`:""}${priorityBadge(event)}</div><p>${event.detail}</p>${buffer?`<details class="drive-buffer"><summary>${isJa()?"移動時間の余裕を見る":"查看車程彈性"}</summary><p>${buffer}</p></details>`:""}${event.place?`<div class="event-actions"><button type="button" data-place-info="${event.place}" data-info-index="${i}">${attraction?(isJa()?"スポット案内":"景點簡介"):(isJa()?"予定の説明":"行程說明")}</button><span>·</span><button type="button" data-focus="${event.place}">${isJa()?"地図で確認":"地圖定位"}</button><span>·</span><a href="${placeURL(event.place)}" target="_blank" rel="noopener">${isJa()?"ナビを開く ↗":"開啟導航 ↗"}</a></div>`:""}</div></article>`}).join("");
  $("timeline").querySelectorAll("[data-focus]").forEach(b=>b.addEventListener("click",()=>focusPlace(b.dataset.focus)));
  $("timeline").querySelectorAll("[data-place-info]").forEach(b=>b.addEventListener("click",()=>openPlaceInfo(b.dataset.placeInfo,Number(b.dataset.infoIndex))));
  $("insightCard").innerHTML=`<strong>${isJa()?"本日のメモ":"當日提醒"}</strong><p>${data.insight}</p>`;
}
function renderMapStops(places){
  const ids=[...new Set(places)];$("mapStops").innerHTML=ids.map((id,i)=>`<button type="button" class="stop-chip ${id===activePlace?"is-active":""}" data-stop="${id}">${String(i+1).padStart(2,"0")} ${placeName(id)}</button>`).join("");
  $("mapStops").querySelectorAll("[data-stop]").forEach(b=>b.addEventListener("click",()=>openPlaceInfo(b.dataset.stop)));
}
function pinIcon(number,must,active){return L.divIcon({className:"",html:`<div class="map-pin ${must?"must":""} ${active?"active":""}">${number}</div>`,iconSize:[34,34],iconAnchor:[17,17]});}
function initMap(){
  if(!window.L){$("mapFallback").hidden=false;return;}
  map=L.map("map",{zoomControl:false,scrollWheelZoom:false}).setView([33.1,131.1],9);L.control.zoom({position:"bottomright"}).addTo(map);
  let tileErrors=0;const tiles=L.tileLayer("https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png",{maxZoom:18,attribution:'<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank" rel="noopener">地理院タイル</a>',errorTileUrl:"data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="});
  tiles.on("tileerror",()=>{tileErrors++;if(tileErrors>=2){map.removeLayer(tiles);$("mapFallback").hidden=false;}}).addTo(map);renderMap();setTimeout(()=>map.invalidateSize(),250);
}
function renderMap(){
  const places=currentPlaces();$("mapTitle").textContent=activeDay===0?(isJa()?"九州旅行マップ":"九州旅程地圖"):`Day ${activeDay} · ${isJa()?"立ち寄り地":"停留點"}`;renderMapStops(places);if(!map)return;
  markers.forEach(({marker})=>map.removeLayer(marker));markers=[];if(routeLine){map.removeLayer(routeLine);routeLine=null;}
  [...new Set(places)].forEach((id,i)=>{const p=PLACES[id],marker=L.marker([p.lat,p.lng],{icon:pinIcon(i+1,id==="safari",id===activePlace)}).addTo(map);marker.bindTooltip(`${placeName(id)}・${isJa()?(isAttractionPlace(id)?"スポット案内":"予定の説明"):`點擊看${isAttractionPlace(id)?"景點簡介":"行程說明"}`}`,{direction:"top"});marker.on("click",()=>{highlightPlace(id,false);openPlaceInfo(id);});markers.push({id,index:i,marker});});
  if(places.length>1)routeLine=L.polyline(places.map(id=>[PLACES[id].lat,PLACES[id].lng]),{color:"#ba7856",weight:3,opacity:.82,dashArray:"7 8"}).addTo(map);fitCurrent();
}
function fitCurrent(){if(!map)return;const pts=currentPlaces().map(id=>[PLACES[id].lat,PLACES[id].lng]);if(pts.length===1)map.setView(pts[0],12);else map.fitBounds(L.latLngBounds(pts),{padding:[45,45],maxZoom:12,animate:true});}
function highlightPlace(id,scroll){activePlace=id;markers.forEach(({id:p,index,marker})=>marker.setIcon(pinIcon(index+1,p==="safari",p===id)));renderMapStops(currentPlaces());$("timeline").querySelectorAll(".timeline-event").forEach(card=>card.classList.toggle("is-active",card.dataset.eventPlace===id));if(scroll){const card=$("timeline").querySelector(`[data-event-place="${id}"]`);if(card)card.scrollIntoView({behavior:"smooth",block:"center"});}}
function focusPlace(id){highlightPlace(id,true);const found=markers.find(e=>e.id===id);if(map&&found)map.flyTo(found.marker.getLatLng(),Math.max(map.getZoom(),12),{duration:.5});}
function openPlaceInfo(id,eventIndex){
  const place=PLACES[id],info=PLACE_INFO[id];if(!place||!info)return;
  const event=Number.isInteger(eventIndex)&&activeDay>0?dayData(activeDay).events[eventIndex]:null;
  const attraction=event?isAttractionEvent(event):isAttractionPlace(id);
  const lodging=ILLUSTRATED_INFO_PLACES.has(id)&&event?.illustrated===true;
  const illustrated=attraction||lodging;
  highlightPlace(id,false);
  const dialog=$("placeDialog"),art=$("placeDialogArt"),priority=$("placeDialogPriority");
  dialog.className=`place-dialog${illustrated?"":" text-only"}`;
  art.hidden=!illustrated;art.className=`place-art scene-${info.scene}`;art.dataset.place=id;
  art.setAttribute("aria-label",illustrated?`${placeName(id)}${isJa()?"の水彩イラスト":"水彩旅行插圖"}`:"");
  $("placeDialogArea").textContent=attraction?`${isJa()?placeName(id):place.area}・${isJa()?"スポット案内":"景點簡介"}`:(activeDay?`DAY ${activeDay}・${isJa()?"予定の説明":"行程說明"}`:(isJa()?"予定の説明":"行程說明"));
  $("placeDialogTitle").textContent=illustrated?placeName(id):(event?.title||placeName(id));
  $("placeDialogDescription").textContent=illustrated?loc(info,"description"):(event?.detail||loc(info,"description"));
  $("placeDialogTimeLabel").textContent=attraction?(isJa()?"目安の滞在時間":"建議停留"):lodging?(isJa()?"宿泊予定":"住宿安排"):(isJa()?"予定時間":"安排時間");
  $("placeDialogTipLabel").textContent=attraction?(isJa()?"子連れメモ":"親子提示"):lodging?(isJa()?"子連れ宿泊メモ":"親子住宿提醒"):(isJa()?"旅程メモ":"行程提示");
  $("placeDialogStay").textContent=illustrated?loc(info,"stay"):(event?.time||loc(info,"stay"));
  $("placeDialogFamily").textContent=illustrated?loc(info,"family"):(driveBuffer(event||{})||loc(info,"family"));
  priority.hidden=!attraction;priority.textContent=loc(info,"priority");priority.className=`priority-pill ${info.level}`;
  $("placeDialogNavigate").href=placeURL(id);$("placeDialogLocate").dataset.locate=id;
  if(typeof dialog.showModal==="function")dialog.showModal();else dialog.setAttribute("open","");
}
function closePlaceInfo(){const dialog=$("placeDialog");if(typeof dialog.close==="function")dialog.close();else dialog.removeAttribute("open");}
async function copyDayPlan(){
  if(activeDay===0)return;
  const data=dayData(activeDay);
  const routeNote=isJa()?`ルート：Day 4 ${activeDay4==="scenic"?"景観ルート":activeDay4==="highway"?"高速ルート":"C ルート"}／Day 5 ${activeDay5==="scenic"?"熊本城":activeDay5==="highway"?"水前寺":"C ルート"}`:`路線版本：Day 4 ${activeDay4==="scenic"?"景觀線":activeDay4==="highway"?"高速線":"C 路線"}／Day 5 ${activeDay5==="scenic"?"熊本城":activeDay5==="highway"?"水前寺":"C 路線"}`;
  const text=[`Day ${activeDay}｜${TRIP_DATES[activeDay]}｜${data.title}`,data.subtitle,"",...data.events.map(event=>`${event.time}　${event.title}\n${event.detail}`),"",routeNote].join("\n");
  try{await navigator.clipboard.writeText(text);}catch(error){const area=document.createElement("textarea");area.value=text;area.style.position="fixed";area.style.opacity="0";document.body.appendChild(area);area.select();document.execCommand("copy");area.remove();}
  const toast=$("copyToast");toast.hidden=false;clearTimeout(copyDayPlan.timer);copyDayPlan.timer=setTimeout(()=>toast.hidden=true,1800);
}
function renderChecklistProgress(){
  const boxes=[...$("tripChecklist").querySelectorAll("input[type=checkbox]")],done=boxes.filter(box=>box.checked).length;
  $("checklistProgress").textContent=isJa()?`${done} / ${boxes.length} 完了`:`${done} / ${boxes.length} 完成`;
}
function initChecklist(){
  const key="kumamoto-trip-checklist-v1",boxes=[...$("tripChecklist").querySelectorAll("input[type=checkbox]")];
  let saved=[];try{saved=JSON.parse(localStorage.getItem(key)||"[]");}catch(error){}
  boxes.forEach(box=>{box.checked=saved.includes(box.value);box.addEventListener("change",save);});
  function save(){const checked=boxes.filter(box=>box.checked).map(box=>box.value);try{localStorage.setItem(key,JSON.stringify(checked));}catch(error){}renderChecklistProgress();}
  $("resetChecklist").addEventListener("click",()=>{boxes.forEach(box=>box.checked=false);save();});save();
}
function setDay(day){activeDay=day;activePlace=null;renderTabs();renderTimeline();renderMap();}
function setDay3Option(option){activeDay3=option;if(option==="aso"){activeDay4="aso";activeDay5="aso";}else if(activeDay4==="aso"||activeDay5==="aso"){activeDay4="scenic";activeDay5="scenic";}activePlace=null;renderTabs();renderTimeline();renderMap();}
function setDay4Option(option){activeDay4=option;activeDay5=option;activeDay3=option==="aso"?"aso":"beppu";activePlace=null;renderTabs();renderTimeline();renderMap();}
function setDay5Option(option){activeDay5=option;if(option==="aso"){activeDay3="aso";activeDay4="aso";}else if(activeDay3==="aso"){activeDay3="beppu";activeDay4=option;}activePlace=null;renderTabs();renderTimeline();renderMap();}
/* Static text: data-ja holds the Japanese innerHTML, data-ja-label the Japanese aria-label, data-ja-content the meta content. */
function translateStaticDom(){
  document.querySelectorAll("[data-ja]").forEach(el=>{if(el.__zhHtml===undefined)el.__zhHtml=el.innerHTML;el.innerHTML=isJa()?el.dataset.ja:el.__zhHtml;});
  document.querySelectorAll("[data-ja-label]").forEach(el=>{if(el.__zhLabel===undefined)el.__zhLabel=el.getAttribute("aria-label");el.setAttribute("aria-label",isJa()?el.dataset.jaLabel:el.__zhLabel);});
  document.querySelectorAll("[data-ja-content]").forEach(el=>{if(el.__zhContent===undefined)el.__zhContent=el.getAttribute("content");el.setAttribute("content",isJa()?el.dataset.jaContent:el.__zhContent);});
}
function applyLanguage(){
  document.documentElement.lang=isJa()?"ja":"zh-Hant";
  document.body.classList.toggle("is-ja",isJa());
  document.querySelectorAll("[data-language]").forEach(button=>{const selected=button.dataset.language===language;button.setAttribute("aria-pressed",String(selected));});
  const languageSwitch=document.querySelector(".language-switch");if(languageSwitch)languageSwitch.setAttribute("aria-label",isJa()?"言語":"語言");
  translateStaticDom();renderTabs();renderTimeline();renderMap();renderChecklistProgress();
}
$("day3OptionSwitch").querySelectorAll("[data-day3-option]").forEach(b=>b.addEventListener("click",()=>setDay3Option(b.dataset.day3Option)));
$("day4OptionSwitch").querySelectorAll("[data-day4-option]").forEach(b=>b.addEventListener("click",()=>setDay4Option(b.dataset.day4Option)));
$("day5OptionSwitch").querySelectorAll("[data-day5-option]").forEach(b=>b.addEventListener("click",()=>setDay5Option(b.dataset.day5Option)));
$("placeDialogClose").addEventListener("click",closePlaceInfo);
$("placeDialog").addEventListener("click",event=>{if(event.target===$("placeDialog"))closePlaceInfo();});
$("placeDialogLocate").addEventListener("click",()=>{const id=$("placeDialogLocate").dataset.locate;closePlaceInfo();focusPlace(id);});
$("copyDayButton").addEventListener("click",copyDayPlan);
$("mapReset").addEventListener("click",fitCurrent);initChecklist();setDay(0);initMap();
document.querySelectorAll("[data-language]").forEach(button=>button.addEventListener("click",()=>{language=button.dataset.language;try{localStorage.setItem("kumamoto-language",language);}catch(error){}activePlace=null;applyLanguage();}));
applyLanguage();
const linkedPlace=new URLSearchParams(window.location.search).get("place");
if(linkedPlace&&PLACE_INFO[linkedPlace])setTimeout(()=>openPlaceInfo(linkedPlace),0);
