'use strict';
const $ = (s, r=document) => r.querySelector(s);
const el = (tag, cls, txt) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (txt != null) {
    if (Array.isArray(txt)) txt.forEach(n => e.append(n));
    else if (txt instanceof Node) e.append(txt);
    else e.textContent = txt;
  }
  return e;
};
const screen = $('#screen');
let L = 'en';
function t(key){ return LANGS[L][key] || LANGS.en[key] || key; }
function setLang(l){ L = l; $('#langbtn').textContent = LANGS[L].langBtn; }

// ===== student store (localStorage) =====
const CLP = {
  data: { name:'', avatar:'👧', stars:{}, earned:0, streak:0, lastDay:'' },
  load(){
    try { const d = JSON.parse(localStorage.getItem('clp_v1')||'null'); if (d) this.data = Object.assign(this.data, d); } catch(e){}
  },
  save(){ try { localStorage.setItem('clp_v1', JSON.stringify(this.data)); } catch(e){} },
  best(key){ return this.data.stars[key] || 0; },
  addStars(key, n){
    const prev = this.best(key);
    this.data.earned += Math.max(0, n - prev);
    this.data.stars[key] = Math.max(prev, n);
    this.save();
  },
  touchStreak(){
    const today = new Date().toISOString().slice(0,10);
    const d = this.data;
    if (d.lastDay === today) return;
    const yest = new Date(Date.now()-86400000).toISOString().slice(0,10);
    d.streak = (d.lastDay === yest) ? d.streak + 1 : 1;
    d.lastDay = today;
    this.save();
  }
};
CLP.load(); CLP.touchStreak();

// ===== TTS (read questions aloud) =====
function speak(text, langOverride){
  try {
    if (!window.speechSynthesis) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = langOverride || (L==='en' ? 'en-US' : 'zh-HK');
    u.rate = 0.95;
    const vs = speechSynthesis.getVoices();
    const v = vs.find(x => x.lang && x.lang.replace('_','-').startsWith(u.lang.slice(0,2))) ||
              vs.find(x => x.lang && x.lang.includes('HK')) || null;
    if (v) u.voice = v;
    speechSynthesis.speak(u);
  } catch(e){}
}
if (window.speechSynthesis) speechSynthesis.onvoiceschanged = () => {};

// ===== sound effects (WebAudio) =====
let AC = null;
function beep(kind){
  try {
    AC = AC || new (window.AudioContext || window.webkitAudioContext)();
    if (AC.state === 'suspended') AC.resume();
    const now = AC.currentTime;
    const seq = kind==='ok' ? [[523,0],[659,.1],[784,.2]] :
                kind==='no' ? [[320,0],[240,.14]] :
                kind==='win' ? [[523,0],[659,.1],[784,.2],[1047,.32],[784,.46],[1047,.58]] :
                               [[440,0],[554,.1]];
    seq.forEach(([f,t0]) => {
      const o = AC.createOscillator(), g = AC.createGain();
      o.connect(g); g.connect(AC.destination);
      o.type = kind==='no' ? 'sawtooth' : 'sine';
      o.frequency.value = f;
      g.gain.setValueAtTime(0.12, now + t0);
      g.gain.exponentialRampToValueAtTime(0.001, now + t0 + 0.28);
      o.start(now + t0); o.stop(now + t0 + 0.3);
    });
  } catch(e){}
}

// ===== game state =====
const S = { happy:50, score:0, grade:null, view:'home' };
window.__game = S;
window.__errs = [];
addEventListener('error', e => window.__errs.push(String(e.message||e)));

function updateStats(){ $('#happy').textContent = S.happy; $('#score').textContent = S.score; }

const AVATARS = ['👧','🧒','🐰','🐱','🦄','🌸','🐣','🌟'];
const NAMES_EN = ['Ariel','Chloe','Emma','Sophie','Hannah','Kate','Mia','Zoe'];
const NAMES_ZH = ['童童','欣欣','芷晴','家敏','樂瑤','詠恩','穎彤','芯妮'];

