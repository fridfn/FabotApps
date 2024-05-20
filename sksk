let jawaban = document.querySelector('.input-jawaban');
const sendBtn = document.querySelector('.btn-bot');
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

const containerLinear = document.querySelector('.container-linear');
const containerLove = document.querySelector('.container-love');

const clonedTextJawaban = clonedElementJawaban.querySelector('#textJawaban');
const clonedTextPertanyaan = clonedElementPertanyaan.querySelector('#textPertanyaan');
const originalTextPertanyaan = clonedElementPertanyaan.querySelector('#TextPertanyaan');

let initSticker = 0;
let imgSticker = document.createElement('img');
imgSticker.setAttribute('class','imgSticker');
imgSticker.setAttribute('alt','sticker_images');

let initGuess = 0;
let imgPicture = document.createElement('img');
imgPicture.setAttribute('class','imgPicture');
imgPicture.setAttribute('alt','picture_images');

let stickers = clonedContentPertanyaan.querySelector('.sticker-chat');
let guessPicture = clonedContentPertanyaan.querySelector('.guess-picture');
let clonedTimeSticker = stickers.querySelector('.time-sticker');
let clonedTimeGuess = stickers.querySelector('.time-guess');

guessPicture.appendChild(imgPicture);
stickers.appendChild(imgSticker);

stickers.style.display = "block";
guessPicture.style.display = "block";

function checkInput() {
 let jawaban = document.querySelector('.input-jawaban');
 let sendBtn = document.querySelector('.btn-bot');

 if (jawaban.value.length >= 2) {
  sendBtn.disabled = false;
 } else {
  sendBtn.disabled = true;
 }
}

let img = document.createElement('img');
img.src = 'boticon.webp';
document.getElementById('imgBox').appendChild(img);

function reactBot() {
 if (localStorage.getItem("theme") === "basic") {
  let img = document.createElement('img');
  img.src = 'xd.webp';
  document.getElementById('imgBox').appendChild(img);
  setTimeout(() => {
   let img = document.createElement('img');
   img.src = 'boticon.webp';
   document.getElementById('imgBox').appendChild(img);
  }, 1200);
 } else {
  img.src = 'xdBlue.webp';
  document.getElementById('imgBox').appendChild(img);
  setTimeout(() => {
   let img = document.createElement('img');
   img.src = 'fablue.webp';
   document.getElementById('imgBox').appendChild(img);
  }, 1200);
 }
}

let targetElement;
const mediaQuery = window.matchMedia('(max-width: 768px)');

const handleMediaChange = (mediaQuery) => {
 if (mediaQuery.matches) {
  console.log('lebar layar <= 768px');
  document.addEventListener('contextmenu', function(e) {
   targetElement = e.target;
   if (targetElement.classList.contains('jawaban')) {
   } else {
    //e.preventDefault();
   }
  });
 } else {
  console.log('lebar layar >= 768px');
 }
};

mediaQuery.addListener(handleMediaChange);
handleMediaChange(mediaQuery);

document.querySelector(".input-jawaban").addEventListener("paste", function(e) {
 //e.preventDefault();
 console.log('eitsss tidak bisa copy paste');
 function curang() {
  clonedTextPertanyaan.innerHTML = "hayoo ngapain kamu mau copy paste ya?🤡";

  document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
 }
 setTimeout(curang, 500);
});

let userSays = [];
let fullType = [];
let lengthFullType;

const botSay = (data) => {
 return [
  `Hi. namaku adalah Fabot, nama kamu ${fullName} ya?`, /*0*/
  `halo ${namaDepan} aku adalah chat bot sederhana yang dibuat dengan bahasa pemrograman JavaScript dasar`, /*1*/
  `kamu kan lahirnya tanggal ${ultah}, berarti umur kamu sekarang brp?`,/*2*/
  `owh sekarang umur kamu udh ${umurNow} tahun, berarti kamu udh kelas ${kelas} ya`, /*3*/
  `btw kamu`, /*4*/
  `hmm apa yaa, bingung mau ngomong apa lagi sama kamu`, /*5*/
  `dari pada bingung, gimana klo kita main game aja?`, /*6*/
  `nh gitu dong ${namaDepan}, aku kan masih pengen ngobrol sma kamu😇`, //7
  ``, /*8*/
  `${data?.siap}, siap yaa ${userSays[0]} klo gitu`, /*9*/
  `hmm aku rasa kaya nya kita sampe sini aja ya ${userSays[0]} main nya?`, /*10*/
  `makasih yaa ${userSays[0]}🥺 di tunggu ya next updatenya dari aku, nanti kita main bareng lagi😉`, /*11*/
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
  ``, /*11*/
 ];
};

const kataKasar = [`kontol`, `memek`, `anjing`, `bangsat`, `ngentot`, `bajingan`, `coli`, `asu`, `komtol`, `anjg`, `ajg`, `tolol`, `bacot`, `bacod`, `bacots`, `bego`, `goblok`, `coly`, `desah`, `colmek`, `colmex`, `kontil`, `babi`, `anjying`, `ngewe`, `sange`, `ashu`, `tholol`, `fuck`, `jancok`, `bangsad`, `begok`, `badjingan`, `memex`, `kontols`, `kontolz`, `sangean`, `colli`, `colly`, `babik`, `gay`, `ngegay`, `bokep`, `bokeps`, `porno`, `xnxx`, `porn`, `lesbian`, `lesbi`, `pornhub`, `yandex`, `hentai`, `ngentots`, `ngecrot`, `ngecrot`, `nyepong`, `kntl`, `kontl`, `kntol`, `ngocok`, `ngocoks`, `cabul`, 'memeq', 'memew', 'tholol', 'begok', 'LGBTQ', 'lesbian', 'ngegay', 'gay', 'transgender', 'biseksual', 'sex', `kintil`];

const kataGamau = [`gak`, `engga`, `apasi`, `kepo`, `sok asik`, `ga boleh`, `lah lu siapa`, `masalah`, `gamau`, `lu siapa`, `boong`, `bodo amat`, `gak mau`, `ga mau`, `ga peduli`, `tapi boong`, `boong`, `gamau`, `maksa`, `kamu siapa`, `udahan`, `lah ngancem`, `marah`, 'keberatan'];

const kataNetral = [`farid`, `gpp`, `boleh`, `gapapa`, `yauda`, `oke`, `baiklah`, `terserah`, `gmna`, `gimana`, `gmana`, `iya iya`, `iya dah iya`, `iya deh iya`];

const kataBatal = [`gajadi`, `engga jadi`, `ga jadi`, `udahan`, `gamau main`, `capek`];

const kataHeran = [`ko bisa tau`, `ko tau`, `tau sih`, `kok bisa tau`, `bisa tau`, `sebentar`, 'emang', 'kenapa'];

const kataCurang = ['curang', 'licik', 'bodo', 'peduli', 'suka suka'];

const kataGame = ['hadiah', 'dapet', 'makasih', 'tebak', 'abis', 'mau', 'tantangan','challenge','ngerti', 'paham', 'maksudnya', 'gajadi', 'gatau', 'game', 'lanjut', 'main'];

const kataPertanyaan = [
 `kasih tau`,`ngasih tau`,`dapet apa`,`buat apa`,`diapain`,`guna`,`jawab`,`gatau`, 'gimana'];

containerLove.style.opacity = "0";
containerLove.style.display = "none";
contentPertanyaan.style.display = "none";
contentJawaban.style.display = "none";
firstContentPertanyaan.style.display = "none";

// variabel kondisi chat untuk bot

let init = 0;
let mainChat = 0;
let mainChatIs = false;
let isCloneChat = true;
let chatRepeats = false;
let jawabanBenar = false;
let chatRepeated = false;
let noRepeatChat = false;
let alreadySticker = false;
let chatValidation = false;

//flag untuk validasi game

let isChattan = false;
let isGameWin = false;
let guessGame = false;
let playGuess = false;
let typingGame = false;
let playTyping = false;

let quest_1 = false;
let quest_2 = false;
let quest_3 = false;
let isCurang = false;
let isRepeat = false;
let isTantangan = false;
let botAnswerExecuted = false;

//flag untuk animasi background

let isRainLove = false;
let isRainLinear = true;

