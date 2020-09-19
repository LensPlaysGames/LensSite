$(function () {
    GetRandRedditImage("EarthPorn");

    $("#txt_randompic").click(function () {
        GetRandRedditImage("EarthPorn");
    });
    $("#randomimg").click(function () {
        GetRandRedditImage("EarthPorn");
    });



    function GetRandRedditImage(subreddit) {
        var imgcontainer = $("#randomimg");
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