const cityForm = document.querySelector('form');

const card = document.querySelector('.card');

const details = document.querySelector('.details');

const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img') // get the  image  inside  of the  class of  icon




const updateUI =(data) => {
     console.log(data)
// 
     // const cityDets = data.cityDets;
     // const weather = data.weather;

     //destructure properties
 //from data, get cityDets, and  from data get weather
      const {cityDets, weather} = data;

     // update details template

     details.innerHTML = `       
     <h5 class="my-3">${cityDets.EnglishName}</h5>
     <div class="my-3">${weather.WeatherText}</div>
     <div class="display-4 my-4">
     
          <span>${weather.Temperature.Metric.Value}</span>
          <span>&deg;C</span>
     </div>
     
     `;

     //udpate the  night/day & icon image
   let timeSrc = null;
   if(weather.IsDayTime) {
     timeSrc = 'img/day.svg';
   }else {
     timeSrc = 'img/night.svg';
   }

   time.setAttribute('src', timeSrc);


     // remove the d-none class if present 
     // if(card.classList.contains('d-none')) {
          // card.classList.remove('d-none');
     // }

};
//async function, so this would  return a  promise
const updateCity = async(city) => {

const cityDets = await getCity(city); 

const weather = await getWeather(cityDets.Key); //call  get weather from forcast.js

//console.log(city);
//use Object short hand notation for this
return {cityDets,weather};
};



cityForm.addEventListener('submit', e => {
//prevent default action
     e.preventDefault();


     //get city value
     const city = cityForm.city.value.trim();
     cityForm.reset();


     //update the  ui with new city

     updateCity(city)
     .then(data => updateUI(data))
     .catch(err => console.log(err));
});