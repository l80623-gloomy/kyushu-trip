/* Static, browser-local itinerary. Map pins show stops; dashed lines are not road directions. */
const PLACES = {
  airport:{name:"大分機場",lat:33.47944,lng:131.73722,area:"大分・國東"},
  beppu:{name:"別府市區",lat:33.27960,lng:131.50016,area:"別府"},
  safari:{name:"九州自然動物園",lat:33.35493,lng:131.41119,area:"宇佐・安心院"},
  hakata:{name:"博多車站",lat:33.59035,lng:130.42062,area:"福岡・博多"},
  kiwamiya:{name:"極味屋 博多車站地下街店",lat:33.59063,lng:130.42033,area:"博多車站地下街 C20"},
  kushida:{name:"櫛田神社・川端通",lat:33.59296,lng:130.41046,area:"福岡・博多舊街區"},
  ohori:{name:"大濠公園",lat:33.58617,lng:130.37627,area:"福岡・中央區"},
  science:{name:"福岡市科學館",lat:33.57735,lng:130.37793,area:"福岡・六本松"},
  tower:{name:"福岡塔・百道海濱",lat:33.59329,lng:130.35147,area:"福岡・百道"},
  marine:{name:"海之中道水族館",lat:33.66078,lng:130.36341,area:"福岡・東區"},
  anpanman:{name:"麵包超人兒童博物館",lat:33.59500,lng:130.40418,area:"福岡・中洲川端"},
  canal:{name:"博多運河城",lat:33.58950,lng:130.41061,area:"福岡・博多"},
  hell:{name:"海地獄",lat:33.31190,lng:131.46935,area:"別府・鐵輪"}
};

const fixed = {
  1:{date:"02 / 20 · 週六",title:"抵達大分・入住別府",subtitle:"抵達日只安排取車、入住和附近晚餐。",insight:"大分機場租車櫃台會接駁到營業所辦手續；15:00 落地後，取車抓約 1.5 小時。",events:[
    {time:"12:00–15:00",title:"桃園飛往大分",detail:"IT750；時間依訂票畫面。",place:"airport",tag:"航班"},
    {time:"15:00–16:30",title:"入境與取車",detail:"領行李、接駁到營業所，確認兒童座椅、ETC 與冬季輪胎。",place:"airport",tag:"預留緩衝"},
    {time:"16:30–17:20",title:"開往別府",detail:"機場官方估約 40 分鐘；把上下車和市區交通也算進去。",place:"beppu"},
    {time:"17:30–19:30",title:"入住、晚餐、休息",detail:"飯店附近吃雞肉天婦羅定食，孩子若累就直接回房。",place:"beppu",tag:"別府第 1 晚"}
  ]},
  2:{date:"02 / 21 · 週日",title:"九州自然動物園",subtitle:"這趟唯一固定景點；午後車程接孩子午睡。",insight:"冬季 08:50 開始受理、09:15 開園；叢林巴士票當日先到先買。下雪時先看園區與道路公告。",events:[
    {time:"07:50–09:15",title:"別府出發、抵達園區",detail:"預留山區路況與停車時間，先確認當日營業狀態。",place:"safari",tag:"必去",must:true},
    {time:"09:15–11:30",title:"動物區與互動區",detail:"選叢林巴士或自駕；租車自駕先確認業者條款。",place:"safari",tag:"必去",must:true},
    {time:"11:30–12:15",title:"園內午餐",detail:"離園前先處理尿布、補水與上廁所。",place:"safari"},
    {time:"12:30–15:30",title:"開往福岡・車上午睡",detail:"長車程含休息站抓約 3 小時，實際以當日導航與路況為準。",place:"hakata",tag:"午睡時段"},
    {time:"16:00–18:00",title:"福岡入住與晚餐",detail:"先停車、入住，晚餐在飯店附近吃烏龍麵或定食。",place:"hakata",tag:"福岡第 1 晚"}
  ]},
  5:{date:"02 / 24 · 週三",title:"別府早晨・大分返台",subtitle:"還車、接駁和報到是今天的重點。",insight:"預計 13:00–13:30 還車，14:00 左右到航廈報到；若實際航班調整，請重新回推時間。",events:[
    {time:"09:00–10:15",title:"別府輕散步或休息",detail:"有餘裕才選海地獄單點；也可以慢慢吃早餐。",place:"hell",tag:"可刪景點"},
    {time:"10:45–11:30",title:"提早午餐",detail:"不排需要排隊的餐廳。",place:"beppu"},
    {time:"11:45–12:45",title:"前往大分機場",detail:"途中安排加油，路況與車流留緩衝。",place:"airport"},
    {time:"13:00–14:00",title:"還車、接駁、報到",detail:"先確認租車營業所地址與還車規定；帶幼兒與託運行李留足時間。",place:"airport",tag:"重要"},
    {time:"16:30–18:10",title:"大分飛桃園",detail:"IT751；航班時間以訂票紀錄為準。",place:"airport",tag:"航班"}
  ]}
};

