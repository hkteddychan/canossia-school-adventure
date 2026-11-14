'use strict';
const $ = (sel, root=document) => root.querySelector(sel);
const el = (tag, cls, txt) => { const e=document.createElement(tag); if(cls) e.className=cls; if(txt!=null) e.textContent=txt; return e; };
const h = (html) => { const d=document.createElement('div'); d.innerHTML=html; return d; };

const S = { happy:50, score:0, mode:null, idx:0, day:1, aHappiness:50, aKnowledge:50, cCards:[] };
window.__game = S;
window.__errs = [];
addEventListener('error', e => window.__errs.push(String(e.message||e)));
const screen = $('#screen');

function updateStats(){ $('#happy').textContent = S.happy; $('#score').textContent = S.score; }
function showMascot(msg, cb){
  const bar = $('#mascotbar'); $('#mascot-msg').textContent = msg; bar.classList.add('show');
  $('#mascot-btn').onclick = () => { bar.classList.remove('show'); if(cb) cb(); };
}
function feedback(ok, react, learn, delta){
  const f = el('div', 'feedback ' + (ok?'ok':'no'));
  f.appendChild(el('div', '', react));
  if (learn) f.appendChild(el('span','fb-learn','📚 ' + learn));
  if (delta) f.appendChild(el('span','fb-delta', delta));
  return f;
}
function imgwrap(name){ const w = el('div','imgwrap'); const im = document.createElement('img'); im.src = IMAGES[name]; im.alt = name; w.appendChild(im); return w; }

// ============ Title screen ============
function showTitle(){
  S.mode=null; updateStats(); screen.innerHTML='';
  const t = el('div','title-screen');
  t.appendChild(el('div','bigemoji','🎒✨'));
  t.appendChild(el('h1','','Canossa School Adventure!'));
  t.appendChild(el('div','sub','For smart boys and girls of 天神嘉諾撒學校 🏫'));
  t.appendChild(imgwrap('hero'));
  const m = el('div','mode-card');
  m.appendChild(el('h2','',[document.createTextNode('🌟 Story: '), el('b','','Ariel\'s Busy Week')]));
  m.appendChild(el('p','','Play one whole week with Ariel. Choose well and get ready for the exam!'));
  const bA = el('button','btn finish','PLAY STORY ▶');
  bA.onclick = () => startStory();
  m.appendChild(bA); t.appendChild(m);

  const m2 = el('div','mode-card');
  m2.appendChild(el('h2','','⛰️ Game: Exam Mountain Climb'));
  m2.appendChild(el('p','','Answer English questions. Climb up step by step. Reach the top!'));
  const bB = el('button','btn study','PLAY & CLIMB ▶');
  bB.onclick = () => startClimb();
  m2.appendChild(bB); t.appendChild(m2);

  const m3 = el('div','mode-card');
  m3.appendChild(el('h2','','🗓️ Game: My Week Plan'));
  m3.appendChild(el('p','','Pick your activities each day. Then see your exam result!'));
  const bC = el('button','btn playc','MAKE MY PLAN ▶');
  bC.onclick = () => startPlan();
  m3.appendChild(bC); t.appendChild(m3);

  const tip = el('div','mascot','🦉 Teacher Owl says: Study hard → happy Mummy and Daddy → trip + toys! Do not study → sad faces → pick cardboard like Po Po 😢');
  t.appendChild(tip);
  screen.appendChild(t);
  screen.scrollTop = 0;
}

