/* Interactive itinerary based on the original Kumamoto–Beppu PDF. Dashed lines show stop order, not roads. */
const PLACES = {
  airport:{name:"阿蘇熊本機場",lat:32.8372,lng:130.8553,area:"熊本機場",query:"阿蘇熊本機場"},
  kumamoto:{name:"熊本市區",lat:32.8034,lng:130.7100,area:"住宿區域示意",query:"熊本市中央區"},
  kusasenri:{name:"阿蘇草千里",lat:32.8818,lng:131.0538,area:"阿蘇山周邊",query:"草千里ヶ浜"},
  aso:{name:"阿蘇午餐區域",lat:32.9373,lng:131.0801,area:"阿蘇市區示意",query:"阿蘇市 餐廳"},
  yufuin:{name:"由布院・金鱗湖",lat:33.2667,lng:131.3690,area:"由布院湖畔",query:"金鱗湖"},
  beppu:{name:"別府市區",lat:33.2796,lng:131.5002,area:"住宿區域示意",query:"別府駅"},
  safari:{name:"九州自然動物園",lat:33.3549,lng:131.4112,area:"African Safari",query:"九州自然動物公園 アフリカンサファリ"},
  seaside:{name:"別府海濱公園（餅ヶ浜）",lat:33.2938,lng:131.5041,area:"別府市區",query:"餅ヶ浜海浜公園"},
  takegawara:{name:"竹瓦溫泉",lat:33.2779,lng:131.5070,area:"別府市區",query:"竹瓦温泉"},
  umi:{name:"海地獄",lat:33.3134,lng:131.4712,area:"別府地獄",query:"海地獄"},
  kannawa:{name:"鐵輪溫泉區",lat:33.3150,lng:131.4740,area:"蒸食午餐區域",query:"鉄輪温泉 地獄蒸し"},
  castle:{name:"熊本城・城彩苑",lat:32.8058,lng:130.7060,area:"熊本城",query:"熊本城 桜の馬場 城彩苑"},
  shopping:{name:"上通・下通",lat:32.8028,lng:130.7096,area:"熊本市中心",query:"熊本 下通商店街"}
};

