
async function functionApi(props) {
 const { api, data, params, again, useChat, inputText, number } = props;
// console.log({props: props})
 const getAPI = dataAPI().list;
 const resultApi = getAPI[api];
 const keyForUse = getAPI[inUseAPI].keyForUse
 const token = resultApi?.apiToken;
 const baseApiUrl = resultApi.apiUrl;
 const getParamsOBJ = resultApi.apiParams;
 const useParams = useChat ? keyForUse.find((kata) => jawabanValue.includes(kata)) : getParamsOBJ[params];
 const getParams = getParamsOBJ[useParams];
 
 const typeRes = resultApi.typeResponse;
 const getConfig = resultApi.configFunction
 const getDestruction = getConfig.getDestruction;
 const bracket = getConfig.bracketConfig;
 const isConfigUrl = getConfig.isConfigUrl;
 const useTranslate = getConfig.translate;
// console.log({getParams: getParams, useParams});
 
 let codeCountry;
 const arrCountryCode = [];
 const arrProbabilityCountry = [];
 
 let splitedLang, sourceLang, targetLang;
 splitedLang = (getParamsOBJ[params]?.split('-').map(item => item.trim())) || (getParams?.split('-').map(item => item.trim()));
 sourceLang = api === 'translate_api' ? splitedLang[0]: undefined;
 targetLang = api === 'translate_api' ? splitedLang[1]: undefined;
 
 const configUrl = {
  'number_api': `${baseApiUrl}${data}/${getParams}`,
  'cats_api': `${baseApiUrl}${getParams}&limit=1&api_key=${token}`,
  'translate_api': inUseAPI === 'translate_api' ? `${baseApiUrl}=${sourceLang}&tl=${targetLang}&dt=t&q=${encodeURIComponent(inputText)}` : `${baseApiUrl}=${sourceLang}&tl=${targetLang}&dt=t&q=${encodeURIComponent(data)}`,
  'gender_api': `${baseApiUrl}=${inputText}`,
  'guess_name_api': `${baseApiUrl}=${inputText}`,
  'hadits_api': `${baseApiUrl}/${useParams}/${number}`,
  'apod_api': `${baseApiUrl}=${token}&date=${data}`
 }
 
 const useUrl = isConfigUrl ? configUrl[api] : baseApiUrl ;
 const validationArr = ['random', 'randoms'];
 const validationKey = validationArr.some((kata) => useParams?.includes(kata)) ? validationArr.some((kata) => inputText.includes(kata)) : false ;
// console.log({ getParamsOBJ: getParamsOBJ, getParams: getParams, paeams: params, url: configUrl[api], splitedLang:getParamsOBJ[params], validationKey: validationKey });
 
 try {
  const response = await fetch(useUrl);
  response.ok ? console.log('API OK') : console.log('failed to fetch');
  
  const responseMethods = {
   'text': response.text.bind(response),
   'json': response.json.bind(response)
  }
  
  const keysConfig = {
   'cats_api': getDestruction.split(', ').map(item => item.trim()),
   'gender_api': getDestruction.split(', ').map(item => item.trim()),
   'guess_name_api': getDestruction.split(', ').map(item => item.trim()),
   'hadits_api': getDestruction.split(', ').map(item => item.trim()),
   'apod_api': getDestruction.split(', ').map(item => item.trim()),
  }
  
  const result = await responseMethods[typeRes]();
  //console.log(result)
  const arrTranslate = again ? result[0] : null ;
 
  const storedData = {};
  const temporaryResult = {};
  const translatedResult = {};
  temporaryResult.data = result;
  
  const useBracket = isConfigUrl ? eval('temporaryResult' + bracket) : console.log({ not_use_bracket: true });
  //console.log({ useBracket: useBracket });
  
  if (getDestruction && typeof getDestruction === 'string' && getDestruction.trim().length > 0) {
   const keys = keysConfig[api];
   
   if (keys) {
    if (!validationKey) {
     keys.forEach(key => {
      if (key in useBracket) {
       if (api === 'cats_api') {
        const urlIMG = temporaryResult["data"][0].url;
         storedData.url = urlIMG;
         
         storedData.translate  = {
          title: useBracket["temperament"],
          description: useBracket["description"]
         }
       } else if (api === 'guess_name_api'){
        const getCountry = temporaryResult["data"]["country"];
        
        for (let i = 0; i < getCountry.length; i++) {
         const getData = getCountry[i];
         const probability = (getData.probability * 100).toFixed(2) + '%';
         
         arrCountryCode.push(getData.country_id);
         arrProbabilityCountry.push(probability);
        }
       } else if (api === 'hadits_api') {
        const getContents = temporaryResult["data"]["data"]["contents"];
        
         for (let item in getContents) {
          storedData[item] = getContents[item];
         }
       } else if (api === 'apod_api') {
        storedData.translate  = {
         description: useBracket["explanation"],
         title: useBracket["title"]
        }
       }
       storedData[key] = useBracket[key];
      } else {
       console.log(storedData[key], 'not found');
      }
     });
    }
   }
   
   const toTranslateText = storedData?.translate;
   
   for (let text in toTranslateText) {
    translatedResult[text] = toTranslateText[text];
   }
   
   useTranslate ? functionApi({ api: 'translate_api' ,data: [translatedResult.title, translatedResult.description], params: 'indonesia', again: true, useChat: false }) : undefined;
   
   codeCountry = inUseAPI === 'guess_name_api' ? arrCountryCode?.map(codeToCountry): 'tidak ada';
   
   const chatsParams = {
    number_api: `fakta menarik angka ${nilaiAngka} di kategori ${useParams} adalah sebagai berikut :<br><br>"${useBracket}"`,
    cats_api: `Nama kucing  : ${storedData.name}<br>Nama lain       : ${storedData.alt_names ? storedData.alt_names : 'tidak ada'}<br>Asal negara    : ${storedData.origin}<br>Umur kucing   : ${storedData.life_span} tahun`,
    gender_api: `Nama : ${storedData.name}<br><br>${storedData.gender === 'male' ? 'Laki Laki' : 'Perempuan'} : ${(storedData.probability * 100).toFixed(0)}%<br>${storedData.gender === 'male' ? 'Perempuan' : 'Laki Laki'} : ${(100 - storedData.probability * 100).toFixed(0)}%<br><br>Jadi aku tebak kamu adalah seorang ${storedData.gender === 'male' ? 'laki laki' : 'perempuan'}`,
    //translate_api: `translate : ${getParams}<br><br>text translate : ${result[0][0][1]}<br><br>hasil translate : ${useBracket}`,
    guess_name_api : `Nama : ${storedData.name}<br><br>Berikut adalah presentase dimana nama kamu banyak di gunakan di negara lain : <br><br>${codeCountry[0]} : ${arrProbabilityCountry[0]}<br>${codeCountry[1]} : ${arrProbabilityCountry[1]}<br>${codeCountry[2]} : ${arrProbabilityCountry[2]}<br>${codeCountry[3]} : ${arrProbabilityCountry[3]}<br>${codeCountry[4] ? codeCountry[4] + ' : ' + arrProbabilityCountry[4] : ''}<br><br>Jadi nama kamu adalah nama yang paling umum di gunakan di negara ${codeCountry[0]}`,
    hadits_api: `${storedData.arab}<br><br>Artinya :<br>${storedData.id}<br><br>${storedData.name} [${storedData.number} : ${storedData.available}]`,
    apod_api: storedData.date ? `Apod Planetary / Galaxy result :<br><br>Tanggal : ${storedData.date}<br>Judul : ${storedData.title}<br><br>Berikut adalah penjelasan mengenai apod tersebut.` : 'Maaf, tolong ketikan tanggal dengan benar'
   }
   
   setTimeout(() => {
    startStored = true;
    if ((storedData && storedData.url) || (result[0] && result[0].url)) {
     stickers.classList.add('image');
     imgSticker.src = storedData.url || result[0].url;
     document.querySelector("#contentPertanyaan").appendChild(stickers.cloneNode(true));
    }
    
    if (!validationKey && useChat) {
     clonedTextPertanyaan.innerHTML = chatsParams[inUseAPI] || `TRANSLATE TO : ${getParams}<br><br>TEXT TRANSLATE : ${result[0][0][1]}<br><br>HASIL TRANSLATE : ${useBracket}`;
     document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
    }
    
    if (arrTranslate) {
     let delay = 0;
     for (let key of arrTranslate) {
      delay += 2700;
      startStored = true;
      
      setTimeout(() => {
       clonedTextPertanyaan.innerHTML = `${key[0]}`;
       
       if (inUseAPI === 'number_api') return;
       if (useBracket === ',') return;
       document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
      }, delay);
     }
    }
   }, 4000);
   //console.log({storedData: storedData});
  } else {
   //console.log({INFO : 'this api not use getDestruction'});
  }
 } catch (error) {
  console.log({ ERROR: error });
 }
}