function quote(){
  const Q = [
    ['Study a little every day — you will be amazed!','每日溫少少，進步多多多！'],
    ['Mistakes help our brain grow!','錯誤令我哋個腦成長！'],
    ['Reading is a superpower!','閱讀就係超能力！'],
    ['Try your best, not be the best.','盡力就好，唔使同人比。'],
    ['Questions make us smarter!','問問題令我哋更聰明！'],
  ];
  const q = Q[Math.floor(Math.random()*Q.length)];
  return L==='en' ? q[0] : q[1];
}
function badges(){
  const e = CLP.data.earned;
  const B = [];
  if (e >= 10) B.push(L==='en'?'🌟 Rising Star':'🌟 起步之星');
  if (e >= 50) B.push(L==='en'?'📚 Learning Pro':'📚 學習達人');
  if (e >= 100) B.push(L==='en'?'⛰️ Mountain King':'⛰️ 登山之王');
  if (e >= 200) B.push(L==='en'?'👑 Canossa Legend':'👑 嘉諾撒傳奇');
  if (CLP.data.streak >= 3) B.push('🔥 ' + (L==='en'?('Streak '+CLP.data.streak):('連續 '+CLP.data.streak+' 日')));
  return B;
}

// ===== HOME =====
function home(){
  S.view='home'; updateStats(); screen.innerHTML='';
  const w = el('div','title-screen');
  w.appendChild(el('div','bigemoji','🎒✨'));
  w.appendChild(el('h1','', t('title')));
  w.appendChild(el('div','sub', t('welcome') + ' — ' + t('motto')));
  screen.appendChild(w);

  // student card
  const me = el('div','card');
  const who = CLP.data.name ? (CLP.data.avatar + ' ' + CLP.data.name) : (L==='en'?'👧 Who are you? Tap to pick your avatar + name!':'👧 你係邊個？㩒度揀頭像同名字！');
  const meRow = el('div','lesson-item');
  meRow.appendChild(el('div','', who));
  meRow.appendChild(el('div','', (L==='en' ? ('🔥 Streak: ' + CLP.data.streak + ' day(s) · ⭐ Total: ' + CLP.data.earned) : ('🔥 連續學習：' + CLP.data.streak + ' 日 · ⭐ 總星星：' + CLP.data.earned))));
  meRow.onclick = pickAvatar;
  me.appendChild(meRow);
  screen.appendChild(me);

  // daily quote
  const q = el('div','mascot','💡 ' + quote());
  screen.appendChild(q);

  const g = el('div','card');
  g.appendChild(el('h3','', t('pickGrade')));
  const chips = el('div','chips');
  for (let p=1;p<=6;p++){
    const c = el('button','chip' + (S.grade === 'P'+p ? ' sel':''), 'P' + p);
    c.onclick = () => { S.grade = 'P'+p; home(); };
    chips.appendChild(c);
  }
  g.appendChild(chips);
  if (S.grade) g.appendChild(el('div','mascot', '✅ ' + (L==='en' ? ('You are in ' + S.grade + '!') : ('你揀咗 ' + S.grade + ' 級！'))));
  screen.appendChild(g);

  const grid = el('div','grid2');
  const items = [
    { icon:'🏫', t:'school', s:'schoolSub', color:'t-blue', fn:schoolZone },
    { icon:'📚', t:'subjects', s:'subjectsSub', color:'t-green', fn:subjectsZone },
    { icon:'🤖', t:'tutor', s:'tutorSub', color:'t-teal', fn:tutorZone },
    { icon:'⛰️', t:'quiz', s:'quizSub', color:'t-orange', fn:quizZone },
    { icon:'🎲', x:'daily', s:'dailySub', color:'t-red', fn:dailyZone },
    { icon:'📊', x:'report', s:'reportSub', color:'t-purple', fn:reportZone },
    { icon:'🗓️', t:'week', s:'weekSub', color:'t-blue', fn:weekZone },
    { icon:'📖', t:'story', s:'storySub', color:'t-orange', fn:storyZone },
  ];
  items.forEach(it => {
    const b = el('button','tile ' + it.color);
    b.appendChild(el('span','big', it.icon));
    b.appendChild(el('span','t', it.t ? t(it.t) : t(it.x)));
    b.appendChild(el('span','s', t(it.s)));
    b.onclick = it.fn;
    grid.appendChild(b);
  });
  screen.appendChild(grid);
  screen.scrollTop = 0;
}

