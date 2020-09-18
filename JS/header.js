function UpdateTime() {
    var servertime = new Date();

    var Y = servertime.getFullYear();
    var m = servertime.getMonth();
    var d = servertime.getDate();

    if (m < 10) { m = "0" + m; }
    if (d < 10) { d = "0" + d; }

    var date = Y + "-" + m + "-" + d;

    var time = servertime.toLocaleTimeString();
    $("#time").html(date + " " + time);
}

$(function () {
    UpdateTime();
    setInterval("UpdateTime()", 1000);
});