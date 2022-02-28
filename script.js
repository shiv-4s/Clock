let d = new Date();
document.getElementById("date").innerHTML = d.getDate();
let day = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
document.getElementById("din").innerHTML = day[d.getDay()];
let month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Spt",
  "Oct",
  "Nov",
  "Dec",
];
document.getElementById("mahina").innerHTML = month[d.getMonth()];
document.getElementById("hours").innerHTML = d.getHours();
document.getElementById("mnuts").innerHTML = d.getMinutes();

function DarkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
var seconds = 0;
var minuntes = 0;
var hours = 0;

setInterval( function () {
  seconds = d.getSeconds() * 6;
  minuntes =  d.getMinutes() * 6;
  hours = d.getHours() * 30 + Math.round(minuntes/12);
 
  document.getElementById("secondh").style.transform = "rotate(" + seconds + "deg)";
  document.getElementById("minuteh").style.transform = "rotate(" + minuntes + "deg)";
  document.getElementById("hourh").style.transform = "rotate(" + hours + "deg)";

  
}, 1000
);