async function getNumberFact(props) {
 const { number, type } = props;
 const listAPI = dataAPI().list;
 const getApiParams = listAPI[inUseAPI].apiParams;
 const url = `http://numbersapi.com/${number}/${getApiParams[type]}`;
 
 try {
  const response = await fetch(url);
  const data = await response.text();
  const factText = data;
  await functionApi({api: 'translate_api' ,data: factText, params: 'indonesia', again: true, useChat: true});
  } catch(error) {
   console.error('Errors:', error);
   
   setTimeout(() => {
    clonedTextPertanyaan.innerHTML = `maaf gagal mendapatkan fakta angka ${number} di kategori ${type}, tolong coba lagi`;
    
    document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
   }, 4000);
  };
}


 const listPlaylist = JSON.parse(localStorage.getItem('listPlaylist'));
 let endIndexList = listPlaylist ? listPlaylist["endIndexList"] : 8;
 let listOfPlaylist = 0;
 let startIndexList = listPlaylist ? listPlaylist["startIndexList"] : 0;
 let previousStates = listPlaylist ? listPlaylist["previousStates"]: [];
 
function functionPlaylist(props) {
   const { playlist, type } = props;
   const usePlaylist = getPlaylist(playlist);
   const getList = usePlaylist["list"];
   const getLink = usePlaylist["link"];
   
   const setNumber = btnChatAction.querySelector('.wrapper-btn-chat .items-btn-chat .description_text');
   const setItem = btnChatAction.querySelector('.wrapper-btn-chat .items-btn-chat');
   const parentItem = btnChatAction.querySelector('.wrapper-btn-chat');
   
   startStored = true;
   parentItem.innerHTML = ''; 
   
   let adjustedEndIndexList = Math.min(endIndexList, getList.length);
   
   for (let i = startIndexList; i < adjustedEndIndexList; i++) {
    if (type !== 'random') {
     const params = JSON.stringify({ link: getLink[i], cases: type, list: getList[i] });
     
     listOfPlaylist = `${i + 1}`;
     if (playlist !== 'all_songs') {
      setNumber.innerHTML = `${i + 1}`;
      setItem.setAttribute('onclick', `handleActionButtonChat(${params})`);
      parentItem.appendChild(setItem.cloneNode(true));
     }
     
     let playlistHTML = `Hasil ${endIndexList - 8 + 1} - ${listOfPlaylist} dari ${getList.length}<br>Berikut adalah playlist ${usePlaylist.title} :<br><br>`;
     for (let i = startIndexList; i < adjustedEndIndexList; i++) {
       playlistHTML += `${i + 1}. ${getList[i]}<br>`;
     }
     playlistHTML += playlist !== 'all_songs' ? `<br>Klik nomor di bawah sesuai nomor lagu yang kamu inginkan untuk memutarnya di spotify`: `<br>Klik tombol di bawah ini next / undo untuk melihat list list lagu.`;
     
     clonedTextPertanyaan.innerHTML = playlistHTML;
    }
   }
   switch(type) {
   case 'random':
    const getResult = Math.floor(Math.random() * getList.length);
    const params = JSON.stringify({ link: getLink[getResult], cases: type, list: getList[getResult] });
    
    const disabledButton = btnChatAction.querySelectorAll('.wrapper-cta .wrapper-cta-chat .items-btn-chat');
    
    setItem.classList.add('random');
    setNumber.innerHTML = `Open in Spotify`;
    setItem.setAttribute('onclick', `handleActionButtonChat(${params})`);
    parentItem.appendChild(setItem.cloneNode(true));
    
    setTimeout(() => {
     disabledButton.forEach(button => button.style.display = 'none');
     clonedTextPertanyaan.innerHTML = ` Playlist random untukmu :<br><br>${getList[getResult]}`;
     
     document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     document.querySelector("#contentPertanyaan").appendChild(btnChatAction.cloneNode(true));
    }, 1000);
   break;
   
   case 'list':
    setTimeout(() => {
     const nextButton = btnChatAction.querySelector('.wrapper-cta .wrapper-cta-chat #nextList');
     const undoButton = btnChatAction.querySelector('.wrapper-cta .wrapper-cta-chat #undoList');
     
     if (adjustedEndIndexList >= getList.length) {
      nextButton.setAttribute('onclick', `notificationPopup({ icon: 'alert', text: 'tidak ada list lagu lagi' })`);
      undoButton.setAttribute('onclick', `handleUndo(${JSON.stringify(props)})`);
      setTimeout(() => {
       endIndexList = 8;
       startIndexList = 0;
      }, 1000);
     } else {
      undoButton.addEventListener('click', (event) => handleUndo(event, props));
      nextButton.addEventListener('click', (event) => handleListing(event, props));
      
      nextButton.setAttribute('onclick', `handleListing(${JSON.stringify(props)})`);
      undoButton.setAttribute('onclick', `handleUndo(${JSON.stringify(props)})`);
      
      notif.play();
     }
     
     localStorage.setItem('listPlaylist', JSON.stringify({ endIndexList, startIndexList, previousStates }));
     
     const previousButton = btnChatAction.querySelectorAll('.wrapper-cta .wrapper-cta-chat .items-btn-chat');
     const previousBtnList = btnChatAction.querySelectorAll('.wrapper-cta .wrapper-btn-chat .items-btn-chat');
     
     previousButton.forEach(button => button.disabled = false);
     
     document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     document.querySelector("#contentPertanyaan").appendChild(btnChatAction.cloneNode(true));
    }, 1000);
   break;
   
   default:
    clonedTextPertanyaan.innerHTML = `upps, tolong ketikan type yang di inginkan :<br><br>1. next : menampilkan semua list lagu<br>2. random : memberikan lagu random<br>3. list : menampilkan list lagu<br><br>contoh penggunaan 'study list'`;
     
    document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
    return;
  }
}

