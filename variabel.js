const cl = console.log.bind(console);
let userStatus = document.querySelectorAll('.statusUser');
let statusUsers = userStatus[1];
let statusDeveloper = userStatus[0];
let containerHome = document.querySelector('.container-home');
let backgroundHome = document.querySelector('#background-home');
let forwardIcon = document.querySelector('.forward-box ion-icon');
let nemBots = document.querySelector('.nameBot');
let botStat = document.querySelector('.botStatus');
let firstDescTxt = document.querySelector('.descriptionText:first-child');
let arrowButon = document.querySelector('.arrow-button');
let footer = document.querySelector('.footer');
let input = document.querySelectorAll('#jawaban');
let bgColor = document.querySelectorAll('#bgColor');
let myButton = document.querySelectorAll('#myButton');
let bio = document.querySelectorAll('.infoTxt');
let containerInput = document.getElementById('container_input')
let about = document.querySelector('.about');
let favItem = document.querySelectorAll('.favorite-items');
let chatUser = document.querySelector('.chatJawaban');
let chatBot = document.querySelector('.chatPertanyaans');
let imgBox = document.querySelector('#imgBox');
let imgProfile = document.querySelectorAll('.imgProfile');
let fablue = document.querySelector('.nameBot');
let mail = document.getElementById('mail');
let footers = document.querySelectorAll('#footers');
let myKoleksi = document.querySelectorAll('#myKoleksi');
let pjs = document.querySelector('#particles-js');
let footerWeb = document.getElementById('footer-web').cloneNode(true);

(function() {
  let index = 0;
  const lengthQuote = ['Setiap baris kode adalah kesempatan untuk belajar sesuatu yang baru.','belajar memahami bahasa pemrograman lebih menyenangkan dari pada memahami rumus matematika', 'Semangatmu menentukan seberapa jauh kemampuanmu berkembang.', 'Setiap program memiliki cerita, dan kamu adalah penulisnya.', 'Coding adalah tempat di mana logika bertemu dengan imajinasi.', 'Tidak ada yang lebih menyenangkan daripada menulis dan memahami sebuah program.'];
  const quoteText = document.querySelector('#quote-text');
  
  function tampilkanQuoteBerikutnya() {
   index = (index + 1) % lengthQuote.length;
   quoteText.textContent = lengthQuote[index];
  }
  
  const intervalId = setInterval(tampilkanQuoteBerikutnya, 5000);
})();

















const contentCardsSkils = document.querySelectorAll('.content-cards-skils');
const container_cards_excess = document.getElementById('cards-excess');
const container_cards_lack = document.getElementById('cards-lack');
const itemsCardsSkils = document.querySelector('.items-cards-skils');

const textExcess = [
 {
  icon: 'people',
  body: 'mampu beradaptasi dengan lingkungan baru dan mampu berkomunikasi secara jelas dan efektif dengan anggota tim, manajemen, dan memiliki kepekaan interpersonal yang baik, mampu berkomunikasi secara baik dengan berbagai lapisan tim.',
  titleCards: 'Beradaptasi'
 },
 {
  icon: 'library',
  body: 'memiliki semangat belajar  yang tinggi, terbuka terhadap umpan balik dan kritik untuk terus meningkatkan diri menjadi lebih baik, siap untuk mengikuti perkembangan teknologi dan berkomitmen untuk terus meningkatkan kemampuan diri.',
  titleCards: 'Belajar'
 },
 {
  icon: 'time',
  body: 'baik dalam mengelola waktu secara efektif, memprioritaskan tugas dengan bijak untuk mencapai produktivitas maksimal dan sistematis dalam penjadwalan waktu untuk memastikan pencapaian target secara konsisten.',
  titleCards: 'Waktu'
 },
 {
  icon: 'person',
  body: 'saya mungkin kadang-kadang merasa kurang percaya diri dalam menghadapi tugas tertentu atau sebaliknya, atau terlalu percaya diri tanpa menyadari batas kemampuan saya bisa atau tidaknya menyelesaikan tugas tersebut.',
  titleCards: 'Percaya diri'
 },
 {
  icon: 'code-working',
  body: 'belum menguasai bagaimana agar menulis kode yang baik dan menerapkan prinsip-prinsip pengembangan perangkat lunak seperti clean code (kode yang bersih), DRY (Dont Repeat Yourself), dan solid principles (kode yang mudah di mengerti dan flexsibel).',
  titleCards: 'Kode'
 },
 {
  icon: 'image',
  body: 'dalam mengembangkan sebuah design website (UI) dan pengalaman (UX) yang saya kembangkan masih kurang baik. untuk itu saya terus berusaha untuk belajar memahami UI / UX agar web yang saya kembangkan menjadi lebih baik.',
  titleCards: 'UI / UX'
 }
 ];
 
 for (let i = 1; i < 4; i++) {
  const clonItemCardSkils = itemsCardsSkils.cloneNode(true);
  const contentCardsSkils = clonItemCardSkils.querySelectorAll('.content-cards-skils');
  
  if (i < 3) {
   container_cards_excess.appendChild(clonItemCardSkils.cloneNode(true));
   container_cards_lack.appendChild(clonItemCardSkils.cloneNode(true));
  } else {
   container_cards_lack.appendChild(clonItemCardSkils.cloneNode(true));
  }
}


const cardsSkils = document.querySelectorAll('.cards-skils');

cardsSkils.forEach((cards, index) => {
 const bodyTexts = document.querySelectorAll('.body-cards-skils');
 const iconCards = document.querySelectorAll('.cards-icon');
 const headerTexts = document.querySelectorAll('.header-text-cards');
 
  bodyTexts[index].textContent = textExcess[index].body;
  headerTexts[index].textContent = textExcess[index].titleCards;
  iconCards.forEach((items, index) => {
   items.setAttribute('name', textExcess[index].icon);
  });
});

























const hints = document.querySelectorAll('.hint');

function scrollHints() {
 hints.forEach((hint) => {
  const hintsPosition = hint.getBoundingClientRect().top;
  const textPosition = hint.getBoundingClientRect().top;
  const shouldShowHints = [hintsPosition, textPosition].every((items) => items  < window.innerHeight / 1.5);
  const boxHints = document.querySelectorAll('#show-elem');
  const hintsText = document.querySelectorAll('.hint-text');
  
  hintsText.forEach((text) => {
   text.classList.toggle('showHint', shouldShowHints);
  });
  
   boxHints.forEach(function(box) {
    box.classList.toggle('showHint', shouldShowHints);
    hint.classList.toggle('showHint', shouldShowHints);
   });
 });
}

