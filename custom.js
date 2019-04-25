var datetime = new Date("Feb 21, 2020 10:00:00");
var counter = setInterval(function() {
    var now = new Date().getTime();
    var timeLeft = datetime - now;
    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24)) + 1;
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    document.getElementById("dni").innerHTML = days;
    document.getElementById("godziny").innerHTML = hours;
    document.getElementById("minuty").innerHTML = minutes;
    document.getElementById("sekundy").innerHTML = seconds;
}, 1000);