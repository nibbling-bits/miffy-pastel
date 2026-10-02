const SECRET="princessmiftah",S=document.getElementById("screen"),M=document.getElementById("modal"),MT=document.getElementById("mt"),MX=document.getElementById("mx"),MI=document.getElementById("mi"),MB=document.getElementById("mb");for(let i=0;i<22;i++){let p=document.createElement("i");p.className="petal";p.textContent=["🌸","✿","·"][i%3];p.style.left=Math.random()*100+"%";p.style.animationDuration=7+Math.random()*9+"s";p.style.animationDelay=-Math.random()*12+"s";document.getElementById("petals").appendChild(p)}
let tries=0;function unlock(){if(document.getElementById("secret").value.toLowerCase().replace(/\s/g,"")===SECRET){document.getElementById("lock").remove();document.getElementById("world").classList.remove("hiddenWorld")}else{let a=["Nope 😌 Even the rabbits are judging you.","Miffy… the teddies are concerned. 😂","Wrong secret word. Princess privileges denied.","Ask Bushra before the dinos lose faith in you. 🦕"];document.getElementById("lockmsg").textContent=a[Math.min(tries++,3)]}}document.getElementById("unlock").onclick=unlock;document.getElementById("secret").onkeydown=e=>{if(e.key==="Enter")unlock()};
const Q=[
["Where did we first travel together?",["Goa 🌴","Perth 🐨","Bangalore 🏙️","The land of endless arguments 😌"],0,[["Miffy?! 😭","Were you even there? Think harder."],["Wrong continent 😂","Lovely trip. Wrong memory."],["Home base does not count 😌","Nice attempt. Try again."],["Tempting 😂","Emotionally plausible. Geographically incorrect."]]],
["Who behaves like a spoiled princess?",["Bushra 👑","Miftah 👸"],1,[["EXCUSE ME?? 🤨","Birthday boy privilege does NOT include rewriting history. Think again, Princess Miftah. 👸"]]],
["One thing Miftah cannot stay without?",["Bushra ❤️","Games 🎮","Food 🍜","Sleep 😴"],1,[["Awwwww ❤️","Very romantic. Very sweet. Completely incorrect. 🎮"],["Nope 😌","The gaming teddies know the truth."],["Who are you? 🤨","Food over games? What have you done with my husband?"],["Absolutely not 😂","You have sacrificed sleep FOR games."]]],
["Who makes up after each fight?",["Miftah 😇","Bushra 😌"],1,[["HAHAHAHAHAHA 😂","Sorry. The rabbits needed a minute after that one."]]],
["Who starts every fight?",["Bushra 😇","Miftah 🔥"],1,[["⚠️ DANGEROUS ANSWER","You still have time to reconsider this decision, Miffy."]]],
["Who loves more?",["Miftah ❤️","Bushra ❤️❤️"],1,[["Citation needed 📚","Source: Miftah et al., Trust Me Bro (2026). Peer review rejected."]]],
["Who swiped first?",["Bushra 👀","Miftah 👉"],1,[["Historical revisionism 👀","The archives—and the tiny dinos—remember, Miffy."]]]
],C=[["Correct! 🌴","The adventure continues!"],["👑 TRUTH ACCEPTED 👑","Princess Miftah has acknowledged his title."],["Correct! 🎮","The gaming teddies celebrate your honesty."],["Peace restored 😌","Correct. Somebody has to make up."],["Self-awareness unlocked 😂","The rabbits appreciate your honesty."],["Obviously. 💗","Bushra's answer key remains undefeated."],["The archives approve ✨","And look where that swipe got you…"]];
let n=0,wrong=Array(7).fill(0),cb=null;function pop(t,x,good=false,next=null){MT.textContent=t;MX.textContent=x;MI.textContent=good?"✨":"😂";MB.textContent=good?"Continue →":"Fine, let me try again 🙄";M.classList.remove("hide");cb=next}MB.onclick=()=>{M.classList.add("hide");let f=cb;cb=null;if(f)f()};
function draw(){let q=Q[n];S.innerHTML=`<div class="progress">${Q.map((_,i)=>`<i class="dot ${i<n?"done":""}"></i>`).join("")}</div><div class="qno">QUESTION ${n+1} OF 7</div><div class="big">${["🧳","👑","🎮","🌷","🔥","💗","✨"][n]}</div><h2>${q[0]}</h2><div class="answers">${q[1].map((o,i)=>`<button class="answer" data-i="${i}">${o}</button>`).join("")}</div><small>Choose wisely. Bushra controls the answer key. 😌</small>`;S.querySelectorAll(".answer").forEach(b=>b.onclick=()=>pick(+b.dataset.i))}
function pick(i){let q=Q[n];if(i===q[2]){let c=C[n];pop(c[0],c[1],true,()=>{n++;n<7?draw():door()});return}let w=q[3][i]||["Nope 😂","The tiny animals disagree. Try again."];if(n===1&&i===0){let e=[["EXCUSE ME?? 🤨","Birthday boy privilege does NOT include rewriting history. Think again, Princess Miftah. 👸"],["YOU CLICKED BUSHRA AGAIN?! 😭","The confidence is concerning."],["Miftah. My patience has left the chat. 🙂","There are TWO options. Click your own name, Princess."],["STILL?! 😂","Even the dinosaurs are judging you now."]];w=e[Math.min(wrong[n]++,3)]}pop(w[0],w[1])}
document.getElementById("start").onclick=draw;function door(){S.innerHTML=`<div class="big">🚪🌸✨</div><h2>The final door has opened…</h2><p>Turns out one little swipe led to quite an adventure.</p><button id="go" class="btn">Let's see… →</button>`;document.getElementById("go").onclick=mem}function mem(){S.innerHTML=`<div class="eyebrow">A FEW CHAPTERS LATER…</div><div class="big">🐰🧸🦕</div><h2>Look at all the little adventures that followed.</h2><div class="memorygrid"><div class="memory">🌴 First adventures</div><div class="memory">🚤 New places</div><div class="memory">🐨 Silly moments</div><div class="memory">🚲 Exploring together</div><div class="memory">🎮 Lots of #me time 😏</div><div class="memory">❤️ Same team, always</div></div><button id="last" class="btn">One last thing… ❤️</button>`;document.getElementById("last").onclick=finale}function finale(){document.getElementById("world").classList.add("party");S.innerHTML=`<div class="big">🎂🌸✨</div><div class="letter"><h2>Happy Birthday Miftah! ❤️</h2><p>Stay happy and blessed with lots of happiness, health and your <strong>#me time :P</strong></p><p><em>— Bushra ❤️</em></p></div><div class="achievement"><strong>🏆 ACHIEVEMENT UNLOCKED</strong><p>Another year of <b>Games</b>, <b>Bushra</b> & being a <b>spoiled princess</b>. 👸🎮</p></div>`}

