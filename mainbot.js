const see = console.log.bind(console);
const jawaban = document.querySelector('.input-jawaban');
const sendBtn = document.querySelector('#sendChat');
const notif = document.getElementById('audio-player');

const containerChildren = document.querySelector('#contentPertanyaan');
const firstPertanyaan = document.getElementById('firstPertanyaan');
const firstContentPertanyaan = document.getElementById('firstContentPertanyaan');

const timeQuestion = document.getElementById('timeQuestion');
const timeAsk = document.getElementById('timeAsk');
const timeHome = document.querySelectorAll('.text-icon-date');
const timeSticker = document.querySelector('.time-sticker');

/* MENGKLONING CONTENT*/

let originalElementPertanyaan = document.querySelector('#contentPertanyaan .chatPertanyaans');
let clonedElementPertanyaan = originalElementPertanyaan.cloneNode(true);
let contentPertanyaan = document.querySelector('#contentPertanyaan');
let clonedContentPertanyaan = contentPertanyaan.cloneNode(true);

originalElementPertanyaan.style.display = 'none';
let arrowQuest = clonedElementPertanyaan.querySelector('.arrowQuest');

const originalElementJawaban = document.querySelector('#contentJawaban .chatJawaban');
const clonedElementJawaban = originalElementJawaban.cloneNode(true);
let arrowA = clonedElementJawaban.querySelector('.arrowAsk');

/* MENGKLONING CHAT*/
const originalPertanyaan = document.getElementById('chatPertanyaan');
const clonedPertanyaan = originalPertanyaan.cloneNode(true);

const originalJawaban = document.getElementById('chatJawaban');
const clonedJawaban = originalJawaban.cloneNode(true);

const clonedTimeQuestion = clonedElementPertanyaan.querySelector('#timeQuestion');
const originalTimeQuestion = originalElementPertanyaan.querySelector('#timeQuestion');
const originalTimeAsk = originalElementJawaban.querySelector('#timeAsk');
const clonedTimeAsk = clonedElementJawaban.querySelector('#timeAsk');

const barier = document.querySelector('.barier');
const textMengetik = document.querySelector('.botStatus');

const containerLinear = document.querySelectorAll('.container-linear');
const containerLove = document.querySelectorAll('.container-love');
const linearCustom = document.querySelector('.linearCustom');

const clonedTextJawaban = clonedElementJawaban.querySelector('#textJawaban');
const clonedTextPertanyaan = clonedElementPertanyaan.querySelector('#textPertanyaan');
const originalTextPertanyaan = clonedElementPertanyaan.querySelector('#TextPertanyaan');

let imgSticker = document.createElement('img');
imgSticker.setAttribute('class','imgSticker');
imgSticker.setAttribute('alt','eror loading image, pls reload the page!');

let imgPicture = document.createElement('img');
imgPicture.setAttribute('class','imgPicture');
imgPicture.setAttribute('alt','eror loading image, pls reload the page!');

let stickers = clonedContentPertanyaan.querySelector('.sticker-chat');
let guessPicture = clonedContentPertanyaan.querySelector('.guess-picture');

let btnChatAction = clonedContentPertanyaan.querySelector('.cta-btn-chat');

let clonedTimeSticker = stickers.querySelector('.time-sticker');
let clonedTimeGuess = stickers.querySelector('.time-guess');

guessPicture.appendChild(imgPicture);
stickers.appendChild(imgSticker);

stickers.style.display = "block";
guessPicture.style.display = "block";

function checkInput() {
 let jawaban = document.querySelector('.input-jawaban');
 let sendBtn = document.querySelector('#sendChat');
 let input = document.querySelector('#container_input');

 (jawaban.value.length >= 1) ? sendBtn.disabled = false : sendBtn.disabled = true;
}

let img = document.querySelector('.ico-bot');

function reactBot() {
  img.src = 'assets/icon/xd.webp';
  setTimeout(() => img.src = 'assets/icon/boticon.webp', 1200);
}

let targetElement;
const mediaQuery = window.matchMedia('(max-width: 768px)');

const handleMediaChange = (mediaQuery) => {
 if (mediaQuery.matches) {
  document.addEventListener('contextmenu', function(e) {
   targetElement = e.target;
   if (targetElement.classList.contains('jawaban')) {
   } else {
    e.preventDefault();
   }
  });
 }
};

mediaQuery.addListener(handleMediaChange);
handleMediaChange(mediaQuery);

document.querySelector(".input-jawaban").addEventListener("paste", function(e) {
 //e.preventDefault();
 function curang() {
  clonedTextPertanyaan.innerHTML = "hayoo ngapain kamu mau copy paste ya?🤡";

  document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
 }
 setTimeout(curang, 500);
});

let sayName = fullName || user;

const botSay = (data) => {
 return [
  `Hi. selamat ${sayTime(isLogin)} aku adalah Fabot, nama kamu ${sayName} ya?`, /*0*/
  `halo ${sayName} aku adalah chat bot sederhana yang dibuat dengan bahasa pemrograman JavaScript dasar`, /*1*/
  `kamu kan lahirnya tanggal ${birth}, berarti umur kamu sekarang brp?`,/*2*/
  `owh sekarang umur kamu udh ${umurNow} tahun, berarti kamu udh kelas ${status} ya`, /*3*/
  `btw kamu`, /*4*/
  `hmm apa yaa, bingung mau ngomong apa lagi sama kamu`, /*5*/
  `dari pada bingung, gimana klo kita main game aja?`, /*6*/
  `nh gitu dong ${namaDepan}, aku kan masih pengen ngobrol sma kamu😇`, //7
  `owhh iya iyaa ${namaDepan} hehe`, /*8*/
  `kaya nya sampe sini aja dulu deh chat kita😸`,
  `makasih yaa ${namaDepan}🥺 di tunggu ya next updatenya dari aku, nanti kita main bareng lagi😉`, /*10*/
 ];
};


const userSay = (data) => {
 return [
  `${data?.nama}`, /*0*/
  `${data?.nanyas}`, /*1*/
  `${data?.umurs}`, /*2*/
  `${data?.pacar}`, /*3*/
  `${data?.maaf}`, /*4*/
  `${data?.game}`, /*5*/
  `${data?.ok}`, /*6*/
  `${data?.siap}`, /*7*/
  `${data?.az}`, /*8*/
  `${data?.userSay}`, /*9*/
  `${data?.end}`, /*10*/
  `${data?.particle}`,/*11*/
  `${data?.end}`, /*12*/
  `${data?.api}`, /*13*/
 ];
};

const kataKasar = [`kontol`, `memek`, `anjing`, `bangsat`, `ngentot`, `bajingan`, `coli`, `komtol`, `anjg`, `ajg`, `tolol`, `bacot`, `bacod`, `bacots`, `bego`, `goblok`, `coly`, `desah`, `colmek`, `colmex`, `kontil`, `babi`, `anjying`, `ngewe`, `sange`, `ashu`, `tholol`, `fuck`, `jancok`, `bangsad`, `begok`, `badjingan`, `memex`, `kontols`, `kontolz`, `sangean`, `colli`, `colly`, `babik`, `gay`, `ngegay`, `bokep`, `bokeps`, `porno`, `xnxx`, `porn`, `lesbian`, `lesbi`, `pornhub`, `yandex`, `hentai`, `ngentots`, `ngecrot`, `ngecrot`, `nyepong`, `kntl`, `kontl`, `kntol`, `ngocok`, `ngocoks`, `cabul`, 'memeq', 'memew', 'tholol', 'begok', 'LGBTQ', 'lesbian', 'ngegay', 'gay', 'transgender', 'biseksual', 'sex', `kintil`, 'puki'];

const kataGamau = [`gak`, `engga`, `apasi`, `kepo`, `sok asik`, `ga boleh`, `lah lu siapa`, `masalah`, `gamau`, `lu siapa`, `boong`, `bodo amat`, `gak mau`, `ga mau`, `ga peduli`, `tapi boong`, `boong`, `gamau`, `maksa`, `kamu siapa`, `udahan`, `lah ngancem`, `marah`, 'keberatan'];

const kataMau = ['iya', 'oke', 'iya mau', 'yaudah deh', 'yaudah iya'];

const kataNetral = [`farid`, `gpp`, `gapapa`, `yauda`, `oke`, `baiklah`, `terserah`, `gimana`, `gimana`, `gmana`, `iya iya`, `iya dah iya`, `iya deh iya`];

const kataBatal = [`gajadi`, `engga jadi`, `ga jadi`, `udahan`, `gamau main`, `capek`];

const kataHeran = [`ko bisa tau`, `ko tau`, `tau sih`, `kok bisa tau`, `bisa tau`, `sebentar`, 'emang', 'emang', 'kenapa', 'knapa', 'ko gitu', 'ko begitu', 'begitu', 'tiba', 'gitu'];

const kataCurang = ['curang', 'licik', 'bodo', 'peduli', 'suka suka', 'duluan'];

const kataGame = ['hadiah', 'dapet', 'makasih', 'tebak', 'abis', 'mau', 'tantangan','challenge', 'paham', 'maksudnya', 'gajadi', 'gatau', 'game', 'lanjut', 'main', 'susah'];

const kataPertanyaan = [
 `kasih tau`,`ngasih tau`,`dapet apa`,`buat apa`,`diapain`,`guna`,`jawab`,`gatau`, 'gimana', 'mau tau', 'pengen', 'kepo', 'penasaran'];

const heranBertanya = kataPertanyaan.concat(kataHeran);
const firstActionButton = document.querySelector('.cta-btn-chat .wrapper-cta');

firstActionButton.style.display = "none";
contentPertanyaan.style.display = "none";
contentJawaban.style.display = "none";
firstContentPertanyaan.style.display = "none";

function loadChat() {
 const containerChat = document.querySelector("#wrapper-item-chat");
 const loadChat = containerChat.lastElementChild;
 const getHistory = JSON.parse(localStorage.getItem('historyChat')) || [];
 
 const history = getHistory.chat;
 loadChat.innerHTML = history;
 contentPertanyaan.style.display = "block";
}

const paramChat = JSON.parse(localStorage.getItem('historyChat'));
let isEnding = paramChat ? paramChat.isEnding : false;

function firstInitializationChat() {
 let isLoadChat = localStorage.getItem('historyChat');
 
 setTimeout(() => {
  textLoad();
  barier.style.display = "none";
  firstPertanyaan.innerHTML = botSay()[0]
  firstContentPertanyaan.style.display = isEnding ? "none" : "block";
  isLoadChat ? loadChat() : console.log("belum ada chat history") ;
  contentPertanyaan.style.display = "block";
  setTimeout(() => {
   barier.style.display = "none";
   textMengetik.innerHTML = "Online";
  }, 1500);
 }, 1000);
}

let init = paramChat? paramChat.init : 0;
let lengthFullType = paramChat ? paramChat.lengthFullType : 0;
let counterWin = paramChat ? paramChat.counterWin : 0;
let playAgain = paramChat ? paramChat.playAgain : 0;
let mainChat = paramChat ? paramChat.mainChat : 0;
let mainChatIs = paramChat ? paramChat.mainChatIs : false;
let isCloneChat = paramChat ? paramChat.isCloneChat : true;
let chatRepeats = paramChat ? paramChat.chatRepeats : false;
let jawabanBenar = paramChat ? paramChat.jawabanBenar : false;
let chatRepeated = paramChat ? paramChat.chatRepeated : false;
let noRepeatChat = paramChat ? paramChat.noRepeatChat : false;
let alreadySticker = paramChat ? paramChat.alreadySticker : false;
let chatValidation = paramChat ? paramChat.chatValidation : false;


let isChattan = paramChat ? paramChat.isChattan : true;
let isGameWin = paramChat ? paramChat.isGameWin : false;
let guessGame = paramChat ? paramChat.guessGame : false;
let playGuess = paramChat ? paramChat.playGuess : false;
let typingGame = paramChat ? paramChat.typingGame : false;
let playTyping = paramChat ? paramChat.playTyping : false;
let winTyping = paramChat ? paramChat.winTyping : false;
let winGuess = paramChat ? paramChat.winGuess : false;
let noRepeating = paramChat ? paramChat.noRepeating : false;


let quest_1 = paramChat ? paramChat.quest_1 : false;
let quest_2 = paramChat ? paramChat.quest_2 : false;
let quest_3 = paramChat ? paramChat.quest_3 : false;
let isCurang = paramChat ? paramChat.isCurang : false;
let isRepeat = paramChat ? paramChat.isRepeat : false;
let newDreams = paramChat ? paramChat.newDreams : dreams;
let isTantangan = paramChat ? paramChat.isTantangan : false;
let botAnswerExecuted = paramChat ? paramChat.botAnswerExecuted : false;
let isCustomParticle = paramChat ? paramChat.isCustomParticle : false;
let fullType = paramChat ? paramChat.fullType : [] ;
let initSticker = paramChat ? paramChat.initSticker : 0;
let initGuess = paramChat ? paramChat.initGuess : 0;
let inUseAPI = paramChat ? paramChat?.inUseAPI : null;
let startUseApi = paramChat ? paramChat.startUseApi : true;


//variabel untuk validasi angka
 let pesan, angka, kalimat, umurTrue, nilaiAngka
 let userSays = [];
 let umurT = false;
 let umurM = false;
 let chatParticle = 0;
 let intervalID = null;
 let isTutorial = false;
 let startStored = false;
 let nilaiAngkaIs = false;
 let switchParticle = false;
 let doneSwitchParticle = false;
 