// ===== avatar/name picker (tap only) =====
function pickAvatar(){
  screen.innerHTML='';
  screen.appendChild(backBtn());
  const c = el('div','card');
  c.appendChild(el('h2','', L==='en'?'👧 Pick your avatar':'👧 揀你嘅頭像'));
  const row = el('div','chips');
  AVATARS.forEach(a => {
    const ch = el('button','chip' + (CLP.data.avatar===a?' sel':''), a);
    ch.onclick = () => { CLP.data.avatar = a; CLP.save(); pickName(); };
    row.appendChild(ch);
  });
  c.appendChild(row);
  screen.appendChild(c);
  screen.scrollTop = 0;
}
function pickName(){
  screen.innerHTML='';
  screen.appendChild(backBtn());
  const c = el('div','card');
  c.appendChild(el('h2','', L==='en'?'📝 Pick your name':'📝 揀你嘅名字'));
  c.appendChild(el('p','', L==='en'?'Tap a name (or ask mummy to add yours later):':'㩒一個名字（或者叫媽咪幫你加）：'));
  const row = el('div','chips');
  (L==='en'?NAMES_EN:NAMES_ZH).forEach(n => {
    const ch = el('button','chip' + (CLP.data.name===n?' sel':''), n);
    ch.onclick = () => { CLP.data.name = n; CLP.save(); home(); };
    row.appendChild(ch);
  });
  c.appendChild(row);
  const skip = el('button','btn blue', L==='en'?'Keep going without a name':'唔要名字，繼續玩');
  skip.onclick = () => home();
  c.appendChild(skip);
  screen.appendChild(c);
  screen.scrollTop = 0;
}

function img(name){
  const w = el('div','imgwrap');
  const im = document.createElement('img');
  im.src = IMAGES[name]; im.alt = name;
  w.appendChild(im); return w;
}
function backBtn(){ return el('div','backrow',[el('button','btn','', [t('back')])]); }

// ===== SCHOOL ZONE =====
function schoolZone(){
  S.view='school'; screen.innerHTML='';
  screen.appendChild(backBtn());
  const h = el('div','card');
  h.appendChild(el('h2','', t('school')));
  h.appendChild(el('div','story', t('schoolIntro')));
  screen.appendChild(h);
  // teachers
  const tc = el('div','card');
  tc.appendChild(el('h3','', t('teachers')));
  SCHOOL.teachers.forEach(x => {
    const row = el('div','lesson-item');
    row.appendChild(el('span','', x.icon + ' ' + (L==='en'?x.en:x.zh)));
    row.appendChild(el('span','', L==='en'?x.line_en:x.line_zh));
    row.onclick = () => { beep('tap'); speak(L==='en'?x.line_en:x.line_zh); };
    tc.appendChild(row);
  });
  screen.appendChild(tc);
  // facilities
  const fc = el('div','card');
  fc.appendChild(el('h3','', t('facilities')));
  SCHOOL.facilities.forEach((x) => {
    fc.appendChild(img(x.img));
    const row = el('div','lesson-item');
    row.appendChild(el('span','', x.icon + ' ' + (L==='en'?x.en:x.zh)));
    row.appendChild(el('span','', L==='en'?x.desc_en:x.desc_zh));
    row.onclick = () => { beep('tap'); speak(L==='en'?x.desc_en:x.desc_zh); };
    fc.appendChild(row);
  });
  screen.appendChild(fc);
  screen.scrollTop = 0;
}

