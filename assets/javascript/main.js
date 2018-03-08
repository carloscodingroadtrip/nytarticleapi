//API: 526c35d264004d45bf830bd060b1fc1a
// SETUP VARIABLES
var queryTerm = "";
var numResults = 0;
var startYear = 0;
var endYear = 0;
var apikey = "526c35d264004d45bf830bd060b1fc1a";
var urlBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + apikey + "&q=";

var articleCounter = 0;

// console.log(urlBase);

// Funtions to run the AJAX call
function runSearch(numArticles, queryURL) {
    //Ajax function
    $.ajax({url: queryURL, method: "GET"})
        .done(function(NYTData) {
            console.log(queryURL);
            console.log(NYTData);
        });
}

// Main Logic
$('#searchBtn').on("click", function() {
    runSearch(5, "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=526c35d264004d45bf830bd060b1fc1a&q=Obama");
});
