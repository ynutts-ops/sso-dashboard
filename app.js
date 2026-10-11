'use strict';
const I18N={
 th:{title:'ผลการนับคะแนนเลือกตั้งคณะกรรมการประกันสังคม (อย่างไม่เป็นทางการ)',subtitle:'การเลือกตั้งคณะกรรมการประกันสังคม 2569 · ผลการนับคะแนนอย่างไม่เป็นทางการ',asof:'ข้อมูล ณ',
  f_side:'ฝ่าย',f_region:'ภาค',f_prov:'จังหวัด (พิมพ์ค้นหา)',f_dist:'อำเภอ/เขต (พิมพ์ค้นหา)',f_snap:'เวลาข้อมูล',reset:'ล้างตัวกรอง',all:'ทั้งหมด',
  c_cand:'คะแนนผู้สมัคร (20 อันดับแรก)',c_trend:'แนวโน้มการนับคะแนน',c_prov:'เปรียบเทียบรายจังหวัด',c_region:'ผู้มาใช้สิทธิรายภาค',
  m_turnout:'ร้อยละมาใช้สิทธิ',m_progress:'ความคืบหน้าการนับ',m_voters:'ผู้มาใช้สิทธิ',m_votes:'คะแนนผู้สมัคร (ตามตัวกรอง)',
  t_cand:'ผู้สมัคร',t_prov:'จังหวัด',t_dist:'อำเภอ/เขต',t_st:'หน่วยเลือกตั้ง',csv:'ดาวน์โหลด CSV',
  k_reg:'ผู้มีสิทธิเลือกตั้ง',k_vot:'ผู้มาใช้สิทธิ',k_to:'ร้อยละมาใช้สิทธิ',k_bal:'บัตรที่นับแล้ว',k_prog:'ความคืบหน้าการนับ',k_st:'หน่วยที่รายงานผล',
  vs:'จากรอบก่อน',E:'ฝ่ายนายจ้าง',I:'ฝ่ายผู้ประกันตน',ballots:'บัตรที่นับแล้ว',voters:'ผู้มาใช้สิทธิ',votes:'คะแนน',
  h_no:'หมายเลข',h_side:'ฝ่าย',h_name:'ชื่อ-สกุล',h_org:'สถานประกอบการ',h_votes:'คะแนน',h_share:'สัดส่วน',h_rank:'อันดับ',h_delta:'Δ รอบก่อน',h_prov:'จังหวัด',h_region:'ภาค',h_reg:'ผู้มีสิทธิ',h_vot:'มาใช้สิทธิ',h_to:'% มาใช้สิทธิ',h_bal:'นับแล้ว',h_prog:'% นับแล้ว',h_st:'หน่วยรายงาน',h_lead_i:'นำ ฝ่ายผู้ประกันตน',h_lead_e:'นำ ฝ่ายนายจ้าง',h_dist:'อำเภอ/เขต',h_branch:'สปส. สาขา',h_list:'รายการ',h_station:'หน่วยเลือกตั้ง',
  rows:'แถว',f_team:'ทีม',c_map:'แผนที่รายจังหวัด',mm_team:'ทีมที่นำ',mm_turnout:'ร้อยละมาใช้สิทธิ',c_team:'สัดส่วนคะแนนรายทีม',t_team:'ทีม',h_team:'ทีม',h_cands:'ผู้สมัคร',h_led:'จังหวัดที่นำ',h_lt_i:'ทีมนำ ฝ่ายผู้ประกันตน',h_lt_e:'ทีมนำ ฝ่ายนายจ้าง',lead:'ทีมที่นำ',teamvotes:'คะแนนรายทีม',sideshare:'สัดส่วนในฝ่าย',distnote:'ข้อมูลระดับอำเภอ ณ ',top7:'7 อันดับแรก',foot:'ข้อมูลอย่างไม่เป็นทางการจากสำนักงานประกันสังคม (SBE0304) · ใช้เพื่อการวิเคราะห์เท่านั้น ผลอย่างเป็นทางการให้ยึดตามประกาศของสำนักงานประกันสังคม',gen:'สร้างเมื่อ'},
 en:{title:'Social Security Board Election 2026 — Unofficial Count',subtitle:'Thai Social Security Office (SSO) · SBE0304 unofficial vote-count results',asof:'Data as of',
  f_side:'Side',f_region:'Region',f_prov:'Province (type to search)',f_dist:'District (type to search)',f_snap:'Snapshot',reset:'Reset filters',all:'All',
  c_cand:'Candidate votes (top 20)',c_trend:'Counting trend',c_prov:'Province comparison',c_region:'Voters turned out by region',
  m_turnout:'Turnout %',m_progress:'Count progress %',m_voters:'Voters turned out',m_votes:'Candidate votes (filtered)',
  t_cand:'Candidates',t_prov:'Provinces',t_dist:'Districts',t_st:'Polling stations',csv:'Download CSV',
  k_reg:'Registered voters',k_vot:'Voters turned out',k_to:'Turnout',k_bal:'Ballots counted',k_prog:'Count progress',k_st:'Stations reported',
  vs:'vs previous',E:'Employer side',I:'Insured-person side',ballots:'Ballots counted',voters:'Voters turned out',votes:'Votes',
  h_no:'No.',h_side:'Side',h_name:'Name',h_org:'Organization',h_votes:'Votes',h_share:'Share',h_rank:'Rank',h_delta:'Δ prev',h_prov:'Province',h_region:'Region',h_reg:'Registered',h_vot:'Turned out',h_to:'Turnout %',h_bal:'Counted',h_prog:'Counted %',h_st:'Stations',h_lead_i:'Leader (insured)',h_lead_e:'Leader (employer)',h_dist:'District',h_branch:'SSO branch',h_list:'List',h_station:'Polling station',
  rows:'rows',f_team:'Team',c_map:'Province map',mm_team:'Leading team',mm_turnout:'Turnout %',c_team:'Team vote share',t_team:'Teams',h_team:'Team',h_cands:'Candidates',h_led:'Provinces led',h_lt_i:'Leading team (insured)',h_lt_e:'Leading team (employer)',lead:'Leading team',teamvotes:'Team vote totals',sideshare:'Share of side',distnote:'District-level data as of ',top7:'Top 7',foot:'Unofficial results published by the Social Security Office (SBE0304). For analysis only; official results are those announced by the SSO.',gen:'Built'}};
