/**
 * Created by Han on 2018-02-10.
 */

var square_making = function(list){
    for(var i=0;i<list.length;i++){
        $("#main_body").append(sub_container);
        $(".sub_container:last-child").addClass(list[i].category);
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