function getPlaylist(json) {
 const getJson = playlistJSON().songs;
 const getPlaylist = getJson[json];
 
 return { list, title } = getPlaylist;
}

function handleListing(props) {
  const currentNextButton = event.currentTarget;
  previousStates.push({ startIndexList, endIndexList });
  
  const undoButtons = btnChatAction.querySelector('.wrapper-cta .wrapper-cta-chat #undoList');
  const undoButton = currentNextButton.previousElementSibling.previousElementSibling;
  const wrapperBtnChat = currentNextButton.closest('.wrapper-cta').querySelector('.wrapper-btn-chat');
  const previousButton = wrapperBtnChat.querySelectorAll('.items-btn-chat');
  previousButton.forEach(button => button.disabled = true);
  
  undoButton.disabled = true;
  previousButton.disabled = true;
  currentNextButton.disabled = true;
  undoButton.setAttribute('onclick', `handleUndo(${JSON.stringify(props)})`);
  endIndexList += 8;
  startIndexList += 8;
  
  functionPlaylist(props, 'next');
  const deleteBtn = event.currentTarget;
 const button = document.getElementById('contentPertanyaan').lastElementChild;
 const getChat = deleteBtn.closest('#contentPertanyaan').querySelectorAll('#chatPertanyaan');
 const length = getChat.length;
 
 const containerChat = document.querySelector("#wrapper-item-chat #contentPertanyaan");
 containerChat.removeChild(button);
 setTimeout(() => {notif.play()}, 950);
 containerChat.removeChild(getChat[length - 1]);
}

