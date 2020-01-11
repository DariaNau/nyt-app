// https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=kx24Uy6cJ6NicRdL8rXYqXteiKganiOl

var apikey = 'kx24Uy6cJ6NicRdL8rXYqXteiKganiOl';
var searchTerm = 'elections';

$.ajax({
	url: 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + searchTerm + '&api-key=' + apikey,
	method: 'GET'
}).then(function(response) {
	console.log(response);
});
