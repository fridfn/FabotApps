const c = console.log.bind(console);

const defaultModePJS = 'snow';

const defaultTheme = {
 textColor: '#02ffc4',
 iconColor: '#02ffc4',
 backgroundPY: '0',
 cardsColor: 'black',
 positionAnimBg: '50',
 borderColor: '#ff0000',
 backgroundColor: 'black',
 backgroundImage: 'url("/bg-home1.jpg")',
 backgroundAnim: 'animate-background.mp4'
}

const themeRed = {
 textColor: '#02ffc4',
 iconColor: '#02ffc4',
 borderColor: '#ff0000',
 cardsColor: 'black',
 backgroundPY: '0',
 positionAnimBg: '-85px',
 backgroundColor: 'white',
 backgroundImage: 'url("/animate-background.gift")',
 backgroundAnim: 'animate-background2.mp4'
}

const themeBlue = {
 textColor: '#516fff',
 iconColor: '#516fff',
 cardsColor: 'blue',
 backgroundPY: '100%',
 positionAnimBg: '50',
 borderColor: '#00ffff',
 backgroundColor: 'white',
 backgroundImage: 'url("/bg-home2.jpg")',
 backgroundAnim: 'animate-background3.mp4'
}

const themeYellow = {
 textColor: 'yellow',
 iconColor: '#828200',
 cardsColor: 'yellow',
 backgroundPY: '50%',
 positionAnimBg: '50',
 borderColor: '#feff00',
 backgroundColor: 'white',
 backgroundImage: 'url("/bg-home3.jpg")',
 backgroundAnim: ''
}


localStorage.setItem('defaultTheme', JSON.stringify(defaultTheme));
localStorage.setItem('defaultModePJS', defaultModePJS);

 const videoSource = document.createElement('source');
 const video = document.querySelector('.animate-background');
 videoSource.type = "video/mp4";
 video.appendChild(videoSource);


 
function switchTheme(color) {
 setupParticle(color);
 localStorage.setItem('setTheme', JSON.stringify(color));
 
 const bgAnimate = color.backgroundAnim;
 videoSource.src = bgAnimate;
 video.load();
 
  Object.entries(color).forEach(([subject, color]) => {
   document.documentElement.style.setProperty(`--${subject}`, color);
  });
}
