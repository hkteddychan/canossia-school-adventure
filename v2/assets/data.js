// ===== i18n =====
const LANGS = {
  en: {
    title: 'Canossa Learning Park',
    welcome: 'Holy Angels Canossian School • Est. 1890',
    motto: 'Motto: Humility & Love 謙遜仁愛',
    pickGrade: 'Pick your class 🎓',
    school: 'Our School',
    schoolSub: 'School tour, teachers, rooms',
    subjects: 'Subjects',
    subjectsSub: '10 EDB subjects × P1-P6',
    tutor: 'DeepTutor Corner',
    tutorSub: 'Your AI study buddy',
    quiz: 'Exam Mountain',
    quizSub: 'Climb with quiz questions',
    week: 'My Week Plan',
    weekSub: 'Choose study or play',
    story: "Ariel's Story",
    storySub: 'A week with Ariel',
    back: '⬅ Back',
    schoolIntro: 'Our school is in Hung Hom (紅磡). The Canossian Sisters started it in 1890 — over 135 years! It is a girls\' school with 18 classes, P1 to P6. Our motto is "Humility & Love" (謙遜仁愛).',
    facilities: '🏫 Places in our school',
    teachers: '👩‍🏫 Our teachers',
    lesson: 'Lesson',
    quiz: 'Quiz',
    start: 'Start',
    next: 'Next',
    correct: '✅ Correct! Well done!',
    wrong: '❌ Oops! Look at the green answer.',
    score: 'Your stars',
    done: 'Great job!',
    askDT: '🤖 Ask DeepTutor',
    dtIntro: 'DeepTutor is a free AI teacher robot made by HKUDS. It can explain anything you do not understand — maths, English, science! Ask mummy or daddy to open it together.',
    starEarned: '⭐ earned:',
    gradeLabel: 'Class',
    subjectLabel: 'Subject',
    allDone: 'You finished this quiz! Amazing! 🎉',
    tapToLearn: 'Tap each card to learn, then take the quiz!',
    langBtn: '中/EN',
    daily: 'Daily Challenge',
    dailySub: '3 quick questions every day!',
    report: 'Report Card',
    reportSub: 'My star collection',
    tutorQuiz: 'DeepTutor Quiz',
    again: 'Play again',
  },
  zh: {
    title: '天神嘉諾撒學習樂園',
    welcome: '天神嘉諾撒學校 • 1890年創校',
    motto: '校訓：謙遜仁愛',
    pickGrade: '揀你嘅班級 🎓',
    school: '我哋嘅學校',
    schoolSub: '學校遊、老師、校園設施',
    subjects: '科目學堂',
    subjectsSub: '教育局 10 科 × 小一至小六',
    tutor: 'DeepTutor 角落',
    tutorSub: '你嘅 AI 學習夥伴',
    quiz: '考試登山',
    quizSub: '答題 climbing 上山頂',
    week: '我嘅一週計劃',
    weekSub: '揀溫書定係玩',
    story: 'Ariel 小故事',
    storySub: '陪 Ariel 過一星期',
    back: '⬅ 返回',
    schoolIntro: '我哋嘅學校喺紅磡鶴園街。嘉諾撒修女 1890 年創校，超過 135 年歷史！係一間女子小學，小一至小六共 18 班。校訓係「謙遜仁愛」。',
    facilities: '🏫 校園設施',
    teachers: '👩‍🏫 我哋嘅老師',
    lesson: '學習卡',
    quiz: '小測驗',
    start: '開始',
    next: '下一頁',
    correct: '✅ 答啱！好嘢！',
    wrong: '❌ 唔緊要，睇下綠色嘅正確答案。',
    score: '你嘅星星',
    done: '好叻呀！',
    askDT: '🤖 問 DeepTutor',
    dtIntro: 'DeepTutor 係 HKUDS 整嘅免費 AI 老師機械人。你有咩唔明 — 數學、英文、科學 — 都可以問佢！叫爸爸媽媽一齊打開用啦。',
    starEarned: '⭐ 得到：',
    gradeLabel: '班級',
    subjectLabel: '科目',
    allDone: '你完成咗呢個測驗！超棒！🎉',
    tapToLearn: '㩒每張卡學嘢，然後做小測驗！',
    langBtn: 'EN/中',
    daily: '每日挑戰',
    dailySub: '日日答 3 條快題！',
    report: '成績表',
    reportSub: '我嘅星星收集冊',
    tutorQuiz: 'DeepTutor 小測驗',
    again: '再玩一次',
  }
};

// ===== School data =====
const SCHOOL = {
  img: 'school',
  facilities: [
    { icon:'📚', en:'Central Library', zh:'中央圖書館', desc_en:'Hundreds of story books! Read every day.', desc_zh:'幾百本故事書！日日都嚟睇。', img:'library' },
    { icon:'🤖', en:'STEM Room', zh:'STEM 房', desc_en:'Build robots and do experiments!', desc_zh:'砌機械人、做實驗！', img:'stem' },
    { icon:'🎵', en:'Music Room', zh:'音樂室', desc_en:'Piano, violin and singing time.', desc_zh:'鋼琴、小提琴同唱歌時間。', img:'music' },
    { icon:'🏀', en:'Covered Playground', zh:'有蓋操場＋籃球場', desc_en:'Run, jump and play ball.', desc_zh:'跑下跳下打下波。', img:'pe' },
    { icon:'💻', en:'Computer Room', zh:'電腦室', desc_en:'Apple TV and tablets for learning.', desc_zh:'Apple TV 同平板電腦學嘢。', img:'stem' },
    { icon:'📻', en:'Campus Radio', zh:'校園電台', desc_en:'Be a little radio host!', desc_zh:'做小主播！', img:'music' },
  ],
  teachers: [
    { icon:'👩‍🏫', en:'Miss Chan — English', zh:'陳老師 — 英文', line_en:'"Read a little every day!"', line_zh:'「日日讀少少！」' },
    { icon:'👩‍🏫', en:'Ms Woo — Chinese', zh:'胡老師 — 中文', line_en:'"Write beautiful characters."', line_zh:'「寫靚啲字啦。」' },
    { icon:'👨‍🏫', en:'Mr Chan — Maths', zh:'陳老師 — 數學', line_en:'"Numbers are fun!"', line_zh:'「數字好好玩！」' },
    { icon:'👩‍🔬', en:'Miss Wong — Science', zh:'黃老師 — 科學', line_en:'"Ask why about everything!"', line_zh:'「凡事問點解！」' },
    { icon:'🎹', en:'Miss Lam — Music', zh:'林老師 — 音樂', line_en:'"Sing with your heart."', line_zh:'「用心唱歌。」' },
    { icon:'⚽', en:'Coach Ho — PE', zh:'何教練 — 體育', line_en:'"Strong body, strong mind!"', line_zh:'「身體強，頭腦強！」' },
  ]
};

// ===== Subjects (EDB 10) =====
const SUBJECTS = [
  { id:'eng', icon:'🔤', en:'English', zh:'英文', color:'t-blue' },
  { id:'chi', icon:'🀄', en:'Chinese', zh:'中文', color:'t-red' },
  { id:'math', icon:'🔢', en:'Maths', zh:'數學', color:'t-orange' },
  { id:'sci', icon:'🔬', en:'Science', zh:'科學', color:'t-green' },
  { id:'hum', icon:'🌏', en:'Humanities', zh:'人文', color:'t-teal' },
  { id:'va', icon:'🎨', en:'Visual Arts', zh:'視覺藝術', color:'t-purple' },
  { id:'mus', icon:'🎵', en:'Music', zh:'音樂', color:'t-purple' },
  { id:'pe', icon:'⚽', en:'P.E.', zh:'體育', color:'t-green' },
  { id:'pth', icon:'🗣️', en:'Putonghua', zh:'普通話', color:'t-red' },
  { id:'rel', icon:'⛪', en:'Religious Ed.', zh:'宗教', color:'t-orange' },
];

const DEEPTUTOR_URL = 'https://deeptutor.info/';
const DT_GITHUB = 'https://github.com/HKUDS/DeepTutor';

// ===== LESSONS per subject x grade (P1-P6) — EDB syllabus content =====
// Each: { cards: [ {en, zh, tip_en, tip_zh} ], qs: [ {q_en, q_zh, opts:[{en,zh}x4], a, learn_en, learn_zh} ] }
// Simplified per EDB curriculum — foundation for a learning game.

