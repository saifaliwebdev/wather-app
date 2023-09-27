let cityName = document.querySelector(".input-box")
let btnClick = document.getElementById("btn-Click")
let tempShow = document.getElementById("temp-show")
let des = document.getElementById("description-text")
let imgCreat = document.getElementById("watherImg")
let imgicon = document.getElementById("img-icon")
// let geticon = document.getElementById("img-icon")



async function checkwather(city) {
    let api_key = "91f7f0a9d6098b73f33481b8a3ca4855";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
    // .then(responce => responce.json());
    // const watherdata = await fetch(url)
    // .then(v => v.json())
    // console.log(watherdata)

    let watherdata = await fetch(url).then(v => v.json())
    console.log(watherdata)
    tempShow.innerText = Math.round(watherdata.main.temp - 273.15) + "°c";
    des.innerText = watherdata.weather[0].description.toUpperCase()


    let linnk = `https://openweathermap.org/img/wn/${watherdata.weather[0].icon}@4x.png`
    // const para = document.createElement("img");
    imgicon.src = linnk
    // imgCreat.appendChild(para);

    // watherImg.innerHTML +=  `

    // <img src="https://openweathermap.org/img/wn/${watherdata.weather[0].icon}@4x.png" id="img-icon">
    // `  

    // statustext.innerText =   watherdata.wather.main

}


btnClick.addEventListener("click", () => {
    checkwather(cityName.value)
})