// ===== TUTOR ZONE (DeepTutor) =====
function tutorZone(){
  S.view='tutor'; screen.innerHTML='';
  screen.appendChild(backBtn());
  const c = el('div','card');
  c.appendChild(img('ai_tutor'));
  c.appendChild(el('h2','', t('tutor')));
  c.appendChild(el('div','story', TUTOR.intro[L]));
  TUTOR.feats.forEach(f => {
    const row = el('div','lesson-item');
    row.appendChild(el('span','', f.icon + ' ' + (L==='en'?f.en:f.zh)));
    c.appendChild(row);
  });
  const link = el('button','btn green', L==='en'?'🤖 Try DeepTutor now (with mummy / daddy)':'🤖 同爸爸媽媽一齊試 DeepTutor');
  link.onclick = () => {
    const q = encodeURIComponent(S.grade ? ('Explain a ' + S.grade + ' topic with a fun example') : 'Explain a primary school topic with a fun example');
    open('https://deeptutor.info?ask=' + q, '_blank');
  };
  c.appendChild(link);
  const gh = el('button','btn blue', '⭐ GitHub: HKUDS/DeepTutor');
  gh.onclick = () => open('https://github.com/HKUDS/DeepTutor','_blank');
  c.appendChild(gh);
  screen.appendChild(c);
  // tutor quiz
  const qc = el('div','card');
  qc.appendChild(el('h3','', t('tutorQuiz')));
  DT_QUIZ.forEach((q) => {
    qc.appendChild(el('div','exam-q', (L==='en'?q.en:q.zh)));
    q.opts.forEach((o,oi) => {
      const ch = el('button','choice');
      ch.textContent = (oi+1) + '. ' + (L==='en'?o.en:o.zh);
      ch.onclick = () => {
        if (ch.dataset.locked) return;
        ch.dataset.locked = '1';
        if (oi === q.a) { ch.classList.add('ok'); beep('ok'); }
        else {
          ch.classList.add('bad'); beep('no');
          const btns = qc.querySelectorAll('.choice');
          btns[q.a] && btns[q.a].classList.add('ok');
        }
        qc.querySelectorAll('.choice').forEach(b => b.dataset.locked='1');
        setTimeout(() => qc.querySelectorAll('.choice').forEach(b => b.removeAttribute('data-locked')), 1200);
      };
      qc.appendChild(ch);
    });
  });
  screen.appendChild(qc);
  screen.scrollTop = 0;
}

// ===== DAILY CHALLENGE (3 quick rounds, tap only) =====
function dailyZone(){
  S.view='daily'; screen.innerHTML='';
  screen.appendChild(backBtn());
  CLP.touchStreak();
  const c = el('div','card');
  c.appendChild(el('h2','', t('daily')));
  c.appendChild(el('div','mascot','🔥 ' + (L==='en'?('Your streak: '+CLP.data.streak+' day(s)! Answer 3 quick questions = today done!'):('你嘅連續學習：'+CLP.data.streak+' 日！答啱 3 條就完成今日任務！'))));
  screen.appendChild(c);
  const pool = [];
  const subIds = ['eng','math','hum'];
  subIds.forEach(sid => {
    const b = LESSONS[sid] && LESSONS[sid][S.grade||'P3'] && LESSONS[sid][S.grade||'P3'].qs;
    if (b && b.length) pool.push({ sid, q: b[Math.floor(Math.random()*b.length)] });
  });
  let idx = 0, got = 0;
  function show(){
    if (idx >= pool.length){
      CLP.addStars('daily', got);
      const prev = screen.querySelector('.qcard');
      if (prev) prev.remove();
      const d = el('div','card');
      d.appendChild(el('h2','', (L==='en'?('Daily done! +'+got+' ⭐ — come back tomorrow!'):('今日任務完成！+'+got+' ⭐ — 聽日再嚟！'))));
      const again = el('button','btn orange', t('again'));
      again.onclick = dailyZone;
      d.appendChild(again);
      screen.appendChild(d);
      beep('win');
      speak(L==='en'?'Daily challenge complete!':'今日任務完成！');
      return;
    }
    const p = pool[idx];
    const prev = screen.querySelector('.qcard');
    if (prev) prev.remove();
    const qc = el('div','card qcard');
    qc.appendChild(el('div','exam-q', (idx+1) + '/3 · ' + (L==='en'?p.q.q_en:p.q.q_zh)));
    p.q.opts.forEach((o,oi) => {
      const ch = el('button','choice');
      ch.textContent = (oi+1) + '. ' + (L==='en'?o.en:o.zh);
      ch.onclick = () => {
        if (ch.dataset.locked) return;
        ch.dataset.locked = '1';
        if (oi === p.q.a) { got++; ch.classList.add('ok'); beep('ok'); }
        else { ch.classList.add('bad'); beep('no'); }
        qc.querySelectorAll('.choice').forEach(b => b.dataset.locked='1');
        speak(L==='en'?p.q.opts[p.q.a].en:p.q.opts[p.q.a].zh);
        setTimeout(() => { idx++; show(); }, 1400);
      };
      qc.appendChild(ch);
    });
    screen.appendChild(qc);
    speak(p.q[L]);
    screen.scrollTop = screen.scrollHeight;
  }
  show();
}

