const c = console.log.bind(console);

const defaultTheme = {
 textColor: '#02ffc4', // 
 iconColor: '#02ffc4', //  
 backgroundPY: '0',
 cardsColor: 'black', // black
 positionAnimBg: '50',
 borderColor: '#ff0000', // 
 backgroundColor: 'black', // red
 backgroundImage: 'url("/bg-home1.jpg")',
 backgroundAnim: 'animate-background.mp4'
}

const themeRed = {
 textColor: '#02ffc4', // 
 iconColor: '#02ffc4', // 
 borderColor: '#ff0000', //red
 cardsColor: 'black', //
 backgroundPY: '0',
 positionAnimBg: '-85px',
 backgroundColor: 'white',
 backgroundImage: 'url("/animate-background.gift")',
 backgroundAnim: 'animate-background2.mp4'
}

const themeBlue = {
 textColor: '#516fff',
 iconColor: '#516fff', // blue
 cardsColor: 'blue',
 backgroundPY: '100%',
 positionAnimBg: '50',
 borderColor: '#00ffff',// cyan
 backgroundColor: 'white',
 backgroundImage: 'url("/bg-home2.jpg")',
 backgroundAnim: 'animate-background3.mp4'
}

const themeYellow = {
 textColor: 'yellow',
 iconColor: '#828200', // yellow dark
 cardsColor: 'yellow',
 backgroundPY: '50%',
 positionAnimBg: '50',
 borderColor: '#feff00', // yellow
 backgroundColor: 'white',
 backgroundImage: 'url("/bg-home3.jpg")',
 backgroundAnim: ''
}


localStorage.setItem('defaultTheme', JSON.stringify(defaultTheme));

 const videoSource = document.createElement('source');
 const video = document.querySelector('.animate-background');
 videoSource.type = "video/mp4";
 video.appendChild(videoSource);

(function() {
 const savedTheme = JSON.parse(localStorage.getItem('setTheme'));
 const setTheme = (savedTheme) ? JSON.parse(localStorage.getItem('setTheme')) : JSON.parse(localStorage.getItem('defaultTheme'));
 
 const bgAnimate = setTheme.backgroundAnim;
 videoSource.src = bgAnimate;
 video.load();
 
 Object.entries(setTheme).forEach(([subject, color]) => {
  document.documentElement.style.setProperty(`--${subject}`, color);
 });
})();
 
function switchTheme(color) {
 setupParticle(color);
 localStorage.setItem('setTheme', JSON.stringify(color));
 
 const bgAnimate = color.backgroundAnim;
 videoSource.src = bgAnimate;
 video.load();
 
  Object.entries(color).forEach(([subject, color]) => {
   document.documentElement.style.setProperty(`--${subject}`, color);
   c(subject)
  });
}
 