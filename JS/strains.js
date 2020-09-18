//Strain Names Init
var names = ['GG#4', 'Sour Diesel', 'Legends']

ReadFile();
function ReadFile() {
    fetch('weedstrains.txt').then(r => r.text()).then(n => { names = n.split("\r"); console.log(n); })
}


//jQuery
$(function () {
    var nametext = $("#strainname");

    $("#btn_generatestrain").click(function () {
        nametext.html(function () {
            GetRandRedditImage("WeedPics");
            var name = GenerateName()
            return name;
        });
    });

    $("#btn_liststrains").click(function () {
        nametext.html(HTMLListFromNames());
    });

    function GetRandRedditImage(subreddit) {
        var imgcontainer = nametext;
        var aRandomNum = Math.floor((Math.random() * 25) + 1);

        $.getJSON('http://www.reddit.com/r/' + subreddit + '.json?jsonp=?&show=all&limit=25', function (data) {
            $.each(data.data.children, function (i, item) {
                if (i == aRandomNum) {
                    console.log(item.data.url);
                    imgcontainer.append($("<img>", { src: item.data.url, class: 'imgkeepaspect' }));
                    return false;
                }
            });
        });
    }
});

//JavaScript
function GenerateName() {
    var name = '';

    var index = Math.floor(Math.random() * names.length);
    name = names[index];

    var rand = Math.floor((Math.random() * names.length * 2) - names.length);
    if (rand >= 0) { name += " x " + names[rand]; }

    var randprime = Math.floor((Math.random() * names.length * 2) - names.length);
    if (randprime >= 0) { name = names[randprime] + name; }

    if (name.includes(" x ")) { if (name.length > 45) { var split = name.split(" x "); name = split[0]; } }
    else { if (name.length > 27) { var splitprime = name.split(" "); name = splitprime[0]; } }


    return name;
}

function HTMLListFromNames() {
    var r = "<small>" + names.length + " Strains Found";
    r += "<ul>";
    for (var n = 0; n < names.length; n++) {
        r += "<li>" + names[n] + "</li>";
    }
    r += "</ul></small>";
    return r;
}