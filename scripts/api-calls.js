const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		// console.log(this.responseText);
        let str = this.responseText;
        let json = JSON.parse(str);
        document.getElementById("vader-api").innerHTML = json.value;
	}
});

xhr.open("GET", "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random");
xhr.setRequestHeader("accept", "application/json");
xhr.setRequestHeader("X-RapidAPI-Key", "c039d7b0c5msh324122ad4915cfap146c4bjsnb594a77cb312");
xhr.setRequestHeader("X-RapidAPI-Host", "matchilling-chuck-norris-jokes-v1.p.rapidapi.com");

xhr.send(data);

/*::::::::::::: Weather progromming section ::::::::::::::::::::*/

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c8db57af52mshad5f76e6983ea5fp1ca807jsn86e9aca2110e',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q=stockholm&days=3', options)
	.then(response => response.json())
	.then(response =>{
         console.log(response)

         /*This keep data in the form of key and value*/
         let collectData = new Map()
            collectData.set('dataLocation', response.location.name)
            collectData.set('dataTemperature', parseInt(response.current.temp_c))
            collectData.set('dataCondition', response.current.condition.text)
            collectData.set('datamaxTemperature', parseInt(response.forecast.forecastday[0].day.maxtemp_c))
            collectData.set('datalowTemperature', parseInt(response.forecast.forecastday[0].day.mintemp_c))
            collectData.set('datavisibility', response.current.vis_km)
            collectData.set('datahumidity', response.current.humidity)
            collectData.set('datafeels', Math.round(response.current.feelslike_c))


       /*This set data to be displayed on the web*/
         for(let [key,value] of collectData){
            if(key == 'dataTemperature'){
                displayData(key, `${value}°`)
            }else{
                displayData(key, value)
            }
         }


         let daysInfo = response.forecast.forecastday
         for(let day in daysInfo){
            daysHTML(
                day,
                daysInfo[day].date,
                daysInfo[day].day.condition.icon,
                parseInt(daysInfo[day].day.maxtemp_c),
                parseInt(daysInfo[day].day.mintemp_c),
            )
         }

         
         
         let dayInfo = response.forecast.forecastday[0].hour
         for(let hour in dayInfo){
             setDataHTML(
                 hour,
                 dayInfo[hour].time.substring(11,13),
                 dayInfo[hour].condition.icon,
                 `${parseInt(dayInfo[hour].temp_c)}°`
                 )
                }    
                          
                
            })
            .catch(err => console.error(err))//end of fetch data
            
           
            


    function displayData(input, data){
        let DOM = document.getElementById(input.replace('data', ''))
        DOM.textContent = data
    }
    
    function setDataHTML(id, hour, icon, temp){
        let img = document.createElement('img')
        img.src = `https:${icon}`
        createHTML(id, hour, temp, img)
    }


    const weekDays = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
    function daysHTML(id, date, icon, max_temp, min_temp){
        let div = document.createElement('div')
        let p = document.createElement('p')
        let p1 = document.createElement('p')
        let p2 = document.createElement('p')
        let img = document.createElement('img')

        p.className = "day-forecast"
        const d = new Date(date)
        if(id == 0){
            p.textContent = "Today"
        }else{
            p.textContent = weekDays[d.getDay()]
        }

        p1.textContent = `${min_temp}°` 
        p1.className = "day-forecast"

        img.src = `https:${icon}`
        img.className = "day-forecast"

        p2.textContent = `${max_temp}°`
        p2.className = "day-forecast"

        div.className = "days-forecasts"
        div.appendChild(p)
        div.appendChild(img)
        div.appendChild(p1)
        div.appendChild(p2)
        
        document.querySelector("#weekdays3").appendChild(div)
    
    }//end of the daysHTML

    /**
     * This function create HTML elements
     * and pass it to the DOM
     * The function obtaib 4 parameter
     * @id the id of the element
     * @hour the time 
     * @temp the temperature
     * @element the Html element to be passed
     * 
     * @cons: the element should have been created before been passed 
     * to this function
     */
    function createHTML(id, hour,temp, element){
        let div = document.createElement('div')
        let p1 = document.createElement('p')
        let p2 = document.createElement('p')

        p1.id = id
        p1.textContent = hour

        p2.id = id
        p2.textContent = temp
        
        div.className = 'hour'
        div.id = id
        div.appendChild(p1)
        div.appendChild(element)
        div.appendChild(p2)

        document.querySelector("#hours-info").appendChild(div)
    }


    /*:::::::::::: pressure :::::::::*/


function createDIV (i, position){
    let div = document.createElement("div")
    div.className = `dash dash${i}`
    div.textContent = "|"
    div.style.setProperty("--rotate", position/100 * 360)
    document.getElementById("pressure").appendChild(div)
  }
  
  for(let i = 0; i <= 100; i++){
    if(i < 35 || i > 65){
      createDIV(i, i)
    }
  }