function botStart(data) {
 startStored = true;
 sendBtn.disabled = true;
 jawaban.style.height = '38px';
 const chatDelay = Math.floor(Math.random() * 2000) + 3000;
 console.log({botStart: chatDelay})
 cekKata = jawaban.value.toLowerCase();
 jawabanValue = jawaban.value.toLowerCase();
 kalimat = jawabanValue;
 angka = kalimat.match(/\d+/);
 lengthFullType = fullType.reduce((acc, element) => acc + element.length, 0);
 const jawabanSplited = jawabanValue.split(' ');
 const validNumber = jawabanSplited.filter(number => !isNaN(number) && number.trim() !== '');
 
 pesan = jawabanValue || null;
 
 const wordTrim = jawabanValue.replace(/\s+/g, '');
 const params = wordTrim.split(',');
 const command = params.length;
 const [mode, direction, speed, click] = params;
 
 const speedValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 const customMode = ['stars', 'love', 'hexagon', 'segitiga', 'persegi', 'lingkaran'];
 const customDirection = ['top', 'right', 'left', 'bottom', 'top-right', 'top-left', 'bottom-right', 'bottom-left'];
 const clickMode = ['bubble', 'repulse', 'push', 'remove'];
 
 const checkCustomMode = customMode.some((kata) => jawabanValue.includes(kata));
 const checkSpeedValue = speedValue.some((kata) => jawabanValue.includes(kata));
 const checkDirectionMode = customDirection.some((kata) => jawabanValue.includes(kata));
 const checkClickMode = clickMode.some((kata) => jawabanValue.includes(kata));
 const setExecutedCustom = [command === 4, checkCustomMode, checkDirectionMode, checkSpeedValue, checkClickMode].every((value) => value === true);
 
 // variabel penampung nilai custom partikel //
 //console.log(fullType, `ini adalah balasan chat dari ${namaDepan}`);
 
 if (setExecutedCustom && isCustomParticle) {
  switchParticle = true;
  
  handleCustomParticle({ key: true, thisMode: mode, thisDirection: direction, thisSpeed: speed, thisClick: click });
 } else if (!chatParticle) {
  init++;
 }

 if (angka !== null) {
  nilaiAngkaIs = true;
  nilaiAngka = parseInt(angka[0]).toString();
  if (nilaiAngka < `${umurNow}`) {
   umurM = true;
  } else if (nilaiAngka > `${umurNow}`) {
   umurT = true;
  }
 } else {
  nilaiAngka = 0;
  nilaiAngkaIs = false;
 }
 umurTrue = umurNow -1;
 //console.log("nilai angka adalah :", nilaiAngka);

 if (kataKasar.some((kata) => cekKata.includes(kata))) {
  jawaban.style.color = "red";
  barier.style.display = "block";

  if (init > 1) {
   setTimeout(() => {
    textMengetik.innerHTML = "Online";
    
    clonedTextPertanyaan.innerHTML = `tolong ya ${genderSay || 'kamu'} kalo ngetik kata kata nya di jaga, walaupun aku cuma chat bot tapi aku tau kamu ngetik kata yang engga sepantasnya.`;
    
    document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
    
    setTimeout(() => {
     setTimeout(() => {
      textMengetik.innerHTML = "Online"
     }, 1500);
     
     clonedTextPertanyaan.innerHTML = `lain kali klo ngetik di jaga kata katanya. ${genderSay || 'manusia'} ${genderSay || ''} tapi kata katanya kasar ga baik tau😒`;
     
     document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     
     setTimeout(() => {
      textMengetik.innerHTML = "Offline";
     }, 5500);
     
     setTimeout(() => {
      infoAlert.innerHTML = "Pesan dari system !";
      blurLayer.style.display = "block";
      myAlert.style.display = "block";
      myAlertText.innerHTML = 'bot males melanjutkan chatting dengan kamu lain kali tolong di jaga ketikan nya. sekarang dia ingin merefresh browsernya secara paksa';
      btnAlert.addEventListener('click', toxicAlert);
     }, 12000);
    }, 6000);
   }, 4000);
  } else if (init <= 1) {
   init = -1;
   setTimeout(() => {
    setTimeout(() => {
     textMengetik.innerHTML = "Offline"
    }, 700);
    infoAlert.innerHTML = `Tolong di jaga ketikan nya ${genderSay}!`;
    blurLayer.style.display = "block";
    myAlert.style.display = "block";
    myAlertText.innerHTML = 'bot mendeteksi kamu berkata kata yang tidak sepantasnya. tolong untuk berkata kata yang baik & sopan, <br>dan bot saat ini ingin merefresh website nya secara paksa';
    btnAlert.addEventListener('click', toxicAlert);
   }, 2000);
  }
 }

 startTime();
 clonedTimeQuestion.innerHTML = timeQuestion.innerHTML;
 clonedTimeAsk.innerHTML = timeAsk.innerHTML;
 clonedTimeSticker.innerHTML = timeSticker.innerHTML;

 barier.style.display = "block";
 originalPertanyaan.style.display = "none";
 
if (switchParticle) {
 chatValue = userSay({ particle: jawaban.value })[11];
 
 userDelay({ particle: jawabanValue });
 clonedTextJawaban.innerHTML = userSay({ particle: jawabanValue })[11];
 
 document.getElementById('contentPertanyaan').appendChild(clonedElementJawaban.cloneNode(true));
 
 if (doneSwitchParticle) {
  chatParticle++;
  setTimeout(() => {
   
   textMengetik.innerHTML = "Online";
   
   if (chatParticle === 1) {
    clonedTextPertanyaan.innerHTML = `ok sekarang kita lanjut ke topik sebelum nya ya`;
   } else {
    if (kataMau.some((kata) => jawabanValue.includes(kata))) {
     doneSwitchParticle = false;
     switchParticle = false;
     chatParticle = 0;
     
     clonedTextPertanyaan.innerHTML = `okk tadi sampe mana ya??`;
    } else {
     if (chatParticle <= 3) {
      clonedTextPertanyaan.innerHTML = `hemmmmm😐😐`;
     } else if (chatParticle === 4) {
      clonedTextPertanyaan.innerHTML = `ish apasihh tinggal bilang iya aja susah`;
     } else {
      clonedTextPertanyaan.innerHTML = `gatauh gelap🙄`;
     }
    }
   }
   document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
  }, 1122);
 }
} else {
  if (init === 1) {
  // console.log({ nama: jawaban.value });
   chatValue = userSay({ nama: jawaban.value })[0];
   userDelay({ nama: jawaban.value });
   
   clonedTextJawaban.innerHTML = userSay({ nama: jawabanValue })[0];
   contentJawaban.style.display = "none";
   clonedElementJawaban.style.display = "block";
   footerEmail.innerHTML = `Berikan kritik & saranya ${userSays[0]}.`;
   
   document.getElementById('contentPertanyaan').appendChild(clonedElementJawaban.cloneNode(true));
   
   setTimeout(() => {
    
    textMengetik.innerHTML = "Online";
    if ([`${namaDepan}`, `${midName}`].some((kata) => jawabanValue.includes(kata))) {
     mainChat = 0;
     contentPertanyaan.style.display = "block";
     
     if (!mainChatIs) {
      clonedTextPertanyaan.innerHTML = botSay({ nama: jawabanValue })[1];
      
      document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     } else {
      mainChatIs = false;
      clonedTextPertanyaan.innerHTML = `dari tadi bisa ga si ${namaDepan}?!? btw kenalin aku adalah chat bot biasa, klo ngeselin salahin developer nya`;
      
      document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     }
    } else {
     init = 0;
     mainChat++;
     if (mainChat === 1) {
      contentPertanyaan.style.display = "block";
      setTimeout(() => {
       textMengetik.innerHTML = "Online";
       
       
       clonedTextPertanyaan.innerHTML = "bener bukan itu nama kamu yang aku sebut tadi?";
       
       document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
      }, 1122);
     } else if (mainChat === 2) {
      contentPertanyaan.style.display = "block";
      setTimeout(() => {
       textMengetik.innerHTML = "Online";
       
       
       clonedTextPertanyaan.innerHTML = "coba dong sebut nama kamu biar aku bisa mastiin bener apa engga";
       
       document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
      }, 1122);
     } else if (mainChat === 3) {
      setTimeout(() => {
       textMengetik.innerHTML = "Online";
       
       
       clonedTextPertanyaan.innerHTML = `kamu gapunya nama ya? wkwk dasar ${namaDepan}, tinggal nyebut nama sendiri aja susah`;
       
       document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
      }, 1122);
     } else if (mainChat === 7) {
      mainChatIs = true;
      clonedTextPertanyaan.innerHTML = `emang nya enaq di diemin? wkwkwk<br>tinggal nyebut nama aja susah`;
      
      document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     } else if (mainChat >= 7) {
   //console.log("di diemin lagi")
     }
    }
   }, 1122);
  } else if (init === 2) {
   // console.log({ nanyas: jawaban.value });
    chatValue = userSay({ nanyas: nilaiAngka })[1];
    fullType.push(chatValue);
    
    botDelay({ nanyas: nilaiAngka });
    clonedTextJawaban.innerHTML = userSay({ nanyas: jawabanValue })[1];
    
    document.getElementById('contentPertanyaan').appendChild(clonedElementJawaban.cloneNode(true));
    
   setTimeout(() => {
    
    textMengetik.innerHTML = "Online";
    originalTimeQuestion.innerHTML = timeQuestion.innerHTML;
    
    if (isFullLogin) {
     init = 1;
     mainChat++;
     if (!chatValidation) {
      if (mainChat === 1) {
       clonedTextPertanyaan.textContent = 'yey kamu udah mengisi form yang aku berikan';
      } else if (mainChat === 2) {
       clonedTextPertanyaan.textContent = 'jadi aku bisa tau tentang kamu🥰';
      } else {
       chatValidation = true;
       clonedTextPertanyaan.innerHTML = mainChat ? `gapapa kan ${namaDepan} selama chat aku bertanya tentang kamu?` : `btw ${namaDepan} ga keberatan kan selama chat aku bertanya tentang kamu?`;
      }
     } else {
      if (!chatRepeated) {
       if (kataGamau.some((kata) => jawabanValue.includes(kata)) || kataPertanyaan.some((kata) => jawabanValue.includes(kata))) {
         chatRepeated = true;
         clonedTextPertanyaan.innerHTML = `ko gitu, emang nya knapa ${namaDepan}?`;
       } else {
        isCloneChat = true;
        if (kataNetral.some((kata) => jawabanValue.includes(kata))) {
         init = 1;
         mainChat = 0;
         clonedTextPertanyaan.innerHTML = `yaudah ya berarti skrng udh di bolehin ni??`;
        } else {
         init = 2;
         mainChat = 0;
         genderValidation();
         clonedTextPertanyaan.innerHTML = `okee ${namaDepan} ${genderSay} 😇`;
          
         setTimeout(() => {
          clonedTextPertanyaan.innerHTML = botSay({ nanyas: jawabanValue })[2];
          
          document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
         }, 1122);
        }
       }
      } else {
       mainChat++;
       if (!mainChatIs) {
        if (mainChat === 1) {
         clonedTextPertanyaan.innerHTML = `ya tapi kan aku dibuat untuk nanyain hal tentang kamu`;
         
         setTimeout(() => {
          clonedTextPertanyaan.innerHTML = `jadi mau gimana lagi ${namaDepan}?, cuma jawab pertanyaan aku doang ko simpel`;
          
          document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
         }, 1122);
        } else if (mainChat > 1 && kataNetral.some((kata) => jawabanValue.includes(kata))) {
         isCloneChat = true;
         chatRepeated = false;
         clonedTextPertanyaan.innerHTML = `yaudah ya berarti skrng udh di bolehin ni??`;
        } else if (mainChat === 2) {
         if (kataPertanyaan.some((kata) => jawabanValue.includes(kata))) {
          clonedTextPertanyaan.innerHTML = `ya udah aku kan cuma pengen tau kamu aja`;
          isCloneChat = false;
         } else {
          clonedTextPertanyaan.innerHTML = `intinya aku gamau tau kamu harus jawab apa yang aku tanyain titik😠`;
          
          setTimeout(() => {
           clonedTextPertanyaan.innerHTML = `klo kamu tetep gamau, aku bakalan diem`;
           
           document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
           isCloneChat = false;
          }, 1122);
         }
        } else {
         mainChatIs = true;
      //console.log("masuk ke mainChat 5, init ke 2 bot diam");
        }
       } else {
        if (mainChat >= 4 && kataNetral.some((kata) => jawabanValue.includes(kata))) {
         isCloneChat = true;
         mainChatIs = false;
         clonedTextPertanyaan.innerHTML = `nah gitu dong ${namaDepan}, aku kan cuma nanya doang ga gigit kamu🙄`;
         
         setTimeout(() => {
          init = 2;
          mainChat = 0;
          clonedTextPertanyaan.innerHTML = botSay({ nanyas: jawabanValue })[2];
          
          document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
         }, 1122);
        } else {
         //console.log('bott tetap diam dan user harus mengatakan kata netral')
        }
       }
      }
     }
    } else {
     init = 1;
     if (!chatRepeated) {
      chatRepeated = true;
      clonedTextPertanyaan.innerHTML = 'Ups! sebelum kita lanjut chatnya kamu harus memperkenalkan diri terlebih dahulu';
      
      setTimeout(() => {
       chatValidation = false;
       notificationPopup({ icon: 'alert', text: 'KAMU HARUS MENGISI FORM TERLEBIH DAHULU ✓' });
       clonedTextPertanyaan.innerHTML = 'tolong isi input yang aku berikan ya !';
       
       document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
      }, 1122);
     } else {
      mainChat = 0;
      chatRepeated = false;
      document.getElementById('back-personal').setAttribute('onclick', `
       loadingAnimation({
        active: pageChat,
        remove: personality_page,
        conditional: defaultElem,
        isRemove: defaultElem,
        action: 'active'})`);
       
       setTimeout(() => {
       loadingAnimation({ active: personality_page, remove: pembungkusContainer, conditional: defaultElem, isRemove: defaultElem, action: 'active' });
      }, chatDelay)
     }
    }
    (isCloneChat) ? document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true)) : console.log("tidak is cloneChat || Bot Diam");
   }, 1122);
  } else if (init === 3) {
  // console.log({ umurs: jawabanValue });
   chatValue = userSay({ umurs: jawabanValue })[2];
 
   userDelay({ umurs: jawabanValue });
   clonedTextJawaban.innerHTML = userSay({ umurs: jawabanValue })[2];
 
   document.getElementById('contentPertanyaan').appendChild(clonedElementJawaban.cloneNode(true));
   
   setTimeout(() => {
    img.src = 'assets/icon/reactIdk.webp';
    
    textMengetik.innerHTML = "Online";
    
    if (kataHeran.some((kata) => jawabanValue.includes(kata))) {
     init = 2;
     clonedTextPertanyaan.innerHTML = `sebenernya saat kamu login aku udah tau hal hal tentang kamu`;
     
     document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     
     setTimeout(() => {
      clonedTextPertanyaan.innerHTML = `jadi jangan heran dan nanya nanya lagi ya ${namaDepan} 😇`;
      
      document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     }, 1122);
    } else {
     if (jawabanValue.includes(`${nilaiAngka}`)) {
       mainChat = 0;
       isCloneChat = true;
       chatRepeated = false;
       alreadySticker = false;
       
      if (jawabanValue.includes(`${umurNow}`) && nilaiAngka.length === 2) {
       if (!mainChatIs) {
        clonedTextPertanyaan.innerHTML = botSay({ umurs: jawabanValue })[3];
       } else {
        clonedTextPertanyaan.innerHTML = `owh gitu ya. umur kamu skrng ${umurNow} 😒`;
       }
      } else if (jawabanValue.includes(`${umurTrue}`) && nilaiAngka.length === 2) {
       let bulanUltah = birth.split(' ')[1];
       if (!mainChatIs) {
        clonedTextPertanyaan.innerHTML = `owh skrng masi ${nilaiAngka} tahun ya, karna skrng blom bulan ${bulanUltah} jadi umur kamu blom ${umurNow} tahun`;
       } else {
        clonedTextPertanyaan.innerHTML = `owh umur kamu skrng ${umurTrue}, nh gitu dong ${namaDepan} 😒`;
       }
      } else if (jawabanValue.includes(`${nilaiAngka}`) || umurT || umurM) {
       init = 2;
       if (nilaiAngka.length > 2) {
        clonedTextPertanyaan.innerHTML = `buset seriusan umur kamu ${nilaiAngka} tahun?, lucu banget sih kamu ${namaDepan} 🙄`;
       } else {
        clonedTextPertanyaan.innerHTML = `srius dong kamu jangan bohong, umur kamu kan bukan ${nilaiAngka}`;
       }
      }
     } else {
      init = 2;
      if (!mainChatIs) {
       if (kataGamau.some((kata) => jawabanValue.includes(kata))) {
        mainChat++;
        if (mainChat === 1) {
         clonedTextPertanyaan.innerHTML = `sebut dong umur kamu berapa ${namaDepan}`;
        } else if (mainChat === 2) {
         clonedTextPertanyaan.innerHTML = `kamu gimana si ${namaDepan}?`;
         
         setTimeout(() => {
          clonedTextPertanyaan.innerHTML = `tadi kamu bilang dibolehin, sekarang knapa ga di bolehin??`;
        
          document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
          
          setTimeout(() => {
            initSticker++;
            imgSticker.src = "assets/sticker/sad.webp";
            document.querySelector("#contentPertanyaan").appendChild(stickers.cloneNode(true));
          }, 2500);
         }, 1122);
        } else if (mainChat === 3) {
         clonedTextPertanyaan.innerHTML = `malesin ${namaDepan} ga nempatin perkataan nya 😔`;
        } else {
         isCloneChat = false;
         clonedTextPertanyaan.innerHTML = `malesin nih ${namaDepan} 😞`;
         
         setTimeout(() => {
          clonedTextPertanyaan.innerHTML = `yaudah mending aku diem aja.`;
          
          document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
         }, 1122);
        }
       } else {
       (mainChat >= 4 && !chatRepeated) ? mainChat = 0 : mainChat++;
        if (!chatRepeated) {
         if (mainChat === 1) {
          clonedTextPertanyaan.innerHTML = `iya kasi tau dong ${namaDepan}`;
          
         } else if (mainChat === 2) {
          clonedTextPertanyaan.innerHTML = `sebut dong umur kamu berapa, aku pengen tau`;
          
         } else if (mainChat === 3) {
          clonedTextPertanyaan.innerHTML = `aku kan pengen tau tentang kamu, masa gamau kasi tau`;
          
          setTimeout(() => {
           if (!alreadySticker) {
            initSticker++;
            alreadySticker = true;
            imgSticker.src = "assets/sticker/sad.webp";
            document.querySelector("#contentPertanyaan").appendChild(stickers.cloneNode(true));
           } else {
            alreadySticker = false;
           }
          }, 2500);
         } else if (mainChat === 4) {
          clonedTextPertanyaan.innerHTML = `sekali lagi. skrng umur kamu berapa?`;
         } else {
          chatRepeated = true;
          clonedTextPertanyaan.innerHTML = `sebut donggg ${namaDepan} 😤`;
         }
        } else {
         mainChatIs = true;
         clonedTextPertanyaan.innerHTML = `klo kamu ga ngasih tau. aku akan diem sampe kamu kasi tau`;
         
         setTimeout(() => {
          initSticker++;
          isCloneChat = false;
          imgSticker.src = "assets/sticker/badmood.webp";
          document.querySelector("#contentPertanyaan").appendChild(stickers.cloneNode(true));
         }, 2500);
        }
       }
      } else { //else ketika !mainChatIs
       init = 2;
    //console.log("masuk ke else ketika bot sudah menanyakan pertanyaan");
      }
     }
    }
    (isCloneChat) ? document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true)) : console.log("tidak is cloneChat || Bot Diam");
   }, 1122);
  } else if (init === 4) {
   //console.log({ pacar: jawabanValue });
   chatValue = userSay({ pacar: jawabanValue })[3];
   
   img.src = 'assets//icon/boticon.webp';
   userDelay({ umurs: jawabanValue });
   clonedTextJawaban.innerHTML = userSay({ pacar: jawabanValue })[3];
   
   document.getElementById('contentPertanyaan').appendChild(clonedElementJawaban.cloneNode(true));
   
   setTimeout(() => {
    
    if (kataHeran.some((kata) => jawabanValue.includes(kata))) {
     init = 3;
     clonedTextPertanyaan.innerHTML = `sebenernya saat kamu login aku udah tau hal hal tentang kamu`;
  //console.log("user bertanya mengapa bisa tau");
     
     document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     
     setTimeout(() => {
      clonedTextPertanyaan.innerHTML = `jadi jangan heran dan nanya nanya lagi ya ${namaDepan} 😇`;
      
      document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     }, 1122);
    } else {
     if (!mainChatIs) {
      chatValidation = false;
      clonedTextPertanyaan.innerHTML = botSay({ pacar: jawabanValue })[4];
      document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     } else {
      init = 3;
      if (!chatRepeated) {
       chatRepeated = true;
       clonedTextPertanyaan.innerHTML = `kamu masih mau lanjut lagi ga nih chat nya? 😒`;
      
       document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
      } else {
       mainChat++;
       
       if (!chatRepeats) {
        if (kataGamau.some((kata) => jawabanValue.includes(kata)) && mainChat >= 1) {
          
         if (!chatValidation) {
          chatValidation = true;
          clonedTextPertanyaan.innerHTML = `serius kamu gamau lanjutin chat nya? 🥺`;
          
          document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
         } else {
          chatRepeats = true;
          clonedTextPertanyaan.innerHTML = `ok klo ${namaDepan} maunya itu`;
          
          document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
         }
        } else {//kata gamau && chatInit 1
         if (kataBatal.some((kata) => jawabanValue.includes(kata))) {
          
          mainChat = 0;
          chatRepeats = false;
          chatRepeated = false;
          chatValidation = false;
          mainChatIs = false;
          
          clonedTextPertanyaan.innerHTML = `ok kita lanjutin ya chat nya ${namaDepan}.`;
          
          document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
          
         } else {
          if (['males', 'badmood'].some((kata) => jawabanValue.includes(kata)) && !noRepeatChat) {
           mainChat = 0;
           noRepeatChat = true;
           clonedTextPertanyaan.innerHTML = `abis nya kamu sih bikin aku males, udh tau aku pengen kamu yang kasi tau 🥺`;
           
           document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
          } else {
           if (mainChat === 1) {
            clonedTextPertanyaan.innerHTML = `yaudah aku lanjutin yaa, tapi kmu jangan kaya tadi lagi`;
          
           document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
           
           } else if (mainChat === 2) {
            clonedTextPertanyaan.innerHTML = `ok janji dulu 🤞`;
          
            document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
            
           } else if (mainChat >= 3) {
            
            if (jawabanValue.includes('janji')) {
             mainChatIs = false;
             chatRepeats = false;
             chatRepeated = false;
             noRepeatChat = false;
             chatValidation = false;
             
             clonedTextPertanyaan.innerHTML = `okey 🥳`;
             
             document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
             
             setTimeout(() => {
              initSticker++;
              imgSticker.src = "assets/sticker/horee.webp";
              document.querySelector("#contentPertanyaan").appendChild(stickers.cloneNode(true));
             }, 2500);
            } else {
             init = 3;
             mainChat = 2;
             clonedTextPertanyaan.innerHTML = `kamu blom janji ${namaDepan} 🥺`;
             
             document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
            }
           }
          }
         }
        }
       } else { // else chatRepeats
        if (!noRepeatChat) {
         noRepeatChat = true;
         clonedTextPertanyaan.innerHTML = `ok 😔`;
         
         document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
         
         setTimeout(() => {
          initSticker++;
          imgSticker.src = "assets/sticker/clown.webp";
          document.querySelector("#contentPertanyaan").appendChild(stickers.cloneNode(true));
         }, 2500);
        } else {
         if (kataNetral.some((kata) => jawabanValue.includes(kata))) {
          mainChat = 0;
          chatRepeats = false;
          noRepeatChat = false;
          
          clonedTextPertanyaan.innerHTML = `kamu mah malesin banget tau 😓`;
           
          document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
          
          setTimeout(() => {
           initSticker++;
           imgSticker.src = "assets/sticker/sadcorner.webp";
           document.querySelector("#contentPertanyaan").appendChild(stickers.cloneNode(true));
          }, 2500);
         } else {
       //console.log("bot tidak akan membalas sampai user mengucapkan kataNetral");
         }
        }
       }
      }
     }
    }
   }, 1122);
  } else if (init === 5) {
  // console.log({ maaf: jawabanValue });
   chatValue = userSay({ maaf: jawabanValue })[4];
   
   userDelay({ maaf: jawabanValue });
   clonedTextJawaban.innerHTML = userSay({ maaf: jawabanValue })[4];
 
   document.getElementById('contentPertanyaan').appendChild(clonedElementJawaban.cloneNode(true));
 
   setTimeout(() => {
    
    textMengetik.innerHTML = "Online";
    
    if (!mainChatIs) {
     if (!chatValidation) {
      init = 4;
      mainChat = 0;
      mainChatIs = true;
      chatValidation = true;
      clonedTextPertanyaan.innerHTML = botSay({ game: jawabanValue })[5];
      
      document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
      
      setTimeout(() => {
       initSticker++;
       imgSticker.src = "assets/sticker/hmm.webp";
       document.querySelector("#contentPertanyaan").appendChild(stickers.cloneNode(true));
      }, 2500);
     } else {
      mainChat = 0;
      chatValidation = false;
      
      if (guessGame) {
       clonedTextPertanyaan.innerHTML = `ok, kamu jangan main curang ya liat google atau apa. karna aku bakalan tauu`;
     
      document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
      
      } else if (typingGame) {
       clonedTextPertanyaan.innerHTML = `okk, ${namaDepan} jangan copy paste ya😁 karna aku pasti tau wkkw`;
     
      document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
      
      } else if (isChattan) {
       init = 5;
       clonedTextPertanyaan.innerHTML = `jujur aku agak bingung mau ngobrol apa sama kamu🥴`;
       
       document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
       
       setTimeout(() => {
        clonedTextPertanyaan.innerHTML = `tapi gpp yang penting aku bisa chattan sama kamu😆`;
        
        document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
        setTimeout(() => {
         clonedTextPertanyaan.innerHTML = `jiakkkhhh wkwkwkkw`;
         
         document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
         
         setTimeout(() => {
          initSticker++;
          imgSticker.src = "assets/sticker/smile.webp";
          document.querySelector("#contentPertanyaan").appendChild(stickers.cloneNode(true));
         }, 2500);
        }, 1122);
       }, 1122);
      }
     }
    } else {
     init = 4;
     mainChat++;
     if (mainChat === 1) {
      clonedTextPertanyaan.innerHTML = botSay({ game: jawabanValue })[6];
     
      document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     
     } else if (mainChat === 2) {
      clonedTextPertanyaan.innerHTML = `klo ${namaDepan} mau nya main game atau lanjut chatan aja?`;
     
      document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
      
      setTimeout(() => {
       clonedTextPertanyaan.innerHTML = `klo mau chatan bilang 'chatan' klo mau main game bilang 'game' `;
       
       document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
      }, 1122);
     } else if (mainChat === 3) {
      if (jawabanValue.includes(`chatan`)) {
       isChattan = true;
       mainChatIs = false;
       clonedTextPertanyaan.innerHTML = `yaudah klo ${namaDepan} maunya lanjut chatan`; 
       
       document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
      } else if (jawabanValue.includes(`game`)) {
       clonedTextPertanyaan.innerHTML = `ok ${namaDepan}. btw aku ada 2 pilihan game`;
       
       document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
       
       setTimeout(() => {
        clonedTextPertanyaan.innerHTML = `ada game tebak gambar dan ada game cepet cepetan ngetik dari a - z`;
        
        document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
        
        setTimeout(() => {
         clonedTextPertanyaan.innerHTML = `${namaDepan} mau main game yang mana yang ke 1 atau 2?`;
        
         document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
        }, 1122);
       }, 1122);
      } else {
       mainChat = 2;
       clonedTextPertanyaan.innerHTML = `${namaDepan} mau yang mana? bilang aja`;
        
       document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
      }
     } else {
      mainChatIs = false;
      chatRepeated = false;
      noRepeatChat = false;
      
      if ((jawabanValue.includes(`1`) && nilaiAngka.length === 1)) {
       guessGame = true;
       playGuess = true;
       chatValidation = true;
       
       clonedTextPertanyaan.innerHTML = `ok skrng kita main tebak tebakan ya`;
        
       document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
       
      } else if ((jawabanValue.includes(`2`) && nilaiAngka.length === 1) || isGameWin){
       typingGame = true;
       playTyping = true;
       isGameWin = false;
       chatValidation = true;
       
       clonedTextPertanyaan.innerHTML = `ok skrng kita main game cepet cepetan ngetik dari a - z ya`;
       
       document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
       
      } else {
       if (!chatRepeated || jawabanValue.includes(`${nilaiAngka}`)) {
        chatRepeated = true;
        clonedTextPertanyaan.innerHTML = `${namaDepan} yang bener dong kan gada pilihan yang ke ${nilaiAngka} 🙄`;
        
        document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
       } else {
        if (!noRepeatChat) {
         noRepeatChat = true;
         clonedTextPertanyaan.innerHTML = `yaudah kamu mau pilih yang mana ${namaDepan}?`;
         
         document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
         
         setTimeout(() => {
          initSticker++;
          imgSticker.src = "assets/sticker/hmm.webp";
          document.querySelector("#contentPertanyaan").appendChild(stickers.cloneNode(true));
         }, 2500);
        }
       }
      }
     }
    }
   }, 1122);
  } else if (init === 6 && playGuess) {
  // console.log({ game: jawabanValue });
   chatValue = userSay({ game: jawabanValue })[5];
   
   userDelay({ game: jawabanValue });
   clonedTextJawaban.innerHTML = userSay({ game: jawabanValue })[5];
 
   document.getElementById('contentPertanyaan').appendChild(clonedElementJawaban.cloneNode(true));
   
   setTimeout(() => {
    
    textMengetik.innerHTML = "Online";
    
    if (!mainChatIs) {
     if (!chatValidation) {
      init = 5;
      chatValidation = true;
      mainChatIs = true;
      
      clonedTextPertanyaan.innerHTML = `oke siapp ya ${namaDepan}`;
      
      document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
      
     } else { // !chatValidation
      init = 5;
      if (noRepeatChat) {
       if (kataGame.some((kata) => jawabanValue.includes(kata)) && isGameWin) {
       
        clonedTextPertanyaan.innerHTML = `owh iya karna kamu udh bisa jawab semua ini hadiah buat kamu ❤️😁`;
        
        document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
        
       } else {
        if (['shesh', 'sheesh'].some((kata) => jawabanValue.includes(kata))) {
         clonedTextPertanyaan.innerHTML = `sheshh dingin banget kaya es batuk`;
        } else {
         mainChatIs = true;
         guessGame = false;
         chatRepeats = false;
         chatRepeated = false;
         chatValidation = false;
         clonedTextPertanyaan.innerHTML = `yaudah ${namaDepan} mau lanjut apa main game lagi apa chatan? 😇`;
        }
        document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
       }
      } else {
       if (!chatRepeats) {
        if (!jawabanBenar) {
         if (jawabanValue.includes('ulang')) {
          chatRepeated = false;
          mainChatIs = true;
          
          if (mainChat === 1) {
           mainChat = 0;
           clonedTextPertanyaan.innerHTML = `jangan pantang menyerah ya ${namaDepan} jawabnya😆`;
           
          } else if(mainChat === 2){
           mainChat = 1;
           clonedTextPertanyaan.innerHTML = `semangat ${namaDepan} aku tau kamu pasti bisa jawabnya😁`;
           
          } else if(mainChat === 3){
           mainChat = 2;
           clonedTextPertanyaan.innerHTML = `ayo ${namaDepan} aku tau kamu pasti bisa`;
          }
          
          document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
          
         } else if (jawabanValue.includes('udahan')) {
          chatRepeats = true;
          clonedTextPertanyaan.innerHTML = `yhh ga seru ah ${namaDepan} ngajak udahan😒`;
          
          document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
          
         } else {
          chatRepeats = true;
          clonedTextPertanyaan.innerHTML = `${namaDepan} kamu pilih mana lanjut main apa engga?`;
          
          document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
         }
        } else { // true jawabanBenar
         chatRepeats = true;
         if (!botAnswerExecuted) {
          botAnswerExecuted = true;
          clonedTextPertanyaan.innerHTML = `${namaDepan} mau lanjut main lagi ga? aku masih ada tebak gambar lagi, mau ketik 'iya' gamau ketik 'gamau'`;
         } else {
          clonedTextPertanyaan.innerHTML = `mau lanjut lagi apa udahan?`;
         }
         document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
        }
       } else { //true chatRepeats
        if (!jawabanBenar) {
         noRepeatChat = true;
         clonedTextPertanyaan.innerHTML = `yaudah deh gpp klo gitu`;
         
         document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
         
        } else {
         if (jawabanValue.includes('iya')) {
          
          chatRepeated = false;
          chatValidation = true;
          mainChatIs = true;
          
          if (mainChat === 1) {
           mainChat = 1;
           chatRepeats = false;
           clonedTextPertanyaan.innerHTML = `okkey ${namaDepan} tebak gambar selanjutnya ya 😁`;
           
           document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
          }else if(mainChat === 2) {
           mainChat = 2;
           chatRepeats = false;
           clonedTextPertanyaan.innerHTML = `kamu hebat ${namaDepan} bisa jawab tebak gambar tadi, ok next yaa`;
          
           document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
          }else if(mainChat === 3) {
           mainChat = 3;
           chatRepeats = false;
           clonedTextPertanyaan.innerHTML = `pinter banget si kamu ${namaDepan}, bikin aku kagum aja 🤭`;
           
           document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
          }
         } else if (jawabanValue.includes('engga')) {
          guessGame = false;
          mainChat = 0;
          chatRepeats = false;
          chatRepeated = false;
          chatValidation = false;
          mainChatIs = true;
          
          clonedTextPertanyaan.innerHTML = `okk klo ${namaDepan} udh gamau😉`;
          
          document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
          
         } else {
          clonedTextPertanyaan.innerHTML = `yang jelas ${namaDepan} mau gimana? 'iya' apa 'gamau'`;
          
          document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
         }
        }
       }
      }
     }
    } else { //!mainChatIs || main lg
     init = 5;
     if (guessGame) {
      if (!chatRepeated) {
       mainChat++;
       if (!isGameWin) {
        if (mainChat === 1) {
         initGuess++;
         mainChat = 0;
         chatRepeated = true;
         imgPicture.src = 'assets/tebakgambar/tekananbatin.webp';
         
         document.querySelector("#contentPertanyaan").appendChild(guessPicture.cloneNode(true));
         
         clonedTextPertanyaan.innerHTML = `hayo hayoo tebak gambar apa di atas?😆`;
         
         document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
         
        } else if (mainChat === 2) {
         initGuess++;
         mainChat = 1;
         chatRepeated = true;
         imgPicture.src = 'assets/tebakgambar/pulangsekolah.webp';
         
         document.querySelector("#contentPertanyaan").appendChild(guessPicture.cloneNode(true));
         
         clonedTextPertanyaan.innerHTML = `hayo tebak gambar diatas??, gampang ko jawaban nya 😁`;
         
         document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
        } else if (mainChat === 3) {
         initGuess++;
         mainChat = 2;
         chatRepeated = true;
         imgPicture.src ='assets/tebakgambar/lukadalam.webp';
         
         document.querySelector("#contentPertanyaan").appendChild(guessPicture.cloneNode(true));
         
         clonedTextPertanyaan.innerHTML = `tebak gambar ini susah banget tau, aku aja sampe gatau🤔`;
         
         document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
        }
        
        setTimeout(() => {
         clonedTextPertanyaan.innerHTML = `ingett yaa ${namaDepan} ${genderSay} baik hati dan suka ${hobbyFir}, jangan curangg😼`;
         
         document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
        }, 2500);
       } else {
        mainChatIs = false;
        noRepeatChat = true;
        chatValidation = true;
        
        clonedTextPertanyaan.innerHTML = `whh ternyata tebak gambarnya udh habis. selamat ya ${namaDepan} kamu keren bisa jawab semua tebak gambarnya🥶`;
        
        document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
       }
      } else {//!chatRepeated
       if (['udahan', 'capek', 'gamau', 'selesai'].some((kata) => jawabanValue.includes(kata))) {
        mainChatIs = false;
        noRepeatChat = true;
        
        clonedTextPertanyaan.innerHTML = `yhh yaudah deh klo kamu ngajak udahan main nya🥺`;
        
        document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
        
       } else {
        mainChat++;
        if (!isGameWin) {
         if (mainChat === 1 && jawabanValue.includes('tekanan batin')) {
          
          chatRepeats = false;
          jawabanBenar = true;
          mainChatIs = false;
          clonedTextPertanyaan.innerHTML = `whh jawaban kamu benar ${namaDepan} 😁`;
          
          document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
          
         } else if (mainChat === 2 && jawabanValue.includes('pulang sekolah')) {
          
          chatRepeats = false;
          jawabanBenar = true;
          mainChatIs = false;
          
          clonedTextPertanyaan.innerHTML = `wahh kamu hebat ${namaDepan} jawaban kamu bener pulang sekolah😅`;
          
          document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
          
         } else if (mainChat === 3 && jawabanValue.includes('luka dalam')) {
          
          isGameWin = true;
          chatRepeats = false;
          jawabanBenar = true;
          mainChatIs = false;
          clonedTextPertanyaan.innerHTML = `pinter banget sii kamu ${namaDepan} jawaban kamu benar🥳`;
          
          document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
          
         } else {
          if (mainChat >= 1 && kataCurang.some((kata) => jawabanValue.includes(kata))){
          	chatRepeated = true;
           mainChatIs = true;
           
           if (mainChat === 1) {
            mainChat = 0;
           } else if (mainChat === 2) {
            mainChat = 1;
           } else if (mainChat === 3) {
            mainChat = 2;
           }
           
           clonedTextPertanyaan.innerHTML = `ya klo kamu main curang aku bakalan tau, jadi percyuma percyumaaa😝`;
           
           document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
           
           setTimeout(() => {
           	clonedTextPertanyaan.innerHTML = `yaudah coba tebak gambar apa diatas🤪`;
           
           document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
           }, 1122);
          } else {
           mainChatIs = false;
           chatRepeats = false;
           jawabanBenar = false;
           clonedTextPertanyaan.innerHTML = `maaf ya ${namaDepan} jawaban kamu salah`;
           
           document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
           
           setTimeout(() => {
            clonedTextPertanyaan.innerHTML = `jika ingin menjawab ulang ketikan 'ulang' tidak ingin melanjutkan ketikan 'udahan'`;
            
            document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
           }, 1122);
          }
         }
        } else {
         guessGame = false;
      //console.log("game selesai")
        }
       }
      }
      
     } else if (!guessGame) {
      mainChat++;
      if (!chatValidation) {
       mainChat = 0;
       chatValidation = true;
       
       if (isGameWin) {
        clonedTextPertanyaan.innerHTML = `mau kan lanjut chatan atau main game yang lain?`;
       } else {
        clonedTextPertanyaan.innerHTML = `yaudah klo kamu pilih udahan main nya, kita lanjut chtan ya`;
       }
       
       document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
      } else {
       if (kataGamau.some((kata) => jawabanValue.includes(kata))) {
        
        if (mainChat === 1) {
         clonedTextPertanyaan.innerHTML = `ko gamau lanjut chatan juga?, aku kan blom selsai ngobrolnya`;
        
         document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
        } else if (mainChat === 2) {
         clonedTextPertanyaan.innerHTML = `klo ${namaDepan} tetep gamau aku bakalan diem selamanya😠`;
         
         document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
        } else if (mainChat >= 3) {
         if (!chatRepeated) {
          chatRepeated = true;
          chatRepeats = false;
          clonedTextPertanyaan.innerHTML = `kali ini aku serius. klo kamu tetep gamau aku akan diem`;
          
          document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
         } else {
       //console.log("masuk ke validasi bot tidak mengirim chat lagi")
         }
        }
       } else {
        if (isGameWin) {
         if (kataNetral.some((kata) => jawabanValue.includes(kata))) {
         
          init = 6;
          guessGame = false;
          playGuess = false;
          chatRepeats = false;
          chatRepeated = false;
          chatValidation = false;
          mainChatIs = false;
          
          clonedTextPertanyaan.innerHTML = `ok kamu mau pilih main game apa abis ini?`;
          
          document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
          
         } else {
          if ([`main`, `game`, `lanjut`].some((kata) => jawabanValue.includes(kata))) {
           init = 4;
           playGuess = false;
           guessGame = false;
           mainChatIs = true;
           chatRepeats = false;
           chatRepeated = false;
           chatValidation = false;
           clonedTextPertanyaan.innerHTML = `ok main game lagi nih yaa`;
          } else if ([`chattan`, 'chat'].some((kata) => jawabanValue.includes(kata))) {
           init = 5;
           mainChatIs = false;
           chatRepeats = false;
           chatRepeated = false;
           chatValidation = false;
           clonedTextPertanyaan.innerHTML = `ok klo begitu, kita lanjut chat aja ya😇`;
          } else {
           clonedTextPertanyaan.innerHTML = `gimana ni kamu mau lanjut apa?`;
          }
          document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
         }
        } else {//!isGameWin
         if (!chatRepeats) {
          if (chatRepeated) {
           if (kataNetral.some((kata) => jawabanValue.includes(kata))) {
            
            chatRepeats = true;
            chatRepeated = false;
            chatValidation = true;
            mainChatIs = true;
            
            clonedTextPertanyaan.innerHTML = `makanya ${namaDepan} jangan  begitu, aku kan masi pengen ngobrol`;
           
            document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
           
           } else {
         //console.log("bot tidak akan menjawab sampai user mengatakan kata netral")
           }
          } else {
           chatRepeats = true;
           clonedTextPertanyaan.innerHTML = `okeh ${namaDepan} lanjut chat ya😇`;
           
           document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
          }
         } else {
          init = 6;
          guessGame = false;
          playGuess = false;
          chatRepeats = false;
          chatRepeated = false;
          chatValidation = false;
          mainChatIs = false;
          
          clonedTextPertanyaan.innerHTML = botSay({ game: jawabanValue })[7];
          
          document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
         }
        }
       }
      }
     } else {
   //console.log("wahhh lu ngecit ya? sampe bisa ga milih opsi😠😠");
     }
    }
   }, 1122);
  } else if (init === 6 && playTyping) {
  // console.log({ ok: jawabanValue });
   chatValue = userSay({ ok: jawabanValue })[6];
   
   userDelay({ ok: jawabanValue });
   clonedTextJawaban.innerHTML = userSay({ ok: jawabanValue })[6];
   
   document.getElementById('contentPertanyaan').appendChild(clonedElementJawaban.cloneNode(true));
   
   setTimeout(() => {
    
    textMengetik.innerHTML = "Online";
    
    if (!mainChatIs) {
    	init = 5;
    	mainChat++;
     if (!chatValidation) {
      if (mainChat === 1) {
       if (!alreadySticker) {
        alreadySticker = true;
        if (!noRepeating) {
         clonedTextPertanyaan.innerHTML = `oke btw ${namaDepan} main nya mau ada tantangan ga klo kalah?, ngerti kan maksud aku`;
       
  		     setTimeout(() => {
  		      clonedTextPertanyaan.innerHTML = `klo engga ngerti bilang aja`;
  		      
  		      document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
  		     }, 1122);
       	} else {
  		     clonedTextPertanyaan.innerHTML = `menurut kamu main nya mau ada tantangan nya ga?`;
       	}
       } else {
 		     setTimeout(() => {
 		     	mainChat = 2;
 		      clonedTextPertanyaan.innerHTML = `klo kamu mau ada tantangan nya bilang 'iya', engga bilang 'gamau'`;
 		      
 	      setTimeout(() => {
 	       initSticker++;
 	       imgSticker.src = "assets/sticker/hmm.webp";
 	       document.querySelector("#contentPertanyaan").appendChild(stickers.cloneNode(true));
 	       }, 2500);
 		     }, 1122);
       }
      } else if (mainChat === 2) {
      	if (kataGame.some((kata) => jawabanValue.includes(kata))) {
      		mainChat = 1;
      		
        clonedTextPertanyaan.innerHTML = `gini aku jelasin deh ${namaDepan}, misal kamu kalah nh nanti aku kasih kamu bbrp opsi tantangan yang bisa kamu pilih buat kamu`;
        
        setTimeout(() => {
         clonedTextPertanyaan.innerHTML = `begitu juga klo aku kalah, nnti kamu bisa kasi aku tantangan di opsi yang ada`;
        	
         document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
        }, 1122);
      	} else {
      		clonedTextPertanyaan.innerHTML = `klo kamu mau ada tantangan nya bilang 'iya', engga bilang 'gamau' 😇`;
      	}
      } else if (mainChat === 3) {
      	if (kataMau.some((kata) => jawabanValue.includes(kata))) {
      		 
      		isTantangan = true;
      		chatRepeated = false;
      		clonedTextPertanyaan.innerHTML = `ok ya ini adalah list tantangan klo ${namaDepan} kalah :<br><br>1). ${namaDepan} harus ngetik 200 huruf tanpa copy paste, harus di ketik.<br><br>2). ngetik 1 sampai 75 contoh 1 2 3 dan seterusnya, harus di spasi.<br><br>3). ketikan 25 kata random buat aku, apapun itu sesuka kamu.`;
      		
      	} else if (jawabanValue.includes('gamau')) {
      		chatRepeated = false;
      		alreadySticker = false;
      		clonedTextPertanyaan.innerHTML = `hmmm ${namaDepan} takut kalah kh?😏 yaudah klo gitu kita main tanpa pake tantangan.`;
      	} else {
      	 mainChat = 2;
      	 if(!chatRepeated) {
      	  chatRepeated = true;
       		clonedTextPertanyaan.innerHTML = `${namaDepan} kamu mau pilih yang mana?`;
       		
       		setTimeout(() => {
 	        initSticker++;
 	        imgSticker.src = "assets/sticker/hmm.webp";
 	        document.querySelector("#contentPertanyaan").appendChild(stickers.cloneNode(true));
 	       }, 2500);
      	 } else {
       		clonedTextPertanyaan.innerHTML = `seriuss ${namaDepan} mau yang gimana?`;
      	 }
      	}
      } else if (mainChat >= 4) {
      	mainChat = 0;
      	chatValidation = true;
      	if (kataGame.some((kata) => jawabanValue.includes(kata))) {
     	 	isTantangan = true;
      		clonedTextPertanyaan.innerHTML = `ok aku pikir kamu takut main ada tantangan nya😏`;
      	} else {
      	 if (isTantangan) {
      		clonedTextPertanyaan.innerHTML = `mau kan ${namaDepan}?, klo kamu berubah pikiran gajadi juga gpp`;
      		
      		setTimeout(() => {
       		clonedTextPertanyaan.innerHTML = `klo kamu gajadi bilang aja 'gajadi' ya`;
     		 
         document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
      	 	}, 1122);
      	 } else {
      		clonedTextPertanyaan.innerHTML = `ok ${namaDepan}, lain kali pake tantangan ya biar seru😁`;
      	 }
      	}
      }
     } else { // true chatValidation 
      if (!chatRepeated) {
       if (jawabanValue.includes('gajadi')) {
        mainChat = 4;
        isTantangan = false;
        alreadySticker = true;
        chatValidation = false;
        clonedTextPertanyaan.innerHTML = `owh oke deh klo ${namaDepan} gajadi`;
       } else {
        mainChat = 0;
        mainChatIs = true;
        chatRepeated = true;
       	clonedTextPertanyaan.innerHTML = `okk siap ya ${namaDepan} dalam hitungan 3 kita cepet cepetan`;
       }
      } else { // true chatRepeated
     	if (isTantangan) {
     	 if (!chatRepeats) {
     	 	if (!alreadySticker) {
     	 	 mainChat = 0;
     	 	 alreadySticker = true;
     	  	clonedTextPertanyaan.innerHTML = `${namaDepan} mau pilih tantangan yang mana ni, aku ada 3 tantangan :<br><br>1).	${namaDepan} harus ngetik 200 huruf tanpa copy paste, harus di ketik.<br><br>2). ngetik 1 sampai 30 contoh 1 2 3 dan seterusnya, harus di spasi.<br><br>3). ketikan 50 kata random buat aku, apapun itu sesuka kamu.`;
     	  	
     	  	setTimeout(() => {
     	  	 clonedTextPertanyaan.innerHTML = `${namaDepan} dari 1 - 3 mau pilih yang mana?`
     	  	 
          document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
         }, 1122);
        } else { // true alreadySticker
         if (['satu', 'dua', 'tiga'].some((kata) => jawabanValue.includes(kata)) || jawabanValue && nilaiAngka) {
          mainChat = 0;
          isCloneChat = true;
          if (nilaiAngka.length == 1 || ['satu', 'dua', 'tiga'].some((kata) => jawabanValue.includes(kata))) {
           if (['1', 'satu'].some((kata) => jawabanValue.includes(kata))) {
            quest_1 = true;
            chatRepeats = true;
            clonedTextPertanyaan.innerHTML = `okeh klo kamu pilih ngetik 200 huruf😱`;
           } else if (['2', 'dua'].some((kata) => jawabanValue.includes(kata))) {
            quest_2 = true;
            chatRepeats = true;
            clonedTextPertanyaan.innerHTML = `ok klo kamu mau ngetik 1-75, ngetik nya pelan pelan aja nanti patah tu jari klo cepet cepet xD`;
           } else if (['3', 'tiga'].some((kata) => jawabanValue.includes(kata))) {
            quest_3 = true;
            chatRepeats = true;
            clonedTextPertanyaan.innerHTML = `ok, inget ya ${namaDepan} ketik kata kata nya yang baik ya😇`;
           } else {
            clonedTextPertanyaan.innerHTML = `nomor ${nilaiAngka} ga ada ${namaDepan}, kmu pilih tantangan nomor brp?`;
           }
          } else {// nilaiAngka length > 1
           clonedTextPertanyaan.innerHTML = `kebanyakan nomernya ${namaDepan} ${genderSay}`;
          }
         } else { // !Nilai Angka
          if (['gamau', 'udahan', 'males', 'engga'].some((kata) => jawabanValue.includes(kata))) {
           isCloneChat = true;
           
           mainChat = (mainChat === 3 || mainChat >= 4) ? mainChat = 0: mainChat;
           
           if (mainChat === 1) {
            clonedTextPertanyaan.innerHTML = `kamu harus mau. kan tadi kamu bilang iya😒`;
           } else if (mainChat === 2) {
            isCurang = true;
            isTantangan = false;
            chatRepeats = false;
            clonedTextPertanyaan.innerHTML = `yaudah deh klo kamu maksa buat gamau`;
            
            setTimeout(() => {
             initSticker++;
             imgSticker.src = "assets/sticker/badmood.webp";
             document.querySelector("#contentPertanyaan").appendChild(stickers.cloneNode(true));
            }, 2500);
           } else {
            isCurang = true;
            chatRepeats = false;
            isTantangan = false;
            clonedTextPertanyaan.innerHTML = `yayaya yaudah klo kamu maksa gamau`;
           }
          } else {
           if (mainChat === 1) {
            clonedTextPertanyaan.innerHTML = `seriuss ${namaDepan}`;
           } else if (mainChat === 2 && ['serius', 'srius', 'bener'].some((kata) => jawabanValue.includes(kata))) {
            mainChat = 1;
            clonedTextPertanyaan.innerHTML = `maksud aku serius kamu mau pilih no berapa??`;
           } else if (mainChat === 2) {
            clonedTextPertanyaan.innerHTML = `${namaDepan}....`;
             
            setTimeout(() => {
             initSticker++;
             imgSticker.src = "assets/sticker/badmood.webp";
             document.querySelector("#contentPertanyaan").appendChild(stickers.cloneNode(true));
            }, 2500);
           } else if (mainChat === 3) {
            clonedTextPertanyaan.innerHTML = `mending kamu ngomong sama tembok aja sana`;
           } else if (mainChat === 4) {
            clonedTextPertanyaan.innerHTML = `gatau ah gelap ${namaDepan}`;
            
            setTimeout(() => {
             initSticker++;
             imgSticker.src = "assets/sticker/smile.webp";
             document.querySelector("#contentPertanyaan").appendChild(stickers.cloneNode(true));
            }, 2500);
           } else if (mainChat === 5) {
            isCloneChat = false;
           } else if (mainChat === 6) {
            isCloneChat = false;
           } else if (mainChat === 7) {
            clonedTextPertanyaan.innerHTML = `${namaDepan} sebut mau 1 2 atau 3 bilang aja`;
            isCloneChat = true;
           } else {
            mainChat = (mainChat === 10 || mainChat === 12) ? mainChat = 6 : mainChat;
            isCloneChat = false;
           }
          }
         }
        }
       } else {//true chatRepeats || validasi untuk melakukan isTantangan
        switch (true) {
         case quest_1:
          if (mainChat === 1) {
           botAnswerExecuted = false;
           if (jawabanValue.includes('kenapa')) {
            clonedTextPertanyaan.innerHTML = `gpp gpp, yaudah semangatt ${namaDepan} ketik 200 hurufnya wkwk`;
           } else {
            if (jawabanValue.length >= 100 && jawabanValue.length < 200) {
             clonedTextPertanyaan.innerHTML = `blom mulai aku aja blom semangatin, kamu udah di ketik aja😐`;
             
             setTimeout(() => {
              clonedTextPertanyaan.innerHTML = `maafin aku ya ${namaDepan} harus ketik ulang😇`;
              
              document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
             }, 1122);
            } else {
             clonedTextPertanyaan.innerHTML = `yaudah semangattt ${namaDepan} ketik 200 hurufnya wkwk`;
            }
           }
          } else if (mainChat === 2) {
           if (jawabanValue.length >= 100 && jawabanValue.length < 200) {
            alreadySticker = false;
            clonedTextPertanyaan.innerHTML = `ayo semangat ngetiknyaa kamu baru ngetik ${jawabanValue.length} huruf sedikit lagi 200😇`;
           } else if (jawabanValue.length >= 200) {
            isRepeat = false;
            botAnswerExecuted = true;
            clonedTextPertanyaan.innerHTML = `yey kamu hebat ${namaDepan} bisa nyelsain tantangan nya🥳`;
           } else {
            mainChat = 0;
            if (!isRepeat) {
             isRepeat = true;
             alreadySticker = false;
             clonedTextPertanyaan.innerHTML = `baru juga kamu ngetik ${jawabanValue.length} huruf`;
             
             setTimeout(() => {
              clonedTextPertanyaan.innerHTML = `owh ya btw spasi, nomor ataupun simbol di hitung ya ${genderSay}, semangattt😇`;
              
              document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
             }, 1122);
            } else { // true isRepeat
             clonedTextPertanyaan.innerHTML = `semangatttt`;
             
             setTimeout(() => {
              if(!alreadySticker) {
               alreadySticker = true;
               clonedTextPertanyaan.innerHTML = `${namaDepan} baru ketik ${jawabanValue.length} huruf`;
                
               setTimeout(() => {
                clonedTextPertanyaan.innerHTML = `dan aku gaakan cape buat nyemangatin kamu sampe kamu berhasil😉`;
                
                document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
               }, 1122);
              } else {
               clonedTextPertanyaan.innerHTML = `kamu baru ngetik ${jawabanValue.length} huruf aku percaya kamu pasti bisa ko sampe 200`;
              }
              document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
             }, 1122);
            }
           }
          } else if (mainChat === 3) {
           if (botAnswerExecuted) {
            botAnswerExecuted = false;
            clonedTextPertanyaan.innerHTML = `cape ga ngetik 200 huruf nya?`;
           } else {
            mainChat = 0;
            clonedTextPertanyaan.innerHTML = `ayo dong ${namaDepan} aku percaya kamu pasti bisa`;
           }
          } else if (mainChat === 4) {
           if (['pegel','lelah','cape'].some((kata) => jawabanValue.includes(kata))) {
            botAnswerExecuted = true;
            clonedTextPertanyaan.innerHTML = `wkwkwk nama nya juga tantangan`;
           } else {
            clonedTextPertanyaan.innerHTML = `keren sih ${namaDepan} ga ngeluh cape`;
            
            setTimeout(() => {
             clonedTextPertanyaan.innerHTML = `biasanya yang pilih ketik 200 huruf pada ngeluh tau`;
             
             document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
            }, 1122);
           }
          } else if (mainChat === 5) {
           if (botAnswerExecuted) {
            botAnswerExecuted = false;
            clonedTextPertanyaan.innerHTML = `kamu kan kuat ${namaDepan}, gini doang mh biasa kali??😅`;
           } else {
            clonedTextPertanyaan.innerHTML = `jarang banget aku ketemu seseorang kaya kamu yang ga ngeluh😇`;
            
            setTimeout(() => {
             initSticker++;
             imgSticker.src = "assets/sticker/smile.webp";
             document.querySelector("#contentPertanyaan").appendChild(stickers.cloneNode(true));
            }, 2500);
           }
          } else if (mainChat === 6) {
           clonedTextPertanyaan.innerHTML = `oke, kamu mau main lagi ga?`;
          } else if (mainChat === 7) {
           if (['iya', 'main lagi', 'yaudah'].some((kata) => jawabanValue.includes(kata))) {
            botAnswerExecuted = false;
            clonedTextPertanyaan.innerHTML = `wkwkkw ok kita lanjutin lagi ya, inget yang kalah jangan nangis`;
           } else if (['engga', 'gamau', 'males', 'udah'].some((kata) => jawabanValue.includes(kata))) {
            botAnswerExecuted = true;
            clonedTextPertanyaan.innerHTML = `hmmm ${namaDepan} mau udahan ya?😪`;
           } else {
            mainChat = 5;
            if (!botAnswerExecuted) {
             botAnswerExecuted = true;
             clonedTextPertanyaan.innerHTML = `main lagi apa mau udahan?`;
            } else {
             botAnswerExecuted = false;
             clonedTextPertanyaan.innerHTML = `${namaDepan} maunya gimana lanjut apa udahan?`;
            }
           }
          } else {
           if (botAnswerExecuted) {
            if (['udahan', 'cape'].some((kata) => jawabanValue.includes(kata))) {
             clonedTextPertanyaan.innerHTML = `yhh yaudah deh klo gitu, padahal masih mau main lagi tau`;
            } else if (['main lagi','lanjut','oke', 'yaudah'].some((kata) => jawabanValue.includes(kata))) {
             mainChat = 0;
             mainChatIs = true;
             chatRepeats = false;
             botAnswerExecuted = false;
             
             clonedTextPertanyaan.innerHTML = `wkwkwk bener ya main lagi?, ok klo gitu`;
            } else {
             mainChat = 0;
             chatRepeats = true;
             isTantangan = false;
             //noRepeatChat = false;
             botAnswerExecuted = false;
             
             clonedTextPertanyaan.innerHTML = `ok gpp deh klo mau udahan`;
            }
           } else {// false botAnswerExecuted
            mainChat = 0;
            mainChatIs = true;
            chatRepeats = false;
            botAnswerExecuted = true;
            clonedTextPertanyaan.innerHTML = `ah masa sii ${namaDepan}?!? wkwkk`;
           }
          }
         break;
         
         case quest_2:
          if (mainChat === 1) {
           botAnswerExecuted = false;
           if (['kenapa', 'emang'].some((kata) => jawabanValue.includes(kata) && !isRepeat)) {
            mainChat = 0;
            clonedTextPertanyaan.innerHTML = `ya klo kamu ada hurufnya contoh kamu ketik 7F, itu ga boleh harus angka only yang kamu ketik`;
            
            setTimeout(() => {
             clonedTextPertanyaan.innerHTML = `udah jelas kan ${namaDepan}`;
             
             document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
            }, 1122);
           } else {
            if (validNumber.length === jawabanSplited.length) {
            if (jawabanValue.length >= 74) {
             clonedTextPertanyaan.innerHTML = `blom juga aku semangatin udah di ketik aja🙃`;
             
              setTimeout(() => {
               clonedTextPertanyaan.innerHTML = `maaf ya ${namaDepan} kamu harus ketik ulang😇`;
              
               document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
              }, 1122);
             }
            } else {
             clonedTextPertanyaan.innerHTML = `yaudah semangattt ${namaDepan} ketik 75 angkanya wkwk`;
            }
           }
          } else if (mainChat === 2) {
           if (validNumber.length === jawabanSplited.length) {
            if (jawabanValue.length >= 74) {
             isRepeat = false;
             jawabanBenar = false;
             botAnswerExecuted = true;
             clonedTextPertanyaan.innerHTML = `yey kamu hebat ${namaDepan} bisa nyelsain tantangan nya🥳`;
            } else {
             mainChat = 0;
             if (!isRepeat) {
              isRepeat = true;
              alreadySticker = false;
              clonedTextPertanyaan.innerHTML = `baru juga kamu ngetik<br><br>${jawabanValue}<br><br>angka`;
              
              setTimeout(() => {
               clonedTextPertanyaan.innerHTML = `owh ya btw kamu ketiknya angka aja jangan ada hurufnya ya ${genderSay}, semangattt😇`;
               
               document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
              }, 1122);
             } else { // true isRepeat
              clonedTextPertanyaan.innerHTML = `semangatttt`;
              
              setTimeout(() => {
               if(!alreadySticker) {
                alreadySticker = true;
                clonedTextPertanyaan.innerHTML = `angka yang kamu ketik baru ini<br><br>${jawabanValue}<br><br>ayo ${namaDepan} jangan menyerah sedikit lagi bisa ko sampe 75 angka`;
                 
                setTimeout(() => {
                 clonedTextPertanyaan.innerHTML = `aku gaakan cape dan berhenti buat nyemangatin kamu sampe kamu berhasil😉`;
                 
                 document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
                }, 1122);
               } else {
                clonedTextPertanyaan.innerHTML = `kamu baru ngetik<br><br>${jawabanValue}<br><br>angka aku percaya kamu pasti bisa ko ngetik 75 angka`;
               }
               document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
              }, 1122);
             }
            }
           } else { // false nilaiAngka
            if (!jawabanBenar) {
             jawabanBenar = true;
             clonedTextPertanyaan.innerHTML = `${namaDepan} ngetiknya jangan ada huruf ya, pake angka aja`;
            } else {
             clonedTextPertanyaan.innerHTML = `kan udh ku bilang ${namaDepan} ketiknya nomer aja, klo ada huruf mengganggu estetik angka yang kamu ketik tau`;
            }
           }
          } else if (mainChat === 3) {
           if (botAnswerExecuted) {
            if (jawabanValue.includes('cape')) {
             mainChat = 4;
             botAnswerExecuted = true;
             clonedTextPertanyaan.innerHTML = `wkwkw gini doang mh biasa kali?:v`;
            } else {
             botAnswerExecuted = false;
             clonedTextPertanyaan.innerHTML = `pegel ga tuh tangan ngetik 75 angka nya? wkwk`;
            }
           } else {
            mainChat = 0;
            clonedTextPertanyaan.innerHTML = `ayo ${namaDepan} masa ngetik 75 angka aja gabisaa`;
           }
          } else if (mainChat === 4) {
           if (['pegel','lelah','cape'].some((kata) => jawabanValue.includes(kata))) {
            botAnswerExecuted = true;
            clonedTextPertanyaan.innerHTML = `kamu sendiri sih pilihnya ngetik 75 huruf wkwk`;
           } else {
            clonedTextPertanyaan.innerHTML = `keren ${namaDepan} ga ngeluh cape`;
            
            setTimeout(() => {
             clonedTextPertanyaan.innerHTML = `coba dong pilih tantangan yang ngetik 200 huruf, ngeluh apa ngga wkwkw`;
             
             document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
             
             setTimeout(() => {
              initSticker++;
              imgSticker.src = "assets/sticker/smile.webp";
              document.querySelector("#contentPertanyaan").appendChild(stickers.cloneNode(true));
             }, 2500);
            }, 1122);
           }
          } else if (mainChat === 5) {
           if (botAnswerExecuted) {
            botAnswerExecuted = false;
            clonedTextPertanyaan.innerHTML = `kamu kan kuat ${namaDepan}, gini doang mh gampang kali??😅`;
           } else {
            clonedTextPertanyaan.innerHTML = `jarang banget ada seseorang kaya kamu yang ga ngeluh, ibarat 1/100 orang`;
            
            setTimeout(() => {
             initSticker++;
             imgSticker.src = "assets/sticker/smile.webp";
             document.querySelector("#contentPertanyaan").appendChild(stickers.cloneNode(true));
            }, 2500);
           }
          } else if (mainChat === 6) {
           clonedTextPertanyaan.innerHTML = `yaudah, ${namaDepan} mau main lagi?`;
          } else if (mainChat === 7) {
           if (['iya', 'main lagi', 'yaudah'].some((kata) => jawabanValue.includes(kata))) {
            botAnswerExecuted = false;
            clonedTextPertanyaan.innerHTML = `wkwkkw ok kita lanjutin lagi ya, inget yang kalah jangan nangis`;
           } else if (['engga', 'gamau', 'males', 'udah'].some((kata) => jawabanValue.includes(kata))) {
            botAnswerExecuted = true;
            clonedTextPertanyaan.innerHTML = `hmmm ${namaDepan} mau udahan ya?😪`;
           } else {
            mainChat = 6;
            if (!botAnswerExecuted) {
             botAnswerExecuted = true;
             clonedTextPertanyaan.innerHTML = `main lagi apa mau udahan ni?, bilang ke aku`;
            } else {
             botAnswerExecuted = false;
             clonedTextPertanyaan.innerHTML = `ishh seriuss ${namaDepan}`;
            }
           }
          } else {
           if (botAnswerExecuted) {
            if (['udahan', 'cape'].some((kata) => jawabanValue.includes(kata))) {
             clonedTextPertanyaan.innerHTML = `yhh kamu ngajak udahan ya, padahal aku masi mau main lagi sama kamu tau`;
            } else if (['main lagi','lanjut','oke', 'yaudah'].some((kata) => jawabanValue.includes(kata))) {
             mainChat = 0;
             mainChatIs = true;
             chatRepeats = false;
             botAnswerExecuted = false;
             
             clonedTextPertanyaan.innerHTML = `bener ya main lagi?, ok kita lanjutin yaa😅`;
            } else {
             mainChat = 0;
             chatRepeats = true;
             isTantangan = false;
             //noRepeatChat = false;
             botAnswerExecuted = false;
             
             clonedTextPertanyaan.innerHTML = `iya gpp deh klo mau udahan, mungkin kamu udh cape ya`;
            }
           } else {// false botAnswerExecuted
            mainChat = 0;
            mainChatIs = true;
            chatRepeats = false;
            botAnswerExecuted = true;
            clonedTextPertanyaan.innerHTML = `ah yang benerr?!? wkwkk`;
           }
          }
         break;
          
         case quest_3:
          if (mainChat === 1) {
           botAnswerExecuted = false;
           if (jawabanValue.includes('kenapa')) {
            clonedTextPertanyaan.innerHTML = `ya karna klo kamu ketik kata yang ga baik, nanti aku udahin langsung chat nya`;
           } else {
            if (jawabanSplited.length >= 50) {
             if (jawabanSplited.every(kata => kata.length >= 3)) {
              clonedTextPertanyaan.innerHTML = `semangat banget lakuin tantangan nya. padahal blom juga aku suruh😁`;
              
              setTimeout(() => {
               clonedElementPertanyaan.innerHTML = `tapi maaf ya kamu harus ketik ulangg`;
              }, 1122);
             }
            } else {
             clonedTextPertanyaan.innerHTML = `yaudah semangattt ${namaDepan} ketik 50 katanya😁`;
            }
           }
          } else if (mainChat === 2) {
           if (jawabanSplited.length >= 50) {
            if (jawabanSplited.every(kata => kata.length >= 3)) {
             isRepeat = false;
             botAnswerExecuted = true;
             clonedTextPertanyaan.innerHTML = `yey ${namaDepan} hebat bisa nyelesain tantangan nya🥳`;
             
             setTimeout(() => {
              clonedTextPertanyaan.innerHTML = `total kata yang kamu ketik adalah ${jawabanSplited.length}`;
              
              document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
             }, 1122);
            } else {
             mainChat = 0;
             alreadySticker = false;
             clonedTextPertanyaan.innerHTML = `yhh maaf ya ${namaDepan} walaupun kamu udh ngetik ${jawabanSplited.length} kata tapi ada bbrp kata yang kurang dari 3 huruf`;
             
             setTimeout(() => {
              clonedTextPertanyaan.innerHTML = `jadi kamu harus mengulang ketik katanya, gomen ${namaDepan}🥺`;
              
              document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
             }, 1122);
            }
           } else {
            mainChat = 0;
            if (!isRepeat) {
             isRepeat = true;
             alreadySticker = false;
             clonedTextPertanyaan.innerHTML = `baru juga ${namaDepan} ngetik ${jawabanSplited.length} kata`;
             
             setTimeout(() => {
              clonedTextPertanyaan.innerHTML = `owh ya btw setiap kata harus di spasi ya dan juga hurufnya lebih dari 3, semangatt😇`;
              
              document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
             }, 1122);
            } else { // true isRepeat
             clonedTextPertanyaan.innerHTML = `ayo dong semangatttt`;
             
             setTimeout(() => {
              if(!alreadySticker) {
               alreadySticker = true;
               clonedTextPertanyaan.innerHTML = `ayo sedikit lagi ${namaDepan} bisa 50 kata, kamu baru ngetik ${jawabanSplited.length} kata😇`;
                
               setTimeout(() => {
                clonedTextPertanyaan.innerHTML = `${namaDepan} pasti bisa ko 🤓`;
                
                document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
               }, 1122);
              } else {
               clonedTextPertanyaan.innerHTML = `kamu baru ketik ${jawabanSplited.length} kata aku percaya kamu pasti bisa ko sampe 50 kata🙃`;
              }
              document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
             }, 1122);
            }
           }
          } else if (mainChat === 3) {
           if (botAnswerExecuted) {
            botAnswerExecuted = false;
            if (jawabanValue.includes('ngulang')) {
             clonedTextPertanyaan.innerHTML = `wkwk ya maaf tadi aku belum ngasih tau kamu soal 3 huruf tadi 😄`;
            } else {
             clonedTextPertanyaan.innerHTML = `cape ya ngetik 50 kata nya?`;
            }
           } else {
            mainChat = 0;
            clonedTextPertanyaan.innerHTML = `aku percaya ${namaDepan} pasti bisa ko`;
           }
          } else if (mainChat === 4) {
           if (['pegel','lelah','cape'].some((kata) => jawabanValue.includes(kata))) {
            botAnswerExecuted = true;
            clonedTextPertanyaan.innerHTML = `wkwkwk nama nya juga tantangan`;
           } else {
            clonedTextPertanyaan.innerHTML = `hebat sih ${namaDepan}, wkkw`;
            
            setTimeout(() => {
             clonedTextPertanyaan.innerHTML = `aku suka banget sama orang orang kaya kamu gini. udh ${genderSay} tidak mudah mengeluh lagi😅`;
             
             document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
             
             setTimeout(() => {
              initSticker++;
              imgSticker.src = "assets/sticker/smile.webp";
              document.querySelector("#contentPertanyaan").appendChild(stickers.cloneNode(true));
             }, 2500);
            }, 1122);
           }
          } else if (mainChat === 5) {
           if (botAnswerExecuted) {
            botAnswerExecuted = false;
            clonedTextPertanyaan.innerHTML = `kamu kan ${genderIs} yang kuat ${namaDepan}, kaya gini mh biasa kali wkwk`;
           } else {
            clonedTextPertanyaan.innerHTML = `jarang banget tau ketemu seseorang kaya kamu yang nempatin janji lakuin tantangan😇`;
           }
          } else if (mainChat === 6) {
           if (jawabanValue.includes('langka')) {
            mainChat = 5;
            clonedTextPertanyaan.innerHTML = `ah masa sih kamu manusia langka?😐`;
           } else {
            clonedTextPertanyaan.innerHTML = `oke, jadi ${namaDepan} mau main lagi ga?`;
           }
          } else if (mainChat === 7) {
           if (['iya', 'main lagi', 'yaudah', 'lanjut'].some((kata) => jawabanValue.includes(kata))) {
            botAnswerExecuted = false;
            clonedTextPertanyaan.innerHTML = `wkwk okey kita lanjutin lagi ya, inget yang kalah harus lakuin tantangan nya`;
           } else if (['engga', 'gamau', 'males', 'udah'].some((kata) => jawabanValue.includes(kata))) {
            botAnswerExecuted = true;
            clonedTextPertanyaan.innerHTML = `yhh ${namaDepan} mau udahan ya?😪`;
           } else {
            mainChat = 6;
            if (!botAnswerExecuted) {
             botAnswerExecuted = true;
             clonedTextPertanyaan.innerHTML = `serius ${namaDepan} yang baik hati dan suka ${hobbyFir} lanjut apa mau udahan?`;
            } else {
             botAnswerExecuted = false;
             clonedTextPertanyaan.innerHTML = `${namaDepan} maunya apa, lanjut apa udahan?`;
            }
           }
          } else {
           if (botAnswerExecuted) {
            if (['udahan', 'cape'].some((kata) => jawabanValue.includes(kata))) {
             clonedTextPertanyaan.innerHTML = `yhh yaudah deh klo gitu, padahal masih mau main lagi tau`;
            } else if (['main lagi','lanjut'].some((kata) => jawabanValue.includes(kata))) {
             mainChat = 0;
             mainChatIs = true;
             chatRepeats = false;
             botAnswerExecuted = false;
             
             clonedTextPertanyaan.innerHTML = `seriuss ya main lagi?, okey aku lanjut ya`;
            } else {
             mainChat = 0;
             isChattan = true;
             chatRepeats = true;
             isTantangan = false;
             //noRepeatChat = false;
             botAnswerExecuted = false;
             
             clonedTextPertanyaan.innerHTML = `yhh gpp deh klo mau udahan, lain kali kita main game ini lagi ya ${namaDepan}`;
            }
           } else {// false botAnswerExecuted
            mainChat = 0;
            mainChatIs = true;
            chatRepeats = false;
            botAnswerExecuted = true;
            clonedTextPertanyaan.innerHTML = `janji yaa ${namaDepan} yang baik hati dan tidak pernah boong😂`;
           }
          }
         break;
         case isGameWin:
          if (mainChat === 1 && isTantangan) {
           botAnswerExecuted = false;
           if (kataCurang.some((kata) => jawabanValue.includes(kata))) {
            clonedTextPertanyaan.innerHTML = `ya maaf ${namaDepan}, aku kan dibuat hanya untuk memberikan tantangan`;
            
            setTimeout(() => {
             clonedTextPertanyaan.innerHTML = `dan bukan melakukan tantangan, jadi gomen ${namaDepan}🙃`;
             
             document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
            }, 1122);
           } else {
            clonedTextPertanyaan.innerHTML = `${namaDepan} ga kesel kh??🤨`;
           }
          } else if (mainChat === 2 && isTantangan) {
            if (!noRepeating) {
             noRepeating = true;
             alreadySticker = false;
             clonedTextPertanyaan.innerHTML = `kwkwwk ya maaf ${namaDepan}`;
           
            setTimeout(() => {
             clonedTextPertanyaan.innerHTML = `sebelum nya aku ini di buat hanya untuk memberikan tantangan aja.<br><br>klo ${namaDepan} mau marah ke developer yang membuat aku:)`;
            
             document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
            }, 1122);
           } else {
            if (kataCurang.some((kata) => JawabanValue.includes(kata))) {
             clonedTextPertanyaan.innerHTML = `kwkwwk santai dong aku kan kan cuma bercanda`;
            } else {
             mainChat = 5;
             const arrWord = ['susah', 'curang', 'hebat', 'gampang'];
             const ifWord = arrWord.find((kata) => jawabanValue.includes(kata));
             
             switch(ifWord) {
              case 'susah':
               clonedTextPertanyaan.innerHTML = `oke aku serius nih bakal kalahin kamu`;
              break;
              case 'curang':
               clonedTextPertanyaan.innerHTML = `lagian juga sama ko aku ga main curangg`;
              break;
              case 'hebat':
               clonedTextPertanyaan.innerHTML = `ah masa sih kamu hebat`;
              break;
              case 'gampang':
               clonedTextPertanyaan.innerHTML = `owh gitu ngeremehin aku ya?!?`;
              break;
              default:
               clonedTextPertanyaan.innerHTML = `ah gatauh ah capek aku main sma kamu!`;
             }
            }
           }
          } else if (mainChat === 3 && isTantangan) {
           if (['siapa', 'developer', 'curang', 'males'].some((kata) => jawabanValue.includes(kata))) {
            mainChat = 2;
            clonedTextPertanyaan.innerHTML = `${namaDepan} klo mau marah ke developer yang membuat aku, setau aku ini email nya<br><br><li><a onclick="window.open( 'mailto:faridfathonin@gmail.com')">click > faridfathonin@gmail.com</a></li>`;
           } else {
            clonedTextPertanyaan.innerHTML = `${namaDepan} maafin aku ga nih?🥺`;
           }
          } else if (mainChat === 4 && isTantangan) {
           if (['maaf', 'maap', 'mff', 'maffin'].some((kata) => jawabanValue.includes(kata))) {
            botAnswerExecuted = false;
            clonedTextPertanyaan.innerHTML = `makasii ya udh maafin aku, sekali lagi maaf klo aku curang, ga ngasih tau kamu sebelum nya tentang ini😔`;
           } else if (['ga ya', 'hmm', 'gimana', 'gamau'].some((kata) => jawabanValue.includes(kata))) {
            mainChat = 3;
            clonedTextPertanyaan.innerHTML = `di maafin lah, masa engga? jahat banget sih kamu klo engga🥺`;
           } else {
            mainChat = 3;
            if (!isRepeat) {
             isRepeat = true;
             clonedTextPertanyaan.innerHTML = `seriusan ${namaDepan} ga maafin aku?🥺`;
            } else {
             if (!botAnswerExecuted) {
              botAnswerExecuted = true;
              clonedTextPertanyaan.innerHTML = `gabaik tau ${namaDepan} klo ada yang minta maaf ga di maafin😪`;
             } else {
             clonedTextPertanyaan.innerHTML = `maaf ${namaDepan}`;
             }
            }
           }
          } else if (mainChat === 5 && isTantangan) {
           botAnswerExecuted = false;
           clonedTextPertanyaan.innerHTML = `maaf ya ${namaDepan}`;
           
           setTimeout(() => {
            initSticker++;
            imgSticker.src = "assets/sticker/sad.webp";
            document.querySelector("#contentPertanyaan").appendChild(stickers.cloneNode(true));
           }, 2500);
          } else if (mainChat === 6) {
           clonedTextPertanyaan.innerHTML = `yaudah ${namaDepan} mau main lagi apa udahan`;
          } else if (mainChat === 7) {
           if (['iya', 'main lagi', 'yaudah'].some((kata) => jawabanValue.includes(kata))) {
            isGameWin = false;
            noRepeatChat = true;
            botAnswerExecuted = false;
            clonedTextPertanyaan.innerHTML = `yaudah deh klo masi mau main lagi`;
           } else if (['engga', 'gamau', 'males', 'udahan'].some((kata) => jawabanValue.includes(kata))) {
            noRepeatChat = false;
            botAnswerExecuted = true;
            clonedTextPertanyaan.innerHTML = `${namaDepan} udh males ya sama aku?, yaudah deh gpp klo mau udahan`;
           } else {
            mainChat = 5;
            if (!botAnswerExecuted) {
             botAnswerExecuted = true;
             clonedTextPertanyaan.innerHTML = `klo ${namaDepan} mau udahan juga gpp`;
            } else {
             botAnswerExecuted = false;
             clonedTextPertanyaan.innerHTML = `gimana nihh ${namaDepan}, maunya lanjut apa udahan?`;
            }
           }
          } else {
           if (['udahan', 'cape'].some((kata) => jawabanValue.includes(kata))) {
            clonedTextPertanyaan.innerHTML = `tuh kan bener ${namaDepan} udh males sama aku😪`;
           } else if (['main lagi', 'lanjut', 'oke'].some((kata) => jawabanValue.includes(kata))) {
            mainChat = 0;
            mainChatIs = true;
            chatRepeats = false;
            noRepeatChat = true;
            botAnswerExecuted = false;
            
            clonedTextPertanyaan.innerHTML = `seriuss ni ${namaDepan} main lagi?, padahal udahan juga gpp ko`;
           } else {
            mainChat = 0;
            isGameWin = false;
            if (noRepeatChat) {
             mainChatIs = true;
             chatRepeats = false;
             noRepeatChat = false;
             botAnswerExecuted = true;
             clonedTextPertanyaan.innerHTML = isTantangan ? `inget ya klo aku kalah aku cuma bisa kasi kamu ❤️<br><br>aku gabisa melakukan tantangan 🙂` : `okeh siapa takut aku bakalan kalahin kamu!` ;
            } else {
             isRepeat = true;
             chatRepeats = true;
             isTantangan = false;
             noRepeatChat = false;
             botAnswerExecuted = false;
             
             clonedTextPertanyaan.innerHTML = `iyaa yaudah klo gitu gpp🙂`;
            }
           }
          }
         break;
         default:
       //console.log('pengguna ini curang');
        }
       }
      } else {//false isTantangan || user tidak menggunakan tantangan
       if (!chatRepeats) {
        if (isCurang) {
         mainChat = 0;
         isCurang = false;
         clonedTextPertanyaan.innerHTML = `lain kali kamu lakuin tantangan ya biarr seru hehehe`;
         
         setTimeout(() => {
          initSticker++;
          imgSticker.src = "assets/sticker/ups.webp";
          document.querySelector("#contentPertanyaan").appendChild(stickers.cloneNode(true));
         }, 2500);
        } else {// false isCurang
         if (alreadySticker) {
          mainChat = 0;
          alreadySticker = false;
          clonedTextPertanyaan.innerHTML = `yaudah gpp kok`;
          
          setTimeout(() => {
           clonedTextPertanyaan.innerHTML = `hmmm karna kamu gamau ngelakuin tantangan aku bingung harus ngapain lagi`;
        
           document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
          },chatDelay);
         } else {
          if (mainChat === 1) {
           clonedTextPertanyaan.innerHTML = `kamu mau nya gimana ${namaDepan}?`;
          } else if (mainChat === 2) {
           if (kataPertanyaan.some((kata) => jawabanValue.includes(kata))) {
            mainChat = 1;
            clonedTextPertanyaan.innerHTML = `serius kamu gatau?? 🥺`;
            setTimeout(() => { isCloneChat = false; }, 1500);
           } else {
            isCloneChat = true;
            clonedTextPertanyaan.innerHTML = `.....`;
            
           setTimeout(() => {
            initSticker++;
            imgSticker.src = "assets/sticker/ngeleg.webp";
             document.querySelector("#contentPertanyaan").appendChild(stickers.cloneNode(true));
            }, 2500);
      	    }
      	   } else if ([3, 4].includes(mainChat)) {
      	    isCloneChat = false;
      	   } else if (mainChat === 5) {
      	    isCloneChat = true;
      	    clonedTextPertanyaan.innerHTML = `maaf maaf tadi aku kehabisan kata kata`;
      	   } else if (mainChat === 6 || ['bisa', 'anjr', 'ada'].some((kata) => jawabanValue.includes(kata))) {
      	    clonedTextPertanyaan.innerHTML = `abis nya kita udah banyak banget ngomong nya hehe`;
      	   } else if (mainChat === 7) {
      	    clonedTextPertanyaan.innerHTML = `iyaa kan ${namaDepan}?, coba aja kamu scroll ke atas banyak banget chatnya wkwk`;
      	   } else if (jawabanValue.includes('dikit') && mainChat === 7) {
      	    clonedTextPertanyaan.innerHTML = `masa sih ${namaDepan}?, perasaan udah banyak`;
      	   } else {
      	    mainChat = 0;
      	    chatRepeats = true;
      	    noRepeatChat = false;
      	    clonedTextPertanyaan.innerHTML = `yaudah klo gitu terserah kamu aja mau main lagi apa engga`;
      	   }
      	  }
      	 }
      	} else {// true chatRepeats
      	 if (!noRepeatChat) {
        	if (mainChat === 1) {
        	 if (!isRepeat) {
        	  if (jawabanValue.includes('terserah')) {
            clonedTextPertanyaan.innerHTML = `terserah terus nihh`;
        	  } else {
            clonedTextPertanyaan.innerHTML = `serius ${namaDepan} mau 'main lagi', main 'game lain', apa 'lanjut chat'?`;
        	  }
        	 } else {
        	  isRepeat = false;
           clonedTextPertanyaan.innerHTML = `yaudah klo gitu ${namaDepan} mau main lagi, game lain, atau lanjut chat`;
        	 }
        	} else if (mainChat === 2) {
        	 if (['main lagi', 'game lain', 'lanjut main'].some((kata) => jawabanValue.includes(kata))) {
        	  mainChat = 0;
         	 isGameWin = false;
         	 noRepeatChat = true;
        	  clonedTextPertanyaan.innerHTML = `okey bagus klo gitu. aku juga masih pengen main lagi sma kamu`;
        	 } else if (['chattan', 'chat'].some((kata) => jawabanValue.includes(kata))) {
        	  mainChat = 0;
        	  isChattan = true;
        	  noRepeatChat = true; 
        	  clonedTextPertanyaan.innerHTML = `engga lanjut main game lagi?`;
        	 } else if (['muji', 'puji', `${genderSay}`].some((kata) => jawabanValue.includes(kata))) {
        	  mainChat = 1;
        	  clonedTextPertanyaan.innerHTML = `wkwkwkw salting kh?`;
        	  
        	  setTimeout(() => {
         	  clonedTextPertanyaan.innerHTML = `kamu kan emang ${genderSay} ${namaDepan}, rajin menabung, baik hati dan suka ${hobbyFir} kwkwkw 🥰`;
         	  
         	  document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
        	  }, 1122);
        	 } else {
        	  mainChat = 1;
        	  clonedTextPertanyaan.innerHTML = `kamu pilih lanjut mana ${genderSay}?`;
        	 }
       	 }
      	 } else { // true noRepeatChat
      	  if (isChattan) {
       	  clonedTextPertanyaan.innerHTML = `padahal aku masi pengen main bareng sma kamu tau`;
       	  
       	  if (mainChat == 1) {
        	  clonedTextPertanyaan.innerHTML = `serius ni mau lanjut chat aja, ga lanjut main lagi?`;
        	  
       	  } else if (mainChat == 2) {
       	   if (jawabanValue.includes('main')) {
       	    mainChat = 1;
       	    isChattan = false;
        	   clonedTextPertanyaan.innerHTML = `yey ${namaDepan} mau main lagi, jujur aku masih pengen main sma kamu😇`;
        	   
       	   } else {
       	    init = 5;
       	    mainChat = 999;
       	    isChattan = true;
       	    typingGame = false;
       	    playTyping = false;
       	    chatRepeats = false;
       	    chatRepeated = false;
       	    noRepeatChat = false;
       	    chatValidation = false;
       	    
       	    if (['bawel', 'cerewet', 'banyak'].some((kata) => jawabanValue.includes(kata))) {
        	    clonedTextPertanyaan.innerHTML = `wkwkwk maaf kalo aku bawel gini, ok kita lanjut chat`;
       	    } else {
        	    clonedTextPertanyaan.innerHTML = `ok deh kita lanjut chat aja`;
       	    }
       	   }
       	  }
      	  } else { // false isChattan
      	   if (mainChat == 1) {
       	   clonedTextPertanyaan.innerHTML = `yey makasih ya ${namaDepan} mau main lagi😇`;
      	   } else if (mainChat == 2) {
       	   clonedTextPertanyaan.innerHTML = `${namaDepan} mau main game lain apa lanjut game ini aja?`;
       	   
       	   setTimeout(() => {
       	    clonedTextPertanyaan.innerHTML = `mau ganti game yang ke 1 apa ke 2 nih? klo mau ttp lanjutin game ini bilang ke 2 ya`;
       	    
  	         document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
       	   }, 1122);
      	   } else {
      	    if (['1', 'satu'].some((kata) => jawabanValue.includes(kata)) && nilaiAngka.length == 1 || jawabanValue.includes('satu')) {
      	    init = 5;
      	    mainChat = 0;
      	    guessGame = true;
      	    playGuess = true;
      	    isCloneChat = true;
      	    typingGame = false;
      	    mainChatIs = false;
      	    playTyping = false;
      	    chatRepeats = false;
      	    jawabanBenar = false;
      	    chatRepeated = false;
      	    noRepeatChat = false;
      	    chatValidation = false;
      	    botAnswerExecuted = false;
      	     
      	    clonedTextPertanyaan.innerHTML = `ok kita ganti game tebak tebakan ya`;
      	   } else if (['2', 'dua', 'ini'].some((kata) => jawabanValue.includes(kata)) && nilaiAngka.length == 1 || jawabanValue.includes('dua')) {
      	    mainChat = 0;
      	    isChattan = false;
      	    isCloneChat = true;
      	    chatRepeated = false;
      	    chatValidation = false;
      	    
      	    clonedTextPertanyaan.innerHTML = `yaudah kita lanjutin lagi game ngetik nya ya ${namaDepan}`;
      	   } else if (jawabanValue.includes(`${nilaiAngka}`) && nilaiAngka.length > 1) {
      	    clonedTextPertanyaan.innerHTML = `ish gada nomer ${nilaiAngka} ${namaDepan}`;
      	   } else {
      	    if (mainChat <= 5) {
      	     clonedTextPertanyaan.innerHTML = `*pura pura ga liat🙄🙄`;
      	     setTimeout(() => { isCloneChat = false; }, 1500);
      	    } else if (mainChat >= 7) {
      	     clonedTextPertanyaan.innerHTML = `abisnya si kamu ga pilih pilih mau no berapa😑`;
      	     isCloneChat = true;
           }
          }
         }
         }
        }
       }
      }
     }
    }
    //////////Clone Chat Validation//////////
    (isCloneChat) ?  document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true)) : console.log("tidak is cloneChat || Bot Diam");
    //////////Clone Chat Validation//////////
    } else { //true mainChatIs
    	init = 5;
    	quest_1 = false;
    	quest_2 = false;
    	quest_3 = false;
    	
     if (!chatRepeats) {
      mainChat = 0;
      chatRepeats = true;
      
      if (!botAnswerExecuted) {
       clonedTextPertanyaan.innerHTML = `sebelum main inget ya ${namaDepan} jangan main copy paste. karna itu curang😇`;
      } else {
       botAnswerExecuted = false;
       if (jawabanValue.includes('ngerti')) {
        clonedTextPertanyaan.innerHTML = `makasih ya udah ngertiin aku😸`;
       } else {
        clonedTextPertanyaan.innerHTML = `udah tau kan peraturan nya tadi, jangan copy paste ya😇`;
       }
      }
      
      document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     } else { // true chatRepeats
      mainChat++;
      if (mainChat === 1) {
     		clonedTextPertanyaan.innerHTML = `okeh, siappp ya`;
     		
        document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
       
     		setTimeout(() => {
      		clonedTextPertanyaan.innerHTML = `satuuuuu`;
     			
        document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
        
      		setTimeout(() => {
       		clonedTextPertanyaan.innerHTML = `duaaaa`;
      			
         document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
         
 	     		setTimeout(() => {
 	     		 
 	      		clonedTextPertanyaan.innerHTML = `tiggaaaa`;
 	     			
 	        document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
 	        
 	        function jawabanBot() {
           if (!botAnswerExecuted) {
            botAnswerExecuted = true;
            clonedTextPertanyaan.innerHTML = "abcdefghijklmnopqrstuvwxyz";
           } else {
            clonedTextPertanyaan.innerHTML = "abcdefghijklmnopqrsbrnddj";
            
            setTimeout(() => {
             clonedTextPertanyaan.innerHTML = "🙃🙃🙃";
             
             document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
            }, 600);
           }
           document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
          }
          setTimeout(jawabanBot, 6900);
 	     		}, 2500);
      		}, 3000);
     		}, 2500);
     	} else if (mainChat === 2) {
     		if (!botAnswerExecuted && jawabanValue === 'abcdefghijklmnopqrstuvwxyz') {
        botAnswerExecuted = true;
      		function userFirst() {
      		 counterWin++;
      		 isGameWin = true;
 			     setTimeout(() => {
          switch (parseInt(counterWin)) {
           case 1 :
 				       clonedTextPertanyaan.innerHTML = `wahh kamu hebat ${namaDepan} bisa ngalahin aku🥳`;
           break;
           case 2 :
 				       clonedTextPertanyaan.innerHTML = `ko bisa sih kamu ngalahin aku yang ke ${counterWin}x?`;
           break;
           case 3 :
 				       clonedTextPertanyaan.innerHTML = `hmmm aku mulai curiga 🤨, tapi keren sih`;
           break;
           default:
 				       clonedTextPertanyaan.innerHTML = `ampunn ${namaDepan} udah cukup ngalahin aku yang ke ${counterWin}😩`;
          }
 				     
 				     document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
 				      
 				     setTimeout(() => {
           botAnswerExecuted = false;
 				      JawabanValue = jawaban.value;
 				      
 				      textMengetik.innerHTML = "Online";
 				      pjsDefault.style.display = 'none';
           containerBoxHints.appendChild(pjsGame);
           
           
           switch (parseInt(counterWin)) {
            case 1 :
             isCustoParticle = true;
             imgSticker.src = "assets/sticker/horee.webp";
             clonedTextPertanyaan.innerHTML = "karna kamu bisa ngalahin aku, ini buat kamu ❤️";
            break;
            case 2 :
             imgSticker.src = "assets/sticker/smile.webp";
             clonedTextPertanyaan.innerHTML = "buat kamuuu ❤️ ❤️ ❤️";
            break;
            case 3 :
             imgSticker.src = "assets/sticker/smile.webp";
             clonedTextPertanyaan.innerHTML = "udah gumoh ya aku kasih ❤️ terus? kwkwk";
            break;
            default:
             imgSticker.src = "assets/sticker/smile.webp";
             clonedTextPertanyaan.innerHTML = `I Love you in Every Universe ${namaDepan} ❤️`;
           }
           
           document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
           linearCustom.style.display = "block";
           
           setTimeout(() => {
            particlesGame({ mode: 'love', direction: 'top-right', image: 'hearts.png', speed: 2, click: 'push', key: true });
            
            initSticker++;
            document.querySelector("#contentPertanyaan").appendChild(stickers.cloneNode(true));
           }, 2500);
          }, 4000);
         }, 8000);
        }
       setTimeout(userFirst, 250);
      } else {
       function botFirst() {
        if (mainChat === 2 && jawabanValue !== "abcdefghijklmnopqrstuvwxyz") {
          clonedTextPertanyaan.innerHTML = `lucu banget sih kamu ${namaDepan} ngetik huruf aja ga bener🤭`;
        	} else {
 			      clonedTextPertanyaan.innerHTML = "wleee😝 aku duluan, kamuu kalah yahahaha lucu banget sih";
        	}
        	 
 			     document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
  			     
  			    setTimeout(() => {
  			     
  			     textMengetik.innerHTML = "Online";
  			     clonedTextPertanyaan.innerHTML = `kalo ${namaDepan} mau mencoba lagi. ketik 'coba lagi'`;
  			     
  			     document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
  			     }, 6000);
  			    }
  		    setTimeout(botFirst, 2000);
     		}
     	} else {
     	 if (botAnswerExecuted) {
     	  if(jawabanValue.includes('coba lagi')) {
     	   mainChat = 0;
         mainChatIs = true;
         botAnswerExecuted = false;
         clonedTextPertanyaan.innerHTML = `ok klo kamu masi mau coba kalahin aku😏`
      	 } else {
      	  if (isCurang) {
      	   if (mainChat == 4) {
           clonedTextPertanyaan.innerHTML = `masa kamu gapercaya si ${namaDepan} ${genderSay}. serius dh aku gamain curang tau`;
          } else if (mainChat == 5) {
           clonedTextPertanyaan.innerHTML = `terserah kamu deh ${namaDepan} mau anggep aku kya gimana, intinya aku engga seperti yang kamu pikirkan😪`;
          } else if (mainChat == 6 && isTantangan) {
          } else if (mainChat == 7 && isTantangan) {
       	    if (['iya mau', 'mau', 'iya'].some((kata) => jawabanValue.includes(kata))) {
       	     mainChat = 7;
       	     isCloneChat = true;
       	     clonedTextPertanyaan.innerHTML = `ok. aku pikir abis ini kamu gamau🙄`;
       	    } else if (['gamau', 'engga', 'gak'].some((kata) => jawabanValue.includes(kata))) {
       	     mainChat = 7;
       	     isCloneChat = true;
       	     isTantangan = false;
       	     clonedTextPertanyaan.innerHTML = `${namaDepan} malesin cuma ngomong doang ga nempatin janji😒`;
       	    } else {
       	     mainChat = 6;
       	     if (!isRepeat) {
       	      isRepeat = true;
       	      clonedTextPertanyaan.innerHTML = `${namaDepan}??`;
       	     } else {
       	      isCloneChat = false;
       	      //validasi bot untuk diam
       	     }
       	    }
          } else if (mainChat == 6) {
           clonedTextPertanyaan.innerHTML = `mau kamu anggep aku boong atau apalah, intinya aku tadi ga curang.`;
           clonedTextPertanyaan.innerHTML = `jadi ${namaDepan} mau terima tantangan nya apa engga?<br><br>klo mau bilang 'iya mau' gamau 'engga'`;
          } else if (mainChat == 7) {
           clonedTextPertanyaan.innerHTML = `klo tadi emang kamu dluan berarti sistem aku bermasalah, maaf ${namaDepan}🙂`;
      	   } else { // mainChat
      	    chatRepeats = false;
      	    
      	    if (isTantangan) {
       	    isCurang = false;
       	    alreadySticker = false;
       	     clonedTextPertanyaan.innerHTML = `bagus deh klo ${namaDepan} nempatin janji nya`;
      	    } else {
      	     isCurang = true;
      	     mainChatIs = false;
      	     isTantangan = false;
      	     chatRepeats = false;
      	     chatRepeated = true;
      	     chatValidation = true;
      	     alreadySticker = true;
      	     
      	     clonedTextPertanyaan.innerHTML = `iya yaudah lah klo gitu gausah di bahas lagi`;
      	    }
      	    
      	    setTimeout(() => {
      	     mainChat = 0;
      	     botAnswerExecuted = false;
      	     
      	     if (isTantangan) {
      	      mainChatIs = false;
      	      chatRepeated = true;
      	      chatRepeats = false;
      	      alreadySticker = false;
      	      
      	      clonedTextPertanyaan.innerHTML = `ok kita lanjut ya ${namaDepan} 😇`;
      	     } else {
      	      clonedTextPertanyaan.innerHTML = `yaudah lupain aja hal tadi, mending kita lanjut chat`;
      	     }
      	     document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
      	    }, 1122);
      	   }
      	  } else { // false isCurang
       	  if (kataCurang.some((kata) => jawabanValue.includes(kata))) {
        	  isCurang = true;
        	  mainChat = 3;
           clonedTextPertanyaan.innerHTML = `apasi ko kamu nuduh aku curang?, jelas jelas aku juga ngetik tadi`;
           
           setTimeout(() => {
    	       initSticker++;
    	       imgSticker.src = "assets/sticker/injek.webp";
    	       document.querySelector("#contentPertanyaan").appendChild(stickers.cloneNode(true));
   	       }, 2500);
        	 } else {
        	  if (isTantangan) {
            mainChatIs = false;
            chatRepeats = false;
            chatValidation = true;
            alreadySticker = false;
            clonedTextPertanyaan.innerHTML = `ok karna ${namaDepan} kalah berarti kamu harus lakuin 1 opsi tantangan😂`;
        	   } else {
        	    if (!noRepeatChat) {
        	     noRepeatChat = true;
              clonedTextPertanyaan.innerHTML = `yhh ga asik ah masa kalah`;
              
              setTimeout(() => {
               initSticker++;
               imgSticker.src = "assets/sticker/injek.webp";
               
               document.querySelector("#contentPertanyaan").appendChild(stickers.cloneNode(true));
              }, 2500);
        	    } else {
        	     mainChat = 0;
       	      mainChatIs = false;
       	      chatRepeats = false;
       	      botAnswerExecuted = false;
       	      
        	     if (kataGame.some((kata) => jawabanValue.includes(kata))) {
       	       noRepeatChat = false;
               clonedTextPertanyaan.innerHTML = `<strong>LUCU BANGET</strong> masa kalah sama aku, apalagi lawan developer🙄`;
       	      } else {
               clonedTextPertanyaan.innerHTML = `yaudah jadi gimana ni mau lanjut main apa engga?`;
       	      }
        	    }
        	   }
       	   }
      	  }
     	  }
     	 } else { //!botAnswerExecuted
      	 mainChatIs = false;
      	 chatRepeats = true;
      	 chatValidation = true;
      	 mainChat = isTantangan ? 1 : 0 ;
      	 
       switch(parseInt(counterWin)) {
        case 1:
         clonedTextPertanyaan.innerHTML = `yhh ga seru klo ${namaDepan} menang`;
        break;
        case 2:
         if (!isTantangan) {
          clonedTextPertanyaan.innerHTML = `coba dong ${namaDepan} cobain yang pake tantangan`;
         } else {
          clonedTextPertanyaan.innerHTML = `ko kaya nya gampang banget sih??!`;
         }
        break;
        case 3:
         if (jawabanValue.includes('gumoh')) {
          clonedTextPertanyaan.innerHTML = `wkwkwk yaudah maaf klo bikin kamu gumoh`;
         } else if (['apaan', 'maksudnya'].some((kata) => jawabanValue.includes(kata))) {
          clonedTextPertanyaan.innerHTML = `itu lho maksudnya muntah🤢`;
         } else {
          clonedTextPertanyaan.innerHTML = `lain kali bakal aku susahin 😡`;
         }
        break;
       default:
        clonedTextPertanyaan.innerHTML = `udah ah gatauh kalah mulu aku 😖`;
       }
        
        setTimeout(() => {
         if (!noRepeating) {
          if (isTantangan) {
           setTimeout(() => {
           clonedTextPertanyaan.innerHTML = `sebenernya klo aku kalah, yaudah gada opsi tantangan buat aku wkwk`;
           
           document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
            
            setTimeout(() => {
             initSticker++;
             imgSticker.src = "assets/sticker/sadcorner.webp";
             
             document.querySelector("#contentPertanyaan").appendChild(stickers.cloneNode(true));
            }, 2500);
           }, 1122);
          } else {
           clonedTextPertanyaan.innerHTML = `berhubung aku kalah jadi aku ga ngelakuin tantangan hehe`;
           
           setTimeout(() => {
            clonedTextPertanyaan.innerHTML = `klo kamu mau lebih seru, kamu harus pake tantangan main nya`;
            
            document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
           }, 1122);
          }
         } else {
          switch(parseInt(counterWin)) {
           case 1:
            if (namaDepan === secret) {
             clonedTextPertanyaan.innerHTML = `i love you from ..`;
            } else {
             clonedTextPertanyaan.innerHTML = `hebat sih bisa ngalahin aku`;
            }
           break;
           case 2:
            if (!isTantangan) {
             clonedTextPertanyaan.innerHTML = `coba pake tantangan pasti seru kwkwk`;
            } else {
             clonedTextPertanyaan.innerHTML = `jangan jangan kamu curangg ya?!?`;
            }
           break;
           case 3:
            clonedTextPertanyaan.innerHTML = `biar kamu susah menang nya.`;
           break;
          default:
           clonedTextPertanyaan.innerHTML = `emang ya kaya nya kamu emang bener bener jago deh🤐`;
          }
          
          setTimeout(() => {
           initSticker++;
           imgSticker.src = "assets/sticker/smile.webp";
           document.querySelector("#contentPertanyaan").appendChild(stickers.cloneNode(true));
          }, 2500);
         }
        }, 1122);
       }
     ////////Clone Chat Validation//////////
     (isCloneChat) ? document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true)) : console.log("tidak is cloneChat || Bot Diam");
    ////////Clone Chat Validation//////////
      }
    	}
    }
   }, 1122);
   
  } else if (init === 6 && isChattan) {
 //  console.log({ ok: jawabanValue });
   chatValue = userSay({ ok: jawabanValue })[6];
   
   init = 5;
   mainChat++;
   userDelay({ ok: jawabanValue });
   clonedTextJawaban.innerHTML = userSay({ ok: jawabanValue })[6];
   
   document.getElementById('contentPertanyaan').appendChild(clonedElementJawaban.cloneNode(true));
   
   setTimeout(() => {
    
    if (!mainChatIs) {
     if (counterWin) {
      if (mainChat === 1) {
       if (['kenapa', 'ilangin', 'knp'].some((kata) => jawabanValue.includes(kata))) {
        clonedTextPertanyaan.innerHTML = `siapa tau kamu risih gitu sama love nya? karna alay🙃`;
       } else {
        clonedTextPertanyaan.innerHTML = `${namaDepan} berarti ga risih?`;
       }
      } else if (mainChat === 2) {
       if (jawabanValue.includes('alay') && !noRepeatChat) {
        mainChat = 1;
        noRepeatChat = true;
        clonedTextPertanyaan.innerHTML = `ya kan ${namaDepan} alay bangett?🙃`;
       } else {
        noRepeatChat = false;
        clonedTextPertanyaan.HTML = `jadi gimana ni kamu mau ilangin love nya apa gimana??`;
        
        setTimeout(() => {
         initSticker++;
         imgSticker.src = 'assets/sticker/hmm.webp';
         document.getElementById('contentPertanyaan').appendChild(stickers.cloneNode(true));
        }, 1122);
       }
      } else if (mainChat === 3) {
       if (['yaudah', 'ilangin', 'iya', 'terserah', 'terah'].some((kata) => jawabanValue.includes(kata))) {
        noRepeatChat = true;
        clonedTextPertanyaan.innerHTML = `oke ${namaDepan} aku ilangin yaa buat kamu`;
        
        setTimeout(() => {
         clonedTextPertanyaan.innerHTML = `padahal aku lebih suka ada love love nya wkwk`;
         
         document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true))
         }, 1122);
       } else {
        clonedTextPertanyaan.innerHTML = `seriusan nih kamu gamau ilangin?`;
       }
      } else if (mainChat === 4) {
       if (noRepeatChat) {
        clonedTextPertanyaan.innerHTML = `yaudah lah gpp ${namaDepan}`;
        
        setTimeout(() => {
         initSticker++;
         imgSticker.src = 'assets/sticker/okey.webp';
         document.getElementById('contentPertanyaan').appendChild(stickers.cloneNode(true));
        }, 1122);
       } else {
        if (['gausah', 'serius', 'gamau', 'gak'].some((kata) => jawabanValue.includes(kata))) {
         clonedTextPertanyaan.innerHTML = `ok klo kamu seriuss`;
        } else if (['yaudah', 'ilangin', 'iya', 'terserah', 'terah'].some((kata) => jawabanValue.includes(kata))) {
         noRepeatChat = true;
         clonedTextPertanyaan.innerHTML = `nhh gini dong kan jelas, yaudah aku ilangin yaa`;
        } else {
         mainChat = 3;
         clonedTextPertanyaan.innerHTML = `tunggu dlu kamu mau nya gimana, serius ga nih gamau di ilangin?`;
         
         setTimeout(() => {
          clonedTextPertanyaan.innerHTML = `mau di ilangin apa engga?`;
          
          document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
         }, 1122);
        }
       }
      } else {
       mainChat = 0;
       mainChatIs = true;
       if (noRepeatChat) {
        clonedTextPertanyaan.innerHTML = `yhh jadi polos doang background chat nya`;
        
        setTimeout(() => {
         clonedTextPertanyaan.innerHTML = `btw kamu mau ganti background partikelnya ga?`;
         
         document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
        },chatDelay);
       } else {
        clonedTextPertanyaan.innerHTML = `berhubung kamu tadi udah menangin game dan kalahin aku`;
        
        setTimeout(() => {
         clonedTextPertanyaan.innerHTML = `aku bisa ngelakuin sesuatu buat kamu`;
         
         document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
        }, 1122);
       }
      }
     } else { // kondisi untuk user tidak memenangkan game sama sekali
      if (!chatValidation) {
       mainChat = 0;
       chatValidation = true;
       clonedTextPertanyaan.innerHTML = `hmmm kamu berarti belum memenangkan game sama sekali ya`;
      } else {
       if (mainChat === 1) {
        clonedTextPertanyaan.innerHTML = `aku pikir kamu bakal berusaha buat menangin game nya tadi`;
       } else if (mainChat === 2) {
        if (kataGame.some((kata) => jawabanValue.includes(kata))) {
         clonedTextPertanyaan.innerHTML = `kwkwk ya maaf kalo aku terlalu jago😎`;
        } else {
         clonedTextPertanyaan.innerHTML = `hmmm begitu ya`;
        }
       } else if (mainChat === 3) {
        if (['jago', 'apaan', 'sok'].some((kata) => jawabanValue.includes(kata))) {
         clonedTextPertanyaan.innerHTML = `benerkan emang aku jago? buktinya kamu tadi kalah`;
        } else {
         clonedTextPertanyaan.innerHTML = `yaudah deh gapapa klo gitu`;
        }
       } else if (mainChat === 4) {
        clonedTextPertanyaan.innerHTML = `lain kali aku mau ${namaDepan} lebih berusaha lagi buat menang`;
        
        setTimeout(() => {
         clonedTextPertanyaan.innerHTML = `biar ${namaDepan} ga perlu cape cape ngelakuin tantangan nya🤧`;
         
         document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
        }, 1122);
       } else if (mainChat === 5) {
        clonedTextPertanyaan.innerHTML = `ok deh nanti aku ga seius serius amat main nya`;
        
        setTimeout(() => {
         clonedTextPertanyaan.innerHTML = `biar kamu menang nya gampang hehe`;
         
         document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
        }, 1122);
       } else if (mainChat === 6) {
        if (['ngeremehin', 'kasian'].some((kata) => jawabanValue.includes(kata))) {
         mainChat = 5;
         clonedTextPertanyaan.innerHTML = `yeuhh aku ga bermaksud begitu tau🤬`;
        } else {
         clonedTextPertanyaan.innerHTML = `yaudahh yang penting lain kali jangan langsung suren ya😇`;
         
         setTimeout(() => {
          clonedTextPertanyaan.innerHTML = `maksud aku jangan mudah menyerah`;
          
          document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
         }, 1122);
        }
       } else {
        mainChat = 0;
        mainChatIs = true;
        clonedTextPertanyaan.innerHTML = `yaudah bagusss klo gitu`;
       }
      }
     }
    } else { // true mainChatIs
     if (counterWin) { //validasi untuk user bisa mengubah partikel
      if (mainChat === 1) {
       clonedTextPertanyaan.innerHTML = `jadi aku bisa ngubah background partikel menjadi beberapa mode, yang bisa kamu pilih sesuka kamu`;
 
       setTimeout(() => {
        clonedTextPertanyaan.innerHTML = `di bawah ini adalah nilai yang bisa kamu gunakan untuk mengatur partikelnya.<br><br>di bawah ini adalah mode partikel :<br><br>1. Love<br>2. stars<br>3. image <br>4. hexagon<br>5. segitiga<br>6 .persegi<br>7. lingkaran<br><br>di bawah ini adalah direction / arah :<br><br>1. top<br>2. top-right<br>3. top-left<br>4. right<br>5. left<br>7. bottom<br>6. bottom-right<br>8. bottom-left<br><br>di bawah ini adalah beberapa mode saat kamu meng klik partikel :<br><br>1. bubble<br>2. repulse<br>3. push<br>4. remove<br><br>kamu bisa mengatur kecepatan animasi dari 1 - 5.`;
        
        document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
       }, 1122);
      } else if (mainChat === 2) {
       clonedTextPertanyaan.innerHTML = `pasti kamu bertanya gimana cara ngubah nya ya kan?`;
       
       setTimeout(() => {
        clonedTextPertanyaan.innerHTML = `caranya kamu harus mengetikan 4 nilai. yaitu mode, arah, kecepatan, mode saat di click`;
        
        document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
       }, 1122);
      } else if (mainChat === 3) {
       clonedTextPertanyaan.innerHTML = `jadii kamu bisa memberikan nilai yang kamu pilih sesuai pesan chat diatas`;
       
       setTimeout(() => {
        clonedTextPertanyaan.innerHTML = `perlu kamu ingat. kamu harus mengetikan nilai nya harus sama seperti pesan chat diatas, agar valid`;
        
        document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
       }, 1122);
      } else if (mainChat === 4) {
        clonedTextPertanyaan.innerHTML = `stars, top-right, 3, push`;
        
       setTimeout(() => {
        clonedTextPertanyaan.innerHTML = `maksud contoh diatas<br>stars itu adalah mode<br>top-right adalah arah gerakan<br>3 kecepatan animasinya<br>push adalah saat di klik<br>dan inget ya pake koma`;
        
        document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
         
        setTimeout(() => {
         clonedTextPertanyaan.innerHTML = `udah gitu doang, nanti aku ganti background nya sesuai yang kamu mau ${namaDepan}😄`;
         
         document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
        }, 1122);
       }, 1122);
      } else if (mainChat === 5) {
       clonedTextPertanyaan.innerHTML = `okey sekarang kamu coba seperti yang aku kasi tau tadi ${namaDepan}`;
       
       setTimeout(() => {
        initSticker++;
        imgSticker.src = "assets/sticker/smile.webp";
        document.querySelector("#contentPertanyaan").appendChild(stickers.cloneNode(true));
       }, 2500);
      } else {
       // mengirim nilai jawaban user untuk meng custom partikel
       if (isCustomParticle) {
        mainChat = 0;
        mainChatIs = false;
        noRepeating = false;
        
        clonedTextPertanyaan.innerHTML = `mulai sekarang kamu bisa mengubah partikelnya kapan pun`;
         
         setTimeout(() => {
          clonedTextPertanyaan.innerHTML = `kamu tinggal mengetikan seperti sebelum nya ya ${namaDepan}`;
          
          document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
        }, 1122);
       } else {
        isCustomParticle = true;
        handleCustomParticle({ key: true, thisMode: mode, thisDirection: direction, thisSpeed: speed, thisClick: click });
       }
      }
     } else { // validasi untuk user yang tidak bisa mengubah partikel
      if (mainChat === 1) {
       clonedTextPertanyaan.innerHTML = `btw ${namaDepan} cita cita nya apa?`;
      } else if (mainChat === 2) {
       if (kataPertanyaan.some((kata) => jawabanValue.includes(kata))) {
         clonedTextPertanyaan.innerHTML = `ya soalnya aku pengen tau aja gitu hehe`;
       } else {
        dreams = dreams.toLowerCase();
        if (kataGamau.some((kata) => jawabanValue.includes(kata))) {
          clonedTextPertanyaan.innerHTML = `malesin nihhh`;
        } else {
         if (['cita', dreams].every((kata) => jawabanValue.includes(kata))) {
          clonedTextPertanyaan.innerHTML = `owhh cita cita kamu mau jadi ${dreams}`;
         } else {
          const newValueDreams = jawabanValue.split(' ');
          newDreams = newValueDreams.pop();
          
          if (newValueDreams.includes('cita')) {
           isRepeat = true;
           clonedTextPertanyaan.innerHTML = `berubah lagi kah cita cita kamu?`;
          } else {
           mainChat = 1;
           clonedTextPertanyaan.innerHTML = noRepeatChat ? `iya sebut cita cita kamu apa?` : `ayo dong kasi tau cita cita kamu aku kan penasaran ${namaDepan}`;
           noRepeatChat = true;
          }
         }
        }
       }
      } else if (mainChat === 3) {
       clonedTextPertanyaan.innerHTML = isRepeat ? `sebelum nya kan cita cita kamu ${dreams}` : `hebat ya cita cita kamu mau jadi ${dreams}`;
      } else if (mainChat === 4) {
       if (heranBertanya.some((kata) => jawabanValue.includes(kata))) {
        mainChat = 3;
        clonedTextPertanyaan.innerHTML = 'ya tau dongg makanya aku tanya lagi, cita cita kamu sekarang berubah?';
       } else {
        clonedTextPertanyaan.innerHTML = isRepeat ? 'iya deh yang cita cita nya banyak wkwk' : 'keren kerennn';
       }
      } else if (mainChat === 5) {
       clonedTextPertanyaan.innerHTML = isRepeat ? 'semoga cita citanya tercapai ya😇' : `semoga cita cita kamu terwujud ya🥰`;
       
       setTimeout(() => {
        clonedTextPertanyaan.innerHTML = `dan jangan mudah menyerah juga untuk menjadi ${isRepeat ? dreams + 'dan' + newDreams : dreams}`;
        
        document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true))
       }, 1122);
      } else {
       if (['makasih', 'amin'].some((kata) => jawabanValue.includes(kata))) {
        clonedTextPertanyaan.innerHTML = `hehe semangatttt terus ya mengejar cita cita nya`;
       } else if (['berusaha', 'berjuang', 'menggapai', 'mengapai', 'meraih', 'semangat'].some((kata) => jawabanValue.includes(kata))) {
        clonedTextPertanyaan.innerHTML = `bagus deh klo gitu aku jadi seneng denger nya`;
       } else {
        init = 6;
        mainChat = 0;
        isRepeat = false;
        noRepeatChat = false;
        
        clonedTextPertanyaan.innerHTML = `semangatttt terus ya ${namaDepan}`;
       }
      }
     }
    }
    //////////Clone Chat Validation//////////
    (isCloneChat) ? document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true)) : console.log("tidak is cloneChat || Bot Diam");
    //////////Clone Chat Validation//////////
   }, 1122);
  } else if (init === 7) {
  // console.log({ ok: jawabanValue });
   chatValue = userSay({ ok: jawabanValue })[6];
   
   userDelay({ ok: jawabanValue });
   clonedTextJawaban.innerHTML = userSay({ ok: jawabanValue })[6];
   
   document.getElementById('contentPertanyaan').appendChild(clonedElementJawaban.cloneNode(true));
   
   setTimeout(() => {
    init = 6;
    mainChat++;
    
    textMengetik.innerHTML = "Online";
    
    if (mainChat === 1) {
     clonedTextPertanyaan.innerHTML = botSay()[8];
    } else if ([2, 3].some((num) => mainChat === num)) {
     clonedTextPertanyaan.innerHTML = `wkwkwkwkwk`;
    } else if (mainChat === 4) {
     clonedTextPertanyaan.innerHTML = `hmmm apa lagi ya`;
     
     setTimeout(() => {
      initSticker++;
      imgSticker.src = "assets/sticker/ngeleg.webp";
      document.querySelector("#contentPertanyaan").appendChild(stickers.cloneNode(true));
     }, 2500);
    } else if (mainChat === 5) {
     clonedTextPertanyaan.innerHTML = botSay()[9];
    } else if (mainChat === 6) {
     if (kataHeran.some((kata) => jawabanValue.includes(kata))) {
      clonedTextPertanyaan.innerHTML = `ya gpp ${namaDepan} soalnya aku udah gatau mau bahas apa lagi`;
     } else {
      clonedTextPertanyaan.innerHTML = `udah dlu ya ${namaDepan}`;
     }
    } else if ([7, 8].some((init) => mainChat === init)) {
      if (kataHeran.some((kata) => jawabanValue.includes(kata))) {
       clonedTextPertanyaan.innerHTML = `lain kali kita lanjut lagi ngobrolnya sama kamu, tapi di lain waktu ya😇`;
      } else {
       clonedTextPertanyaan.innerHTML = `iyaa makasih ya ${namaDepan} udah nemenin aku ngobrol`;
      }
     } else if (mainChat === 9) {
      clonedTextPertanyaan.innerHTML = `seneng banget aku bisa kenal sama kamu`;
      
      setTimeout(() => {
       clonedTextPertanyaan.innerHTML = `udah ${genderSay} baik lagi. lengkap deh pokoknya kwkw`;
       
       setTimeout(() => {
        initSticker++;
        imgSticker.src = "assets/sticker/smile.webp";
        document.querySelector("#contentPertanyaan").appendChild(stickers.cloneNode(true));
       }, 2500);
       
       document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
      }, 1122);
    } else if (mainChat === 10) {
     if (['belom tau', 'liat', 'tau', 'kenal', 'pernah', genderSay].some((kata) => jawabanValue.includes(kata))) {
      mainChat = 9;
      noRepeating = true;
      clonedTextPertanyaan.innerHTML = `ya kan semua ${gender} itu ${genderSay}`;
     } else {
      if (noRepeating) {
       mainChat = 9;
       noRepeatChat = true;
       noRepeating = false;
       clonedTextPertanyaan.innerHTML = `bener kan? wkwkwk udah ya aku mau pergi nih`;
       
       setTimeout(() => {
        clonedTextPertanyaan.innerHTML = `kamu jangan sedih ya nanti kamu nangid lagi wkwkwk🫠`;
        
        document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
       }, 1122);
      } else {
       if (noRepeatChat) {
        if (['sedih', 'nangis', 'nangid', 'pergi'].some((kata) => jawabanValue.includes(kata)) && !isRepeat) {
         mainChat = 9;
         isRepeat = true;
         clonedTextPertanyaan.innerHTML = `seriuss nih kamu ga sedih?? wkwkw`;
         
         setTimeout(() => {
          initSticker++;
          imgSticker.src = "assets/sticker/ups.webp";
          document.querySelector("#contentPertanyaan").appendChild(stickers.cloneNode(true));
         }, 2500);
        } else {
         mainChat = 9
         isRepeat = false;
         noRepeatChat = false;
         clonedTextPertanyaan.innerHTML = `yaudah bagus deh klo gitu, ada sesuatu yang mau aku bilang sama kamu`;
        }
       } else {
        clonedTextPertanyaan.innerHTML = `kapan kapan kita ngelakuin ${hobbyFir} bareng ya`;
        
        setTimeout(() => {
         clonedTextPertanyaan.innerHTML = `kaya nya itu bakalan seru klo kita berdua ngelakuin bareng wkwk`;
         
         document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
        }, 1122);
       }
      }
     }
    } else if (mainChat === 11) {
     clonedTextPertanyaan.innerHTML = `dan satuu lagi aku mau denger lagu favorite ${songs} bareng kamu😁`;
    } else if (mainChat === 12) {
     clonedTextPertanyaan.innerHTML = `terakhirr ada sesuatu yang ingin aku kasi tau ke kamu`;
    } else if (mainChat === 13) {
     clonedTextPertanyaan.innerHTML = `kamu masih bisa chat sama aku, tapi ini dalam konteks bertanya sesuatu.`;
     
     setTimeout(() => {
      clonedTextPertanyaan.innerHTML = `jadi kamu bisa bertanya apa saja mengenai di bawah ini<br><br>1. fakta menarik angka<br>2. random foto kucing<br>3. menentukan gender dari nama<br>4. bisa mengartikan kata ke bahasa jawa dan sunda<br>5. menebak nama asli kamu dari negara mana<br>6. mengetahui informasi negara negara di dunia<br>7. memberikan random playlist lagu sesuai mood kamu<br>8. menampilkan gambar galaksi sesuai tanggal lahir<br><br>semoga bisa menemani kamu tiap hari nya di kala ${namaDepan} bosen😇😸`;
      
      document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     }, 1122);
    } else if (mainChat === 14) {
     clonedTextPertanyaan.innerHTML = `bye ${namaDepan} sampe sini dulu yhh ngobrolnya`;
    } else {
     init = 8;
     mainChat = 13;
     isEnding = true;
     isCloneChat = false;
     inUseAPI = 'cats_api';
    }
    //////////Clone Chat Validation//////////
    (isCloneChat) ? document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true)) : console.log("tidak is cloneChat || Bot Diam");
    //////////Clone Chat Validation//////////
   }, 1122);
  } else {
   init = 999;
   let isSwitch;
   chatValue = userSay({ api: jawabanValue })[13];
   userDelay({ api: jawabanValue });
   
   clonedTextJawaban.innerHTML = userSay({ api: jawabanValue })[13];
   
   document.getElementById('contentPertanyaan').appendChild(clonedElementJawaban.cloneNode(true));
   
   if (storedApi_command.some((kata) => jawabanValue.includes(kata))) {
    const matchingCommand = Object.keys(commandToParentMap).find(command => jawabanValue.includes(command));
    const getApi = commandToParentMap[matchingCommand];
    const resultApi = getApi[0];
    
    isSwitch = true;
    inUseAPI = resultApi;
   }
  
   const listAPI = dataAPI().list;
   const getApiParams = listAPI[inUseAPI].apiParams;
   const getTutorial = listAPI[inUseAPI].chat;
   const keyForUse = listAPI[inUseAPI].keyForUse;
   const keyLength = listAPI[inUseAPI].keyLength;
   const inputValue = jawabanValue.split(' ');
   const useParams = keyForUse?.find((kata) => jawabanValue.includes(kata));
   const getValue = inputValue?.filter((kata) => !keyForUse?.includes(kata));
   const validationKeyLength = ['gender_api', 'guess_name_api', 'hadits_api', 'apod_api', 'translate_api'];
   const isValid = keyForUse?.some((kata) => jawabanValue.includes(kata)) && inputValue.length === keyLength || validationKeyLength.some((kata) => inUseAPI.includes(kata));
    
   setTimeout(() => {
    
    
    if (inUseAPI && !isSwitch) {
     if (isValid) {
     const sendParams = getApiParams[useParams];
     console.table({ api: inUseAPI,         data: getValue, params: sendParams, useParams: useParams});
     if (inUseAPI === 'number_api') return getNumberFact({number: nilaiAngka, type: useParams});
     if (inUseAPI === 'playlist_api') {
      endIndexList = 8;
      startIndexList = 0;
      previousStates = [];
      
      const actionButton = document.querySelectorAll('.wrapper-cta .wrapper-cta-chat .items-btn-chat');
      const actionList = document.querySelectorAll('.wrapper-cta .wrapper-btn-chat .items-btn-chat');
      
      actionButton.forEach(button => button.disabled = true);
      actionList.forEach(button => button.disabled = true);
      
      return setTimeout(() => { functionPlaylist({type: getValue[0], playlist: sendParams}) }, 2000);
     }
     
      functionApi({
       api: inUseAPI,
       data: getValue,
       params: sendParams,
       useChat: true,
       again: false,
       number: nilaiAngka,
       inputText: validationKeyLength.some((kata) => inUseAPI.includes(kata)) ? jawabanValue.replace(useParams, '').trim() : jawabanValue
      });
      
      clonedTextPertanyaan.innerHTML = `ok tunggu sebentar yaa ${namaDepan}`;
     } else {
      clonedTextPertanyaan.innerHTML = 'UPS! tolong ikutin apa yang aku contohin tadi ya';
      
      setTimeout(() => {
       clonedTextPertanyaan.innerHTML = 'jika kamu mau kamu bisa mengganti perintah nya di menu input';
       
       document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
      }, 1122);
     }
    } else {
     clonedTextPertanyaan.innerHTML = isSwitch ? `${getTutorial}` : `tolong pilih terlebih dahulu API di menu input`;
    }
    document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
   }, 1122);
  }
 }
}/*kurawa end botStart*/

