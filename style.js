let blurProfile = document.querySelectorAll('.blur-profile');
let loaders = document.querySelector('.container-loader');
let headerIcon = document.querySelectorAll('.headerIconll');
const containerUserPage = document.querySelector('.container-user-page');
const containerV = document.querySelector('.container-bot-ver');
let brush = document.getElementById('brush');
let moon = document.querySelectorAll('#moon');
let qr = document.getElementById('qr');
let container = document.querySelector('.container');
let containerId = document.querySelectorAll('#containerId');
let menu = document.querySelector('.menu');
let profileSection = document.querySelectorAll('#profileSection');
let containerOpsi = document.querySelector('.containerOpsi');
let blurLayer = document.querySelector('.blurLayer');
let myAlert = document.querySelector('.containerAlert');
let myAlertText = document.querySelector('.textAlert');
let btnAlert = document.querySelector('.btn-alert');
let infoAlert = document.querySelector('.infoAlert');

let boxDeskripsiKoleksi1 = document.querySelector('.box-deskripsi-koleksi-1');

let footerEmail = document.querySelector('.info-login-text');

let header = document.querySelector('header');
let arrowMenu = document.querySelector('.arrow-menu');
let headerUser = document.querySelector('.headerUser');
let profileImgBox = document.querySelectorAll('.profileImgBox');
let userInfo = document.querySelectorAll('.userInfo');
let cards = document.querySelector('.cards');
let text1 = document.querySelector('#text1');
let text2 = document.querySelector('#text2');

let descriptionSatu = document.getElementById('descriptionSatu');
let descriptionDua = document.getElementById('descriptionDua');
let descriptionTiga = document.getElementById('descriptionTiga');

let descSatu = document.getElementById('desc1');
let descDua = document.getElementById('desc2');
let descTiga = document.getElementById('desc3');
let descEmpat = document.getElementById('desc4');

const descriptionVer = document.querySelector('#descVer');
const infoVer = document.querySelectorAll('#infoVer');
const versionBox = document.querySelectorAll('.ver_box_bot');

// code untuk user validasi login
const containerLogin = document.querySelector('.container-login');
const boxLogin = document.querySelector('.box-login');
const titleLoginText = document.querySelector('.title-login-text');
const infoLoginText = document.querySelector('.info-login-text');
const deksripsiLoginText = document.querySelector('.deskripsi-login-text');
const loginBtn = document.querySelectorAll('.login-text');
const loginPage = document.querySelectorAll('.pembungkus-login-page');
const contentHome = document.querySelector('.content-home');
const openHomeBTN = document.querySelector('.btn-cta');
const footerHomeText = document.querySelector('.container-home #footers .footer-class');

const personalInput = document.querySelectorAll('.box-input-personality .input-login');
const inputLogin = document.querySelectorAll('.box-input-login .input-login');

const namaUser = document.querySelector('.name-user');
const emailUser = document.querySelector('.user-email');
const hobbyUser = document.querySelectorAll('.text-hobby-user');
const nameUser = document.querySelectorAll('.nameUser');
const personalDataInfo = document.querySelectorAll('.txt-user-personal-box');
const titleWidget = document.querySelectorAll('.user-name-widget');
const bioUser = document.querySelector('.bio-user');

const textareaElement = document.querySelectorAll('textarea');

textareaElement.forEach(function(e) {
 e.addEventListener('input', function() {
  const numberOfLines = (e.value.match(/\n/g) || []).length + 1;
  e.rows = numberOfLines;
 });
});

let input_name = inputLogin[0];
let input_email = inputLogin[1];
let input_password = inputLogin[2];

// validation for personal info input /
let namaDepan;
let namaBelakang;
if (localStorage.getItem('sudahLogin') === 'true') {
namaDepan = localStorage.getItem('userName').split(' ')[0];
namaDepan = localStorage.getItem('userName').split(' ').pop();
}
let ultah = localStorage.getItem('birthday');
let song = localStorage.getItem('favSong');
let dreams = localStorage.getItem('myDreams');
let gender = localStorage.getItem('gender');
let kelas = localStorage.getItem('kelas');
let planet = localStorage.getItem('planet');
let hobby1 = localStorage.getItem('hobby1');
let hobby2 = localStorage.getItem('hobby2');
let hobby3 = localStorage.getItem('hobby3');
let userNames = localStorage.getItem('userNames');
let userEmails = localStorage.getItem('userEmail');

let dataUser = [];
let containerHomeIs = true;

descriptionSatu.innerHTML = "Hi👋,My name is Farid Fathoni N. I am the developer of this website and I am a vocational high school student who is very enthusiastic about learning and has a special interest in making websites. Although sometimes I feel confused cause I am self-taught and don't hv a mentor to guide me.";

descriptionDua.innerHTML = "I have taught myself various techniques and programming languages such as HTML, CSS, and javascript to build attractive and interactive websites for users.";

descriptionTiga.innerHTML = "and lastly this website was created only to learn how to develop websites using the basic programming language and logic that I currently understand.";

descSatu.innerHTML = "I like to play games when my head can't think anymore about coding";

descDua.innerHTML = "I like to listen to music every day while I'm studying, if I'm not listening to it. I feel something is missing in my day";

descTiga.innerHTML = "I really like coding. because when I make something from 0 to it can be something interesting. that is a very proud thing for me";

descEmpat.innerHTML = "I like sleep because it is a place to forget all the things that make me tired";

const dayHome = document.querySelector('.header-content-home .text-icon-day');

const currentDate = new Date();
const d = currentDate.getDate();
const y = currentDate.getFullYear();
const dayIndex = currentDate.getDay();
const monthIndex = currentDate.getMonth();

const date = document.querySelector('.date');