window.addEventListener('scroll', scrollHints);


function reductionMonth(lastMonth, monthNow) {
  const now = new Date(monthNow);
  const last = new Date(lastMonth);
   
  const selisihTahun = last.getFullYear() - now.getFullYear();
  const selisihBulan = (selisihTahun * 12) + (last.getMonth() - now.getMonth());
  return selisihBulan;
}

const bulanNow = `${y}` + '-' + `${monthIndex + 1}` + '-' + `${d}`;
const MonthAgo = reductionMonth('2023-06-01', `${bulanNow}`);
const FYIMonth = document.getElementById('txt-hint');
FYIMonth.innerHTML = `This website was first developed and created on June 1, 2023. FYI this it was ${MonthAgo} months ago.<br><br>Developer : Farid Fathoni N`
























const containerPopup = document.querySelector('.container-my-popup');
const personality_page = document.querySelector('.container-personality-box');
const myPopup = document.querySelector('.my-popup');
const clonedMyPopup = myPopup.cloneNode(true);
const iconPopup = document.querySelector('.my-popup lord-icon');
const textPopup = clonedMyPopup.querySelector('#text-popup');


function handlePopup(text) {
 textPopup.textContent = `${text}`;
 clonedMyPopup.style.display = 'flex';
 containerPopup.appendChild(clonedMyPopup.cloneNode(true));
}

let targetPopup = document.querySelector('.container-my-popup');

const observe = new MutationObserver((mutationsList, observe) => {
 for (let mutation of mutationsList) {
  if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
   const lastClonedMyPopup = containerPopup.lastElementChild;
   setTimeout(() => {
    lastClonedMyPopup.style.opacity = '0';
    setTimeout(() => containerPopup.removeChild(lastClonedMyPopup), 500);
   }, 3500);
  }
 }
});

const configs = { childList: true, subtree: true };
observe.observe(targetPopup, configs);

let input_nama_panggilan = personalInput[0];
let input_nama_lengkap = personalInput[1];
let input_favsongs = personalInput[4];
let input_birthday = personalInput[2];
let input_hobby3 = personalInput[10];
let input_gender = personalInput[5];
let input_dreams = personalInput[6];
let input_planet = personalInput[7];
let input_hobby1 = personalInput[8];
let input_hobby2 = personalInput[9];
let input_class = personalInput[3];
let input_bio = personalInput[11];

let inputPersonal = [input_nama_panggilan, input_nama_lengkap, input_birthday, input_class, input_favsongs, input_gender, input_dreams, input_planet, input_hobby1, input_hobby2, input_hobby3, input_bio];

let fullName;
if (localStorage.getItem('sudahLogin') === 'true') {
 fullName = localStorage.getItem('userName');
 (fullName.split(' ').length == 2) ? fullName : `${fullName}, `;
 let [splitedFirstName, splitedLastName] = fullName.split(' ');
}
input_nama_panggilan.value = localStorage.getItem('nama_panggilan');
input_nama_lengkap.value = localStorage.getItem('nama_lengkap');
input_birthday.value = localStorage.getItem('birthday');
input_class.value = localStorage.getItem('kelas');
input_favsongs.value = localStorage.getItem('favSong');
input_gender.value = localStorage.getItem('gender');
input_dreams.value = localStorage.getItem('myDreams');
input_planet.value = localStorage.getItem('planet');
input_bio.value = localStorage.getItem('userBio');
input_hobby1.value = localStorage.getItem('hobby1');
input_hobby2.value = localStorage.getItem('hobby2');
input_hobby3.value = localStorage.getItem('hobby3');

