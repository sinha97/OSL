var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=f0d4b765b59d2ed2fccd1581b56f6029')
.then(response => response.json())
    .then(data => {
    console.log(data)
    var tempValue = data['main']['temp'];
    const newtemp = Math.round(tempValue-273)  + ' c';
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];

  main.innerHTML = nameValue;
  desc.innerHTML = "Desc - "+descValue;
  temp.innerHTML = "Temp - "+newtemp;
  input.value ="";

})

.catch(err => alert("Wrong city name!"));
})