function handleCustomParticle(value) {
 const { key, thisMode, thisDirection, thisSpeed, thisClick } = value;

 const speedValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 const customMode = ['stars', 'love', 'hexagon', 'segitiga', 'persegi', 'lingkaran'];
 const customDirection = ['top', 'right', 'left', 'bottom', 'top-right', 'top-left', 'bottom-right', 'bottom-left'];
 const clickMode = ['bubble', 'repulse', 'push', 'remove'];
 
 const checkCustomMode = customMode.includes(thisMode);
 const checkSpeedValue = speedValue.includes(thisSpeed);
 const checkDirectionMode = customDirection.includes(thisDirection);
 const checkClickMode = clickMode.includes(thisClick);
 
 const setExecutedCustom = [thisMode, thisDirection, thisSpeed, thisClick].every((value) => value !== undefined);
  
  setTimeout(() => {
   if (key && setExecutedCustom) {
    clonedTextPertanyaan.innerHTML = `okey sebentar ya ${namaDepan}`;
    
    setTimeout(() => {
     particlesGame({ mode: thisMode, direction: thisDirection, image: 'assets/sticker/hearts.png', speed: thisSpeed, click: thisClick, key: true });
     
     isCustomParticle = true;
     doneSwitchParticle = true;
     
     clonedTextPertanyaan.innerHTML = `keren kan bisa aku ubah background partikelnya? kwkw`;
     
     document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
    }, 1122);
   } else {
    clonedTextPertanyaan.innerHTML = `maaf kayanya ada sesuatu yang salah deh mengetikan nilai nya, coba ketik ulang lagii`;
    
    setTimeout(() => {
     clonedTextPertanyaan.innerHTML = `tolong ketikan seperti apa yang sudah diberitahu tadi ya. jika ingin merubah partikelnya`;
     
     document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
    }, 1122);
   }
  }, 1122);
}