// ============ MODE A: Ariel's Busy Week ============
const STORY = [
  { img:'classroom', emoji:'🏫', title:'Monday — At School',
    story:'Today Miss Chan teaches English. Ariel loves English class! The teacher says, "Children, the big exam is next Monday. You must study every day!"',
    choices:[
      { t:'"Yes! I will study hard this week!" 📖', good:true,
        react:'Ariel opens her English book right away. Miss Chan smiles: "Well done, Ariel!"',
        learn:'Good students listen to the teacher and start studying early.',
        dh:4, ds:10 },
      { t:'"I want to play with my friends now!" 🎮', good:false,
        react:'Ariel plays all day. Miss Chan sighs: "Oh Ariel, the exam is coming…"',
        learn:'Playing is fun, but we must study first, then play.',
        dh:-3, ds:0 } ] },
  { img:'hero', emoji:'📖', title:'Tuesday — At Home',
    story:'At 4 o\'clock, Ariel\'s school bag is on the table. The TV is on. Her English homework is waiting!',
    choices:[
      { t:'Do my English homework first 📝', good:true,
        react:'Ariel writes her homework carefully. Mummy peeks in: "What a good girl!"',
        learn:'Homework first, then TV. Mummy and Daddy are so happy!',
        dh:6, ds:12 },
      { t:'Watch TV first, homework later 📺', good:false,
        react:'Ariel watches TV for two hours. It is bedtime — no time for homework! Daddy is sad.',
        learn:'If we play first, there is no time left for homework.',
        dh:-5, ds:0 } ] },
  { img:'sad', emoji:'😢', title:'Wednesday — A Bad Day',
    story:'Ariel did not study yesterday. Today the teacher gives a small quiz. Ariel does not know the answers. At home, Mummy and Daddy look sad.',
    choices:[
      { t:'"I am sorry. I will study harder!" 💪', good:true,
        react:'Daddy hugs Ariel: "That is my brave girl!" Mummy smiles again.',
        learn:'When we make a mistake, we say sorry and try again!',
        dh:8, ds:8 },
      { t:'"It is not my fault! The quiz was hard!" 😤', good:false,
        react:'Daddy and Mummy look at each other. They are very sad. Ariel stays angry alone.',
        learn:'Saying "not my fault" does not help. Trying again does!',
        dh:-6, ds:0 } ] },
  { img:'scavenger', emoji:'♻️', title:'Thursday — A Walk with Po Po',
    story:'Ariel walks with her grandmother. They see an old lady picking up cardboard boxes on the street. Po Po says, "Study hard, or work is very hard when you grow up."',
    choices:[
      { t:'"I understand! I will study very hard!" 🌟', good:true,
        react:'Po Po smiles: "Yes! Good study now means a good job later." Ariel feels strong!',
        learn:'Studying today gives us more choices when we grow up.',
        dh:7, ds:10 },
      { t:'"I do not care about studying." 😐', good:false,
        react:'Po Po shakes her head slowly. Ariel walks home and thinks nothing.',
        learn:'If we do not study, life when we grow up can be very hard.',
        dh:-4, ds:0 } ] },
  { img:'hero', emoji:'📚', title:'Friday — Study Time!',
    story:'The exam is on Monday! Ariel has one free evening.',
    choices:[
      { t:'Read my English book one more time 📖', good:true,
        react:'Ariel reads and reads. Now she knows all the words! Mummy brings her a warm drink.',
        learn:'Practice makes perfect. Reading again helps us remember!',
        dh:6, ds:12 },
      { t:'Play mobile games all evening 📱', good:false,
        react:'Ariel plays until her eyes are tired. The book stays closed.',
        learn:'Too many games before an exam makes us forget our words.',
        dh:-5, ds:0 } ] },
  { img:'exam', emoji:'✏️', title:'Monday — THE EXAM!',
    story:'Miss Chan hands out the exam papers. "Do your best, children!" Ariel takes a deep breath…',
    choices:[
      { t:'"I am ready. Let me try my best!" ✍️', good:true,
        react:'Ariel remembers everything she studied. She writes and writes. Finish!',
        learn:'When we study, we are not afraid of any exam!',
        dh:5, ds:10 },
      { t:'"Oh no, I did not study…" 😰', good:false,
        react:'Ariel looks at the paper. So many words she does not know…',
        learn:'An exam shows us how much we studied. It never lies!',
        dh:-5, ds:0 } ] },
];

