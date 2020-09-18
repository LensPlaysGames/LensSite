$(function () {
    GetRandRedditImage("Pic");

    $("#txt_randompic").click(function () {
        GetRandRedditImage("Pic");
    });
    $("#randomimg").click(function () {
        GetRandRedditImage("Pic");
    });



    function GetRandRedditImage(subreddit) {
        var imgcontainer = $("#randomimg");
        var aRandomNum = Math.floor((Math.random() * 25) + 1);

        $.getJSON('http://www.reddit.com/r/' + subreddit + '.json?jsonp=?&show=all&limit=25', function (data) {
            $.each(data.data.children, function (i, item) {

                if (i == aRandomNum) {
                    if (item.data.post_hint == "image") {
                        console.log(item.data);
                        imgcontainer.html($("<img>", { src: item.data.url, class: 'imgkeepaspect' }));
                        return false;
                    } else {
                        GetRandRedditImage(subreddit);
                    }
                }
            });
        });
    }
});