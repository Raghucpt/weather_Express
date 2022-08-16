let cityName = document.getElementById('cityName');
let submitBtn = document.getElementById('submitBtn');
let city_name = document.getElementById('city_name');
let temp_real_val = document.getElementById('temp_real_val');

let clickFn = async (e)=>{
    // alert("button clicked")
    e.preventDefault();
  let cityVal =  cityName.value

  if(cityVal  =="")
  {
    city_name.textContent = "Please Enter the City Name before Search"
  }
  else
  {
    try {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=1cb6532aea3c298a830a71380eace21e`
        let response = await fetch(url)
        // console.log(response);
        let data = await response.json()
        // console.log(data);
        city_name.textContent = `${data.name}, ${data.sys.country}`
        temp_real_val.textContent = data.main.temp
    } 
    catch {
        city_name.textContent = "Please Enter a valid City Name"  
    }
  }

}
submitBtn.addEventListener('click',clickFn)