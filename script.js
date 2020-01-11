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

	$.ajax({
		url: 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + searchTerm + '&api-key=' + apikey,
		method: 'GET'
	}).then(function(response) {
		console.log(response);

		// array of articles returned from search
		var articlesArray = response.response.docs;
		console.log(articlesArray);
	});
}