const monthNames = [
 "Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

const dayNames = [
 "Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];

date.innerHTML = `${d} ${monthNames[monthIndex]} ${y}`;
dayHome.innerHTML = `${dayNames[dayIndex]}, ${d} ${monthNames[monthIndex]}`;

function descriptionClick() {
 cards.classList.toggle('active');
 setTimeout(() => {
  text1.classList.toggle('active');
  setTimeout(() => {
   text2.classList.toggle('active');
  }, 400);
 }, 500);

 window.scrollTo({ top: 0, behavior: 'smooth' });
}

const pembungkusContainer = document.querySelector('.pembungkus-container');
const typedTextElement = document.querySelectorAll('.text-icon-day');

const delay = 100;
const text = [""/*0*/, "Hi, Wellcome Back!"/*1*/, localStorage.getItem("nama_panggilan")/*"Nabilla" localStorage.getItem("nama_panggilan")*//*2*/, "Hi!, Wellcome to my websites"/*3*/, `How Are You Today ${namaDepan}?`/*4*/, ``/*5*/, `Anonymous?`];

const listRandomKata = [
 `How are you today ${namaDepan}?`/*0*/, `are you having fun today?`/*1*/, `keep enthusiastic everyday ${namaDepan} and don't give up on achieving your dreams 😉`,/*2*/ `I hope ${namaDepan} is feeling happy today 😇`/*3*/, `Thank you for visiting ${namaDepan}`/*5*/, `Remember to take care of yourself and enjoy every moment of the day, ${namaDepan}`/*6*/, `Remember that you have extraordinary potential, ${namaDepan}. Keep trying towards your dreams`/*7*/, `When you look up at the sky, remember that there are no limits to your dreams`/*8*/, `Remember, nothing is impossible if you believe in your dreams`/*9*/, `How are you today, ${namaDepan}? I hope everything is okay`/*10*/
 ];
 
let randomKata;
 
function generateRandomKata() {
 var angkaRandomKata = Math.random();
 var indexRandomKata = Math.floor(angkaRandomKata * listRandomKata.length);
 
 randomKata = listRandomKata[indexRandomKata];
 console.log("ini adalah ouput random kata :", randomKata);
 return randomKata;
}

setTimeout(generateRandomKata, 20);
let ctaPopup = document.querySelector('.cta-popup button');

function shufflePopup(index) {
 setTimeout(generateRandomKata, 0);
 textSays.innerHTML = text[0];
 textSays.style.opacity = "0";
 setTimeout(() => {
  textSays.style.opacity = "1";
  return textPopup(0);
 }, 1200);
}
/*
function typeText(indexTxt) {
 if (indexTxt <= text[3].length) {
 openHomeBTN.disabled = true;
  if (localStorage.getItem(sudahLogin') === "true") {
   typedTextElement[1].innerHTML += text[1].charAt(indexTxt);
   
   typedTextElement[2].innerHTML += text[2].charAt(indexTxt);
   if (`${splitedName.length < 14}`) {
    titleWidget[0].innerHTML += `${text[5].charAt(indexTxt)}`;
   } else {
    titleWidget[0].innerHTML += `${namaDepan.charAt(indexTxt)}`;
   }
   
  } else {
   titleWidget[0].innerHTML += `${text[6].charAt(indexTxt)}`;
   typedTextElement[1].innerHTML += text[3].charAt(indexTxt);
  }
  setTimeout(typeText, delay, indexTxt + 1);
 } else {
  openHomeBTN.disabled = false;
  startBTN.style.color = primaryHvr;
  setTimeout(() => {textPopup(0)}, 200);
  
  if (localStorage.getItem('sudahLogin') === "true") {
   typedTextElement[1].innerHTML = text[1];
  } else {
   typedTextElement[1].innerHTML = text[3];
  }
 }
}

const textSays = document.querySelector('.container-popup .userInfo .statusUser');

function textPopup(index) {
 if (index < text[3].length ||  index < randomKata.length) {
  ctaPopup.disabled = true;
  openHomeBTN.disabled = true;
  
  if (localStorage.getItem("sudahLogin") === "true") {
   textSays.innerHTML += randomKata.charAt(index);
  } else {
   textSays.innerHTML += text[3].charAt(index);
  }
 setTimeout(textPopup, delay, index + 1);
 } else {
  ctaPopup.disabled = false;
  openHomeBTN.disabled = false;
  if (localStorage.getItem("sudahLogin") === "true") {
   textSays.innerHTML = randomKata;
  } else {
   textSays.innerHTML += text[3].charAt(index);
  }
 }
}*/

let containerSidebarHome = document.querySelector('.container-sidebar-home-feature');
let popupTime = document.querySelector('.popup-time');
let loginTime = document.querySelector('.popup-time p');

let closeBTN = document.createElement('button');
document.querySelector('body').appendChild(closeBTN);
closeBTN.setAttribute('class','closeBTN');
closeBTN.setAttribute('id','cards-color');
closeBTN.setAttribute('onclick','closeCTA()');

closeBTN.innerHTML = `<ion-icon name="close"></ion-icon>`;

let hideUiIs = false;
let openEmailIs = false;

function closeCTA() {
 if (hideUiIs) {
  return hideUi();
 } else if (openEmailIs) {
 }
}

function hideUi() {
 if (contentHome.style.display === "none") {
  hideUiIs = false;
  contentHome.style.display = "flex";
  closeBTN.style.top = "-50%";
  setTimeout(() => {
  closeBTN.style.opacity = "0";
  contentHome.style.opacity = "1";
  }, 300);
 } else {
  hideUiIs = true;
  contentHome.style.opacity = "0";
  setTimeout (() => {
   contentHome.style.display = "none";
   closeBTN.style.opacity = "1";
   closeBTN.style.top = "15px";
  }, 1000);
 }
}

 let waktuLoginString = localStorage.getItem('waktuLogin');
 let waktuLoginUser = new Date(waktuLoginString);
  
function checkLoginTime() {
  let waktuSaatIni = new Date();
  let selisihWaktuMilidetik = waktuSaatIni - waktuLoginUser;
  
  let lamaLoginHari = Math.floor(selisihWaktuMilidetik / (1000 * 60 * 60 * 24));
  let sisaWaktuMilidetik = selisihWaktuMilidetik % (1000 * 60 * 60 * 24);
  let lamaLoginJam = Math.floor(sisaWaktuMilidetik / (1000 * 60 * 60));
  sisaWaktuMilidetik %= (1000 * 60 * 60);
  let lamaLoginMenit = Math.floor(sisaWaktuMilidetik / (1000 * 60));
 
  if (popupTime.classList.contains('active')) {
   popupTime.style.left = "-500%";
   popupTime.style.opacity = "0";
   popupTime.classList.remove('active');
  } else {
   popupTime.style.left = "65px";
   setTimeout(() => {
    popupTime.classList.add('active');
    if (localStorage.getItem('sudahLogin') === "true") {
     loginTime.innerHTML = "kamu telah login selama " + lamaLoginHari + " hari, " + lamaLoginJam + " jam, " + lamaLoginMenit + " menit.";
    } else {
     loginTime.innerHTML = "Login untuk melihat lama waktu login";
    }
   }, 800);
  }
}

function versionPage() {
 containerHome.classList.toggle('active');
 containerV.classList.toggle('active');
}

function openHome() {
 setTimeout(generateRandomKata, 0);
 //setTimeout(() => { typeText(0) }, 2000);
 setTimeout(textSays.innerHTML = text[0], 300);
 typedTextElement[1].innerHTML = text[0];
 typedTextElement[2].innerHTML = text[0];
 window.scrollTo({ top: 0, behavior: 'smooth' });
 
 containerHomeIs = true;
 blurLayer.style.display = "none";
 containerHome.style.display = "block";
 pembungkusContainer.classList.remove('active');

 if (containerSidebar.classList.contains('active')) {
  containerSidebar.classList.toggle('active');
  menuSidebar.classList.toggle('active');
 }
}

function openChat() {
 containerHomeIs = false;
 window.scrollTo({ top: 0 });
 if (localStorage.getItem("sudahLogin") === "true") {
   
  setTimeout(() => {
   containerHome.style.display = "none";
   pembungkusContainer.classList.add('active');
   pembungkusContainer.style.opacity = "0";
   setTimeout(() => {
    typedTextElement[1].innerHTML = text[0];
    typedTextElement[2].innerHTML = text[0];
    titleWidget[0].innerHTML = text[0];
    pembungkusContainer.style.opacity = "1";
   }, 200);
  }, 800);
  
  
  if (isRainLinear) {
   containerLinear.style.opacity = "1";
  } else {
   containerLinear.style.opacity = "0";
  }

 } else {
  myAlert.style.zIndex = "100";
  blurLayer.style.zIndex = "100";
  myAlert.style.display = "block";
  blurLayer.style.display = "block";
  footerHomeText.style.opacity = "0";
  infoAlert.innerHTML = "PEMBERITAHUAN !";
  myAlertText.innerHTML = "kamu harus melakukan login terlebih dahulu agar bisa membuka halaman selanjut nya.";
  setTimeout(() => { loginPage[0].style.opacity = "1" }, 500);
  btnAlert.addEventListener('click', closeAlert);
  setTimeout(loginValidation, 0);
 }
}
  setTimeout(() => {
   firstPertanyaan.innerHTML = botSay()[0];
   //textLoad();
   barier.style.display = "block";
   
   setTimeout(() => {
    barier.style.display = "none";
    textMengetik.innerHTML = "Online";
    
    containerLove.style.display = "block";
    firstContentPertanyaan.style.display = "block";
   }, 1000);
  }, 1000);

function perbesarGambar() {
 let scrollTop = window.pageYOffset;
 let batasHeight = 15;

 if (profileImgBox[0].classList.contains('profileImgBesar') || profileImgBox[1].classList.contains('profileImgBesar')) {

  blurProfile.forEach(function (blurProfile) {
   blurProfile.style.display = "none";
  });
  
  profileImgBox.forEach(function (item) {
   item.classList.remove('profileImgBesar');
  });
  
 } else {
  blurProfile.forEach(function (blurProfile) {
   blurProfile.style.display = "block";
  });

  profileImgBox.forEach(function (item) {
   item.classList.add('profileImgBesar');
  });

  if (scrollTop >= batasHeight) {
   blurProfile.forEach(function (blurProfile) {
    blurProfile.style.display = "none";
   });

   profileImgBox.forEach(function (item) {
    item.classList.remove('profileImgBesar');
   });
  }
 }
}

const DeveloperMenu = function () {
 arrowMenu.style.display = "block";

 boxDeskripsiKoleksi2 = containerDeskripsiKoleksi.querySelector('.box-deskripsi-koleksi-2');

 if (containerExplore.classList.contains('containerExploreActive')) {
  containerExplore.classList.remove('containerExploreActive');

  footers[1].style.position = "absolute";
  containerExplore.style.display = "none";
  exploreBox.forEach(function (exploreBoxes) {
   exploreBoxes.style.opacity = ".2";
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });

 } else {
  if (menu.classList.contains('active')) {
   setTimeout(() => {
   
    arrowMenu.style.display = "none";
    menuSidebar.classList.toggle("active");

    header.classList.remove('active');
    menu.classList.remove('active');
    container.classList.remove('active');
    if (containerUserPage.classList.contains('active')) {
     containerUserPage.classList.remove('active');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
   }, 400);
  } else {
   menu.classList.add('active');
   header.classList.add('active');
   container.classList.add('active');

   window.scrollTo({ top: 0, behavior: 'smooth' });
  }
 }
 setTimeout(validationCTA, 0);
}/* ARROW MENU END FUNCTION */

const validationCTA = function () {
 setTimeout(() => {
  profileImgBox.forEach(function (profileImgBox) {
   if (profileImgBox.classList.contains('profileImgBesar')) {
    profileImgBox.classList.remove('profileImgBesar');
    blurProfile.forEach(function (blurProfile) {
     blurProfile.style.display = "none"
    });
   }
  });
  
  if (activeFav) {
   activeFav.classList.remove('active');
   activeDesc.classList.remove('active');
   containerFav.classList.remove('active');
  }
  
  if (containerDeskripsiKoleksi.classList.contains('active')) {
   containerDeskripsiKoleksi.classList.remove('active');
  }
  
  if (cards.classList.contains('active')) {
   cards.classList.toggle('active');
   setTimeout(() => {
    
    text1.style.transition = ".050s";
    text1.classList.toggle('active');
    
    setTimeout(() => {
     
     text2.style.transition = ".050s";
     text2.classList.toggle('active');
    }, 400);
   }, 500);
  }
  
  if (containerOpsi.classList.contains('opsiActive')) {
   containerOpsi.classList.remove('opsiActive');
  }

  if (boxDeskripsiKoleksi2.classList.contains('deskripsiKoleksi2Active')) {
   containerDeskripsiKoleksi.classList.remove('deskripsiKoleksiActive');
   boxDeskripsiKoleksi2.classList.remove('deskripsiKoleksi2Active');
   boxDeskripsiKoleksi2.style.display = "none";
  }
 }, 600);

 if (containerSidebar.classList.contains('active')) {
  blurLayer.style.display = "none";
  containerSidebar.classList.remove('active');
 }
}

arrowMenu.addEventListener('click', () => {
 arrowMenu.classList.toggle('active');
});

brush.onclick = () => {
 brush.classList.add('clickEffect');
 setTimeout(function () {
  brush.classList.remove('clickEffect');
  opsi();
 }, 300);
}

qr.onclick = () => {
 qr.classList.add('clickEffect');
 setTimeout(function () {
  qr.classList.remove('clickEffect');
  opsi();
 }, 300);
}

window.addEventListener('scroll', function () {
 var scrollTop = window.pageYOffset;
 var batasHeight = 15;

 if (scrollTop >= batasHeight) {
  profileImgBox[0].classList.add('profileEffect');
  userInfo[0].classList.add('userEffect');

  profileImgBox[1].classList.add('profileEffect');
  userInfo[1].classList.add('userEffect');

  profileImgBox[0].classList.remove('profileImgBesar');
  profileImgBox[1].classList.remove('profileImgBesar');
  blurLayer.style.display = "none";
  
 if (myAlert.style.display === "block") {
   blurLayer.style.display = "block";
  }

  if (containerOpsi.classList.contains('opsiActive')) {
   containerOpsi.classList.remove('opsiActive');
  }

  if (containerSidebar.classList.contains('active')) {
   blurLayer.style.display = "block";
  }

  blurProfile.forEach(function (blurProfile) {
   blurProfile.style.display = "none";
  });

 } else {
  profileImgBox[0].classList.remove('profileEffect');
  userInfo[0].classList.remove('userEffect');

  profileImgBox[1].classList.remove('profileEffect');
  userInfo[1].classList.remove('userEffect');
 }
});


let favoriteIcons = document.querySelectorAll('.favorite-items');
const containerFav = document.querySelector('.container-favorite');
let activeDesc = null;
let activeFav = null;
let clickCount = 0;
favoriteIcons.forEach((favoriteIcon) => {
 const favorite = favoriteIcon.querySelector('.wrapperFav');

 favorite.addEventListener('click', () => {
  const clickedDesc = favoriteIcon.querySelector('.descFav');

  if (activeDesc === clickedDesc) {
   clickCount++;
   clickedDesc.classList.toggle('active');
   activeFav.classList.remove('active');
   containerFav.classList.remove('active');

   if (clickCount >= 2) {
    containerFav.classList.add('active');

    clickedDesc.classList.add('active');
    favoriteIcon.querySelector('.rowFav').classList.add('active');

    activeFav = favoriteIcon.querySelector('.rowFav');

    activeDesc = clickedDesc;

    if (clickCount >= 2 && activeDesc === clickedDesc) {
     clickedDesc.classList.remove('active');
     activeFav.classList.remove('active');
     containerFav.classList.remove('active');
    }
   }
  } else {
   if (activeFav) {
    activeFav.classList.remove('active');
    activeDesc.classList.remove('active');
   }
   containerFav.classList.add('active');

   clickedDesc.classList.add('active');
   favoriteIcon.querySelector('.rowFav').classList.add('active');

   activeFav = favoriteIcon.querySelector('.rowFav');
   activeDesc = clickedDesc;
  }
 });
});

const textAlert = [`Terimakasih ${namaDepan} sudah mengirimkan email kepada developer🥳🎉<br><br>Email kamu sangat berguna untuk developer agar terus bersemangat mengembangkan web chat bot ini`, 'ketikan judul email minimal lebih dari 5 huruf atau jika sudah ketikan isi email minimal lebih dari 15 huruf', ''];

const pageEmail = document.querySelector('.containerMail');
const container_email = document.querySelector('.wrap-bx-hs');
const emailBox = document.querySelector('.bx-hs-email');
const infoMsg = document.querySelector('.info_msg');

ellips.onclick = function () {
 containerOpsi.classList.add('opsiActive');
 containerOpsi.style.transitionDelay = ".5s";
 var boxOpsi = document.querySelectorAll('.boxOpsi');

 boxOpsi.forEach(function(box) {
  box.addEventListener('click', function (event) {
   event.stopPropagation();

   btnAlert.addEventListener('click', closeAlert);

   if (localStorage.getItem("theme") === "basic") {
    box.classList.add('opsiHover');
    setTimeout(() => {
     box.classList.remove('opsiHover')
    }, 300);
   } else {
    infoAlert.style.color = "white";
    box.classList.add('opsiHoverBlue');
    setTimeout(() => {
     box.classList.remove('opsiHoverBlue');
    }, 300);
   }
  });
 });
 containerOpsi.onclick = function () {
  containerOpsi.classList.remove('opsiActive')
  containerOpsi.style.transitionDelay = "0s";
 }
}


let deskripsiKoleksi1 = document.getElementById('deskripsi-1');
let deskripsiKoleksi2 = document.getElementById('deskripsi-2');
let titleKoleksi = document.querySelector('.title-koleksi');
let boxDeskripsikoleks1 = document.querySelector('.box-deskripsi-koleksi-1');

let containerDeskripsiKoleksi = document.querySelector('.container-deskripsi-koleksi');
boxDeskripsiKoleksi2 = containerDeskripsiKoleksi.querySelector('.box-deskripsi-koleksi-2');

boxDeskripsiKoleksi1.addEventListener('click', function () {
 
 if (containerDeskripsiKoleksi.classList.contains('deskripsiKoleksiActive')) {
  containerDeskripsiKoleksi.classList.remove('deskripsiKoleksiActive');
  boxDeskripsiKoleksi2.classList.remove('deskripsiKoleksi2Active');
  boxDeskripsiKoleksi2.style.display = "none";
  
 } else {
  containerDeskripsiKoleksi.classList.add('deskripsiKoleksiActive');
  boxDeskripsiKoleksi2.classList.add('deskripsiKoleksi2Active');
  setTimeout(() => {
   boxDeskripsiKoleksi2.style.opacity = "0";
   boxDeskripsiKoleksi2.style.display = "block";
   setTimeout(() => {
    boxDeskripsiKoleksi2.style.opacity = "1";
   }, 200);
  }, 150);
 }
});

let btnKoleksi = document.querySelector('.btn-koleksi');

titleKoleksi.innerHTML = "My First Website🔥";
deskripsiKoleksi1.innerHTML = "This is my first website, when I first learned about making websites";
deskripsiKoleksi2.innerHTML = "This website was created to fill my time when I'm bored playing games and want to try learning new things, this website was created using HTML, CSS and a little basic logic from javascript and this website was created at the end of October 2022";

let initNext = 1;
let initUndo = initNext;

const nextKoleksi = () => {
 initNext++
 deskripsiKoleksi1.style.opacity = "0";
 deskripsiKoleksi2.style.opacity = "0";
 let btnKoleksi = document.querySelector('.btn-koleksi');

 if (initNext === 1) {
  setTimeout(() => {
   titleKoleksi.innerHTML = "My First Website 🔥";
   deskripsiKoleksi1.innerHTML = "This is my first website, when I first learned about making websites";
   deskripsiKoleksi2.innerHTML = "This website was created to fill my time when I'm bored playing games and want to try learning new things, this website was created using HTML, CSS and a little basic logic from javascript and this website was created at the end of October 2022";
   btnKoleksi.addEventListener('click', function () {
    window.location.href = "https://exfavorite.faridfathonin.repl.co/";
   });

   deskripsiKoleksi2.style.opacity = "1";
   deskripsiKoleksi1.style.opacity = "1";
  }, 300);
 } else if (initNext === 2) {

  setTimeout(() => {
   titleKoleksi.innerHTML = "Fake Youtube Website";
   deskripsiKoleksi1.innerHTML = "This fake YouTube website was made only to learn to follow YouTube's user interface design";
   deskripsiKoleksi2.innerHTML = "This website is made purely using basic HTML and CSS, this fake youtube was made in mid-September";
   btnKoleksi.addEventListener('click', function () {
    window.location.href = "https://exprivate-youtube-development.faridfathonin.repl.co";
   });

   deskripsiKoleksi2.style.opacity = "1";
   deskripsiKoleksi1.style.opacity = "1";
  }, 300);
 } else if (initNext === 3) {

  setTimeout(() => {
   titleKoleksi.innerHTML = "Fake Shorts Website";
   deskripsiKoleksi1.innerHTML = "this is a fake short video website similar to youtube short video version";
   deskripsiKoleksi2.innerHTML = "this is a fake short video website similar to youtube short video version but with my version interface";
   btnKoleksi.addEventListener('click', function () {
    window.location.href = "https://exfavorite-shorts-development.faridfathonin.repl.co/";
   });

   deskripsiKoleksi2.style.opacity = "1";
   deskripsiKoleksi1.style.opacity = "1";
  }, 300);
 } else if (initNext === 4) {

  setTimeout(() => {
   titleKoleksi.innerHTML = "Fandom Website";
   deskripsiKoleksi1.innerHTML = "This website is my version of the Vtuber fandom website which was created to learn to make interesting User Interface (UI)";
   deskripsiKoleksi2.innerHTML = "This Vtuber website fandom was created to learn how to make a user interface (UI) display with my imagination. This website is made with HTML, CSS and a little logic from vanilla javascript";
   btnKoleksi.addEventListener('click', function () {
    window.location.href = "https://fandom-web-development.faridfathonin.repl.co/";
   });

   deskripsiKoleksi2.style.opacity = "1";
   deskripsiKoleksi1.style.opacity = "1";
  }, 300);
 } else {

  setTimeout(() => {
   initNext = 0;
   titleKoleksi.innerHTML = "Fake Bot Website";
   deskripsiKoleksi1.innerHTML = "This is the version of the fake bot website that I made for the first time, before it became a chatbot website like this";
   deskripsiKoleksi2.innerHTML = "This website was created when I wanted to learn the basic javascript programming language, this website was created using basic HTML, CSS and javascript";
   btnKoleksi.addEventListener('click', function () {
    window.location.href = "https://javascriptfakebot.faridfathonin.repl.co/";
   });

   deskripsiKoleksi2.style.opacity = "1";
   deskripsiKoleksi1.style.opacity = "1";
  }, 300);
 }
}

function undoKoleksi() {
 deskripsiKoleksi2.style.opacity = "0";
 deskripsiKoleksi1.style.opacity = "0";

 if (initNext === 1) {
  setTimeout(() => {
   initNext = 0;
   titleKoleksi.innerHTML = "Fake Bot Website";
   deskripsiKoleksi1.innerHTML = "This is the version of the fake bot website that I made for the first time, before it became a chatbot website like this";
   deskripsiKoleksi2.innerHTML = "This website was created when I wanted to learn the basic javascript programming language, this website was created using basic HTML, CSS and javascript";
   btnKoleksi.addEventListener('click', function () {
    window.location.href = "https://javascriptfakebot.faridfathonin.repl.co/";
   });

   deskripsiKoleksi2.style.opacity = "1";
   deskripsiKoleksi1.style.opacity = "1";
  }, 300);
 } else if (initNext === 2) {
  setTimeout(() => {
   initNext = 1;
   titleKoleksi.innerHTML = "My First Website 🔥";
   deskripsiKoleksi1.innerHTML = "This is my first website, when I first learned about making websites";
   deskripsiKoleksi2.innerHTML = "This website was created to fill my time when I'm bored playing games and want to try learning new things, this website was created using HTML, CSS and a little basic logic from javascript and this website was created at the end of October 2022";
   btnKoleksi.addEventListener('click', function () {
    window.location.href = "https://exfavorite.faridfathonin.repl.co/";
   });

   deskripsiKoleksi2.style.opacity = "1";
   deskripsiKoleksi1.style.opacity = "1";
  }, 300);
 } else if (initNext === 3) {
  setTimeout(() => {
   initNext = 2;
   titleKoleksi.innerHTML = "Fake Youtube Website";
   deskripsiKoleksi1.innerHTML = "this is a fake short video website similar to youtube short video version but with my version interface";
   deskripsiKoleksi2.innerHTML = "This website is made purely using basic HTML and CSS, this fake youtube was made in mid-September";
   btnKoleksi.addEventListener('click', function () {
    window.location.href = "https://exprivate-youtube-development.faridfathonin.repl.co";
   });

   deskripsiKoleksi2.style.opacity = "1";
   deskripsiKoleksi1.style.opacity = "1";
  }, 300);
 } else if (initNext === 4) {
  setTimeout(() => {
   initNext = 3;
   titleKoleksi.innerHTML = "Fake Shorts Website";
   deskripsiKoleksi1.innerHTML = "this is a fake short video website similar to youtube short video version";
   deskripsiKoleksi2.innerHTML = "fake shorts ini adalah website yang sangat saya sukai pada 2022. fake shorts ini di buat pada tanggal 10 Desember 2022 dan menggunakan HTML, CSS murni";
   btnKoleksi.addEventListener('click', function () {
    window.location.href = "https://exfavorite-shorts-development.faridfathonin.repl.co/";
   });

   deskripsiKoleksi2.style.opacity = "1";
   deskripsiKoleksi1.style.opacity = "1";
  }, 300);
 } else {
  setTimeout(() => {
   initNext = 4;
   titleKoleksi.innerHTML = "Fandom Website";
   deskripsiKoleksi1.innerHTML = "This website is my version of the Vtuber fandom website which was created to learn to make interesting (UI)";
   deskripsiKoleksi2.innerHTML = "This Vtuber website fandom was created to learn how to make a user interface (UI) display with my imagination. This website is made with HTML, CSS and a little logic from vanilla javascript";
   btnKoleksi.addEventListener('click', function () {
    window.location.href = "https://fandom-web-development.faridfathonin.repl.co/";
   });

   deskripsiKoleksi2.style.opacity = "1";
   deskripsiKoleksi1.style.opacity = "1";
  }, 300);
 }
}

function opsi() {
 setTimeout(() => {
  infoAlert.innerHTML = "INFO";
  blurLayer.style.zIndex = "45";
  infoAlert.style.color = "white";
  myAlert.style.display = "block";
  blurLayer.style.display = "block";
  myAlertText.innerHTML = "fitur ini akan segera hadir.";
  btnAlert.addEventListener('click', closeAlert);
 }, 300);
}

function openAlert() {
 myAlert.style.display = "block";
 blurLayer.style.display = "block";
}

function closeAlert() {
 myAlert.style.zIndex = "65";
 blurLayer.style.zIndex = "40";
 myAlert.style.display = "none";
 blurLayer.style.display = "none";

 if (profileImgBox[0].classList.contains('profileImgBesar')) {
  blurLayer.style.zIndex = "30";
  blurLayer.style.display = "block";
 }

 if (profileImgBox[1].classList.contains('profileImgBesar')) {
  blurLayer.style.zIndex = "30";
  blurLayer.style.display = "block";
 }

 if (containerSidebar.classList.contains('active')) {
  blurLayer.style.zIndex = "40";
  blurLayer.style.display = "block";
 }
}

function toxicAlert() {
 document.open();
 document.close();
 window.location.reload();
}

let inputJawaban = document.querySelector('.input-jawaban');

function adjustHeight() {
 let html = document.querySelector('html');
 container.style.paddingBottom = "250px"

 if (container.scrollHeight > container.offsetHeight) {
  container.style.paddingBottom = "250px";
 }
}

inputJawaban.addEventListener('input', adjustHeight);

window.addEventListener('load', adjustHeight);

const containerSidebar = document.querySelector('.container-sidebar');
let menuSidebar = document.querySelector(".menu-sidebar");

function openSidebar() {
 blurLayer.style.zIndex = "40";
 menuSidebar.classList.toggle("active");
 containerSidebar.classList.toggle('active');

 if (containerSidebar.classList.contains('active')) {
  blurLayer.style.display = "block";
 } else {
  blurLayer.style.display = "none";
 }
}

const containerExplore = document.querySelector('.container-explore');
const exploreBox = document.querySelectorAll('.explore-box');
const exploreText = document.querySelectorAll('.explore-text');
const footerBoxText = document.querySelector('.footer-box-text');
const titleExplore = document.querySelector('.title-explore');

const privacyPolicy = document.querySelector('.privacy-policy');
const wrapExploreBox = document.querySelector('.wrapper-explore-box');
const textPrivacyPolicy = document.querySelector('.text-privacy-policy');

const containerTerms = document.querySelector('.container-terms-of-service');
const termsText = document.querySelector('.terms-text');

const containerHelp = document.querySelector('.container-help');
const textHelp = document.querySelector('.text-help');

const containerContact = document.querySelector('.container-contact-us');
const textContact = document.querySelector('.text-contact-us');

textPrivacyPolicy.innerHTML = "<strong>Kebijakan Privasi ChatBot [ Fabot Chat ]</strong><br><br><br><strong>Selamat datang di [ Fabot Chat ]!</strong><br><br>Kami di [ Fabot Chat ] sangat memahami pentingnya privasi informasi pribadi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi data yang kami peroleh dari Anda saat Anda berinteraksi dengan ChatBot kami.<br><br><strong>**Informasi yang Kami Kumpulkan**</strong><br><br>Ketika Anda menggunakan [F abot Chat ], kami dapat mengumpulkan beberapa informasi pribadi yang Anda berikan secara sukarela selama sesi percakapan. Informasi ini dapat mencakup nama, alamat email, atau informasi kontak lainnya yang Anda berikan untuk membantu kami memahami dan merespons pertanyaan atau permintaan Anda dengan lebih baik.<br><br><strong>**Penggunaan Informasi**</strong><br><br>Informasi pribadi yang kami kumpulkan dari Anda digunakan secara eksklusif untuk memberikan layanan yang sesuai dan memberikan jawaban yang relevan dengan pertanyaan yang Anda ajukan kepada ChatBot kami. Kami tidak akan menggunakan informasi Anda untuk tujuan pemasaran atau penjualan ke pihak ketiga tanpa persetujuan Anda.<br><br><strong>**Perlindungan Informasi**</strong><br><br>Kami mengambil langkah-langkah untuk melindungi informasi pribadi Anda dari akses atau penggunaan yang tidak sah. Kami hanya menyimpan data pribadi yang diperlukan selama diperlukan untuk memberikan layanan percakapan dengan ChatBot kami.<br><br><strong>**Penggunaan Teknologi Pelacakan**</strong><br><br>[ Fabot Chat ] hanyalah ChatBot yang di buat hanya untuk bertujuan belajar membuat bot yang bisamembalas apa yang user katakan. jadi ChatBot ini hanyalah ChatBot biasa yang tidak sama seperti ChatBot yang menggunakan AI.<br><br><strong>**Kebijakan Privasi Pihak Ketiga**</strong><br><br>Harap dicatat bahwa Kebijakan Privasi ini hanya berlaku untuk ChatBot [ Fabot Chat ]. Kami tidak bertanggung jawab atas praktik privasi situs web pihak ketiga atau aplikasi yang mungkin Anda gunakan untuk mengakses ChatBot kami. Pastikan untuk membaca kebijakan privasi pihak ketiga tersebut sebelum memberikan informasi pribadi Anda kepada mereka.<br><br><strong>**Perubahan pada Kebijakan Privasi**</strong><br><br>Kami berhak untuk memperbarui Kebijakan Privasi ini dari waktu ke waktu untuk mencerminkan perubahan dalam layanan kami atau peraturan yang berlaku. Perubahan tersebut akan diberitahukan kepada Anda melalui pembaruan pada halaman ini.<br><br><strong>**Kontak Kami**</strong><br><br>Jika Anda memiliki pertanyaan, masukan, atau kekhawatiran terkait Kebijakan Privasi ini atau penggunaan ChatBot [ Fabot Chat ], silakan hubungi kami melalui:<br><br><u>[faridfathonin@gmail.com]</u><strong><br><br><br>Terima kasih telah menggunakan ChatBot [ Fabot Chat ]. Kami berkomitmen untuk melindungi privasi dan memberikan pengalaman percakapan yang bermanfaat bagi Anda.</strong><br><br>Tanggal dipublikasikan&nbsp;:&nbsp;[28 July 2023]<br>Tanggal terakhir diperbarui&nbsp;: [28 July 2023]";

const firstExploreText = exploreText[0];
firstExploreText.innerHTML = "sebagai seorang pelajar sekolah yang baru memasuki dunia pengembangan website, saya sedang menggali ilmu dan mempelajari dasar-dasar HTML, CSS, dan javascript untuk membuat website sederhana namun menarik. <br><br> Saat ini, saya tengah menjalani perjalanan menarik dalam belajar pengembangan website, di mana saya mengenal konsep dasar tentang bagaimana menggabungkan elemen-elemen visual dan fungsionalitas untuk membuat sebuah halaman web yang sederhana.";

const secondExploreText = exploreText[1]
secondExploreText.innerHTML = "Dengan semangat belajar yang tinggi, saya berusaha memahami struktur dasar sebuah website, seperti header, konten, dan footer, serta berlatih membuat tata letak yang responsif untuk meningkatkan kemampuan pengembangan saya. <br><br> Terkadang tantangan muncul, tetapi sebagai seorang pelajar yang berdedikasi, saya selalu mencari sumber daya tambahan dan mencari sumber belajar secara online untuk mengatasi rintangan dalam mengembangkan sebuah website yang saya buat.";

const thirdExploreText = exploreText[2];
thirdExploreText.innerHTML = "Dalam perjalanan belajar saya, saya sedang berlatih membuat website sederhana dengan desain yang menarik, menggabungkan warna dan tipografi secara tepat untuk menciptakan tampilan visual yang estetis. <br><br> Saya sangat antusias untuk mempelajari konsep-konsep baru dalam web development, seperti animasi CSS dan javascript, yang akan menambahkan sentuhan dinamis pada project website saya saat ini.";

const fourExploreText = exploreText[3];
fourExploreText.innerHTML = "Saya percaya bahwa belajar pengembangan website adalah investasi berharga bagi masa depan, karena website menjadi sarana penting dalam dunia digital untuk menyampaikan informasi dan berinteraksi dengan audiens. <br><br> Meskipun masih baru dalam dunia pengembangan website, saya terus mengasah keterampilan dengan project-project kecil dan berusaha mencari tantangan baru untuk menguji kemampuan saya.";

const fiveExploreText = exploreText[4];
fiveExploreText.innerHTML = "Saya yakin, dengan kerja keras dan dedikasi, perjalanan belajar saya dalam pengembangan website akan membuka peluang yang menarik dan menginspirasi saya untuk terus berkembang di bidang ini.";

termsText.innerHTML = "<strong>1. Pengertian:</strong> Terms of Service atau Syarat dan Ketentuan adalah dokumen hukum yang berisi perjanjian antara pengguna (user) dan pemilik website. Dokumen ini menetapkan persetujuan dan aturan yang mengatur bagaimana pengguna dapat menggunakan layanan yang diberikan oleh website tersebut.<br><br><strong>2. Penggunaan Layanan:</strong> Bagian ini menjelaskan tentang jenis layanan yang disediakan oleh website dan cara pengguna dapat mengakses serta menggunakan layanan tersebut. Juga mungkin mencakup persyaratan usia minimal atau persyaratan kelayakan lainnya untuk menjadi pengguna.<br><br><strong>3. Privasi dan Data Pengguna:</strong> Ini adalah bagian yang menjelaskan kebijakan privasi website, termasuk bagaimana data pengguna dikumpulkan, digunakan, disimpan, dan dilindungi. Biasanya mencakup informasi tentang cookies dan kebijakan pengumpulan data pribadi.<br><br><strong>4. Kekayaan Intelektual:</strong> Bagian ini mengatur hak kekayaan intelektual pemilik website, termasuk hak cipta, merek dagang, hak paten, dan hak kekayaan intelektual lainnya. Hal ini menetapkan batasan-batasan terkait penggunaan konten yang dimiliki oleh website.<br><br><strong>5. Kewajiban Pengguna:</strong> Menjelaskan tindakan atau perilaku yang dilarang atau diharamkan bagi pengguna saat menggunakan layanan. Misalnya, tindakan seperti pelanggaran hukum, penyebaran konten ilegal, atau penyalahgunaan layanan website.<br><br><strong>6. Tanggung Jawab Pihak Terkait:</strong> Bagian ini mengatur batasan tanggung jawab pihak-pihak yang terlibat dalam penyediaan layanan, termasuk pemilik website, mitra, dan penyedia layanan pihak ketiga.<br><br><strong>7. Pembatalan atau Pengakhiran Akun:</strong> Menjelaskan prosedur atau kriteria di mana pemilik website dapat membatalkan atau mengakhiri akun pengguna jika terjadi pelanggaran terhadap TOS atau alasan lain yang ditetapkan.<br><br><strong>8. Perubahan pada TOS:</strong> Menjelaskan bahwa pemilik website dapat mengubah TOS dari waktu ke waktu dan bagaimana perubahan tersebut akan diinformasikan kepada pengguna.<br><br><strong>9. Hukum yang Berlaku:</strong> Menentukan yurisdiksi dan hukum yang berlaku untuk penyelesaian sengketa atau permasalahan yang timbul dari penggunaan layanan website.<br><br><strong>10. Persetujuan Pengguna: </strong>Bagian terakhir biasanya meminta pengguna untuk menyetujui dan mengikatkan diri pada TOS sebelum mereka dapat menggunakan layanan yang disediakan oleh website.<br><br><br><br><strong>Penting bagi pengguna untuk membaca dan memahami TOS dengan seksama sebelum menggunakan layanan dari sebuah website.</strong> Dengan menerima TOS, pengguna menyetujui persyaratan dan aturan yang telah ditetapkan oleh pemilik website, dan ini dapat mempengaruhi hak dan kewajiban mereka selama menggunakan layanan tersebut.";

textHelp.innerHTML = "<strong>Selamat datang di chatBot [ Fabot Chat ] - Chatting dengan bot !</strong><br><br><br>Bagian 'help' kami didesain untuk memberikan panduan lengkap dalam menggunakan chatBot [ Fabot Chat ]. Berikut adalah beberapa informasi yang akan Anda temukan di bagian 'help' kami:<br><br><br> 1. Cara Memulai: Panduan langkah demi langkah untuk memulai percakapan dengan chatBot [ Fabot Chat ]. Anda akan menemukan cara memulai percakapan, termasuk perintah awal yang dapat Anda berikan.<br><br> 2. Fitur Utama: Penjelasan mengenai fitur-fitur utama yang dapat digunakan dalam percakapan dengan chatBot [ Fabot Chat ]. Mulai dari pertanyaan umum, pencarian informasi, hingga melakukan tugas-tugas khusus.<br><br> 3. Perintah Khusus: Daftar perintah khusus yang dapat Anda gunakan untuk mengakses fitur-fitur tertentu dengan cepat. Kami menyediakan daftar perintah beserta contoh penggunaannya.<br><br> 4. Pertanyaan Umum: Jawaban atas pertanyaan-pertanyaan umum seputar chatBot [ Fabot Chat ] dan cara kerjanya. Jika Anda mengalami masalah atau kesulitan, Anda mungkin akan menemukan jawaban di sini.<br><br> 5. Kebijakan dan Privasi: Informasi tentang kebijakan kami terkait penggunaan data dan privasi Anda. Kami selalu mengutamakan keamanan dan privasi informasi pengguna.<br><br> 6. Kontak dan Dukungan: Informasi tentang cara menghubungi tim dukungan kami jika Anda mengalami masalah yang tidak teratasi oleh bagian 'help' kami.<br><br><br><br> Kami berharap bagian 'help' ini dapat membantu Anda dalam menjalankan percakapan dengan chatBot [ Fabot Chat ] dengan lancar dan menyenangkan. Jika Anda memiliki pertanyaan lebih lanjut, jangan ragu untuk menghubungi kami melalui bagian kontak yang telah disediakan. <strong>Terima kasih telah menggunakan chatBot [ Fabot Chat ] sebagai Chatting dengan bot !</strong>";

textContact.innerHTML = "<strong>Kontak Kami - Tim Dukungan chatBot [ Fabot Chat ]</strong><br><br>Kami senang mendengar dari Anda! Jika Anda memiliki pertanyaan, masalah, atau umpan balik mengenai pengalaman Anda menggunakan chatBot [ Fabot Chat ], tim dukungan kami siap membantu. Berikut adalah beberapa opsi untuk menghubungi kami:<br><br><br><br>1. Formulir Kontak: Anda dapat mengisi formulir kontak yang telah kami sediakan. Jangan ragu untuk menjelaskan pertanyaan atau masalah Anda secara detail agar tim kami dapat memberikan bantuan yang tepat.<br><br><br>2. Email: Kirimkan email Anda ke support@chatBot [ Fabot Chat ].com dan tim dukungan kami akan merespons dalam waktu secepatnya.<br><br><br>3. Live Chat: Jika Anda mengalami masalah mendesak atau membutuhkan bantuan langsung, gunakan fitur live chat yang tersedia. Tim dukungan kami akan berusaha merespons dengan segera.<br><br><br>4. Media Sosial: Anda juga dapat menghubungi kami melalui media sosial kami. Kami aktif di platform-platform seperti Twitter, Facebook, dan Instagram. Cari akun kami dengan username @chatBot [ Fabot Chat ] untuk mendapatkan dukungan.<br><br><br><br>Kami mengutamakan kepuasan pengguna dan selalu siap membantu Anda dengan setiap pertanyaan dan masalah yang Anda hadapi. Tim dukungan kami terdiri dari tenaga ahli yang berpengalaman dalam mengatasi berbagai situasi. <u>Jangan ragu untuk menghubungi kami kapan saja, dan kami akan dengan senang hati memberikan bantuan terbaik kami.</u> <strong>Terima kasih telah memilih chatBot [ Fabot Chat ] sebagai Chatting dengan bot !</strong>";

function footerBoxOne() {
 descriptionClick();
 console.log('whwhwh')
}

function footerBoxSecond() {
 openExplore();
 privacyPolicy.style.display = "block";
 titleExplore.innerHTML = "Privacy Policy";
}

const fadeInBox = (index) => {
 if (index < exploreBox.length) {
  exploreBox[index].style.opacity = '1';
  
   if (index >= 2) {
    exploreBox[index].scrollIntoView({ behavior: 'smooth' });
   }
  setTimeout(() => {
   fadeInBox(index + 1);
  }, 1500);
 }
}

function footerBoxThird() {
 fadeInBox(0);
 openExplore();
 wrapExploreBox.style.display = "block";
 titleExplore.innerHTML = "Description This Website";
}

function footerBoxFour() {
 openExplore();
 containerTerms.style.display = "block";
 titleExplore.innerHTML = "Terms Of Service";
}

function footerBoxFive() {
 openExplore();
 titleExplore.innerHTML = "Contact Us";
 containerContact.style.display = "block";
}
function footerBoxSix() {
 openExplore();
 titleExplore.innerHTML = "Help Page";
 containerHelp.style.display = "block";
}

containerExplore.style.display = "none";

const openExplore = () => {
 containerExplore.classList.add('containerExploreActive');

 footers[1].style.position = "fixed";
 containerExplore.style.display = "block"

 privacyPolicy.style.display = "none";
 containerHelp.style.display = "none";
 containerTerms.style.display = "none";
 wrapExploreBox.style.display = "none";
 containerContact.style.display = "none";
 
 if (profileImgBox[0].classList.contains('profileImgBesar')) {
  profileImgBox[0].classList.remove('profileImgBesar');
 }

 if (activeFav) {
  activeFav.classList.remove('active');
  activeDesc.classList.remove('active');
  containerFav.classList.remove('active');
 }

 if (containerDeskripsiKoleksi.classList.contains('deskripsiKoleksiActive')) {
  containerDeskripsiKoleksi.classList.remove('deskripsiKoleksiActive');
 }

 if (cards.classList.contains('active')) {
  cards.classList.toggle('active');
  setTimeout(() => {

   text1.style.transition = ".050s";
   text1.classList.toggle('active');

   setTimeout(() => {

    text2.style.transition = ".050s";
    text2.classList.toggle('active');

   }, 400);
  }, 500);
 }

 if (containerOpsi.classList.contains('opsiActive')) {
  containerOpsi.classList.remove('opsiActive');
 }

 if (boxDeskripsiKoleksi2.classList.contains('deskripsiKoleksi2Active')) {
  containerDeskripsiKoleksi.classList.remove('deskripsiKoleksiActive');
  boxDeskripsiKoleksi2.classList.remove('deskripsiKoleksi2Active');
  boxDeskripsiKoleksi2.style.display = "none";
 }

 window.scrollTo({ top: 0, behavior: 'smooth' });
}

function closeExplore() {
 containerExplore.classList.remove('containerExploreActive');
}

let genderCwo = [`laki laki`, `laki-laki`, `cowok`, `cowo`, `cwo`, `cwok`, `jantan`, `lakik`, `kakek`, `om`, `bapa`, `ayah`];

let genderCwe = [`cewe`, `cwe`, `cewek`, `cwek`, `perempuan`, `wanita`, `betina`, `woman`, `ibu ibu`, `ibu`, `nenek`, `emak`, `mama`, `tante`];

let genderIs;
let genderSay;

let genderValidation = () => {
 if (localStorage.getItem('full_login') === "true") {
 let img = [
  document.querySelector('.img-box-user .img-user'),
  document.querySelector('.content-user-page .profileSection .profileImgBox .imgProfile')
 ];
 if (genderCwo.some((kata) => gender.includes(kata))) {
  genderIs = "cowo";
  genderSay = 'ganteng';
  img[0].src = 'profileicon.webp';
  img[1].src = 'profileicon.webp';
 } else if (genderCwe.some((kata) => gender.includes(kata))) {
  genderIs = "cewe";
  genderSay = 'cantik';
  img[0].src = 'https://iili.io/JHPki0X.webp';
  img[1].src = 'https://iili.io/JHPVwKv.md.webp';
 } else {
  genderIs = "cowo/cewe";
  genderSay = 'cantik/ganteng';
  img[0].src = 'at.webp';
  img[1].src = 'at.webp';
 }
 } else { console.log('perlu validasi gender') }
}

if (localStorage.getItem('sudahLogin') === "true") {
  if (localStorage.getItem('full_login') === "true") {
   let namaBulan = `${monthNames[monthIndex]}`;
   
   let bulanUltah = ultah.split(' ')[1];
   console.log(namaBulan, "nama bulan sekarang", bulanUltah, "bulan ultah");
   var kalimatUltah = ultah.slice((ultah).length - 4);
   kalimat = kalimatUltah;
   angka = kalimat.match(/\d+/);
   if (angka !== null) {
    let nilaiAngka = parseInt(angka[0]);
    const currentDate = new Date();
    const y = currentDate.getFullYear();
    var tahunLahir = `${nilaiAngka}`;
    var tahunNow = `${y}`;
   } else {
    console.log("Tidak ada angka dalam string ini.");
   }
  } else {
   console.log("user belum melakukan login")
  }
}
let umurNow = parseInt(tahunNow - tahunLahir);
// validation for personal info input /

// code untuk user validasi login

const loginBtn1 = loginPage[0];

let loginPageInit = 0;
let loginInitAlert = 0;
let sudahLogin = false;
let loginButton = false;

function checkInputLogin() {
 inputLogin.forEach(function (inputLogin) {
  inputLogin.addEventListener("input", function () {
   if (inputLogin.value.length >= 4) {
    loginButton = true;
    console.log(loginButton);
   } else {
    loginButton = false;
   }
  })
 })
}

inputLogin.forEach(function (inputLogin) {
 inputLogin.addEventListener("input",
  checkInputLogin);
});

let sudahLoginAlert = false;

let password_user = document.getElementById('password_user');
const showIconPass = document.getElementById('show-pass');

function togglePassword() {
  if (password_user.type === 'password') {
   password_user.type = 'text';
   showIconPass.name = `eye-outline`;
  } else {
   password_user.type = 'password';
   showIconPass.name = `eye-off-outline`;
  }
}

const loginValidation = () => {
 setTimeout(() => {
  containerLogin.style.left = "0";
 }, 0);
 
 loginBtn.forEach(function(loginBtn) {
  setTimeout(() => {
   loginPage[0].style.display = "block";
   setTimeout(() => { loginPage[0].style.opacity = "1" }, 500);
  }, 300);
  
  loginBtn.addEventListener("click",
   function () {
    boxLogin.style.opacity = "0";
    setTimeout(() => {
     boxLogin.style.opacity = "1";
    }, 1000);

    if (localStorage.getItem('sudahLogin') === "true") {
     containerLogin.style.transition = ".0s";
     setTimeout(() => {
      titleLoginText.innerHTML = "Kamu Sudah Login";
      infoLoginText.innerHTML = "terimakasih telah menggunakan website chatbot ini. nantikan update menarik selanjutnya untuk web chatbot ini !";
      deksripsiLoginText.innerHTML = "This website is made only for learning in development a website, FaBot-Chat <u>17 July Version.</u>";

      loginPage[0].style.display = "block";
      setTimeout(() => {
       loginBtn1.addEventListener('click', closeLogin);
       loginPage[0].style.opacity = "1";
      }, 500);
     }, 1000);

    } else {
     //kondisi user belum login
     loginPageInit++;
     loginInitAlert++;
     containerLogin.style.transition = ".3s";
     
     let userName = input_name.value;
     let userEmail = input_email.value;
     let userPass = input_password.value;
     let inputUser = [userName, userEmail, userPass];
     
     if (loginPageInit === 0) {
      boxLogin.style.opacity = "0";
      loginPage[1].style.opacity = "0"
      loginPage[1].style.display ="none";
     } else if (loginPageInit === 1) {
      if (loginPageInit === 1 && inputUser.every(value => value.length >= 5)) {
       loginInitAlert = 0;
       loginPageInit = 1;
       inputUser.length = 0;
       
       localStorage.setItem('userName', userName);
       localStorage.setItem('userEmail', userEmail);
       localStorage.setItem('userPass', userPass);
       
       if (['@gmail.com', '@icloud.com', '@yahoo.com'].some((kata) => userEmail.includes(kata))) {
        console.log("input email benar");
       } else {
        loginPage[1].style.opacity = "1";
        boxLogin.style.opacity = "1";
        loginPage[1].style.display = "block";
        
        loginPageInit = 0;
        myAlert.style.zIndex = "100";
        blurLayer.style.zIndex = "100";
        myAlert.style.display = "block";
        blurLayer.style.display = "block"
        infoAlert.innerHTML = "Info !";
        myAlertText.innerHTML = "tolong masukkan email dengan benar. dengan format contoh namakamu@gmail.com agar kamu bisa melanjutkan ke halaman login berikutnya&nbsp;&nbsp;>//<";
        btnAlert.addEventListener('click', closeAlert);
       }
       
      } else if (inputUser.every(value => value.length <= 4)) {
       loginPageInit = 0;
       console.log(loginInitAlert)
       if (loginInitAlert >= 2) {
        loginPage[1].style.opacity = "1";
        boxLogin.style.opacity = "1";
        loginPage[1].style.display = "block";
        
        myAlert.style.zIndex = "100";
        blurLayer.style.zIndex = "100";
        myAlert.style.display = "block";
        blurLayer.style.display = "block"
        infoAlert.innerHTML = "Info !";
        myAlertText.innerHTML = "tolong isi semua input atau jika sudah ketikan kata minimal lebih dari 5 huruf di setiap input. agar kamu bisa <br>melanjutkan ke halaman login berikutnya&nbsp;&nbsp;>//<";
        btnAlert.addEventListener('click', closeAlert);
       } else {/..../}
      }
      
      setTimeout(() => {
       loginPage[0].style.display = "none";
       loginPage[1].style.display = "block";
       setTimeout(() => {
        loginPage[1].style.opacity = "1";
       }, 1000);
      }, 1000);
      
     } else if (loginPageInit === 2) {
      loginPageInit++;
      sudahLogin = true;
      loginInitAlert = 0;
      localStorage.setItem('sudahLogin', 'true');
      var waktuLoginUser = new Date();
      var waktuLoginString = waktuLoginUser.toISOString();
      localStorage.setItem('waktuLogin', waktuLoginString);
      
      setTimeout(() => {
       titleLoginText.innerHTML = "Login Berhasil";
       infoLoginText.innerHTML = "<strong>Kamu perlu membaca hal dibawah ini :</strong><br><br>1. saat kamu login itu hanyalah sebuah simulasi fake login.<br><br>2. ini hanyalah chat bot biasa yang di buat hanya untuk belajar.<br><br>3. website ini dibuat hanyalah untuk belajar, jadi ada beberapa fitur yang belum selsai.<br><br>4. dan semua yang ada di web ini hanyalah `simulasi` dan tidak lah nyata seperti aslinya.<br><br><br>Terimakasih telah membaca text diatas. setelah ini kamu bisa menggunakan website chat bot ini, have fun 🥳";
       deksripsiLoginText.innerHTML = "Terimakasih buat kamu yang udah login<br>Fabot Chat Made With ᥫ᭡";
       
       loginPage[0].style.display = "block";
       loginPage[1].style.display = "none";
       setTimeout(() => {
        sudahLoginAlert = true;
        loginBtn1.addEventListener('click', closeLogin);
        loginPage[0].style.opacity = "1";
       }, 500);
      }, 1000);
     }
     window.scrollTo({ top: 0, behavior: 'smooth' });
     if (kataKasar.some((kata) => inputUser.includes(kata))) {
      loginPageInit = 0;
      loginInitAlert = 0;
      boxLogin.style.opacity = "1";
     }
    }
   });
 });
 window.scrollTo({ top: 0, behavior: 'smooth'});
}

function loginUndo() {
  loginPage.forEach(function (loginPage) {
   loginPage.style.display = "none";
   loginPage.style.opacity = "0";
  });
 
  if (loginPageInit === 1) {
   loginPageInit = 0;
   loginInitAlert = 0
   loginPage[0].style.display = "block";
   setTimeout(() => {
    loginPage[0].style.opacity = "1";
   }, 500);
  } else if (loginPageInit === 2) {
   loginPageInit = 1;
   loginPage[1].style.display = "block";
   setTimeout(() => {
    loginPage[1].style.opacity = "1";
   }, 500);
  } else {
   loginInitAlert = 0;
   setTimeout(() => {
    loginPage[0].style.display = "block";
    setTimeout(() => {
     loginPage[0].style.opacity = "1";
    }, 500);
    titleLoginText.innerHTML = "Wellcome To Fabot";
    infoLoginText.innerHTML = "<br><strong>Tujuan website ini di buat adalah sebagai berikut :</strong><br><br><br>1. tempat untuk belajar mengembangkan simulasi chat antara user dan bot menggunakan bahasa pemrograman dasar dari javascript yang saya pahami.<br><br>2. untuk belajar mengembangkan / memahami logika dan algoritma dalam sebuah program yang saya buat.<br><br>3. dan untuk belajar membuat fitur fitur umum yang ada dalam sebuah website.<br><br>";
   }, 1000);
  }
}

function closeLogin() {
 footerHomeText.style.opacity = "1";
 containerLogin.style.left = "-100%";
 loginPage.forEach(function (loginPage) {
  loginPage.style.display = "none";
  loginPage.style.opacity = "0";
 });
 
 if (sudahLoginAlert) {
  myAlert.style.opacity = "0";
  myAlert.style.zIndex = "100";
  blurLayer.style.zIndex = "100";
  myAlert.style.display = "block";
  blurLayer.style.display = "block";
  infoAlert.innerHTML = "PEMBERITAHUAN !";
  myAlertText.innerHTML = "login telah berhasil. silahkan klik tombol ok untuk<br>merefresh website ini.";
  btnAlert.addEventListener('click', toxicAlert);
  setTimeout(() => {
   myAlert.style.opacity = "1"
  }, 300);
 } else {/.../}
}

function openProfile() {
 container.classList.toggle('active');
 containerUserPage.classList.toggle('active');

 if (containerUserPage.classList.contains('active')) {
  blurLayer.style.display = "none";
  containerSidebar.classList.remove('active');
  menuSidebar.classList.toggle('active');
 }
 setTimeout(() => {
  menuSidebar.classList.toggle("active");
 }, 500);
 setTimeout(validationCTA, 0);
 window.scrollTo({ top: 0, behavior: 'smooth' });
}
const signBtn = document.querySelector('.signin-text');

let loaderTime;
function userValidation() {
 if (localStorage.getItem('sudahLogin') === "true") {
  genderValidation();
  loaderTime = 7500;
  signBtn.innerHTML = "Logout";
  // profile user info validation //
  
  nameUser[1].innerHTML = namaDepan;
  namaUser.innerHTML = namaDepan;
  emailUser.innerHTML = localStorage.getItem('userEmail');
  
  if (localStorage.getItem('full_login') === "true") {
   personalDataInfo[0].innerHTML = localStorage.getItem('nama_lengkap');
   personalDataInfo[1].innerHTML = localStorage.getItem('birthday');
   personalDataInfo[2].innerHTML = localStorage.getItem('myDreams');
   personalDataInfo[3].innerHTML = localStorage.getItem('kelas');
   personalDataInfo[4].innerHTML = localStorage.getItem('gender');
   personalDataInfo[5].innerHTML = localStorage.getItem('favSong');
 
   hobbyUser[5].innerHTML = localStorage.getItem('hobby1');
   hobbyUser[6].innerHTML = localStorage.getItem('hobby2');
   hobbyUser[7].innerHTML = localStorage.getItem('hobby3');
 
   bioUser.innerHTML = localStorage.getItem('userBio');
   titleWidget[1].innerHTML = `${localStorage.getItem('planet')}`;
   titleWidget[2].innerHTML = `Heart&nbsp;${umurNow}`;
   // profile user info validation //
 
   // sidebar user info profile //
   hobbyUser[1].innerHTML = localStorage.getItem('hobby1');
   hobbyUser[2].innerHTML = localStorage.getItem('hobby2');
   hobbyUser[3].innerHTML = localStorage.getItem('hobby3');
   // sidebar user info profile end //
  } else { console.log('perlu validasi') }
  setTimeout(() => {
   titleLoginText.innerHTML = "Kamu Sudah Login";
   infoLoginText.innerHTML = "terimakasih telah menggunakan website chatbot ini. nantikan update menarik selanjutnya dari chatbot ini !";
   infoLoginText.style.textAlign = "center";
   deksripsiLoginText.innerHTML = "This website is made only for learning in development a website, FaBot-Chat <u>17 July Version.</u>";

   loginPage[0].style.display = "block";
   setTimeout(() => {
    loginBtn1.addEventListener('click', closeLogin);
    loginPage[0].style.opacity = "1";
   }, 500);
  }, 1000);
 } else {
  loaderTime = 15000;
  //localStorage.clear();
 }
 //setTimeout(() => { typeText(0) }, 2000);
}

document.addEventListener("visibilitychange", function() {
 if (document.hidden) {
  infoAlert.innerHTML = "INFO";
  infoAlert.style.color = "white";
  myAlert.style.display = "block";
  blurLayer.style.display = "block";
  blurLayer.style.zIndex = "45";
  myAlertText.innerHTML = "kamu ngelakuin hal apa tadi?";
  btnAlert.addEventListener('click', closeAlert);
 }
});

const wrapperInput = document.querySelector('.wrapper');

const elem = document.documentElement;
function fullScreen() {
  if (!document.fullscreenElement) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen().catch((err) => {
        console.error('Tidak dapat memasuki mode layar penuh:', err);
      });
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

/*
window.addEventListener('load', function() {
 setTimeout(() => {
  containerHome.classList.toggle('active');
  setTimeout(() => {
   pjs.style.opacity = "1";
   containerHome.style.opacity = "1";
  }, 1000);
  loaders.style.display = "none";
 }, loaderTime);
});*/

userValidation();