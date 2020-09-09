//this section is dedicated to the schedule-home section of the homepage
var today = new Date();
var now = today.getDay();
var hours = today.getHours();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

// hours = (hours % 24 - 2) % 24;
// var ampm = 'am';

// if(hours == 0){
// 	hours = 12;
// }

// else if(hours>12)
// {
// 	hours = hours % 12;
// 	ampm = 'pm';
// }

document.open();
document.getElementById('currentdate').innerHTML += "<strong>" + days[now];
today = ' ' + mm + '/' + dd + '/' + yyyy;
document.getElementById('currentdate').innerHTML += "<strong>" + today;
var time = hours + ' ' + mid;
document.getElementById('currentdate').innerHTML += "<strong>" + time;
document.close();