function storyEnding(){
  screen.innerHTML='';
  const good = S.aHappiness >= 55;
  const c = el('div','card');
  c.appendChild(el('div','bigemoji', good ? '🎉✈️' : '😔'));
  c.appendChild(el('h2','', good ? 'THE EXAM RESULT IS OUT!' : 'THE EXAM RESULT IS OUT…'));
  c.appendChild(imgwrap(good ? 'exam' : 'sad'));
  const st = el('div','story');
  if (good){
    st.innerHTML = 'Miss Chan: "Ariel, you got a <b>high score</b>! Well done!"<br><br>' +
      'Daddy and Mummy are <b>SO happy</b>! 🥳<br>' +
      '"Next month, we go to <b>Japan on a big trip</b>! ✈️ And we will buy you <b>many new toys</b>! 🧸🎁"';
  } else {
    st.innerHTML = 'Miss Chan shakes her head: "Ariel, your score is <b>very low</b>…"<br><br>' +
      'Daddy and Mummy are <b>sad and worried</b>. 😢<br>' +
      '"No trip. No new toys. Ariel, you must study much harder next time!"<br><br>' +
      'One day, Ariel sees the old lady picking cardboard again. She thinks: <b>"I do not want to pick cardboard when I grow up. I must study NOW!"</b> 💪';
  }
  c.appendChild(st);
  c.appendChild(feedback(true,
    good ? 'Happy: ' + S.aHappiness + ' — Mummy and Daddy are proud of you!' : 'Happiness: ' + S.aHappiness + ' — next time, study more!',
    good ? 'Hard work brings happy families and fun trips!' : 'Every day is a new chance to study harder.',
    null));
  const again = el('button','btn again','🔁 PLAY AGAIN');
  again.onclick = () => { S.happy=50; S.score=0; S.aHappiness=50; updateStats(); showTitle(); };
  c.appendChild(again);
  screen.appendChild(c); screen.scrollTop = 0;
  window.__endingShown = good ? 'good' : 'bad';
}

function showScene(i){
  S.idx = i; screen.innerHTML='';
  const sc = STORY[i];
  // progress dots
  const prog = el('div','progress');
  STORY.forEach((_,k)=>{ const d = el('div','pdot' + (k<i?' done':'')); prog.appendChild(d); });
  screen.appendChild(prog);
  const c = el('div','card');
  c.appendChild(el('h2','', sc.emoji + ' ' + sc.title));
  c.appendChild(imgwrap(sc.img));
  c.appendChild(el('div','story', sc.story));
  c.appendChild(el('div','mascot','🦉 What should Ariel do? Tap one!'));
  screen.appendChild(c);
  const ch = el('div','choices');
  sc.choices.forEach(ch0 => {
    const b = el('button','btn ' + (ch0.good?'study':'playc'), ch0.t);
    b.onclick = () => {
      S.aHappiness = Math.max(0, Math.min(100, S.aHappiness + ch0.dh));
      S.score += ch0.ds;
      S.happy = S.aHappiness; updateStats();
      window.__lastPick = { scene:i, good:!!ch0.good, dh:ch0.dh, ds:ch0.ds };
      ch.style.display='none';
      const f = feedback(ch0.good, ch0.react, ch0.learn, (ch0.dh>=0?'+':'')+ch0.dh+' happiness  '+(ch0.ds? '+'+ch0.ds+' stars':''));
      screen.appendChild(f);
      const nx = el('button','btn finish', i < STORY.length-1 ? 'NEXT ▶' : 'SEE MY EXAM RESULT 🎉');
      nx.onclick = () => i < STORY.length-1 ? showScene(i+1) : storyEnding();
      screen.appendChild(nx);
      screen.scrollTop = screen.scrollHeight;
    };
    ch.appendChild(b);
  });
  screen.appendChild(ch);
  screen.scrollTop = 0;
}
function startStory(){ S.mode='A'; S.aHappiness=50; showScene(0); }
window.__game = S;

