'use strict';
const $ = (s, r=document) => r.querySelector(s);
const el = (tag, cls, txt) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (txt != null) {
    if (Array.isArray(txt)) txt.forEach(t => e.append(t));
    else if (txt instanceof Node) e.append(txt);
    else e.textContent = txt;
  }
  return e;
};
const screen = $('#screen');
let L = 'en';
function t(key){ return LANGS[L][key] || LANGS.en[key] || key; }
function setLang(l){ L = l; $('#langbtn').textContent = LANGS[L].langBtn; }

// state
const S = { happy:50, score:0, grade:null, cur:null, view:'home' };
window.__game = S;
window.__errs = [];
addEventListener('error', e => window.__errs.push(String(e.message||e)));

function updateStats(){ $('#happy').textContent = S.happy; $('#score').textContent = S.score; }
function backBtn(){ return el('div','backrow',[el('button','btn','', [t('back')])]); }

function home(){
  S.view='home'; updateStats(); screen.innerHTML='';
  const w = el('div','title-screen');
  w.appendChild(el('div','bigemoji','🎒✨'));
  w.appendChild(el('h1','', t('title')));
  w.appendChild(el('div','sub', t('welcome') + ' — ' + t('motto')));
  screen.appendChild(w);

  const g = el('div','card');
  g.appendChild(el('h3','', t('pickGrade')));
  const chips = el('div','chips');
  for (let p=1;p<=6;p++){
    const c = el('button','chip' + (S.grade === 'P'+p ? ' sel':''), 'P' + p);
    c.onclick = () => { S.grade = 'P'+p; home(); };
    chips.appendChild(c);
  }
  g.appendChild(chips);
  if (S.grade){
    const go = el('div','mascot', '✅ ' + (L==='en' ? ('You are in ' + S.grade + '!') : ('你揀咗 ' + S.grade + ' 級！')));
    g.appendChild(go);
  }
  screen.appendChild(g);

  const grid = el('div','grid2');
  const items = [
    { icon:'🏫', t:'school', s:'schoolSub', color:'t-blue', fn:schoolZone },
    { icon:'📚', t:'subjects', s:'subjectsSub', color:'t-green', fn:subjectsZone },
    { icon:'🤖', t:'tutor', s:'tutorSub', color:'t-teal', fn:tutorZone },
    { icon:'⛰️', t:'quiz', s:'quizSub', color:'t-orange', fn:quizZone },
    { icon:'🗓️', t:'week', s:'weekSub', color:'t-purple', fn:weekZone },
    { icon:'📖', t:'story', s:'storySub', color:'t-red', fn:storyZone },
  ];
  items.forEach(it => {
    const b = el('button','tile ' + it.color);
    b.appendChild(el('span','big', it.icon));
    b.appendChild(el('span','t', t(it.t)));
    b.appendChild(el('span','s', t(it.s)));
    b.onclick = it.fn;
    grid.appendChild(b);
  });
  screen.appendChild(grid);
  screen.scrollTop = 0;
}

// ---------- SCHOOL ZONE ----------
function schoolZone(){
  S.view='school'; screen.innerHTML='';
  screen.appendChild(backBtn());
  const c = el('div','card');
  c.appendChild(el('h2','','🏫 ' + t('school')));
  c.appendChild(img('school'));
  c.appendChild(el('div','story', t('schoolIntro')));
  screen.appendChild(c);

  // facilities
  const f = el('div','card');
  f.appendChild(el('h3','', t('facilities')));
  SCHOOL.facilities.forEach(fa => {
    const item = el('div','lesson-item');
    item.appendChild(el('div','', [fa.icon + ' ' + (L==='en'?fa.en:fa.zh)]));
    item.appendChild(el('div','', L==='en'?fa.desc_en:fa.desc_zh));
    item.onclick = () => {
      const fc = el('div','card');
      fc.appendChild(el('h2','', fa.icon + ' ' + (L==='en'?fa.en:fa.zh)));
      fc.appendChild(img(fa.img));
      fc.appendChild(el('div','story', L==='en'?fa.desc_en:fa.desc_zh));
      screen.appendChild(fc);
      screen.scrollTop = screen.scrollHeight;
    };
    f.appendChild(item);
  });
  screen.appendChild(f);

  // teachers
  const th = el('div','card');
  th.appendChild(el('h3','', t('teachers')));
  SCHOOL.teachers.forEach(tc => {
    const item = el('div','lesson-item');
    item.appendChild(el('div','', [tc.icon + ' ' + (L==='en'?tc.en:tc.zh)]));
    item.appendChild(el('div','', L==='en'?tc.line_en:tc.line_zh));
    th.appendChild(item);
  });
  screen.appendChild(th);
  screen.scrollTop = 0;
}