// ===== REPORT CARD =====
function reportZone(){
  S.view='report'; screen.innerHTML='';
  screen.appendChild(backBtn());
  const c = el('div','card');
  c.appendChild(el('h2','', L==='en' ? ('📊 ' + (CLP.data.name||'My') + "'s Report Card") : ('📊 ' + (CLP.data.name||'我') + '嘅成績表')));
  c.appendChild(el('div','mascot', '⭐ ' + CLP.data.earned + (L==='en'?' stars total':' 總星星') + ' · 🔥 ' + CLP.data.streak + (L==='en'?' day streak':' 日連續學習')));
  const bs = badges();
  if (bs.length){
    const row = el('div','chips');
    bs.forEach(b => row.appendChild(el('span','chip sel', b)));
    c.appendChild(row);
  } else c.appendChild(el('div','', L==='en'?'Earn 10 ⭐ for your first badge!':'攞 10 ⭐ 就有第一個徽章！'));
  screen.appendChild(c);
  const rc = el('div','card');
  rc.appendChild(el('h3','', t('reportSub')));
  const entries = Object.entries(CLP.data.stars).filter(([k,v]) => v>0).sort((a,b) => b[1]-a[1]);
  if (!entries.length) rc.appendChild(el('div','', L==='en'?'Play subject quizzes to fill this card!':'玩科目測驗，呢度就會有星星！'));
  entries.slice(0,20).forEach(([k,v]) => {
    const row = el('div','lesson-item');
    row.appendChild(el('span','', k));
    row.appendChild(el('span','', '⭐'.repeat(Math.min(v,5)) + ' ' + v + '/5'));
    rc.appendChild(row);
  });
  const reset = el('button','btn orange', L==='en'?'🔄 New game (clear my card)':'🔄 重新開始（清成績表）');
  reset.onclick = () => { if (confirm(L==='en'?'Clear all stars?':'清除所有星星？')) { CLP.data = { name:'', avatar:'👧', stars:{}, earned:0, streak:0, lastDay:'' }; CLP.save(); reportZone(); } };
  rc.appendChild(reset);
  screen.appendChild(rc);
  screen.scrollTop = 0;
}
// ===== SUBJECTS ZONE (list -> subject cards/lessons) =====
function subjectsZone(){
  S.view='subjects'; screen.innerHTML='';
  screen.appendChild(backBtn());
  const h = el('div','card');
  h.appendChild(el('h2','', t('subjects')));
  h.appendChild(el('div','sub', (S.grade ? (L==='en'?('Level: '+S.grade):('級別：'+S.grade)) : (L==='en'?'Pick a level first ⬇':'請先揀級別 ⬇'))));
  screen.appendChild(h);
  const grid = el('div','grid2');
  const cols = ['t-blue','t-green','t-orange','t-teal','t-purple','t-red','t-blue','t-green','t-orange','t-teal'];
  SUBJECTS.forEach((s,i) => {
    const b = el('button','tile ' + cols[i%10]);
    b.appendChild(el('span','big', s.icon));
    b.appendChild(el('span','t', L==='en'?s.en:s.zh));
    const best = CLP.best(S.grade + '-' + s.id);
    b.appendChild(el('span','s', best ? ('⭐ ' + best + '/5') : t('tapToLearn')));
    b.onclick = () => subjectPage(s);
    grid.appendChild(b);
  });
  screen.appendChild(grid);
  screen.scrollTop = 0;
}

