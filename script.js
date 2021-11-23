$(document).ready(function () {

    $("#displayheader").click(function () {
        $(".header").slideToggle("slow");
    });

    $(".boxleft").animate({
        opacity: '1.0',
    }, "slow");

    $("#scrolldown").click(function () {
        $("#scrolldown").css({ "display": "none" });
        $(".boxanimate").slideDown(1500);
        $("#contact").css({ "display": "block" });

    });

    $("#contact").click(function () {
        $(".contact").slideToggle("slow");
    });

    $('a[href="#contact"]').click(function (){
        //$("#scrolldown").click();
        $("#contact").click();

    });
    $('a[href="#skill"]').click(function (){
        $("#scrolldown").click();
        //$("#contact").click();

    });
    $('a[href="#education"]').click(function (){
        $("#scrolldown").click();
        //$("#contact").click();

    });

});