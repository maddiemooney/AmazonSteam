const _apikey = STEAM_API_KEY.env;
const _steamid = "";

console.log("This is your API Key Bitch" + _apikey);

const url = "http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=" + _apikey + "&steamid=" + _steamid + "&format=json";
  
fetch(url, {mode: 'no-cors'})
  .then(response => {
    //handle response      
    console.log(response);
  })
  .catch(error => {
    //handle error
  });

