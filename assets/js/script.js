
// Header - day & time functions 
var currentDay = $('#currentDay');

function displayTime(){
    var rightNow = moment().format ("dddd, MMMM Do YYYY, [at] h:mm:ss a");
    currentDay.text(rightNow);
}

setInterval(displayTime,1000);

 