function img(name){
  const w = el('div','imgwrap');
  const im = document.createElement('img');
  im.src = IMAGES[name]; im.alt = name;
  w.appendChild(im); return w;
}

// ---------- SUBJECTS ZONE ----------
function subjectsZone(){
  S.view='subjects'; screen.innerHTML='';
  screen.appendChild(backBtn());
  const c = el('div','card');
  c.appendChild(el('h2','','📚 ' + t('subjects')));
  // grade selector if none
  if (!S.grade){
    c.appendChild(el('p','', L==='en' ? 'Pick your class first!' : '先揀你嘅班級！'));
    const chips = el('div','chips');
    for (let p=1;p<=6;p++){
      const ch = el('button','chip','P'+p);
      ch.onclick = () => { S.grade='P'+p; subjectsZone(); };
      chips.appendChild(ch);
    }
    c.appendChild(chips);
    screen.appendChild(c); return;
  }
  c.appendChild(el('p','', L==='en' ? ('Class ' + S.grade + ' — tap a subject!') : ('班級 ' + S.grade + ' — 㩒一個科目！')));
  screen.appendChild(c);

  const grid = el('div','grid2');
  SUBJECTS.forEach(sub => {
    const b = el('button','tile ' + sub.color);
    b.appendChild(el('span','big', sub.icon));
    b.appendChild(el('span','t', L==='en'?sub.en:sub.zh));
    const les = LESSONS[sub.id];
    const hasGrade = les && les[S.grade];
    b.appendChild(el('span','s', hasGrade ? (L==='en'? (les[S.grade].cards.length + ' lessons + quiz') : (les[S.grade].cards.length + ' 張卡 + 測驗')) : (L==='en' ? 'more coming!' : '敬請期待')));
    b.onclick = () => subjectZone(sub.id);
    grid.appendChild(b);
  });
  screen.appendChild(grid);
  screen.scrollTop = 0;
}

function subjectZone(subId){
  const sub = SUBJECTS.find(x => x.id===subId);
  const les = LESSONS[subId] && LESSONS[subId][S.grade];
  screen.innerHTML='';
  screen.appendChild(backBtn());
  if (!les){
    const c = el('div','card');
    c.appendChild(el('h2','',(L==='en'?sub.en:sub.zh)));
    c.appendChild(el('p','', L==='en' ? 'This subject is still being built. Try another one!' : '呢個科目仲整緊，試下第啲啦！'));
    screen.appendChild(c); return;
  }
  // lessons
  les.cards.forEach((card, i) => {
    const c = el('div','card');
    c.appendChild(el('h3','', (L==='en'?card.en:card.zh)));
    c.appendChild(el('div','story', L==='en'?card.tip_en:card.tip_zh));
    screen.appendChild(c);
  });
  // DT corner
  const dtc = el('div','card');
  dtc.appendChild(el('h3','','🤖 ' + t('askDT')));
  dtc.appendChild(el('div','mascot', L==='en' ? ('Ask DeepTutor about "' + sub.en + ' ' + S.grade + '" — free AI help!') : ('問 DeepTutor 關於「' + sub.zh + ' ' + S.grade + '」嘅問題！')));
  const link = el('a','dt-link', t('askDT'));
  link.href = DEEPTUTOR_URL + '?q=' + encodeURIComponent((L==='en'? 'Explain ' : '解釋 ') + sub.en + ' ' + S.grade + ' for a primary school student');
  link.target = '_blank';
  dtc.appendChild(link);
  dtc.appendChild(el('div','hint', 'github.com/HKUDS/DeepTutor'));
  screen.appendChild(dtc);
  // start quiz
  const qc = el('div','card');
  qc.appendChild(el('p','', L==='en' ? 'Ready for the quiz?' : '準備好做小測驗未？'));
  const b = el('button','btn green', '⭐ ' + t('quiz'));
  b.onclick = () => startSubjectQuiz(subId);
  qc.appendChild(b);
  screen.appendChild(qc);
  screen.scrollTop = 0;
}

