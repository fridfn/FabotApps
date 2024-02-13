
let white_color = getComputedStyle(document.documentElement).getPropertyValue('--default-text');

let primary_color_icon = getComputedStyle(document.documentElement).getPropertyValue('--primary-color-icon');
let secondary_color_icon = getComputedStyle(document.documentElement).getPropertyValue('--secondary-color-icon');

let primary_color_icons = getComputedStyle(document.documentElement).getPropertyValue('--primary-color-icons');
let secondary_color_icons = getComputedStyle(document.documentElement).getPropertyValue('--secondary-color-icons');

let prim_chat_bot_color = getComputedStyle(document.documentElement).getPropertyValue('--primary-chat-bot');
let prim_chat_user_color = getComputedStyle(document.documentElement).getPropertyValue('--primary-chat-user');

let secon_chat_user_color = getComputedStyle(document.documentElement).getPropertyValue('--secondary-chat-user');
let secon_chat_bot_color = getComputedStyle(document.documentElement).getPropertyValue('--secondary-chat-bot');

let primary_shadows_bot = getComputedStyle(document.documentElement).getPropertyValue('--primary-shadow-bot');
let primary_shadows_user = getComputedStyle(document.documentElement).getPropertyValue('--primary-shadow-user');
let secondary_shadows_bot = getComputedStyle(document.documentElement).getPropertyValue('--secondary-shadow-bot');
let secondary_shadows_user = getComputedStyle(document.documentElement).getPropertyValue('--secondary-shadow-user');

let secondary_background = getComputedStyle(document.documentElement).getPropertyValue('--secondary-background-color');
let primary_background = getComputedStyle(document.documentElement).getPropertyValue('--primary-background-color');

let secondary_cards_color = getComputedStyle(document.documentElement).getPropertyValue('--secondary-cards-color');
let primary_cards_background =
getComputedStyle(document.documentElement).getPropertyValue('--primary-cards-color');

let prim_background_color = getComputedStyle(document.documentElement).getPropertyValue('--primary-background-color');
let secon_background_color = getComputedStyle(document.documentElement).getPropertyValue('--secondary-background-color');

let primary_description_color = getComputedStyle(document.documentElement).getPropertyValue('--primary-description-color');
let secondary_description_color = getComputedStyle(document.documentElement).getPropertyValue('--secondary-description-color');

let primary_text_color = getComputedStyle(document.documentElement).getPropertyValue('--primary-text-color');
let secondary_text_color = getComputedStyle(document.documentElement).getPropertyValue('--secondary-text-color');

let primary_border_color = getComputedStyle(document.documentElement).getPropertyValue('--primary-border-color');
let secondary_border_color = getComputedStyle(document.documentElement).getPropertyValue('--secondary-border-color');

let primary_title_color = getComputedStyle(document.documentElement).getPropertyValue('--primary-title-color');
let secondary_title_color = getComputedStyle(document.documentElement).getPropertyValue('--secondary-title-color');

let primary_secondary_background =
getComputedStyle(document.documentElement).getPropertyValue('--primary-secondary-background');
let secondary_secondary_background =
getComputedStyle(document.documentElement).getPropertyValue('--secondary-secondary-background');

let theme = localStorage.getItem("theme");
const isDarkMode = () => window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;


/// DEFAULT COLOR WEBSITE && CSS ROOT ///

document.documentElement.style.setProperty('--theme-chat-bot', prim_chat_bot_color);
document.documentElement.style.setProperty('--theme-chat-user', prim_chat_user_color);
document.documentElement.style.setProperty('--theme-shadow-bot', primary_shadows_bot);
document.documentElement.style.setProperty('--theme-shadow-user', primary_shadows_user);
document.documentElement.style.setProperty('--theme-background', prim_background_color);
document.documentElement.style.setProperty('--theme-color-icon', primary_color_icon);
document.documentElement.style.setProperty('--theme-color-icons', primary_color_icons);
document.documentElement.style.setProperty('--theme-cards-background', primary_cards_background);
document.documentElement.style.setProperty('--theme-cards-color', primary_cards_background);
document.documentElement.style.setProperty('--theme-text-color', primary_text_color);
document.documentElement.style.setProperty('--theme-description-color', primary_description_color);
document.documentElement.style.setProperty('--theme-border-color', primary_border_color);
document.documentElement.style.setProperty('--theme-title-color', primary_title_color);
document.documentElement.style.setProperty('--theme-secondary-primary-background', primary_secondary_background);
/// DEFAULT COLOR WEBSITE && CSS ROOT ///


function setTheme() {
 if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  localStorage.setItem('theme', 'basic');
 } else {
  localStorage.setItem('theme', 'blue');
 }
 setTimeout(applyTheme, 1000);
}


function switchThemes() {
 if (menu.classList.contains("menuBg")) {
  document.documentElement.style.setProperty('--theme-chat-bot', prim_chat_bot_color);
  document.documentElement.style.setProperty('--theme-chat-user', prim_chat_user_color);
  document.documentElement.style.setProperty('--theme-shadow-bot', primary_shadows_bot);
  document.documentElement.style.setProperty('--theme-shadow-user', primary_shadows_user);
  document.documentElement.style.setProperty('--theme-background', prim_background_color);
  document.documentElement.style.setProperty('--theme-color-icon', primary_color_icon);
  document.documentElement.style.setProperty('--theme-color-icons', primary_color_icons);
  document.documentElement.style.setProperty('--theme-cards-background', primary_cards_background);
  document.documentElement.style.setProperty('--theme-description-color', primary_description_color);
  document.documentElement.style.setProperty('--theme-border-color', primary_border_color);
  document.documentElement.style.setProperty('--theme-text-color', primary_text_color);
  document.documentElement.style.setProperty('--theme-title-color', primary_title_color);
  document.documentElement.style.setProperty('--theme-secondary-primary-background', primary_secondary_background);
 } else {
  document.documentElement.style.setProperty('--theme-secondary-primary-background', secondary_secondary_background);
  document.documentElement.style.setProperty('--theme-chat-bot', secon_chat_bot_color);
  document.documentElement.style.setProperty('--theme-chat-user', secon_chat_user_color);
  document.documentElement.style.setProperty('--theme-shadow-bot', secondary_shadows_bot);
  document.documentElement.style.setProperty('--theme-shadow-user', secondary_shadows_user);
  document.documentElement.style.setProperty('--theme-background', secon_background_color);
  document.documentElement.style.setProperty('--theme-color-icon', secondary_color_icon);
  document.documentElement.style.setProperty('--theme-color-icons', secondary_color_icons);
  document.documentElement.style.setProperty('--theme-cards-background', secondary_cards_color);
  document.documentElement.style.setProperty('--theme-description-color', secondary_description_color);
  document.documentElement.style.setProperty('--theme-border-color', secondary_border_color);
  document.documentElement.style.setProperty('--theme-text-color', secondary_text_color);
  document.documentElement.style.setProperty('--theme-title-color', secondary_title_color);
 }
 const theme = localStorage.getItem('theme');
 setupParticle(theme);
}