function GetRandomImageLoremflickr() {
    var width = 180 + (Math.floor(Math.random() * 300));
    var height = 180 + (Math.floor(Math.random() * 300));
    var url = "http://loremflickr.com/" + width + "/" + height;

    var img = "<img src='";
    img += url;
    img += "' />";
    return img;
}

$(function () {
    SetRandomImgHTML();

    $("#txt_randompic").click(function () {
        SetRandomImgHTML();
    });
    $("#randomimg").click(function () {
        SetRandomImgHTML();
    });
});

function SetRandomImgHTML() {
    $("#randomimg").html(GetRandomImageLoremflickr());
}