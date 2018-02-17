/**
 * Created by Han on 2018-02-17.
 */

$(".sub_container").click(function(){
    var target = $(this).attr("id");
    sub_body_open(1);
    sub_body_title(target,info_list);
    $("#main").animate({
        scrollTop: 0
    }, 800);
});

$("#close").click(function(){
    sub_body_open(0);
});

var sub_body_open = function(sub){
    if(sub===1){
        $(".sub_body").css("display","flex");
        $(".sorry").css("display","none");
    }
    else{
        $(".sub_body").css("display","none");
    }
};


var sub_body_title = function(target,list){
    for(var i=0; i<list.length;i++){
        if(target ===list[i].title){
            $(".sub_title>h1").text(target);
            $(".sub_info>h3").first().text(list[i].script);
            $(".sub_info>h3").last().text(list[i].person);
            $(".description").attr('src','subpages/'+list[i].title+'.html');
            }
        }
};



