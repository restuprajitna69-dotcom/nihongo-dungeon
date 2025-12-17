// ===== Data & Banks =====
const USERS = [
  "Abdul","Anjas","Arya","Daiva","Darda","Desti","Faiz","Farhan",
  "Hilpan","Ira","Khoirul","Rainaldy","Rizky","Ansori","Haidar",
  "Noval","Nayif","Nelda","Putri","Rexsya","Reyhan","Mery","Yani"
];

const PASSWORD_MURID = "FUFUFAFAC1";
const PASSWORD_ADMIN = "FUFUFAFATORA";
const PASSWORD_TRIAL = "FUFUFAFAKELINCI";

function login(username, password) {
  username = username.trim(); // penting!
  password = password.trim();

  if (username === "TORA" && password === PASSWORD_ADMIN) {
    return { role: "admin", name: "TORA" };
  }

  if (username === "KELINCI PERCOBAAN" && password === PASSWORD_TRIAL) {
    return { role: "trial", name: username };
  }

  if (USERS.includes(username) && password === PASSWORD_MURID) {
    return { role: "student", name: username };
  }

  return null;
}
document.getElementById("loginBtn").addEventListener("click", () => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const result = login(username, password);

  if (!result) {
    alert("❌ Username atau password salah");
    return;
  }

  alert(`✅ Login berhasil sebagai ${result.role}: ${result.name}`);
});


function makeQ(id, tiles, answer, explanation='') { return {id, tiles, answer, explanation}; }

const EASY_BANK = [
  makeQ('E1',['ん','です','が','のど','いたい'], 'のどが いたいんです','～んです untuk menjelaskan'),
  makeQ('E2',['ある','です','が','ねつ','ん'], 'ねつが あるんです','Menggunakan ～んです'),
  makeQ('E3',['ない','ひと','で','に','あわ','ください'], 'ひとに あわないでください','Larangan: ～ないでください'),
  makeQ('E4',['で','うんてんし','ない','ください','を','くるま'], 'くるまを うんてんしないでください','Larangan + objek'),
  makeQ('E5',['せき','を','これは','です','おさえる','くすり'], 'これは せきを おさえるくすりです','Perkenalan obat'),
  makeQ('E6',['です','まもる','を','こちら','は','い','くすり'], 'こちらは いを まもるくすりです','(contoh jumbled)')
];

const NORMAL_BANK = [
  makeQ('N1',['ん','熱','です','が','ある'], '熱が あるんです','Penegasan'),
  makeQ('N2',['足','ん','です','が','ねんざ','した'], '足がねんざしたんです','Penjelasan kondisi'),
  makeQ('N3',['で','飲ま','ない','お酒','ください','を'], 'お酒を 飲まないでください','Larangan minum alkohol'),
  makeQ('N4',['車','で','を','運転し','ない','だ','飲ん','あと','ください'], '飲んだあと 車を 運転しないでください','Urutan: 飲んだあと'),
  makeQ('N5',['せき','薬','を','です','抑える','は','こちら'], 'こちらは せきを 抑える薬です','Perkenalan obat'),
  makeQ('N6',['薬','前','を','ください','飲ん','に','で','寝る'], '寝る前に 薬を 飲んでください','Before: 前に'),
  makeQ('N7',['眠く','薬','あと','を','なった','飲ん','だ'], '薬を 飲んだあと 眠くなった','Seq: 飲んだあと'),
  makeQ('N8',['とき','薬','を','痛い','飲ん','が','頭','ください','で'], '頭が 痛いとき 薬を 飲んでください','とき clause'),
  makeQ('N9',['がまん','とき','できない','何も','くれる？','しないで'], 'がまんできないとき 何もしないでくれる？','Permintaan'),
  makeQ('N10',['会わ','ない','で','ください','人','に'], '人に 会わないでください','Larangan bertemu'),
  makeQ('N11',['熱','を','下げる','薬','だ','これ','よ','は'], 'これは 熱を 下げる薬だよ','Casual'),
  makeQ('N12',['からだ','ね','守る','薬','は','これ','です','を'], 'これは からだを 守る薬ですね','Polite'),
  makeQ('N13',['食事','に','を','だ','飲ん','前','薬','の','ほうがいいです'], '食事の前に 薬を 飲んだほうがいいです','Recommendation'),
  makeQ('N14',['運転','ない','で','くれる','だ','あと','飲ん','薬','を','し'], '薬を 飲んだあと 運転しないでくれる','Request'),
  makeQ('N15',['熱','でしょうか','が','休んで','ある','もいい','とき'], '熱が あるとき 休んでもいいでしょうか','Ask permission')
];