const LESSONS = {
  // ---------- ENGLISH ----------
  eng: {
    P1: {
      cards:[
        { en:'ABC Song', zh:'ABC 歌', tip_en:'A is for Apple. B is for Ball. Sing it!', tip_zh:'A 係 Apple，B 係 Ball。一齊唱啦！' },
        { en:'Family words', zh:'家庭詞', tip_en:'mum, dad, brother, sister, grandma, grandpa', tip_zh:'媽媽、爸爸、哥哥、妹妹、婆婆、公公' },
        { en:'Colours', zh:'顏色', tip_en:'red, blue, green, yellow, pink', tip_zh:'紅、藍、綠、黃、粉紅' },
      ],
      qs:[
        { q_en:'A is for ___', q_zh:'A 係 ___ 嘅開頭', opts:[{en:'Apple',zh:'蘋果'},{en:'Dog',zh:'狗'},{en:'Sun',zh:'太陽'},{en:'Cat',zh:'貓'}], a:0, learn_en:'A = Apple!', learn_zh:'A = Apple！' },
        { q_en:'Which is a colour?', q_zh:'邊個係顏色？', opts:[{en:'Blue',zh:'藍色'},{en:'Run',zh:'跑'},{en:'Ball',zh:'波'},{en:'Dog',zh:'狗'}], a:0, learn_en:'Blue is a colour.', learn_zh:'Blue 係顏色。' },
        { q_en:'"mum" means ___', q_zh:'mum 係邊個？', opts:[{en:'Mummy',zh:'媽媽'},{en:'Daddy',zh:'爸爸'},{en:'Brother',zh:'哥哥'},{en:'Dog',zh:'狗'}], a:0, learn_en:'Mum = Mummy', learn_zh:'Mum = 媽媽' },
      ]
    },
    P2: {
      cards:[
        { en:'Present tense', zh:'現在式', tip_en:'I play. You eat. She reads.', tip_zh:'I play / You eat / She reads。' },
        { en:'Plurals (+s)', zh:'複數 (+s)', tip_en:'one apple → two apples', tip_zh:'一個 apple → 兩個 apples' },
        { en:'Prepositions', zh:'方位詞', tip_en:'in, on, under, behind', tip_zh:'in 入面、on 上面、under 下面、behind 後面' },
      ],
      qs:[
        { q_en:'One dog, two ___', q_zh:'一隻狗，兩隻___', opts:[{en:'dogs',zh:'狗們'},{en:'dog',zh:'狗'},{en:'doggy',zh:'小狗狗'},{en:'doges',zh:'狗'},{}], a:0, learn_en:'Add -s for plurals.', learn_zh:'複數加 -s。' },
        { q_en:'The cat is ___ the box (inside)', q_zh:'貓喺盒入面', opts:[{en:'in',zh:'入面'},{en:'on',zh:'上面'},{en:'under',zh:'下面'},{en:'behind',zh:'後面'}], a:0, learn_en:'in = inside', learn_zh:'in = 入面' },
        { q_en:'She ___ an apple (now)', q_zh:'佢宜家食緊蘋果', opts:[{en:'eats',zh:'食'},{en:'eat',zh:'食'},{en:'eating',zh:'食緊'},{en:'ate',zh:'食咗'}], a:2, learn_en:'Now = eats / eating', learn_zh:'宜家做緊 = eats' },
      ]
    },
    P3: {
      cards:[
        { en:'Past tense', zh:'過去式', tip_en:'played, walked, jumped, ate', tip_zh:'played、walked、jumped、ate' },
        { en:'Comparatives', zh:'比較級', tip_en:'big → bigger; small → smaller', tip_zh:'big → bigger；small → smaller' },
        { en:'Question words', zh:'問句詞', tip_en:'Who, What, Where, When, Why', tip_zh:'邊個、乜嘢、邊度、幾時、點解' },
      ],
      qs:[
        { q_en:'Yesterday I ___ to school', q_zh:'尋日我行返學', opts:[{en:'go',zh:'去'},{en:'went',zh:'去咗'},{en:'goes',zh:'去'},{en:'going',zh:'去緊'}], a:1, learn_en:'Yesterday = went (past)', learn_zh:'尋日 = 過去式 went' },
        { q_en:'An elephant is ___ than a mouse', q_zh:'大象比老鼠___', opts:[{en:'big',zh:'大'},{en:'bigger',zh:'大好多'},{en:'small',zh:'細'},{en:'biggest',zh:'最大'}], a:1, learn_en:'bigger = more big', learn_zh:'bigger = 比較大' },
        { q_en:'___ is your name?', q_zh:'你叫咩名？', opts:[{en:'What',zh:'乜嘢'},{en:'Where',zh:'邊度'},{en:'When',zh:'幾時'},{en:'Who',zh:'邊個'}], a:0, learn_en:'What = 咩', learn_zh:'What = 咩' },
      ]
    },
    P4: {
      cards:[
        { en:'Tenses review', zh:'時態複習', tip_en:'go / went / have gone', tip_zh:'go、went、have gone' },
        { en:'Connectives', zh:'連接詞', tip_en:'and, but, because, so', tip_zh:'and、but、because、so' },
        { en:'Story parts', zh:'故事元素', tip_en:'setting, character, problem, ending', tip_zh:'場景、角色、問題、結局' },
      ],
      qs:[
        { q_en:'I like apples ___ bananas', q_zh:'我鍾意蘋果___香蕉', opts:[{en:'and',zh:'同'},{en:'but',zh:'但'},{en:'because',zh:'因為'},{en:'so',zh:'所以'}], a:0, learn_en:'and = 同', learn_zh:'and = 同' },
        { q_en:'I studied hard ___ the exam was easy', q_zh:'我努力溫書___考試好易', opts:[{en:'because',zh:'因為'},{en:'but',zh:'但'},{en:'so',zh:'所以'},{en:'or',zh:'或者'}], a:2, learn_en:'so = 所以', learn_zh:'so = 所以' },
        { q_en:'She ___ her homework already', q_zh:'佢已經做完功課', opts:[{en:'has done',zh:'做完'},{en:'do',zh:'做'},{en:'did',zh:'做咗'},{en:'does',zh:'做'}], a:0, learn_en:'has done = 已經做完', learn_zh:'has done = 已經做完' },
      ]
    },
    P5: {
      cards:[
        { en:'Passive voice', zh:'被動語態', tip_en:'The ball was kicked by me', tip_zh:'The ball was kicked by me' },
        { en:'Relative clauses', zh:'關係子句', tip_en:'the boy who runs fast', tip_zh:'the boy who runs fast' },
        { en:'Vocabulary: feelings', zh:'心情詞彙', tip_en:'happy, excited, nervous, proud', tip_zh:'開心、興奮、緊張、自豪' },
      ],
      qs:[
        { q_en:'The cake ___ by my mum', q_zh:'個蛋糕係我媽媽整嘅', opts:[{en:'was made',zh:'被整'},{en:'made',zh:'整'},{en:'makes',zh:'整'},{en:'is make',zh:'被整'}], a:0, learn_en:'was made = 被整', learn_zh:'was made = 被動' },
        { q_en:'The boy ___ is my friend runs fast', q_zh:'跑得快嘅男孩係我朋友', opts:[{en:'who',zh:'（人）'},{en:'which',zh:'（物）'},{en:'where',zh:'（地）'},{en:'when',zh:'（時）'}], a:0, learn_en:'who for people', learn_zh:'who 用嚟講人' },
        { q_en:'How do you feel before an exam? ___', q_zh:'考試前你覺得？', opts:[{en:'nervous',zh:'緊張'},{en:'sleepy',zh:'眼瞓'},{en:'angry',zh:'嬲'},{en:'cold',zh:'凍'}], a:0, learn_en:'nervous = 緊張', learn_zh:'nervous = 緊張' },
      ]
    },
    P6: {
      cards:[
        { en:'Conditionals', zh:'條件句', tip_en:'If it rains, I will stay home', tip_zh:'If it rains, I will stay home' },
        { en:'Reported speech', zh:'轉述句', tip_en:'She said she was happy', tip_zh:'She said she was happy' },
        { en:'Planning a story', zh:'故事計劃', tip_en:'beginning, middle, end', tip_zh:'開頭、中間、結尾' },
      ],
      qs:[
        { q_en:'If it rains tomorrow, I ___ home', q_zh:'如果聽日落雨，我留喺屋企', opts:[{en:'will stay',zh:'會留'},{en:'stay',zh:'留'},{en:'stayed',zh:'留咗'},{en:'staying',zh:'留緊'}], a:0, learn_en:'will + verb for future', learn_zh:'will + 動詞 = 未來' },
        { q_en:'She said that she ___ tired', q_zh:'佢話佢攰', opts:[{en:'was',zh:'係'},{en:'is',zh:'係'},{en:'be',zh:'係'},{en:'were',zh:'係'}], a:0, learn_en:'was = past in reported speech', learn_zh:'轉述用 was' },
        { q_en:'A good story has a beginning, ___, and end', q_zh:'好故事有開頭、___同結尾', opts:[{en:'middle',zh:'中間'},{en:'colour',zh:'顏色'},{en:'number',zh:'數字'},{en:'question',zh:'問題'}], a:0, learn_en:'middle = 中間', learn_zh:'middle = 中間' },
      ]
    }
  },

  // ---------- MATH (EDB 2017) ----------
  math: {
    P1: {
      cards:[
        { en:'Numbers to 20', zh:'20 以內的數', tip_en:'count 1-20, before / after', tip_zh:'數 1-20，之前／之後' },
        { en:'Add & take away', zh:'加與減', tip_en:'2+3=5, 5-1=4', tip_zh:'2+3=5、5-1=4' },
        { en:'Shapes', zh:'圖形', tip_en:'circle, square, triangle, rectangle', tip_zh:'圓形、正方形、三角形、長方形' },
      ],
      qs:[
        { q_en:'3 + 2 = ?', q_zh:'3 + 2 = ?', opts:[{en:'4',zh:'4'},{en:'5',zh:'5'},{en:'6',zh:'6'},{en:'7',zh:'7'}], a:1, learn_en:'3+2=5', learn_zh:'3+2=5' },
        { q_en:'What comes after 9?', q_zh:'9 之後係？', opts:[{en:'8',zh:'8'},{en:'10',zh:'10'},{en:'11',zh:'11'},{en:'12',zh:'12'}], a:1, learn_en:'After 9 = 10', learn_zh:'9 之後 = 10' },
        { q_en:'Which shape has 3 sides?', q_zh:'邊個圖形有 3 邊？', opts:[{en:'Circle',zh:'圓形'},{en:'Square',zh:'正方形'},{en:'Triangle',zh:'三角形'},{en:'Star',zh:'星形'}], a:2, learn_en:'Triangle = 3 sides', learn_zh:'三角形 = 3 邊' },
      ]
    },
    P2: {
      cards:[
        { en:'Numbers to 1000', zh:'三位數', tip_en:'100-999, hundreds/tens/ones', tip_zh:'100-999，百、十、個位' },
        { en:'Multiplication', zh:'乘法', tip_en:'2x3=6 (2 groups of 3)', tip_zh:'2x3=6（2 組 3 個）' },
        { en:'Quadrilaterals', zh:'四邊形', tip_en:'square, rectangle, rhombus', tip_zh:'正方形、長方形、菱形' },
      ],
      qs:[
        { q_en:'4 x 2 = ?', q_zh:'4 x 2 = ?', opts:[{en:'6',zh:'6'},{en:'8',zh:'8'},{en:'9',zh:'9'},{en:'10',zh:'10'}], a:1, learn_en:'4x2=8', learn_zh:'4x2=8' },
        { q_en:'Which number is 200+50+3?', q_zh:'200+50+3 = ?', opts:[{en:'253',zh:'253'},{en:'2503',zh:'2503'},{en:'235',zh:'235'},{en:'325',zh:'325'}], a:0, learn_en:'253', learn_zh:'253' },
        { q_en:'A square has ___ equal sides', q_zh:'正方形有___條相等嘅邊', opts:[{en:'2',zh:'2'},{en:'3',zh:'3'},{en:'4',zh:'4'},{en:'5',zh:'5'}], a:2, learn_en:'square = 4 equal sides', learn_zh:'正方形 = 4 條相等邊' },
      ]
    },
    P3: {
      cards:[
        { en:'Four-digit numbers', zh:'四位數', tip_en:'1,000-9,999, thousands place', tip_zh:'1,000-9,999，千位' },
        { en:'Division', zh:'除法', tip_en:'6÷2=3 (share equally)', tip_zh:'6÷2=3（平均分）' },
        { en:'Time: seconds', zh:'時間：秒', tip_en:'60 seconds = 1 minute', tip_zh:'60 秒 = 1 分鐘' },
      ],
      qs:[
        { q_en:'12 ÷ 3 = ?', q_zh:'12 ÷ 3 = ?', opts:[{en:'3',zh:'3'},{en:'4',zh:'4'},{en:'6',zh:'6'},{en:'9',zh:'9'}], a:1, learn_en:'12÷3=4', learn_zh:'12÷3=4' },
        { q_en:'60 seconds = ___ minute(s)', q_zh:'60 秒 = ___ 分鐘', opts:[{en:'1',zh:'1'},{en:'2',zh:'2'},{en:'30',zh:'30'},{en:'60',zh:'60'}], a:0, learn_en:'60s = 1 min', learn_zh:'60 秒 = 1 分鐘' },
        { q_en:'Which is 4 digits?', q_zh:'邊個係四位數？', opts:[{en:'999',zh:'999'},{en:'1000',zh:'1000'},{en:'100',zh:'100'},{en:'99',zh:'99'}], a:1, learn_en:'1000 has 4 digits', learn_zh:'1000 係四位數' },
      ]
    },
    P4: {
      cards:[
        { en:'Factors & multiples', zh:'倍數和因數', tip_en:'factors of 12: 1,2,3,4,6,12', tip_zh:'12 嘅因數：1,2,3,4,6,12' },
        { en:'Fractions (2)', zh:'分數（二）', tip_en:'½ + ¼ = ¾', tip_zh:'½ + ¼ = ¾' },
        { en:'Area & perimeter', zh:'面積和周界', tip_en:'perimeter = around, area = inside', tip_zh:'周界 = 周圍，面積 = 裏面' },
      ],
      qs:[
        { q_en:'Factors of 6 are: 1,2,3,__', q_zh:'6 嘅因數：1,2,3,___', opts:[{en:'4',zh:'4'},{en:'6',zh:'6'},{en:'8',zh:'8'},{en:'12',zh:'12'}], a:1, learn_en:'6÷6=1 so 6 is a factor', learn_zh:'6÷6=1，6 係因數' },
        { q_en:'½ + ¼ = ?', q_zh:'½ + ¼ = ?', opts:[{en:'⅔',zh:'⅔'},{en:'¾',zh:'¾'},{en:'½',zh:'½'},{en:'¼',zh:'¼'}], a:1, learn_en:'¾', learn_zh:'¾' },
        { q_en:'A square with side 3cm has perimeter ___ cm', q_zh:'邊長 3cm 嘅正方形周界 = ___ cm', opts:[{en:'6',zh:'6'},{en:'9',zh:'9'},{en:'12',zh:'12'},{en:'3',zh:'3'}], a:2, learn_en:'3x4=12', learn_zh:'3x4=12' },
      ]
    },
    P5: {
      cards:[
        { en:'Fractions (3-5)', zh:'分數（三-五）', tip_en:'add unlike denominators: ½+⅓ = ⅚', tip_zh:'異分母加減：½+⅓ = ⅚' },
        { en:'Decimals', zh:'小數', tip_en:'0.5 = ½, 0.25 = ¼', tip_zh:'0.5 = ½、0.25 = ¼' },
        { en:'Algebra basics', zh:'代數初步', tip_en:'a + 3 = 5, so a = 2', tip_zh:'a + 3 = 5，a = 2' },
      ],
      qs:[
        { q_en:'0.5 as a fraction is ___', q_zh:'0.5 用分數寫係___', opts:[{en:'¼',zh:'¼'},{en:'½',zh:'½'},{en:'¾',zh:'¾'},{en:'⅕',zh:'⅕'}], a:1, learn_en:'0.5 = ½', learn_zh:'0.5 = ½' },
        { q_en:'a + 3 = 5. a = ?', q_zh:'a + 3 = 5。a = ?', opts:[{en:'1',zh:'1'},{en:'2',zh:'2'},{en:'3',zh:'3'},{en:'8',zh:'8'}], a:1, learn_en:'a=2', learn_zh:'a=2' },
        { q_en:'½ + ⅓ = ?', q_zh:'½ + ⅓ = ?', opts:[{en:'⅔',zh:'⅔'},{en:'⅚',zh:'⅚'},{en:'⅕',zh:'⅕'},{en:'1',zh:'1'}], a:1, learn_en:'⅚', learn_zh:'⅚' },
      ]
    },
    P6: {
      cards:[
        { en:'Percentages', zh:'百分數', tip_en:'50% = ½, 25% = ¼', tip_zh:'50% = ½、25% = ¼' },
        { en:'Speed & rate', zh:'速率', tip_en:'speed = distance ÷ time', tip_zh:'速度 = 距離 ÷ 時間' },
        { en:'Circle & equations', zh:'圓和方程', tip_en:'π, r, diameter; 2x+1=7', tip_zh:'π、半徑、直徑；2x+1=7' },
      ],
      qs:[
        { q_en:'50% of 20 = ?', q_zh:'20 嘅 50% = ?', opts:[{en:'5',zh:'5'},{en:'10',zh:'10'},{en:'15',zh:'15'},{en:'20',zh:'20'}], a:1, learn_en:'50% = half = 10', learn_zh:'50% = 一半 = 10' },
        { q_en:'A car travels 60km in 1 hour. Speed = ?', q_zh:'車 1 小時行 60km。速度 = ?', opts:[{en:'30km/h',zh:'30公里/小時'},{en:'60km/h',zh:'60公里/小時'},{en:'120km/h',zh:'120公里/小時'},{en:'10km/h',zh:'10公里/小時'}], a:1, learn_en:'speed = 60÷1 = 60', learn_zh:'速度 = 60÷1 = 60' },
        { q_en:'2x + 1 = 7. x = ?', q_zh:'2x + 1 = 7。x = ?', opts:[{en:'2',zh:'2'},{en:'3',zh:'3'},{en:'4',zh:'4'},{en:'5',zh:'5'}], a:1, learn_en:'2x=6, x=3', learn_zh:'2x=6，x=3' },
      ]
    }
  },

  // ---------- CHINESE (EDB) ----------
  chi: {
    P1: {
      cards:[
        { en:'Basic strokes', zh:'基本筆順', tip_en:'橫、直、撇、捺', tip_zh:'由左至右，由上至下' },
        { en:'Radicals', zh:'部首', tip_en:'氵(水)、亻(人)、木', tip_zh:'氵、亻、木 都係常見部首' },
        { en:'Simple sentences', zh:'簡單句子', tip_en:'我係學生。你食蘋果。', tip_zh:'主語 + 謂語 + 賓語' },
      ],
      qs:[
        { q_en:'「木」加一笔可以变成___', q_zh:'「木」加一笔可以变成___', opts:[{en:'本',zh:'本'},{en:'水',zh:'水'},{en:'火',zh:'火'},{en:'土',zh:'土'}], a:0, learn_en:'木 + 一 = 本', learn_zh:'木 + 一橫 = 本' },
        { q_en:'「氵」是甚麼部首？', q_zh:'「氵」是甚麼部首？', opts:[{en:'水',zh:'水'},{en:'火',zh:'火'},{en:'木',zh:'木'},{en:'金',zh:'金'}], a:0, learn_en:'氵 = 水', learn_zh:'氵 = 水' },
        { q_en:'邊個句子正確？', q_zh:'邊個句子正確？', opts:[{en:'我食蘋果。',zh:'我食蘋果。'},{en:'蘋果我食。',zh:'蘋果我食。'},{en:'食我蘋果。',zh:'食我蘋果。'},{en:'蘋果食我。',zh:'蘋果食我。'}], a:0, learn_en:'主語+謂語+賓語', learn_zh:'我(主)+食(謂)+蘋果(賓)' },
      ]
    },
    P2: {
      cards:[
        { en:'Measure words', zh:'量詞', tip_en:'一隻貓、一條河、一張紙', tip_zh:'隻、條、張 等量詞' },
        { en:'Similes', zh:'比喻句', tip_en:'妹妹的臉紅得像蘋果。', tip_zh:'把A比作B' },
        { en:'Poems', zh:'詩歌', tip_en:'《春曉》《靜夜思》', tip_zh:'背誦唐詩' },
      ],
      qs:[
        { q_en:'一___貓', q_zh:'一___貓', opts:[{en:'隻',zh:'隻'},{en:'條',zh:'條'},{en:'張',zh:'張'},{en:'個',zh:'個'}], a:0, learn_en:'一隻貓', learn_zh:'一隻貓' },
        { q_en:'「妹妹的臉紅得像___」', q_zh:'「妹妹的臉紅得像___」', opts:[{en:'蘋果',zh:'蘋果'},{en:'天空',zh:'天空'},{en:'河水',zh:'河水'},{en:'石頭',zh:'石頭'}], a:0, learn_en:'紅蘋果 = 臉紅', learn_zh:'比喻：臉紅如蘋果' },
        { q_en:'「春眠不覺曉」下一句是？', q_zh:'「春眠不覺曉」下一句是？', opts:[{en:'處處聞啼鳥',zh:'處處聞啼鳥'},{en:'花落知多少',zh:'花落知多少'},{en:'床前明月光',zh:'床前明月光'},{en:'疑是地上霜',zh:'疑是地上霜'}], a:0, learn_en:'孟浩然《春曉》', learn_zh:'處處聞啼鳥' },
      ]
    },
    P3: {
      cards:[
        { en:'Reading parts', zh:'閱讀理解', tip_en:'時、地、人、事、物', tip_zh:'時間、地點、人物、事件' },
        { en:'Paragraph meaning', zh:'段落大意', tip_en:'找中心句', tip_zh:'搵出段落重點' },
        { en:'Personification', zh:'擬人法', tip_en:'小鳥在唱歌。', tip_zh:'把物當人寫' },
      ],
      qs:[
        { q_en:'「小鳥在唱歌」用了甚麼手法？', q_zh:'「小鳥在唱歌」用了甚麼手法？', opts:[{en:'擬人',zh:'擬人'},{en:'比喻',zh:'比喻'},{en:'排比',zh:'排比'},{en:'誇張',zh:'誇張'}], a:0, learn_en:'bird sings = person does', learn_zh:'鳥唔會唱歌，係擬人' },
        { q_en:'一段文字的中心句通常喺邊度？', q_zh:'一段文字的中心句通常喺邊度？', opts:[{en:'段首',zh:'段首'},{en:'段尾',zh:'段尾'},{en:'中間',zh:'中間'},{en:'標題',zh:'標題'}], a:0, learn_en:'usually first sentence', learn_zh:'多數喺段首' },
        { q_en:'「月亮姐姐笑」用了___', q_zh:'「月亮姐姐笑」用了___', opts:[{en:'擬人',zh:'擬人'},{en:'比喻',zh:'比喻'},{en:'對比',zh:'對比'},{en:'頂真',zh:'頂真'}], a:0, learn_en:'moon = sister = person', learn_zh:'月亮叫姐姐 = 擬人' },
      ]
    },
    P4: {
      cards:[
        { en:'Narrative elements', zh:'記敘文六要素', tip_en:'時、地、人、事、因、果', tip_zh:'時間、地點、人物、起因、經過、結果' },
        { en:'Rhetoric review', zh:'修辭複習', tip_en:'比喻、擬人、排比、誇張', tip_zh:'四種常見修辭' },
        { en:'Idioms', zh:'成語', tip_en:'畫蛇添足、守株待兔', tip_zh:'背中學常用成語' },
      ],
      qs:[
        { q_en:'記敘文六要素不包括？', q_zh:'記敘文六要素不包括？', opts:[{en:'修辭',zh:'修辭'},{en:'時間',zh:'時間'},{en:'地點',zh:'地點'},{en:'人物',zh:'人物'}], a:0, learn_en:'rhetoric is not one of the six', learn_zh:'六要素：時地人事因果' },
        { q_en:'「飛流直下三千尺」用了___', q_zh:'「飛流直下三千尺」用了___', opts:[{en:'誇張',zh:'誇張'},{en:'比喻',zh:'比喻'},{en:'擬人',zh:'擬人'},{en:'排比',zh:'排比'}], a:0, learn_en:'三千尺 = exaggeration', learn_zh:'三千尺 = 誇張' },
        { q_en:'「守株待兔」比喻甚麼？', q_zh:'「守株待兔」比喻甚麼？', opts:[{en:'不勞而獲',zh:'不勞而獲'},{en:'勤奮',zh:'勤奮'},{en:'助人',zh:'助人'},{en:'環保',zh:'環保'}], a:0, learn_en:'wait for luck without work', learn_zh:'等運到、唔肯努力' },
      ]
    },
    P5: {
      cards:[
        { en:'Expository writing', zh:'說明文', tip_en:'介紹事物：形狀、功能、種類', tip_zh:'說明方法：舉例子、比較、分類' },
        { en:'Idioms advanced', zh:'成語進階', tip_en:'一舉兩得、百發百中', tip_zh:'成語運用' },
        { en:'Reading strategy', zh:'閱讀策略', tip_en:'預測、提問、總結', tip_zh:'預測、提問、總結' },
      ],
      qs:[
        { q_en:'說明文常用的說明方法係？', q_zh:'說明文常用的說明方法係？', opts:[{en:'舉例子、比較',zh:'舉例子、比較'},{en:'對話',zh:'對話'},{en:'日記',zh:'日記'},{en:'詩歌',zh:'詩歌'}], a:0, learn_en:'examples and comparisons', learn_zh:'舉例、比較' },
        { q_en:'「一舉兩得」意思係？', q_zh:'「一舉兩得」意思係？', opts:[{en:'做一件事得到兩個好處',zh:'做一件事得到兩個好處'},{en:'一齊做兩件事',zh:'一齊做兩件事'},{en:'做兩件事無好處',zh:'做兩件事無好處'},{en:'一次成功',zh:'一次成功'}], a:0, learn_en:'one action, two gains', learn_zh:'一件事、兩個好處' },
        { q_en:'閱讀時，先預測內容係邊個策略？', q_zh:'閱讀時，先預測內容係邊個策略？', opts:[{en:'預測',zh:'預測'},{en:'背誦',zh:'背誦'},{en:'抄寫',zh:'抄寫'},{en:'默書',zh:'默書'}], a:0, learn_en:'predict before reading', learn_zh:'睇之前先預測' },
      ]
    },
    P6: {
      cards:[
        { en:'Argumentative writing', zh:'議論文', tip_en:'提出觀點、舉證、結論', tip_zh:'觀點+論據+結論' },
        { en:'Comprehensive skills', zh:'綜合能力', tip_en:'聆聽、說話、閱讀、寫作', tip_zh:'四項語言能力' },
        { en:'Exam tips', zh:'考試貼士', tip_en:'先易後難、檢查', tip_zh:'先易後難、留時間檢查' },
      ],
      qs:[
        { q_en:'議論文最基本嘅三部分？', q_zh:'議論文最基本嘅三部分？', opts:[{en:'觀點、論據、結論',zh:'觀點、論據、結論'},{en:'時間、地點、人物',zh:'時間、地點、人物'},{en:'開頭、中段、結尾',zh:'開頭、中段、結尾'},{en:'詩、詞、曲',zh:'詩、詞、曲'}], a:0, learn_en:'point, evidence, conclusion', learn_zh:'觀點+論據+結論' },
        { q_en:'做卷嘅好習慣係？', q_zh:'做卷嘅好習慣係？', opts:[{en:'先易後難，留時間檢查',zh:'先易後難，留時間檢查'},{en:'淨係做第一題',zh:'淨係做第一題'},{en:'唔檢查',zh:'唔檢查'},{en:'抄答案',zh:'抄答案'}], a:0, learn_en:'easy first, check later', learn_zh:'先易後難' },
        { q_en:'聆聽理解時，要點樣做？', q_zh:'聆聽理解時，要點樣做？', opts:[{en:'抓關鍵詞',zh:'抓關鍵詞'},{en:'每個字抄低',zh:'每個字抄低'},{en:'唔聽',zh:'唔聽'},{en:'淨係睇圖',zh:'淨係睇圖'}], a:0, learn_en:'catch key words', learn_zh:'抓關鍵詞' },
      ]
    }
  },

  // ---------- SCIENCE ----------
  sci: {
    P1: { cards:[{en:'My senses',zh:'五官',tip_en:'see, hear, smell, taste, touch',tip_zh:'睇、聽、聞、舐、摸'},{en:'Materials',zh:'材料',tip_en:'wood, metal, plastic, paper',tip_zh:'木、金屬、塑膠、紙'},{en:'Living & non-living',zh:'生物與非生物',tip_en:'plants and animals are living',tip_zh:'植物同動物係生物'}], qs:[
      {q_en:'We taste with our ___,',q_zh:'我用___嚟試味',opts:[{en:'tongue',zh:'舌頭'},{en:'nose',zh:'鼻'},{en:'ear',zh:'耳'},{en:'hand',zh:'手'}],a:0,learn_en:'tongue = taste',learn_zh:'舌頭 = 味覺'},
      {q_en:'Which is living?',q_zh:'邊個係生物？',opts:[{en:'Dog',zh:'狗'},{en:'Rock',zh:'石'},{en:'Chair',zh:'椅'},{en:'Book',zh:'書'}],a:0,learn_en:'dog is living',learn_zh:'狗係生物'},
      {q_en:'A pencil is made of ___,',q_zh:'鉛筆係用___做',opts:[{en:'wood',zh:'木'},{en:'glass',zh:'玻璃'},{en:'metal',zh:'金屬'},{en:'ice',zh:'冰'}],a:0,learn_en:'wood',learn_zh:'木'},
    ]},
    P2: { cards:[{en:'Light & sound',zh:'光與聲',tip_en:'light travels, sound needs air',tip_zh:'光直線傳播；聲音需要空氣'},{en:'Magnets',zh:'磁石',tip_en:'attract metal, north & south poles',tip_zh:'吸金屬，有南北極'},{en:'Water',zh:'水',tip_en:'solid, liquid, gas',tip_zh:'固體、液體、氣體'}], qs:[
      {q_en:'Sound travels through ___,',q_zh:'聲音需要___傳播',opts:[{en:'air',zh:'空氣'},{en:'nothing',zh:'真空'},{en:'water only',zh:'只係水'},{en:'glass only',zh:'只係玻璃'}],a:0,learn_en:'sound needs air',learn_zh:'聲音需要空氣'},
      {q_en:'A magnet attracts ___,',q_zh:'磁石吸___',opts:[{en:'metal',zh:'金屬'},{en:'paper',zh:'紙'},{en:'wood',zh:'木'},{en:'plastic',zh:'塑膠'}],a:0,learn_en:'metal',learn_zh:'金屬'},
      {q_en:'Ice is water in ___ state',q_zh:'冰係水嘅___狀態',opts:[{en:'solid',zh:'固體'},{en:'liquid',zh:'液體'},{en:'gas',zh:'氣體'},{en:'plasma',zh:'等離子體'}],a:0,learn_en:'solid',learn_zh:'固體'},
    ]},
    P3: { cards:[{en:'Forces',zh:'力',tip_en:'push, pull, gravity',tip_zh:'推、拉、重力'},{en:'Plants',zh:'植物',tip_en:'roots, stem, leaves',tip_zh:'根、莖、葉'},{en:'Heat',zh:'熱',tip_en:'hot and cold, conduction',tip_zh:'熱同冷、傳導'}], qs:[
      {q_en:'Gravity pulls things ___,',q_zh:'重力將物件拉向___',opts:[{en:'down',zh:'向下'},{en:'up',zh:'向上'},{en:'sideways',zh:'側邊'},{en:'nowhere',zh:'無'}], a:0, learn_en:'down', learn_zh:'向下'},
      {q_en:'Which part takes in water?',q_zh:'植物邊部分吸水？',opts:[{en:'Roots',zh:'根'},{en:'Leaves',zh:'葉'},{en:'Flowers',zh:'花'},{en:'Fruit',zh:'果'}],a:0,learn_en:'roots',learn_zh:'根'},
      {q_en:'A metal spoon feels hot in soup. Heat moved by ___,',q_zh:'金屬匙在湯入面變熱，熱傳導方式係___',opts:[{en:'conduction',zh:'傳導'},{en:'convection',zh:'對流'},{en:'radiation',zh:'輻射'},{en:'evaporation',zh:'蒸發'}],a:0,learn_en:'conduction',learn_zh:'傳導'},
    ]},
    P4: { cards:[{en:'Matter states',zh:'物態',tip_en:'solid, liquid, gas; melting, freezing',tip_zh:'固體、液體、氣體；熔化和凝固'},{en:'Energy',zh:'能量',tip_en:'light, heat, sound, electrical',tip_zh:'光、熱、聲、電'},{en:'Electric circuits',zh:'電路',tip_en:'battery, wire, bulb',tip_zh:'電池、電線、燈泡'}], qs:[
      {q_en:'Water vapour is water in ___ state',q_zh:'水蒸氣係水嘅___狀態',opts:[{en:'gas',zh:'氣體'},{en:'solid',zh:'固體'},{en:'liquid',zh:'液體'},{en:'metal',zh:'金屬'}],a:0,learn_en:'gas',learn_zh:'氣體'},
      {q_en:'Which needs a battery?',q_zh:'邊個需要電池？',opts:[{en:'Torch',zh:'電筒'},{en:'Chair',zh:'椅'},{en:'Book',zh:'書'},{en:'Ball',zh:'波'}],a:0,learn_en:'torch',learn_zh:'電筒'},
      {q_en:'Ice melting is changing from ___ to ___',q_zh:'冰融化係由___變成___',opts:[{en:'solid → liquid',zh:'固體→液體'},{en:'liquid → gas',zh:'液體→氣體'},{en:'gas → solid',zh:'氣體→固體'},{en:'liquid → solid',zh:'液體→固體'}],a:0,learn_en:'solid to liquid',learn_zh:'固體變液體'},
    ]},
    P5: { cards:[{en:'Food chains',zh:'食物鏈',tip_en:'sun → plant → animal',tip_zh:'太陽→植物→動物'},{en:'Adaptation',zh:'適應',tip_en:'animals fit their habitat',tip_zh:'動物適應環境'},{en:'Solar system',zh:'太陽系',tip_en:'8 planets orbit the Sun',tip_zh:'八大行星圍住太陽轉'}], qs:[
      {q_en:'In a food chain, plants are ___,',q_zh:'食物鏈中，植物係___',opts:[{en:'producers',zh:'生產者'},{en:'consumers',zh:'消費者'},{en:'predators',zh:'獵食者'},{en:'decomposers',zh:'分解者'}],a:0,learn_en:'producers',learn_zh:'生產者'},
      {q_en:'A polar bear has thick fur for ___,',q_zh:'北極熊有厚毛，係為了___',opts:[{en:'warmth',zh:'保暖'},{en:'swimming',zh:'游水'},{en:'flying',zh:'飛'},{en:'climbing',zh:'爬樹'}],a:0,learn_en:'warmth',learn_zh:'保暖'},
      {q_en:'Which planet is closest to the Sun?',q_zh:'邊顆行星離太陽最近？',opts:[{en:'Mercury',zh:'水星'},{en:'Venus',zh:'金星'},{en:'Earth',zh:'地球'},{en:'Mars',zh:'火星'}],a:0,learn_en:'Mercury',learn_zh:'水星'},
    ]},
    P6: { cards:[{en:'Forces & pressure',zh:'力與壓力',tip_en:'pressure = force ÷ area',tip_zh:'壓力 = 力 ÷ 面積'},{en:'Light & mirrors',zh:'光與鏡',tip_en:'reflection, refraction',tip_zh:'反射、折射'},{en:'Electricity',zh:'電',tip_en:'series and parallel circuits',tip_zh:'串聯、並聯'}], qs:[
      {q_en:'A sharp pin has small area, so it has ___ pressure',q_zh:'尖針面積細，所以壓力___',opts:[{en:'large',zh:'大'},{en:'small',zh:'細'},{en:'zero',zh:'零'},{en:'negative',zh:'負'}],a:0,learn_en:'small area = large pressure',learn_zh:'面積細=壓強大'},
      {q_en:'A mirror shows ___ reflection',q_zh:'鏡係___反射',opts:[{en:'regular',zh:'規則'},{en:'diffuse',zh:'漫'},{en:'no',zh:'無'},{en:'colour',zh:'顏色'}],a:0,learn_en:'regular',learn_zh:'規則'},
      {q_en:'Bulbs in parallel are ___,',q_zh:'並聯嘅燈泡係___',opts:[{en:'brighter',zh:'較光'},{en:'dimmer',zh:'較暗'},{en:'off',zh:'熄'},{en:'broken',zh:'壞'}],a:0,learn_en:'parallel = brighter',learn_zh:'並聯較光'},
    ]}
  },

  // ---------- HUMANITIES ----------
  hum: {
    P1: { cards:[{en:'My family',zh:'我嘅家庭',tip_en:'mum, dad, siblings, love',tip_zh:'爸爸、媽媽、兄弟姊妹、愛'},{en:'My school',zh:'我嘅學校',tip_en:'classroom, teachers, friends',tip_zh:'課室、老師、朋友'},{en:'My community',zh:'我嘅社區',tip_en:'shops, parks, roads, police',tip_zh:'商店、公園、馬路、警察'}], qs:[
      {q_en:'Who teaches you at school?',q_zh:'喺學校邊個教你？',opts:[{en:'Teacher',zh:'老師'},{en:'Doctor',zh:'醫生'},{en:'Chef',zh:'廚師'},{en:'Pilot',zh:'機師'}],a:0,learn_en:'teacher',learn_zh:'老師'},
      {q_en:'We buy food from a ___,',q_zh:'我哋喺___買食物',opts:[{en:'shop',zh:'商店'},{en:'school',zh:'學校'},{en:'park',zh:'公園'},{en:'hospital',zh:'醫院'}],a:0,learn_en:'shop',learn_zh:'商店'},
      {q_en:'Who keeps us safe on the road?',q_zh:'邊個為我哋守護道路安全？',opts:[{en:'Police',zh:'警察'},{en:'Chef',zh:'廚師'},{en:'Teacher',zh:'老師'},{en:'Farmer',zh:'農夫'}],a:0,learn_en:'police',learn_zh:'警察'},
    ]},
    P2: { cards:[{en:'Rules & respect',zh:'規則與尊重',tip_en:'queue, share, listen',tip_zh:'排隊、分享、聆聽'},{en:'Jobs',zh:'職業',tip_en:'doctor, teacher, firefighter',tip_zh:'醫生、老師、消防員'},{en:'Weather',zh:'天氣',tip_en:'sunny, rainy, cloudy',tip_zh:'晴天、雨天、多雲'}], qs:[
      {q_en:'A ___ puts out fires',q_zh:'___撲救火',opts:[{en:'firefighter',zh:'消防員'},{en:'baker',zh:'麵包師'},{en:'singer',zh:'歌手'},{en:'driver',zh:'司機'}],a:0,learn_en:'firefighter',learn_zh:'消防員'},
      {q_en:'Which is a good rule at school?',q_zh:'邊個係學校嘅好規矩？',opts:[{en:'Listen to the teacher',zh:'聽老師說話'},{en:'Shout',zh:'大聲叫'},{en:'Run in class',zh:'課室跑步'},{en:'Fight',zh:'打架'}],a:0,learn_en:'listen',learn_zh:'聽話'},
      {q_en:'We take an umbrella on a ___ day',q_zh:'___日要帶遮',opts:[{en:'rainy',zh:'雨天'},{en:'sunny',zh:'晴天'},{en:'windy',zh:'風天'},{en:'snowy',zh:'雪天'}],a:0,learn_en:'rainy',learn_zh:'雨天'},
    ]},
    P3: { cards:[{en:'Ancient China',zh:'古代中國',tip_en:'4 great inventions, dynasties',tip_zh:'四大發明、朝代'},{en:'HK history',zh:'香港歷史',tip_en:'fishing village → big city',tip_zh:'由漁村變成大城市'},{en:'Directions & maps',zh:'方向與地圖',tip_en:'N, S, E, W; map symbols',tip_zh:'東南西北、地圖符號'}], qs:[
      {q_en:'The 4 Great Inventions include ___,',q_zh:'四大發明包括___',opts:[{en:'paper, printing, compass, gunpowder',zh:'造紙、印刷、指南針、火藥'},{en:'cars, planes, phones, TVs',zh:'車、飛機、電話、電視'},{en:'rice, tea, silk, cotton',zh:'米、茶、絲、棉花'},{en:'gold, silver, iron, wood',zh:'金、銀、鐵、木'}],a:0,learn_en:'4 great inventions',learn_zh:'四大發明'},
      {q_en:'Hong Kong used to be a ___,',q_zh:'香港以前係一個___',opts:[{en:'fishing village',zh:'漁村'},{en:'desert',zh:'沙漠'},{en:'snow city',zh:'雪城'},{en:'forest',zh:'森林'}],a:0,learn_en:'fishing village',learn_zh:'漁村'},
      {q_en:'The Sun rises in the ___',q_zh:'太陽從___升起',opts:[{en:'east',zh:'東'},{en:'west',zh:'西'},{en:'north',zh:'北'},{en:'south',zh:'南'}],a:0,learn_en:'east',learn_zh:'東'},
    ]},
    P4: { cards:[{en:'HK districts',zh:'香港區域',tip_en:'18 districts: Central, Kowloon, NT',tip_zh:'18區：港島、九龍、新界'},{en:'Famous places',zh:'名勝',tip_en:'Victoria Harbour, Big Buddha, Peak',tip_zh:'維港、大佛、太平山'},{en:'Festivals',zh:'節日',tip_en:'CNY, Mid-Autumn, Dragon Boat',tip_zh:'農曆新年、中秋、端午'}], qs:[
      {q_en:'Hong Kong has ___ districts',q_zh:'香港有___個區域',opts:[{en:'18',zh:'18'},{en:'10',zh:'10'},{en:'24',zh:'24'},{en:'32',zh:'32'}],a:0,learn_en:'18',learn_zh:'18'},
      {q_en:'Victoria Harbour is in ___,',q_zh:'維多利亞港喺___',opts:[{en:'Hong Kong',zh:'香港'},{en:'Tokyo',zh:'東京'},{en:'Seoul',zh:'首爾'},{en:'Bangkok',zh:'曼谷'}],a:0,learn_en:'Hong Kong',learn_zh:'香港'},
      {q_en:'Mid-Autumn Festival we eat ___',q_zh:'中秋節食___',opts:[{en:'mooncakes',zh:'月餅'},{en:'dumplings',zh:'餃子'},{en:'zongzi',zh:'糉'},{en:'tangyuan',zh:'湯圓'}],a:0,learn_en:'mooncakes',learn_zh:'月餅'},
    ]},
    P5: { cards:[{en:'China geography',zh:'中國地理',tip_en:'rivers, mountains, provinces',tip_zh:'河流、山脈、省份'},{en:'World continents',zh:'世界七大洲',tip_en:'Asia, Europe, Africa, ...',tip_zh:'亞洲、歐洲、非洲…'},{en:'Rights & duties',zh:'權利與責任',tip_en:'right to learn, duty to respect',tip_zh:'學習權利、尊重責任'}], qs:[
      {q_en:'The longest river in China is ___,',q_zh:'中國最長嘅河流係___',opts:[{en:'Yangtze River',zh:'長江'},{en:'Yellow River',zh:'黃河'},{en:'Pearl River',zh:'珠江'},{en:'Mekong',zh:'湄公河'}],a:0,learn_en:'Yangtze',learn_zh:'長江'},
      {q_en:'How many continents are there?',q_zh:'世界上有___個大洲？',opts:[{en:'7',zh:'7'},{en:'5',zh:'5'},{en:'6',zh:'6'},{en:'8',zh:'8'}],a:0,learn_en:'7',learn_zh:'7'},
      {q_en:'A right of children is ___,',q_zh:'小朋友嘅權利包括___',opts:[{en:'to learn and play',zh:'學習和遊玩'},{en:'to fight',zh:'打架'},{en:'to steal',zh:'偷竊'},{en:'to shout',zh:'大叫'}],a:0,learn_en:'learn and play',learn_zh:'學習和遊玩'},
    ]},
    P6: { cards:[{en:'Global issues',zh:'全球議題',tip_en:'climate change, conservation',tip_zh:'氣候變化、環保'},{en:'Famous people',zh:'名人',tip_en:'scientists, artists, leaders',tip_zh:'科學家、藝術家、領袖'},{en:'My future',zh:'我嘅未來',tip_en:'career dreams, goals',tip_zh:'職業夢想、目標'}], qs:[
      {q_en:'Which helps the Earth?',q_zh:'邊個對地球好？',opts:[{en:'Recycling',zh:'回收'},{en:'Littering',zh:'亂丟垃圾'},{en:'Cutting all trees',zh:'砍晒樹'},{en:'Burning plastic',zh:'燒塑膠'}],a:0,learn_en:'recycling',learn_zh:'回收'},
      {q_en:'A goal is ___,',q_zh:'目標係___',opts:[{en:'something you want to achieve',zh:'你想達成嘅事'},{en:'a game',zh:'一個遊戲'},{en:'a toy',zh:'一個玩具'},{en:'a colour',zh:'一個顏色'}],a:0,learn_en:'goal = achieve',learn_zh:'目標 = 想達成'},
      {q_en:'A scientist studies ___,',q_zh:'科學家研究___',opts:[{en:'how things work',zh:'事物如何運作'},{en:'only colours',zh:'只係顏色'},{en:'only music',zh:'只係音樂'},{en:'only sports',zh:'只係運動'}],a:0,learn_en:'how things work',learn_zh:'事物如何運作'},
    ]}
  },

  // ---------- MUSIC ----------
  mus: {
    P1: { cards:[{en:'Loud & soft',zh:'強弱',tip_en:'p = soft, f = loud',tip_zh:'p=細聲, f=大聲'},{en:'Fast & slow',zh:'快慢',tip_en:'allegro = fast, largo = slow',tip_zh:'快板、慢板'},{en:'Clapping rhythm',zh:'拍子',tip_en:'clap to the beat',tip_zh:'跟拍子拍手'}], qs:[
      {q_en:'p means ___,',q_zh:'p 係___',opts:[{en:'soft',zh:'細聲'},{en:'loud',zh:'大聲'},{en:'fast',zh:'快'},{en:'slow',zh:'慢'}],a:0,learn_en:'p=soft',learn_zh:'p=細聲'},
      {q_en:'f means ___,',q_zh:'f 係___',opts:[{en:'loud',zh:'大聲'},{en:'soft',zh:'細聲'},{en:'slow',zh:'慢'},{en:'stop',zh:'停'}],a:0,learn_en:'f=loud',learn_zh:'f=大聲'},
      {q_en:'Allegro is ___,',q_zh:'Allegro 係___',opts:[{en:'fast',zh:'快'},{en:'slow',zh:'慢'},{en:'soft',zh:'細'},{en:'loud',zh:'大'}],a:0,learn_en:'fast',learn_zh:'快'},
    ]},
    P2: { cards:[{en:'Instruments',zh:'樂器',tip_en:'piano, violin, flute, drum',tip_zh:'鋼琴、小提琴、笛、鼓'},{en:'Families of instruments',zh:'樂器家族',tip_en:'strings, woodwind, brass, percussion',tip_zh:'弦樂、木管、銅管、敲擊'},{en:'High & low sounds',zh:'高低音',tip_en:'high = thin, low = deep',tip_zh:'高音=細，低音=深'}], qs:[
      {q_en:'A piano is a ___ instrument',q_zh:'鋼琴係___樂器',opts:[{en:'string/percussion',zh:'弦樂/敲擊'},{en:'brass',zh:'銅管'},{en:'woodwind',zh:'木管'},{en:'none',zh:'唔係'}],a:0,learn_en:'piano = string + percussion',learn_zh:'鋼琴=弦+敲擊'},
      {q_en:'A flute is a ___ instrument',q_zh:'長笛係___樂器',opts:[{en:'woodwind',zh:'木管'},{en:'brass',zh:'銅管'},{en:'string',zh:'弦樂'},{en:'percussion',zh:'敲擊'}],a:0,learn_en:'woodwind',learn_zh:'木管'},
      {q_en:'A drum makes ___ sounds',q_zh:'鼓發出___聲',opts:[{en:'low',zh:'低'},{en:'high',zh:'高'},{en:'soft',zh:'細'},{en:'none',zh:'無'}],a:0,learn_en:'low',learn_zh:'低'},
    ]},
    P3: { cards:[{en:'Rhythm patterns',zh:'節奏型',tip_en:'ta, ti-ti, rest',tip_zh:'ta、ti-ti、休止'},{en:'Pitch',zh:'音高',tip_en:'do, re, mi, fa, sol, la, ti',tip_zh:'音階唱名'},{en:'Singing',zh:'唱歌',tip_en:'breathe, listen, blend',tip_zh:'呼吸、聆聽、和聲'}], qs:[
      {q_en:'do, re, mi are ___,',q_zh:'do re mi 係___',opts:[{en:'solfège',zh:'唱名'},{en:'instruments',zh:'樂器'},{en:'rhythms',zh:'節奏'},{en:'composers',zh:'作曲家'}],a:0,learn_en:'solfège',learn_zh:'唱名'},
      {q_en:'A rest means ___',q_zh:'休止符係___',opts:[{en:'silence',zh:'靜音'},{en:'loud',zh:'大聲'},{en:'fast',zh:'快'},{en:'high',zh:'高'}],a:0,learn_en:'rest = silence',learn_zh:'休止 = 靜音'},
      {q_en:'ta and ti-ti are ___',q_zh:'ta 同 ti-ti 係___',opts:[{en:'rhythm patterns',zh:'節奏型'},{en:'pitches',zh:'音高'},{en:'instruments',zh:'樂器'},{en:'songs',zh:'歌'}],a:0,learn_en:'rhythm patterns',learn_zh:'節奏型'},
    ]},
    P4: { cards:[{en:'Reading music',zh:'讀譜',tip_en:'treble clef, staff lines',tip_zh:'高音譜號、五線譜'},{en:'Time signatures',zh:'拍號',tip_en:'4/4 = four beats',tip_zh:'4/4 = 四拍'},{en:'Music history',zh:'音樂歷史',tip_en:'Bach, Mozart, Beethoven',tip_zh:'巴哈、莫札特、貝多芬'}], qs:[
      {q_en:'4/4 means ___ beats per bar',q_zh:'4/4 即係每小節___拍',opts:[{en:'4',zh:'4'},{en:'2',zh:'2'},{en:'3',zh:'3'},{en:'8',zh:'8'}],a:0,learn_en:'4',learn_zh:'4'},
      {q_en:'Who wrote "Fur Elise"?',q_zh:'「致愛麗絲」邊個作曲？',opts:[{en:'Beethoven',zh:'貝多芬'},{en:'Mozart',zh:'莫札特'},{en:'Bach',zh:'巴哈'},{en:'Chopin',zh:'蕭邦'}],a:0,learn_en:'Beethoven',learn_zh:'貝多芬'},
      {q_en:'Treble clef is also called ___,',q_zh:'高音譜號又叫___',opts:[{en:'G clef',zh:'G 譜號'},{en:'F clef',zh:'F 譜號'},{en:'C clef',zh:'C 譜號'},{en:'D clef',zh:'D 譜號'}],a:0,learn_en:'G clef',learn_zh:'G 譜號'},
    ]},
    P5: { cards:[{en:'Chords',zh:'和弦',tip_en:'3+ notes together',tip_zh:'三個音以上一齊響'},{en:'Composers',zh:'作曲家',tip_en:'write music',tip_zh:'寫音樂嘅人'},{en:'Styles',zh:'風格',tip_en:'classical, jazz, pop',tip_zh:'古典、爵士、流行'}], qs:[
      {q_en:'A chord has at least ___ notes',q_zh:'一個和弦最少___個音',opts:[{en:'3',zh:'3'},{en:'1',zh:'1'},{en:'2',zh:'2'},{en:'10',zh:'10'}],a:0,learn_en:'3+',learn_zh:'3個以上'},
      {q_en:'Jazz music started in ___,',q_zh:'爵士樂起源於___',opts:[{en:'USA',zh:'美國'},{en:'UK',zh:'英國'},{en:'Japan',zh:'日本'},{en:'France',zh:'法國'}],a:0,learn_en:'USA',learn_zh:'美國'},
      {q_en:'A composer ___,',q_zh:'作曲家___',opts:[{en:'writes music',zh:'寫音樂'},{en:'only sings',zh:'只唱歌'},{en:'only plays',zh:'只演奏'},{en:'only listens',zh:'只聆聽'}],a:0,learn_en:'writes',learn_zh:'寫'},
    ]},
    P6: { cards:[{en:'Music forms',zh:'樂曲結構',tip_en:'binary, ternary, rondo',tip_zh:'二段體、三段體、迴旋曲'},{en:'World music',zh:'世界音樂',tip_en:'music from different cultures',tip_zh:'唔同文化嘅音樂'},{en:'Performance',zh:'演出',tip_en:'practice, focus, enjoy',tip_zh:'練習、專注、享受'}], qs:[
      {q_en:'AB is a ___ form',q_zh:'AB 係___結構',opts:[{en:'binary',zh:'二段體'},{en:'ternary',zh:'三段體'},{en:'rondo',zh:'迴旋曲'},{en:'sonata',zh:'奏鳴曲'}],a:0,learn_en:'binary = AB',learn_zh:'二段體=AB'},
      {q_en:'A rondo is usually ___,',q_zh:'迴旋曲通常係___',opts:[{en:'ABACA',zh:'ABACA'},{en:'AB',zh:'AB'},{en:'ABC',zh:'ABC'},{en:'AAAA',zh:'AAAA'}],a:0,learn_en:'ABACA',learn_zh:'ABACA'},
      {q_en:'Before a performance you should ___,',q_zh:'演出前應該___',opts:[{en:'practice',zh:'練習'},{en:'sleep',zh:'睡覺'},{en:'eat',zh:'食嘢'},{en:'run',zh:'跑步'}],a:0,learn_en:'practice',learn_zh:'練習'},
    ]}
  },

  // ---------- VISUAL ARTS ----------
  va: {
    P1: { cards:[{en:'Primary colours',zh:'三原色',tip_en:'red, yellow, blue',tip_zh:'紅、黃、藍'},{en:'Lines & shapes',zh:'線與形',tip_en:'straight, curved, zigzag',tip_zh:'直線、曲線、Z形線'},{en:'Drawing tools',zh:'畫具',tip_en:'crayon, pencil, paint',tip_zh:'蠟筆、鉛筆、顏料'}], qs:[
      {q_en:'Red + yellow = ___',q_zh:'紅 + 黃 = ___',opts:[{en:'orange',zh:'橙'},{en:'purple',zh:'紫'},{en:'green',zh:'綠'},{en:'blue',zh:'藍'}],a:0,learn_en:'orange',learn_zh:'橙'},
      {q_en:'A zigzag line looks like ___,',q_zh:'Z形線似___',opts:[{en:'zigzag line',zh:'Z形線'},{en:'-----',zh:'-----'},{en:'~',zh:'~'},{en:'O',zh:'O'}],a:0,learn_en:'zigzag',learn_zh:'Z形'},
      {q_en:'Which is a primary colour?',q_zh:'邊個係三原色之一？',opts:[{en:'Blue',zh:'藍'},{en:'Green',zh:'綠'},{en:'Purple',zh:'紫'},{en:'Orange',zh:'橙'}],a:0,learn_en:'blue',learn_zh:'藍'},
    ]},
    P2: { cards:[{en:'Mixing colours',zh:'混色',tip_en:'blue + yellow = green',tip_zh:'藍+黃=綠'},{en:'Textures',zh:'紋理',tip_en:'rough, smooth, soft',tip_zh:'粗糙、平滑、柔軟'},{en:'Collage',zh:'拼貼',tip_en:'cut and paste',tip_zh:'剪同貼'}], qs:[
      {q_en:'Blue + yellow = ___',q_zh:'藍 + 黃 = ___',opts:[{en:'green',zh:'綠'},{en:'red',zh:'紅'},{en:'purple',zh:'紫'},{en:'orange',zh:'橙'}],a:0,learn_en:'green',learn_zh:'綠'},
      {q_en:'A leaf feels ___',q_zh:'樹葉摸落係___',opts:[{en:'rough',zh:'粗糙'},{en:'smooth',zh:'平滑'},{en:'soft',zh:'柔軟'},{en:'hard',zh:'硬'}],a:0,learn_en:'rough',learn_zh:'粗糙'},
      {q_en:'Collage needs ___',q_zh:'拼貼需要___',opts:[{en:'scissors and glue',zh:'剪刀和膠水'},{en:'piano',zh:'鋼琴'},{en:'football',zh:'足球'},{en:'microscope',zh:'顯微鏡'}],a:0,learn_en:'scissors + glue',learn_zh:'剪刀+膠水'},
    ]},
    P3: { cards:[{en:'Warm & cool colours',zh:'冷暖色',tip_en:'warm: red/orange; cool: blue/green',tip_zh:'暖：紅橙；冷：藍綠'},{en:'Perspective',zh:'透視',tip_en:'far away = smaller',tip_zh:'遠嘅嘢較細'},{en:'Sculpture',zh:'雕塑',tip_en:'3D art',tip_zh:'立體藝術'}], qs:[
      {q_en:'Which is a warm colour?',q_zh:'邊個係暖色？',opts:[{en:'Red',zh:'紅'},{en:'Blue',zh:'藍'},{en:'Green',zh:'綠'},{en:'Purple',zh:'紫'}],a:0,learn_en:'red',learn_zh:'紅'},
      {q_en:'In perspective, far objects look ___,',q_zh:'透視中，遠嘅物件睇落___',opts:[{en:'smaller',zh:'較細'},{en:'bigger',zh:'較大'},{en:'same',zh:'一樣'},{en:'closer',zh:'較近'}],a:0,learn_en:'smaller',learn_zh:'較細'},
      {q_en:'Sculpture is ___ art',q_zh:'雕塑係___藝術',opts:[{en:'3D',zh:'3D'},{en:'2D',zh:'2D'},{en:'music',zh:'音樂'},{en:'film',zh:'電影'}],a:0,learn_en:'3D',learn_zh:'立體'},
    ]},
    P4: { cards:[{en:'Complementary colours',zh:'互補色',tip_en:'opposite on colour wheel',tip_zh:'色環上相對'},{en:'Famous artists',zh:'著名藝術家',tip_en:'Van Gogh, Picasso',tip_zh:'梵高、畢加索'},{en:'Manga',zh:'漫畫',tip_en:'characters, panels',tip_zh:'角色、分格'}], qs:[
      {q_en:'Complementary of red is ___,',q_zh:'紅色嘅互補色係___',opts:[{en:'green',zh:'綠'},{en:'blue',zh:'藍'},{en:'yellow',zh:'黃'},{en:'orange',zh:'橙'}],a:0,learn_en:'green',learn_zh:'綠'},
      {q_en:'"Starry Night" was painted by ___,',q_zh:'「星夜」係___畫嘅',opts:[{en:'Van Gogh',zh:'梵高'},{en:'Picasso',zh:'畢加索'},{en:'Monet',zh:'莫奈'},{en:'Da Vinci',zh:'達文西'}],a:0,learn_en:'Van Gogh',learn_zh:'梵高'},
      {q_en:'Manga is a style of ___',q_zh:'漫畫係___嘅一種',opts:[{en:'comic/illustration',zh:'漫畫/插畫'},{en:'sculpture',zh:'雕塑'},{en:'music',zh:'音樂'},{en:'dance',zh:'舞蹈'}],a:0,learn_en:'comic',learn_zh:'漫畫'},
    ]},
    P5: { cards:[{en:'Design principles',zh:'設計原則',tip_en:'balance, rhythm, contrast',tip_zh:'平衡、節奏、對比'},{en:'Art history',zh:'藝術史',tip_en:'Renaissance, Impressionism',tip_zh:'文藝復興、印象派'},{en:'Printmaking',zh:'版畫',tip_en:'carve, ink, print',tip_zh:'雕刻、上墨、印刷'}], qs:[
      {q_en:'Balance in art means ___,',q_zh:'藝術中嘅平衡指___',opts:[{en:'equal visual weight',zh:'視覺重量相等'},{en:'standing on one leg',zh:'企一隻腳'},{en:'dark colours',zh:'深色'},{en:'no colours',zh:'無色'}],a:0,learn_en:'equal visual weight',learn_zh:'視覺重量相等'},
      {q_en:'Impressionism started in ___,',q_zh:'印象派起源於___',opts:[{en:'France',zh:'法國'},{en:'Italy',zh:'意大利'},{en:'Spain',zh:'西班牙'},{en:'China',zh:'中國'}],a:0,learn_en:'France',learn_zh:'法國'},
      {q_en:'Printmaking uses ___',q_zh:'版畫用___',opts:[{en:'ink',zh:'墨'},{en:'chocolate',zh:'朱古力'},{en:'water',zh:'水'},{en:'sand',zh:'沙'}],a:0,learn_en:'ink',learn_zh:'墨'},
    ]},
    P6: { cards:[{en:'Digital art',zh:'數碼藝術',tip_en:'drawing tablets and software',tip_zh:'繪畫板同軟件'},{en:'Portfolio',zh:'作品集',tip_en:'collect your best works',tip_zh:'收集你嘅佳作'},{en:'Art appreciation',zh:'藝術欣賞',tip_en:'describe what you see and feel',tip_zh:'描述你見到同感受到嘅嘢'}], qs:[
      {q_en:'A digital artist uses a ___',q_zh:'數碼藝術家用___',opts:[{en:'tablet and stylus',zh:'繪畫板和觸控筆'},{en:'paintbrush and canvas',zh:'畫筆和畫布'},{en:'chisel',zh:'鑿'},{en:'clay only',zh:'只係黏土'}],a:0,learn_en:'tablet + stylus',learn_zh:'繪畫板+筆'},
      {q_en:'A portfolio is ___,',q_zh:'作品集係___',opts:[{en:'a collection of your works',zh:'你嘅作品集合'},{en:'a type of paint',zh:'一種顏料'},{en:'a music style',zh:'音樂風格'},{en:'a dance',zh:'一種舞'}],a:0,learn_en:'collection',learn_zh:'集合'},
      {q_en:'To appreciate art, you should ___,',q_zh:'欣賞藝術，你應該___',opts:[{en:'describe what you see and feel',zh:'描述你見到同感受到'},{en:'ignore it',zh:'無視佢'},{en:'shout',zh:'大叫'},{en:'run away',zh:'跑走'}],a:0,learn_en:'describe + feel',learn_zh:'描述+感受'},
    ]}
  },

  // ---------- PE ----------
  pe: {
    P1: { cards:[{en:'Warm up',zh:'熱身',tip_en:'stretch arms and legs',tip_zh:'伸展手腳'},{en:'Running safely',zh:'安全跑步',tip_en:'look ahead, stop on whistle',tip_zh:'望前方，聽哨聲停'},{en:'Ball skills',zh:'球類技巧',tip_en:'throw, catch, bounce',tip_zh:'擲、接、拍'}], qs:[
      {q_en:'Before exercise you should ___',q_zh:'運動前應該___',opts:[{en:'warm up',zh:'熱身'},{en:'sleep',zh:'睡覺'},{en:'eat a lot',zh:'食好多'},{en:'run fast',zh:'快跑'}],a:0,learn_en:'warm up',learn_zh:'熱身'},
      {q_en:'When you hear the whistle, you ___',q_zh:'聽到哨聲，你應該___',opts:[{en:'stop',zh:'停'},{en:'run faster',zh:'跑快啲'},{en:'jump',zh:'跳'},{en:'sing',zh:'唱歌'}],a:0,learn_en:'stop',learn_zh:'停'},
      {q_en:'To catch a ball, use your ___',q_zh:'接波用你嘅___',opts:[{en:'hands',zh:'雙手'},{en:'feet',zh:'雙腳'},{en:'head',zh:'頭'},{en:'nose',zh:'鼻'}],a:0,learn_en:'hands',learn_zh:'雙手'},
    ]},
    P2: { cards:[{en:'Team games',zh:'團隊遊戲',tip_en:'basketball, relay races',tip_zh:'籃球、接力'},{en:'Balance',zh:'平衡',tip_en:'stand on one foot',tip_zh:'企一隻腳'},{en:'Swimming basics',zh:'游泳基礎',tip_en:'blow bubbles, float',tip_zh:'吹氣泡、浮水'}], qs:[
      {q_en:'In relay, you pass the ___',q_zh:'接力賽要傳___',opts:[{en:'baton',zh:'棒'},{en:'ball',zh:'波'},{en:'book',zh:'書'},{en:'bag',zh:'袋'}],a:0,learn_en:'baton',learn_zh:'棒'},
      {q_en:'To balance on one foot you need ___',q_zh:'企一隻腳需要___',opts:[{en:'focus',zh:'專注'},{en:'shoes',zh:'鞋'},{en:'hat',zh:'帽'},{en:'ball',zh:'波'}],a:0,learn_en:'focus',learn_zh:'專注'},
      {q_en:'First swimming skill: blow ___',q_zh:'游泳第一樣要學吹___',opts:[{en:'bubbles',zh:'氣泡'},{en:'balloons',zh:'氣球'},{en:'candles',zh:'蠟燭'},{en:'kites',zh:'風箏'}],a:0,learn_en:'bubbles',learn_zh:'氣泡'},
    ]},
    P3: { cards:[{en:'Rules of games',zh:'遊戲規則',tip_en:'no pushing, take turns',tip_zh:'唔推人、輪流'},{en:'Fitness',zh:'體適能',tip_en:'run, jump, throw, catch',tip_zh:'跑、跳、擲、接'},{en:'Safety',zh:'安全',tip_en:'wear proper shoes, warm up',tip_zh:'著合適鞋、熱身'}], qs:[
      {q_en:'A good teammate ___',q_zh:'好隊友會___',opts:[{en:'share and encourage',zh:'分享和鼓勵'},{en:'push',zh:'推人'},{en:'shout',zh:'大叫'},{en:'hide the ball',zh:'收埋波'}],a:0,learn_en:'share + encourage',learn_zh:'分享+鼓勵'},
      {q_en:'Which is a fitness skill?',q_zh:'邊個係體適能技能？',opts:[{en:'running',zh:'跑步'},{en:'reading',zh:'閱讀'},{en:'drawing',zh:'畫畫'},{en:'singing',zh:'唱歌'}],a:0,learn_en:'running',learn_zh:'跑步'},
      {q_en:'Wear ___ for PE',q_zh:'體育課著___',opts:[{en:'proper sports shoes',zh:'合適運動鞋'},{en:'slippers',zh:'拖鞋'},{en:'high heels',zh:'高跟鞋'},{en:'boots',zh:'靴'}],a:0,learn_en:'sports shoes',learn_zh:'運動鞋'},
    ]},
    P4: { cards:[{en:'Basketball',zh:'籃球',tip_en:'dribble, pass, shoot',tip_zh:'運球、傳球、投籃'},{en:'Football',zh:'足球',tip_en:'kick, pass, goal',tip_zh:'踢、傳、入球'},{en:'Badminton',zh:'羽毛球',tip_en:'serve, smash, net',tip_zh:'發球、扣殺、網'}], qs:[
      {q_en:'In basketball, you shoot into the ___',q_zh:'籃球要投入___',opts:[{en:'hoop',zh:'籃框'},{en:'goal',zh:'龍門'},{en:'net (badminton)',zh:'羽毛球網'},{en:'pool',zh:'泳池'}],a:0,learn_en:'hoop',learn_zh:'籃框'},
      {q_en:'In football, a goal is worth ___ point(s)',q_zh:'足球入一球 = ___分',opts:[{en:'1',zh:'1'},{en:'2',zh:'2'},{en:'3',zh:'3'},{en:'5',zh:'5'}],a:0,learn_en:'1',learn_zh:'1'},
      {q_en:'In badminton, hit the shuttlecock over the ___',q_zh:'羽毛球要打过___',opts:[{en:'net',zh:'網'},{en:'hoop',zh:'籃框'},{en:'goal',zh:'龍門'},{en:'wall',zh:'牆'}],a:0,learn_en:'net',learn_zh:'網'},
    ]},
    P5: { cards:[{en:'Fitness components',zh:'體適能要素',tip_en:'strength, endurance, flexibility',tip_zh:'力量、耐力、柔軟度'},{en:'Sportsmanship',zh:'運動精神',tip_en:'win or lose, be kind',tip_zh:'贏輸都要有風度'},{en:'Stretching',zh:'伸展',tip_en:'before and after exercise',tip_zh:'運動前後'}], qs:[
      {q_en:'Flexibility means ___',q_zh:'柔軟度指___',opts:[{en:'bend easily',zh:'容易彎曲'},{en:'run fast',zh:'跑得快'},{en:'jump high',zh:'跳得高'},{en:'throw far',zh:'擲得遠'}],a:0,learn_en:'bend easily',learn_zh:'容易彎'},
      {q_en:'Sportsmanship means ___,',q_zh:'運動精神係___',opts:[{en:'respect others win or lose',zh:'贏輸都尊重人'},{en:'only win',zh:'淨係贏'},{en:'cheat',zh:'出術'},{en:'argue',zh:'爭論'}],a:0,learn_en:'respect',learn_zh:'尊重'},
      {q_en:'Stretch ___ exercise',q_zh:'伸展喺運動___做',opts:[{en:'before and after',zh:'前後'},{en:'only after',zh:'淨係後'},{en:'only before',zh:'淨係前'},{en:'never',zh:'從不'}],a:0,learn_en:'before & after',learn_zh:'前後'},
    ]},
    P6: { cards:[{en:'Healthy lifestyle',zh:'健康生活',tip_en:'sleep, eat well, exercise',tip_zh:'睡好、吃好、運動'},{en:'Rules & tactics',zh:'規則和戰術',tip_en:'understand game rules',tip_zh:'理解比賽規則'},{en:'Goal setting',zh:'目標設定',tip_en:'SMART goals',tip_zh:'SMART 目標'}], qs:[
      {q_en:'To stay healthy you need ___',q_zh:'保持健康需要___',opts:[{en:'sleep + exercise + good food',zh:'睡眠+運動+好食物'},{en:'only sleep',zh:'淨係睡'},{en:'only food',zh:'淨係食'},{en:'only games',zh:'淨係打機'}],a:0,learn_en:'sleep+exercise+food',learn_zh:'睡眠+運動+食物'},
      {q_en:'SMART goal = Specific, Measurable, Achievable, ___, Time-bound',q_zh:'SMART 目標 = 具體、可衡量、可達成、___、有時限',opts:[{en:'Relevant',zh:'相關'},{en:'Random',zh:'隨機'},{en:'Red',zh:'紅色'},{en:'Round',zh:'圓形'}],a:0,learn_en:'Relevant',learn_zh:'相關'},
      {q_en:'A good team ___',q_zh:'好隊伍會___',opts:[{en:'communicate',zh:'溝通'},{en:'ignore each other',zh:'無視對方'},{en:'fight',zh:'打架'},{en:'quit',zh:'放棄'}],a:0,learn_en:'communicate',learn_zh:'溝通'},
    ]}
  },

  // ---------- PUTONGHUA ----------
  pth: {
    P1: { cards:[{en:'Pinyin basics',zh:'拼音基礎',tip_en:'a o e i u ü, b p m f',tip_zh:'聲母、韻母'},{en:'Greetings',zh:'問候',tip_en:'ni hao, xie xie',tip_zh:'你好、再見'},{en:'Numbers 1-10',zh:'數字一至十',tip_en:'yi er san si wu',tip_zh:'一二三四五六七八九十'}], qs:[
      {q_en:'"ni hao" means ___',q_zh:'「你好」係___',opts:[{en:'hello',zh:'你好'},{en:'goodbye',zh:'再見'},{en:'sorry',zh:'對唔住'},{en:'please',zh:'請'}],a:0,learn_en:'hello',learn_zh:'你好'},
      {q_en:'"wu" is the number ___',q_zh:'「五」係數字___',opts:[{en:'5',zh:'5'},{en:'2',zh:'2'},{en:'3',zh:'3'},{en:'8',zh:'8'}],a:0,learn_en:'5',learn_zh:'5'},
      {q_en:'"xie xie" means ___',q_zh:'「謝謝」係___',opts:[{en:'thank you',zh:'多謝'},{en:'sorry',zh:'對唔住'},{en:'hi',zh:'嗨'},{en:'bye',zh:'再見'}],a:0,learn_en:'thank you',learn_zh:'多謝'},
    ]},
    P2: { cards:[{en:'Four tones',zh:'四聲',tip_en:'ā á ǎ à',tip_zh:'陰平、陽平、上聲、去聲'},{en:'Family words',zh:'家庭稱呼',tip_en:'ba ba, ma ma',tip_zh:'爸爸、媽媽'},{en:'Colours',zh:'顏色',tip_en:'hong se, huang se',tip_zh:'紅色、黃色'}], qs:[
      {q_en:'Mandarin has ___ tones',q_zh:'普通話有___個聲調',opts:[{en:'4',zh:'4'},{en:'2',zh:'2'},{en:'5',zh:'5'},{en:'8',zh:'8'}],a:0,learn_en:'4',learn_zh:'4'},
      {q_en:'"ma ma" means ___',q_zh:'「媽媽」係___',opts:[{en:'mummy',zh:'媽媽'},{en:'daddy',zh:'爸爸'},{en:'sister',zh:'妹妹'},{en:'brother',zh:'哥哥'}],a:0,learn_en:'mummy',learn_zh:'媽媽'},
      {q_en:'"hong se" is ___,',q_zh:'「紅色」係___',opts:[{en:'red',zh:'紅'},{en:'blue',zh:'藍'},{en:'green',zh:'綠'},{en:'yellow',zh:'黃'}],a:0,learn_en:'red',learn_zh:'紅'},
    ]},
    P3: { cards:[{en:'Sentences',zh:'句子',tip_en:'wo shi xue sheng',tip_zh:'我係學生'},{en:'Measure words',zh:'量詞',tip_en:'yi ge, yi zhi',tip_zh:'一個、一隻'},{en:'Days & dates',zh:'日子日期',tip_en:'xing qi yi to tian',tip_zh:'星期一至日'}], qs:[
      {q_en:'"wo shi xue sheng" means ___',q_zh:'「我係學生」普通話點講？',opts:[{en:'wo shi xue sheng',zh:'我係學生'},{en:'wo shi lao shi',zh:'我係老師'},{en:'ni shi xue sheng',zh:'你係學生'},{en:'ta shi xue sheng',zh:'他係學生'}],a:0,learn_en:'wo shi xue sheng',learn_zh:'我係學生'},
      {q_en:'"yi zhi ma" = one ___',q_zh:'「一隻馬」= one ___',opts:[{en:'horse',zh:'馬'},{en:'book',zh:'書'},{en:'apple',zh:'蘋果'},{en:'person',zh:'人'}],a:0,learn_en:'horse',learn_zh:'馬'},
      {q_en:'"xing qi yi" is ___',q_zh:'「星期一」係___',opts:[{en:'Monday',zh:'星期一'},{en:'Sunday',zh:'星期日'},{en:'Friday',zh:'星期五'},{en:'Saturday',zh:'星期六'}],a:0,learn_en:'Monday',learn_zh:'星期一'},
    ]},
    P4: { cards:[{en:'Pronunciation',zh:'發音',tip_en:'zh ch sh vs z c s',tip_zh:'翹舌音與平舌音'},{en:'Descriptions',zh:'形容',tip_en:'hen gao, hen mei',tip_zh:'很高、很美'},{en:'Stories',zh:'故事',tip_en:'short stories in Mandarin',tip_zh:'普通話小故事'}], qs:[
      {q_en:'"hen gao" means ___',q_zh:'「很高」係___',opts:[{en:'very tall',zh:'好高'},{en:'very short',zh:'好矮'},{en:'very fat',zh:'好肥'},{en:'very thin',zh:'好瘦'}],a:0,learn_en:'very tall',learn_zh:'好高'},
      {q_en:'Which is a retroflex sound? (翹舌)',q_zh:'邊個係翹舌音？',opts:[{en:'zh',zh:'zh'},{en:'z',zh:'z'},{en:'c',zh:'c'},{en:'s',zh:'s'}],a:0,learn_en:'zh',learn_zh:'zh'},
      {q_en:'"hen mei" means ___',q_zh:'「很美」係___',opts:[{en:'very beautiful',zh:'好靚'},{en:'very ugly',zh:'好醜'},{en:'very big',zh:'好大'},{en:'very small',zh:'好細'}],a:0,learn_en:'very beautiful',learn_zh:'好靚'},
    ]},
    P5: { cards:[{en:'Idioms (chengyu)',zh:'成語',tip_en:'yi jian shuang de',tip_zh:'一箭雙鵰'},{en:'Longer sentences',zh:'長句',tip_en:'wo xiang qu dian ying',tip_zh:'我想去電影'},{en:'Culture',zh:'文化',tip_en:'Spring Festival, Mid-Autumn',tip_zh:'春節、中秋'}], qs:[
      {q_en:'"yi jian shuang de" means ___',q_zh:'「一箭雙鵰」普通話係？',opts:[{en:'yi jian shuang diao',zh:'一箭雙鵰'},{en:'yi jian shuang niao',zh:'一箭雙鳥'},{en:'yi jian er de',zh:'一箭二得'},{en:'yi jian san diao',zh:'一箭三鵰'}],a:0,learn_en:'yi jian shuang diao',learn_zh:'一箭雙鵰'},
      {q_en:'"wo xiang qu dian ying" means ___',q_zh:'「我想去電影」點譯？',opts:[{en:'I want to go to the cinema',zh:'我想去戲院'},{en:'I want to eat',zh:'我想食嘢'},{en:'I want to sleep',zh:'我想睡覺'},{en:'I want to run',zh:'我想跑步'}],a:0,learn_en:'cinema',learn_zh:'戲院'},
      {q_en:'Spring Festival is ___',q_zh:'春節即係___',opts:[{en:'Chinese New Year',zh:'農曆新年'},{en:'Christmas',zh:'聖誕節'},{en:'Easter',zh:'復活節'},{en:'Halloween',zh:'萬聖節'}],a:0,learn_en:'CNY',learn_zh:'農曆新年'},
    ]},
    P6: { cards:[{en:'Fluent speaking',zh:'流暢表達',tip_en:'discuss topics in Mandarin',tip_zh:'用普通話討論'},{en:'Writing pinyin',zh:'拼音寫作',tip_en:'write sentences with pinyin',zh:'用拼音寫句子'},{en:'Culture deep dive',zh:'文化深入',tip_en:'poems, history',tip_zh:'詩歌、歷史'}], qs:[
      {q_en:'"ming tian" means ___',q_zh:'「明天」係___',opts:[{en:'tomorrow',zh:'聽日'},{en:'yesterday',zh:'尋日'},{en:'today',zh:'今日'},{en:'tonight',zh:'今晚'}],a:0,learn_en:'tomorrow',learn_zh:'聽日'},
      {q_en:'To say "thank you" in Mandarin: ___',q_zh:'普通話「多謝」點講？',opts:[{en:'xie xie',zh:'謝謝'},{en:'dui bu qi',zh:'對唔住'},{en:'zai jian',zh:'再見'},{en:'qing',zh:'請'}],a:0,learn_en:'xie xie',learn_zh:'謝謝'},
      {q_en:'"hao chi" means ___',q_zh:'「好吃」係___',opts:[{en:'delicious',zh:'好食'},{en:'bad',zh:'唔好'},{en:'cold',zh:'凍'},{en:'hot',zh:'熱'}],a:0,learn_en:'delicious',learn_zh:'好食'},
    ]}
  },

  // ---------- RELIGIOUS EDUCATION ----------
  rel: {
    P1: { cards:[{en:'God loves me',zh:'天主愛我',tip_en:'God made everything',tip_zh:'天主創造萬物'},{en:'Being kind',zh:'做個善良嘅人',tip_en:'share, help, forgive',tip_zh:'分享、幫助、寬恕'},{en:'Our school prayer',zh:'學校祈禱',tip_en:'listen to teachers',tip_zh:'聽老師說話'}], qs:[
      {q_en:'Who made the world?',q_zh:'邊個創造世界？',opts:[{en:'God',zh:'天主'},{en:'a robot',zh:'機械人'},{en:'a cat',zh:'貓'},{en:'nobody',zh:'無人'}],a:0,learn_en:'God',learn_zh:'天主'},
      {q_en:'Being kind means ___',q_zh:'善良嘅人會___',opts:[{en:'sharing and helping',zh:'分享和幫助'},{en:'shouting',zh:'大叫'},{en:'fighting',zh:'打架'},{en:'lying',zh:'講大話'}],a:0,learn_en:'share+help',learn_zh:'分享+幫助'},
      {q_en:'At school we should ___',q_zh:'喺學校我哋應該___',opts:[{en:'listen to teachers',zh:'聽老師說話'},{en:'shout',zh:'大叫'},{en:'run',zh:'跑步'},{en:'sleep in class',zh:'上課睡覺'}],a:0,learn_en:'listen',learn_zh:'聽話'},
    ]},
    P2: { cards:[{en:'Ten Commandments (kid version)',zh:'十誡（兒童版）',tip_en:'love God, love parents, no stealing',tip_zh:'愛天主、孝順父母、唔偷嘢'},{en:'Jesus as friend',zh:'耶穌係朋友',tip_en:'love one another',tip_zh:'彼此相愛'},{en:'Thankfulness',zh:'感恩',tip_en:'say thank you to God',tip_zh:'感謝天主'}], qs:[
      {q_en:'Which is a good rule?',q_zh:'邊個係好規矩？',opts:[{en:'Love your parents',zh:'孝順父母'},{en:'Steal',zh:'偷嘢'},{en:'Lie',zh:'講大話'},{en:'Hurt others',zh:'傷害他人'}],a:0,learn_en:'love parents',learn_zh:'孝順父母'},
      {q_en:'Jesus taught us to ___',q_zh:'耶穌教導我哋___',opts:[{en:'love one another',zh:'彼此相愛'},{en:'hate',zh:'憎恨'},{en:'steal',zh:'偷竊'},{en:'fight',zh:'打架'}],a:0,learn_en:'love',learn_zh:'相愛'},
      {q_en:'Being thankful means ___',q_zh:'感恩即係___',opts:[{en:'saying thank you',zh:'說多謝'},{en:'asking for more',zh:'要求更多'},{en:'complaining',zh:'抱怨'},{en:'shouting',zh:'大叫'}],a:0,learn_en:'thank you',learn_zh:'多謝'},
    ]},
    P3: { cards:[{en:'Parables',zh:'比喻故事',tip_en:'Good Samaritan',tip_zh:'慈善心'},{en:'Saints',zh:'聖人',tip_en:'St. Magdalene of Canossa',tip_zh:'嘉諾撒會祖'},{en:'Prayer',zh:'祈禱',tip_en:'talk to God',tip_zh:'同天主說話'}], qs:[
      {q_en:'A parable is ___,',q_zh:'比喻故事係___',opts:[{en:'a story with a lesson',zh:'有教訓嘅故事'},{en:'a joke',zh:'笑話'},{en:'a song',zh:'一首歌'},{en:'a game',zh:'遊戲'}],a:0,learn_en:'story+lesson',learn_zh:'有教訓'},
      {q_en:'Our school was started by the ___',q_zh:'我校由___創辦',opts:[{en:'Canossian Sisters',zh:'嘉諾撒修女'},{en:'a king',zh:'國王'},{en:'a robot',zh:'機械人'},{en:'a company',zh:'公司'}],a:0,learn_en:'Canossian Sisters',learn_zh:'嘉諾撒修女'},
      {q_en:'Prayer is ___,',q_zh:'祈禱係___',opts:[{en:'talking to God',zh:'同天主說話'},{en:'running',zh:'跑步'},{en:'eating',zh:'吃飯'},{en:'sleeping',zh:'睡覺'}],a:0,learn_en:'talk to God',learn_zh:'同天主說話'},
    ]},
    P4: { cards:[{en:'Beatitudes',zh:'真福八端',tip_en:'blessed are the meek',tip_zh:'溫柔的人是有福的'},{en:'Catholic social teaching',zh:'天主教社會訓導',tip_en:'dignity, solidarity, care for poor',tip_zh:'尊嚴、團結、關心窮人'},{en:'Advent & Lent',zh:'將臨期與四旬期',tip_en:'preparing for Christmas and Easter',tip_zh:'準備迎接聖誕和復活節'}], qs:[
      {q_en:'"Blessed are the meek" means ___,',q_zh:'「溫柔的人有福」即係___',opts:[{en:'gentle people are blessed',zh:'溫柔者有福'},{en:'rich people win',zh:'有錢贏'},{en:'strong people win',zh:'強者贏'},{en:'fast people win',zh:'快者贏'}],a:0,learn_en:'gentle = blessed',learn_zh:'溫柔有福'},
      {q_en:'Advent prepares us for ___',q_zh:'將臨期係為___做準備',opts:[{en:'Christmas',zh:'聖誕節'},{en:'Easter',zh:'復活節'},{en:'New Year',zh:'新年'},{en:'Halloween',zh:'萬聖節'}],a:0,learn_en:'Christmas',learn_zh:'聖誕'},
      {q_en:'Solidarity means ___',q_zh:'團結即係___',opts:[{en:'standing together',zh:'並肩同行'},{en:'fighting alone',zh:'獨自戰鬥'},{en:'ignoring others',zh:'無視他人'},{en:'hiding',zh:'躲藏'}],a:0,learn_en:'together',learn_zh:'同行'},
    ]},
    P5: { cards:[{en:'Sacraments',zh:'聖事',tip_en:'baptism, eucharist, confirmation',tip_zh:'聖洗、聖體、堅振'},{en:'Moral choices',zh:'道德選擇',tip_en:'choose good, avoid evil',tip_zh:'選擇善、避免惡'},{en:'Care for creation',zh:'愛護受造物',tip_en:'protect the Earth',tip_zh:'保護地球'}], qs:[
      {q_en:'Baptism makes us ___',q_zh:'領洗使我們成為___',opts:[{en:'children of God',zh:'天主的子女'},{en:'rich',zh:'有錢人'},{en:'famous',zh:'名人'},{en:'tall',zh:'高人'}],a:0,learn_en:'children of God',learn_zh:'天主子女'},
      {q_en:'Choosing good over evil is a ___ choice',q_zh:'選擇善而唔選擇惡係___',opts:[{en:'moral',zh:'道德'},{en:'random',zh:'隨機'},{en:'sport',zh:'運動'},{en:'colour',zh:'顏色'}],a:0,learn_en:'moral',learn_zh:'道德'},
      {q_en:'Caring for creation means ___',q_zh:'愛護受造物即係___',opts:[{en:'protecting the Earth',zh:'保護地球'},{en:'littering',zh:'亂丟垃圾'},{en:'cutting trees',zh:'砍樹'},{en:'wasting water',zh:'浪費水'}],a:0,learn_en:'protect Earth',learn_zh:'保護地球'},
    ]},
    P6: { cards:[{en:'Vocation',zh:'召叫',tip_en:'how God calls you to serve',tip_zh:'天主召叫你去服務'},{en:'World religions',zh:'世界宗教',tip_en:'respect different faiths',tip_zh:'尊重不同信仰'},{en:'Living the faith',zh:'活出信仰',tip_en:'serve others, love neighbors',tip_zh:'服務他人、愛近人'}], qs:[
      {q_en:'A vocation is ___',q_zh:'召叫係___',opts:[{en:'God\'s call to serve',zh:'天主的召叫'},{en:'a hobby',zh:'嗜好'},{en:'a game',zh:'遊戲'},{en:'a colour',zh:'顏色'}],a:0,learn_en:'God\'s call',learn_zh:'天主召叫'},
      {q_en:'We should respect ___',q_zh:'我哋應該尊重___',opts:[{en:'all faiths',zh:'所有信仰'},{en:'only our own',zh:'淨係自己'},{en:'no one',zh:'無人'},{en:'only teachers',zh:'淨係老師'}],a:0,learn_en:'all faiths',learn_zh:'所有信仰'},
      {q_en:'Living the faith means ___',q_zh:'活出信仰即係___',opts:[{en:'serving and loving others',zh:'服務和愛人'},{en:'only praying',zh:'淨係祈禱'},{en:'ignoring others',zh:'無視人'},{en:'sleeping',zh:'睡覺'}],a:0,learn_en:'serve+love',learn_zh:'服務+愛'},
    ]}
  }
};


