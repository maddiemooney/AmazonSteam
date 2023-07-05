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
