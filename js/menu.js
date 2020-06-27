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
        console.log('check');
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
        $(".sub_container").css("display","none");
        $(".project").css("display","flex");
    }
    else if(category1==="idea"){
        $(".sub_container").css("display","none");
        $(".idea").css("display","flex");
    }
    else if(category1 === "profile"){
        $(".sub_container").css("display","none");
        $(".profile").css("display","flex");
     }
    else if(category1==="all"){
        $(".sub_container").css("display","flex");
    }
    subSelector();
};


var subSelector = function(){
    if(category1==="project") {
        $("#category_sub").html("<option value = 'all'>All</option>" +
            "<option value = 'competition'>Architecture</option>" +
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