let L='th',DATA,GEO,S={side:'',team:'',mapMode:'team',mapSide:'I',region:'',prov:'',dist:'',snap:null,tab:'cand',q:'',sort:null,page:0};
const $=id=>document.getElementById(id), fmt=n=>n==null||isNaN(n)?'–':Math.round(n).toLocaleString('en-US'),
 pct=(n,d=2)=>n==null||!isFinite(n)?'–':(n*100).toFixed(d)+'%', t=k=>I18N[L][k]||k, PAGE=50;
const F={}; let charts={};
Promise.all([fetch('data.json').then(r=>r.json()),fetch('thailand-provinces.geojson').then(r=>r.json())]).then(([d,g])=>{DATA=d;GEO=g;echarts.registerMap('TH',g);init();});
function init(){
  DATA.meta.tf.forEach((f,i)=>F[f]=i);
  DATA.P={};DATA.provinces.forEach(p=>DATA.P[p.c]=p);
  DATA.T={};DATA.teams.forEach(x=>DATA.T[x.k]=x);
  DATA.D={};(DATA.districts||[]).forEach(x=>DATA.D[x.c]=x);
  S.snap=DATA.snapshots[DATA.snapshots.length-1].k;
  ['cand','trend','prov','region','map','team'].forEach(k=>{charts[k]=echarts.init($('ch-'+k));});
  window.addEventListener('resize',()=>Object.values(charts).forEach(c=>c.resize()));
  charts.prov.on('click',e=>{const p=DATA.provinces.find(p=>label(p)===e.name);if(p){S.prov=p.c;$('f-prov').value=label(p);onProv();}});
  charts.map.on('click',e=>{const p=DATA.P[e.name];if(p){S.prov=S.prov===p.c?'':p.c;$('f-prov').value=S.prov?label(p):'';onProv();}});
  $('f-team').onchange=e=>{S.team=e.target.value;S.page=0;render();};
  document.querySelectorAll('[data-map]').forEach(b=>b.onclick=()=>{S.mapMode=b.dataset.map;document.querySelectorAll('[data-map]').forEach(x=>x.classList.toggle('active',x===b));renderMap();});
  document.querySelectorAll('[data-mside]').forEach(b=>b.onclick=()=>{S.mapSide=b.dataset.mside;document.querySelectorAll('[data-mside]').forEach(x=>x.classList.toggle('active',x===b));renderMap();});
  $('f-side').onchange=e=>{S.side=e.target.value;if(S.side){S.mapSide=S.side;document.querySelectorAll('[data-mside]').forEach(x=>x.classList.toggle('active',x.dataset.mside===S.side));}render();};
  $('f-region').onchange=e=>{S.region=e.target.value;render();};
  $('f-prov').onchange=e=>{const p=DATA.provinces.find(p=>label(p)===e.target.value||p.th===e.target.value||p.en.toLowerCase()===e.target.value.toLowerCase());S.prov=p?p.c:'';if(!p)e.target.value='';onProv();};
  $('f-dist').onchange=e=>{const x=(DATA.districts||[]).find(x=>x.p===S.prov&&x.th===e.target.value);S.dist=x?x.c:'';if(!x)e.target.value='';render();};
  $('f-snap').onchange=e=>{S.snap=+e.target.value;render();};
  $('prov-metric').onchange=render;
  $('reset').onclick=()=>{S={...S,side:'',team:'',region:'',prov:'',dist:'',q:'',page:0,snap:DATA.snapshots[DATA.snapshots.length-1].k};['f-prov','f-dist','q'].forEach(i=>$(i).value='');$('f-dist').disabled=true;fillFilters();render();};
  document.querySelectorAll('.tab').forEach(b=>b.onclick=()=>{document.querySelectorAll('.tab').forEach(x=>x.classList.toggle('active',x===b));S.tab=b.dataset.tab;S.sort=null;S.page=0;renderTable();});
  $('q').oninput=e=>{S.q=e.target.value.trim().toLowerCase();S.page=0;renderTable();};
  $('prev').onclick=()=>{if(S.page>0){S.page--;renderTable();}};$('next').onclick=()=>{S.page++;renderTable();};
  $('csv').onclick=exportCSV;
  $('lang').onclick=()=>{L=L==='th'?'en':'th';$('lang').textContent=L==='th'?'EN':'ไทย';document.documentElement.lang=L;applyI18n();fillFilters();render();};
  $('gen').textContent=t('gen')+' '+DATA.meta.generatedAt;
  applyI18n();fillFilters();render();
}
const tname=k=>{const x=DATA.T[k];return L==='th'?x.th:x.en;},tcol=k=>DATA.T[k]?DATA.T[k].c:'#9AA3AF',dot=k=>`<span class="dot" style="background:${tcol(k)}"></span>`;
function teamTotals(arr,side){const m={};DATA.candidates.forEach((c,i)=>{if(c.t===side)m[c.tm]=(m[c.tm]||0)+(arr?arr[i]:0);});return Object.entries(m).map(([k,v])=>({k,v})).sort((a,b)=>b.v-a.v);}
const leadTeam=(arr,side)=>{const x=teamTotals(arr,side).filter(r=>r.k!=='IND'&&r.v>0)[0];return x||null;};
const label=p=>L==='th'?`${p.th} | ${p.en}`:`${p.en} | ${p.th}`;
function applyI18n(){document.querySelectorAll('[data-i18n]').forEach(e=>e.textContent=t(e.dataset.i18n));$('gen').textContent=t('gen')+' '+DATA.meta.generatedAt;}
function fillFilters(){
  $('f-side').innerHTML=`<option value="">${t('all')}</option><option value="I">${t('I')}</option><option value="E">${t('E')}</option>`;$('f-side').value=S.side;
  const tms=DATA.teams.filter(x=>!S.side||(S.side==='I'?x.ni:x.ne));
  $('f-team').innerHTML=`<option value="">${t('all')}</option>`+tms.map(x=>`<option value="${x.k}">${tname(x.k)}</option>`).join('');if(!tms.find(x=>x.k===S.team))S.team='';$('f-team').value=S.team;
  const regs=[...new Map(DATA.provinces.map(p=>[p.ren,p.rth])).entries()].sort();
  $('f-region').innerHTML=`<option value="">${t('all')}</option>`+regs.map(([en,th])=>`<option value="${en}">${L==='th'?th+' · '+en:en+' · '+th}</option>`).join('');$('f-region').value=S.region;
  fillProvList();
  $('f-snap').innerHTML=DATA.snapshots.slice().reverse().map(s=>`<option value="${s.k}">${s.t.slice(0,16)}</option>`).join('');$('f-snap').value=S.snap;
  if(S.prov)$('f-prov').value=label(DATA.P[S.prov]);
}
function fillProvList(){$('dl-prov').innerHTML=DATA.provinces.filter(p=>!S.region||p.ren===S.region).sort((a,b)=>label(a).localeCompare(label(b),L)).map(p=>`<option value="${label(p)}">`).join('');}
function onProv(){S.dist='';$('f-dist').value='';const ds=(DATA.districts||[]).filter(x=>x.p===S.prov);$('f-dist').disabled=!ds.length;
  $('dl-dist').innerHTML=ds.sort((a,b)=>a.th.localeCompare(b.th,'th')).map(x=>`<option value="${x.th}">`).join('');render();}
