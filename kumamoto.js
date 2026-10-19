/* Stops are shown in travel order. Dashed map lines are not driving routes. */
const PLACES={
  airport:{name:"阿蘇熊本機場",lat:32.8372,lng:130.8553,query:"阿蘇熊本機場",area:"第一晚飯店待定・機場周邊"},
  shirakawa:{name:"白川水源",lat:32.8231,lng:131.0873,query:"白川水源",area:"南阿蘇"},
  kusasenri:{name:"阿蘇草千里",lat:32.8818,lng:131.0538,query:"草千里ヶ浜",area:"阿蘇山"},
  crater:{name:"阿蘇火山口",lat:32.8846,lng:131.0857,query:"阿蘇中岳火口",area:"僅開放時可前往"},
  aso:{name:"阿蘇午餐區域",lat:32.9373,lng:131.0801,query:"阿蘇市 餐廳",area:"阿蘇"},
  yufuin:{name:"由布院・金鱗湖",lat:33.2667,lng:131.369,query:"金鱗湖",area:"由布院"},
  beppu:{name:"別府市區",lat:33.2796,lng:131.5002,query:"別府駅",area:"住宿與晚餐區域"},
  safari:{name:"九州自然動物園",lat:33.3549,lng:131.4112,query:"九州自然動物公園 アフリカンサファリ",area:"必去"},
  umi:{name:"海地獄",lat:33.3134,lng:131.4712,query:"海地獄",area:"別府地獄"},
  takegawara:{name:"竹瓦溫泉周邊",lat:33.2779,lng:131.507,query:"竹瓦温泉",area:"別府市區"},
  daikanbo:{name:"大觀峰",lat:32.9962,lng:131.0674,query:"大観峰",area:"阿蘇北外輪山"},
  kumamoto:{name:"熊本市區",lat:32.8034,lng:130.7100,query:"熊本市中央區",area:"第二次住宿區域"},
  castle:{name:"熊本城・城彩苑",lat:32.8058,lng:130.706,query:"熊本城 桜の馬場 城彩苑",area:"熊本城"},
  suizenji:{name:"水前寺成趣園",lat:32.7908,lng:130.7343,query:"水前寺成趣園",area:"熊本市區"},
  shopping:{name:"上通・下通",lat:32.8028,lng:130.7096,query:"熊本 下通商店街",area:"熊本市中心"}
};
const PLACE_INFO={
  airport:{scene:"kumamoto",priority:"必要節點",level:"core",stay:"用餐 40–50 分鐘",description:"第一晚的任務是順利吃飯和休息。航廈一樓及そらよかダイニング有抵達旅客可使用的餐飲選擇。",family:"先準備延誤時可直接吃的輕食；飯店確定後補上接駁末班時間。"},
  shirakawa:{scene:"aso",priority:"建議保留",level:"flex",stay:"30–40 分鐘",description:"南阿蘇代表性的清澈湧泉，水邊與樹蔭形成舒服的短程散步，適合早上取車後先讓孩子活動。",family:"石板和水邊可能濕滑，推車遇階差時改用揹帶較省力。"},
  kusasenri:{scene:"aso",priority:"建議保留",level:"flex",stay:"40–50 分鐘",description:"阿蘇火山地形中的大片草原，視野開闊，適合在長途行車前後伸展。天候變化會直接影響體感與能見度。",family:"風大時加外套；停車、上廁所與走到草原都要算進停留時間。"},
  crater:{scene:"aso",priority:"開放才考慮",level:"optional",stay:"30–45 分鐘",description:"中岳火山口景觀很有震撼力，但會因火山活動、氣體、道路和天候臨時管制，目前不能當成固定行程。",family:"出發前與抵達山上時各查一次官方狀態；不開放就直接用餐。"},
  aso:{scene:"aso",priority:"必要休息",level:"core",stay:"45–60 分鐘",description:"阿蘇午餐是 Day 2 與景觀線 Day 4 的節奏轉換點，先讓孩子吃飽，再把較長車程接下午睡。",family:"選有停車場、兒童椅和能快速出餐的店，比追熱門名店更實際。"},
  yufuin:{scene:"beppu",priority:"延誤可縮短",level:"optional",stay:"40–60 分鐘",description:"金鱗湖與湯之坪街道適合輕鬆散步，但 Day 2 已有多段山路，因此把它當成可伸縮的午後停留。",family:"湖畔與街道擇一即可；遇塞車或孩子仍在睡就縮成 20–30 分鐘。"},
  beppu:{scene:"beppu",priority:"住宿基地",level:"core",stay:"依用餐安排",description:"別府連住兩晚，市區可安排冷麵、唐揚、豐後牛，也能依孩子體力只在飯店周邊散步。",family:"熱門餐廳先查候位方式；晚餐排隊太久就改定食或外帶。"},
  safari:{scene:"beppu",priority:"本行程必去",level:"must",stay:"2.5–3 小時",description:"九州自然動物園是全程核心景點，可選自駕動物區或叢林巴士，再到互動區近距離看動物。",family:"先查當季開園和巴士班次；車上備水與簡單點心，離園前先上廁所。"},
  umi:{scene:"beppu",priority:"延誤可縮短",level:"optional",stay:"60–75 分鐘",description:"海地獄以鈷藍色溫泉池和蒸氣景觀為主，單點參觀即可，不需要為了集章走完整套地獄巡禮。",family:"園內蒸氣和熱水區注意孩子動線；動物園玩太久時縮短停留。"},
  takegawara:{scene:"beppu",priority:"有精神再去",level:"optional",stay:"30–60 分鐘",description:"竹瓦溫泉周邊保留別府舊城氣氛，適合傍晚散步並接市區晚餐。",family:"孩子累了就取消散步，直接在飯店附近吃飯。"},
  daikanbo:{scene:"aso",priority:"景觀線選項",level:"flex",stay:"30–40 分鐘",description:"大觀峰位於阿蘇北外輪山，可從不同角度眺望阿蘇五岳，是避免重複草千里的中繼站。",family:"濃霧、強風或下雨時景觀價值大幅下降，可直接取消改回熊本。"},
  kumamoto:{scene:"kumamoto",priority:"住宿基地",level:"core",stay:"依入住安排",description:"熊本市區最後一晚以停車、入住、晚餐與整理行李為主，景點安排依 Day 4 路線調整。",family:"先確認飯店停車和入住時間，避免帶著孩子繞市區找車位。"},
  castle:{scene:"kumamoto",priority:"建議保留",level:"flex",stay:"1.5–2 小時",description:"熊本城與城彩苑可把歷史景觀、地方小吃和伴手禮放在同一站完成。是否放 Day 4 或 Day 5 取決於回熊本的路線。",family:"園區有坡道與台階，揹帶通常比全程推車靈活；注意最晚入園時間。"},
  suizenji:{scene:"kumamoto",priority:"替代方案",level:"optional",stay:"40–60 分鐘",description:"水前寺成趣園是池泉回遊式庭園，適合已在前一天逛過熊本城時，安排一段節奏較慢的晨間散步。",family:"園內沒有一般遊客專用停車場，先選好附近付費停車場。"},
  shopping:{scene:"kumamoto",priority:"彈性安排",level:"optional",stay:"60–120 分鐘",description:"上通與下通是有遮蔽的市中心商店街，可集中處理晚餐、小吃和伴手禮。",family:"把必買清單先寫好；返程日要倒推取車、加油和機場報到。"}
};
const ATTRACTION_PLACES=new Set(["shirakawa","kusasenri","crater","yufuin","safari","umi","takegawara","daikanbo","castle","suizenji"]);
const DAYS={
  1:{title:"熊本機場周邊・抵達日",subtitle:"18:15 抵達後不租車、不進市區。先吃飯，再到機場附近就寢。",insight:"第一晚飯店尚未確定。訂房時確認機場接駁或計程車車程、晚間入住、早餐與隔日返回租車營業所的方式。",events:[
    {time:"15:00–18:15",title:"台中飛往熊本",detail:"航班時間依原行程；以實際機票為準。",place:"airport",tag:"航班"},
    {time:"約 18:30–19:20",title:"入境、領行李",detail:"抓約 50 分鐘緩衝；依排隊與行李提領順延。",place:"airport"},
    {time:"約 19:20–20:05",title:"機場周邊晚餐",detail:"優先選抵達後可進入的航廈 1F 或そらよかダイニング；若延誤，改飯店附近或預備輕食。先查當日最後點餐時間。",place:"airport",tag:"先用餐"},
    {time:"約 20:15",title:"前往機場附近飯店",detail:"搭飯店接駁或計程車；飯店名稱與確切交通方式待訂房後補上。",place:"airport",tag:"飯店待定"},
    {time:"約 20:30",title:"入住與休息",detail:"第一晚住機場周邊，為隔天早上取車保留體力。",place:"airport"}
  ]},
  2:{title:"機場周邊 → 白川水源 → 草千里 → 由布院 → 別府",subtitle:"南阿蘇水源先走，接草千里；午後往由布院的路段安排午睡。",insight:"白川水源先於草千里，方向順。火山口目前受管制，不能列為固定景點；若出發時重新開放且時間充裕，才加看 30–45 分鐘，並縮短由布院停留。各段車程為規劃估值，出發前看導航。",events:[
    {time:"07:45–08:15",title:"早餐、退房，返回機場租車點",detail:"第一晚飯店待定；先預約隔天早上的接駁或計程車。",place:"airport"},
    {time:"08:15–09:00",title:"取車與安裝兒童座椅",detail:"確認座椅、ETC、導航語言、還車地點與時段。依租車營業所實際開門時間預約。",place:"airport",tag:"早上取車"},
    {time:"09:00–09:50",title:"開往白川水源",detail:"規劃抓約 45–60 分鐘；以實際道路與停車位置為準。",place:"shirakawa"},
    {time:"09:50–10:25",title:"白川水源短走",detail:"約 30–35 分鐘，讓孩子活動、補水。",place:"shirakawa"},
    {time:"10:25–11:10",title:"上山前往草千里",detail:"山路抓約 35–50 分鐘，留轉彎與停車緩衝。",place:"kusasenri"},
    {time:"11:10–11:55",title:"草千里散步",detail:"看草原、走平坦路段；火山口是否開放當天再查。",place:"kusasenri"},
    {time:"12:00–12:45",title:"阿蘇午餐",detail:"盡量在午睡前吃完。火山口若恢復開放，需挪用午餐或由布院的彈性時間。",place:"aso"},
    {time:"13:00–15:00",title:"前往由布院・車上午睡",detail:"規劃抓約 1 小時 45 分至 2 小時 15 分；含休息時可更久。",place:"yufuin",tag:"午睡"},
    {time:"15:00–15:50",title:"金鱗湖、湯之坪街道",detail:"湖畔和商店擇一段走；若火山口加進來或山路慢行，這段優先縮短。",place:"yufuin"},
    {time:"15:50–17:00",title:"前往別府並入住",detail:"由布院到別府市區抓約 45–60 分鐘，再預留停車、入住。",place:"beppu",tag:"別府第 1 晚"},
    {time:"17:30",title:"別府晚餐與休息",detail:"冷麵、唐揚或豐後牛，依孩子狀態選近飯店的店。",place:"beppu"}
  ]},
  3:{title:"九州自然動物園 → 海地獄 → 別府市區",subtitle:"動物園是今日主角；午餐後去海地獄，傍晚留給別府散步與晚餐。",insight:"海地獄目前公告 08:00–17:00；排在午後仍要留意離園及車程。若動物園玩得久，海地獄以單點短逛，晚間逛街依孩子體力決定。",events:[
    {time:"07:50",title:"別府出發",detail:"山路、停車與入園排隊留緩衝。",place:"beppu"},
    {time:"約 09:00–11:30",title:"九州自然動物園",detail:"自駕或叢林巴士，並視時間逛互動區；營業和巴士班次依當季公告。",place:"safari",tag:"必去",must:true},
    {time:"11:30–12:15",title:"園內午餐",detail:"離園前補水、上廁所，準備下段車程。",place:"safari"},
    {time:"12:15–13:05",title:"往海地獄・短車程午睡",detail:"車程先抓 35–50 分鐘；孩子若仍在睡，可稍候或縮短海地獄停留。",place:"umi",tag:"午睡機會"},
    {time:"13:15–14:30",title:"海地獄",detail:"只看海地獄，不排七地獄巡禮。天候或孩子狀態不佳可縮短。",place:"umi"},
    {time:"15:00–16:30",title:"回飯店休息或別府市區慢走",detail:"先確認入住飯店位置；想散步可到站前、竹瓦溫泉周邊。",place:"takegawara"},
    {time:"17:30",title:"別府晚餐、逛街",detail:"在別府市區用餐，仍有精神再散步；早點回飯店。",place:"beppu",tag:"別府第 2 晚"}
  ]}
};
const DAY4={
  scenic:{title:"別府 → 大觀峰 → 熊本｜景觀線",subtitle:"早退房，走山線到大觀峰短停；下午回熊本逛商店街。",insight:"大觀峰與草千里是不同觀景點，但這條山線仍較長、受天候影響。規劃行車合計約 3.5–4.5 小時，再加觀景、午餐；熊本城留到 Day 5。",events:[
    {time:"08:30",title:"別府退房出發",detail:"往阿蘇北外輪山。山路時間依當天導航調整。",place:"beppu"},
    {time:"約 10:45–11:20",title:"大觀峰短停",detail:"看阿蘇全景、伸展約 30–35 分鐘；遇濃霧或大風可取消。",place:"daikanbo",tag:"中繼站"},
    {time:"11:30–12:15",title:"附近午餐",detail:"選方便停車的阿蘇店家，先餵飽孩子。",place:"aso"},
    {time:"12:15–14:15",title:"前往熊本・車上午睡",detail:"抓約 1.5–2 小時，依道路、休息和市區交通調整。",place:"kumamoto",tag:"午睡"},
    {time:"約 15:00",title:"熊本飯店入住",detail:"先停車、整理行李。",place:"kumamoto",tag:"熊本第 2 晚"},
    {time:"16:00–18:30",title:"上通、下通與晚餐",detail:"下午逛商店街、吃熊本料理。熊本城留 Day 5。",place:"shopping"}
  ]},
  highway:{title:"別府 → 熊本｜高速線",subtitle:"直接走高速公路回熊本，把多出的時間留給熊本城。",insight:"NEXCO 的別府 IC→熊本 IC 查詢約 2 小時 8 分；加上旅館到交流道、熊本市區和休息，門到門先抓約 2 小時 45 分至 3 小時 15 分。相較景觀線通常可省約 1–2 小時的總行程時間，仍以當日導航為準。",events:[
    {time:"08:30",title:"別府退房出發",detail:"高速公路直回熊本，途中視孩子狀況在休息區停車。",place:"beppu"},
    {time:"約 11:15–12:15",title:"熊本市區午餐",detail:"抵達時間受交流道、塞車與停車影響。",place:"kumamoto"},
    {time:"12:15–13:30",title:"午睡或安靜休息",detail:"可在車上接午睡，成人留在車旁照看；若飯店可提早入住則回房休息。",place:"kumamoto",tag:"午睡"},
    {time:"14:00–16:00",title:"熊本城與城彩苑",detail:"官方一般季節最晚 16:00 入園；若午睡延長就改先逛城彩苑，熊本城移回 Day 5。",place:"castle"},
    {time:"16:15",title:"熊本飯店入住",detail:"放行李、停車。",place:"kumamoto",tag:"熊本第 2 晚"},
    {time:"17:30",title:"熊本晚餐",detail:"下通周邊找家適合孩子的餐廳。",place:"shopping"}
  ]}
};
const DAY5={
  scenic:{title:"熊本城・城彩苑・返程",subtitle:"若前一天尚未逛熊本城，今天上午集中賞城。",insight:"帶揹帶應對熊本城坡道與台階；15:15 出發往機場是返程硬時間。",events:[
    {time:"09:30–11:30",title:"熊本城、城彩苑",detail:"以天守閣與城彩苑為主，抓約 2 小時。",place:"castle"},
    {time:"11:45–12:30",title:"城彩苑午餐",detail:"排隊久就改市區簡餐。",place:"castle"},
    {time:"12:30–13:30",title:"午睡或安靜休息",detail:"若回飯店，先確認延遲退房；也可推車休息或在車上由成人陪同。",place:"kumamoto",tag:"午睡"},
    {time:"13:30–15:00",title:"上通、下通小吃與伴手禮",detail:"按取車、回飯店取行李的時間縮短。",place:"shopping"}
  ]},
  highway:{title:"水前寺成趣園・街區美食・返程",subtitle:"若前一天已逛熊本城，今天換成庭園短走與街區美食。",insight:"水前寺成趣園 08:30 開園，園方建議散步約 30–40 分鐘；園內沒有一般遊客專用停車場，使用周邊付費停車場。若前日因延誤未去熊本城，切回 Day 5 的熊本城版本。",events:[
    {time:"09:30–10:30",title:"水前寺成趣園",detail:"庭園散步約 30–40 分鐘，另留停車與孩子步行時間。",place:"suizenji"},
    {time:"11:00–12:00",title:"上通、下通與午餐",detail:"吃熊本小吃、選伴手禮，避免午餐高峰排太久。",place:"shopping"},
    {time:"12:15–13:30",title:"孩子午睡或安靜休息",detail:"退房後可在車上由成人陪同；也可找方便休息的室內地點。",place:"kumamoto",tag:"午睡"},
    {time:"13:30–15:00",title:"補逛市區、取行李",detail:"可再逛商店街；15:15 必須前往機場。",place:"shopping"}
  ]}
};
const RETURN_EVENTS=[
  {time:"15:15–16:15",title:"前往機場、加油還車",detail:"留市區車流與加油緩衝，約 16:15 還車。",place:"airport",tag:"返程緩衝"},
  {time:"17:00",title:"機場報到",detail:"整理託運行李與孩子用品。",place:"airport"},
  {time:"19:15–20:45",title:"飛返台灣",detail:"原行程航班時間；以實際訂票紀錄為準。",place:"airport",tag:"航班"}
];
const OVERVIEW=[
  {title:"機場周邊過夜",desc:"18:15 抵達，吃飯後入住；飯店待定。"},
  {title:"白川水源・草千里・由布院",desc:"早上取車，午睡車程後進別府。"},
  {title:"自然動物園・海地獄",desc:"上午看動物，午後看海地獄、逛別府。"},
  {title:"大觀峰或高速返熊本",desc:"兩條路線可切換；市區時間不同。"},
  {title:"熊本市區與返程",desc:"依 Day 4 是否逛城，換不同景點。"}
];
let activeDay=0,activeDay4="scenic",activeDay5="scenic",activePlace=null,map=null,markers=[],routeLine=null;
const $=id=>document.getElementById(id);
const dayData=day=>day===4?DAY4[activeDay4]:day===5?{...DAY5[activeDay5],events:[...DAY5[activeDay5].events,...RETURN_EVENTS]}:DAYS[day];
const uniquePlaces=events=>[...new Set(events.map(e=>e.place).filter(Boolean))];
const currentPlaces=()=>activeDay===0?["airport","shirakawa","kusasenri","aso","yufuin","beppu","safari","umi","beppu",...uniquePlaces(dayData(4).events),...uniquePlaces(dayData(5).events)]:uniquePlaces(dayData(activeDay).events);
const placeURL=id=>`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(PLACES[id].query)}`;
const isAttractionPlace=id=>ATTRACTION_PLACES.has(id);
const isAttractionEvent=event=>{
  if(!event||!isAttractionPlace(event.place))return false;
  if(event.must)return true;
  if(event.place==="shirakawa")return /白川水源短走/.test(event.title);
  if(event.place==="kusasenri")return /草千里散步/.test(event.title);
  if(event.place==="yufuin")return /金鱗湖|湯之坪街道/.test(event.title)&&!/前往/.test(event.title);
  if(event.place==="safari")return /九州自然動物園/.test(event.title);
  if(event.place==="umi")return event.title==="海地獄";
  if(event.place==="daikanbo")return /大觀峰短停/.test(event.title);
  if(event.place==="castle")return /熊本城/.test(event.title)&&!/午餐/.test(event.title);
  if(event.place==="suizenji")return /水前寺成趣園/.test(event.title);
  if(event.place==="takegawara")return /竹瓦溫泉/.test(event.title);
  if(event.place==="crater")return /火山口/.test(event.title);
  return false;
};
const driveBuffer=event=>{
  if(!/(出發|前往|開往|上山|返熊本|還車)/.test(event.title))return "";
  if(/高速/.test(event.title)||activeDay===4&&activeDay4==="highway")return "導航時間之外，另留 20–40 分鐘給交流道、市區車流、休息區與孩子臨時需求。";
  if(["shirakawa","kusasenri","yufuin","daikanbo"].includes(event.place))return "導航時間之外，另留 15–30 分鐘給山路慢行、停車、廁所與孩子臨時休息；遇霧雨可能再增加。";
  return "導航時間之外，另留 15–20 分鐘給停車、取物與孩子臨時需求。";
};
const priorityBadge=event=>{
  if(!event.place||!isAttractionEvent(event)||!PLACE_INFO[event.place])return "";
  const info=PLACE_INFO[event.place];
  return `<span class="priority-pill ${info.level}">${info.priority}</span>`;
};
function overviewChoice(){
  const day4=activeDay4==="scenic"?"景觀線・大觀峰":"高速線・熊本城";
  const day5=activeDay5==="scenic"?"熊本城・城彩苑":"水前寺・街區";
  return `<div class="choice-summary"><span>目前選擇</span><strong>Day 4｜${day4}</strong><strong>Day 5｜${day5}</strong><button type="button" data-overview-day="4">調整路線 ↗</button></div>`;
}
function renderTabs(){
  $("dayTabs").innerHTML=["總覽","Day 1","Day 2","Day 3","Day 4","Day 5"].map((label,day)=>`<button type="button" class="day-tab" role="tab" aria-selected="${day===activeDay}" data-day="${day}">${label}<small>${["5 DAYS","機場過夜","阿蘇・由布院","動物園・海地獄","兩線擇一","熊本・返程"][day]}</small></button>`).join("");
  $("dayTabs").querySelectorAll("[data-day]").forEach(b=>b.addEventListener("click",()=>setDay(Number(b.dataset.day))));
}
function renderOption(){
  const wrap=$("day4OptionWrap");wrap.hidden=activeDay!==4;
  wrap.querySelectorAll("[data-day4-option]").forEach(b=>{const selected=b.dataset.day4Option===activeDay4;b.classList.toggle("is-active",selected);b.setAttribute("aria-pressed",String(selected));});
  const day5Wrap=$("day5OptionWrap");day5Wrap.hidden=activeDay!==5;
  day5Wrap.querySelectorAll("[data-day5-option]").forEach(b=>{const selected=b.dataset.day5Option===activeDay5;b.classList.toggle("is-active",selected);b.setAttribute("aria-pressed",String(selected));});
  $("day5LinkNote").textContent=activeDay4===activeDay5?"這是依 Day 4 路線帶入的建議版本；也可自行切換。":"已自行改選 Day 5 版本；請依前一天實際去過的景點決定。";
}
function renderTimeline(){
  renderOption();
  if(activeDay===0){
    $("dayKicker").textContent="THE FIVE DAY STORY";$("dayTitle").textContent="五天四夜總覽";$("daySubtitle").textContent="機場周邊 1 晚 → 別府 2 晚 → 熊本市區 1 晚。";$("dayNumber").textContent="05";
    $("copyDayButton").hidden=true;
    $("timeline").innerHTML=overviewChoice()+OVERVIEW.map((item,i)=>`<button type="button" class="overview-day" data-overview-day="${i+1}"><span class="overview-date">DAY ${i+1}</span><span><strong>${item.title}</strong><small>${item.desc}</small></span><span class="arrow" aria-hidden="true">↗</span></button>`).join("");
    $("timeline").querySelectorAll("[data-overview-day]").forEach(b=>b.addEventListener("click",()=>setDay(Number(b.dataset.overviewDay))));
    $("insightCard").innerHTML="<strong>這趟行程的節奏</strong><p>Day 1 機場周邊過夜、Day 2 早上取車。Day 4 可切換景觀線或高速線，Day 5 會隨之更換熊本景點。</p>";
    return;
  }
  const data=dayData(activeDay);$("dayKicker").textContent=`DAY ${String(activeDay).padStart(2,"0")}`;$("dayTitle").textContent=data.title;$("daySubtitle").textContent=data.subtitle;$("dayNumber").textContent=String(activeDay).padStart(2,"0");
  $("copyDayButton").hidden=false;
  $("timeline").innerHTML=data.events.map((event,i)=>{const buffer=driveBuffer(event),attraction=isAttractionEvent(event);return `<article class="timeline-event" id="event-${i}" data-event-place="${event.place||""}"><span class="event-time">${event.time}</span><div class="event-content"><div class="event-top"><h4>${event.title}</h4>${event.tag?`<span class="event-tag ${event.must?"highlight":""}">${event.tag}</span>`:""}${priorityBadge(event)}</div><p>${event.detail}</p>${buffer?`<details class="drive-buffer"><summary>查看車程彈性</summary><p>${buffer}</p></details>`:""}${event.place?`<div class="event-actions"><button type="button" data-place-info="${event.place}" data-info-index="${i}">${attraction?"景點簡介":"行程說明"}</button><span>·</span><button type="button" data-focus="${event.place}">地圖定位</button><span>·</span><a href="${placeURL(event.place)}" target="_blank" rel="noopener">開啟導航 ↗</a></div>`:""}</div></article>`}).join("");
  $("timeline").querySelectorAll("[data-focus]").forEach(b=>b.addEventListener("click",()=>focusPlace(b.dataset.focus)));
  $("timeline").querySelectorAll("[data-place-info]").forEach(b=>b.addEventListener("click",()=>openPlaceInfo(b.dataset.placeInfo,Number(b.dataset.infoIndex))));
  $("insightCard").innerHTML=`<strong>當日提醒</strong><p>${data.insight}</p>`;
}
function renderMapStops(places){
  const ids=[...new Set(places)];$("mapStops").innerHTML=ids.map((id,i)=>`<button type="button" class="stop-chip ${id===activePlace?"is-active":""}" data-stop="${id}">${String(i+1).padStart(2,"0")} ${PLACES[id].name}</button>`).join("");
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
  const places=currentPlaces();$("mapTitle").textContent=activeDay===0?"九州旅程地圖":`Day ${activeDay} · 停留點`;renderMapStops(places);if(!map)return;
  markers.forEach(({marker})=>map.removeLayer(marker));markers=[];if(routeLine){map.removeLayer(routeLine);routeLine=null;}
  [...new Set(places)].forEach((id,i)=>{const p=PLACES[id],marker=L.marker([p.lat,p.lng],{icon:pinIcon(i+1,id==="safari",id===activePlace)}).addTo(map);marker.bindTooltip(`${p.name}・點擊看${isAttractionPlace(id)?"景點簡介":"行程說明"}`,{direction:"top"});marker.on("click",()=>{highlightPlace(id,false);openPlaceInfo(id);});markers.push({id,index:i,marker});});
  if(places.length>1)routeLine=L.polyline(places.map(id=>[PLACES[id].lat,PLACES[id].lng]),{color:"#ba7856",weight:3,opacity:.82,dashArray:"7 8"}).addTo(map);fitCurrent();
}
function fitCurrent(){if(!map)return;const pts=currentPlaces().map(id=>[PLACES[id].lat,PLACES[id].lng]);if(pts.length===1)map.setView(pts[0],12);else map.fitBounds(L.latLngBounds(pts),{padding:[45,45],maxZoom:12,animate:true});}
function highlightPlace(id,scroll){activePlace=id;markers.forEach(({id:p,index,marker})=>marker.setIcon(pinIcon(index+1,p==="safari",p===id)));renderMapStops(currentPlaces());$("timeline").querySelectorAll(".timeline-event").forEach(card=>card.classList.toggle("is-active",card.dataset.eventPlace===id));if(scroll){const card=$("timeline").querySelector(`[data-event-place="${id}"]`);if(card)card.scrollIntoView({behavior:"smooth",block:"center"});}}
function focusPlace(id){highlightPlace(id,true);const found=markers.find(e=>e.id===id);if(map&&found)map.flyTo(found.marker.getLatLng(),Math.max(map.getZoom(),12),{duration:.5});}
function openPlaceInfo(id,eventIndex){
  const place=PLACES[id],info=PLACE_INFO[id];if(!place||!info)return;
  const event=Number.isInteger(eventIndex)&&activeDay>0?dayData(activeDay).events[eventIndex]:null;
  const attraction=event?isAttractionEvent(event):isAttractionPlace(id);
  highlightPlace(id,false);
  const dialog=$("placeDialog"),art=$("placeDialogArt"),priority=$("placeDialogPriority");
  dialog.className=`place-dialog${attraction?"":" text-only"}`;
  art.hidden=!attraction;art.className=`place-art scene-${info.scene}`;art.dataset.place=id;
  art.setAttribute("aria-label",attraction?`${place.name}水彩旅行插圖`:"");
  $("placeDialogArea").textContent=attraction?`${place.area}・景點簡介`:(activeDay?`DAY ${activeDay}・行程說明`:"行程說明");
  $("placeDialogTitle").textContent=attraction?place.name:(event?.title||place.name);
  $("placeDialogDescription").textContent=attraction?info.description:(event?.detail||info.description);
  $("placeDialogTimeLabel").textContent=attraction?"建議停留":"安排時間";
  $("placeDialogTipLabel").textContent=attraction?"親子提示":"行程提示";
  $("placeDialogStay").textContent=attraction?info.stay:(event?.time||info.stay);
  $("placeDialogFamily").textContent=attraction?info.family:(driveBuffer(event||{})||info.family);
  priority.hidden=!attraction;priority.textContent=info.priority;priority.className=`priority-pill ${info.level}`;
  $("placeDialogNavigate").href=placeURL(id);$("placeDialogLocate").dataset.locate=id;
  if(typeof dialog.showModal==="function")dialog.showModal();else dialog.setAttribute("open","");
}
function closePlaceInfo(){const dialog=$("placeDialog");if(typeof dialog.close==="function")dialog.close();else dialog.removeAttribute("open");}
async function copyDayPlan(){
  if(activeDay===0)return;
  const data=dayData(activeDay);
  const text=[`Day ${activeDay}｜${data.title}`,data.subtitle,"",...data.events.map(event=>`${event.time}　${event.title}\n${event.detail}`),"",`路線版本：Day 4 ${activeDay4==="scenic"?"景觀線":"高速線"}／Day 5 ${activeDay5==="scenic"?"熊本城":"水前寺"}`].join("\n");
  try{await navigator.clipboard.writeText(text);}catch(error){const area=document.createElement("textarea");area.value=text;area.style.position="fixed";area.style.opacity="0";document.body.appendChild(area);area.select();document.execCommand("copy");area.remove();}
  const toast=$("copyToast");toast.hidden=false;clearTimeout(copyDayPlan.timer);copyDayPlan.timer=setTimeout(()=>toast.hidden=true,1800);
}
function initChecklist(){
  const key="kumamoto-trip-checklist-v1",boxes=[...$("tripChecklist").querySelectorAll("input[type=checkbox]")];
  let saved=[];try{saved=JSON.parse(localStorage.getItem(key)||"[]");}catch(error){}
  boxes.forEach(box=>{box.checked=saved.includes(box.value);box.addEventListener("change",save);});
  function save(){const checked=boxes.filter(box=>box.checked).map(box=>box.value);try{localStorage.setItem(key,JSON.stringify(checked));}catch(error){}$("checklistProgress").textContent=`${checked.length} / ${boxes.length} 完成`;}
  $("resetChecklist").addEventListener("click",()=>{boxes.forEach(box=>box.checked=false);save();});save();
}
function setDay(day){activeDay=day;activePlace=null;renderTabs();renderTimeline();renderMap();}
function setDay4Option(option){activeDay4=option;activeDay5=option;activePlace=null;renderTimeline();renderMap();}
function setDay5Option(option){activeDay5=option;activePlace=null;renderTimeline();renderMap();}
$("day4OptionSwitch").querySelectorAll("[data-day4-option]").forEach(b=>b.addEventListener("click",()=>setDay4Option(b.dataset.day4Option)));
$("day5OptionSwitch").querySelectorAll("[data-day5-option]").forEach(b=>b.addEventListener("click",()=>setDay5Option(b.dataset.day5Option)));
$("placeDialogClose").addEventListener("click",closePlaceInfo);
$("placeDialog").addEventListener("click",event=>{if(event.target===$("placeDialog"))closePlaceInfo();});
$("placeDialogLocate").addEventListener("click",()=>{const id=$("placeDialogLocate").dataset.locate;closePlaceInfo();focusPlace(id);});
$("copyDayButton").addEventListener("click",copyDayPlan);
$("mapReset").addEventListener("click",fitCurrent);initChecklist();setDay(0);initMap();
const linkedPlace=new URLSearchParams(window.location.search).get("place");
if(linkedPlace&&PLACE_INFO[linkedPlace])setTimeout(()=>openPlaceInfo(linkedPlace),0);