const OPTIONS = {
  A:{name:"城市、科學與海景",blurb:"博多文化與美食，加上讓孩子活動的大濠公園和科學館。",tags:["市區代表景點","室內外都有","極味屋午餐"],highlight:"Day 3：櫛田神社 → 極味屋 → 午睡 → 大濠公園／科學館。Day 4：福岡塔、百道海濱。",warning:"雨天可略過大濠公園，直接到六本松科學館。",days:{
    3:{title:"福岡整日｜城市、科學與海景",subtitle:"博多舊街區與極味屋，午後去大濠公園和科學館。",events:[
      {time:"09:00–10:20",title:"櫛田神社、川端通",detail:"看山笠與博多老街，散步一小段即可。",place:"kushida",tag:"博多文化"},
      {time:"10:40–12:30",title:"極味屋地下街店午餐",detail:"博多車站地下街 C20；11:00 開門，不接受預約，預留候位。熱石遠離孩子。",place:"kiwamiya",tag:"指定美食"},
      {time:"13:00–15:00",title:"回飯店午睡",detail:"同一間飯店連住，孩子與大人一起休息。",place:"hakata",tag:"午睡時段"},
      {time:"15:20–16:00",title:"大濠公園",detail:"晴天看湖、讓孩子活動；下雨直接去科學館。",place:"ohori"},
      {time:"16:10–17:10",title:"福岡市科學館",detail:"六本松的親子區或互動展示，依孩子興趣停留。",place:"science",tag:"親子體驗"},
      {time:"17:30",title:"晚餐與休息",detail:"六本松周邊選烏龍麵或定食。",place:"science"}
    ]},
    4:{title:"福岡塔・返回別府",subtitle:"上午看城市與海景，午餐後開車讓孩子睡。",events:[
      {time:"09:30–10:45",title:"福岡塔、百道海濱",detail:"看展望與海景；2 月海風冷，海邊短暫停留。",place:"tower",tag:"城市地標"},
      {time:"11:00–11:45",title:"提早午餐",detail:"選停車方便的餐廳，避開日本假日的排隊。",place:"tower"},
      {time:"12:15–15:30",title:"開回別府・車上午睡",detail:"車程含休息站抓約 3 小時；遇假日車流再加緩衝。",place:"beppu",tag:"午睡時段"},
      {time:"15:30–18:00",title:"別府入住與晚餐",detail:"有精神再去海地獄一處；不足時間直接回飯店。",place:"beppu",tag:"別府第 2 晚"}
    ]}
  }},
  B:{name:"海之中道水族館",blurb:"把上午完整留給海洋生物，極味屋改成福岡晚餐。",tags:["水族館半日","極味屋晚餐","移動較多"],highlight:"Day 3：海之中道水族館 → 車上午睡 → 極味屋晚餐。Day 4：櫛田神社、川端通。",warning:"2027 年 2 月海豚與海獅秀因整修暫停；若主要期待表演，優先選 A 或 C。",days:{
    3:{title:"福岡整日｜海之中道水族館",subtitle:"上午留給水族館，午餐後回程午睡，傍晚吃極味屋。",events:[
      {time:"09:00–10:00",title:"前往海之中道",detail:"由福岡飯店出發；實際車程依當日導航。",place:"marine"},
      {time:"10:00–12:15",title:"海之中道水族館",detail:"看九州海洋生物。2027 年 2 月海豚、海獅秀暫停。",place:"marine",tag:"主景點"},
      {time:"12:15–15:30",title:"午餐、回程車上午睡",detail:"園區附近午餐，之後開回博多飯店休息。",place:"hakata",tag:"午睡時段"},
      {time:"16:30–18:30",title:"極味屋地下街店晚餐",detail:"不接受預約；提前候位，熱石遠離孩子。",place:"kiwamiya",tag:"指定美食"}
    ]},
    4:{title:"博多舊街區・返回別府",subtitle:"補上博多文化，午餐後開車回別府。",events:[
      {time:"09:30–10:45",title:"櫛田神社、川端通",detail:"看山笠與老街，避免安排過長步行。",place:"kushida",tag:"博多文化"},
      {time:"11:00–11:45",title:"提早午餐",detail:"博多附近簡單吃，避免假日排隊。",place:"hakata"},
      {time:"12:15–15:30",title:"開回別府・車上午睡",detail:"用長車程接孩子午睡，路況另留緩衝。",place:"beppu",tag:"午睡時段"},
      {time:"15:30–18:00",title:"別府入住與晚餐",detail:"休息優先；海地獄只在有餘裕時前往。",place:"beppu",tag:"別府第 2 晚"}
    ]}
  }},
  C:{name:"角色館與博多運河城",blurb:"孩子若喜歡麵包超人，下午玩室內館，傍晚看運河城噴水。",tags:["雨天可玩","極味屋午餐","需看孩子興趣"],highlight:"Day 3：博多舊街區 → 極味屋 → 午睡 → 兒童館／運河城。Day 4：大濠公園。",warning:"麵包超人兒童博物館館內不能推嬰兒車；若孩子對角色沒興趣，選 A 更合適。",days:{
    3:{title:"福岡整日｜角色館與運河城",subtitle:"上午博多文化與極味屋，午後玩室內館、看噴水。",events:[
      {time:"09:00–10:20",title:"櫛田神社、川端通",detail:"看山笠與商店街，慢慢走一段。",place:"kushida",tag:"博多文化"},
      {time:"10:40–12:30",title:"極味屋地下街店午餐",detail:"C20 號候位；不接受預約。",place:"kiwamiya",tag:"指定美食"},
      {time:"13:00–14:45",title:"回飯店午睡",detail:"出門前看孩子精神，保留完整休息。",place:"hakata",tag:"午睡時段"},
      {time:"15:00–17:00",title:"麵包超人兒童博物館",detail:"館內不能推嬰兒車；營業到 17:00。",place:"anpanman",tag:"親子體驗"},
      {time:"17:15–18:00",title:"博多運河城噴水與晚餐",detail:"噴水依當日場次；也可直接在附近用餐。",place:"canal"}
    ]},
    4:{title:"大濠公園・返回別府",subtitle:"湖畔短暫活動後，午餐與回程。",events:[
      {time:"09:30–10:45",title:"大濠公園",detail:"湖邊散步；天氣差改室內休息。",place:"ohori"},
      {time:"11:00–11:45",title:"提早午餐",detail:"選停車方便的餐廳。",place:"ohori"},
      {time:"12:15–15:30",title:"開回別府・車上午睡",detail:"把長車程放在孩子午睡時段。",place:"beppu",tag:"午睡時段"},
      {time:"15:30–18:00",title:"別府入住與晚餐",detail:"休息優先；海地獄只在有餘裕時前往。",place:"beppu",tag:"別府第 2 晚"}
    ]}
  }}
};

