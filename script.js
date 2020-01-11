// https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=kx24Uy6cJ6NicRdL8rXYqXteiKganiOl

var apikey = 'kx24Uy6cJ6NicRdL8rXYqXteiKganiOl';
var searchTerm = 'elections';

var startYear = '2000';
var endYear = '2019';

// optional params
// start year
// end year

function request() {
	searchTerm = array[0];
	var numOfResults = array[1];
	numOfResults.parseInt();

	$.ajax({
		url: 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + searchTerm + '&api-key=' + apikey,
		method: 'GET'
	}).then(function(response) {
		console.log(response);

		// array of articles returned from search
		var articlesArray = response.response.docs;
		console.log(articlesArray);

		var titleArray = [];
		var urlArray = [];

		for (var i = 0; i < numOfResults - 1; i++) {
			titleArray.push(articlesArray[i].headline.main);
			urlArray.push(articlesArray[i].weburl);
		}

		var object = {
			titles: titleArray,
			urls: urlArray
		};

		appendAJAXres(object);
	});
}
