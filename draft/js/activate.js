var dropclick = 0;
$(document).ready(function() {
    /* This is related to header part*/
    $("#design").hover(function () {
        $(this).css("color", "#EF5350");
        $(this).css("transition", "0.3s linear");
    }, function () {
        $(this).css("color", "black");
    });
    $("#data").hover(function () {
        $(this).css("color", "#4CAF50");
        $(this).css("transition", "0.3s linear");
    }, function () {
        $(this).css("color", "black");
    });
    $("#paper").hover(function () {
        $(this).css("color", "#9C27B0");
        $(this).css("transition", "0.3s linear");
    }, function () {
        $(this).css("color", "black");
    });
    $("#about").hover(function () {
        $(this).css("color", "royalblue");
        $(this).css("transition", "0.3s linear");
    }, function () {
        $(this).css("color", "black");
    });

    /* this is related to navigation bar*/
    $("#nav_button").click(function () {
        $("#nav_menu").css("left", "54vw");
        $("#nav_menu a").css("animation","move 1.2s");
    });
    $("#nav_menu").first().click(function () {
        $("#nav_menu").css("left", "800px");
        $("#nav_menu a").css("animation","moveback 2s");
    });

    /* this is related to drop-down menu*/
    $("#drop_down_con").click(function () {
        drop_opener();
    });

    // this is function to open and close drop down menu
    var drop_opener = function(){
        if(dropclick===0){
            $(".drop").css("display", "block");
            dropclick = 1;
        }
        else{
            $(".drop").css("display", "none");
            dropclick = 0;
        }
    };
});