const HARD_BANK = [
  makeQ('H1',['熱','よ','ある','ん','から','昨日','だ','が'], '昨日から 熱が あるんだよ','Combining から + ～んだよ'),
  makeQ('H2',['頭','が','事故','ん','で','先週','です','ぶつかった'], '先週 事故で頭が ぶつかったんです','Complex clause'),
  makeQ('H3',['車','を','運転し','ない','ね','ください','ビール','を','飲ん','あと','だ','で'], 'ビールを 飲んだあと 車を 運転しないでくださいね','Polite reminder'),
  makeQ('H4',['熱','何ん','抑える','薬','です','あれ','は','を'], 'あれは 熱を 抑える薬なんです','Natural Japanese correction'),
  makeQ('H5',['食事','の','水','に','前','を','飲ん','ね','ください','で'], '食事の前に 水を 飲んでくださいね','Polite'),
  makeQ('H6',['薬','だ','飲ん','あと','を','眠く','とき','なる','して','ください','注意'], '薬を 飲んだあと 眠くなるとき 注意してください','Caution'),
  makeQ('H7',['熱','人','ください','とき','ない','ます','が','に','会わ','休み','で','ある','ます'], '熱が あるとき 休みます、人に 会わないでください','Instruction'),
  makeQ('H8',['昨日','止まら','せき','飲ま','から','ん','なかったら','なきゃ','薬','を','が'], '昨日から せきが 止まらなかったら、薬を 飲まなきゃ','Conditional + must'),
  makeQ('H9',['頭','ます','眠くなる','だ','あと','を','飲み','が','飲ん','とき','薬','痛い','よ'], '頭が 痛いとき 薬を 飲みます、飲んだあと 眠くなるよ','Sequence + warning'),
  makeQ('H10',['熱','を','です','食事','下げる','これ','は','飲み','前','に','薬','の','ます'], 'これは 熱を 下げる薬です、食事の前に 飲みます','Explanation'),
  makeQ('H11',['今日','は','学校','に','行けない','ん','です','熱','が','ある','から'], '熱が あるから 今日 学校に 行けないんです','Because clause'),
  makeQ('H12',['薬','を','飲ん','あと','だ','車','運転','を','しない','で','ください'], '薬を 飲んだあと 車を 運転しないでください','Safety'),
  makeQ('H13',['胃','を','守る','薬','です','こちら','は','食事','に','前','の','飲む'], 'こちらは 胃を 守る薬です、食事の前に 飲む','Usage'),
  makeQ('H14',['から','が','痛い','も','休んで','いい','ん','です','昨日','頭','？'], '昨日から 頭が 痛いんです、休んでもいい？','Ask permission'),
  makeQ('H15',['ある','が','熱','薬','とき','ます','飲み','を','忘れ','ください','ないで','ね'], '熱が あるとき 薬を 飲みます、忘れないでくださいね','Reminder'),
  makeQ('H16',['鼻水','ください','抑える','です','薬','で','ない','飲ま','これは','を'], 'これは 鼻水を 抑える薬です、飲まないでください','Caution'),
  makeQ('H17',['10年前','ね','目','が','ん','痛い','です','車','運転','を','しない','で','から'], '10年前から 目が 痛いんです、車を 運転しないでね','Chronic condition'),
  makeQ('H18',['薬','する','飲む','前','食事','に','を','を','とき','してください','注意'], '薬を 飲む前に 食事をするとき 注意してください','Instruction'),
  makeQ('H19',['吐き気','する','が','会社','を','です','ます','休み','とき'], '吐き気がするとき、会社を休みます','Sickness leave'),
  makeQ('H20',['熱','とき','ある','が','行か','に','学校','ない','ください','で'], '熱が あるとき 学校に 行かないでください','Don't go to school')
];

const LEVELS = {
  easy:   {id:'easy',   label:'スライム洞窟', count:5,  timer:300, bank: EASY_BANK.slice(0,5)},
  normal: {id:'normal', label:'炎の迷宮',   count:10, timer:600, bank: NORMAL_BANK.slice(0,10)},
  hard:   {id:'hard',   label:'竜王の城',   count:15, timer:900, bank: HARD_BANK.slice(0,15)}
};

// ===== State =====
let state = {
  currentUser: null,
  currentLevel: null,
  qIndex:0,
  questions:[],
  startTime:null,
  timerInterval:null,
  remaining:0,
  answers:[],
  monsterHP:3,
  retries:0
};

// ===== Utils =====
const $ = s => document.querySelector(s);
const $all = s => Array.from(document.querySelectorAll(s));
function showScreen(id){
  ['screen-login','screen-lobby','screen-quiz','screen-result','screen-ranking','screen-admin'].forEach(x=>{
    const el = document.getElementById(x);
    if(!el) return;
    if(x === id) el.classList.remove('hidden'); else el.classList.add('hidden');
  });
}
function shuffleArray(a){ for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]] } return a }
function normalize(s){ return (s||'').replace(/\s+/g,'').replace(/　/g,'').trim(); }
function escapeHtml(s){ return (s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

// ===== Login =====
document.getElementById('btn-login').addEventListener('click', ()=>{ const u = document.getElementById('inp-user').value.trim(); const p = document.getElementById('inp-pass').value.trim(); login(u,p); });
document.getElementById('btn-logout').addEventListener('click', ()=>{ logout(); });

function login(u,p){
  if(!u||!p){ alert('Masukkan nama dan password'); return; }
  if(u === USERS.admin && p === USERS.adminPassword){ state.currentUser = {name:u,role:'admin'}; renderAdmin(); showScreen('screen-admin'); return; }
  if(u === USERS.demo.name && p === USERS.demo.pass){ state.currentUser = {name:u,role:'student'}; showLobby(); return; }
  if(USERS.students.includes(u) && p === USERS.studentPassword){ state.currentUser = {name:u,role:'student'}; showLobby(); return; }
  alert('Login gagal — cek username/password');
}

function logout(){ state.currentUser = null; showScreen('screen-login'); }

function showLobby(){ showScreen('screen-lobby'); document.getElementById('welcome').textContent = `Selamat datang, ${state.currentUser.name}!`; }

// dungeon clicks
document.querySelectorAll('.dungeon').forEach(el=>el.addEventListener('click', ()=>{ startDungeon(el.dataset.level); }));

// ===== Start dungeon =====
function startDungeon(levelKey){
  const lvl = LEVELS[levelKey];
  state.currentLevel = lvl;
  state.questions = lvl.bank.map(q=>({...q, tiles:shuffleArray([...q.tiles])}));
  state.qIndex = 0; state.answers = []; state.monsterHP = 3; state.retries = 0;
  state.remaining = lvl.timer; state.startTime = Date.now();
  document.getElementById('quest-title').textContent = `${lvl.label} — ${levelKey}`;
  document.getElementById('q-total').textContent = state.questions.length;
  renderQuestion();
  showScreen('screen-quiz');
  startTimer();
  updateMonster();
}

function renderQuestion(){
  const q = state.questions[state.qIndex];
  document.getElementById('q-index').textContent = state.qIndex + 1;
  const host = document.getElementById('tiles-host'); host.innerHTML = '';
  q.tiles.forEach((t,i)=>{ const b = document.createElement('div'); b.className='tile'; b.textContent = t; b.addEventListener('click', ()=> onTileClick(b,t)); host.appendChild(b); });
  document.getElementById('assembled-host').textContent = '';
}

function onTileClick(tileEl, text){
  const asm = document.getElementById('assembled-host');
  asm.textContent = asm.textContent ? asm.textContent + ' ' + text : text;
  tileEl.classList.add('selected');
}

document.getElementById('btn-clear').addEventListener('click', ()=>{ document.getElementById('assembled-host').textContent=''; document.querySelectorAll('.tile').forEach(t=>t.classList.remove('selected')); });
document.getElementById('btn-back').addEventListener('click', ()=>{ if(confirm('Keluar dari dungeon? Jawaban tidak akan tersimpan.')){ clearTimer(); showLobby(); } });

document.getElementById('btn-submit').addEventListener('click', ()=>{ submitAnswer(); });

function submitAnswer(){
  const q = state.questions[state.qIndex];
  const userAns = document.getElementById('assembled-host').textContent.trim();
  if(!userAns){ alert('Pilih kata untuk menyusun kalimat!'); return; }
  const payload = { user: state.currentUser.name, level: state.currentLevel.id, qid: q.id, answer: userAns, correct: q.answer, timeSpent: Math.floor((Date.now()-state.startTime)/1000) };
  fakeSaveResult(payload).then(ok => { finalizeAnswer(ok,payload); }).catch(err => { state.retries++; fakeSaveResult(payload).then(ok=>finalizeAnswer(ok,payload)).catch(err2=>{ localSavePartial(payload); finalizeAnswer(false,payload); }); });
}

function finalizeAnswer(saved, payload){
  const isCorrect = normalize(payload.answer) === normalize(payload.correct);
  const tiles = document.querySelectorAll('.tile');
  tiles.forEach(t=>{ if(t.textContent && payload.answer.includes(t.textContent)) t.classList.add(isCorrect? 'correct-animation':'wrong-animation'); });
  if(isCorrect){ state.monsterHP -= 1; updateMonster(); showTinyToast(['やった！Perfect!','すごい！Level UP!','正解！Senseiもびっくり！'][Math.floor(Math.random()*3)]); }
  else { showTinyToast(['ざんねん！Try again!','惜しい！もう一度！','間違えたけど、がんばろう！'][Math.floor(Math.random()*3)]); }
  state.answers.push({ qid: payload.qid, userAnswer: payload.answer, correctAnswer: payload.correct, correct:isCorrect, saved, time:payload.timeSpent });
  setTimeout(()=>{ state.qIndex++; if(state.qIndex >= state.questions.length || state.remaining<=0){ finishQuiz(); } else { renderQuestion(); } },700);
}

function updateMonster(){ document.getElementById('monster-hp-val').textContent = state.monsterHP; }

function finishQuiz(){ clearTimer(); const total = state.questions.length; const correctCount = state.answers.filter(a=>a.correct).length; const score = Math.round((correctCount/total)*100); const summary = { user: state.currentUser.name, level: state.currentLevel.id, total, correct: correctCount, score, timeTaken: Math.floor((Date.now()-state.startTime)/1000), details: state.answers }; saveSummary(summary); renderResult(summary); showScreen('screen-result'); }

function renderResult(summary){
  document.getElementById('result-summary').innerHTML = `<div class="small">Score: <strong>${summary.score}%</strong> — ${summary.correct}/${summary.total} benar • Waktu: ${summary.timeTaken}s</div>`;
  const comments = ["Jawabanmu bikin sensei pengen minum kopi dulu… ayo lebih teliti lagi ya!","Partikel で kamu nyasar ke hutan lain, coba ulangi dengan kompas grammar!","Bagus! Tapi jangan tidur di kelas ya 😆"];
  const comment = summary.score>80 ? "Mantap! Hero sejati!" : (summary.score>50 ? comments[2] : comments[Math.floor(Math.random()*2)]);
  document.getElementById('feedback-area').innerHTML = `<div class="spicy">${comment}</div>`;
  const container = document.getElementById('result-table'); container.innerHTML = '';
  const tbl = document.createElement('table'); tbl.innerHTML = `<thead><tr><th>ID</th><th>Jawaban Murid</th><th>Jawaban Benar</th><th>Result</th><th>Penjelasan</th></tr></thead>`;
  const body = document.createElement('tbody');
  summary.details.forEach(d=>{ const q = findQuestionGlobal(d.qid); const tr = document.createElement('tr'); tr.innerHTML = `<td>${d.qid}</td><td>${escapeHtml(d.userAnswer)}</td><td>${escapeHtml(d.correctAnswer)}</td><td>${d.correct? '✅':'❌'}</td><td class="muted">${escapeHtml(q? q.explanation : '')}</td>`; body.appendChild(tr); });
  tbl.appendChild(body); container.appendChild(tbl);
}

function findQuestionGlobal(qid){ return [...EASY_BANK,...NORMAL_BANK,...HARD_BANK].find(x=>x.id===qid); }

// Rankings (localStorage)
function saveSummary(summary){ const key = 'nd_results_v1'; const arr = JSON.parse(localStorage.getItem(key)||'[]'); arr.push(summary); localStorage.setItem(key, JSON.stringify(arr)); }
function getAllResults(){ return JSON.parse(localStorage.getItem('nd_results_v1')||'[]'); }

document.getElementById('btn-view-ranking').addEventListener('click', ()=>{ renderRanking(); showScreen('screen-ranking'); });
document.getElementById('btn-back-lobby').addEventListener('click', ()=>{ showLobby(); });
document.getElementById('btn-back-lobby2').addEventListener('click', ()=>{ showLobby(); });

function renderRanking(){
  const host = document.getElementById('ranking-host'); host.innerHTML = '';
  const results = getAllResults();
  const groups = { easy:[], normal:[], hard:[] };
  results.forEach(r=>groups[r.level].push(r));
  Object.keys(groups).forEach(level=>{ const h = document.createElement('div'); h.innerHTML = `<h3>${LEVELS[level].label} — (${level})</h3>`; const list = groups[level].sort((a,b)=> b.score - a.score || a.timeTaken - b.timeTaken).slice(0,50); if(list.length===0) h.innerHTML += '<div class="small">Belum ada hasil</div>'; else{ const ol = document.createElement('ol'); list.forEach(it=>{ const li = document.createElement('li'); li.innerHTML = `${it.user} — ${it.score}% (${it.correct}/${it.total}) • ${it.timeTaken}s`; ol.appendChild(li); }); h.appendChild(ol); } host.appendChild(h); });
}

// Admin
document.getElementById('btn-back-lobby3').addEventListener('click', ()=>{ showLobby(); });
function renderAdmin(){
  showScreen('screen-admin');
  const res = getAllResults();
  const host = document.getElementById('admin-results'); host.innerHTML = '';
  if(res.length===0) host.innerHTML = '<div class="small">Belum ada hasil</div>';
  res.slice().reverse().forEach(r=>{ const d = document.createElement('div'); d.className = 'card'; d.style.margin = '8px 0'; d.innerHTML = `<strong>${r.user}</strong> • ${r.level} • ${r.score}% • ${r.timeTaken}s <div class="small">${r.correct}/${r.total}</div>`; host.appendChild(d); });
  const qhost = document.getElementById('admin-questions'); qhost.innerHTML = '';
  const allQ = [...EASY_BANK,...NORMAL_BANK,...HARD_BANK];
  allQ.forEach(q=>{ const d = document.createElement('div'); d.style.padding='8px'; d.style.borderBottom='1px solid rgba(255,255,255,0.02)'; d.innerHTML = `<strong>${q.id}</strong> • <div class="small">Tiles: ${q.tiles.join(' | ')}</div><div class="small">Answer: ${q.answer}</div><div class="small">Explanation: ${q.explanation}</div>`; qhost.appendChild(d); });
}

// Timer
function startTimer(){ clearTimer(); state.timerInterval = setInterval(()=>{ state.remaining--; updateTimerDisplay(); if(state.remaining<=0){ clearTimer(); showTinyToast('Waktu habis — dungeon runtuh! Hasil tersimpan.'); finishQuiz(); } },1000); updateTimerDisplay(); }
function updateTimerDisplay(){ const mm = Math.floor(state.remaining/60).toString().padStart(2,'0'); const ss = (state.remaining%60).toString().padStart(2,'0'); document.getElementById('timer-display').textContent = `${mm}:${ss}`; }
function clearTimer(){ if(state.timerInterval) clearInterval(state.timerInterval); state.timerInterval=null; }

// Fake save (demo) + fallback
function fakeSaveResult(payload){ return new Promise((resolve,reject)=>{ setTimeout(()=>{ resolve(true); },150); }) }
function localSavePartial(payload){ const key='nd_partial_v1'; const arr = JSON.parse(localStorage.getItem(key)||'[]'); arr.push(payload); localStorage.setItem(key, JSON.stringify(arr)); }

function showTinyToast(text){ const t = document.createElement('div'); t.style.position='fixed'; t.style.right='18px'; t.style.bottom='18px'; t.style.padding='10px 14px'; t.style.background='rgba(0,0,0,0.6)'; t.style.border='1px solid rgba(255,255,255,0.04)'; t.style.borderRadius='8px'; t.style.zIndex='9999'; t.textContent=text; document.body.appendChild(t); setTimeout(()=>t.remove(),2000); }

// init
showScreen('screen-login');
