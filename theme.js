const c = console.log.bind(console);

const defaultTheme = {
 textColor: '#02ffc4', // 
 iconColor: '#02ffc4', //  
 borderColor: '#ff0000', // 
 cardsColor: 'black', // black
 backgroundColor: 'black', // red
 backgroundPY: '0',
 backgroundImage: 'url("/bg-home1.jpg")'
}

const themeRed = {
 textColor: '#02ffc4', // 
 iconColor: '#02ffc4', // 
 borderColor: '#ff0000', //red
 cardsColor: 'black', //
 backgroundPY: '0',
 backgroundColor: 'white',
 backgroundImage: 'url("/bg-home1.jpg")'
}

const themeBlue = {
 textColor: '#516fff',
 iconColor: '#516fff', // blue
 cardsColor: 'blue',
 backgroundPY: '100%',
 borderColor: '#00ffff',// cyan
 backgroundColor: 'white',
 backgroundImage: 'url("/bg-home2.jpg")'
}

const themeYellow = {
 textColor: 'yellow',
 iconColor: '#828200', // yellow dark
 cardsColor: 'yellow',
 backgroundPY: '50%',
 borderColor: '#feff00', // yellow
 backgroundColor: 'white',
 backgroundImage: 'url("/bg-home3.jpg")'
}


localStorage.setItem('defaultTheme', JSON.stringify(defaultTheme));

(function() {
 const savedTheme = JSON.parse(localStorage.getItem('setTheme'));
 
 const setTheme = (savedTheme) ? JSON.parse(localStorage.getItem('setTheme')) : JSON.parse(localStorage.getItem('defaultTheme'));
 
 Object.entries(setTheme).forEach(([subject, color]) => {
  document.documentElement.style.setProperty(`--${subject}`, color);
 });
})();

function switchTheme(color) {
 setupParticle(color);
 localStorage.setItem('setTheme', JSON.stringify(color));
 
  Object.entries(color).forEach(([subject, color]) => {
   document.documentElement.style.setProperty(`--${subject}`, color);
  });
}