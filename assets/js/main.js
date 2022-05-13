//"https://api.openweathermap.org/data/2.5/weather?q=pau&appid=b018a3cf255f208e68a9d1a716c54eb7"

function getValue() {

    var city = document.getElementById("in").value;
    var image = document.getElementById("img");
    var result  = document.getElementById("result");

    var xmlhttp = new XMLHttpRequest();
    var url = "myTutorials.txt";
    
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText); 


            
            var description = myArr.weather[0].description; 
            var icon = myArr.weather[0].icon; 
    
            var iconImg = "http://openweathermap.org/img/w/" + icon + ".png";
            result.innerHTML = description;

            image.innerHTML = "<img src='"+ iconImg +"' alt='"+ description +"'>"



        }
    };
    xmlhttp.open("GET", "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=b018a3cf255f208e68a9d1a716c54eb7&lang=fr", true);
    xmlhttp.send();
    
}





