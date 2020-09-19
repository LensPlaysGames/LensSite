$(function () {
    var defaultsidebarheadtext = "Navigation"
    var sidebarhead = $("#sidebarhead");

    sidebarhead.html(defaultsidebarheadtext);

    $(".sidebar").hover(
        function () {
            sidebarhead.css("font-size", "24px");
        },
        function () {
            sidebarhead.css("font-size", "18px");
            sidebarhead.text(defaultsidebarheadtext);
        }
    );

    $(".sidebarselection").hover(
        function () {
            sidebarhead.text($(this).prop("alt"));
        },
        function () {
            return;
        }
    );
});