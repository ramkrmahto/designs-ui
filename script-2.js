var countryLists = [
    { flagImg: "https://www.worldatlas.com/r/w425/img/flag/in-flag.jpg", CountryName: "India", population: "1266.450.812", region: "Asia", capital: "Delhi" },
    { flagImg: "https://www.worldatlas.com/r/w425/img/flag/ir-flag.jpg", CountryName: "Iran", population: "82,145,855", region: "Asia", capital: "Tehran" },
    { flagImg: "https://www.worldatlas.com/r/w425/img/flag/it-flag.jpg", CountryName: "Italy", population: "60,455,988", region: "Europe", capital: "Rome" },
    { flagImg: "https://www.worldatlas.com/r/w425/img/flag/jm-flag.jpg", CountryName: "Jamaica", population: "2,955,988", region: "North America", capital: "Kingston" },
    { flagImg: "https://www.worldatlas.com/r/w425/img/flag/jp-flag.jpg", CountryName: "Japan", population: "126,800,150", region: "Asia", capital: "Tokyo" },
    { flagImg: "https://www.worldatlas.com/r/w425/img/flag/my-flag.jpg", CountryName: "Malaysia", population: "31,122,450", region: "Asia", capital: "Kuala Lumpur" },
    { flagImg: "https://www.worldatlas.com/r/w425/img/flag/mx-flag.jpg", CountryName: "Mexico", population: "123,450,888", region: "North America", capital: "Mexico City" },
    { flagImg: "https://www.worldatlas.com/r/w425/img/flag/ru-flag.jpg", CountryName: "Russia", population: "142,455,891", region: "Europe", capital: "Moscow" },
    { flagImg: "https://www.worldatlas.com/r/w425/img/flag/za-flag.jpg", CountryName: "South Africa", population: "54,145,855", region: "Africa", capital: "Pretoria" },
    { flagImg: "https://www.worldatlas.com/r/w425/img/flag/bd-flag.jpg", CountryName: "Bangladesh", population: "156,186,882", region: "Asia", capital: "Dhaka" },
    { flagImg: "https://www.worldatlas.com/r/w425/img/flag/ve-flag.jpg", CountryName: "Venezuela", population: "39,888,123", region: "South America", capital: "Caracas" },
]

var ele = document.querySelector("body");
var cssObj = window.getComputedStyle(ele, null);
var bodybgColor;
bodybgColor = cssObj.getPropertyValue("background-color");

var showCountryDetails = countryLists;
function countryLoad() {

    for (let i = 0; i < showCountryDetails.length; i++) {
        document.getElementById("main").innerHTML += `
    <div class="card">
            <img src="${showCountryDetails[i].flagImg}" alt="">
            <div class="bottom-box">
                <h2 class="country">${showCountryDetails[i].CountryName}</h2>
                <br>
                <p><b>Population:</b> ${showCountryDetails[i].population}</p>
                <p><b>Region:</b> ${showCountryDetails[i].region}</p>
                <p><b>Capital:</b> ${showCountryDetails[i].capital}</p>
            </div>
        </div>
    `
        document.querySelectorAll(".card").forEach(x => { x.style.backgroundColor = bodybgColor });

    }
}
document.getElementById("filter").addEventListener("change", (event) => {
    if (event.target.value == "region") {
        document.getElementById("filter").innerHTML = `
         <option value="">Choose a Region</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Australia">Ocenia/Australia</option>
        <option value="Africa">Africa</option>
        <option value="South America">South America</option>
        <option value="North America">North America</option>
        `
    }
    if (event.target.value !== "") {
        showCountryDetails = countryLists.filter(x => x.region == event.target.value);
        document.getElementById("main").innerHTML = "";
        countryLoad();
    }
    else {
        showCountryDetails = countryLists;
        document.getElementById("main").innerHTML = "";
        countryLoad();
    }
})

document.getElementById("search").addEventListener("keyup", () => {
    let searchedCountry = document.getElementById("search").value.toLowerCase();
    for (let i = 0; i < countryLists.length; i++) {
        if (searchedCountry == showCountryDetails[i].CountryName.toLowerCase()) {
            showCountryDetails = countryLists.filter(x => x.CountryName.toLowerCase() == searchedCountry);
            document.getElementById("main").innerHTML = "";
            countryLoad();
        }
        else {
            document.getElementById("main").innerHTML = `<h4 >No Country found named <span id="result">${searchedCountry} !</span></h4>`

        }
    }
})

function togglemode() {
    if (bodybgColor == "rgb(255, 255, 255)") {
        document.getElementById("lignt-dark").classList.remove("fa-moon");
        document.getElementById("lignt-dark").classList.toggle("fa-sun");
        document.getElementById("lignt-dark").innerText = " Light Mode";
        document.getElementById("parent").classList.toggle("parent-dark");
        document.querySelector("body").classList.toggle("darkmode");
        document.getElementById("main").querySelectorAll(".card").forEach(x => { x.classList.toggle("darkmode") });
    }
    else {
        document.getElementById("lignt-dark").classList.remove("fa-sun");
        document.getElementById("parent").classList.remove("parent-dark");
        document.getElementById("lignt-dark").classList.toggle("fa-moon");
        document.getElementById("lignt-dark").innerText = " Dark Mode";
        document.querySelector("body").classList.remove("darkmode");
        document.getElementById("main").querySelectorAll(".card").forEach(x => x.classList.remove("darkmode"));
    }
    bodybgColor = cssObj.getPropertyValue("background-color");
}
document.getElementById("lignt-dark").addEventListener('click', () => {
    togglemode();
    countryLoad();
});