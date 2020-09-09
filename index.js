$(function () {
    //this code runs after page is fully loaded
    $("#nameform").on('submit', function (e) {
        e.preventDefault();
        var fname = $('#fname').val();
        var lname = $('#lname').val();
        var newHTML = '<ch1>' + fname + ' ' + lname + '</ch1>';
        $(".jumbotron").removeClass('d-none').html(newHTML);
        //$("#j3").html("<ch3>test</ch3>");
        //console.log(html);
        return false; //prevents reload on submit
    });
});