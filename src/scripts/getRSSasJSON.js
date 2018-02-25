const parseUrl = 'https://api.rss2json.com/v1/api.json?rss_url=';
export class RSSNews {
  async getJson(url) {
    console.log("Getting");
		return fetch(parseUrl + url).then(function(response) {
			console.log("Got");
			// Convert to JSON
			return response.json();
		}, function() {
			console.log("Failed getting weather");
		});
  }
}