const geoProvs=()=>DATA.provinces.filter(p=>(!S.region||p.ren===S.region)&&(!S.prov||p.c===S.prov)).map(p=>p.c);
const prevKey=k=>{const i=DATA.snapshots.findIndex(s=>s.k===k);return i>0?DATA.snapshots[i-1].k:null;};
function turnout(k,provs=geoProvs()){
  if(S.dist&&DATA.dt&&k===S.snap)return DATA.dt[S.dist]||null;
  const m=DATA.pt[k];if(!m)return null;const a=new Array(DATA.meta.tf.length).fill(0);provs.forEach(c=>m[c]&&m[c].forEach((v,i)=>a[i]+=v));return a;}
function votes(k,provs=geoProvs()){
  const n=DATA.candidates.length,a=new Array(n).fill(0);
  if(S.dist&&DATA.dv&&k===S.snap){const m=DATA.dv[S.dist]||{};for(const i in m)a[+i]=m[i];return a;}
  const m=DATA.pv[k];if(!m)return null;provs.forEach(c=>m[c]&&m[c].forEach((v,i)=>a[i]+=v));return a;}
function sideVals(a){if(!a)return null;const s=S.side;
  return{reg:s==='E'?a[F.RegisteredEmployer]:s==='I'?a[F.RegisteredInsured]:a[F.RegisteredTotal],
   vot:s==='E'?a[F.TurnoutEmployer]:s==='I'?a[F.TurnoutInsured]:a[F.TurnoutTotal],
   bal:s==='E'?a[F.BallotsCountedEmployer]:s==='I'?a[F.BallotsCountedInsured]:a[F.BallotsCountedEmployer]+a[F.BallotsCountedInsured],
   sr:a[F.StationsReported],st:a[F.StationsTotal]};}