function subjectPage(s){
  S.view='subject'; screen.innerHTML='';
  screen.appendChild(backBtn(subjectsZone));
  const L_ = LESSONS[s.id] && LESSONS[s.id][S.grade||'P3'];
  const c = el('div','card');
  c.appendChild(el('h2','', s.icon + ' ' + (L==='en'?s.en:s.zh) + ' · ' + (S.grade||'P3')));
  if (!L_){
    c.appendChild(el('div','', L==='en'?'Coming soon!':'快將推出！'));
    screen.appendChild(c);
    return;
  }
  L_.cards.forEach(cd => {
    const row = el('div','lesson-item');
    row.appendChild(el('span','', (L==='en'?cd.en:cd.zh)));
    row.appendChild(el('span','', L==='en'?cd.tip_en:cd.tip_zh));
    row.onclick = () => { beep('tap'); speak(L==='en'?cd.tip_en:cd.tip_zh); };
    c.appendChild(row);
  });
  const ask = el('button','btn green', '🤖 ' + (L==='en'?'Ask DeepTutor about this':'問 DeepTutor 呢課'));
  ask.onclick = () => {
    const q = encodeURIComponent('Explain ' + (L==='en'?s.name:s.nameZh) + ' ' + (S.grade||'P3') + ' with a fun example for a child');
    open('https://deeptutor.info?ask=' + q, '_blank');
  };
  c.appendChild(ask);
  screen.appendChild(c);
  const qs = L_ && L_.qs;
  if (qs && qs.length){
    const qc = el('div','card');
    qc.appendChild(el('h3','', L==='en'?('Quiz: earn up to 5 ⭐!'):('小測驗：最高攞 5 ⭐！')));
    let qi = 0, got = 0;
    function showQ(){
      if (qi >= qs.length){
        const max = Math.min(5, Math.max(0, Math.round(got / qs.length * 5)));
        CLP.addStars((S.grade||'P3') + '-' + s.id, max);
        qc.innerHTML='';
        const head = (got===qs.length ? '🎉 ' : '') + got + '/' + qs.length + ' · +' + max + ' ⭐';
        qc.appendChild(el('h3','', head));
        const again = el('button','btn orange', t('again'));
        again.onclick = () => subjectPage(s);
        qc.appendChild(again);
        beep('win');
        speak(L==='en'?('Great job! You earned '+max+' stars!'):('好嘢！你攞到 '+max+' 粒星！'));
        return;
      }
      qc.innerHTML='';
      const q = qs[qi];
      qc.appendChild(el('div','exam-q', (qi+1) + '/' + qs.length + ' · ' + (L==='en'?q.q_en:q.q_zh)));
      q.opts.forEach((o,oi) => {
        const ch = el('button','choice');
        ch.textContent = (oi+1) + '. ' + (L==='en'?o.en:o.zh);
        ch.onclick = () => {
          if (ch.dataset.locked) return;
          ch.dataset.locked = '1';
          if (oi === q.a) { got++; ch.classList.add('ok'); beep('ok'); }
          else {
            ch.classList.add('bad'); beep('no');
            const btns = qc.querySelectorAll('.choice');
            btns[q.a] && btns[q.a].classList.add('ok');
          }
          qc.querySelectorAll('.choice').forEach(b => b.dataset.locked='1');
          speak(L==='en'?q.opts[q.a].en:q.opts[q.a].zh);
          setTimeout(() => { qi++; showQ(); }, 1400);
        };
        qc.appendChild(ch);
      });
      speak(L==='en'?q.q_en:q.q_zh);
      screen.scrollTop = screen.scrollHeight;
    }
    showQ();
    screen.appendChild(qc);
  }
  screen.scrollTop = 0;
}