// ============ MODE B: Exam Mountain Climb ============
const QUESTIONS = [
  { q:'Which word means "a feeling of being happy"?', opts:['happy','angry','tired','hungry'], a:0 },
  { q:'Choose the correct sentence:', opts:['I goes to school.','I go to school.','I going school.','I go school.'], a:1 },
  { q:'What is the opposite of "big"?', opts:['tall','fast','small','long'], a:2 },
  { q:'Fill in: She ___ an apple every day.', opts:['eat','eats','eating','eated'], a:1 },
  { q:'Which word is a color?', opts:['run','purple','sing','jump'], a:1 },
  { q:'Choose: "___ you like to play football?"', opts:['Do','Does','Is','Am'], a:0 },
  { q:'What is the plural of "one child"?', opts:['childs','childes','children','child'], a:2 },
  { q:'Fill in: The cat ___ on the mat.', opts:['sit','sits','sitting','sat down'], a:1 },
  { q:'Which word means "not old"?', opts:['new','cold','gold','bold'], a:0 },
  { q:'Choose the correct answer:', opts:['He don\'t like milk.','He doesn\'t likes milk.','He doesn\'t like milk.','He not like milk.'], a:2 },
];
const TOPS = ['🎓 TOP!'];

function drawMountain(climbed){
  const rows = [];
  const total = QUESTIONS.length;
  for (let i = total; i >= 1; i--){
    const r = el('div');
    r.style.cssText = 'display:flex;align-items:center;gap:8px;width:100%;';
    const bar = el('div');
    const reached = (total - i + 1) <= climbed;
    bar.style.cssText = 'flex:1;height:26px;border-radius:8px;margin:2px 0;background:' +
      (reached ? 'linear-gradient(90deg,#6ab04c,#4a90d9)' : '#eee4c8') +
      ';border:2px solid ' + (reached ? '#3c7a34' : '#d5c9a5') + ';display:flex;align-items:center;justify-content:center;font-weight:bold;color:' + (reached ? '#fff':'#b5a87e') + ';';
    bar.textContent = reached ? 'STEP ' + (total - i + 1) : '';
    r.appendChild(bar);
    rows.push(r);
  }
  const top = el('div');
  top.style.cssText = 'text-align:center;font-weight:bold;color:' + (climbed >= total ? '#e67e22' : '#b5a87e') + ';font-size:1.05em;margin:2px 0 6px;';
  top.textContent = climbed >= total ? '🎓 YOU REACHED THE TOP! 🏆' : '🏆 THE TOP: toys + trip!';
  return [top, ...rows];
}

function startClimb(){
  S.mode='B'; S.idx=0; S.score=0; S.happy=50; updateStats(); renderQuestion();
}

function renderQuestion(){
  screen.innerHTML='';
  const total = QUESTIONS.length;
  const prog = el('div','progress');
  for (let i=0;i<total;i++){ prog.appendChild(el('div','pdot'+(i<S.idx?' done':''))); }
  screen.appendChild(prog);

  const card = el('div','card');
  const mountain = drawMountain(S.idx);
  mountain.forEach(x => card.appendChild(x));
  card.appendChild(el('div','exam-q','❓ Question ' + (S.idx+1) + ' of ' + total + '<br>' + QUESTIONS[S.idx].q));
  screen.appendChild(card);

  const opts = el('div','opts');
  QUESTIONS[S.idx].opts.forEach((t,i) => {
    const b = el('button','opt', t);
    b.onclick = () => {
      const all = opts.querySelectorAll('button');
      all.forEach(x => x.disabled = true);
      const ok = (i === QUESTIONS[S.idx].a);
      all[QUESTIONS[S.idx].a].classList.add('correct');
      if (!ok){ all[i].classList.add('wrong'); }
      if (ok){ S.score += 10; } else { S.happy = Math.max(0, S.happy - 6); }
      updateStats();
      window.__lastAnswer = { q: S.idx, ok: ok, correctIdx: QUESTIONS[S.idx].a, chosen: i };
      const f = feedback(ok, ok ? '✅ Yes! Well done!' : '❌ Oops! Look at the green answer.',
        ok ? 'Great English! Keep climbing!' : 'Do not worry — every mistake teaches us something.',
        ok ? '+10 stars' : '-6 happiness');
      screen.appendChild(f);
      const nx = el('button','btn finish', S.idx < total-1 ? 'NEXT QUESTION ▶' : 'CLIMB TO THE TOP! 🏆');
      nx.onclick = () => {
        S.idx++;
        if (S.idx >= total){ climbEnding(); } else { renderQuestion(); }
      };
      screen.appendChild(nx);
      screen.scrollTop = screen.scrollHeight;
    };
    opts.appendChild(b);
  });
  screen.appendChild(opts);
  screen.scrollTop = 0;
}