function render(){fillFilters();renderKPIs();renderCharts();renderTable();
  const s=DATA.snapshots.find(s=>s.k===S.snap);$('asof').textContent=s?s.t.slice(0,16)+' (ICT)':'–';
  $('cand-hint').textContent=S.dist&&DATA.dtKey?t('distnote')+String(DATA.dtKey).replace(/(\d{4})(\d\d)(\d\d)(\d\d)(\d\d).*/,'$1-$2-$3 $4:$5'):'';}
function renderKPIs(){
  const c=sideVals(turnout(S.snap)),pk=prevKey(S.snap),p=S.dist?null:sideVals(pk&&turnout(pk));
  const dl=(a,b)=>b==null?'':(()=>{const d=a-b;return `<div class="d ${d>0?'up':d<0?'down':''}">${d>0?'▲ +':d<0?'▼ ':''}${fmt(d)} ${t('vs')}</div>`})();
  const K=[[t('k_reg'),fmt(c.reg),''],[t('k_vot'),fmt(c.vot),dl(c.vot,p&&p.vot)],[t('k_to'),pct(c.vot/c.reg),''],
   [t('k_bal'),fmt(c.bal),dl(c.bal,p&&p.bal)],[t('k_prog'),pct(c.bal/c.vot,1),`<div class="bar"><i style="width:${Math.min(100,c.bal/c.vot*100)}%"></i></div>`],
   [t('k_st'),`${fmt(c.sr)}<small style="font-size:14px;color:#5B6475"> / ${fmt(c.st)}</small>`,`<div class="bar"><i style="width:${c.sr/c.st*100}%"></i></div>`]];
  $('kpis').innerHTML=K.map(k=>`<div class="kpi"><div class="l">${k[0]}</div><div class="v">${k[1]}</div>${k[2]}</div>`).join('');}
function candRows(){
  const v=votes(S.snap),pk=prevKey(S.snap),pv=S.dist?null:(pk&&votes(pk));
  const tot={E:0,I:0};DATA.candidates.forEach((c,i)=>tot[c.t]+=v[i]);
  const rows=DATA.candidates.map((c,i)=>({i,...c,votes:v[i],share:tot[c.t]?v[i]/tot[c.t]:null,delta:pv?v[i]-pv[i]:null}));
  ['E','I'].forEach(s=>{rows.filter(r=>r.t===s).sort((a,b)=>b.votes-a.votes).forEach((r,j)=>r.rank=j+1);});
  return rows.filter(r=>(!S.side||r.t===S.side)&&(!S.team||r.tm===S.team));}
