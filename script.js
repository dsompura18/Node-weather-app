var a = new Date();
var realDay="", realDate="", realMonth="", realTime="";
function myDate(){
    let day = a.getDate();
    // console.log(day);
    realDate = day;
}

function myDay() {
    var weekdays = new Array(7);
    weekdays[0] = "Sun";
    weekdays[1] = "Mon";
    weekdays[2] = "Tue";
    weekdays[3] = "Wed";
    weekdays[4] = "Thu";
    weekdays[5] = "Fri";
    weekdays[6] = "Sat";
    var r = weekdays[a.getDay()];
    // document.getElementById("myId").innerHTML = r;
    // console.log(r);
    realDay = r;
}

function myMonth(){
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];

    let month = months[a.getMonth()];
    // console.log(month);
    realMonth = month;
}

function myTime(){
   let hour = a.getHours();
   let min = a.getMinutes(); 
   let period = "AM"
   if(hour > 11){
    period = "PM";
    if(hour > 12) hour -=12;
   }
   if(min < 10 ){
        min = "0" + min;
    }
    realTime = hour + ":" + min + period;
}
myDay();
myDate();
myMonth();
myTime();

var dateData = `${realDay} | ${realMonth} ${realDate} | ${realTime}`;
// console.log(dateData);

document.getElementById("dateData").innerHTML = `${dateData}`;
