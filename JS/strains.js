﻿//Strain Names Init
var names = ["GG#4", "Sour Diesel", "Legends", "Green Thumb", "Killer Kongo", "Dragon-Fire", "Lhea"];

$(function () {
    ReadFile();
    function ReadFile() {
        fetch('weedstrains.txt')
            .then(r => r.text())
            .then(n => { names = names.concat(n.split("\r")); });
    }

    var nametext = $("#strainname");
    var image = $("#strainimg");

    nametext.html(function () { GetRandRedditImage("highrestrees"); return GenerateName(); });

    $("#btn_generatestrain").click(function () {
        image.show();
        nametext.html(function () {
            GetRandRedditImage("highrestrees");
            return GenerateName();
        });
    });

    $("#btn_liststrains").click(function () {
        nametext.html(HTMLListFromArray(names));
        image.hide();
    });

    function GetRandRedditImage(subreddit) {
        var imgcontainer = image;
        var aRandomNum = Math.floor((Math.random() * 25) + 1);

        $.getJSON('https://www.reddit.com/r/' + subreddit + '.json?jsonp=?&show=all&limit=25', function (data) {
            $.each(data.data.children, function (i, item) {
                if (i == aRandomNum) {
                    if (item.data.post_hint == "image") {
                        imgcontainer.html($("<img>", { src: item.data.url, class: 'imgkeepaspect' }));
                        return false;
                    }
                    else {
                        GetRandRedditImage(subreddit);
                    }
                }
            });
        });
    }
});


var last_index;

function GenerateName() {
    var name = '';

    // Get random name from list
    var index = Math.floor(Math.random() * names.length);
    name = names[index];

    // 50% Chance to add a cross-breed
    var rand = Math.floor((Math.random() * names.length * 2) - names.length);
    if (rand == index) { rand = Math.floor((Math.random() * names.length * 2) - names.length); }
    if (rand >= 0) { name += " x " + names[rand]; }

    // 50% chance to add another name before current name
    var randprime = Math.floor((Math.random() * names.length * 2) - names.length);
    if (randprime == index || randprime == rand) { randprime = Math.floor((Math.random() * names.length * 2) - names.length); }
    if (randprime >= 0) { name = names[randprime] + " " + name; }

    // Prevent name from being too long
    if (name.includes(" x ")) { if (name.length > 45) { var split = name.split(" x "); name = split[0]; } }
    else { if (name.length > 27) { var splitprime = name.split(" "); name = splitprime[0]; } }

    return name;
}

function HTMLListFromArray(array) {
    var r = "<small>" + array.length + " Strains Found";
    r += "<ul>";
    for (var n = 0; n < array.length; n++) {
        r += "<li style='list-style-type: none; text-align: left;'>" + array[n] + "</li>";
    }
    r += "</ul></small>";
    return r;
}