function renderCharts(){
  const base={textStyle:{fontFamily:'Sarabun, Segoe UI, sans-serif'},grid:{left:8,right:40,top:10,bottom:10,containLabel:true},tooltip:{trigger:'axis',axisPointer:{type:'shadow'}}};
  const top=candRows().sort((a,b)=>b.votes-a.votes).slice(0,20).reverse();
  charts.cand.setOption({...base,legend:{show:false},xAxis:{type:'value'},yAxis:{type:'category',data:top.map(r=>`${String(r.no).padStart(3,'0')} ${r.name}`),axisLabel:{fontSize:12}},
    series:[{type:'bar',data:top.map(r=>({value:r.votes,itemStyle:{color:tcol(r.tm),borderRadius:[0,4,4,0]}})),label:{show:true,position:'right',formatter:p=>fmt(p.value)}}],
    tooltip:{trigger:'item',formatter:p=>{const r=top[p.dataIndex];return `<b>${r.title} ${r.name}</b><br>${dot(r.tm)}${tname(r.tm)} · ${t(r.t)}${r.org?'<br>'+r.org:''}<br>${t('votes')}: <b>${fmt(r.votes)}</b> (${pct(r.share)})<br>${t('h_rank')}: ${r.rank}`;}}},true);
  const used=[...new Set(top.map(r=>r.tm))].sort((a,b)=>DATA.T[a].o-DATA.T[b].o);$('cand-legend').innerHTML=used.map(k=>`<span><i style="background:${tcol(k)}"></i>${tname(k)}</span>`).join('');
  renderMap();renderTeamChart();
  const ks=DATA.snapshots,tr=ks.map(s=>{const a=sideVals(turnout(s.k,geoProvs()));return a;});
  charts.trend.setOption({...base,tooltip:{trigger:'axis'},legend:{bottom:0},grid:{left:8,right:16,top:20,bottom:36,containLabel:true},xAxis:{type:'category',data:ks.map(s=>s.t.slice(11,16))},yAxis:{type:'value'},
    series:[{name:t('ballots'),type:'line',smooth:true,areaStyle:{opacity:.12},data:tr.map(a=>a&&a.bal),itemStyle:{color:'#0B3D91'}},{name:t('voters'),type:'line',smooth:true,data:tr.map(a=>a&&a.vot),itemStyle:{color:'#F2A900'}}]},true);
  const metric=$('prov-metric').value,m=DATA.pt[S.snap],vk=DATA.pv[S.snap];
  const sel=new Set(candRows().filter(r=>!S.q||(r.name+r.org+r.no).toLowerCase().includes(S.q)).map(r=>r.i));
  const pr=DATA.provinces.filter(p=>!S.region||p.ren===S.region).map(p=>{const a=sideVals(m[p.c]);let val;
    if(metric==='turnout')val=a.vot/a.reg;else if(metric==='progress')val=a.bal/a.vot;else if(metric==='voters')val=a.vot;else val=vk[p.c].reduce((s,v,i)=>s+(sel.has(i)?v:0),0);
    return{p,val};}).sort((a,b)=>a.val-b.val);
  const isPct=metric==='turnout'||metric==='progress';
  charts.prov.setOption({...base,xAxis:{type:'value',axisLabel:{formatter:v=>isPct?(v*100).toFixed(0)+'%':v.toLocaleString()}},yAxis:{type:'category',data:pr.map(r=>label(r.p)),axisLabel:{fontSize:10}},
    dataZoom:[{type:'inside',yAxisIndex:0,start:pr.length>30?60:0,end:100},{type:'slider',yAxisIndex:0,right:0,width:14,start:pr.length>30?60:0,end:100}],grid:{left:8,right:30,top:10,bottom:10,containLabel:true},
    series:[{type:'bar',data:pr.map(r=>({value:r.val,itemStyle:{color:r.p.c===S.prov?'#D7263D':'#5B8DEF',borderRadius:[0,3,3,0]}})),label:{show:true,position:'right',fontSize:10,formatter:p=>isPct?pct(p.value,1):fmt(p.value)}}],
    tooltip:{trigger:'item',formatter:p=>`${p.name}<br><b>${isPct?pct(p.value):fmt(p.value)}</b>`}},true);
  const rg={};DATA.provinces.forEach(p=>{const a=sideVals(m[p.c]);const k=L==='th'?p.rth:p.ren;rg[k]=(rg[k]||0)+a.vot;});
  charts.region.setOption({textStyle:base.textStyle,tooltip:{trigger:'item',formatter:p=>`${p.name}<br>${fmt(p.value)} (${p.percent}%)`},legend:{bottom:0,type:'scroll'},
    color:['#3B4A66','#5F7091','#8695B3','#AEB9CF','#CBD3E1','#E2E7EF'],series:[{type:'pie',radius:['45%','72%'],center:['50%','45%'],itemStyle:{borderColor:'#fff',borderWidth:2},label:{formatter:'{d}%'},data:Object.entries(rg).map(([name,value])=>({name,value}))}]},true);
}
function renderMap(){
  const m=DATA.pt[S.snap],vk=DATA.pv[S.snap],side=S.mapSide,inReg=p=>!S.region||p.ren===S.region;
  const data=DATA.provinces.map(p=>{const a=sideVals(m[p.c]),to=a.vot/a.reg;const lt=leadTeam(vk[p.c],side);
    let color='#E3E8EF';if(S.mapMode==='team'){if(S.team)color=(lt&&lt.k===S.team)?tcol(S.team):'#EEF1F6';else color=lt?tcol(lt.k):'#E3E8EF';}
    const it={name:p.c,value:S.mapMode==='turnout'?to:(lt?lt.v:0),p,lt,to};
    if(S.mapMode==='team')it.itemStyle={areaColor:inReg(p)?color:'#F4F6FB'};
    if(p.c===S.prov)it.itemStyle={...(it.itemStyle||{}),borderColor:'#D7263D',borderWidth:2.5};
    return it;});
  const tos=data.map(d=>d.to);
  const opt={textStyle:{fontFamily:'Sarabun, Segoe UI, sans-serif'},
   tooltip:{trigger:'item',confine:true,formatter:e=>{const d=e.data;if(!d)return '';const v=vk[d.p.c];
     const blk=sd=>{const tt=teamTotals(v,sd),tot=tt.reduce((s,r)=>s+r.v,0);return `<div style="margin-top:4px"><b>${t(sd)}</b></div>`+tt.filter(r=>r.v>0).slice(0,5).map(r=>`${dot(r.k)}${tname(r.k)}: <b>${fmt(r.v)}</b> (${pct(r.v/tot,1)})`).join('<br>');};
     return `<b>${label(d.p)}</b><br>${t('k_to')}: <b>${pct(d.to)}</b> · ${t('k_vot')}: ${fmt(sideVals(m[d.p.c]).vot)}<br>${t('lead')} (${t(side)}): ${d.lt?dot(d.lt.k)+tname(d.lt.k):'–'}`+blk('I')+blk('E');}},
   series:[{type:'map',map:'TH',nameProperty:'code',roam:true,scaleLimit:{min:1,max:8},selectedMode:false,aspectScale:0.95,top:10,bottom:10,
     itemStyle:{borderColor:'#fff',borderWidth:0.6},emphasis:{label:{show:false},itemStyle:{borderColor:'#1F2A44',borderWidth:1.5}},data}]};
  if(S.mapMode==='turnout')opt.visualMap={type:'continuous',min:Math.min(...tos),max:Math.max(...tos),calculable:true,left:10,bottom:10,itemHeight:120,
     inRange:{color:['#DCE6F8','#6F95DF','#0B3D91']},formatter:v=>(v*100).toFixed(1)+'%',textStyle:{fontSize:11}};
  charts.map.setOption(opt,true);
  if(S.mapMode==='team'){const led={};data.forEach(d=>{if(d.lt&&inReg(d.p))led[d.lt.k]=(led[d.lt.k]||0)+1;});
    $('map-legend').innerHTML=`<b>${t('lead')} · ${t(side)}:</b>`+Object.entries(led).sort((a,b)=>b[1]-a[1]).map(([k,n])=>`<span><i style="background:${tcol(k)}"></i>${tname(k)} · ${n} ${L==='th'?'จังหวัด':'prov.'}</span>`).join('');}
  else $('map-legend').innerHTML='';
}
function renderTeamChart(){
  const v=votes(S.snap),sides=S.side?[S.side]:['I','E'];
  const grids=[],xs=[],ys=[],ser=[],titles=[];const h=100/sides.length;
  sides.forEach((sd,i)=>{const tt=teamTotals(v,sd),tot=tt.reduce((s,r)=>s+r.v,0);const rows=tt.slice().reverse();
    titles.push({text:t(sd),top:(i*h)+'%',left:4,textStyle:{fontSize:13,fontWeight:'bold',color:'#1F2A44'}});
    grids.push({left:8,right:52,top:(i*h+5)+'%',height:(h-10)+'%',containLabel:true});
    xs.push({gridIndex:i,type:'value',max:1,axisLabel:{formatter:x=>(x*100).toFixed(0)+'%',fontSize:10}});
    ys.push({gridIndex:i,type:'category',data:rows.map(r=>tname(r.k)),axisLabel:{fontSize:11}});
    ser.push({type:'bar',xAxisIndex:i,yAxisIndex:i,data:rows.map(r=>({value:tot?r.v/tot:0,votes:r.v,k:r.k,itemStyle:{color:tcol(r.k),opacity:!S.team||S.team===r.k?1:.35,borderRadius:[0,3,3,0]}})),
      label:{show:true,position:'right',fontSize:10,formatter:p=>pct(p.value,1)}});});
  charts.team.setOption({textStyle:{fontFamily:'Sarabun, Segoe UI, sans-serif'},title:titles,grid:grids,xAxis:xs,yAxis:ys,series:ser,
    tooltip:{trigger:'item',formatter:p=>`${dot(p.data.k)}<b>${tname(p.data.k)}</b><br>${t('votes')}: ${fmt(p.data.votes)}<br>${t('sideshare')}: ${pct(p.value)}`}},true);
}

