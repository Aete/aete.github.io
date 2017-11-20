var dropclick = 0;
var projectColor = "#EF5350";
var ideaColor = "#4CAF50";
var aboutColor = "royalblue";

$(document).ready(function() {
    /* This is related to header part*/
    $(".nav_content").hover(function () {
        if($(this).attr('id')==='project'){
            $(this).css("color", projectColor);
        }
        else if($(this).attr('id')==='idea'){
            $(this).css("color", ideaColor);
        }
        else{
            $(this).css("color", aboutColor);
        }
        $(this).css("transition", "0.2s linear");
    }, function () {
        $(this).css("color", "black");
    });


    /* this is related to navigation bar*/
    $("#nav_button").click(function () {
        $("#nav_menu").css("left", "calc(100vw - 230px)");
    });
    $("#nav_menu").first().click(function () {
        $("#nav_menu").css("left", "800px");
        $("#nav_menu a").css("animation","moveback 0.7s");
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