let isRunning = false;
let intervalChat = null;
let timeoutChat = null;


// Membuat instance dari MutationObserver dengan sebuah callback function
const observer = new MutationObserver((mutationsList, observer) => {
  // Iterasi melalui setiap mutasi
  for (let mutation of mutationsList) {
   if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
    const chatDelay = Math.floor(Math.random() * 2000) + 3000;
    
    textLoad();
    isRunning = true;
    clearTimeout(timeoutChat); 
    barier.style.display = "block";
    textMengetik.innerHTML = 'Online';
    
    timeoutChat = setTimeout(() => {
     stopTextLoad();
     isRunning = false;
     barier.style.display = "none";
     textMengetik.innerHTML = 'Online';
    }, chatDelay);
    
    const storedChat = {};
    const containerChat = document.querySelector("#wrapper-item-chat");
    const allChat = containerChat.lastElementChild;
    
    const variables = [
     'init',
     'pesan',
     'fullType',
     'mainChat',
     'playAgain',
     'initGuess',
     'mainChatIs',
     'counterWin',
     'initSticker',
     'isCloneChat',
     'chatRepeats',
     'jawabanBenar',
     'chatRepeated',
     'noRepeatChat',
     'lengthFullType',
     'alreadySticker',
     'chatValidation',
     'isCustomParticle',
     'isChattan',
     'isGameWin',
     'guessGame',
     'playGuess',
     'typingGame',
     'playTyping',
     'winTyping',
     'winGuess',
     'noRepeating',
     'quest_1',
     'quest_2',
     'quest_3',
     'newDreams',
     'isCurang',
     'isRepeat',
     'isEnding',
     'inUseAPI',
     'startUseApi',
     'isTantangan',
     'botAnswerExecuted'
    ];
    
    setTimeout(() => {
     variables.forEach(variable => {
      storedChat[variable] = eval(variable);
     });
     
     storedChat.chat = allChat.innerHTML;
     startStored ? localStorage.setItem('historyChat', JSON.stringify(storedChat)) : console.log('initialisasi pertama sebelum memulai storedChat') ;
     
     const filteredTable = {};
     const variableJSON = JSON.parse(localStorage.getItem('historyChat'));
     
     for (const key in variableJSON) {
      if (key !== 'fullType') {
       filteredTable[key] = variableJSON[key];
      }
     }
     
     //console.log(filteredTable['inUseAPI'])
     //console.table(filteredTable);
     
    }, 500);
    const lastElementChat = document.getElementById('contentPertanyaan').lastElementChild;
    const chatPertanyaanExists = document.getElementById('chatPertanyaan');
  //  console.log(chatPertanyaanExists.id, lastElementChat.id, startStored)
    if (chatPertanyaanExists.id === lastElementChat.id && startStored) notif.play();
    
    setTimeout(() => document.querySelector('.pathchat').scrollIntoView({ behavior: 'smooth', block: 'end' }) , 250);
   }
  }
});
// Tentukan elemen target yang akan diamati
targetElement = document.getElementById('contentPertanyaan'); // Ganti 'elementId' dengan ID elemen yang Anda inginkan

