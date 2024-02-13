// primary color
let html = document.querySelector('body');
let metaTheme = document.createElement('meta');
metaTheme.setAttribute('name', 'theme-color');
document.body.appendChild(metaTheme);

let containerHome = document.querySelector('.container-home');
let backgroundHome = document.querySelector('#background-home');
let forwardIcon = document.querySelector('.forward-box ion-icon');
let nemBots = document.querySelector('.nameBot');
let botStat = document.querySelector('.botStatus');
let firstDescTxt = document.querySelector('.descriptionText:first-child');
let arrowButon = document.querySelector('.arrow-button');
let userStatus = document.querySelectorAll('.statusUser');
let statusUsers = userStatus[1];
let statusDeveloper = userStatus[0];
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

function applyTheme() {
 if(theme === "basic") {
 localStorage.setItem("theme", "basic");
  var img = document.createElement('img');
  img.src = 'boticon.webp';
  metaTheme.setAttribute('content', '#180601');
  document.getElementById('imgBox').appendChild(img);
  fablue.innerHTML = "Fabot Chat";
  html.style.background = "black";
  menuSidebar.classList.remove('sidebarClr');
  infoAlert.classList.remove('colorAlert')
  imgBox.classList.remove('borderBg');
  about.classList.remove('aboutBg');
  containerInput.classList.remove('footerBg');
  arrowButon.classList.remove('menuIcon');
  nemBots.classList.remove('nameBotClr');
  botStat.classList.remove('botStatClr');
  menu.classList.remove('menuBg');
 }
 else if (theme === "blue") {
  localStorage.setItem("theme", "blue");
  var img = document.createElement('img');
  img.src = 'fablue.webp';
  metaTheme.setAttribute('content', '#1f8db5');
  document.getElementById('imgBox').appendChild(img);
  fablue.innerHTML = "Fablue Bot";
  
  clonedTimeSticker.classList.add(`chatBot`);
  html.style.background = "rgb(102,162,182)";
  menuSidebar.classList.add('sidebarClr');
  menu.classList.add('menuBg');
  infoAlert.classList.add('colorAlert');
  imgBox.classList.add('borderBg');
  about.classList.add('aboutBg');
  containerInput.classList.add('footerBg');
  arrowButon.classList.add('menuIcon');
  nemBots.classList.add('nameBotClr');
  botStat.classList.add('botStatClr');
  backgroundHome.classList.add('switch');
 }
}

function switchTheme() {
 switchThemes();
 backgroundHome.classList.toggle('switch');
 if(menu.classList.contains("menuBg")) {
  localStorage.setItem("theme", "basic");
  var img = document.createElement('img');
  img.src = 'boticon.webp';
  metaTheme.setAttribute('content', '#180601');
  document.getElementById('imgBox').appendChild(img);
  menu.classList.remove('menuBg');
 } else {
  localStorage.setItem("theme", "blue");
  var img = document.createElement('img');
  img.src = 'fablue.webp';
  metaTheme.setAttribute('content', '#1f8db5');
  document.getElementById('imgBox').appendChild(img);
  menu.classList.add('menuBg');
 }
}