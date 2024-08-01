let repeatCallApi = 0;

async function functionApi(api, values) {
 const getAPI = dataAPI().list;
 const resultApi = getAPI[api];
 const token = resultApi.apiToken;
 const baseApiUrl = resultApi.apiUrl;
 const getParams = resultApi.apiParams.one;
 const value = 'Fahira';
 
 const typeRes = resultApi.typeResponse;
 const getConfig = resultApi.configFunction
 const getDestruction = getConfig.getDestruction;
 const bracket = getConfig.bracketConfig;
 const isConfigUrl = getConfig.isConfigUrl;
 const useTranslate = getConfig.translate;
 
 let splitedLang, sourceLang, targetLang;
 
 switch (api) {
  case 'translate_api':
   const text = values;
   splitedLang = getParams.split('-').map(item => item.trim());
   sourceLang = splitedLang[0];
   targetLang = splitedLang[1];
   break;
   default:
 }
 
 
 const configUrl = {
  'number_api': `${baseApiUrl}${value}/${getParams}`,
  'cats_api': `${baseApiUrl}${getParams}&limit=1&api_key=${token}`,
  'translate_api': `${baseApiUrl}=${sourceLang}&tl=${targetLang}&dt=t&q=${encodeURIComponent(values)}`,
  'gender_api': `${baseApiUrl}=${value}`,
  'guess_name_api': `${baseApiUrl}=${value}`,
  'hadits_api': `${baseApiUrl}/${value}`,
  'apod_api': `${baseApiUrl}=${value}`
 }
 
 const useUrl = isConfigUrl ? configUrl[api] : baseApiUrl ;
 
 try {
  const response = await fetch(useUrl);
  response.ok ? console.log('API OK') : functionApi(api, values);
  
  const responseMethods = {
   'text': response.text.bind(response),
   'json': response.json.bind(response)
  }
  
  const keysConfig = {
   'number_api': '',
   'cats_api': getDestruction.split(', ').map(item => item.trim()),
   'translate_api': ``,
   'gender_api': getDestruction.split(', ').map(item => item.trim()),
   'guess_name_api': getDestruction.split(', ').map(item => item.trim()),
   'hadits_api': getDestruction.split(', ').map(item => item.trim()),
   'apod_api': getDestruction.split(', ').map(item => item.trim()),
  }
  
  const result = await responseMethods[typeRes]();
  console.log(result);
 
  const temporaryResult = {};
  const translatedResult = {};
  temporaryResult.data = result;
  
  const useBracket = isConfigUrl ? eval('temporaryResult' + bracket) : console.log({ not_use_bracket: true });
  console.log({ useBracket: useBracket });
  
  if (getDestruction && typeof getDestruction === 'string' && getDestruction.trim().length > 0) {
   const keys = keysConfig[api];
   const storedData = {};
   
   keys.forEach(key => {
    if (key in useBracket) {
     if (api === 'cats_api') {
      const urlIMG = temporaryResult["data"][0].url;
       storedData.url = urlIMG;
       
       storedData.translate  = {
        temperament: useBracket["temperament"],
        description: useBracket["description"]
       }
      } else if (api === 'guess_name_api'){
       const getCountry = temporaryResult["data"]["country"];
       
       for (let i = 0; i < getCountry.length; i++) {
        const getData = getCountry[i];
        
        storedData[`data${i}`] = {
         country_id: getData.country_id,
         probability: (getData.probability * 100).toFixed(2) + '%'
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
     if (useTranslate) {
      const toTranslateText = storedData.translate;
      
      for (let text in toTranslateText) {
       translatedResult[text] = toTranslateText[text];
      }
     }
    } else {
     console.log(storedData[key], 'not found');
    }
   });
   console.log({translatedResult: translatedResult});
   console.log({storedData: storedData});
  } else {
   console.log({INFO : 'this api not use getDestruction'});
  }
 } catch (error) {
  console.log({ ERROR: error });
 }
}

//functionApi('cats_api', 'lol');

async function getNumberFact(number, type) {
 const url = `http://numbersapi.com/${number}/${type}`;

 try {
  const response = await fetch(url);
  const data = await response.text();
  const factText = data;
  
  console.log(data)
  await functionApi('translate_api' ,factText);
  } catch(error) {
   console.error('Errors:', error);
  };
}



//getNumberFact('77', 'math')