// Konfigurasi observasi
const config = { childList: true, subtree: true };
// Mulai mengamati elemen target dengan konfigurasi yang telah ditentukan
observer.observe(targetElement, config);

function botDelay(pertanyaanBot) {
 textPertanyaan.innerHTML = botSay(pertanyaanBot)[init];
 jawaban.value = "";
}

function userDelay(jawabanUser) {
 userSays.push(jawaban.value);
 fullType.push(chatValue);
 
 textJawaban.innerHTML = userSay(jawabanUser)[init];
 
 jawaban.value = "";
}

const textVariations = ["Mengetik", "Mengetik.", "Mengetik..", "Mengetik...", "Mengetik...."];

let currentIndex = 0;
const textLoad = () => {
  if (!intervalID) {
    intervalID = setInterval(() => {
      textMengetik.innerHTML = textVariations[currentIndex];
      currentIndex = (currentIndex + 1) % textVariations.length;
    }, 1500);
  } else {
    console.log('Interval sudah berjalan');
  }
};

const stopTextLoad = () => {
  if (intervalID) {
    clearInterval(intervalID);
    intervalID = null;
    console.log('Interval dihentikan');
  } else {
    console.log('Tidak ada interval yang sedang berjalan');
  }
};

/*kode validasi JAM*/

