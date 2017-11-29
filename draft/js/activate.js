


/* This is related to header part*/
var projectColor = "#EF5350";
var ideaColor = "#4CAF50";
var aboutColor = "royalblue";

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