function startSubjectQuiz(subId){
  const sub = SUBJECTS.find(x => x.id===subId);
  const les = LESSONS[subId][S.grade];
  let i = 0, score0 = S.score;
  const qs = les.qs;
  function renderQ(){
    screen.innerHTML='';
    screen.appendChild(backBtn());
    const prog = el('div','progress');
    qs.forEach((_,k)=>prog.appendChild(el('div','pdot'+(k<i?' done':''))));
    screen.appendChild(prog);
    const c = el('div','card');
    c.appendChild(el('h2','',(L==='en'?sub.en:sub.zh) + ' — ' + t('quiz')));
    c.appendChild(el('div','exam-q', L==='en'?qs[i].q_en:qs[i].q_zh));
    screen.appendChild(c);
    const opts = el('div','opts');
    qs[i].opts.forEach((o,oi) => {
      const b = el('button','opt', L==='en'?o.en:o.zh);
      b.onclick = () => {
        opts.querySelectorAll('button').forEach(x=>x.disabled=true);
        const ok = oi===qs[i].a;
        opts.querySelectorAll('button')[qs[i].a].classList.add('correct');
        if (!ok) opts.querySelectorAll('button')[oi].classList.add('wrong');
        if (ok) S.score += 10;
        updateStats();
        const fb = el('div','feedback ' + (ok?'ok':'no'), ok ? t('correct') : t('wrong'));
        fb.appendChild(el('span','fb-learn', L==='en'?qs[i].learn_en:qs[i].learn_zh));
        screen.appendChild(fb);
        screen.appendChild(el('div','hint','Next…'));
        setTimeout(() => { i++; i<qs.length ? renderQ() : subjectDone(); }, 1400);
      };
      opts.appendChild(b);
    });
    screen.appendChild(opts);
    screen.scrollTop = 0;
  }
  function subjectDone(){
    screen.innerHTML='';
    screen.appendChild(backBtn());
    const c = el('div','card');
    c.appendChild(el('div','bigemoji','🎉'));
    c.appendChild(el('h2','',(L==='en'?sub.en:sub.zh) + ' — ' + t('allDone')));
    const got = S.score - score0;
    c.appendChild(el('div','star-row', '⭐ ' + got/10 + ' / ' + qs.length));
    c.appendChild(el('div','mascot', L==='en' ? 'Want more help? Ask DeepTutor! 🤖' : '想要更多幫助？問 DeepTutor！🤖'));
    screen.appendChild(c);
    const dtc = el('div','card');
    dtc.appendChild(el('h3','','🤖 ' + t('askDT')));
    const link = el('a','dt-link', t('askDT'));
    link.href = DEEPTUTOR_URL + '?q=' + encodeURIComponent('Explain ' + sub.en + ' ' + S.grade);
    link.target = '_blank';
    dtc.appendChild(link);
    dtc.appendChild(el('div','hint','github.com/HKUDS/DeepTutor'));
    screen.appendChild(dtc);
    const again = el('button','btn orange', '🔁 ' + (L==='en'?'Try again':'再試一次'));
    again.onclick = () => { S.score = score0; startSubjectQuiz(subId); };
    screen.appendChild(again);
    screen.scrollTop = 0;
  }
  renderQ();
}

// ---------- DEEPTUTOR ZONE ----------
function tutorZone(){
  S.view='tutor'; screen.innerHTML='';
  screen.appendChild(backBtn());
  const c = el('div','card');
  c.appendChild(el('h2','','🤖 ' + t('tutor')));
  c.appendChild(img('ai_tutor'));
  c.appendChild(el('div','story', t('dtIntro')));
  screen.appendChild(c);
  // what it can do
  const w = el('div','card');
  w.appendChild(el('h3','', L==='en'?'What DeepTutor can do':'DeepTutor 可以幫你'));
  const items = [
    ['📖', 'Explain lessons step by step', '一步步解釋功課'],
    ['✏️', 'Check your work and help you fix mistakes', '檢查功課，幫你改正'],
    ['🧠', 'Make practice questions just for you', '為你度身訂造練習題'],
    ['🗣️', 'Talk to you in English or Chinese', '中英雙語對話'],
    ['🎨', 'Make books, notes and flashcards', '整書、筆記同記憶卡'],
  ];
  items.forEach(it => {
    w.appendChild(el('div','lesson-item',[el('div','',it[0]), el('div','', L==='en'?it[1]:it[2])]));
  });
  screen.appendChild(w);
  // links
  const l = el('div','card');
  l.appendChild(el('p','', L==='en'?'Open DeepTutor with mummy or daddy:':'叫爸爸媽媽打開 DeepTutor：'));
  const a1 = el('a','dt-link','🌐 ' + (L==='en'?'Open DeepTutor':'打開 DeepTutor'));
  a1.href = DEEPTUTOR_URL; a1.target='_blank';
  l.appendChild(a1);
  l.appendChild(el('div','hint', DT_GITHUB));
  const a2 = el('a','dt-link','📖 ' + (L==='en'?'DeepTutor on GitHub':'GitHub 頁面'));
  a2.href = DT_GITHUB; a2.target='_blank';
  l.appendChild(a2);
  screen.appendChild(l);
  // mini quiz about DT
  const q = el('div','card');
  q.appendChild(el('p','', L==='en'?'Quick check — DeepTutor is made by:':'小測驗 — DeepTutor 係邊個整嘅？'));
  const opts = el('div','opts');
  const qq = L==='en' ? [
    {en:'HKUDS (Hong Kong University team)', ok:true},
    {en:'A toy company', ok:false},
    {en:'A football club', ok:false},
  ] : [
    {en:'HKUDS（香港大學團隊）', ok:true},
    {en:'玩具公司', ok:false},
    {en:'足球會', ok:false},
  ];
  qq.forEach((o,oi) => {
    const b = el('button','opt', o.en);
    b.onclick = () => {
      opts.querySelectorAll('button').forEach(x=>x.disabled=true);
      if (o.ok){ S.score += 20; updateStats(); opts.querySelectorAll('button')[0].classList.add('correct'); }
      else { opts.querySelectorAll('button')[0].classList.add('correct'); opts.querySelectorAll('button')[oi].classList.add('wrong'); }
      const fb = el('div','feedback ' + (o.ok?'ok':'no'), o.ok?t('correct'):t('wrong'));
      fb.appendChild(el('span','fb-learn', L==='en'?'DeepTutor = HKUDS open-source AI tutor!':'DeepTutor 係 HKUDS 開放源碼 AI 導師！'));
      q.appendChild(fb);
    };
    opts.appendChild(b);
  });
  q.appendChild(opts);
  screen.appendChild(q);
  screen.scrollTop = 0;
}