// --- V3 interactive animal magic -------------------------------------------
const animalPool=["🐰","🧸","🦕","🦖","🐥","🐹","🐱","🐶"];
let audioCtx=null;
function bubbleSound(){
  try{
    audioCtx ||= new (window.AudioContext||window.webkitAudioContext)();
    if(audioCtx.state==="suspended") audioCtx.resume();
    const t=audioCtx.currentTime, osc=audioCtx.createOscillator(), gain=audioCtx.createGain();
    osc.type="sine";
    osc.frequency.setValueAtTime(520,t);
    osc.frequency.exponentialRampToValueAtTime(1050,t+.055);
    osc.frequency.exponentialRampToValueAtTime(180,t+.14);
    gain.gain.setValueAtTime(.0001,t);
    gain.gain.exponentialRampToValueAtTime(.18,t+.012);
    gain.gain.exponentialRampToValueAtTime(.0001,t+.15);
    osc.connect(gain); gain.connect(audioCtx.destination); osc.start(t); osc.stop(t+.16);
  }catch(e){}
}
function makeRemnants(el){
  const r=el.getBoundingClientRect(), bits=["✨","🌸","♡","·","✦"];
  for(let i=0;i<9;i++){
    const b=document.createElement("i"); b.className="remnant"; b.textContent=bits[i%bits.length];
    b.style.left=(r.left+r.width/2)+"px"; b.style.top=(r.top+r.height/2)+"px";
    const a=(Math.PI*2*i/9)+(Math.random()*.4),d=35+Math.random()*65;
    b.style.setProperty("--dx",Math.cos(a)*d+"px");b.style.setProperty("--dy",Math.sin(a)*d+"px");
    document.body.appendChild(b);setTimeout(()=>b.remove(),750);
  }
}
function animalize(el){
  if(!el || el.dataset.magic==="yes")return;
  el.dataset.magic="yes";el.setAttribute("role","button");el.setAttribute("tabindex","0");
  el.setAttribute("aria-label","Cute animal. Tap for a surprise.");
  const burst=()=>{
    if(el.classList.contains("pop-animal"))return;
    bubbleSound();makeRemnants(el);el.classList.add("pop-animal");
    setTimeout(()=>{
      el.textContent=animalPool[Math.floor(Math.random()*animalPool.length)];
      el.classList.remove("pop-animal");el.classList.add("birth-animal");
      setTimeout(()=>el.classList.remove("birth-animal"),700);
    },470);
  };
  el.addEventListener("click",burst);el.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();burst()}});
}
function wireAnimals(){
 document.querySelectorAll(".creatures .sprite,.creatures .gaming span:not(.controller),.creatures .picnic span:not(.food),.creatures .dancers span").forEach(animalize);
}
wireAnimals();

