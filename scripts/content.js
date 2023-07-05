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


document.getElementById("apiForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  var steamKey = document.getElementById("SteamApiKey").value;
  var steamID = document.getElementById("SteamAccountID").value;
    // Do something with the API key, such as storing it or using it for API requests
  console.log(steamID)
  console.log(steamKey)
    // Clear the input field
  document.getElementById("SteamApiKey").value = "";
  document.getElementById("SteamAccountID").value = steamID;
  // Optional: Provide feedback to the user (e.g., display a success message)
  alert("API key submitted successfully!");
});