function leaders(vArr,side){let b=-1,bi=-1;DATA.candidates.forEach((c,i)=>{if(c.t===side&&vArr[i]>b){b=vArr[i];bi=i;}});const c=DATA.candidates[bi];return b>0?`${String(c.no).padStart(3,'0')} ${c.name} (${fmt(b)})`:'–';}
function tableModel(){
  const N='num';
  if(S.tab==='cand'){const rows=candRows();return{cols:[['no',t('h_no'),N],['side',t('h_side')],['team',t('h_team')],['name',t('h_name')],['org',t('h_org')],['votes',t('h_votes'),N],['share',t('h_share'),N],['rank',t('h_rank'),N],['delta',t('h_delta'),N]],
    rows:rows.map(r=>({no:String(r.no).padStart(3,'0'),side:t(r.t),team:tname(r.tm),_tm:r.tm,name:`${r.title} ${r.name}`,org:r.org,votes:r.votes,share:r.share,rank:r.rank,delta:r.delta,_t:r.t})),def:['votes',-1],
    fmt:{votes:fmt,share:v=>pct(v),delta:v=>v==null?'–':(v>0?'+':'')+fmt(v),rank:(v,r)=>v<=DATA.meta.seats?`${v} <span class="badge b-top">${t('top7')}</span>`:v,side:(v,r)=>`<span class="badge b-${r._t}">${v}</span>`,team:(v,r)=>dot(r._tm)+v}};}
  if(S.tab==='team'){const v=votes(S.snap),vk=DATA.pv[S.snap],rows=[];['I','E'].filter(sd=>!S.side||sd===S.side).forEach(sd=>{const tt=teamTotals(v,sd),tot=tt.reduce((s,r)=>s+r.v,0);
     const led={};geoProvs().forEach(c=>{const l=leadTeam(vk[c],sd);if(l)led[l.k]=(led[l.k]||0)+1;});
     tt.forEach(r=>{if(S.team&&r.k!==S.team)return;rows.push({team:tname(r.k),_tm:r.k,side:t(sd),_t:sd,n:DATA.candidates.filter(c=>c.t===sd&&c.tm===r.k).length,votes:r.v,share:tot?r.v/tot:null,led:led[r.k]||0});});});
    return{cols:[['team',t('h_team')],['side',t('h_side')],['n',t('h_cands'),N],['votes',t('h_votes'),N],['share',t('sideshare'),N],['led',t('h_led'),N]],rows,def:['votes',-1],
     fmt:{team:(v,r)=>dot(r._tm)+v,side:(v,r)=>`<span class="badge b-${r._t}">${v}</span>`,votes:fmt,share:v=>pct(v,1)}};}

  if(S.tab==='prov'){const m=DATA.pt[S.snap],vk=DATA.pv[S.snap];return{cols:[['prov',t('h_prov')],['region',t('h_region')],['reg',t('h_reg'),N],['vot',t('h_vot'),N],['to',t('h_to'),N],['bal',t('h_bal'),N],['prog',t('h_prog'),N],['st',t('h_st'),N],['lti',t('h_lt_i')],['li',t('h_lead_i')],['lte',t('h_lt_e')],['le',t('h_lead_e')]],
    rows:DATA.provinces.filter(p=>(!S.region||p.ren===S.region)&&(!S.prov||p.c===S.prov)).map(p=>{const a=sideVals(m[p.c]);return{prov:label(p),region:L==='th'?p.rth:p.ren,reg:a.reg,vot:a.vot,to:a.vot/a.reg,bal:a.bal,prog:a.bal/a.vot,st:`${a.sr}/${a.st}`,li:leaders(vk[p.c],'I'),le:leaders(vk[p.c],'E'),...(()=>{const a=leadTeam(vk[p.c],'I'),b=leadTeam(vk[p.c],'E');return{lti:a?tname(a.k):'–',_lti:a&&a.k,lte:b?tname(b.k):'–',_lte:b&&b.k};})()};}),def:['to',-1],
    fmt:{lti:(v,r)=>r._lti?dot(r._lti)+v:v,lte:(v,r)=>r._lte?dot(r._lte)+v:v,reg:fmt,vot:fmt,bal:fmt,to:v=>pct(v),prog:v=>pct(v,1)}};}
  if(S.tab==='dist'){const dsel=(DATA.districts||[]).filter(x=>(!S.prov||x.p===S.prov)&&(!S.region||DATA.P[x.p].ren===S.region)&&(!S.dist||x.c===S.dist));
    return{cols:[['prov',t('h_prov')],['dist',t('h_dist')],['branch',t('h_branch')],['reg',t('h_reg'),N],['vot',t('h_vot'),N],['to',t('h_to'),N],['bal',t('h_bal'),N],['prog',t('h_prog'),N],['st',t('h_st'),N]],
    rows:dsel.map(x=>{const a=sideVals(DATA.dt[x.c]||new Array(11).fill(0));const p=DATA.P[x.p];return{prov:L==='th'?p.th:p.en,dist:x.th,branch:x.bth,reg:a.reg,vot:a.vot,to:a.reg?a.vot/a.reg:null,bal:a.bal,prog:a.vot?a.bal/a.vot:null,st:`${a.sr}/${a.st}`};}),def:['to',-1],
    fmt:{reg:fmt,vot:fmt,bal:fmt,to:v=>pct(v),prog:v=>pct(v,1)}};}
  return{cols:[['l',t('h_list')],['r','#',N],['prov',t('h_prov')],['d',t('h_dist')],['s',t('h_station')],['pct',t('h_to'),N]],
    rows:DATA.stations.filter(x=>(!S.prov||x.p===S.prov)&&(!S.region||(x.p&&DATA.P[x.p].ren===S.region))).map(x=>({l:x.l,r:x.r,prov:x.p?(L==='th'?DATA.P[x.p].th:DATA.P[x.p].en):'',d:x.d,s:x.s,pct:x.pct})),def:null,fmt:{pct:v=>pct(v,1)}};}
