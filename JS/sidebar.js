$(function () {
    var defaultsidebarheadtext = "Navigation"
    var presidebarheadtext = "Navigate To: ";
    var sidebarhead = $("#sidebarhead");

    sidebarhead.html(defaultsidebarheadtext);

    $(".sidebarselection").hover(function () {
        sidebarhead.text($(this).prop("alt"));
        sidebarhead.css("font-size", "24px");
    }, function () {
        sidebarhead.text(defaultsidebarheadtext);
        sidebarhead.css("font-size", "18px");
    });
});