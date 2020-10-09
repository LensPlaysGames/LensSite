$(function () {
    $("#img_lens_001").prop("src", "img/lens-high.jpg");
    $("#img_lens_002").prop("src", "img/lens-yeah.jpg");
    $("#img_lens_003").prop("src", "img/lens-vibe.jpg");

    var MYMUSICtitle = $("#txt_MYMUSIC");
    var a = 0;

    function ChangeColor() {
        a++;
        if ((a % 1000) == 0) { MYMUSICtitle.css("color", "white"); }            // MILLENIAL            aka EONIAN
        else if ((a % 200) == 0) { MYMUSICtitle.css("color", "grey"); }         // BIENNIAL
        else if ((a % 100) == 0) { MYMUSICtitle.css("color", "black"); }        // CENTENNIAL
        else if ((a % 10) == 0) { MYMUSICtitle.css("color", "crimson"); }       // DECADE
        else if ((a % 2) == 0) { MYMUSICtitle.css("color", "cyan"); }           // BIENNIAL             aka EVEN
        else if ((a % 3) == 0) { MYMUSICtitle.css("color", "magenta"); }        // TRIENNIAL
        else if ((a % 2) == 1) { MYMUSICtitle.css("color", "yellow"); }         // BIENNIAL             aka ODD
        else { MYMUSICtitle.css("color", "purple"); }                           // DEFAULT CASE         aka BORING
    }

    setInterval(function () { ChangeColor(); }, 900);
});