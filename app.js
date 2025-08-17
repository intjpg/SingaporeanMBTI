const $ = (sel)=>document.querySelector(sel);
const startScreen = $("#screen-start");
const quizScreen = $("#screen-quiz");
const resultScreen = $("#screen-result");
const qCard = $("#question-card");
const progress = $("#progress-bar");
const progText = $("#progress-text");
const resultCard = $("#result-card");

const QUESTIONS = [
  {
    q: "At the hawker centre, your favourite stall has a 30‑minute queue. What now?",
    a: [
      { text: "Wah, cannot tahan — go next stall, faster makan.", delta: { P:1, S:1 } },
      { text: "Queue lah, good things must wait.", delta: { J:1, S:1 } },
      { text: "Ask friend queue, I go chope table first.", delta: { S:1, T:1 } },
      { text: "Try new stall — hidden gem maybe?", delta: { N:1, P:1 } },
    ]
  },
  {
    q: "How do you reply in group chats?",
    a: [
      { text: "Spam memes/voice notes. Wake everybody up.", delta: { E:1 } },
      { text: "Read, laugh quietly, then ghost.", delta: { I:1 } },
      { text: "Only reply when needed. Straight to point.", delta: { T:1 } },
      { text: "Hearts, stickers, keep the vibes wholesome.", delta: { F:1 } },
    ]
  },
  {
    q: "Sec/Poly/Uni/Work project due tomorrow. You…",
    a: [
      { text: "Chiong through the night, caffeine mode.", delta: { P:1, E:1 } },
      { text: "Plan tasks neatly, timeline confirm solid.", delta: { J:1, T:1 } },
      { text: "Check in on teammates first, everyone okay?", delta: { F:1, J:1 } },
      { text: "Negotiate extension — can one right?", delta: { P:1, I:1 } },
    ]
  },
  {
    q: "Someone jio last‑minute for supper at 11pm (weekday).",
    a: [
      { text: "ON lah. Grab keys, I go now.", delta: { E:1, P:1 } },
      { text: "Cannot, tomorrow work/school. Need beauty sleep.", delta: { I:1, J:1 } },
      { text: "Depends where. If far, sian.", delta: { S:1, T:1 } },
      { text: "It’s about the company — go lah.", delta: { F:1, N:1 } },
    ]
  },
  {
    q: "Travelling style overseas:",
    a: [
      { text: "Wake early, got Excel itinerary.", delta: { J:1, S:1 } },
      { text: "Wake, see mood, decide later.", delta: { P:1, N:1 } },
      { text: "Follow group, I just happy can makan.", delta: { F:1, S:1 } },
      { text: "Wander solo to non‑tourist spots.", delta: { I:1, N:1 } },
    ]
  },
  {
    q: "At wedding dinner, what are you doing most?",
    a: [
      { text: "Mingle table to table, selfie with couple.", delta: { E:1 } },
      { text: "Eat quietly; waiting for yam‑seng.", delta: { I:1 } },
      { text: "Comment on portion size & logistics.", delta: { T:1 } },
      { text: "Feel so touched until eyes a bit wet.", delta: { F:1 } },
    ]
  },
  {
    q: "Escape Room for team‑building. Your vibe:",
    a: [
      { text: "Shiok! I’ll lead the charge.", delta: { E:1, J:1 } },
      { text: "Okay lor, just tell me where to go.", delta: { I:1, S:1 } },
      { text: "Give me the logic puzzles.", delta: { T:1, N:1 } },
      { text: "Here for bonding, not puzzles.", delta: { F:1, P:1 } },
    ]
  },
  {
    q: "MRT breakdown — first thought?",
    a: [
      { text: "Aiya late already. Faster find bus.", delta: { S:1, J:1 } },
      { text: "Interesting… observe human behaviour.", delta: { N:1, I:1 } },
      { text: "System inefficient — why like that?", delta: { T:1 } },
      { text: "Nvm lah. Put playlist and chill.", delta: { F:1, P:1 } },
    ]
  },
  {
    q: "Instagram posting habit:",
    a: [
      { text: "Flood stories with every detail.", delta: { E:1 } },
      { text: "Post once a year. Usually birthday.", delta: { I:1 } },
      { text: "Witty captions to look clever.", delta: { T:1, N:1 } },
      { text: "Aesthetic photos + heartfelt quotes.", delta: { F:1 } },
    ]
  },
  {
    q: "Your usual drink order says…",
    a: [
      { text: "Kopi gao — strong, no nonsense.", delta: { T:1, J:1 } },
      { text: "Teh peng — chill, go with flow.", delta: { P:1, F:1 } },
      { text: "Kopi siew dai — balanced lah.", delta: { F:1, S:1 } },
      { text: "Yuan yang — creative mix.", delta: { N:1, E:1 } },
    ]
  },
  {
    q: "Someone cuts queue at hawker:",
    a: [
      { text: "“Oi, got queue!” call out.", delta: { T:1, J:1 } },
      { text: "Diam‑diam; karma will handle.", delta: { I:1, S:1 } },
      { text: "Laugh it off; not worth stress.", delta: { F:1, P:1 } },
      { text: "Make TikTok; maybe go viral.", delta: { E:1, N:1 } },
    ]
  },
  {
    q: "Deciding big life choices (job/house/major):",
    a: [
      { text: "Think carefully; step‑by‑step plan.", delta: { T:1, J:1 } },
      { text: "Ask family/friends; what feels right.", delta: { F:1 } },
      { text: "Follow gut; must feel shiok.", delta: { N:1, P:1 } },
      { text: "Pros & cons list; research deep.", delta: { S:1, T:1 } },
    ]
  },
  {
    q: "NS/school camp/group activity time:",
    a: [
      { text: "Volunteer as IC — I organise.", delta: { E:1, J:1 } },
      { text: "I will show up, just tell me what to do.", delta: { I:1, S:1 } },
      { text: "Can we optimise this process?", delta: { T:1, N:1 } },
      { text: "Let’s make sure everyone included.", delta: { F:1 } },
    ]
  },
  {
    q: "Budget talk:",
    a: [
      { text: "I track every dollar like CPF.", delta: { J:1, S:1 } },
      { text: "I save some, but enjoy life lah.", delta: { P:1, F:1 } },
      { text: "I invest after heavy research.", delta: { T:1 } },
      { text: "I spend on experiences/memories.", delta: { N:1, F:1 } },
    ]
  },
  {
    q: "When plans suddenly change:",
    a: [
      { text: "Ok, new plan — update timeline.", delta: { J:1 } },
      { text: "Swee — spontaneous adventure!", delta: { P:1 } },
      { text: "Wait, what are the facts first?", delta: { S:1, T:1 } },
      { text: "How’s everyone feeling about it?", delta: { F:1, N:1 } },
    ]
  },
];