//variabel untuk validasi angka

 let angka;
 let kalimat;
 let umurTrue;
 let nilaiAngka;
 let intervalID;
 let umurT = false;
 let umurM = false;
 let nilaiAngkaIs = false;

function botStart(data) {
 init ++;
 textLoad();
 sendBtn.disabled = true;
 jawaban.style.height = '38px';
 const fullLogin = localStorage.getItem('full_login');
 cekKata = jawaban.value.toLowerCase();
 jawabanValue = jawaban.value.toLowerCase();
 kalimat = jawabanValue;
 angka = kalimat.match(/\d+/);
 lengthFullType = fullType.reduce((acc, element) => acc + element.length, 0);
 const jawabanSplited = jawabanValue.split(' ');
 const validNumber = jawabanSplited.filter(number => !isNaN(number) && number.trim() !== '');
 
 console.log(`masuk ke init `,init,`😎`);
 console.log("mainChat is :", mainChat);
 console.log("jawabanBenar is :", jawabanBenar);
 console.log("chatValidation is :", chatValidation);
 console.log("chatRepeated is :", chatRepeated);
 console.log("chatRepeats is :", chatRepeats);
 console.log("alreadySticker is :", alreadySticker);
 console.log("noRepeatChat is :", noRepeatChat);
 console.log("mainChatIs is :", mainChatIs);
 console.log("alreadySticker is :", alreadySticker);
 console.log("isGameWin is :", isGameWin);
 console.log("isChattan is :", isChattan);
 console.log("guessGame is :", guessGame);
 console.log("isCurang is :", isCurang);
 console.log("isRepeat is :", isRepeat);
 console.log("isTantangan is :", isTantangan);
 console.log("typingGame is :", typingGame);
 console.log("botAnswerExecuted is :", botAnswerExecuted);
 //console.log(fullType, `ini adalah balasan chat dari ${namaDepan}`)
 console.log(lengthFullType, `huruf yang di ketikan ${namaDepan}`)
 
 console.log("nilaiAngkaIs adalah :", nilaiAngkaIs);

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
 console.log("nilai angka adalah :", nilaiAngka)

 if (kataKasar.some((kata) => cekKata.includes(kata))) {
  jawaban.style.color = "red";
  barier.style.display = "block";

  if (init > 1) {
   init = 0;
   setTimeout(() => {
    textMengetik.innerHTML = "Online";

    setTimeout(() => {
     textLoad()}, 1500);
    clonedTextPertanyaan.innerHTML = `tolong ya ${genderSay} kalo ngetik kata kata nya di jaga, walaupun aku cuma chat bot tapi aku tau kamu ngetik kata yang engga sepantasnya.`;
    
    document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
    
    setTimeout(() => {
     setTimeout(() => {
      textMengetik.innerHTML = "Online"
     }, 1500);
     
     clonedTextPertanyaan.innerHTML = `lain kali klo ngetik di jaga kata katanya. ${genderSay} ${genderSay} tpi kata katanya kasar ga baik tau😒`;
     
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
     }, 10000);
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

 if (init === 1) {
  console.log({ nama: jawaban.value });
  chatValue = userSay({ nama: jawaban.value })[0];
  userDelay({ nama: jawaban.value });
  
  clonedTextJawaban.innerHTML = userSay({ nama: jawabanValue })[0];
  contentJawaban.style.display = "none";
  clonedElementJawaban.style.display = "block";
  footerEmail.innerHTML = `Berikan kritik & saranya ${userSays[0]}.`;
  
  document.getElementById('contentPertanyaan').appendChild(clonedElementJawaban.cloneNode(true));
  
  setTimeout(() => {
   barier.style.display = "none";
   textMengetik.innerHTML = "Online";
   
   if ([`${namaDepan}`, `${namaBelakang}`].some((kata) => jawabanValue.includes(kata))) {
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
      barier.style.display = "none";
      
      clonedTextPertanyaan.innerHTML = "bener bukan itu nama kamu yang aku sebut tadi?";
      
      document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     }, 1000);
    } else if (mainChat === 2) {
     contentPertanyaan.style.display = "block";
     setTimeout(() => {
      textMengetik.innerHTML = "Online";
      barier.style.display = "none";
      
      clonedTextPertanyaan.innerHTML = "coba dong sebut nama kamu biar aku bisa mastiin bener apa engga";
      
      document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     }, 1000);
    } else if (mainChat === 3) {
     setTimeout(() => {
      textMengetik.innerHTML = "Online";
      barier.style.display = "none";
      
      clonedTextPertanyaan.innerHTML = `kamu gapunya nama ya? wkwk dasar ${namaDepan}, tinggal nyebut nama sendiri aja susah`;
      
      document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     }, 1000);
    } else if (mainChat === 7) {
     mainChatIs = true;
     clonedTextPertanyaan.innerHTML = `emang nya enaq di diemin? wkwkwk<br>tinggal nyebut nama aja susah`;
     
     document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
    } else if (mainChat >= 7) {
     alert("di diemin lagi")
    }
   }
  }, 1000);
 } else if (init === 2) {
   console.log({ nanyas: jawaban.value });
   chatValue = userSay({ nanyas: nilaiAngka })[1];
   fullType.push(chatValue);
   
   botDelay({ nanyas: nilaiAngka });
   clonedTextJawaban.innerHTML = userSay({ nanyas: jawabanValue })[1];
   
   document.getElementById('contentPertanyaan').appendChild(clonedElementJawaban.cloneNode(true));
   
  setTimeout(() => {
   barier.style.display = "none";
   textMengetik.innerHTML = "Online";
   originalTimeQuestion.innerHTML = timeQuestion.innerHTML;
   
   if (fullLogin === 'true') {
    init = 1;
    if (!chatValidation) {
     if (mainChat === 1) {
      clonedTextPertanyaan.textContent = 'yey kamu udah mengisi form yang aku berikan';
     } else if (mainChat === 2) {
      clonedTextPertanyaan.textContent = 'jadi aku bisa tau tentang kamu🥰';
     } else {
      mainChat = 0;
      chatValidation = true;
      if (!mainChatIs) {
       clonedTextPertanyaan.innerHTML = `btw ${namaDepan} ga keberatan kan selama chat aku nanyain tentang kamu?`;
      } else {
       mainChatIs = false;
       clonedTextPertanyaan.innerHTML = ` gapapa kan ${namaDepan} selama chat aku nanyain tentang kamu?`;
      }
     }
    } else {
     if (!chatRepeated) {
      if (kataGamau.some((kata) => jawabanValue.includes(kata)) || kataPertanyaan.some((kata) => jawabanValue.includes(kata))) {
        chatRepeated = true;
        clonedTextPertanyaan.innerHTML = `ko gitu, emng nya knapa ${namaDepan}?`;
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
        }, 1000);
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
        }, 1000);
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
         }, 1000);
        }
       } else {
        mainChatIs = true;
        alert("masuk ke mainChat 5, init ke 2 bot diam");
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
        }, 1000);
       } else {
        console.log('bott tetap diam dan user harus mengatakan kata netral')
       }
      }
     }
    }
   } else {
    init = 1;
    if (!chatRepeated) {
     textPopup.textContent = 'kamu harus mengisi form terlebih dahulu.';
     
     chatRepeated = true;
     clonedTextPertanyaan.innerHTML = 'Ups! sebelum kita lanjut chatnya kamu harus memperkenalkan diri terlebih dahulu';
     
     setTimeout(() => {
      handlePopup();
      clonedTextPertanyaan.innerHTML = 'tolong isi input yang aku berikan ya!';
      
      document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     }, 1000);
    } else {
     mainChat = 0;
     chatRepeated = false;
     setTimeout(() => togglePersonality(), 500);
    }
   }
   (isCloneChat) ? document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true)) : alert("tidak is cloneChat || Bot Diam");
  }, 1000);
 } else if (init === 3) {
  console.log({ umurs: jawabanValue });
  chatValue = userSay({ umurs: jawabanValue })[2];

  userDelay({ umurs: jawabanValue });
  clonedTextJawaban.innerHTML = userSay({ umurs: jawabanValue })[2];

  document.getElementById('contentPertanyaan').appendChild(clonedElementJawaban.cloneNode(true));
  
  setTimeout(() => {
   img.src = 'reactIdk.webp';
   barier.style.display = "none";
   textMengetik.innerHTML = "Online";
   
   if (kataHeran.some((kata) => jawabanValue.includes(kata))) {
    init = 2;
    clonedTextPertanyaan.innerHTML = `sebenernya saat kamu login aku udah tau hal hal tentang kamu`;
    
    document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
    
    setTimeout(() => {
     clonedTextPertanyaan.innerHTML = `jadi jangan heran dan nanya nanya lagi ya ${namaDepan} 😇`;
     
     document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
    }, 1000);
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
      let bulanUltah = ultah.split(' ')[1]
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
           imgSticker.src = "sad.webp";
           document.querySelector("#contentPertanyaan").appendChild(stickers.cloneNode(true));
         }, 2500);
        }, 1000);
       } else if (mainChat === 3) {
        clonedTextPertanyaan.innerHTML = `malesin ${namaDepan} ga nempatin perkataan nya 😔`;
       } else {
        isCloneChat = false;
        clonedTextPertanyaan.innerHTML = `malesin nih ${namaDepan} 😞`;
        
        setTimeout(() => {
         clonedTextPertanyaan.innerHTML = `yaudah mending aku diem aja.`;
         
         document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
        }, 1000);
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
           imgSticker.src = "sad.webp";
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
         imgSticker.src = "badmood.webp";
         document.querySelector("#contentPertanyaan").appendChild(stickers.cloneNode(true));
        }, 2500);
       }
      }
     } else { //else ketika tidak sudah !mainChatIs
      alert("masuk ke else ketika bot sudah menanyakan pertanyaan");
     }
    }
   }
   (isCloneChat) ? document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true)) : alert("tidak is cloneChat || Bot Diam");
  }, 1000);
 } else if (init === 4) {
  console.log({ pacar: jawabanValue });
  chatValue = userSay({ pacar: jawabanValue })[3];
  
  img.src = 'boticon.webp';
  userDelay({ umurs: jawabanValue });
  clonedTextJawaban.innerHTML = userSay({ pacar: jawabanValue })[3];
  
  document.getElementById('contentPertanyaan').appendChild(clonedElementJawaban.cloneNode(true));
  
  setTimeout(() => {
   barier.style.display = "none";
   if (kataHeran.some((kata) => jawabanValue.includes(kata))) {
    init = 3;
    clonedTextPertanyaan.innerHTML = `sebenernya saat kamu login aku udah tau hal hal tentang kamu`;
    alert("user bertanya mengapa bisa tau");
    
    document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
    
    setTimeout(() => {
     clonedTextPertanyaan.innerHTML = `jadi jangan heran dan nanya nanya lagi ya ${namaDepan} 😇`;
     
     document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
    }, 1000);
    
   } else {
    if (!mainChatIs) {
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
         if (mainChat === 1) {
          
          clonedTextPertanyaan.innerHTML = `yaudah aku lanjutin yaa, tapi kmu jangan kaya tadi lagi`;
        
         document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
         
         } else if(mainChat === 2){
          clonedTextPertanyaan.innerHTML = `ok janji dulu 🤞`;
        
          document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
          
         } else if (mainChat >= 3){
          
          if (jawabanValue.includes('janji')) {
           chatRepeats = false;
           chatRepeated = false;
           chatValidation = false;
           mainChatIs = false;
           
           clonedTextPertanyaan.innerHTML = `okey 🥳`;
           
           document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
           
           setTimeout(() => {
            initSticker++;
            imgSticker.src = "horee.webp";
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
      } else { // else chatRepeats
       if (!noRepeatChat) {
        noRepeatChat = true;
        clonedTextPertanyaan.innerHTML = `ok 😔`;
        
        document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
        
        setTimeout(() => {
         initSticker++;
         imgSticker.src = "clown.webp";
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
          imgSticker.src = "sadcorner.webp";
          document.querySelector("#contentPertanyaan").appendChild(stickers.cloneNode(true));
         }, 2500);
        } else {
         alert("bot tidak akan membalas sampai user mengucapkan kataNetral");
        }
       }
      }
     }
    }
   }
  }, 1000);
 } else if (init === 5) {
  console.log({ maaf: jawabanValue });
  chatValue = userSay({ maaf: jawabanValue })[4];
  
  userDelay({ maaf: jawabanValue });
  clonedTextJawaban.innerHTML = userSay({ maaf: jawabanValue })[4];

  document.getElementById('contentPertanyaan').appendChild(clonedElementJawaban.cloneNode(true));

  setTimeout(() => {
   barier.style.display = "none";
   textMengetik.innerHTML = "Online";
   
   if (!mainChatIs) {
    if (!chatValidation) {
     init = 4;
     mainChat = 0;
     chatValidation = true;
     mainChatIs = true;
     clonedTextPertanyaan.innerHTML = botSay({ game: jawabanValue })[5];
     
     document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     
     setTimeout(() => {
      initSticker++;
      imgSticker.src = "hmm.webp";
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
      clonedTextPertanyaan.innerHTML = `is Chatatan`;
      
     document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
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
     }, 1000);
    } else if (mainChat === 3) {
     if (jawabanValue.includes(`chatan`)) {
      isChattan = true;
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
       }, 1000);
      }, 1000);
     } else {
      mainChat = 2;
      clonedTextPertanyaan.innerHTML = `${namaDepan} mau yang mana? bilang aja`;
       
      document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     }
    } else if (mainChat === 4) {
     if ((jawabanValue.includes(`1`) && nilaiAngka.length === 1)) {
      guessGame = true;
      playGuess = true;
      mainChatIs = false;
      
      clonedTextPertanyaan.innerHTML = `ok skrng kita main tebak tebakan ya`;
       
      document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
      
     } else if ((jawabanValue.includes(`2`) && nilaiAngka.length === 1)){
      typingGame = true;
      playTyping = true;
      mainChatIs = false;
      
      clonedTextPertanyaan.innerHTML = `ok skrng kita main game cepet cepetan ngetik dari a - z ya`;
      
      document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
      
     } else {
      mainChat = 3;
      if (!chatRepeated || jawabanValue.includes(`${nilaiAngka}`)) {
       chatRepeated = true;
       clonedTextPertanyaan.innerHTML = `${namaDepan} yang bener dong kan gada pilihan yang ke ${nilaiAngka} 🙄`;
       
       document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
       
      } else {
       clonedTextPertanyaan.innerHTML = `yaudah kamu mau pilih yang mana ${namaDepan}?`;
       
       document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
       
       setTimeout(() => {
        initSticker++;
        imgSticker.src = "hmm.webp";
        document.querySelector("#contentPertanyaan").appendChild(stickers.cloneNode(true));
       }, 2500);
      }
     }
    } else {
     mainChatIs = false;
    }
   }
  }, 1000);
 } else if (init === 6 && playGuess) {
  console.log({ game: jawabanValue });
  chatValue = userSay({ game: jawabanValue })[5];
  
  userDelay({ game: jawabanValue });
  clonedTextJawaban.innerHTML = userSay({ game: jawabanValue })[5];

  document.getElementById('contentPertanyaan').appendChild(clonedElementJawaban.cloneNode(true));
  
  setTimeout(() => {
   barier.style.display = "none";
   textMengetik.innerHTML = "Online";
   
   if (!mainChatIs) {
    if (!chatValidation) {
     init = 5;
     chatValidation = true;
     mainChatIs = true;
     
     clonedTextPertanyaan.innerHTML = `oke siapp ya ${namaDepan}`;
     
     document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     
    } else {// !chatValidation
     init = 5;
     if (noRepeatChat) {
      if (kataGame.some((kata) => jawabanValue.includes(kata)) && isGameWin) {
      
       isRainLove = true;
       isRainLinear = false;
       clonedTextPertanyaan.innerHTML = `owh iya karna kamu udh bisa jawab semua ini hadiah buat kamu ❤️😁`;
       
       document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
       
      } else {
       guessGame = false;
       chatRepeats = false;
       chatRepeated = false;
       chatValidation = false;
       mainChatIs = true;
       
       clonedTextPertanyaan.innerHTML = `yaudah ${namaDepan} lanjut chattan aja? 😇`;
      
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
         clonedTextPertanyaan.innerHTML = `yang jelas ${namaDepan} mau gmna? 'iya' apa 'gamau'`;
         
         document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
        }
       }
      }
     }
    }
   } else {//!mainChatIs || main lg
    init = 5;
    mainChat++;
    if (guessGame) {
     if (mainChat >= 1) {
      if (!chatRepeated) {
       if (!isGameWin) {
        if (mainChat === 1) {
         initGuess++;
         mainChat = 0;
         chatRepeated = true;
         imgPicture.src = 'tekananbatin.webp';
         
         document.querySelector("#contentPertanyaan").appendChild(guessPicture.cloneNode(true));
         
         clonedTextPertanyaan.innerHTML = `hayo hayoo tebak gambar apa di atas?😆`;
         
         document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
         
        } else if (mainChat === 2) {
         initGuess++;
         mainChat = 1;
         chatRepeated = true;
         imgPicture.src = 'pulangsekolah.webp';
         
         document.querySelector("#contentPertanyaan").appendChild(guessPicture.cloneNode(true));
         
         clonedTextPertanyaan.innerHTML = `hayo tebak gambar diatas??, gampang ko jawaban nya 😁`;
         
         document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
        } else if (mainChat === 3) {
         initGuess++;
         mainChat = 2;
         chatRepeated = true;
         imgPicture.src ='lukadalam.webp';
         
         document.querySelector("#contentPertanyaan").appendChild(guessPicture.cloneNode(true));
         
         clonedTextPertanyaan.innerHTML = `tebak gambar ini susah banget tau, aku aja sampe gatau🤔`;
         
         document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
        }
        
        setTimeout(() => {
         clonedTextPertanyaan.innerHTML = `ingett yaa ${namaDepan} ${genderSay} baik hati dan suka ${data_hobby3}, jangan curangg😼`;
         
         document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
        }, 2500);
       } else {
        noRepeatChat = true;
        chatValidation = true;
        mainChatIs = false;
        
        clonedTextPertanyaan.innerHTML = `whh ternyata tebak gambarnya udh habis. selamat ya ${namaDepan} kamu keren bisa jawab semua tebak gambarnya🥶`;
        
        document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
       }
      } else {//!chatRepeated
       if (kataGamau.some((kata) => jawabanValue.includes(kata))) {
        mainChatIs = false;
        noRepeatChat = true;
        
        clonedTextPertanyaan.innerHTML = `yhh yaudah deh klo kamu ngajak udahan main nya🥺`;
        
        document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
        
       } else {
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
           }, 1000);
          } else {
           chatRepeats = false;
           jawabanBenar = false;
           mainChatIs = false;
           clonedTextPertanyaan.innerHTML = `maaf ya ${namaDepan} jawaban kamu salah`;
           
           document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
           
           setTimeout(() => {
            clonedTextPertanyaan.innerHTML = `jika ingin menjawab ulang ketikan 'ulang' tidak ingin melanjutkan ketikan 'udahan'`;
            
            document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
           }, 1000);
          }
         }
        } else {
         guessGame = false;
         alert("game selesai")
        }
       }
      }
     }
    } else if (!guessGame) {
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
         alert("masuk ke validasi bot tidak mengirim chat lagi")
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
         init = 6;
         guessGame = false;
         playGuess = false;
         chatRepeats = false;
         chatRepeated = false;
         chatValidation = false;
         mainChatIs = false;
         
         if (jawabanValue.includes(`main`, `game`, `lanjut`)) {
          clonedTextPertanyaan.innerHTML = `ok main game lagi nih yaa`;
         } else {
          clonedTextPertanyaan.innerHTML = `ok klo begitu, kita lanjut chat aja ya😇`;
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
           alert("bot tidk akan menjawab sampai user mengatakan kata netral")
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
     alert("wahhh lu ngecit ya? sampe bisa ga milih opsi😠😠")
    }
   }
  }, 1000);
 } else if (init === 6 && playTyping) {
  console.log({ ok: jawabanValue });
  chatValue = userSay({ ok: jawabanValue })[6];
  
  userDelay({ ok: jawabanValue });
  clonedTextJawaban.innerHTML = userSay({ ok: jawabanValue })[6];
  
  document.getElementById('contentPertanyaan').appendChild(clonedElementJawaban.cloneNode(true));
  
  setTimeout(() => {
   barier.style.display = "none";
   textMengetik.innerHTML = "Online";
   
   if (!mainChatIs) {
   	init = 5;
   	mainChat++
    if (!chatValidation) {
     if (mainChat === 1) {
      if (!alreadySticker) {
      	alreadySticker = true;
       clonedTextPertanyaan.innerHTML = `oke btw ${namaDepan} main nya mau ada tantangan ga klo kalah?, ngerti kan maksud aku`;
     
		     setTimeout(() => {
		      clonedTextPertanyaan.innerHTML = `klo engga ngerti bilang aja`;
		      
		      document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
		     }, 1000);
      
      } else {
		     setTimeout(() => {
		     	mainChat = 2;
		      clonedTextPertanyaan.innerHTML = `klo kamu mau ada tantangan nya bilang 'iya', engga bilang 'gamau'`;
		      
	      setTimeout(() => {
	       initSticker++;
	       imgSticker.src = "hmm.webp";
	       document.querySelector("#contentPertanyaan").appendChild(stickers.cloneNode(true));
	       }, 2500);
		     }, 1000);
      }
     } else if (mainChat === 2) {
     	if (kataGame.some((kata) => jawabanValue.includes(kata))) {
     		mainChat = 1;
     		
       clonedTextPertanyaan.innerHTML = `gini aku jelasin deh ${namaDepan}, misal kamu kalah nh nanti aku kasih kamu bbrp opsi tantangan yang bisa kamu pilih buat kamu`;
       
       setTimeout(() => {
        clonedTextPertanyaan.innerHTML = `begitu juga klo aku kalah, nnti kamu bisa kasi aku tantangan di opsi yang ada`;
       	
        document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
       }, 1000);
     	} else {
     		clonedTextPertanyaan.innerHTML = `klo kamu mau ada tantangan nya bilang 'iya', engga bilang 'gamau' 😇`;
     	}
     } else if (mainChat === 3) {
     	if (jawabanValue.includes('iya')) {
     		
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
	        imgSticker.src = "hmm.webp";
	        document.querySelector("#contentPertanyaan").appendChild(stickers.cloneNode(true));
	       }, 2500);
     	 } else {
      		clonedTextPertanyaan.innerHTML = `seriuss ${namaDepan} mau yang gmna?`;
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
     	 	}, 1000);
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
    	  	clonedTextPertanyaan.innerHTML = `${namaDepan} mau pilih tantangan yang mana ni, aku ada 3 tantangan :<br><br>1).	${namaDepan} harus ngetik 200 huruf tanpa copy paste, harus di ketik.<br><br>2). ngetik 1 sampai 30 contoh 1 2 3 dan seterusnya, harus di spasi.<br><br>3). ketikan 45 kata random buat aku, apapun itu sesuka kamu.`;
    	  	
    	  	setTimeout(() => {
    	  	 clonedTextPertanyaan.innerHTML = `${namaDepan} dari 1 - 3 mau pilih yang mana?`
    	  	 
         document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
        }, 1000);
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
            imgSticker.src = "badmood.webp";
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
            imgSticker.src = "badmood.webp";
            document.querySelector("#contentPertanyaan").appendChild(stickers.cloneNode(true));
           }, 2500);
          } else if (mainChat === 3) {
           clonedTextPertanyaan.innerHTML = `mending kamu ngomong sama tembok aja sana`;
          } else if (mainChat === 4) {
           clonedTextPertanyaan.innerHTML = `gatau ah gelap ${namaDepan}`;
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
           clonedTextPertanyaan.innerHTML = `yaudah semangattt ${namaDepan} ketik 200 hurufnya wkwk`;
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
            }, 1000);
           } else { // true isRepeat
            clonedTextPertanyaan.innerHTML = `semangatttt`;
            
            setTimeout(() => {
             if(!alreadySticker) {
              alreadySticker = true;
              clonedTextPertanyaan.innerHTML = `${namaDepan} baru ketik ${jawabanValue.length} huruf`;
               
              setTimeout(() => {
               clonedTextPertanyaan.innerHTML = `dan aku gaakan cape buat nyemangatin kamu sampe kamu berhasil😉`;
               
               document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
              }, 1000);
             } else {
              clonedTextPertanyaan.innerHTML = `kamu baru ngetik ${jawabanValue.length} huruf aku percaya kamu pasti bisa ko sampe 200`;
             }
             document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
            }, 1000);
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
           }, 1000);
          }
         } else if (mainChat === 5) {
          if (botAnswerExecuted) {
           botAnswerExecuted = false;
           clonedTextPertanyaan.innerHTML = `kamu kan kuat ${namaDepan}, gini doang mh biasa kali??😅`;
          } else {
           clonedTextPertanyaan.innerHTML = `jarang banget aku ketemu seseorang kaya kamu yang ga ngeluh😇`;
           
           setTimeout(() => {
            initSticker++;
            imgSticker.src = "smile.webp";
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
            clonedTextPertanyaan.innerHTML = `${namaDepan} maunya lanjut apa udahan?`;
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
            noRepeatChat = false;
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
           }, 1000);
          } else {
           clonedTextPertanyaan.innerHTML = `yaudah semangattt ${namaDepan} ketik 75 angkanya wkwk`;
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
             }, 1000);
            } else { // true isRepeat
             clonedTextPertanyaan.innerHTML = `semangatttt`;
             
             setTimeout(() => {
              if(!alreadySticker) {
               alreadySticker = true;
               clonedTextPertanyaan.innerHTML = `angka yang kamu ketik baru ini<br><br>${jawabanValue}<br><br>ayo ${namaDepan} jangan menyerah sedikit lagi bisa ko sampe 75 angka`;
                
               setTimeout(() => {
                clonedTextPertanyaan.innerHTML = `aku gaakan cape dan berhenti buat nyemangatin kamu sampe kamu berhasil😉`;
                
                document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
               }, 1000);
              } else {
               clonedTextPertanyaan.innerHTML = `kamu baru ngetik<br><br>${jawabanValue}<br><br>angka aku percaya kamu pasti bisa ko ngetik 75 angka`;
              }
              document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
             }, 1000);
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
             imgSticker.src = "smile.webp";
             document.querySelector("#contentPertanyaan").appendChild(stickers.cloneNode(true));
            }, 2500);
           }, 1000);
          }
         } else if (mainChat === 5) {
          if (botAnswerExecuted) {
           botAnswerExecuted = false;
           clonedTextPertanyaan.innerHTML = `kamu kan kuat ${namaDepan}, gini doang mh gampang kali??😅`;
          } else {
           clonedTextPertanyaan.innerHTML = `jarang banget ada seseorang kaya kamu yang ga ngeluh, ibarat 1/100 orang`;
           
           setTimeout(() => {
            initSticker++;
            imgSticker.src = "smile.webp";
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
            noRepeatChat = false;
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
           clonedTextPertanyaan.innerHTML = `yaudah semangattt ${namaDepan} ketik 45 katanya😁`;
          }
         } else if (mainChat === 2) {
          if (jawabanSplited.length >= 44) {
           if (jawabanSplited.every(kata => kata.length >= 3)) {
            isRepeat = false;
            botAnswerExecuted = true;
            clonedTextPertanyaan.innerHTML = `yey ${namaDepan} hebat bisa nyelesain tantangan nya🥳`;
            
            setTimeout(() => {
             clonedTextPertanyaan.innerHTML = `total kata yang kamu ketik adalah ${jawabanSplited.length}`;
             
             document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
            }, 1000);
           } else {
            mainChat = 0;
            alreadySticker = false;
            clonedTextPertanyaan.innerHTML = `yhh maaf ya ${namaDepan} walaupun kamu udh ngetik ${jawabanSplited.length} kata tapi ada bbrp kata yang kurang dari 3 huruf`;
            
            setTimeout(() => {
             clonedTextPertanyaan.innerHTML = `jadi kamu harus mengulang ketik katanya, gomen ${namaDepan}🥺`;
             
             document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
            }, 1000);
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
            }, 1000);
           } else { // true isRepeat
            clonedTextPertanyaan.innerHTML = `ayo dong semangatttt`;
            
            setTimeout(() => {
             if(!alreadySticker) {
              alreadySticker = true;
              clonedTextPertanyaan.innerHTML = `ayo sedikit lagi ${namaDepan} bisa 45 kata, kamu baru ngetik ${jawabanSplited.length} kata😇`;
               
              setTimeout(() => {
               clonedTextPertanyaan.innerHTML = `${namaDepan} pasti bisa ko`;
               
               document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
              }, 1000);
             } else {
              clonedTextPertanyaan.innerHTML = `kamu baru ketik ${jawabanSplited.length} kata aku percaya kamu pasti bisa ko sampe 45 kata🙃`;
             }
             document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
            }, 1000);
           }
          }
         } else if (mainChat === 3) {
          if (botAnswerExecuted) {
           botAnswerExecuted = false;
           clonedTextPertanyaan.innerHTML = `cape ya ngetik 45 kata nya?`;
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
             imgSticker.src = "smile.webp";
             document.querySelector("#contentPertanyaan").appendChild(stickers.cloneNode(true));
            }, 2500);
           }, 1000);
          }
         } else if (mainChat === 5) {
          if (botAnswerExecuted) {
           botAnswerExecuted = false;
           clonedTextPertanyaan.innerHTML = `kamu kan ${genderIs} yang kuat ${namaDepan}, kaya gini mh biasa kali wkwk`;
          } else {
           clonedTextPertanyaan.innerHTML = `jarang banget tau ketemu seseorang kaya kamu yang ga ngeluh😇`;
          }
         } else if (mainChat === 6) {
          clonedTextPertanyaan.innerHTML = `oke, jadi ${namaDepan} mau main lagi ga?`;
         } else if (mainChat === 7) {
          if (['iya', 'main lagi', 'yaudah'].some((kata) => jawabanValue.includes(kata))) {
           botAnswerExecuted = false;
           clonedTextPertanyaan.innerHTML = `wkwk okey kita lanjutin lagi ya, inget yang kalah harus lakuin tantangan nya`;
          } else if (['engga', 'gamau', 'males', 'udah'].some((kata) => jawabanValue.includes(kata))) {
           botAnswerExecuted = true;
           clonedTextPertanyaan.innerHTML = `yhh ${namaDepan} mau udahan ya?😪`;
          } else {
           mainChat = 6;
           if (!botAnswerExecuted) {
            botAnswerExecuted = true;
            clonedTextPertanyaan.innerHTML = `serius ${namaDepan} yang baik hati dan suka ${data_hobby1} lanjut apa mau udahan?`;
           } else {
            botAnswerExecuted = false;
            clonedTextPertanyaan.innerHTML = `${namaDepan} maunya lanjut apa udahan?`;
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
            chatRepeats = true;
            isTantangan = false;
            noRepeatChat = false;
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
         if (mainChat === 1) {
          botAnswerExecuted = false;
          if (kataCurang.some((kata) => jawabanValue.includes(kata))) {
           clonedTextPertanyaan.innerHTML = `ya maaf ${namaDepan}, aku kan dibuat hanya untuk memberikan tantangan`;
           
           setTimeout(() => {
            clonedTextPertanyaan.innerHTML = `dan bukan melakukan tantangan, jadi gomen ${namaDepan}🙃`;
          
            document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
           }, 1000);
          } else {
           clonedTextPertanyaan.innerHTML = `${namaDepan} ga kesel kh??🤨`;
          }
         } else if (mainChat === 2) {
          if (['parah', 'curang', 'kesel', 'nanya', 'yaiyalah'].some((kata) => jawabanValue.includes(kata))) {
           alreadySticker = false;
           clonedTextPertanyaan.innerHTML = `kwkwwk ya maaf ${namaDepan}`;
           
           setTimeout(() => {
            clonedTextPertanyaan.innerHTML = `sebelum nya aku ini di buat hanya untuk memberikan tantangan aja.<br><br>klo ${namaDepan} mau marah ke developer yang membuat aku:)`;
            
            document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
           }, 1000);
          } else {
           clonedTextPertanyaan.innerHTML = `maaf ya ${namaDepan}, gpp kan?`;
          }
         } else if (mainChat === 3) {
          if (['siapa', 'developer', 'curang', 'males'].some((kata) => jawabanValue.includes(kata))) {
           mainChat = 2;
           clonedTextPertanyaan.innerHTML = `${namaDepan} klo mau marah ke developer yang membuat aku, setau aku ini email nya<br><br><li><a onclick="window.open( 'mailto:faridfathonin@gmail.com')">click > faridfathonin@gmail.com</a></li>`;
          } else {
           clonedTextPertanyaan.innerHTML = `${namaDepan} maafin aku ga nih?🥺`;
          }
         } else if (mainChat === 4) {
          if (['maaf', 'maap', 'mff'].some((kata) => jawabanValue.includes(kata))) {
           botAnswerExecuted = false;
           clonedTextPertanyaan.innerHTML = `makasii ya udh maafin aku, sekali lagi maaf klo aku curang, ga ngasih tau kamu sebelum nya tentang ini😔`;
          } else if (['ga ya', 'hmm', 'gimana'].some((kata) => jawabanValue.includes(kata))) {
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
         } else if (mainChat === 5) {
          botAnswerExecuted = false;
          clonedTextPertanyaan.innerHTML = `maaf ya ${namaDepan}`;
          
          setTimeout(() => {
           initSticker++;
           imgSticker.src = "sad.webp";
           document.querySelector("#contentPertanyaan").appendChild(stickers.cloneNode(true));
          }, 2500);
         } else if (mainChat === 6) {
          clonedTextPertanyaan.innerHTML = `yaudah ${namaDepan} mau main lagi apa udahan`;
         } else if (mainChat === 7) {
          if (['iya', 'main lagi', 'yaudah'].some((kata) => jawabanValue.includes(kata))) {
           botAnswerExecuted = false;
           clonedTextPertanyaan.innerHTML = `yaudah deh klo masi mau main lagi`;
          } else if (['engga', 'gamau', 'males', 'udah'].some((kata) => jawabanValue.includes(kata))) {
           botAnswerExecuted = true;
           clonedTextPertanyaan.innerHTML = `${namaDepan} udh males ya sama aku?, yaudah deh gpp klo mau udahan`;
          } else {
           mainChat = 5;
           if (!botAnswerExecuted) {
            botAnswerExecuted = true;
            clonedTextPertanyaan.innerHTML = `klo ${namaDepan} mau udahan juga gpp`;
           } else {
            botAnswerExecuted = false;
            clonedTextPertanyaan.innerHTML = `${namaDepan} maunya lanjut apa udahan?`;
           }
          }
         } else {
          if (botAnswerExecuted) {
           if (['udahan', 'cape'].some((kata) => jawabanValue.includes(kata))) {
            clonedTextPertanyaan.innerHTML = `tuh kan bener ${namaDepan} udh males sama aku😪`;
           } else if (['main lagi','lanjut', 'oke', 'yaudah'].some((kata) => jawabanValue.includes(kata))) {
            mainChat = 0;
            mainChatIs = true;
            chatRepeats = false;
            botAnswerExecuted = false;
            
            clonedTextPertanyaan.innerHTML = `seriuss ni ${namaDepan} main lagi?, padahal udahan juga gpp ko`;
           } else {
            mainChat = 0;
            isRepeat = true;
            chatRepeats = true;
            isTantangan = false;
            noRepeatChat = false;
            botAnswerExecuted = false;
            
            clonedTextPertanyaan.innerHTML = `iyaa yaudah klo gitu gpp🙂`;
           }
          } else {// false botAnswerExecuted
           mainChat = 0;
           mainChatIs = true;
           chatRepeats = false;
           botAnswerExecuted = true;
           clonedTextPertanyaan.innerHTML = `inget ya klo aku kalah aku cuma bisa kasi kamu ❤️ tidak melakukan tantangan ❤️`;
          }
         }
        break;
        default:
         alert('pengguna ini curang');
       }
      }
     } else {//false isTantangan || user tidak menggunakan tantangan
      if (!chatRepeats) {
       if (isCurang) {
        mainChat = 0;
        isCurang = false;
        clonedTextPertanyaan.innerHTML = `${namaDepan} curang ni ga nempatin janji😔`;
       } else {// false isCurang
        if (alreadySticker) {
         mainChat = 0;
         alreadySticker = false;
         clonedTextPertanyaan.innerHTML = `yaudah gpp kok`;
         
         setTimeout(() => {
          clonedTextPertanyaan.innerHTML = `hmmm karna kamu gamau ada tantangan aku bingung harus ngapain lagi`;
       
          document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
         },1000);
        } else {
         if (mainChat === 1) {
          clonedTextPertanyaan.innerHTML = `kamu mau nya gmna ${namaDepan}?`;
         } else if (mainChat === 2) {
          if (kataPertanyaan.some((kata) => jawabanValue.includes(kata))) {
           mainChat = 1;
           clonedTextPertanyaan.innerHTML = `ko gatau?? 🥺`;
           setTimeout(() => { isCloneChat = false; }, 1500);
          } else {
           isCloneChat = true;
           clonedTextPertanyaan.innerHTML = `.....`;
          setTimeout(() => {
           initSticker++;
           imgSticker.src = "ngeleg.webp";
            document.querySelector("#contentPertanyaan").appendChild(stickers.cloneNode(true));
           }, 2500);
     	    }
     	   } else if (mainChat >= 3) {
     	    isCloneChat = false;
     	   } else if (mainChat === 5) {
     	    clonedTextPertanyaan.innerHTML = `maaf maaf tadi aku kehabisan kata kata`;
     	    isCloneChat = true;
     	   } else if (mainChat === 6 && ['bisa', 'anjr', 'ada'].some((kata) => jawabanValue.includes(kata))) {
     	    mainChatIs = true;
     	    chatRepeats = false;
     	    
     	    clonedTextPertanyaan.innerHTML = `abis nya kita udah banyak banget ngomong nya hehe`;
     	   } else if (mainChat === 7) {
     	    clonedTextPertanyaan.innerHTML = `iyaa kan ${namaDepan}?, coba aja kamu scroll ke atas banyak banget chatnya wkwk`;
     	   } else {
     	    mainChat = 0;
     	    chatRepeats = true;
     	    clonedTextPertanyaan.innerHTML = `yaudah klo gitu terserah kamu aja mau main lagi apa engga`;
     	   }
     	  }
     	 }
     	} else {// true chatRepeats
     	 if (!noRepeatChat) {
       	if (mainChat === 1) {
       	 if (!isRepeat) {
         clonedTextPertanyaan.innerHTML = `serius ni ${namaDepan} mau 'main lagi', main 'game lain', apa 'lanjut chat'?`;
       	 } else {
       	  isRepeat = false;
         clonedTextPertanyaan.innerHTML = `yaudah klo gitu ${namaDepan} mau main lagi, game lain, atau lanjut chat`;
       	 }
       	} else if (mainChat === 2) {
       	 if (['main lagi', 'game lain'].some((kata) => jawabanValue.includes(kata))) {
       	  mainChat = 0;
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
      	    mainChat = 0;
      	    isChattan = true;
      	    typingGame = false;
      	    playTyping = false;
      	    chatRepeats = false;
      	    chatRepeated = false;
      	    noRepeatChat = false;
      	    chatValidation = false;
       	   clonedTextPertanyaan.innerHTML = `ok deh kita lanjut chat aja`;
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
       	   }, 1000);
      	   } else {
      	    if (['1', 'satu'].some((kata) => jawabanValue.includes(kata)) && nilaiAngka.length == 1) {
      	    init = 5;
      	    mainChat = 0;
      	    guessGame = true;
      	    isCloneChat = true;
      	    playGuess = true;
      	    typingGame = false;
      	    mainChatIs = false;
      	    chatRepeats = false;
      	    playTyping = false;
      	    jawabanBenar = false;
      	    chatRepeated = false;
      	    noRepeatChat = false;
      	    chatValidation = false;
      	    botAnswerExecuted = false;
      	    
      	    clonedTextPertanyaan.innerHTML = `ok kita ganti game tebak tebakan ya`;
      	   } else if (['2', 'dua'].some((kata) => jawabanValue.includes(kata)) && nilaiAngka.length == 1) {
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
   (isCloneChat) ?  document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true)) : alert("tidak is cloneChat || Bot Diam");
   //////////Clone Chat Validation//////////
   } else { //true mainChatIs
   	init = 5;
    if (!chatRepeats) {
     mainChat = 0;
     chatRepeats = true;
     
     if (!botAnswerExecuted) {
      clonedTextPertanyaan.innerHTML = `sebelum main inget ya ${namaDepan} jangan main copy paste. karna itu curang😇`;
     } else {
      botAnswerExecuted = false;
      clonedTextPertanyaan.innerHTML = `udah tau kan peraturan nya tadi, jangan copy paste ya😇`;
     }
     
     document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
    } else { // else true chatRepeats
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
	     		 barier.style.display = "none";
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
     		 isGameWin = true;
				    
				    setTimeout(() => {
				     clonedTextPertanyaan.innerHTML = `wahh kamu hebat ${namaDepan} bisa ngalahin aku🥳`;
				     
				     document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
				      
				     setTimeout(() => {
				      isRainLove = true;
				      isRainLinear = false;
          botAnswerExecuted = false;
				      JawabanValue = jawaban.value;
				      barier.style.display = "none";
				      textMengetik.innerHTML = "Online";
				      clonedTextPertanyaan.innerHTML = "karna kamu bisa ngalahin aku, ini buat kamu ❤️";
				      
				      document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
				      
				      setTimeout(() => {
	          initSticker++;
           imgSticker.src = "horee.webp";
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
 			     barier.style.display = "none";
 			     textMengetik.innerHTML = "Online";
 			     clonedTextPertanyaan.innerHTML = `kalo ${userSays[0]} mau mencoba lagi. ketik 'coba lagi'`;
 			     
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
          clonedTextPertanyaan.innerHTML = `terserah kamu deh ${namaDepan} mau anggep aku kya gmna, intinya aku engga seperti yang kamu pikirkan😪`;
     	   } else if (mainChat == 6) {
          clonedTextPertanyaan.innerHTML = `jadi ${namaDepan} mau terima tantangan nya apa engga?<br><br>klo mau bilang 'iya mau' gamau 'engga'`;
     	   } else if (mainChat == 7) {
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
     	     
     	     clonedTextPertanyaan.innerHTML = `iya yaudah lah klo gitu ga masalah`;
     	    }
     	    
     	    setTimeout(() => {
     	     mainChat = 0;
     	     botAnswerExecuted = false;
     	     barier.style.display = 'none';
     	     if (isTantangan) {
     	      mainChatIs = false;
     	      chatRepeated = true;
     	      chatRepeats = false;
     	      alreadySticker = false;
     	      
     	      clonedTextPertanyaan.innerHTML = `ok kita lanjut ya ${namaDepan} 😇`;
     	     } else {
     	      clonedTextPertanyaan.innerHTML = `yaudah kamu gausah ngelakuin tantangan nya`;
     	     }
     	     document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     	    }, 1000);
     	   }
     	  } else { // false isCurang
     	  if (kataCurang.some((kata) => jawabanValue.includes(kata))) {
      	  isCurang = true;
      	  mainChat = 3;
         clonedTextPertanyaan.innerHTML = `apasi ko kamu nuduh aku curang?, jelas jelas aku juga ngetik tadi`;
         
         setTimeout(() => {
  	       initSticker++;
  	       imgSticker.src = "pukulin.webp";
  	       document.querySelector("#contentPertanyaan").appendChild(stickers.cloneNode(true));
 	       }, 2500);
      	 } else {
         mainChatIs = false;
     	   chatRepeats = false;
      	  chatValidation = true;
         alreadySticker = false;
         clonedTextPertanyaan.innerHTML = `ok karna ${namaDepan} kalah berarti kamu harus lakuin 1 opsi tantangan😂`;
     	   }
     	  }
    	  }
    	 } else { //!botAnswerExecuted
    	  mainChat = 0;
     	 isGameWin = true;
     	 mainChatIs = false;
     	 isTantangan = true;
     	 chatRepeats = true;
     	 chatValidation = true;
     	 chatValidation = true;
     	 
       clonedTextPertanyaan.innerHTML = `yhh ga seru klo ${namaDepan} menang`;
      
      setTimeout(() => {
       clonedTextPertanyaan.innerHTML = `sebenernya klo aku kalah, yaudah gada opsi tantangan buat aku wkwk`;
       
       document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
       
       setTimeout(() => {
	       initSticker++;
	       imgSticker.src = "sadcorner.webp";
	       document.querySelector("#contentPertanyaan").appendChild(stickers.cloneNode(true));
	       }, 2500);
       }, 1000);
    	 }
    ////////Clone Chat Validation//////////
    (isCloneChat) ? document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true)) : alert("tidak is cloneChat || Bot Diam");
   ////////Clone Chat Validation//////////
     }
   	}
   }
  }, 1000);
  
 } else if (init === 6 && isChattan) {
  console.log({ ok: jawabanValue });
  chatValue = userSay({ ok: jawabanValue })[6];
  
  init = 5;
  mainChat++;
  userDelay({ ok: jawabanValue });
  clonedTextJawaban.innerHTML = userSay({ ok: jawabanValue })[6];
  
  document.getElementById('contentPertanyaan').appendChild(clonedElementJawaban.cloneNode(true));
  
  setTimeout(() => {
   barier.style.display = 'none';
   if (!mainChatIs) {
    if (isGameWin) {
     if (mainChat === 1) {
      clonedTextPertanyaan.innerHTML = `owh ya btw ${namaDepan} mau hilangin love nya ga?`;
     } else if (mainChat === 2) {
      if (['emang', 'kenapa', 'knp', 'emng'].some((kata) => jawabanValue.includes(kata))) {
       
       quest_1 = true;
       clonedTextPertanyaan.innerHTML = `ya siapa tau ${namaDepan} risih gitu sama love nya?`;
       
       setTimeout(() => {
        initSticker++;
        imgSticker.src = 'hmm.webp';
        document.querySelector('#contentPertanyaan').appendChild(stickers.cloneNode(true));
       }, 2500);
       
      } else if (['gamau', 'engga', 'biarin', 'gausah'].some((kata) => jawabanValue.includes(kata))) {
       
       quest_2 = true;
       if (theme === 'basic') {
        clonedTextPertanyaan.innerHTML = `${namaDepan} ga risih kh?, menurut aku sih mending ganti linear aja labih bagus ga sih?`;
       } else {
        clonedTextPertanyaan.innerHTML = 'menurut aku udah cukup ga sih efek rain love nya?';
       }
       
      } else if (['hilangin', 'ilangin', 'yaudah'].some((kata) => jawabanValue.includes(kata))) {
       
       quest_3 = true;
       clonedTextPertanyaan.innerHTML = `gangu ya love nya atau kamu risih liat love nya?`;
       
      } else {
       mainChat = 1;
       clonedTextPertanyaan.innerHTML = `gimana ni mau kamu ${namaDepan}, aku mh ikutin kamu aja😇`;
      }
     } else if (mainChat === 3) {
      mainChat = 2;
      if (quest_1) {
       if (!isRepeat) {
        if (['ilangin', 'yaudah'].some((kata) => jawabanValue.includes(kata))) {
         mainChat = 3;
         clonedTextPertanyaan.innerHTML = `okk aku hilangin yaa ${namaDepan}`;
        } else {
         isRepeat = true;
         clonedTextPertanyaan.innerHTML = `serius ga risih?, padahal aku mikir nya kamu risih tau.`;
        }
       } else {
        mainChat = 3;
        clonedTextPertanyaan.innerHTML = `okeh deh, klo misal ${namaDepan} mau hilangin ketik kode [ UNL0V3 ] ini ya`;
       }
      } else if (quest_2 && theme === 'blue') {
       if (!isRepeat) {
        if (['emang', 'kenapa'].some((kata) => jawabanValue.includes(kata))) {
       
         quest_1 = true;
         clonedTextPertanyaan.innerHTML = `ya siapa tau ${namaDepan} risih gitu sama love nya?`;
         
         setTimeout(() => {
          initSticker++;
          imgSticker.src = 'hmm.webp';
          document.querySelector('#contentPertanyaan').appendChild(stickers.cloneNode(true));
         }, 2500);
        } else {
         isRepeat = true;
         clonedTextPertanyaan.innerHTML = `mending di hilangin aja ga sih ${namaDepan} biar lebih bagus, biar lebih nyaman juga chattan nya`;
        }
       } else { // true isRepeat
        if (['ilangin', 'yaudah'].some((kata) => jawabanValue.includes(kata))) {
         mainChat = 3;
         isRainLove = false;
         isRainLinear = true;
         clonedTextPertanyaan.innerHTML = 'oke aku hilangin ya love nya';
        } else {
         mainChat = 3;
         clonedTextPertanyaan.innerHTML = 'yaudah deh terserah kamu aja, klo kamu mau ilangin ketik kode [ UNL0V3 ] ini ya';
        }
       }
      } else if (quest_2 && theme === 'basic') {
       if (!isRepeat) {
        isRepeat = true;
        clonedTextPertanyaan.innerHTML = `itu kamu tau kan yang garis garis turun kebawah itu?`;
       } else {
        if (!botAnswerExecuted) {
         if (!chatRepeated) {
          if (['mana', 'gimana', 'gatau', 'engga'].some((kata) => jawabanValue.includes(kata))) {
           chatRepeated = true;
           clonedTextPertanyaan.innerHTML = `ishhh itu loh ${namaDepan} yang garis garis kaya hujan gitu, tau kan`;
          } else {
           botAnswerExecuted = true;
           clonedTextPertanyaan.innerHTML = `iyaa jadi kamu mau di ganti ga sama yang itu?`;
          }
         } else { // true chatRepeated
          botAnswerExecuted = true;
          clonedTextPertanyaan.innerHTML = `nhh yang kaya gitu, ${namaDepan} mau ga di ganti yang itu?`;
         }
        } else {
         if (['mau', 'yaudah', `iya`].some((kata) => jawabanValue.includes(kata))) {
          mainChat = 3;
          isRainLove = false;
          isRainLinear = true;
          botAnswerExecuted = true;
          clonedTextPertanyaan.innerHTML = `okeh klo kamu mau ganti😅`;
         } else if (['gak', 'engga'].some((kata) => jawabanValue.includes(kata))) {
          mainChat = 3;
          clonedTextPertanyaan.innerHTML = `hmm ok deh klo ${namaDepan} gamau, btw klo mau ganti ketik kode [ UNL0V3 ] ini ya`;
         } else {
          clonedTextPertanyaan.innerHTML = `${namaDepan} bilang aja engga atau iya?`;
         }
        }
       }
      } else if (quest_3) {
       if (['gak', 'ngga'].some((kata) => jawabanValue.includes(kata))) {
        mainChat = 3;
        clonedTextPertanyaan.innerHTML = `owh yaudah deh klo gitu`;
       } else if (['risih', 'ganggu'].some((kata) => jawabanValue.includes(kata))) {
        clonedTextPertanyaan.innerHTML = `owhh gitu ya maaf ya udh bikin kamu risih/nge ganggu`;
        } else {
        if (!botAnswerExecuted) {
         isRainLove = false;
         isRainLinear = true;
         botAnswerExecuted = true;
         clonedTextPertanyaan.innerHTML = `yaudahh ya ${namaDepan} aku ilangin love nya😅`;
        } else {
         mainChat = 3;
         clonedTextPertanyaan.innerHTML = `maaf ya ${namaDepan} karna udah buat kamu ga nyaman karna love nya`;
        }
       }
      } else { alert('user ini curang') }
     } else { // else mainChat
      quest_1 = false;
      quest_2 = false;
      quest_3 = false;
      isGameWin = false;
      
      if (botAnswerExecuted) {
       botAnswerExecuted = false;
       clonedTextPertanyaan.innerHTML = `udah hilang kan sekarang love nya??`;
       
       setTimeout(() => {
        clonedTextPertanyaan.innerHTML = `jadi lebih bagus gini ya kan?`;
        
        document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
       }, 1000);
      } else { // false botAnswerExecuted
       clonedTextPertanyaan.innerHTML = `yaudah klo gitu terserah kamu aja deh, aku mh ngikutin kamu aja wkwk`;
       
       setTimeout(() => {
        initSticker++;
        imgSticker.src = 'smile.webp';
        document.querySelector('#contentPertanyaan').appendChild(stickers.cloneNode(true));
       }, 2500);
      }
     }
    } else { // false isGameWin
     if (!chatValidation) {
      chatValidation = true;
      clonedTextPertanyaan.innerHTML = `Mmmmmm`;
      
      setTimeout(() => {
       initSticker++;
       imgSticker.src = 'hmm.webp';
       document.getElementById('contentPertanyaan').appendChild(stickers.cloneNode(true));
      }, 1000);
     } else { // true chatValidation
      clonedTextPertanyaan.innerHTML = `anuu`;
     }
    }
   } else { // trus mainChatIs
    
   }
   //////////Clone Chat Validation//////////
   (isCloneChat) ? document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true)) : alert("tidak is cloneChat || Bot Diam");
   //////////Clone Chat Validation//////////
  }, 1000);
  
 } else if (init === 7) {
  console.log({ ok: jawabanValue });
  chatValue = userSay({ ok: jawabanValue })[6];
  
  userDelay({ ok: jawabanValue });
  clonedTextJawaban.innerHTML = userSay({ ok: jawabanValue })[6];
  
  document.getElementById('contentPertanyaan').appendChild(clonedElementJawaban.cloneNode(true));
  
  setTimeout(() => {
   
   barier.style.display = "none";
   textMengetik.innerHTML = "Online";
   
   if (isGameWin) {
    
   } else {
    
   }
   
   clonedTextPertanyaan.innerHTML = botSay()[8];
   
   document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
  }, 1000);
  
 } else {
  
 }
 if (initSticker >= 1 || initGuess >= 1){
  console.log("sticker bertambah :", initSticker, "dan tebak gambar :", initGuess);
 }
 
 if (isRainLinear) {
  containerLinear.style.opacity = "1";
  containerLove.style.opacity = "0";
 } else {
  containerLinear.style.opacity = "0";
  containerLove.style.opacity = "1";
 }
}/*kurawa end botStart*/

