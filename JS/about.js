$(function () {
    var ids_to_change = [
        "#txt_music",
        "#txt_coding",
    ];
    var a = 0;

    function change_colors() {
        a++;
        for (var i = 0; i < ids_to_change.length; i++) {
            if (Math.random() > .2) { a += 1; }
            if ((a % 333) == 0) { a += 3; }
            var id = $(ids_to_change[i]);
            if ((a % 1000) == 0) {                                      // MILLENIAL            aka EONIAN
                id.css("color", "white");
                id.css("background-color", "white");
            }
            else if ((a % 200) == 0) {                                  // BICENTENNIAL
                id.css("color", "grey");
                id.css("background-color", "#222222");
            }
            else if ((a % 100) == 0) {                                  // CENTENNIAL
                id.css("color", "black");
                id.css("background-color", "black");
            }
            else if ((a % 10) == 0) {                                   // DECADE
                id.css("color", "crimson");
                id.css("background-color", "#363030");
            }
            else if ((a % 8) == 0) {                                     // OCTENNIAL
                id.css("color", "lightblue");
                id.css("background-color", "#303032");
            }
            else if ((a % 2) == 0) {                                    // BIENNIAL             aka EVEN
                id.css("color", "cyan");
                id.css("background-color", "#303232");
            }
            else if ((a % 3) == 0) {                                    // TRIENNIAL
                id.css("color", "magenta");
                id.css("background-color", "#333333");
            }
            else if ((a % 2) == 1) {                                    // BIENNIAL             aka ODD
                id.css("color", "yellow");
                id.css("background-color", "#303030");
            }
            else {                                                      // DEFAULT CASE         aka BORING
                id.css("color", "purple");
            }
        }
    }

    setInterval(function () { change_colors(); }, 900);
});