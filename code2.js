var x = document.querySelector("h1");
x.innerHTML = "Welcome to My Digital/Analog Clock"

function digy() {
    var z = document.querySelector(".digital-clocks");
    if (z.style.display === "block") {
        // debugger
        z.style.display = "none";
    } else {
        z.style.display = "block";
    }
}

// digital btn:
function digPage() {
    console.log("hiii");
    var y = document.querySelector(".digital-and-analog");
    var z = document.querySelector("digital-clocks")
    if (y.style.display === "none") {
        y.style.display = "block";
    } else {
        y.style.display = "none";
        y = document.body.style.background = "url('./pics/d.jpg')";
        digy();
    }
}
// Analog Page:
function analPage() {
    console.log("ooooh");
}

// Return to main page: back btn:
function back() {
    var x = document.querySelector(".digital-and-analog");
    if (x.style.display === "none") {
        x.style.display = "block";
        x = document.body.style.backgroundImage = "url('./pics/digital.jpg')";

    } else {
        x.style.display = "none";
    }
}

// function shortFormat2(){
//     console.log("hiii");
//     var d = document.querySelector("digital-clocks")
//     if (d.style.display === 'none') {
//         d.style.display = "block";
//     } else {
//         d.style.display = "none";
//         d = document.body.style.background = "gray";
//         shortFormat2();
//     }
// }

// Show the time in 12 hrs format
function shortFormat2() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    h = twoDigit(h);
    m = twoDigit(m);
    s = twoDigit(s);
    var am = "AM";

    if (am > 12) {
        am = "PM"
    } else {
        am = "AM"
    }

    if (h == 0) {
        h = 12;
    } else {
        if (h > 12) {
            h = (h - 12);
        }
    }

    function twoDigit(time) {
        if (time < 10) {
            return "0" + time;
        }
        else {
            return time;
        }

    }

    document.getElementById("show-short-format").innerHTML = h + ":" + m + ":" + s + "  " + am;
    var t = setTimeout(function () { shortFormat2() }, 1000); /* setting timer */
}

// show the time in 24 hr format
function longFormat2() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    h = twoDigit(h);
    m = twoDigit(m);
    s = twoDigit(s);
    var am = "AM";

    if (am > 12) {
        am = "PM"
    } else {
        am = "AM"
    }
    
    function twoDigit(time) {
        if (time < 10) {
            return "0" + time;
        }
        else {
            return time;
        }

    }

    document.getElementById("show-long-format").innerHTML = h + ":" + m + ":" + s + "  " + am;
    var t = setTimeout(function () { longFormat2() }, 1000); /* setting timer */
}