// Type metadata: title, emoji, blurb, tags
const TYPES = {
  ENTJ: { title: "The CEO Cai Fan Stall Boss", emoji:"🍛",
    blurb:"Efficient & decisive. You portion life like cai‑fan strategy — rice mountain, meat 2 veg, no nonsense. Garang but fair.",
    tags:["Leader","Decisive","Planner"] },
  ENTP: { title: "The MRT Debate King", emoji:"🚇",
    blurb:"Every chat becomes a TED Talk. ERP, MRT, prata ranking — you can argue both sides until applause.",
    tags:["Witty","Curious","Unconventional"] },
  INTJ: { title: "The Secret Mastermind", emoji:"🤫",
    blurb:"Quiet outside, master plan inside. Like URA for your life. Minimal words, maximum strategy.",
    tags:["Strategic","Independent","Calm"] },
  INTP: { title: "The Blur Sotong Professor", emoji:"🦑",
    blurb:"Abstract thoughts 24/7. Sometimes forget EZ‑Link, but your ideas? Next‑level.",
    tags:["Analytical","Inventive","Chill"] },
  ENFJ: { title: "The Wedding MC", emoji:"🎤",
    blurb:"Mic in hand, everyone feels included — even ah‑ma at table 10. Big heart, bigger energy.",
    tags:["Charismatic","Supportive","Organiser"] },
  ENFP: { title: "The YOLO Friend", emoji:"✈️",
    blurb:"Last‑minute Batam? Bag packed already. Ideas everywhere; vibes immaculate.",
    tags:["Adventurous","Inspiring","Spontaneous"] },
  INFJ: { title: "The Mystic Ah Beng", emoji:"🔮",
    blurb:"Soft voice, deep wisdom. Sixth sense for people; advice until goosebumps.",
    tags:["Insightful","Empathetic","Purposeful"] },
  INFP: { title: "The Emo Poet", emoji:"☔",
    blurb:"Feelings in HD. A song at MRT can make you tear — but you believe in the good.",
    tags:["Idealistic","Creative","Kind"] },
  ESTJ: { title: "The Army Sergeant", emoji:"🫡",
    blurb:"On time, on task. Chalet booked, BBQ lit, everybody accounted for. You deliver.",
    tags:["Efficient","Dependable","Direct"] },
  ESFJ: { title: "The Kaypoh Neighbour", emoji:"🏘️",
    blurb:"Knows everyone’s business — to take care of them. Snacks ready, group chat alive.",
    tags:["Welcoming","Organised","People‑first"] },
  ISTJ: { title: "The CPF Calculator", emoji:"💰",
    blurb:"Serious about stability. Plans neat, numbers neat — your future very steady bom‑bi‑bi.",
    tags:["Responsible","Practical","Loyal"] },
  ISFJ: { title: "The Quiet Chope Queen", emoji:"🪑",
    blurb:"Not loud, but always there. Tissue packet hero, reliable to the core.",
    tags:["Caring","Diligent","Supportive"] },
  ESTP: { title: "The Orchard Road Hustler", emoji:"🕶️",
    blurb:"Fast moves, fun stories. First to try new hotspots; life with you never boring.",
    tags:["Bold","Hands‑on","Energetic"] },
  ESFP: { title: "The TikTok Star", emoji:"💃",
    blurb:"Natural entertainer. 10 drafts waiting to drop; make friends everywhere.",
    tags:["Playful","Expressive","Warm"] },
  ISTP: { title: "The DIY Uncle", emoji:"🔧",
    blurb:"Why call handyman when you can fix it? Quiet until something breaks — then hero mode.",
    tags:["Resourceful","Cool‑headed","Maker"] },
  ISFP: { title: "The Hipster Café Hopper", emoji:"☕",
    blurb:"Aesthetic is life. Finds cosy cafés & good vibes; moves at your own rhythm.",
    tags:["Artistic","Gentle","Authentic"] },
};