function handleUndo(props) {
 const undoButton = btnChatAction.querySelector('.wrapper-cta .wrapper-cta-chat #undoList');
 
 if (previousStates.length > 0) {
  const previousState = previousStates.pop();
  const currentUndoButton = event.currentTarget;
  const nextButton = currentUndoButton.nextElementSibling.nextElementSibling;
  
  startIndexList = previousState.startIndexList;
  nextButton.disabled = true;
  endIndexList = previousState.endIndexList;
  currentUndoButton.disabled = true;
  
  const wrapperBtnChat = currentUndoButton.closest('.wrapper-cta').querySelector('.wrapper-btn-chat');
  const previousButton = wrapperBtnChat.querySelectorAll('.items-btn-chat');
  previousButton.forEach(button => button.disabled = true);
  
  functionPlaylist(props, 'undo');
  setTimeout(() => {notif.play()}, 950);
  undoButton.setAttribute('onclick', `handleUndo(${JSON.stringify(props)})`);
  
  const deleteBtn = event.currentTarget;
 const button = document.getElementById('contentPertanyaan').lastElementChild;
 const getChat = deleteBtn.closest('#contentPertanyaan').querySelectorAll('#chatPertanyaan');
 const length = getChat.length;
 
 const containerChat = document.querySelector("#wrapper-item-chat #contentPertanyaan");
 containerChat.removeChild(button);
 containerChat.removeChild(getChat[length - 1]);
 } else {
  undoButton.setAttribute('onclick', `notificationPopup({ icon: 'alert', text: 'tidak dapat melakukan aksi' })`);
 }
}