const statusUser = () => {
statusDeveloper.innerHTML = "Online";
setTimeout(() => {
  statusDeveloper.innerHTML = "Do not disturb";
  setTimeout(() => {
   statusDeveloper.innerHTML = "Online";
  }, 12000);
 }, 12000);
}

function startTime() {
 let today = new Date();
 let h = today.getHours();
 let m = today.getMinutes();
 let s = today.getSeconds();
 let d = today.getDate();
 m = checkTime(m);
 s = checkTime(s);
 h = checkTime(h);
 d = checkTime(d);
 timeAsk.innerHTML = `${h}.${m}`;
 timeQuestion.innerHTML = `${h}.${m}`;
 timeSticker.innerHTML = `${dayNames[dayIndex]} | ${d} | ${h}.${m}`;
}

function startTimeHome() {
 let today = new Date();
 let h = today.getHours();
 let m = today.getMinutes();
 let s = today.getSeconds();
 m = checkTime(m);
 s = checkTime(s);
 h = checkTime(h);
 timeHome[0].textContent = `${h}`;
 timeHome[1].textContent = `${m}`;
 let time = setTimeout(startTimeHome, 4000);
}

function sayTime(login) {
 let timeNow = new Date().getHours();
  if (login === true) {
   if (timeNow >= 1 && timeNow < 8) {
    return `pagi`;
   } else if (timeNow >= 8 && timeNow < 16) {
    return `siang`;
   } else if (timeNow >= 16 && timeNow < 18) {
    return `sore`;
   } else {
    return `malam`;
   }
  } else {
   return `selamat datang di fabot !`;
  }
}