function computeType(score){
  const l = (a,b)=> (score[a]||0) >= (score[b]||0) ? a : b; // tie‑break towards first
  const EorI = l('E','I');
  const SorN = l('S','N');
  const TorF = l('T','F');
  const JorP = l('J','P');
  return EorI + SorN + TorF + JorP;
}

let idx=0;
let score = {E:0,I:0,S:0,N:0,T:0,F:0,J:0,P:0};

function renderQuestion(){
  const q = QUESTIONS[idx];
  progText.textContent = `${idx+1} / ${QUESTIONS.length}`;
  progress.style.width = `${((idx)/QUESTIONS.length)*100}%`;
  qCard.innerHTML = `
    <div class="q-meta">Question ${idx+1} of ${QUESTIONS.length}</div>
    <h3>${q.q}</h3>
    <div class="options">
      ${q.a.map((opt,i)=>`
        <button class="option" data-i="${i}">
          <span class="label">A${i+1}.</span> ${opt.text}
        </button>
      `).join("")}
    </div>
  `;
  qCard.querySelectorAll(".option").forEach(btn=>{
    btn.addEventListener("click",()=>{
      const i = +btn.dataset.i;
      const delta = q.a[i].delta;
      for(const k in delta){ score[k]=(score[k]||0)+delta[k]; }
      idx++;
      if(idx>=QUESTIONS.length){
        showResult();
      }else{
        renderQuestion();
      }
    });
  });
}

function showResult(){
  progress.style.width = "100%";
  progText.textContent = `${QUESTIONS.length} / ${QUESTIONS.length}`;
  const type = computeType(score);
  const data = TYPES[type];
  const theme = `theme-${type}`;
  resultCard.className = `result-card ${theme}`;
  resultCard.innerHTML = `
    <div class="rc-head">
      <div class="rc-type">${type}</div>
    <div class="rc-title">${data.title} <span class="rc-emoji">${data.emoji}</span></div>
    <div class="rc-desc">${data.blurb}</div>
    <div class="rc-tags">${data.tags.map(t=>`<span class="tag">#${t}</span>`).join("")}</div>
  `;
  startScreen.classList.remove("show");
  quizScreen.classList.remove("show");
  resultScreen.classList.add("show");
  window.scrollTo({top:0, behavior:"smooth"});
}

function downloadResult(){
  // Use html2canvas to capture resultCard and save as PNG
  html2canvas(resultCard, {backgroundColor: null, scale: 2}).then(canvas=>{
    const link = document.createElement('a');
    link.download = 'Singapore-MBTI-Result.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  });
}

$("#btn-start").addEventListener("click", ()=>{
  startScreen.classList.remove("show");
  resultScreen.classList.remove("show");
  quizScreen.classList.add("show");
  idx=0;
  score = {E:0,I:0,S:0,N:0,T:0,F:0,J:0,P:0};
  renderQuestion();
});

$("#btn-again").addEventListener("click", ()=>{
  window.location.reload();
});

$("#btn-download").addEventListener("click", downloadResult);


// Initial state stays on start screen
