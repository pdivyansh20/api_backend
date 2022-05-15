const express = require("express");
const https = require("https")
const app = express()
app.get("/", function(req,res) {
    const query= "seoul"
    const apiKey= "0c31c634f1c4e56047eb21ed8c92adbe"
   const url = "https://api.openweathermap.org/data/2.5/weather?appid="+apiKey+"&q="+query;
   https.get(url,function(response){
       response.on("data",function(data){
           const weatherData = JSON.parse(data) ;
           const temp = weatherData.main.temp ;
           const icon= weatherData.weather[0].icon;
           const imageUrl= "http://openweathermap.org/img/wn/"+icon+"@2x.png"
           res.write(" <h1> Temp in "+query+" is "+ temp +"<h1/>")  
           res.write("<img src="+imageUrl+">")
           res.send()
       })
   })
})
 


app.listen(4000, function(){
    console.log("server is running")
})