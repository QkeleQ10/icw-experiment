import{e as b,c as a,d as t,a as r,t as o,u as l,f as u,v as s,g as k,h as g,i as v,b as f,w,r as x,o as d}from"./index-6YcfsZaH.js";import{_ as V,u as z}from"./_plugin-vue_export-helper-BeMDoTGv.js";const U={key:0},C={for:"consent-box",class:"green"},N={__name:"ConsentView",setup(j){const e=z(),p=b(()=>e.participant.consented&&e.participant.firstname&&e.participant.lastname);return(y,n)=>{const m=x("RouterLink");return d(),a("main",null,[t("p",null,[r(o(l(e).research.author),1),n[3]||(n[3]=t("br",null,null,-1)),n[4]||(n[4]=t("br",null,null,-1)),n[5]||(n[5]=r(" Universiteit Utrecht")),n[6]||(n[6]=t("br",null,null,-1)),n[7]||(n[7]=r(" Opleiding Kunstmatige Intelligentie")),n[8]||(n[8]=t("br",null,null,-1)),r(" E-mail: "+o(l(e).research.mail),1),n[9]||(n[9]=t("br",null,null,-1)),n[10]||(n[10]=t("br",null,null,-1)),n[11]||(n[11]=t("br",null,null,-1)),r(" Onderzoek: "+o(l(e).research.title),1),n[12]||(n[12]=t("br",null,null,-1)),n[13]||(n[13]=t("br",null,null,-1)),n[14]||(n[14]=r(" Ondergetekende, ")),u(t("input",{"onUpdate:modelValue":n[0]||(n[0]=i=>l(e).participant.firstname=i),placeholder:"voornaam",autofocus:"true"},null,512),[[s,l(e).participant.firstname]]),n[15]||(n[15]=r()),u(t("input",{"onUpdate:modelValue":n[1]||(n[1]=i=>l(e).participant.lastname=i),placeholder:"achternaam"},null,512),[[s,l(e).participant.lastname]]),r(", verklaart uit vrije wil deel te nemen aan het onderzoek “"+o(l(e).research.title)+"”, Uitgaande van het vak “Inleiding tot de Cognitiewetenschap” aan de Universiteit Utrecht.",1),n[16]||(n[16]=t("br",null,null,-1)),n[17]||(n[17]=t("br",null,null,-1)),n[18]||(n[18]=r(" “Ik ga ermee akkoord dat de resultaten van dit onderzoek gebruikt zullen worden voor wetenschappelijke doeleinden en mogen gepubliceerd worden. Mijn naam wordt daarbij niet gepubliceerd en de vertrouwelijkheid van de gegevens is in elk stadium van het onderzoek gewaarborgd. Ik behoud het recht om op elk moment mijn deelname aan het onderzoek stop te zetten.”")),n[19]||(n[19]=t("br",null,null,-1))]),l(e).participant.firstname&&l(e).participant.lastname?(d(),a("p",U,[n[21]||(n[21]=t("br",null,null,-1)),n[22]||(n[22]=t("b",null,"Datum:",-1)),r(" "+o(new Date().toLocaleDateString("nl-NL",{day:"2-digit",month:"2-digit",year:"numeric"})),1),n[23]||(n[23]=t("br",null,null,-1)),n[24]||(n[24]=t("br",null,null,-1)),n[25]||(n[25]=t("b",null,"Naam en handtekening van de proefpersoon:",-1)),n[26]||(n[26]=t("br",null,null,-1)),r(" "+o(l(e).participant.firstname)+" "+o(l(e).participant.lastname),1),n[27]||(n[27]=t("br",null,null,-1)),t("label",C,[u(t("input",{id:"consent-box",type:"checkbox","onUpdate:modelValue":n[2]||(n[2]=i=>l(e).participant.consented=i)},null,512),[[k,l(e).participant.consented]]),n[20]||(n[20]=r(" Ik ga akkoord"))]),n[28]||(n[28]=t("br",null,null,-1)),n[29]||(n[29]=t("br",null,null,-1)),n[30]||(n[30]=t("b",null,"Naam en handtekening van de onderzoeker:",-1)),n[31]||(n[31]=t("br",null,null,-1)),r(" "+o(l(e).research.author),1),n[32]||(n[32]=t("br",null,null,-1)),n[33]||(n[33]=t("label",{for:"consent-box"},[t("input",{id:"consent-box",type:"checkbox",checked:!0,disabled:""})],-1)),n[34]||(n[34]=t("br",null,null,-1))])):g("",!0),u(f(m,{to:"/practise"},{default:w(()=>n[35]||(n[35]=[r("Volgende")])),_:1},512),[[v,p.value]])])}}},L=V(N,[["__scopeId","data-v-608ed0e2"]]);export{L as default};