const DAYS = {
  1:{title:"熊本・抵達日",subtitle:"18:15 落地後，只把取車、入住和簡單晚餐完成。",insight:"晚間取車時間偏緊。訂車前確認最晚交車、延誤後保留車輛及營業所接駁；若無法取車，當晚先進市區，隔天再取。",events:[
    {time:"15:00–18:15",title:"台中飛往熊本",detail:"兩地時間均採當地時間；18:15 抵達熊本。",place:"airport",tag:"航班"},
    {time:"18:30–19:15",title:"入境與領行李",detail:"此段為估算；實際等候可能變動。",place:"airport"},
    {time:"19:15–19:50",title:"取車、安裝兒童座椅",detail:"確認兒童座椅、ETC、導航語言與租車店關門時間。",place:"airport",tag:"優先確認"},
    {time:"約 20:00",title:"開往熊本市區",detail:"車程抓約 40 分鐘，隨取車與路況順延。",place:"kumamoto"},
    {time:"約 20:45",title:"飯店入住",detail:"選停車方便、可加嬰兒床並接受晚間入住的飯店。",place:"kumamoto",tag:"熊本第 1 晚"},
    {time:"約 21:00",title:"簡單晚餐與休息",detail:"先備輕食，或找飯店附近仍營業的餐廳。",place:"kumamoto"}
  ]},
  2:{title:"熊本 → 阿蘇 → 由布院 → 別府",subtitle:"上午草千里伸展，阿蘇早午餐後開往由布院，車上接午睡。",insight:"這天是長途移動日。若車程延誤，先縮短金鱗湖與湯之坪街道停留，保留用餐與午睡。",events:[
    {time:"08:30",title:"熊本退房出發",detail:"往阿蘇山方向；出門前查看當日道路與天候。",place:"kumamoto"},
    {time:"10:00–10:40",title:"草千里散步",detail:"以平坦路段伸展，停留約 40 分鐘。",place:"kusasenri",tag:"伸展"},
    {time:"11:15–12:15",title:"阿蘇午餐",detail:"提早用餐，讓孩子在下一段車程午睡。",place:"aso"},
    {time:"12:30–14:30",title:"前往由布院・車上午睡",detail:"車程約 2 小時；以當天導航、休息與孩子狀況調整。",place:"yufuin",tag:"午睡"},
    {time:"14:30–15:30",title:"金鱗湖與湯之坪街道",detail:"走一段湖畔，買些小點心；延誤時可縮短。",place:"yufuin"},
    {time:"15:30–16:30",title:"前往別府、入住",detail:"約 16:15 抵達別府，16:30 入住。",place:"beppu",tag:"別府第 1 晚"},
    {time:"17:30–19:00",title:"晚餐與大浴場",detail:"可選別府冷麵、豐後牛或唐揚；依孩子體力泡湯。",place:"beppu"}
  ]},
  3:{title:"九州自然動物園",subtitle:"上午看動物，午後回別府休息，再安排一段海濱散步。",insight:"叢林巴士與入園時間要以出發日期的園區公告為準；租車自駕前確認業者條款。",events:[
    {time:"07:50",title:"別府出發",detail:"前往動物園，預留山區路況與停車時間。",place:"beppu"},
    {time:"08:50–09:15",title:"抵達、購票與入園",detail:"原稿查核為 08:50 受理、09:15 開園；行前重查當季時間。",place:"safari",tag:"必去",must:true},
    {time:"09:15–11:30",title:"動物區與互動區",detail:"自駕或叢林巴士，再逛ふれあいゾーン。",place:"safari",tag:"必去",must:true},
    {time:"11:45",title:"園內午餐",detail:"離園前處理孩子補水、尿布與上廁所。",place:"safari"},
    {time:"12:30–13:45",title:"返別府、車上午睡",detail:"回到飯店休息，不急著加排景點。",place:"beppu",tag:"午睡"},
    {time:"15:30",title:"海濱公園與竹瓦周邊",detail:"看孩子精神，選一段輕鬆散步即可。",place:"seaside"},
    {time:"17:30",title:"晚餐、早點休息",detail:"選別府市區近飯店的餐廳。",place:"takegawara",tag:"別府第 2 晚"}
  ]},
  4:{title:"別府 → 阿蘇 → 熊本",subtitle:"上午海地獄、鐵輪蒸食，午餐後長車程接午睡。",insight:"別府回熊本是另一個長途日。若時間落後，海地獄縮短或跳過；草千里只作短暫伸展。",events:[
    {time:"09:00–10:30",title:"別府海地獄",detail:"參觀約 1.5 小時；營業與停車資訊出發前再查。",place:"umi",tag:"可縮短"},
    {time:"10:45–11:45",title:"鐵輪蒸食午餐",detail:"在溫泉區提早吃午餐。",place:"kannawa"},
    {time:"12:00–14:45",title:"返熊本、車上午睡",detail:"途中讓孩子睡約 2 小時，以當天路況調整。",place:"kusasenri",tag:"午睡"},
    {time:"14:45–15:15",title:"草千里伸展",detail:"下車活動約 30 分鐘。",place:"kusasenri"},
    {time:"15:15–16:30",title:"前往熊本、入住",detail:"回熊本市區，先停車與整理行李。",place:"kumamoto",tag:"熊本第 2 晚"},
    {time:"17:30–19:30",title:"熊本晚餐與休息",detail:"下通周邊可找辛子蓮根、馬肉或居酒屋；之後回飯店。",place:"shopping"}
  ]},
  5:{title:"熊本城・街區美食・返程",subtitle:"上午賞城，午後購物；15:15 準時往機場。",insight:"熊本城園區有坡道與台階，可備揹帶。12:45 若要回房午睡，先確認能否延遲退房。",events:[
    {time:"09:30–11:30",title:"熊本城與城彩苑",detail:"天守閣、櫻之馬場城彩苑，約 2 小時。",place:"castle"},
    {time:"11:45",title:"城彩苑午餐",detail:"就近吃午餐，留意排隊時間。",place:"castle"},
    {time:"12:45",title:"孩子午睡時間",detail:"可延退回房，或在車上午睡並照看孩子。",place:"kumamoto",tag:"午睡"},
    {time:"13:30–15:00",title:"上通、下通小吃與伴手禮",detail:"逛街區時留意移動與取車時間。",place:"shopping"},
    {time:"15:15–16:15",title:"前往機場、加油還車",detail:"15:15 準時出發，預計 16:15 還車。",place:"airport",tag:"返程緩衝"},
    {time:"17:00",title:"機場報到",detail:"整理託運行李與孩子用品。",place:"airport"},
    {time:"19:15–20:45",title:"飛返台灣",detail:"原稿航班時間；實際以訂票紀錄為準。",place:"airport",tag:"航班"}
  ]}
};

const OVERVIEW = [
  {title:"抵達熊本",desc:"18:15 落地，晚間取車、入住。"},
  {title:"阿蘇・由布院・別府",desc:"草千里伸展，午睡車程後散步金鱗湖。"},
  {title:"九州自然動物園",desc:"上午動物園，午後回別府休息。"},
  {title:"別府返回熊本",desc:"海地獄、蒸食與阿蘇短停留。"},
  {title:"熊本城與返程",desc:"賞城、街區小吃，預留還車報到。"}
];

let activeDay=0;
let activePlace=null;
let map=null;
let markers=[];
let routeLine=null;
const $=id=>document.getElementById(id);
const uniquePlaces=events=>[...new Set(events.map(event=>event.place).filter(Boolean))];
const currentPlaces=()=>activeDay===0
  ? ["airport","kumamoto","kusasenri","aso","yufuin","beppu","safari","beppu","umi","kannawa","kusasenri","kumamoto","castle","airport"]
  : uniquePlaces(DAYS[activeDay].events);