const rain=document.getElementById("animalRain");
function dropPuzzledAnimal(){
  if(!rain || matchMedia("(prefers-reduced-motion: reduce)").matches)return;
  const a=document.createElement("span");a.className="falling-animal";
  a.textContent=animalPool[Math.floor(Math.random()*animalPool.length)];
  a.style.left=(7+Math.random()*86)+"%";a.style.setProperty("--dur",(7+Math.random()*5)+"s");
  a.setAttribute("role","button");a.setAttribute("tabindex","0");
  a.setAttribute("aria-label","Puzzled falling animal. Tap to pop.");
  const popWhileFalling=()=>{
    if(a.dataset.popping==="1")return;
    a.dataset.popping="1";
    // Preserve the exact mid-air position before the pop animation takes over.
    const r=a.getBoundingClientRect(), host=rain.getBoundingClientRect();
    a.style.animation="none";a.style.position="absolute";
    a.style.left=(r.left-host.left)+"px";a.style.top=(r.top-host.top)+"px";
    bubbleSound();makeRemnants(a);a.classList.add("pop-falling");
    setTimeout(()=>{
      a.textContent=animalPool[Math.floor(Math.random()*animalPool.length)];
      a.classList.remove("pop-falling");a.classList.add("born-falling");
      setTimeout(()=>{
        a.classList.remove("born-falling");a.dataset.popping="0";
        // Newborn resumes falling at the ORIGINAL speed; no slowdown.
        const nowTop=parseFloat(a.style.top)||0;
        const remaining=Math.max(1.6,((window.innerHeight-nowTop)/window.innerHeight)*(7+Math.random()*5));
        a.style.top=nowTop+"px";a.style.setProperty("--dur",remaining+"s");
        a.style.animation="animalFall var(--dur) linear forwards";
      },500);
    },450);
  };
  a.addEventListener("click",popWhileFalling);
  a.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();popWhileFalling()}});
  rain.appendChild(a);setTimeout(()=>{if(a.isConnected)a.remove()},18000);
}
// Cute animals tumble down occasionally, not continuously enough to obscure questions.
setInterval(()=>{dropPuzzledAnimal(); if(Math.random()>.58)setTimeout(dropPuzzledAnimal,700)},3100);
setTimeout(dropPuzzledAnimal,1100);
// ---------------------------------------------------------------------------