// ---------- QUIZ CLIMB (upgrade) ----------
function quizZone(){
  S.view='quiz'; screen.innerHTML='';
  screen.appendChild(backBtn());
  const c = el('div','card');
  c.appendChild(el('h2','','⛰️ ' + t('quiz')));
  if (!S.grade){
    c.appendChild(el('p','', L==='en'?'Pick your class first!':'先揀你嘅班級！'));
    const chips = el('div','chips');
    for (let p=1;p<=6;p++){
      const ch = el('button','chip','P'+p);
      ch.onclick = () => { S.grade='P'+p; quizZone(); };
      chips.appendChild(ch);
    }
    c.appendChild(chips); screen.appendChild(c); return;
  }
  // pick subject
  const chips = el('div','chips');
  SUBJECTS.forEach(sub => {
    const has = LESSONS[sub.id] && LESSONS[sub.id][S.grade];
    if (!has) return;
    const ch = el('button','chip',(L==='en'?sub.en:sub.zh));
    ch.onclick = () => startSubjectQuiz(sub.id);
    chips.appendChild(ch);
  });
  c.appendChild(el('p','', L==='en' ? ('Climb with ' + S.grade + ' questions — pick a subject:') : ('用 ' + S.grade + ' 嘅題目登山 — 揀科目：')));
  c.appendChild(chips);
  screen.appendChild(c);
  screen.scrollTop = 0;
}