// ===== QUIZ ZONE (mixed exam climb) =====
function quizZone(){
  S.view='quiz'; screen.innerHTML='';
  screen.appendChild(backBtn());
  const c = el('div','card');
  c.appendChild(el('h2','', t('quiz')));
  c.appendChild(el('div','sub', L==='en'?'10 questions from all subjects. Reach the top of the mountain! ⛰️':'全部科目揀 10 條題目，爬到山頂！⛰️'));
  let pool = [];
  SUBJECTS.forEach(s => {
    const b = LESSONS[s.id] && LESSONS[s.id][S.grade||'P3'] && LESSONS[s.id][S.grade||'P3'].qs;
    if (b) pool = pool.concat(b.map(q => (Object.assign({}, q))));
  });
  pool.sort(() => Math.random() - 0.5);
  pool = pool.slice(0,10);
  screen.appendChild(c);
  const qc = el('div','card');
  let qi = 0, got = 0;
  function showQ(){
    if (qi >= pool.length){
      const stars = Math.round(got/10*5);
      CLP.addStars((S.grade||'P3')+'-mix', stars);
      qc.innerHTML='';
      const msg = got >= 6 ? ('🎉 ' + (L==='en'?('You reached the top! +'+stars+' ⭐'):('你爬到山頂！+'+stars+' ⭐'))) : (L==='en'?('Halfway! +'+stars+' ⭐ — try again!'):('爬咗一半！+'+stars+' ⭐ — 再試一次！'));
      qc.appendChild(el('h2','', msg));
      const again = el('button','btn orange', t('again'));
      again.onclick = quizZone;
      qc.appendChild(again);
      beep('win');
      speak(L==='en'?('You scored '+got+' out of 10!'):('你答啱 '+got+' 條，滿分 10 條！'));
      return;
    }
    const q = pool[qi];
    qc.innerHTML='';
    qc.appendChild(el('div','exam-q', '⛰️ ' + (qi+1) + '/10 · ' + (L==='en'?q.q_en:q.q_zh)));
    q.opts.forEach((o,oi) => {
      const ch = el('button','choice');
      ch.textContent = (oi+1) + '. ' + (L==='en'?o.en:o.zh);
      ch.onclick = () => {
        if (ch.dataset.locked) return;
        ch.dataset.locked = '1';
        if (oi === q.a) { got++; ch.classList.add('ok'); beep('ok'); }
        else {
          ch.classList.add('bad'); beep('no');
          const btns = qc.querySelectorAll('.choice');
          btns[q.a] && btns[q.a].classList.add('ok');
        }
        qc.querySelectorAll('.choice').forEach(b => b.dataset.locked='1');
        speak(L==='en'?q.opts[q.a].en:q.opts[q.a].zh);
        setTimeout(() => { qi++; showQ(); }, 1400);
      };
      qc.appendChild(ch);
    });
    speak(q.q_en);
    screen.scrollTop = screen.scrollHeight;
    }
    screen.appendChild(qc);
    showQ();
}