// ===== DeepTutor corner data (v3) =====
const TUTOR = {
  intro: {
    en: "DeepTutor is a free AI teacher robot made by HKUDS. It can explain anything you do not understand — maths, English, science — step by step, like a kind big brother! Ask mummy or daddy to open it with you.",
    zh: "DeepTutor 係 HKUDS 整嘅免費 AI 老師機械人。你有咩唔明——數學、英文、科學——佢都會一步一步解畀你聽，好似一個好有耐性嘅大哥哥！記得同爸爸媽媽一齊開嚟用。"
  },
  feats: [
    { icon:'📖', en:'Explains any topic step by step', zh:'一步一步解釋任何題目' },
    { icon:'🌏', en:'Speaks English and Chinese', zh:'識講英文同中文' },
    { icon:'📄', en:'Reads your school PDFs and notes', zh:'讀到你嘅學校筆記' },
    { icon:'🧠', en:'Makes fun quizzes to help you revise', zh:'出有趣小測驗幫你溫書' },
    { icon:'🆓', en:'Free and open source', zh:'免費又開源' }
  ]
};
const DT_QUIZ = [
  { en:'Who made DeepTutor?', zh:'DeepTutor 係邊個整？', opts:[{en:'HKUDS',zh:'HKUDS'},{en:'A panda',zh:'一隻熊貓'},{en:'Miss Chan',zh:'陳老師'},{en:'The postman',zh:'郵差'}], a:0 },
  { en:'What can DeepTutor do?', zh:'DeepTutor 做到咩？', opts:[{en:'Explain topics step by step',zh:'一步一步解釋題目'},{en:'Cook dinner',zh:'煮飯'},{en:'Fly a plane',zh:'揸飛機'},{en:'Wash dishes',zh:'洗碗'}], a:0 },
  { en:'How much does DeepTutor cost?', zh:'DeepTutor 幾錢？', opts:[{en:'Free!',zh:'免費！'},{en:'$100',zh:'一百蚊'},{en:'$500',zh:'五百蚊'},{en:'One toy',zh:'一個玩具'}], a:0 }
];
