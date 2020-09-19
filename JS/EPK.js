$(function () {
    var MYMUSICtitle = $("#txt_MYMUSIC");
    var a = 0;

    setInterval(function () { ChangeColor(); }, 900);

    function ChangeColor() {
        a++;
        if ((a % 1000) == 0) { MYMUSICtitle.css("color", "white"); } // EONIAN
        else if ((a % 200) == 0) { MYMUSICtitle.css("color", "grey"); } // BILLENNIAL
        else if ((a % 100) == 0) { MYMUSICtitle.css("color", "black"); } // CENTENNIAL
        else if ((a % 10) == 0) { MYMUSICtitle.css("color", "crimson"); }
        else if ((a % 2) == 0) { MYMUSICtitle.css("color", "cyan"); }
        else if ((a % 3) == 0) { MYMUSICtitle.css("color", "magenta"); }
        else if ((a % 2) == 1) { MYMUSICtitle.css("color", "yellow"); }
        else { MYMUSICtitle.css("color", "purple"); }
    }
});