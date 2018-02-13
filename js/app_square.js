/**
 * Created by Han on 2018-02-10.
 */

var square_making = function(list){
    for(var i=0;i<list.length;i++){
        $("#main_body").append(sub_container);
        $(".sub_container:last-child").addClass(list[i].category);
        $(".sub_container:last-child").attr('id',list[i].title);
        $(".sub_container:last-child").append(square);
        $(".square:last-child").append(list[i].imgsrc );
        if(list[i].time != null){
            $(".sub_container:last-child").append(title.replace('%data',list[i].title+'('+list[i].time+')'));
        }
        else{
            $(".sub_container:last-child").append(title.replace('%data',list[i].title));
        }
    }
        $("#main_body").append(placeholder);
};

square_making(projectList);

var sub_body = 0;
$(".sub_container").click(function(){
    console.log(typeof($(this).attr("id")));
    if(typeof($(this).attr("id")) === "undefined"){
        sub_body=0;
    }
    else{
        sub_body = 1;
        $("iframe").attr("src","subpages/" + $(this).attr("id")+".html") ;
    }
    sub_body_open(sub_body);
    $("#main").animate({
        scrollTop: 0
    }, 800);
});

var sub_body_open = function(sub){
    if(sub===1){
        $(".sub_body").css("display","flex");
    }
    else{
        $(".sub_body").css("display","none");
    }
};