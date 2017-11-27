


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

//this is front-page : animation
var frontarraynum = new Array(0,1,-1);
var frontarray = new Array();
frontarray[0] = $("#prj_front");
frontarray[1] = $("#idea_front");
frontarray[2] = $("#about_front");

$("#increase").click(function () {
        for(var i= 0; i<frontarraynum.length; i++){
            if(frontarraynum[i]===0){
                frontarray[i].css('left',"100%");
                frontarray[i].css("transition", "1s linear");
                frontarraynum[i]=1;
            }
            else if(frontarraynum[i]===1){
                frontarray[i].css('left',"-100%");
                frontarray[i].css("transition", "none");
                frontarraynum[i]=-1;
            }
            else{
                frontarray[i].css('left',"0");
                frontarray[i].css("transition", "1s linear");
                frontarraynum[i]=0;
            }
    }
    console.log(frontarraynum);
});

$("#decrease").click(function () {
    for(var i= 0; i<frontarraynum.length; i++){
        if(frontarraynum[i]===0){
            frontarray[i].css('left',"-100%");
            frontarray[i].css("transition", "1s linear");
            frontarraynum[i]=-1;
        }
        else if(frontarraynum[i]===1){
            frontarray[i].css('left',"0");
            frontarray[i].css("transition", "1s linear");
            frontarraynum[i]=0;
        }
        else{
            frontarray[i].css('left',"100%");
            frontarray[i].css("transition", "none");
            frontarraynum[i]=1;
        }
    }

});


/* this is related to drop-down menu*/
$("#drop_down_con").click(function () {
    drop_opener();
});

// this is function to open and close drop down menu
var dropclick = 0;
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
