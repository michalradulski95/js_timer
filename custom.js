var datetime = new Date("Feb 21, 2020 10:00:00");
var counter = setInterval(function() {
    var now = new Date().getTime();
    var timeLeft = datetime - now;
    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24)) + 1;
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}, 1000);