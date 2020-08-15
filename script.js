$(document).ready(function() { 
    var apiKey = "ZyJn6IzMUonRqrADHcccttHLJmuV2UBG";
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=" + apiKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        // console.log(response.);

    });




});

