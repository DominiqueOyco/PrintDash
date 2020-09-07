//this section is dedicated to the schedule-home section of the homepage
var today = new Date();
var now = today.getDay();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

document.open();
document.getElementById('schedule-contents').innerHTML += "<strong>" + days[now];
today = ' ' + mm + '/' + dd + '/' + yyyy;
document.getElementById('schedule-contents').innerHTML += "<strong>" + today + "<br> <br>";

document.getElementById('schedule-contents').innerHTML += "<br>" + "<a href='airings.html'><strong>SEE THE ENTIRE SCHEDULE!</strong></a>";
document.close();