let lastModel=null;
function renderTable(){
  const M=tableModel();let rows=M.rows;
  if(S.q)rows=rows.filter(r=>M.cols.some(([k])=>String(r[k]??'').toLowerCase().includes(S.q)));
  const so=S.sort||M.def;if(so){const[k,d]=so;rows=rows.slice().sort((a,b)=>{const x=a[k],y=b[k];return(typeof x==='number'&&typeof y==='number'?x-y:String(x??'').localeCompare(String(y??''),'th'))*d;});}
  lastModel={M,rows};
  const pages=Math.max(1,Math.ceil(rows.length/PAGE));S.page=Math.min(S.page,pages-1);
  $('tbl').querySelector('thead').innerHTML='<tr>'+M.cols.map(([k,h,c])=>`<th class="${c||''}" data-k="${k}">${h}${so&&so[0]===k?(so[1]>0?' ▲':' ▼'):''}</th>`).join('')+'</tr>';
  $('tbl').querySelector('tbody').innerHTML=rows.slice(S.page*PAGE,(S.page+1)*PAGE).map(r=>'<tr>'+M.cols.map(([k,,c])=>`<td class="${c||''}">${M.fmt[k]?M.fmt[k](r[k],r):(r[k]??'')}</td>`).join('')+'</tr>').join('');
  $('tbl').querySelectorAll('th').forEach(th=>th.onclick=()=>{const k=th.dataset.k;const cur=S.sort||M.def;S.sort=[k,cur&&cur[0]===k?-cur[1]:-1];renderTable();});
  $('tbl-info').textContent=`${rows.length.toLocaleString()} ${t('rows')} · ${S.page+1}/${pages}`;}
function exportCSV(){
  const{M,rows}=lastModel;const esc=v=>{v=v==null?'':String(v);return /[",\n]/.test(v)?'"'+v.replace(/"/g,'""')+'"':v;};
  const csv='\ufeff'+[M.cols.map(c=>esc(c[1])).join(',')].concat(rows.map(r=>M.cols.map(([k])=>esc(r[k])).join(','))).join('\n');
  const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8'}));a.download=`sso-election-${S.tab}-${S.snap}.csv`;a.click();}