function climbEnding(){
  screen.innerHTML='';
  const top = S.idx >= QUESTIONS.length;
  const score = S.score;
  const good = top && score >= 60;
  const c = el('div','card');
  c.appendChild(el('div','bigemoji', good ? '🏆🎁' : (top ? '😐' : '😢')));
  c.appendChild(el('h2','', good ? 'YOU DID IT!' : (top ? 'SO CLOSE!' : 'ALMOST THERE!')));
  c.appendChild(imgwrap(good ? 'toys' : (top ? 'exam' : 'scavenger')));
  const st = el('div','story');
  if (good){
    st.innerHTML = 'You climbed the whole mountain with <b>' + score + ' stars</b>!<br><br>' +
      'Mummy and Daddy are <b>so happy</b>! 🥳<br>We go to <b>Japan</b> on a big trip! ✈️<br>And look — <b>a room full of new toys</b> just for you! 🧸🎁';
  } else if (top){
    st.innerHTML = 'You reached the top, but your score is <b>' + score + '</b>. You need <b>60 stars</b> for the big prize.<br><br>' +
      'Study a little more, then climb again. <b>You can do it!</b> 💪';
  } else {
    st.innerHTML = 'You collected <b>' + score + ' stars</b> and climbed <b>' + S.idx + ' of ' + QUESTIONS.length + '</b> steps.<br><br>' +
      'The old lady still picks cardboard on the street. Po Po\'s words come back: <b>"Study hard, or work is very hard when you grow up."</b><br><br>Try again — every try makes you stronger! 💪';
  }
  c.appendChild(st);
  c.appendChild(feedback(good, good ? 'Happy: ' + S.happy + ' — what a clever climber!' : 'Happiness: ' + S.happy,
    good ? 'Hard work today = happy family and fun tomorrow!' : 'Read your English book, then try again!',
    null));
  const again = el('button','btn again','🔁 CLIMB AGAIN');
  again.onclick = () => { S.score=0; S.happy=50; updateStats(); showTitle(); };
  c.appendChild(again);
  screen.appendChild(c); screen.scrollTop = 0;
  window.__endingShown = good ? 'good' : (top ? 'close' : 'bad');
}

// ============ MODE C: My Week Plan ============
const PLAN_CARDS = [
  { id:'study', label:'📖 Study English', study:true },
  { id:'homework', label:'📝 Do my homework', study:true },
  { id:'read', label:'📚 Read a story book', study:true },
  { id:'games', label:'📱 Play games all day', study:false },
  { id:'tv', label:'📺 Watch TV all day', study:false },
  { id:'sleep', label:'😴 Sleep all day', study:false },
  { id:'sports', label:'⚽ Play football with friends', study:false, note:'Good for your body!' },
  { id:'draw', label:'🎨 Draw and paint', study:false, note:'Good for your brain!' },
];

function startPlan(){
  S.mode='C'; S.day=1; S.cCards=[]; S.score=0; S.happy=50; updateStats(); renderPlan();
}

