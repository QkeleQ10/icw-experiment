import{_ as w,a as g,b as v,c as j,d as h}from"./FixationSlide-DnvoT61I.js";import{_ as z,u as y}from"./_plugin-vue_export-helper-BeMDoTGv.js";import{j as k,c as s,k as x,d as n,h as u,l as p,a as d,b as T,w as V,r as D,o}from"./index-6YcfsZaH.js";const N={id:"practise-view"},P={key:0},C={key:3},I={key:4},L={__name:"PractiseView",setup(O){const i=y(),e=k("brief"),r=k(i.practiseObservations[0]);function l(){return new Promise(t=>{window.addEventListener("mousedown",t,{once:!0}),window.addEventListener("touchstart",t,{once:!0}),window.addEventListener("keydown",t,{once:!0})})}async function c(t){r.value=i.practiseObservations[t],e.value="fixation",await l(),e.value="stimuli";const a=new Date;await l(),e.value="blank";const b=new Date-a;i.practiseObservations[t].responseTime=b,i.practiseObservations[t+1]?setTimeout(()=>{c(t+1)},1e3):e.value="debrief"}async function _(){e.value="blank",setTimeout(()=>{c(0)},1e3)}return(t,a)=>{const m=w,b=g,f=D("RouterLink");return o(),s("main",N,[e.value==="brief"?(o(),s("div",P,[a[0]||(a[0]=x('<p data-v-6bb9758d> De proef bestaat uit 20 zoekplaten.<br data-v-6bb9758d><br data-v-6bb9758d> Wanneer je met een zoekplaat kunt beginnen, verschijnt er een dia met het symbool <img src="'+v+'" data-v-6bb9758d>.<br data-v-6bb9758d> Klik pas door wanneer je er klaar voor bent. Zodra je doorklikt, komt de zoekplaat in beeld en gaat de tijd in.<br data-v-6bb9758d><br data-v-6bb9758d> In elke zoekplaat moet je het figuur <img src="'+j+'" alt="5" data-v-6bb9758d> zo snel mogelijk proberen te herkennen tussen de vele <img src="'+h+'" alt="2" data-v-6bb9758d>&#39;en.<br data-v-6bb9758d> Herken je het figuur? Klik dan <u data-v-6bb9758d>meteen</u> door. De tijd wordt automatisch bijgehouden.<br data-v-6bb9758d> Probeer niet door te klikken tot je <u data-v-6bb9758d>zeker weet</u> dat je het <u data-v-6bb9758d>juiste</u> figuur hebt gezien.<br data-v-6bb9758d><br data-v-6bb9758d> Na het doorklikken verdwijnt de zoekplaat.<br data-v-6bb9758d> Iets later verschijnt het symbool <img src="'+v+'" data-v-6bb9758d> weer en kun je beginnen met de volgende zoekplaat. Klik door wanneer je wilt.<br data-v-6bb9758d><br data-v-6bb9758d> In dit experiment kun je doorklikken met een toets op het toetsenbord, met een muisknop of met het touchscreen.<br data-v-6bb9758d><br data-v-6bb9758d> Je krijgt eerst 5 oefeningen. Je kunt met de eerste oefening beginnen met onderstaande knop.<br data-v-6bb9758d><br data-v-6bb9758d></p>',1)),n("a",{onClick:_},"Oefening starten")])):u("",!0),e.value==="fixation"?(o(),p(m,{key:1,size:r.value.size},null,8,["size"])):e.value==="stimuli"?(o(),p(b,{key:2,seed:r.value.seed,distance:r.value.distance,size:r.value.size},null,8,["seed","distance","size"])):u("",!0),e.value==="blank"?(o(),s("div",C)):e.value==="debrief"?(o(),s("div",I,[a[2]||(a[2]=n("p",null,[d(" Dat was de laatste oefening. Je bent nu klaar voor de echte proef."),n("br"),d(" Wederom, neem je tijd en vergeet niet af en toe een adempauze te nemen."),n("br"),n("br"),d(" Je kunt beginnen met onderstaande knop."),n("br"),n("br")],-1)),T(f,{to:"/experiment"},{default:V(()=>a[1]||(a[1]=[d("Proef starten")])),_:1})])):u("",!0)])}}},J=z(L,[["__scopeId","data-v-6bb9758d"]]);export{J as default};
