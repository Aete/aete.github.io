/**
 * Created by Han on 2018-02-10.
 */

var square_making = function(list){
    for(var i=0;i<list.length;i++){
        $("#main_body").append(sub_container);
        $(".sub_container:last-child").addClass(list[i].category);
        $(".sub_container:last-child").attr('id',list[i].title);
        console.log(list[i].title);
        if(list[i].title === "Github"){
            $(".sub_container:last-child").attr('onclick', "window.open('https://github.com/aete','_blank')");
        }
        else if(list[i].title === "Medium"){$(".sub_container:last-child")
            .attr('onclick', "window.open('https://medium.com/@seunggyunhan','_blank')");}

        else if(list[i].title === "Make it Green Dashboard (prototype)"){$(".sub_container:last-child")
            .attr('onclick', "window.open('han.codes/jc-dashboard','_blank')");}

        else if(list[i].title === "Linkedin"){$(".sub_container:last-child")
            .attr('onclick', "window.open('https://www.linkedin.com/in/seunggyunhancodes/','_blank')");}
        else{$(".sub_container:last-child")
            .attr('onclick','location.href= '+"'"+list[i].title+".html';");}

        $(".sub_container:last-child").append(square);
        $(".square:last-child").append(list[i].imgsrc );
        if(list[i].time != null){$(".sub_container:last-child").append(title.replace('%data',list[i].title+'<br>('+list[i].time+')'));}
        else{$(".sub_container:last-child").append(title.replace('%data',list[i].title));}
    }
        $("#main_body").append(placeholder);
};

square_making(projectList);

