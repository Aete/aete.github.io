/* This is related to header part*/
var projectColor = "#EF5350";
var ideaColor = "#4CAF50";
var profileColor = "royalblue";

$(".nav_content").hover(function () {
    if($(this).attr('id')==='project'){
        $(this).css("color", projectColor);
    }
    else if($(this).attr('id')==='idea'){
        $(this).css("color", ideaColor);
    }
    else{
        $(this).css("color", profileColor);
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


/* this is related to square selection*/
var category1 = 0 ;

$(".nav_content").click(function(){
    if($(this).attr('id')==='project'){
        category1 = "project";
    }
    else if($(this).attr('id')==='idea'){
        category1= "idea";
    }
    else{
        category1 = "profile";
    }
    squareSelector();
});

$("#category").change(function(){
    if($("#category>option:selected").attr("value") ==="project"){
        category1 = "project";
    }
    else if($("#category>option:selected").attr("value") ==="idea"){
        category1= "idea";
    }
    else if($("#category>option:selected").attr("value") ==='profile'){
        category1 = "profile"
    }
    else{
        category1 = "all"
    }
    squareSelector();
});

var squareSelector = function(){
    if(category1==="project"){
        $(".square").css("display","none");
        $(".project").css("display","flex");
    }
    else if(category1==="idea"){
        $(".square").css("display","none");
        $(".idea").css("display","flex");
    }
    else if(category1 === "profile"){
        $(".square").css("display","none");
        $(".profile").css("display","flex");
    }
    else{
        $(".square").css("display","flex");
    }

};


/* this is related to drop-down menu*/



