const _apikey = STEAM_API_KEY.env;
const _steamid = "";

const article = document.querySelector('apex_desktop');
console.log("This is your API Key Bitch" + _apikey);
// `document.querySelector` may return null if the selector doesn't match anything.
if (article) {
  const text = article.textContent;
  /**
   * Regular expression to find all "words" in a string.
   *
   * Here, a "word" is a sequence of one or more non-whitespace characters in a row. We don't use the
   * regular expression character class "\w" to match against "word characters" because it only
   * matches against the Latin alphabet. Instead, we match against any sequence of characters that
   * *are not* a whitespace characters. See the below link for more information.
   *
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
   */
  const wordMatchRegExp = /[^\s]+/g;
  const words = text.matchAll(wordMatchRegExp);
  // matchAll returns an iterator, convert to array to get word count
  const wordCount = [...words].length;
  const readingTime = Math.round(wordCount / 200);
  const badge = document.createElement('p');
  // Use the same styling as the publish information in an article's header
  badge.classList.add('color-secondary-text', 'type--caption');
  badge.textContent = `⏱️ ${readingTime} min read`;

  // get recently played games from steam profile

  const userAction = async () => {

    const url = "http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=" + _apikey + "&steamid=" + _steamid + "&format=json";

    const response = await fetch(url);
    const myJson = await response.json();
    console.log(myJson);
  }





  // Support for API reference docs
  const heading = article.querySelector('h1');
  // Support for article docs with date
  const date = article.querySelector('time')?.parentNode;

  // https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement
  (date ?? heading).insertAdjacentElement('afterend', badge);
}