
async function functionApi(props) {
 const { api, data, params, again, useChat, inputText } = props;
 console.log({props: props})
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
 console.log({getParams: getParams, useParams})
 
 let splitedLang, sourceLang, targetLang;
 splitedLang = getParamsOBJ[params]?.split('-').map(item => item.trim());
 sourceLang = api === 'translate_api' ? splitedLang[0]: undefined;
 targetLang = api === 'translate_api' ? splitedLang[1]: undefined;
 
 const configUrl = {
  'number_api': `${baseApiUrl}${data}/${getParams}`,
  'cats_api': `${baseApiUrl}${getParams}&limit=1&api_key=${token}`,
  'translate_api': `${baseApiUrl}=${sourceLang}&tl=${targetLang}&dt=t&q=${encodeURIComponent(data)}`,
  'gender_api': `${baseApiUrl}=${inputText}`,
  'guess_name_api': `${baseApiUrl}=${data}`,
  'hadits_api': `${baseApiUrl}/${data}`,
  'apod_api': `${baseApiUrl}=${data}`
 }
 
 const useUrl = isConfigUrl ? configUrl[api] : baseApiUrl ;
 const validationArr = ['random', 'randoms'];
 const validationKey = validationArr.some((kata) => useParams.includes(kata)) ? validationArr.some((kata) => inputText.includes(kata)): false ;
 console.log({ getParamsOBJ: getParamsOBJ, getParams: getParams, paeams: params, url: configUrl[api], splitedLang:getParamsOBJ[params], validationKey: validationKey });
 
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
  console.log(result)
  const arrTranslate = again ? result[0] : null ;
 
  const storedData = {};
  const temporaryResult = {};
  const translatedResult = {};
  temporaryResult.data = result;
  
  const useBracket = isConfigUrl ? eval('temporaryResult' + bracket) : console.log({ not_use_bracket: true });
  console.log({ useBracket: useBracket });
  
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
         
         storedData[`data${i}`] = {
          country_id: getData.country_id,
          probability: (getData.probability * 100).toFixed(2) + '%',
         }
        }
       } else if (api === 'hadits_api') {
        const getContents = temporaryResult["data"]["data"]["contents"];
        
         for (let item in getContents) {
          storedData[item] = getContents[item];
         }
       } else if (api === 'apod_api') {
        storedData.translate  = {
         explanation: useBracket["explanation"],
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
   
   if (useTranslate) {
    const toTranslateText = storedData.translate;
    
    for (let text in toTranslateText) {
     translatedResult[text] = toTranslateText[text];
    }
    
    console.log({inUseAPI:inUseAPI})
    functionApi({api: 'translate_api' ,data: [translatedResult.title, translatedResult.description], params: 'indonesia', again: true, useChat: false});
   }
   
   const chatsParams = {
    number_api: `fakta menarik angka ${nilaiAngka} di kategori ${useParams} adalah sebagai berikut :<br><br>"${useBracket}"`,
    cats_api: `Nama kucing  : ${storedData.name}<br>Nama lain       : ${storedData.alt_names ? storedData.alt_names : 'tidak ada'}<br>Asal negara    : ${storedData.origin}<br>Umur kucing   : ${storedData.life_span} tahun`,
    gender_api: `Nama : ${storedData.name}<br><br>${storedData.gender === 'male' ? 'Laki Laki' : 'Perempuan'} : ${(storedData.probability * 100).toFixed(0)}%<br>${storedData.gender === 'male' ? 'Perempuan' : 'Laki Laki'} : ${(100 - storedData.probability * 100).toFixed(0)}%<br><br>Jadi aku tebak kamu adalah seorang ${storedData.gender === 'male' ? 'laki laki' : 'perempuan'}`,
    //translateapi: `translate : ${getParams}<br><br>text translate : ${result[0][0][1]}<br><br>hasil translate : ${useBracket}`,
    guess_name_api: 'guess_name_api'
   }
   
   setTimeout(() => {
    startStored = true;
    if ((storedData && storedData.url) || (result[0] && result[0].url)) {
     stickers.classList.add('image');
     imgSticker.src = storedData.url || result[0].url;
     document.querySelector("#contentPertanyaan").appendChild(stickers.cloneNode(true));
    }
    
    if (!validationKey && useChat) {
     clonedTextPertanyaan.innerHTML = chatsParams[inUseAPI];
     document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
    }
    
    console.log({arrTranslate:arrTranslate})
    if (arrTranslate) {
     for (let key of arrTranslate) {
      startStored = true;
       clonedTextPertanyaan.innerHTML = `${key[0]}`;
       
       if (useBracket === ',') return;
       document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     }
    }
   }, 4000);
   
   console.log({storedData: storedData});
  } else {
   console.log({INFO : 'this api not use getDestruction'});
  }
 } catch (error) {
  console.log({ ERROR: error });
 }
}
// 
// functionApi({
//  api: 'cats_api',
//  data: 73,
//  params: 'breeds',
//  again: false,
//  useChat: false
// });

async function getNumberFact(number, type) {
 const url = `http://numbersapi.com/${number}/${type}`;
 
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