function disableButton(event) {
 const buttonsToDisable = btnChatAction.querySelectorAll(`.wrapper-btn-chat .items-btn-chat`);
 
  buttonsToDisable.forEach((button, index) => {
   button.disabled = true;
   button.setAttribute('onclick', `notificationPopup({ icon: 'alert', text: 'tidak dapat melakukan aksi' })`);
  });
}

function deleteListChat() {
 const deleteBtn = event.currentTarget;
 const button = document.getElementById('contentPertanyaan').lastElementChild;
 const getChat = deleteBtn.closest('#contentPertanyaan').querySelectorAll('#chatPertanyaan');
 const length = getChat.length;
 
 const containerChat = document.querySelector("#wrapper-item-chat #contentPertanyaan");
 containerChat.removeChild(button);
 containerChat.removeChild(getChat[length - 1]);
 
 const containerAllChat = document.querySelector("#wrapper-item-chat");
 const allChat = containerAllChat.lastElementChild;
 const storedChat = JSON.parse(localStorage.getItem('historyChat'));
 storedChat.chat = allChat.innerHTML;
 localStorage.setItem('historyChat', JSON.stringify(storedChat));
 
 setTimeout(() => document.querySelector('.pathchat').scrollIntoView({ behavior: 'smooth', block: 'end' }) , 270);
}


function handleActionButtonChat(props) {
 const { link, list, cases } = props;
 window.location.href = link;
}

