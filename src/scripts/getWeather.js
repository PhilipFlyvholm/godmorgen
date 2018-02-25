
const url = 'http://api.openweathermap.org/data/2.5/weather?q=Copenhagen&lang=da&units=metric&APPID=bd4e2ef22ac5e70a3a826cd07fe8290a';

export class Weather {
	async fetchData() {
		console.log("Getting");
		return fetch(url).then(function(response) {
			console.log("Got");
			// Convert to JSON
			return response.json();
		}, function() {
			console.log("Failed getting weather");
		});
	}
}
