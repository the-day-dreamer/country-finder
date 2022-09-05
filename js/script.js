const searchBtn = document.getElementById("search-btn");
const countryName = document.getElementById("country-name");
const flagImg = document.getElementById("flag-img");
const countryInfo = document.getElementById("country-info");

searchBtn.addEventListener("click",()=>{
    let country = countryName.value;
    let finalURL = `https://restcountries.com/v3.1/name/${country}?fullText=true`;
    console.log(finalURL);
    fetch(finalURL).then((response)=>response.json()).then((data)=>{
        console.log(data[0]);
        console.log(data[0].capital[0]);
        console.log(data[0].flags.svg);
        console.log(data[0].population);
        console.log(data[0].timezones[0]);
        console.log(Object.values(data[0].languages).toString().split(",").join(", "));
        console.log(data[0].continents[0]);
        flagImg.innerHTML = `
    <img src = "${data[0].flags.svg}" class = "flag">
    <h2>${country}</h2>
    `
    countryInfo.innerHTML = `
    <div><h2>Capital:</h2><span>${data[0].capital[0]}</span></div>
    <div><h2>Population:</h2><span>${data[0].population}</span></div>
    <div><h2>Timezone:</h2><span>${data[0].timezones[0]}</span></div>
    <div><h2>Continent:</h2><span>${data[0].continents[0]}</span></div>
    <div><h2>Language:</h2><span>${Object.values(data[0].languages).toString().split(",").join(", ")}</span></div>


    `
    }).catch(()=>{
        if(country.length == 0){
            countryInfo.innerHTML = `<h3 class = "error"> the input field cannot be empty</h3>`;
            flagImg.innerHTML = ``;
        }
        else{
            countryInfo.innerHTML = `<h3 class = "error"> please enter a valid country name</h3>`;
            flagImg.innerHTML = ``;

        }
    })
   

})