function togglePersonality() {
  personality_page.classList.toggle('active');
  if (localStorage.getItem('full_login') === 'true') {
   containerUserPage.classList.toggle('active');
  } else {
   container.classList.toggle('active');
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function savePersonality() {
  let birthday = input_birthday.value.toLowerCase();
  
  const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
  const lowerMonth = monthNames.map((month) => month.toLowerCase());
  
  if (inputPersonal.every((input) => input.value.length >= 4)) {
   
   const birthdayDate = birthday.split(' ');
   const moon = birthdayDate[1];
   const date = parseInt(birthdayDate[0]);
   const year = parseInt(birthdayDate[2]);
   
   const birthdayValidation = [!isNaN(date), lowerMonth.some((month) => moon.includes(month)), !isNaN(year), year < 2013, year > 1995];
   
   if (birthdayValidation.every((items) => items === true)) {
    
    let data_nama_panggilan = input_nama_panggilan.value.toLowerCase();
    let data_nama_lengkap = input_nama_lengkap.value.toLowerCase();
    let data_birthday = input_birthday.value;
    let data_kelas = input_class.value;
    let data_favsong = input_favsongs.value;
    let data_gender = input_gender.value.toLowerCase();
    let data_dreams = input_dreams.value;
    let data_planet = input_planet.value;
    let data_bio = input_bio.value;
    
    let data_hobby1 = input_hobby1.value;
    let data_hobby2 = input_hobby2.value;
    let data_hobby3 = input_hobby3.value;
    
    localStorage.setItem('nama_panggilan', data_nama_panggilan);
    localStorage.setItem('nama_lengkap', data_nama_lengkap);
    localStorage.setItem('birthday', data_birthday);
    localStorage.setItem('hobby1', data_hobby1);
    localStorage.setItem('hobby2', data_hobby2);
    localStorage.setItem('hobby3', data_hobby3);
    localStorage.setItem('kelas', data_kelas);
    localStorage.setItem('myDreams', data_dreams);
    localStorage.setItem('favSong', data_favsong);
    localStorage.setItem('gender', data_gender);
    localStorage.setItem('planet', data_planet);
    localStorage.setItem('userBio', data_bio);
    localStorage.setItem('sudahLogin', 'true');
    localStorage.setItem('full_login', 'true');
    
    textPopup.textContent = 'Perubahan sudah di simpan';
   } else {
    textPopup.innerHTML = "tolong isi tanggal lahir dengan benar. dengan format seperti ini 29 Oktober 2006";
   }
  } else {
   textPopup.textContent = 'Ups! Kamu harus mengetikan 4 huruf di setiap inputnya agar bisa menyimpan perubahan.';
  }
  setTimeout(() => handlePopup(), 300);
  if (localStorage.getItem('full_login') === 'true') {
   setTimeout(() => {
    userValidation();
    genderValidation();
   }, 500);
  }
}

















const words = document.querySelectorAll('.word');

// Animasi rotasi teks
function rotateWords() {
  let counter = 0;
  let hiddenLoader;
  const intervalLoader = setInterval(() => {
   if (counter === 0 && !hiddenLoader) {
    hiddenLoader = true;
    words[0].style.transform = `translateY(40px)`;
    setTimeout(() => {
      words.forEach(e => e.style.opacity = '1');
    }, 300);
   }
    words.forEach(word => {
      const height = word.clientHeight;
      word.style.transform = `translateY(-${height * counter}px)`;
    });
    counter++;
    if (counter === words.length) {
      counter = 0;
      setTimeout(() => {
       words.forEach(e => e.style.opacity = '0');
      }, 600);
      hiddenLoader = false;
    }
  }, 1000);
  // clearInterval(interval);
}

document.addEventListener('DOMContentLoaded', rotateWords);



window.addEventListener('load', () => {
 const isLoader = JSON.parse(localStorage.getItem('loginJSON'));
 const loaderTime = (isLoader && isLoader.flagLogin.isLogin === true) ? 10000 : 2000 ;
 setTimeout(() => {
  loadingAnimation({ active: containerHome, remove: [undefined], conditional: [undefined], action: 'active' });
  loaders.style.display = "none";
 }, loaderTime);
});































const containerGuide = document.querySelector('.container-guide');
const btnGuide = document.querySelector('.box-guide .cta-koleksi #myButton');
const bubbleChat = document.querySelectorAll('.content-guide .box-guide .wrapper-chat-guide .padding-overflow .containerChat');
const wrapper_chat = document.querySelector('.container-chat-guide');
const title_page_guide = document.querySelector('.introduction_guide .description_text');

function toggleGuide() {
  arrowMenu.style.display = 'block';
  container.classList.toggle('active');
  containerGuide.classList.toggle('active');
   
 if (containerSidebar.classList.contains('active')) {
   blurLayer.style.display = "none";
   menuSidebar.classList.toggle('active');
   containerSidebar.classList.toggle('active');
  }
}

let initGuide = 0;
const sayGuide = localStorage.getItem('nama_panggilan') || 'user';

const objectGuide = [
  {
   chatUser: 'gatau coba aja tebak',
   chatBot: `Umur kamu berapa ${sayGuide}?`,
   note: ['saat kamu mengirimkan pesan tersebut bot akan menanyakan kembali pertanyaan nya. jika kamu tidak menjawab dan hanya mengirimkan pesan seperti diatas maka bot akan baper dan diam karna kamu tidak memberitahu apa yang dia tanyakan.', 'saat bot sudah seperti itu mau kamu men spam bot hingga 100x pesan chat. bot akan tetap diam jika kamu tidak menjawab apa yang dia tanyakan sebelumnya. solusinya adalah kamu harus menjawab apa yang bot tanyakan ketika bot sudah diam / tidak membalas chat kamu, walaupun terkadang dalam momen tertentu bot akan tetap diam.']
  },
  {
   chatUser: 'hllo jg fabot siapa yg buat km?',
   chatBot: `hallo ${sayGuide} ${genderSay} senang berkenalan dengan kamu 😎`,
   note: ['tolong disaat kamu melakukan chat dengan bot di wajibkan menggunakan kata kata yang baik dan benar, karna jika kamu mengirimkan pesan chat seperti diatas dengan mengetikan kata yang ringkas dan tidak benar bot tidak akan memahami apa yang kamu ketikan dalam chat yang kamu kirimkan.', `jadi di sarankan agar kamu mengetikan kata kata yang baik dan benar seperti contoh pesan chat diatas mengetik kata 'hllo / jg / yg / km' seharusnya diketikan dengan 'hallo / juga / yang / kamu' dan seterusnya harus di ketikan secara jelas, dan tolong diingat jangan berkata kata kasar saat mengirimkan pesan.`]
  },
  {
   chatUser: 'sok asik lo bngst!!',
   chatBot: 'asik juga ya chatan sama kamu',
   note: [`saat kamu mengetikan kata kata kasar seperti diatas bot automatis akan menyudahi chat dengan kamu dan dia akan mereload browser secara paksa dan kedepan nya kamu '${sayGuide}' akan di cap sebagai pengguna yang tidak ramah`, 'tolong di ingat ketika kamu mengetikan dan mengirim pesan di wajibkan menggunakan kata kata yang baik dan benar karna attitude diutamakan di website ini.']
  }
];

window.addEventListener('scroll', function() {
 let scrollHeight = window.pageYOffset;
 const batasHeight = 50;
 
 if (scrollHeight >= batasHeight) {
  wrapper_chat.style.opacity = '0';
  title_page_guide.style.opacity = '1';
 } else {
  title_page_guide.style.opacity = '0';
  setTimeout(() => wrapper_chat.style.opacity = '1', 700);
 }
});

function nextGuide() {
  initGuide++;
  const selectedGuide = objectGuide[initGuide -1];
  if (selectedGuide) {
   const chatUser_guide = document.querySelector('.content-guide .box-guide .wrapper-chat-guide .padding-overflow .containerChat #chatJawaban #textJawaban');
   
   const chatBot_guide = document.querySelector('.content-guide .box-guide .wrapper-chat-guide .padding-overflow .containerChat #chatPertanyaan #textPertanyaan');
   
   initGuide = (initGuide === objectGuide.length) ? initGuide = 0 : initGuide;
   
   bubbleChat.forEach(function(items) {
    items.style.opacity = '0';
    
    const note_description = document.querySelectorAll('.wrapper-note-guide #description_guide');
    
    note_description.forEach(function(items, index) {
     items.style.opacity = '0';
     setTimeout(() => {
      bubbleGuideEff(0);
      chatBot_guide.innerHTML = selectedGuide.chatBot;
      chatUser_guide.innerHTML = selectedGuide.chatUser;
      
      items.innerHTML = selectedGuide.note[index];
     }, 500);
    });
   });
  }
}

nextGuide();

const bubbleGuideEff = (index) => {
 if (index < bubbleChat.length) {
  bubbleChat[index].style.opacity = '1';
  setTimeout(() => {
   bubbleGuideEff(index + 1);
  }, 500);
 } else {
  const note_description = document.querySelectorAll('.wrapper-note-guide #description_guide');
  note_description.forEach(function(items) {
   setTimeout(() => {
    items.style.opacity = '1';
   }, 300);
  });
 }
};





















const objectVersion = [
 { deskripsi : 'ini adalah versi pertama saat saya mengembangkan chat bot ini sekaligus memahami bagaimana caranya membuat user dan bot bisa saling membalas pesan, chat bot ini dibuat dari chatbot sederhana yang saya buat berikut link nya <a href="https://fakebotv2.faridfathonin.repl.co/">https://fakebotv2.faridfathonin.repl.co</a>, website chat bot sederhana tersebut di buat pada 25 Mei 2023', info: ['1 Juni 2023', 'Kirim pesan, bot bisa menjawab pesan', 'V 0.25.23', 'fiturr']
 },
 { deskripsi : 'ini adalah versi kedua chat bot ini di kembangkan. di versi ini saya sangat bingung / pusing memikirkan bagaimana caranya agar pesan chat bisa seperti balas membalas antara bot dan user, tapi setidak nya saya sudah berhasil memunculkan pesan dari bot. PR nya saya hanya harus memikirkan bagaimana caranya agar chat bisa tersusun dan sedikit menambahkan background animasi agar tampilan chat lebih bagus dan menarik.', info: ['3 Juni 2023 ', 'background animation', 'V 0.30.23', 'fiturr']
 },
 { deskripsi : 'ini adalah versi ketiga chat bot ini di kembangkan. di versi ini saya sudah memahami bagaimana caranya agar pesan chat bisa balas membalas tidak menumpuk seperti versi sebelumnya, menambahkan sedikit validasi ketika bot sedang mengetik maka status bot yang sebelumnya online menjadi mengetik saat bot sedang mengetikan pesan, merubah foto profil bot yang yang sebelumnya fr menjadi icon fabot dan menambahkan sedikit pesan informasi di bawah input tentang tanggal berapa v bot itu di update.', info: ['9 Juni 2023', 'menambahkan footer, validasi mengetik, change photo profile bot', 'V 0.90.23', 'fiturr']
 },
 { deskripsi : 'ini adalah versi keempat chat bot ini di kembangkan. di versi ini saya menambahkan halaman mengenai developer / pembuat website chat bot ini walaupun saat itu saya belum menyelesaikan seluruhnya karna waktu itu ada pekerjaan lain yang harus saya selsaikan. dan di versi ini saya membuat fitur untuk mengubah tema website menjadi gelap / terang. meskipun fitur ini belum terlalu sempurna dikarnakan ketika user mengubah tema chat yang sebelumnya dark menjadi light warna dari pesan chat akan tetap di tema dark dan tidak berubah menjadi warna tema light. begitupun sebaliknya, sekaligus di waktu inilah saya mulai mengenal pusing dan bingung nya belajar tentang javascript dasar.', info: ['22 Juni 2023', 'Developer Page, switch theme', 'V 1.0.22', 'fiturr']
 },
 { deskripsi : 'ini adalah versi kelima chat bot ini di kembangkan. di versi ini saya telah membuat konsep halaman mengenai developer walaupun halaman tersebut belum selesai sepenuhnya karna saya masih bingung apa yang harus ditambahkan pada halaman tersebut. tetapi disisi lain saya telah membuat 3 fitur yaitu fitur pesan email, ekspresi bot dan opsi untuk pengaturan. untuk fitur pesan email saya buat secara real time ketika user mengklik tombol send maka akan automatis mengirimkan apa yang user ketikan dalam form email tersebut, untuk fitur ekspresi bot ketika kamu meng klik foto profil bot maka ekspresi bot akan berubah dan yang terakhir adalah membuat validasi apa yang user ketikan di input adalah kata kata yang baik dan bukan lah kata kata kasar.', info: ['3 Juli 2023', 'send email, options, bot ekspresi', 'V 1.03.23', 'fiturr']
 },
 { deskripsi : 'ini adalah versi keenam chat bot ini di kembangkan. di versi ini saya telah menyelesaikan halaman mengenai developer didalam halaman tersebut saya menambahkan fitur Explore properties dan footer, saya juga menambahkan notifikasi pop up pemberitahuan untuk memberikan informasi dan menambahkan fitur ketika user mengklik tombol [ LAUNCH ] maka user bisa melihat website website yang saya pernah buat sebelumnya, tidak banyak fitur yang saya selesaikan pada saat ini karna saat itu saya terlalu sibuk dengan dunia rl saya.', info: ['17 Juli 2023', 'explore properties footer, added popup, website colection', 'V 1.17.23', 'fiturr']
 },
 { deskripsi : 'ini adalah versi ketujuh chat bot ini di kembangkan dan sekaligus update terlama untuk versi terbaru yang akan datang, yaitu versi saat ini, di versi ini saya membuat fitur sidebar yang bertujuan untuk menampilkan informasi pengguna yang menggunakan website chat bot ini, dan di dalam sidebar ini mempunyai fitur fitur seperti Home, My Profile, Message History, About Developer, Social Media developer dan fitur tombol untuk login / logout walaupun saat itu fitur fitur tersebut belum dikembangkan untuk validasinya.', info: ['2 Agustus 2023', 'sidebar feature, login/logout feature', 'V 2.02.23', 'fiturr']
 }
];

const wrapperVersion = document.querySelector('.wrapper-box-ver');
const item_version = document.querySelector('.box-ver');

for (let version = 0; version < objectVersion.length - 1; version++) {
  const clone_version = item_version.cloneNode(true);
  wrapperVersion.appendChild(clone_version);
  
  const boxVersion = document.querySelectorAll('.ver_box_bot');
  boxVersion.forEach((version, index) => {
   version.textContent = objectVersion[index].info[2];
  });
   
  boxVersion.forEach(function(items, index) {
   items.onclick = function() {
    const selectedVersion = objectVersion[index];
    boxVersion.forEach(item => item.classList.remove('active-ver'));
    
    items.classList.add('active-ver');
    
    if (selectedVersion) {
     const infoVersionBot = document.querySelectorAll('#infoVer');
     
     infoVersionBot.forEach(function(items, index) {
      items.style.opacity = '0';
      setTimeout(() => {
       items.style.opacity = '1';
       items.innerHTML = selectedVersion.info[index];
      }, 300);
     });
     
     const descVersionBot = document.querySelector('#descVer');
     descVersionBot.style.opacity = '0';
     setTimeout(() => {
      descVersionBot.style.opacity = '1';
      descVersionBot.innerHTML = selectedVersion.deskripsi;
     }, 300);
    }
   };
  });
 setTimeout(() => boxVersion[0].onclick(), 3000)
};

































const formEmail = document.querySelector('.form-email');
let title_email = document.querySelector('.title_email');
let value_email = document.querySelector('.value_email');



value_email.addEventListener('input', autoResize);
inputJawaban.addEventListener('input', autoResize);

function autoResize() {
 value_email.style.height = 'auto';
 value_email.style.height = value_email.scrollHeight + 'px';
 inputJawaban.style.height = inputJawaban.scrollHeight + 'px';
}

formEmail.addEventListener('submit', function(e) {
  e.preventDefault();
  
 let time = new Date();
 let hourEmail = time.getHours();
 let minuteEmail = time.getMinutes();
 hourEmail = check(hourEmail);
 minuteEmail = check(minuteEmail);
 
 function check(i) {
  if (i < 10) {
   i = "0" + i;
  }
  return i;
 }
  
 if (kataKasar.some((kata) => value_email.value.includes(kata)) || kataKasar.some((kata) => title_email.value.includes(kata))) {
  myAlert.style.display = "block";
  blurLayer.style.display = "block";
  infoAlert.innerHTML = "Perhatian !";
  myAlertText.innerHTML = "maaf. tolong berikan kata kata yang sopan";
  btnAlert.addEventListener('click', closeAlert);
  
  value_email.style.color = "red";
  title_email.style.color = "red";
  footerEmail.innerHTML = "Tolong berikan kata kata yang sopan";
 } else { // validasi tidak berkata kasar
 if (value_email.value.length >= 10 && title_email.value.length >= 5) {
    
    storedEmailDate.push(`${d} ${monthNames[monthIndex]} ${y}`);
    localStorage.setItem('emailDate', JSON.stringify(storedEmailDate));
    
    storedEmailValue.push(value_email.value);
    localStorage.setItem('emailValue', JSON.stringify(storedEmailValue));
    
    storedEmailTime.push(`${hourEmail}:${minuteEmail}`);
    localStorage.setItem('emailTime', JSON.stringify(storedEmailTime));
    
    let from = `${localStorage.getItem('userEmail')}`;
    let serviceID = `service_uuzer5a`;
    let email = 'faridfathonin@gmail.com';
    let subject = `${title_email.value}`;
    let body = `${value_email.value}`;
    let chatValue = fullType;
    
    let templateParams = {
     nama: from,
     to_email: email,
     subjects: subject,
     message: body,
     userInput: chatValue
    };
    //emailjs.send("service_uuzer5a", "template_wb424q8", templateParams);
    
    setTimeout(() => {
     infoAlert.style.color = "white";
     myAlert.style.display = "block";
     blurLayer.style.display = "block";
     infoAlert.innerHTML = "Info !";
     myAlertText.innerHTML = textAlert[0];
     footerEmail.innerHTML = `Terimakasih sudah mengirimkan email.`;
     btnAlert.addEventListener('click', closeAlert);
     
     value_email.value = "";
     title_email.value = "";
    }, 700);
  } else {
   myAlert.style.display = "block";
   blurLayer.style.display = "block";
   infoAlert.innerHTML = "Info !";
   myAlertText.innerHTML = textAlert[1];
   btnAlert.addEventListener('click', closeAlert);
  }
 }
});

function objectEmail(value, title, time, date) {
  this.valueEmail = value;
  this.titleEmail = title;
  this.timeEmail = time;
  this.dateEmail = date;
  this.metode = function() {
   return 'ini adalah objek email';
  };
}

const valueObjEmail = new objectEmail(localStorage.getItem('emailValue'), 'judul email', localStorage.getItem('emailTime'), localStorage.getItem('emailDate'));

localStorage.setItem('objMail', JSON.stringify(valueObjEmail));
const infoEmail = JSON.parse(localStorage.getItem('objMail'));

let storedEmailValue = JSON.parse(localStorage.getItem('emailValue')) || [];
let storedEmailTime = JSON.parse(localStorage.getItem('emailTime')) || [];
let storedEmailDate = JSON.parse(localStorage.getItem('emailDate')) || [];
const mailText = JSON.parse(infoEmail.valueEmail);
const mailTime = JSON.parse(infoEmail.timeEmail);
const mailDate = JSON.parse(infoEmail.dateEmail);

const emailItem = [];
if (mailText !== null) {
  mailText.forEach(function(email, index) {
   footerEmail.innerHTML = `Kirimkan email kepada developer.`;
   const cloneEmailBox = emailBox.cloneNode(true);
   const email_sending = document.querySelector('#email_sending');
   const email_text = cloneEmailBox.querySelector('.wrap-email-txt .description_text');
   const email_date = cloneEmailBox.querySelector('#date_email');
   const email_time = cloneEmailBox.querySelector('#time_email');
   
   email_text.innerHTML = email;
   email_sending.innerHTML = index + 1;
   email_time.innerHTML = mailTime[index];
   email_date.innerHTML = mailDate[index];
   
   if (email_text.textContent.length > 100) {
    email_text.style.animation = 'marquee 10s linear infinite';
    email_text.style.transform = 'translateY(100%)';
<<<<<<< HEAD
   } else { console.log('false') }
   
=======
   }
>>>>>>> master
   emailItem.push(cloneEmailBox);
   infoMsg.style.display = "none";
   cloneEmailBox.style.display = "flex";
   container_email.appendChild(cloneEmailBox);
  });
}
const mailEff = (index) => {
 if (index < emailItem.length) {
  if (emailItem.length >= 3) {
   const containerEmailItem = document.querySelector('.container-history-email .padding-overflow');
   containerEmailItem.style.height = '67vh';
  }
  emailItem[index].scrollIntoView({ behavior: 'smooth', block: 'end' });
  
  setTimeout(() => {
   emailItem[index].style.opacity = '1';
   mailEff(index + 1);
  }, 1300);
 }
};

function showingEmail() {
  emailItem.forEach((e) => e.style.opacity = '0');
  setTimeout(() => {
   mailEff(0);
  }, 500);
}







const containerItemsTheme = document.querySelector('.container-box-theme');
const boxTheme = document.querySelector('.box-theme');
const wrapperBoxTheme = document.querySelector('.info-type-theme .box-wrapper-item')
const itemsTheme = document.querySelector('.box-item-theme');
const ctaTheme = document.getElementById('toggleTheme');
const titleTheme = document.getElementById('title-theme');

const themeJSON = () => {
  return {
   type: {
    themeDark: [
     {
      templateName: 'ICE MOUNTAIN',
      themeLoved: false,
      keyColor: {
       primaryIconColor: '#436bff',
       primaryTextColor: '#b4ccff',
       primaryBorderColor: '#0034f7',
       primaryColor: '#052659',
       primaryCards: '#0e1527',
       primaryBackground: '#000000',
       
       secondaryIconColor: '#3f6bff',
       secondaryTextColor: '#2563ff',
       secondaryBorderColor: '#436bff',
       secondaryColor: '#004efb',
       secondaryCards: '#0f1a3dd1',
       secondaryBackground: '#000000',
       
       bubbleUser: '#1c4fc7',
       bubbleBot: '#132469',
       shadowUser: '',
       shadowBot: 'rgba(86,136,255,0.861)',
       tinyText: '#b4ccff',
       backgroundPY: 'calc(100% + 80%)',
       backgroundImage: 'url("/assets/image/dark_1.jpg")'
      }
     },
     {
      templateName: 'PURPLE NIGHT',
      themeLoved: 'nabilla',
      keyColor: {
       primaryIconColor: '#973cff',
       primaryTextColor: '#d1aff5',
       primaryColor: '#340559',
       primaryCards: '#1d0e27',
       primaryBorderColor: '#9b1eff',
       primaryBackground: '#000000',
       
       secondaryIconColor: '#daa1fb',
       secondaryTextColor: '#b10aff',
       secondaryBorderColor: '#c255ff',
       secondaryColor: '#5483B3',
       secondaryCards: '#250c35',
       secondaryBackground: '#000000',
       
       bubbleUser: '#59009c',
       bubbleBot: '#351c49',
       shadowUser: '',
       shadowBot: '',
       tinyText: '#c89cf7',
       backgroundColor: '#000000',
       backgroundPY: '70%',
       backgroundImage: 'url("/assets/image/dark_2.jpg")'
      }
     },
     {
      templateName: 'DEEP SUNSET',
      themeLoved: 'pasya',
      keyColor: {
       primaryIconColor: '#ff5728',
       primaryTextColor: '#efbfaa',
       primaryColor: '#592605',
       primaryCards: '#0c0c0c',
       primaryBorderColor: '#efbfaa',
       primaryBackground: '#000000',
       
       secondaryIconColor: '#ff4e3f',
       secondaryTextColor: '#d42417',
       secondaryBorderColor: '#ff7243',
       secondaryColor: '#ff614a',
       secondaryCards: '#350d0dd1',
       secondaryBackground: '#000000',
       
       bubbleUser: '#c73c00',
       bubbleBot: '#8d3c31',
       shadowUser: '#ffffff',
       shadowBot: '#ffffff',
       tinyText: '#efbfaa',
       primaryCards: '#592705',
       backgroundColor: '#000000',
       backgroundPY: '50%',
       backgroundImage: 'url("/assets/image/dark_3.jpg")'
      }
     },
     {
      templateName: 'CYAN FOREST',
      themeLoved: 'pasya',
      keyColor: {
       primaryIconColor: '#18c6ff',
       primaryColor: '#055950',
       primaryTextColor: '#77f6ff',
       primaryCards: '#082028',
       primaryBorderColor: '#00b087',
       primaryBackground: '#000000',
       
       secondaryIconColor: '#0091c0',
       secondaryTextColor: '#25a4ff',
       secondaryBorderColor: '#00a1a7',
       secondaryColor: '#5483B3',
       secondaryCards: '#092022d1',
       secondaryBackground: '#000000',
       
       bubbleUser: '#0091c0',
       bubbleBot: '#174f62',
       shadowUser: '',
       shadowBot: '',
       tinyText: '#77f6ff',
       backgroundPY: '25%',
       backgroundImage: 'url("/assets/image/dark_4.jpg")'
      }
     },
     {
      templateName: 'GREEN TEA',
      themeLoved: 'pasya',
      keyColor: {
       primaryIconColor: '#ba2108',
       primaryTextColor: '#6bba46',
       primaryColor: '#991d09',
       primaryCards: '#1a0d08',
       primaryBorderColor: '#991d09',
       primaryBackground: '#000000',
       
       secondaryIconColor: '#6ec046',
       secondaryTextColor: '#991d09',
       secondaryBorderColor: '#b46d1c',
       secondaryColor: '#cd742a',
       secondaryCards: '#210909d1',
       secondaryBackground: '#000000',
       
       bubbleUser: '',
       bubbleBot: '',
       shadowUser: '',
       shadowBot: '',
       tinyText: '#aeaeae',
       backgroundColor: '#000000',
       backgroundPY: '50%',
       backgroundImage: 'url("/assets/image/dark_5.jpg")'
      }
     }
    ],
    themeLight: [
     {
      templateName: 'light ocean',
      themeLoved: false,
      keyColor: {
       primaryTextColor: '#aeaeae',
       primaryIconColor: '#1bff41',
       backgroundPY: '80%',
       primaryBorderColor: 'light ocean',
       backgroundColor: '#ff1b1b',
       backgroundImage: 'url("/assets/image/light_1.jpg")'
      }
     },
     {
      templateName: 'light clouds',
      themeLoved: false,
      keyColor: {
       primaryTextColor: '#aeaeae',
       primaryIconColor: '#ff1bee',
       primaryBorderColor: 'light clouds',
       backgroundColor: '#ff1b1b',
       backgroundImage: 'url("/assets/image/light_2.jpg")'
      }
     },
     {
      templateName: 'light beach',
      themeLoved: false,
      keyColor: {
       primaryTextColor: '#aeaeae',
       primaryIconColor: '#1b47ff',
       primaryBorderColor: 'light beach',
       backgroundColor: '#ff1b1b',
       backgroundImage: 'url("/assets/image/light_3.jpg")'
      }
     }
    ],
    custom: [
     {
      templateName: 'set name 1',
      themeLoved: false,
      keyColor: {
       primaryTextColor: '#aeaeae',
       primaryBorderColor: 'set theme 1',
       backgroundColor: '#ff1b1b',
       backgroundImage: 'url("/assets/image/background-image9.jpg")'
      }
     },
     {
      templateName: 'set name 2',
      themeLoved: false,
      keyColor: {
       primaryIconColor: '#317bbd',
       primaryTextColor: '#aeaeae',
       primaryBorderColor: 'set name 2',
       backgroundColor: '#ff1b1b'
      }
     },
     {
      templateName: 'set name 3',
      themeLoved: false,
      keyColor: {
       primaryIconColor: '#94f500',
       primaryTextColor: '#aeaeae',
       primaryBorderColor: 'set theme 3',
       backgroundColor: '#ff1b1b'
      }
     }
    ]
   }
  }
 }
 

const defaultTheme = themeJSON().type.themeDark[4].keyColor;

 const outerLocalTheme = {
  theme: '',
  checkbox: Array(),
  nameTheme: ''
 }

function uncheckRadio(radioId) {
 let templateType, setLength, setThemeName, localTheme;
 const radio = document.getElementById(radioId);
 
 switch(radioId) {
  case 'radio-theme1':
   radio.checked = true;
   localTheme = 'themeDark';
   titleTheme.textContent = "Dark";
   outerLocalTheme.theme = 'themeDark';
   templateType = themeJSON().type.themeDark;
   break;
   
  case 'radio-theme2':
   localTheme = 'themeLight';
   titleTheme.textContent = "Light";
   outerLocalTheme.theme = 'themeLight';
   templateType = themeJSON().type.themeLight;
   break;
   
  case 'radio-theme3':
   localTheme = 'custom';
   titleTheme.textContent = "Custom";
   outerLocalTheme.theme = 'custom';
   templateType = themeJSON().type.custom;
   break;
    
  default:
   console.log('defaultt');
   return;
 }
  const arrayName = [];
  
  function setTemplates(templateName) {
   for (const templateKey in templateName) {
    const template = templateType[templateKey];
    const templateName = template.templateName;
    const lovedTemplate = template.themeLoved;
    
    arrayName.push(templateName);
    setLength = Object.keys(templateType).length;
    generate(setLength)
   }
   return templateName;
  }
  
  function generate(setLength) {
   generateThemes(templateType, setLength, arrayName, localTheme);
  }
   
  const newPropertyTheme = setTemplates(templateType);
}

function generateThemes(typeTheme, setLength, setThemeName, localTheme) {
 let countLength = 1;
 for (let i = 0; i <= setLength; i++) {
  if (i < wrapperBoxTheme.children.length) {
   wrapperBoxTheme.lastElementChild.remove();
  }
  countLength++;
  if (countLength === setLength) {
   for (let i = 0; i < setLength; i++) {
    const lastItem = wrapperBoxTheme.lastElementChild;
    const cloneItemTheme = itemsTheme.cloneNode(true);
    wrapperBoxTheme.appendChild(cloneItemTheme);
    
    const itemThemeTemplateName = document.querySelectorAll('#template-name');
    const themeName = document.querySelectorAll('#template-name');
    const itemTheme = document.querySelectorAll('.box-item-theme');
    
    handleSwitchTheme(itemTheme, typeTheme);
    
    regenerateItemsTheme(setLength);
    
    const itemToRemove = wrapperBoxTheme.children[setLength];
    
    if (itemToRemove) {
     setTimeout(() => {
      lastItem.style.opacity = "1";
      itemThemeTemplateName.forEach((name, sort) => name.textContent = setThemeName[sort]);
      lovedTheme(setThemeName, setThemeName, typeTheme, localTheme);
     }, 1500);
    }
   }
  }
 }
}



function regenerateItemsTheme(setIndex) {
 const items = document.querySelectorAll('.box-item-theme');
 items.forEach((elem) => {
 wrapperBoxTheme.scrollTo({ top: 0, behavior: 'smooth' });
  elem.style.opacity = "0";
  setTimeout(() => {
   elem.style.opacity = "1";
  }, 2000);
 });
}

const arrayLoveTheme = {
 checkbox: Array()
};

function lovedTheme(nameTheme, themeName, typeTheme, localTheme) {
const getThemeJSON = JSON.parse(localStorage.getItem('data_favoriteTheme'));
const setCheckboxLoved = document.querySelectorAll('.love-checkbox');
const isLoved = [];

 // mendapatkan love dari tema yang di sukai user
 if (localStorage.getItem('keyTheme') === 'keyTheme') {
   Object.entries(getThemeJSON.type).forEach((themeKey, index) => {
    if (themeKey[0] === localTheme) {
     themeKey[1].map((themes, index) => {
      isLoved.push(themes.themeLoved);
      isLoved.length = index + 1;
     });
    }
   });
  } else {
   localStorage.setItem('data_favoriteTheme', JSON.stringify(themeJSON()));
   localStorage.setItem('keyTheme', 'keyTheme');
  }
  
  // mengatur theme menjadi loved
  setTimeout(() => {
   setCheckboxLoved.forEach((items, index) => {
    items.checked = isLoved[index];
   });
  }, 500);
}


function lovingTheme() {
  const dataLovedTheme = JSON.parse(localStorage.getItem('data_favoriteTheme'));
  const checkbox = outerLocalTheme.checkbox;
  const nameTheme = outerLocalTheme.nameTheme;
  
  document.querySelectorAll('.container-label').forEach(checkbox => {
   checkbox.addEventListener('click', function(event) {
     event.stopPropagation();
    
    arrayLoveTheme.length = nameTheme.length;
    outerLocalTheme.checkbox.length = nameTheme.length;
    
    const lovedCheckbox = document.querySelectorAll('.love-checkbox');
    lovedCheckbox.forEach((checkbox, index) => {
     const objCheck = checkbox.checked;
     arrayLoveTheme.checkbox[index] = objCheck;
     outerLocalTheme.checkbox[index] = objCheck;
    });
    
    const themeStorage = dataLovedTheme.type;
    Object.entries(themeStorage).forEach((themeKey, index) => {
    const setThemeJSON = themeJSON();
     
     Object.entries(dataLovedTheme.type).forEach((subject, index) => {
      if (themeKey[0] === outerLocalTheme.theme) {
       if (subject[0] === outerLocalTheme.theme) {
         subject[1].map((theme, index) => {
          theme.themeLoved = outerLocalTheme.checkbox[index];
         });
        }
       localStorage.setItem('data_favoriteTheme', JSON.stringify(dataLovedTheme));
      }
     });
    });
   });
  });
}

function handleSwitchTheme(itemTheme, typeTheme) {
  itemTheme.forEach((items, id) => {
  items.setAttribute('onclick', "toSeeParticle('theme')");
  
   items.addEventListener('click', function() {
    Object.entries(typeTheme[id].keyColor).forEach(([pseudo, color]) => {
      const setTHEME = localStorage.setItem('setTHEME', JSON.stringify(typeTheme[id].keyColor));
      const colorParticle = JSON.parse(localStorage.getItem('setTHEME'));
      
      (() => {
       if (!this.setupExecuted) {
        setupParticle(colorParticle.primaryIconColor);
        outerLocalTheme.colorParticle = colorParticle.primaryIconColor;
        this.setupExecuted = true;
       }
      }).call(this);
      document.documentElement.style.setProperty(`--${pseudo}`, color);
    });
   });
  });
}

localStorage.setItem('defaultTheme', JSON.stringify(defaultTheme));

(() => {
 uncheckRadio('radio-theme1');
 const defaultModePJS = 'snow';
 localStorage.setItem('defaultModePJS', defaultModePJS);
 const savedTheme = JSON.parse(localStorage.getItem('setTHEME'));
 const useTheme = (savedTheme) ? JSON.parse(localStorage.getItem('setTHEME')) : JSON.parse(localStorage.getItem('defaultTheme'));
 
 const savedPJS = localStorage.getItem('pJSMode');
 const setPJS = (savedPJS) ? savedPJS : localStorage.getItem('defaultModePJS');
 
 Object.entries(useTheme).forEach(([pseudo, color]) => {
  document.documentElement.style.setProperty(`--${pseudo}`, color);
 });
})();















const signUpPage = document.querySelector('.container-login-page');
const loginPages = document.querySelectorAll(' .wrapper-login-page .login-page .box-input-logins');

const input_name = document.querySelector('.box-input-login #name');
const input_email = document.querySelector('.box-input-login #email');
const input_password = document.querySelector('.box-input-login #password_user');


const loginJSON = () => {
 return {
  user: {
   namaUser: null,
   emailUser: null,
   passwordUser: null
  },
  flagLogin: {
   isLogin: false,
   isStart: false
  }
 }
}

function toggleLogin(event) {
  let login = JSON.parse(localStorage.getItem('loginJSON'));
  loginPages.forEach((items) => {
   items.style.display = 'none';
   items.style.opacity = '0';
  });
  
  if (!login) {
    login = {
      flagLogin: {
       isLogin: false,
       isStart: false
      }
    }
  }
  
  let { isLogin, isStart } = login.flagLogin;
  let alreadyLogin = isLogin;
  let isStarting = isStart;
  
 switch(event) {
  case 'start':
   if (isStarting) {
    handlePopup('kamu bisa start bot')
   } else {
    localStorage.setItem('loginJSON', JSON.stringify(loginJSON()));
    loadingAnimation({ active: signUpPage, remove: [undefined], conditional: [undefined], action: 'active' });
    loginPages[0].style.opacity = '1';
    loginPages[0].style.display = 'flex';
   }
  break;
  case 'undo':
   login.flagLogin.isLogin = false;
   loginPages[0].style.opacity = '1';
   loginPages[0].style.display = 'flex';
   
   localStorage.setItem('loginJSON', JSON.stringify(login));
  break;
  case 'back':
   signUpPage.classList.remove('active');
  break;
  case 'submit':
   if (alreadyLogin) {
    handlePopup('kamu sudah login')
    login.flagLogin.isStart = true;
    signUpPage.classList.remove('active');
   } else {
    let userName = input_name.value;
    let userPass = input_password.value;
    let userEmail = input_email.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (emailPattern.test(userEmail) && userName.length >= 4) {
     login.flagLogin.isLogin = true;
     login.user.namaUser = userName;
     login.user.emailUser = userEmail;
     login.user.passwordUser = userPass;
     loginPages[1].style.display = 'flex';
     
     setTimeout(() => {
      loginPages[1].style.opacity = '1';
     }, 1000);
    } else {
     handlePopup('TOLONG MASUKAN INPUT EMAIL DAN NAMA DENGAN BENAR!')
    }
   }
   localStorage.setItem('loginJSON', JSON.stringify(login));
  break;
  default:
  console.log('defaultt')
  return;
 }
}


const backGuide = document.querySelector('.container-guide .headerMenu .arrow-button .arrow-menu');
const backEmail = document.querySelector('.box-header-email .bx-btn-exit');

function togglePage(page) {
 switch(page) {
  case 'guideHome':
   containerGuide.appendChild(footerWeb);
   loadingAnimation({ active: containerGuide, remove: containerHome, conditional: [undefined], action: 'active' });
   
   backGuide.onclick = () => { togglePage('guideHome') };
  break;
  case 'guide':
   arrowMenu.style.display = 'block';
   containerGuide.appendChild(footerWeb);
   loadingAnimation({ active: containerGuide, remove: containerHome, conditional: [undefined], action: 'active' });
  break;
  case 'email':
   showingEmail();
   loadingAnimation({ active: pageEmail, remove: containerHome, conditional: containerGuide, action: 'active' });
   backEmail.onclick = () => { togglePage('email') };
   break;
   case 'emails':
    showingEmail();
    loadingAnimation({ active: pageEmail, remove: containerHome, conditional: [containerHome, containerGuide], action: 'active' });
    backEmail.onclick = () => { togglePage('emails') };
   break;
   case 'version':
    loadingAnimation({ active: containerV, remove: containerHome, conditional: [undefined], action: 'active' });
   break;
   default:
   console.log('default')
   return;
 }
}

const loaderPage = document.getElementById('loader-page');

function loadingAnimation(pages) {
  loaderPage.classList.toggle('active');
  const { active, remove, conditional, action } = pages;
  
  setTimeout(() => {
   window.scrollTo({ top: 0, behavior: 'smooth' });
   active.classList.toggle(action);
   loaderPage.classList.toggle('active');
   
   try {
    if ((typeof remove) === 'object') {
     remove.classList.toggle(action);
    } else { 
     throw new Eror (remove, 'bukan object') 
    }
<<<<<<< HEAD
   } catch (err) { cl("eror logic")}
=======
   } catch (err) { cl("eror logic", err)}
>>>>>>> master
   
   if (Array.isArray(conditional)) {
    conditional.forEach(element => {
     if ((typeof element) === 'object') {
      element.classList.toggle('active');
     }
    });
   }
  }, 1500);
}