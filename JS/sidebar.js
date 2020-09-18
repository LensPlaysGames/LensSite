$(function () {
    var defaultsidebarheadtext = "Navigation"
    var presidebarheadtext = "Navigate To: ";
    var sidebarhead = $("#sidebarhead");

    sidebarhead.html(defaultsidebarheadtext);

    $(".sidebarselection").hover(function () {
        sidebarhead.text(presidebarheadtext + $(this).prop("alt"));
    }, function () {
        sidebarhead.text(defaultsidebarheadtext);
    });
});