// ===== WEEK PLAN ZONE (tap cards per day) =====
const WEEK_ACTS = [
  { icon:'📚', en:'Study', zh:'溫書', good:true },
  { icon:'✏️', en:'Homework', zh:'做功課', good:true },
  { icon:'📖', en:'Read a book', zh:'睇圖書', good:true },
  { icon:'🧮', en:'Maths practice', zh:'練數學', good:true },
  { icon:'🎮', en:'Play games', zh:'打機', good:false },
  { icon:'📺', en:'Watch TV', zh:'睇電視', good:false },
  { icon:'😴', en:'Sleep all day', zh:'瞓覺', good:false },
  { icon:'⚽', en:'Play football', zh:'踢波', good:false },
];
function weekZone(){
  S.view='week'; screen.innerHTML='';
  screen.appendChild(backBtn());
  const c = el('div','card');
  c.appendChild(el('h2','', t('week')));
  c.appendChild(el('div','sub', L==='en'?'Pick ONE activity for each day. Study 4+ days for a great exam! 📝':'每日揀一張卡。溫書 4 日或以上，考試就掂！📝'));
  screen.appendChild(c);
  let day = 0, study = 0;
  const dc = el('div','card');
  function showDay(){
    if (day >= 5){
      const good = study >= 4;
      dc.innerHTML='';
      dc.appendChild(el('h2','', good ? '🎉 ' + (L==='en'?'Exam passed! Mum & Dad are so happy! You win a trip + toys! 🎁':'考試合格！爸爸媽媽好開心！去旅行 + 買玩具！🎁') : (L==='en'?'Exam failed... Mum is sad. Study more next week! 💪':'考試唔合格... 媽媽好傷心。下星期努力啲！💪')));
      const again = el('button','btn orange', t('again'));
      again.onclick = weekZone;
      dc.appendChild(again);
      CLP.addStars('week-plan', good ? 5 : 1);
      beep('win');
      speak(good ? (L==='en'?'Wonderful! You passed!':'好棒！你合格啦！') : (L==='en'?'Try harder next time!':'下次努力啲！'));
      return;
    }
    dc.innerHTML='';
    dc.appendChild(el('div','exam-q', (L==='en'?'Day ':'第') + (day+1) + (L==='en'?' — what will you do?':' 日 — 你會做咩？')));
    dc.appendChild(el('div','', '📚 ' + study + '/5'));
    const acts = WEEK_ACTS.slice().sort(() => Math.random()-0.5);
    acts.forEach(a => {
      const ch = el('button','choice');
      ch.textContent = a.icon + ' ' + (L==='en'?a.en:a.zh);
      ch.onclick = () => {
        if (ch.dataset.locked) return;
        ch.dataset.locked = '1';
        if (a.good){ study++; ch.classList.add('ok'); beep('ok'); }
        else { ch.classList.add('bad'); beep('no'); }
        dc.querySelectorAll('.choice').forEach(b => b.dataset.locked='1');
        setTimeout(() => { day++; showDay(); }, 900);
      };
      dc.appendChild(ch);
    });
    screen.scrollTop = screen.scrollHeight;
  }
  screen.appendChild(dc);
  showDay();
}

// ===== STORY ZONE (shortcut to V1 story game in iframe-free new tab) =====
function storyZone(){
  S.view='story'; screen.innerHTML='';
  screen.appendChild(backBtn());
  const c = el('div','card');
  c.appendChild(img('school'));
  c.appendChild(el('h2','', t('story')));
  c.appendChild(el('div','story', L==='en'
    ? "Ariel's Busy Week: follow Ariel for 5 days. Choose study or play — your choices decide the exam result! Study hard → Mum & Dad are happy → trip to Japan + toys! Play all day → Mum is sad → Ariel learns an important lesson."
    : "Ariel 嘅一星期：跟住 Ariel 過 5 日，每日揀「溫書」定「玩」。你嘅選擇決定考試結果！努力溫書 → 爸爸媽媽開心 → 去日本旅行 + 新玩具！日日玩 → 媽媽傷心 → Ariel 學識重要一課。"));
  const b = el('button','btn orange', L==='en'?'▶ Play the full story (opens V1)':'▶ 玩完整故事版（開 V1）');
  b.onclick = () => open('../index.html','_blank');
  c.appendChild(b);
  screen.appendChild(c);
  screen.scrollTop = 0;
}

// ===== BACK + BOOT =====
function boot(){
  updateStats();
  home();
}
$('#langbtn').onclick = () => { setLang(L==='en'?'zh':'en'); home(); };
document.addEventListener('DOMContentLoaded', boot);
if (document.readyState !== 'loading') boot();
