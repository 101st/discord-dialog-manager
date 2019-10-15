async function setApiKey(apiKey) {
  try {
    localStorage.setItem('apiKey', apiKey);
    return localStorage.getItem('apiKey');
  } catch (error) {
    return error;
  }
}


export default {
  setApiKey
}