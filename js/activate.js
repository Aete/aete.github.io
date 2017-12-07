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
    $(".nav_menu").css("left", "calc(100vw - 230px)");
});
$(".nav_menu").first().click(function () {
    $(".nav_menu").css("left", "800px");
    $(".nav_menu a").css("animation","moveback 0.7s");
});

$(".nav_menu_box").click(function () {
    if($(this).attr('id')==='project_nav'){
        category1 ="project";
    }
    else if($(this).attr('id')==='idea_nav'){
        category1= "idea";
    }
    else{
        category1 = "profile";
    }
    squareSelector();
    $(".sub_body").css("display","none");
    $(".nav_menu").css("left", "800px");
    $(".nav_menu a").css("animation","moveback 0.7s");
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
    $(".sub_body").css("display","none");
});

$("#home").click(function(){
    category1="all";
    squareSelector();
    $(".sub_body").css("display","none");
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
    $(".sub_body").css("display","none");
});

var squareSelector = function(){
    if(category1==="project"){
        $(".square").css("display","none");
        $(".project").css("display","flex");
        $("#category").html("<option value='project'>Project</option>" +
            "<option value = 'all'>All</option>" +
            "<option value='idea'>Idea</option>" +
            "<option value='profile'>Profile</option>");
    }
    else if(category1==="idea"){
        $(".square").css("display","none");
        $(".idea").css("display","flex");
        $("#category").html("<option value='idea'>Idea</option>" +
            "<option value = 'all'>All</option>" +
            "<option value='project'>Project</option>" +
            "<option value='profile'>Profile</option>");
    }
    else if(category1 === "profile"){
        $(".square").css("display","none");
        $(".profile").css("display","flex");
        $("#category").html("<option value='profile'>Profile</option>" +
            "<option value = 'all'>All</option>" +
            "<option value='project'>Project</option>" +
            "<option value='idea'>Idea</option>");
    }
    else if(category1==="all"){
        $(".square").css("display","flex");
        $("#category").html(
            "<option value = 'all'>All</option>" +
            "<option value='project'>Project</option>" +
            "<option value='idea'>Idea</option>"+
            "<option value='profile'>Profile</option>");
}
    subSelector();
};


var subSelector = function(){
    if(category1==="project") {
        $("#category_sub").html("<option value = 'all'>All</option>" +
            "<option value = 'competition'>Competition</option>" +
            "<option value = 'others'>Others</option>");
    }
    else if(category1 === "idea") {
        $("#category_sub").html("<option value = 'all'>All</option>" +
            "<option value = 'essay'>Essay</option>" +
            "<option value = 'papers'>Paper</option>" +
            "<option value = 'timeline'>Timeline</option>");
    }
    else{
        $("#category_sub").html("<option>Sub-Category</option>")
    }
};

// this is related to square animation

$(".square").hover(function () {
    $(this).children(".title").css("display","flex");
    $(this).children(".logo").css("opacity","0.2");
}, function () {
    $(this).children(".title").css("display","none");
    $(this).children(".logo").css("opacity","1");
});

var sub_body = 0;
$(".square").click(function(){
    $(".sub_body").css("display","flex");
    if(typeof($(this).attr("id"))!== undefined){
        $("iframe").attr("src","subpages/" + $(this).attr("id")+".html") ;
    }
    else{$("iframe").attr("src","subpages/blank.html") ;}
    $("#main").animate({
        scrollTop: 0
    }, 1000);
});



var subpagelist = ["profile"];