function checkTime(i) {
 if (i < 10) {
  i = "0" + i;
 }
 return i;
}

window.onload = function() {
  startTime();
  statusUser();
  startTimeHome();
  setInterval(statusUser, 20000);
}


/*JAVASCRIPT CODE BACKGROUND ANIMATION*/

function hujanLinear(index) {
 let amount = 15;
 let i = 0;
 
 let containers = {
  0: document.getElementById('linear0'),
  1: document.getElementById('linear1')
 }
 while (i < amount) {
  let drop = document.createElement('i');
  
  let size = Math.random() * 4;
  let posX = Math.floor(Math.random() * window.innerWidth);
  let delay = Math.random() * -150;
  let duration = Math.random() * 30;

  drop.style.width = 2 + size +'px';
  drop.style.left = posX + 'px';
  drop.style.animationDelay = delay+ 's';
  drop.style.animationDuration = 25 + duration + 's';
  
  containers[0].appendChild(drop.cloneNode(true));
  containers[1].appendChild(drop.cloneNode(true));
  i ++;
 }
}


function customRain(index) {
 let amount = 20;
 let i = 0;
 
 let containers = document.getElementById('custom0');
 while (i < amount) {
  let drop = document.createElement('img');
  drop.setAttribute('class', 'pjs-image')
  drop.src = 'assets/sticker/hearts.png';
  
  let size = Math.random() * 40;
  let posX = Math.floor(Math.random() * window.innerWidth);
  let delay = Math.random() * -150;
  let duration = Math.random() * 100;

  drop.style.width = 15 + size + 'px';
  drop.style.height = 15 + size + 'px';
  drop.style.left = posX + 'px';
  drop.style.animationDelay = delay+ 's';
  drop.style.animation = 'customHujan' + 50 + duration + 's' + 'infinite';
  
  containers.appendChild(drop.cloneNode(true));
  i ++;
 }
}

hujanLinear();
customRain();

function rainLove() {
 let amount = 16;
 let i = 0;
 let containers = {
  0: document.getElementById('lovee0'),
  1: document.getElementById('lovee1')
 }
 while (i < amount) {
  let dropLove = document.createElement('i');
  dropLove.classList.add('fas');
  dropLove.classList.add('fa-heart');

  let sizeLove = Math.random() * 16;
  let posXLove = Math.floor(Math.random() * 100);
  let delayLove = Math.random() * -115;
  let durationLove = Math.random() * 30;

  dropLove.style.fontSize = 13 + sizeLove + 'px';
  dropLove.style.left = posXLove + '%';
  dropLove.style.animationDelay = delayLove + 's';
  dropLove.style.animationDuration = 30 + durationLove + 's';
  containers[0].appendChild(dropLove.cloneNode(true));
  containers[1].appendChild(dropLove.cloneNode(true));
  i ++;
 }
}

rainLove();


// putih oren oren, putih ijo biru, putih biru ijo, putih coklat coklat
 
//Buka aplikasi Spotify