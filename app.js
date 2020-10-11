

function display_c() {
    var refresh = 1000; // Refresh rate in milli seconds
    mytime = setTimeout('display_ct()', refresh)
}

function display_ct() {
    var x = new Date()
    var x1 = "Time" + " - " + x.getHours() + ":" + x.getMinutes() + ":" + x.getSeconds();
    document.getElementById('date').innerHTML = x1;
    display_c();
}