function codeToCountry(code) {
  const negaraDict = {
   // Asia
   "AF": "Afghanistan", "AM": "Armenia", "AZ": "Azerbaijan", "BH": "Bahrain",
   "BD": "Bangladesh", "BT": "Bhutan", "BN": "Brunei Darussalam", "KH": "Cambodia",
   "CN": "China", "CY": "Cyprus", "GE": "Georgia", "IN": "India", "TW": "Taiwan",
   "ID": "Indonesia", "IR": "Iran", "IQ": "Iraq", "IL": "Israel",
   "JP": "Japan", "JO": "Jordan", "KZ": "Kazakhstan", "KW": "Kuwait", "HK": "Hong Kong",
   "KG": "Kyrgyzstan", "LA": "Laos", "LB": "Lebanon", "MY": "Malaysia",
   "MV": "Maldives", "MN": "Mongolia", "MM": "Myanmar", "NP": "Nepal",
   "KP": "North Korea", "OM": "Oman", "PK": "Pakistan", "PS": "Palestine",
   "PH": "Philippines", "QA": "Qatar", "SA": "Saudi Arabia", "SG": "Singapore",
   "KR": "South Korea", "LK": "Sri Lanka", "SY": "Syria", "TJ": "Tajikistan",
   "TH": "Thailand", "TL": "Timor-Leste", "TR": "Turkey", "TM": "Turkmenistan",
   "AE": "United Arab Emirates", "UZ": "Uzbekistan", "VN": "Vietnam", "YE": "Yemen",

   // Eropa
   "AL": "Albania", "AD": "Andorra", "AT": "Austria", "BY": "Belarus",
   "BE": "Belgium", "BA": "Bosnia and Herzegovina", "BG": "Bulgaria", "HR": "Croatia",
   "CY": "Cyprus", "CZ": "Czech Republic", "DK": "Denmark", "EE": "Estonia",
   "FI": "Finland", "FR": "France", "GE": "Georgia", "DE": "Germany",
   "GR": "Greece", "HU": "Hungary", "IS": "Iceland", "IE": "Ireland",
   "IT": "Italy", "LV": "Latvia", "LI": "Liechtenstein", "LT": "Lithuania",
   "LU": "Luxembourg", "MT": "Malta", "MD": "Moldova", "MC": "Monaco",
   "ME": "Montenegro", "NL": "Netherlands", "MK": "North Macedonia", "NO": "Norway",
   "PL": "Poland", "PT": "Portugal", "RO": "Romania", "RU": "Russia",
   "SM": "San Marino", "RS": "Serbia", "SK": "Slovakia", "SI": "Slovenia",
   "ES": "Spain", "SE": "Sweden", "CH": "Switzerland", "TR": "Turkey",
   "UA": "Ukraine", "GB": "United Kingdom", "VA": "Vatican City",

   // Afrika
   "DZ": "Algeria", "AO": "Angola", "BJ": "Benin", "BW": "Botswana",
   "BF": "Burkina Faso", "BI": "Burundi", "CV": "Cape Verde", "CM": "Cameroon",
   "CF": "Central African Republic", "TD": "Chad", "KM": "Comoros", "CG": "Congo",
   "CD": "Congo (Democratic Republic)", "CI": "Côte d'Ivoire", "DJ": "Djibouti", "EG": "Egypt",
   "GQ": "Equatorial Guinea", "ER": "Eritrea", "SZ": "Eswatini", "ET": "Ethiopia",
   "GA": "Gabon", "GM": "Gambia", "GH": "Ghana", "GN": "Guinea",
   "GW": "Guinea-Bissau", "KE": "Kenya", "LS": "Lesotho", "LR": "Liberia",
   "LY": "Libya", "MG": "Madagascar", "MW": "Malawi", "ML": "Mali",
   "MR": "Mauritania", "MU": "Mauritius", "MA": "Morocco", "MZ": "Mozambique",
   "NA": "Namibia", "NE": "Niger", "NG": "Nigeria", "RW": "Rwanda",
   "ST": "São Tomé and Príncipe", "SN": "Senegal", "SC": "Seychelles", "SL": "Sierra Leone",
   "SO": "Somalia", "ZA": "South Africa", "SS": "South Sudan", "SD": "Sudan",
   "TZ": "Tanzania", "TG": "Togo", "TN": "Tunisia", "UG": "Uganda",
   "ZM": "Zambia", "ZW": "Zimbabwe",

   // Amerika Utara
   "AG": "Antigua and Barbuda", "BS": "Bahamas", "BB": "Barbados", "BZ": "Belize",
   "CA": "Canada", "CR": "Costa Rica", "CU": "Cuba", "DM": "Dominica",
   "DO": "Dominican Republic", "SV": "El Salvador", "GD": "Grenada", "GT": "Guatemala",
   "HT": "Haiti", "HN": "Honduras", "JM": "Jamaica", "MX": "Mexico",
   "NI": "Nicaragua", "PA": "Panama", "KN": "Saint Kitts and Nevis", "LC": "Saint Lucia",
   "VC": "Saint Vincent and the Grenadines", "TT": "Trinidad and Tobago", "US": "United States", "RE": "Reunion",

   // Amerika Selatan
   "AR": "Argentina", "BO": "Bolivia", "BR": "Brazil", "CL": "Chile",
   "CO": "Colombia", "EC": "Ecuador", "GY": "Guyana", "PY": "Paraguay",
   "PE": "Peru", "SR": "Suriname", "UY": "Uruguay", "VE": "Venezuela",

   // Oseania
   "AU": "Australia", "FJ": "Fiji", "KI": "Kiribati", "MH": "Marshall Islands",
   "FM": "Micronesia", "NR": "Nauru", "NZ": "New Zealand", "PW": "Palau",
   "PG": "Papua New Guinea", "WS": "Samoa", "SB": "Solomon Islands", "TO": "Tonga",
   "TV": "Tuvalu", "VU": "Vanuatu",

   // Antartika
   "AQ": "Antarctica"
  };

  return negaraDict[code.toUpperCase()] || "Kode negara tidak ditemukan";
}
let userAgent = navigator.userAgent;
console.log(userAgent);
