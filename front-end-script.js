var array = [];
var $listItemReturn = $(".list-group").create("<div>");
console.log();
$("#search").click(function() {
	var searchInp = $("#searchTerm")
		.val()
		.trim();
	var recNum = $("#FormControlOptions").val();
	var startYearInp = $("#startYear")
		.val()
		.trim();
	var endYearInp = $("#endYear")
		.val()
		.trim();

	$("#search").click(function() {
		var searchInp = $("#searchTerm")
			.val()
			.trim();
		var recNum = $("#FormControlOptions").val();
		var startYearInp = $("#startYear")
			.val()
			.trim();
		var endYearInp = $("#endYear")
			.val()
			.trim();

		array = [searchInp, recNum, startYearInp, endYearInp];

		console.log(array);
		return request();
	});
});
function appendAJAXres(object) {
	var newDiv = $("<div>");

	$listItemReturn.append(title);
	$listItemReturn.append(url + of + artile);
	$listItemReturn.append(article);

	// two vars
	// - url array
	// - title array
}
