const url ="https://goweather.herokuapp.com/weather"
let tempurl ="https://goweather.herokuapp.com/weather/bogra"
let dropdown = document.querySelectorAll('.dropdown select')
let windspeed = document.querySelector('.wind-speed p')
let temperature = document.querySelector(".second-con h3")
let city = document.querySelector(".second-con p")
for(let select of dropdown){
    for (let val of districts) {
        let option = document.createElement('option')
        option.innerText = val
        if(val === 'Bogra'){
            option.selected = "selected"     
        }
        select.append(option)
        
        
        
    }
    select.addEventListener('change',(e)=>{
        updatedistrict(e.target)
    })
}
async function bogra(){
    let res = await fetch(tempurl)
    let data = await res.json()
    windspeed.innerText = data.wind
    temperature.innerText = data.temperature
    city.innerText = "Bogra"
}

bogra()

async function updatedistrict(e){
    let temp = e.value
    let current = temp
    console.log(current)
    let newurl  = `${url}/${current}`;
    let response = await fetch(newurl);
    let data = await response.json();
    windspeed.innerText = data.wind
    temperature.innerText = data.temperature
    city.innerText = current
    console.log(data)
}