const placeURL=id=>`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(PLACES[id].query)}`;

function renderTabs(){
  $("dayTabs").innerHTML=["總覽","Day 1","Day 2","Day 3","Day 4","Day 5"].map((label,day)=>`<button type="button" class="day-tab" role="tab" aria-selected="${day===activeDay}" data-day="${day}">${label}<small>${day===0?"5 DAYS":day===1?"抵達":day===2?"阿蘇・由布院":day===3?"動物園":day===4?"回熊本":"返程"}</small></button>`).join("");
  $("dayTabs").querySelectorAll("[data-day]").forEach(button=>button.addEventListener("click",()=>setDay(Number(button.dataset.day))));
}
function renderTimeline(){
  if(activeDay===0){
    $("dayKicker").textContent="THE FIVE DAY STORY";
    $("dayTitle").textContent="五天四夜總覽";
    $("daySubtitle").textContent="熊本 1 晚 → 別府 2 晚 → 熊本 1 晚。";
    $("dayNumber").textContent="05";
    $("timeline").innerHTML=OVERVIEW.map((item,index)=>`<button type="button" class="overview-day" data-overview-day="${index+1}"><span class="overview-date">DAY ${index+1}</span><span><strong>${item.title}</strong><small>${item.desc}</small></span><span class="arrow" aria-hidden="true">↗</span></button>`).join("");
    $("timeline").querySelectorAll("[data-overview-day]").forEach(button=>button.addEventListener("click",()=>setDay(Number(button.dataset.overviewDay))));
    $("insightCard").innerHTML="<strong>這趟行程的節奏</strong><p>Day 2 與 Day 4 是長途日；Day 3 以九州自然動物園為主。晚間抵達的 Day 1 先確認租車交車時間。</p>";
    return;
  }
  const data=DAYS[activeDay];
  $("dayKicker").textContent=`DAY ${String(activeDay).padStart(2,"0")}`;
  $("dayTitle").textContent=data.title;
  $("daySubtitle").textContent=data.subtitle;
  $("dayNumber").textContent=String(activeDay).padStart(2,"0");
  $("timeline").innerHTML=data.events.map((event,index)=>`<article class="timeline-event" id="event-${index}" data-event-place="${event.place||""}"><span class="event-time">${event.time}</span><div class="event-content"><div class="event-top"><h4>${event.title}</h4>${event.tag?`<span class="event-tag ${event.must?"highlight":""}">${event.tag}</span>`:""}</div><p>${event.detail}</p>${event.place?`<div class="event-actions"><button type="button" data-focus="${event.place}">地圖定位</button><span>·</span><a href="${placeURL(event.place)}" target="_blank" rel="noopener">開啟導航 ↗</a></div>`:""}</div></article>`).join("");
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
  map=L.map("map",{zoomControl:false,scrollWheelZoom:false}).setView([33.1,131.1],9);
  L.control.zoom({position:"bottomright"}).addTo(map);
  let tileErrors=0;
  const tiles=L.tileLayer("https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png",{
    maxZoom:18,
    attribution:'<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank" rel="noopener">地理院タイル</a>',
    errorTileUrl:"data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
  });
  tiles.on("tileerror",()=>{tileErrors++;if(tileErrors>=2){map.removeLayer(tiles);$("mapFallback").hidden=false;}}).addTo(map);
  renderMap();
  setTimeout(()=>map.invalidateSize(),250);
}
function renderMap(){
  const places=currentPlaces();
  $("mapTitle").textContent=activeDay===0?"九州旅程地圖":`Day ${activeDay} · 停留點`;
  renderMapStops(places);
  if(!map)return;
  markers.forEach(({marker})=>map.removeLayer(marker));markers=[];
  if(routeLine){map.removeLayer(routeLine);routeLine=null;}
  const unique=[...new Set(places)];
  unique.forEach((id,index)=>{
    const p=PLACES[id];
    const marker=L.marker([p.lat,p.lng],{icon:pinIcon(index+1,id==="safari",id===activePlace)}).addTo(map);
    marker.bindPopup(`<div class="popup-title">${p.name}</div><div class="popup-sub">${p.area}<br>部分市區標記為停留區域示意</div><a class="popup-link" href="${placeURL(id)}" target="_blank" rel="noopener">開啟道路導航 ↗</a>`);
    marker.on("click",()=>highlightPlace(id,false));
    markers.push({id,index,marker});
  });
  if(places.length>1) routeLine=L.polyline(places.map(id=>[PLACES[id].lat,PLACES[id].lng]),{color:"#ba7856",weight:3,opacity:.82,dashArray:"7 8"}).addTo(map);
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
  renderTabs();renderTimeline();renderMap();
}

$("mapReset").addEventListener("click",fitCurrent);
setDay(0);
initMap();