const DAY_LABELS = ["總覽","Day 1","Day 2","Day 3","Day 4","Day 5"];
const OVERVIEW = [
  {date:"02 / 20",title:"抵達大分・別府",desc:"IT750 抵達，取車與飯店入住。"},
  {date:"02 / 21",title:"九州自然動物園 → 福岡",desc:"上午動物園，午餐後開車午睡。"},
  {date:"02 / 22",title:"福岡市區完整一天",desc:"A／B／C 三套方案，極味屋排午餐或晚餐。"},
  {date:"02 / 23",title:"福岡 → 別府",desc:"上午依方案走景點，午後回別府。"},
  {date:"02 / 24",title:"別府 → 大分機場",desc:"提早午餐、還車、IT751 返台。"}
];

let activeDay = 0;
let activeOption = "A";
let activePlace = null;
let map = null;
let markers = [];
let routeLine = null;

const $ = (id) => document.getElementById(id);
const placeURL = (id) => {
  const p = PLACES[id];
  return `https://www.google.com/maps/dir/?api=1&destination=${p.lat}%2C${p.lng}`;
};
const getDay = (day) => day===3 || day===4
  ? {...OPTIONS[activeOption].days[day],date:`02 / ${day===3?"22 · 週一":"23 · 週二／日本假日"}`,insight:OPTIONS[activeOption].warning}
  : fixed[day];