function renderPlan(){
  screen.innerHTML='';
  const prog = el('div','progress');
  for (let i=1;i<=5;i++){ prog.appendChild(el('div','pdot'+(i<S.day?' done':''))); }
  screen.appendChild(prog);

  const c = el('div','card');
  c.appendChild(el('h2','','🗓️ Day ' + S.day + ' of 5 — pick ONE thing to do'));
  c.appendChild(el('div','mascot','🦉 Choose wisely! Study helps you pass the exam…'));
  screen.appendChild(c);

  const ch = el('div','choices');
  PLAN_CARDS.forEach(card => {
    const b = el('button','btn ' + (card.study ? 'study' : 'playc'), card.label + (card.note ? ' <small>'+card.note+'</small>' : ''));
    b.onclick = () => {
      S.cCards.push(card.id);
      const studyCount = S.cCards.filter(x => PLAN_CARDS.find(p=>p.id===x).study).length;
      S.happy = Math.max(0, Math.min(100, studyCount * 20));
      S.score = studyCount * 10;
      updateStats();
      window.__lastPlan = { day: S.day, pick: card.id, studyCount };
      if (S.day < 5){ S.day++; renderPlan(); } else { planEnding(); }
    };
    ch.appendChild(b);
  });
  screen.appendChild(ch);
  screen.scrollTop = 0;
}

function planEnding(){
  screen.innerHTML='';
  const studyCount = S.cCards.filter(x => PLAN_CARDS.find(p=>p.id===x).study).length;
  const passed = studyCount >= 4;
  const c = el('div','card');
  c.appendChild(el('div','bigemoji', passed ? '🎉🎁' : '😢'));
  c.appendChild(el('h2','','📜 EXAM DAY RESULTS'));
  c.appendChild(imgwrap(passed ? 'travel' : 'sad'));
  const st = el('div','story');
  const myPlan = S.cCards.map(x => PLAN_CARDS.find(p=>p.id===x).label.replace(/^\S+\s/,'')).join(' → ');
  st.innerHTML = 'Your plan: ' + myPlan + '<br><br>' +
    (passed
      ? 'You studied <b>' + studyCount + ' out of 5 days</b>! Your English is <b>excellent</b>!<br>Miss Chan: "Ariel, a <b>high score</b>! Amazing!"<br><br>Mummy and Daddy cheer: <b>"We are SO proud! Off to Japan we go!" ✈️ And a room full of new toys! 🧸🎁'
      : 'You studied only <b>' + studyCount + ' out of 5 days</b>… Your English score is <b>low</b>.<br><br>Mummy and Daddy are <b>sad</b>. 😢 "No trip. No toys. Study more next time!"<br><br>On the street, the old lady picks cardboard. You think: <b>"I must study NOW, or I will pick cardboard when I grow up!"</b> 💪');
  c.appendChild(st);
  c.appendChild(feedback(passed,
    passed ? 'Happy: ' + S.happy + ' — what a great week!' : 'Happy: ' + S.happy + ' — study a little more!',
    passed ? 'Good choices make good results!' : 'Choose study days to pass the exam.',
    null));

  if (passed){
    const gift = el('div','gift','🎁');
    gift.appendChild(el('div','','TAP TO OPEN YOUR PRESENT!'));
    gift.onclick = () => {
      const prizes = ['🧸','🚲','🎨','⚽','🤖','✈️','🎮','📚','🏖️','🎀'];
      const prize = prizes[Math.floor(Math.random()*prizes.length)];
      gift.innerHTML = '<div class="prize">' + prize + '</div><div class="prize-name">A wonderful present for a wonderful girl!</div>';
      S.score += 20; updateStats();
      window.__giftOpened = prize;
    };
    c.appendChild(gift);
  }

  const again = el('button','btn again','🔁 NEW WEEK');
  again.onclick = () => { S.day=1; S.cCards=[]; S.score=0; S.happy=50; updateStats(); showTitle(); };
  c.appendChild(again);
  screen.appendChild(c); screen.scrollTop = 0;
  window.__endingShown = passed ? 'good' : 'bad';
}

// ============ BOOT ============
updateStats();
showTitle();
console.log('game booted');
