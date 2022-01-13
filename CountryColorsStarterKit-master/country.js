var Country = /** @class */ (function() {
    function Country(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
    return Country;
}());
var countries = [];
var usa = countries.push(new Country("USA", "Murican", "What up", ["red", "white", "blue"]));
var mexico = countries.push(new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"]));
var algeria = countries.push(new Country("Algeria", "Arabic and Berber", "Sup", ["blue", "yellow", "red"]));
console.log(countries);

function SwitchCountry() {
    var input = document.getElementById("CountryList").value;
    for (var i = 0; i < countries.length; i++) {
        if (input === countries[i].name) {
            document.getElementById("CountryName").innerText = countries[i].name;
            document.getElementById("OfficialLanguage").innerText = countries[i].lang;
            document.getElementById("HelloWorld").innerText = countries[i].greeting;
            document.getElementById("Color1").style.backgroundColor = countries[i].colors[0];
            document.getElementById("Color2").style.backgroundColor = countries[i].colors[1];
            document.getElementById("Color3").style.backgroundColor = countries[i].colors[2];
        }
    }
}