function uniquePlaces(events){
  return [...new Set(events.map(event=>event.place).filter(Boolean))];
}
function currentPlaces(){
  if(activeDay===0) return ["airport","beppu","safari","hakata","beppu","airport"];
  return uniquePlaces(getDay(activeDay).events);
}
function renderTabs(){
  $("dayTabs").innerHTML = DAY_LABELS.map((label,day)=>`<button type="button" class="day-tab" role="tab" aria-selected="${day===activeDay}" data-day="${day}">${label}<small>${day===0?"5 DAYS":day===1?"02 / 20":day===2?"02 / 21":day===3?"02 / 22":day===4?"02 / 23":"02 / 24"}</small></button>`).join("");
  $("dayTabs").querySelectorAll("button").forEach(button=>button.addEventListener("click",()=>setDay(Number(button.dataset.day))));
}
function renderOptionSwitch(){
  $("optionSwitch").innerHTML=Object.keys(OPTIONS).map(code=>`<button type="button" aria-pressed="${code===activeOption}" data-option="${code}">方案 ${code}</button>`).join("");
  $("optionSwitch").querySelectorAll("button").forEach(button=>button.addEventListener("click",()=>setOption(button.dataset.option)));
}
function renderChoices(){
  $("choiceCards").innerHTML=Object.entries(OPTIONS).map(([code,option])=>`
    <article class="choice-card ${code===activeOption?"is-selected":""}" data-card="${code}">
      <div class="choice-banner ${code.toLowerCase()}"><span class="choice-code">OPTION ${code}</span></div>
      <div class="choice-body"><h3>${option.name}</h3><p>${option.blurb}</p>
        <div class="choice-tags">${option.tags.map(tag=>`<span>${tag}</span>`).join("")}</div>
        <div class="choice-highlight">${option.highlight}</div>
        <button type="button" class="choice-button" data-select="${code}" aria-pressed="${code===activeOption}">${code===activeOption?"目前選擇 · 查看總覽":"選這套 · 查看總覽"}</button>
      </div>
    </article>`).join("");
  $("choiceCards").querySelectorAll("[data-select]").forEach(button=>button.addEventListener("click",()=>{
    setOption(button.dataset.select);
    setDay(0);
    $("itinerary").scrollIntoView({behavior:"smooth"});
  }));
}
function renderTimeline(){
  if(activeDay===0){
    $("dayKicker").textContent="THE FIVE DAY STORY";
    $("dayTitle").textContent="五天四夜總覽";
    $("daySubtitle").textContent="大分機場進出，別府 1 晚、福岡 2 晚、別府 1 晚。";
    $("dayNumber").textContent="05";
    $("optionInline").hidden=true;
    $("timeline").innerHTML=OVERVIEW.map((item,index)=>`<button type="button" class="overview-day" data-overview-day="${index+1}"><span class="overview-date">${item.date}</span><span><strong>${item.title}</strong><small>${item.desc}</small></span><span class="arrow" aria-hidden="true">↗</span></button>`).join("");
    $("timeline").querySelectorAll("[data-overview-day]").forEach(button=>button.addEventListener("click",()=>setDay(Number(button.dataset.overviewDay))));
    $("insightCard").innerHTML="<strong>這趟行程怎麼選</strong><p>Day 2 的九州自然動物園是唯一必去；福岡 A、B、C 方案切換後，Day 3、Day 4 會一起更新。</p>";
    return;
  }
  const data=getDay(activeDay);
  $("dayKicker").textContent=`DAY ${String(activeDay).padStart(2,"0")} · ${data.date}`;
  $("dayTitle").textContent=data.title;
  $("daySubtitle").textContent=data.subtitle;
  $("dayNumber").textContent=String(activeDay).padStart(2,"0");
  $("optionInline").hidden=!(activeDay===3||activeDay===4);
  $("timeline").innerHTML=data.events.map((event,index)=>`
    <article class="timeline-event" id="event-${index}" data-event-place="${event.place||""}">
      <span class="event-time">${event.time}</span>
      <div class="event-content"><div class="event-top"><h4>${event.title}</h4>${event.tag?`<span class="event-tag ${event.must?"highlight":""}">${event.tag}</span>`:""}</div>
        <p>${event.detail}</p>${event.place?`<div class="event-actions"><button type="button" data-focus="${event.place}">地圖定位</button><span>·</span><a href="${placeURL(event.place)}" target="_blank" rel="noopener">開啟導航 ↗</a></div>`:""}
      </div>
    </article>`).join("");
  $("timeline").querySelectorAll("[data-focus]").forEach(button=>button.addEventListener("click",()=>focusPlace(button.dataset.focus)));
  $("insightCard").innerHTML=`<strong>當日提醒</strong><p>${data.insight}</p>`;
}
function renderMapStops(places){
  const ids=[...new Set(places)];
  $("mapStops").innerHTML=ids.map((id,index)=>`<button type="button" class="stop-chip ${id===activePlace?"is-active":""}" data-stop="${id}">${String(index+1).padStart(2,"0")} ${PLACES[id].name}</button>`).join("");
  $("mapStops").querySelectorAll("[data-stop]").forEach(button=>button.addEventListener("click",()=>focusPlace(button.dataset.stop)));
}
function pinIcon(number,must,active){
  return L.divIcon({className:"",html:`<div class="map-pin ${must?"must":""} ${active?"active":""}">${number}</div>`,iconSize:[34,34],iconAnchor:[17,17]});
}
function initMap(){
  if(!window.L){$("mapFallback").hidden=false;return;}
  map=L.map("map",{zoomControl:false,scrollWheelZoom:false}).setView([33.49,131.02],9);
  L.control.zoom({position:"bottomright"}).addTo(map);
  let tileErrors=0;
  const tiles=L.tileLayer("https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png",{
    maxZoom:18,
    attribution:'<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank" rel="noopener">地理院タイル</a>',
    errorTileUrl:"data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
  });
  tiles.on("tileerror",()=>{
    tileErrors++;
    if(tileErrors>=2){
      map.removeLayer(tiles);
      $("mapFallback").hidden=false;
    }
  }).addTo(map);
  renderMap();
  setTimeout(()=>map.invalidateSize(),250);
}
function renderMap(){
  const places=currentPlaces();
  $("mapTitle").textContent=activeDay===0?"九州旅程地圖":`Day ${activeDay} · ${activeDay===3||activeDay===4?`方案 ${activeOption} · `:""}停留點`;
  renderMapStops(places);
  if(!map)return;
  markers.forEach(({marker})=>map.removeLayer(marker));markers=[];
  if(routeLine){map.removeLayer(routeLine);routeLine=null;}
  const unique=[...new Set(places)];
  unique.forEach((id,index)=>{
    const p=PLACES[id];
    const marker=L.marker([p.lat,p.lng],{icon:pinIcon(index+1,id==="safari",id===activePlace)}).addTo(map);
    marker.bindPopup(`<div class="popup-title">${p.name}</div><div class="popup-sub">${p.area}<br>標記為行程停留點</div><a class="popup-link" href="${placeURL(id)}" target="_blank" rel="noopener">開啟道路導航 ↗</a>`);
    marker.on("click",()=>highlightPlace(id,false));
    markers.push({id,index,marker});
  });
  if(places.length>1){
    routeLine=L.polyline(places.map(id=>[PLACES[id].lat,PLACES[id].lng]),{color:"#ba7856",weight:3,opacity:.82,dashArray:"7 8"}).addTo(map);
  }
  fitCurrent();
}
function fitCurrent(){
  if(!map)return;
  const pts=currentPlaces().map(id=>[PLACES[id].lat,PLACES[id].lng]);
  if(pts.length===1)map.setView(pts[0],12);
  else map.fitBounds(L.latLngBounds(pts),{padding:[45,45],maxZoom:12,animate:true});
}
function highlightPlace(id,scroll){
  activePlace=id;
  markers.forEach(({id:place,index,marker})=>marker.setIcon(pinIcon(index+1,place==="safari",place===id)));
  renderMapStops(currentPlaces());
  $("timeline").querySelectorAll(".timeline-event").forEach(card=>card.classList.toggle("is-active",card.dataset.eventPlace===id));
  if(scroll){const card=$("timeline").querySelector(`[data-event-place="${id}"]`);if(card)card.scrollIntoView({behavior:"smooth",block:"center"});}
}
function focusPlace(id){
  highlightPlace(id,true);
  const found=markers.find(entry=>entry.id===id);
  if(map&&found){map.flyTo(found.marker.getLatLng(),Math.max(map.getZoom(),12),{duration:.5});found.marker.openPopup();}
}
function setDay(day){
  activeDay=day;activePlace=null;
  renderTabs();renderOptionSwitch();renderTimeline();renderMap();
}
function setOption(code){
  if(!OPTIONS[code])return;
  activeOption=code;activePlace=null;
  renderOptionSwitch();renderChoices();renderTimeline();renderMap();
}

$("mapReset").addEventListener("click",fitCurrent);
renderChoices();
setDay(0);
initMap();
