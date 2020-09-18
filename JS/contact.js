$(function () {
    var select = $("#slc_topic");
    var dfl_slc_visual = "Topic: ";
    var selectionvisual = $("#lbl_topic");

    selectionvisual.html(dfl_slc_visual);

    select.change(function () {
        selectionvisual.text(dfl_slc_visual + $(this).prop("value"));
    });
});