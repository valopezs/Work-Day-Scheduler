// display and update time element in header
var todayDate = moment().format('dddd, MMMM Do YYYY, h:mm.ss');
$("#currentDay").html(todayDate);

$(document).ready(function () {
    // saveBtn click listener
    $(".saveBtn").on("click", function () {
        // get values of the description in JQuery
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // save description text in local storage
        localStorage.setItem(time, text);
    })

    function timeTracker() {
        // get current number of hours
        var timeNow = moment().hour();

        // loop over time blocks
    }
})