// Membuat instance dari MutationObserver dengan sebuah callback function
const observer = new MutationObserver((mutationsList, observer) => {
  // Iterasi melalui setiap mutasi
  for (let mutation of mutationsList) {
    if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
      textMengetik.innerHTML = 'Online';
      //notif.play();
      clearInterval(intervalID);

      setTimeout(() => {
       document.querySelector('.pathchat').scrollIntoView({ behavior: 'smooth', block: 'end' });
      }, 500);
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
 intervalID = setInterval(() => {
  textMengetik.innerHTML = textVariations[currentIndex];
  currentIndex = (currentIndex + 1) % textVariations.length;
 }, 1500);
}

/*kode validasi JAM*/

const statusUser = () => {
statusDeveloper.innerHTML = "Online";
setTimeout(() => {
  statusDeveloper.innerHTML = "Do not disturb";
  setTimeout(() => {
   statusDeveloper.innerHTML = "Online";
  }, 10000);
 }, 10000);
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
 let time = setTimeout(startTimeHome, 1000);
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

function hujanLinear() {
 let amount = 10;
 let containerLinear = document.querySelector('.container-linear');
 let i = 0;
 while (i < amount) {
  let drop = document.createElement('i');

  let size = Math.random() * 4;
  let posX = Math.floor(Math.random() * window.innerWidth);
  let delay = Math.random() * -150;
  let duration = Math.random() * 30;

  drop.style.width = 2 + size +'px';
  drop.style.left = posX + 'px';
  drop.style.animationDelay = delay+'s';
  drop.style.animationDuration = 25 + duration + 's';
  containerLinear.appendChild(drop);
  i ++;
 }
}

hujanLinear();

function rainLove() {
 let amount = 15;
 let containerLove = document.querySelector('.container-love');
 let i = 0;
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
  dropLove.style.animationDuration = 25 + durationLove + 's';
  containerLove.appendChild(dropLove);
  i ++;
 }
}

rainLove();

let linearClr1 = getComputedStyle(document.querySelector('.container-linear i:nth-child(2n+1)')).getPropertyValue('background');

let linearClr2 = getComputedStyle(document.querySelector('.container-linear i:nth-child(2n+2)')).getPropertyValue('background');

// putih oren oren, putih ijo biru, putih biru ijo, putih coklat coklat

/* const spotifyUri = 'https://spotify.link/4eMIG4pJsDb';
 
//Buka aplikasi Spotify
window.location.href = spotifyUri;
*/