// ---------- WEEK PLAN (reuse V1 logic) ----------
function weekZone(){
  S.view='week'; screen.innerHTML='';
  screen.appendChild(backBtn());
  const CARDS = [
    { id:'study', label:['📖 Study English','📖 溫英文'], study:true },
    { id:'homework', label:['📝 Do homework','📝 做功課'], study:true },
    { id:'read', label:['📚 Read a story','📚 睇故事書'], study:true },
    { id:'games', label:['📱 Play games all day','📱 打機一日'], study:false },
    { id:'tv', label:['📺 Watch TV all day','📺 睇電視一日'], study:false },
    { id:'sleep', label:['😴 Sleep all day','😴 睡一日'], study:false },
    { id:'sports', label:['⚽ Play football','⚽ 踢足球'], study:false, note:['Good for body!','身體好！'] },
    { id:'draw', label:['🎨 Draw and paint','🎨 畫畫'], study:false, note:['Good for brain!','大腦好！'] },
  ];
  const c = el('div','card');
  c.appendChild(el('h2','','🗓️ ' + t('week')));
  c.appendChild(el('div','mascot', L==='en'?'Pick ONE thing each day. 5 days until the exam!':'每日揀一樣嘢做。5 日後就考試！'));
  screen.appendChild(c);
  let day = 1, picks = [];
  const ch = el('div','choices');
  screen.appendChild(ch);
  function render(){
    screen.innerHTML='';
    screen.appendChild(backBtn());
    const prog = el('div','progress');
    for (let i=1;i<=5;i++) prog.appendChild(el('div','pdot'+(i<day?' done':'')));
    screen.appendChild(prog);
    const cc = el('div','card');
    cc.appendChild(el('h2','','🗓️ ' + (L==='en'?('Day ' + day + ' of 5 — pick ONE'):('第 ' + day + ' 日 / 5 — 揀一樣'))));
    screen.appendChild(cc);
    const chh = el('div','choices');
    CARDS.forEach(card => {
      const b = el('button','btn ' + (card.study?'blue':'orange'), L==='en'?card.label[0]:card.label[1]);
      b.onclick = () => {
        if (chh.dataset.locked) return;
        chh.dataset.locked='1';
        chh.querySelectorAll('.btn').forEach(x=>x.disabled=true);
        picks.push(card.id);
        if (day<5){ day++; setTimeout(render, 900); } else { setTimeout(done, 900); }
      };
      chh.appendChild(b);
    });
    screen.appendChild(chh);
    screen.scrollTop = 0;
  }
  function done(){
    const studyCount = picks.filter(x=>CARDS.find(c2=>c2.id===x).study).length;
    const passed = studyCount >= 4;
    screen.innerHTML='';
    screen.appendChild(backBtn());
    const c2 = el('div','card');
    c2.appendChild(el('div','bigemoji', passed?'🎉':'😢'));
    c2.appendChild(el('h2','', L==='en'?'EXAM RESULTS':'考試結果'));
    c2.appendChild(img(passed?'travel':'sad'));
    const myPlan = picks.map(x=>CARDS.find(c2=>c2.id===x).label[L==='en'?0:1]).join(' → ');
    c2.appendChild(el('div','story', (L==='en'?'Your week: ':'你嘅一週：') + myPlan + '<br><br>' + (passed
      ? (L==='en' ? 'You studied ' + studyCount + '/5 days! HIGH SCORE! Mummy and Daddy are SO happy! Trip to Japan + new toys! ✈️🧸🎁' : '你溫咗 ' + studyCount + '/5 日！高分！爸爸媽媽超開心！去日本旅行 + 新玩具！✈️🧸🎁')
      : (L==='en' ? 'Only ' + studyCount + '/5 days studied… LOW SCORE. Mummy and Daddy are sad. The old lady still picks cardboard. Study NOW so you don\'t pick cardboard when you grow up!' : '只溫咗 ' + studyCount + '/5 日… 低分。爸爸媽媽傷心。街邊婆婆仲喺度執紙皮。而家溫書，大個先唔使執紙皮！'))));
    screen.appendChild(c2);
    if (passed){
      const gift = el('div','gift', L==='en'?'🎁 TAP TO OPEN!':'🎁 㩒開禮物！');
      gift.onclick = () => {
        const prizes = ['🧸','🚲','🎨','⚽','🤖','✈️','🎮','📚','🏖️','🎀'];
        gift.textContent = prizes[Math.floor(Math.random()*prizes.length)];
        S.score += 20; updateStats();
      };
      c2.appendChild(gift);
    }
    const again = el('button','btn orange','🔁 ' + (L==='en'?'New week':'新嘅一週'));
    again.onclick = () => weekZone();
    screen.appendChild(again);
    screen.scrollTop = 0;
  }
  render();
}

// ---------- STORY (link to V1) ----------
function storyZone(){
  S.view='story'; screen.innerHTML='';
  screen.appendChild(backBtn());
  const c = el('div','card');
  c.appendChild(el('h2','','📖 ' + t('story')));
  c.appendChild(img('hero'));
  c.appendChild(el('div','story', L==='en'
    ? 'Play Ariel\'s story: Monday to exam day. Choose well, get a high score, go to Japan with toys!'
    : '玩 Ariel 小故事：由星期一到大考。揀得好，考高分，去日本旅行仲有玩具！'));
  screen.appendChild(c);
  const b = el('button','btn green', L==='en'?'▶ Play Ariel\'s Story':'▶ 玩 Ariel 小故事');
  b.onclick = () => { location.href = '../index.html'; };
  screen.appendChild(b);
  screen.scrollTop = 0;
}

// ---------- BOOT ----------
setLang('en');
updateStats();
home();

$('#langbtn').onclick = () => {
  const l2 = L==='en' ? 'zh' : 'en';
  setLang(l2);
  // re-render current view
  ({home, schoolZone, subjectsZone, tutorZone, quizZone, weekZone, storyZone}[S.view] || home)();
};
console.log('v2 booted');
