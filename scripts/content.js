const _apikey = "string";
const _steamid = "123";

console.log("This is your API Key Bitch" + _apikey);

//get dom element of amazon page/¿¿¿?
const b = document.querySelector("test")
if (b){
  console.log("we got it bitch");
}



const url = "https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=" + _apikey + "&steamid=" + _steamid + "&format=json";
  
fetch(url, {
  method: 'GET',
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(response => {
    response.json().then((data) => {
      console.log(data.response.games); 
    });
  })
  .catch(error => {
    console.log(error);
  });



