// https://api.openweathermap.org/data/2.5/weather?q=Patan&units=metric&appid=ac2e3d40e38e383ce975e9791660f7e0

const http = require('http');
const fs = require('fs');
const requests = require('requests');

const homeFile = fs.readFileSync('home.html','utf-8');

const replaceValue = (tempval, orgval)=>{
    // console.log(tempval);
    let temperature = tempval.replace('{%tempact%}',orgval.main.temp);
    temperature = temperature.replace('{%city%}',orgval.name);
    temperature = temperature.replace('{%country%}',orgval.sys.country);
    temperature = temperature.replace('{%tempmin%}',orgval.main.temp_min);
    temperature = temperature.replace('{%tempmax%}',orgval.main.temp_max);
    // console.log(orgval);

            if(orgval.weather[0].main == 'Haze' || orgval.weather[0].main == 'Smoke'){
                temperature = temperature.replace('<i class="fa-solid fa-sun"></i>','<i class="fa fa-cloud"></i>');
            }

        //   console.log(temperature);  
    // })
    return temperature;
    // console.log(temperature);
};



http.createServer((req,res)=>{
    if(req.url == '/'){
        // console.log("server ready");
        requests('https://api.openweathermap.org/data/2.5/weather?q=Ahmedabad&units=metric&appid=ac2e3d40e38e383ce975e9791660f7e0')
        .on('data',  (chunk) => {
         var objData= JSON.parse(chunk);
         var dataArr=[objData];
         var mapData = dataArr
         .map((val)=> replaceValue(homeFile, val))
         .join("");
        //  response.writeHead(200,{"Content-type" : "text/css"});
         res.writeHead(200, {'Content-Type': 'text/html'});
         res.write(mapData);
        })
        .on('end',  (err)=> {
        if (err) return console.log('connection closed due to errors', err);
        // console.log('end');
        res.end();
        });
    }
    // 
}).listen(8080);


