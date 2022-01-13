class Country {
    name: string;
    lang: string;
    greeting: string;
    colors: string[];

    constructor(name: string, lang: string, greeting: string, colors: []) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
}

let countries: Country[] = [];
let usa = countries.push(new Country("USA", "Murican", "What up", ["red", "white", "blue"]));
let mexico = countries.push(new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"]));
let algeria = countries.push(new Country("Algeria", "Arabic and Berber", "Sup", ["blue", "yellow", "red"]));

console.log(countries);

function SwitchCountry() {
    let input: string = document.getElementById("CountryList").value;
    for (let i = 0; i < countries.length; i++) {
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


