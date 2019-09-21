var request = require("request");
request("https://samples.openweathermap.org/data/2.5/weather?zip=94040,us&appid=b6907d289e10d714a6e88b30761fae22", function(error, res, body) {
    if (!error && res.statusCode == 200) {
        var parsedData = JSON.parse(body);
        // drill down to the level of temp
        console.log(parsedData["main"]["temp"]);
    }
    else {
        console.log("something wrong");
        console.log(error);
    }
});