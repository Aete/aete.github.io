// this part is for dropdown menu

/**
 * Created by Han on 2018-02-10.
 */

const square_making = function(list){
    for(let i=0;i<list.length;i++){
        $("#main_body").append(sub_container);
        $(".sub_container:last-child").addClass(list[i].category);
        $(".sub_container:last-child").attr('id',list[i].title);
        if(list[i].title === "Github"){
            $(".sub_container:last-child").attr('onclick', "window.open('https://github.com/aete','_blank')");
        }
        else if(list[i].title === "Medium"){$(".sub_container:last-child")
            .attr('onclick', "window.open('https://medium.com/@seunggyunhan','_blank')");}

        else if(list[i].title === "Make it Green<br>Dashboard"){$(".sub_container:last-child")
            .attr('onclick', "window.open('http://www.han.codes/jc_datadashboard_prototype/','_blank')");}

        else if(list[i].title === "Seoul Living-Pop<br>Dashboard"){$(".sub_container:last-child")
            .attr('onclick', "window.open('http://www.han.codes/Data-in-Seoul/livingpop/','_blank')");}

        else if(list[i].title === "Linkedin"){$(".sub_container:last-child")
            .attr('onclick', "window.open('https://www.linkedin.com/in/seunggyunhancodes/','_blank')");}

        else if(list[i].title === "KakaoTalk-Clone"){$(".sub_container:last-child")
            .attr('onclick', "window.open('https://www.han.codes/Kakaotalk-clone/','_blank')");}

        else if(list[i].title === "Momentum-Clone"){$(".sub_container:last-child")
            .attr('onclick', "window.open('https://www.han.codes/Momentum_clone/','_blank')");}

        else if(list[i].title === "Monitoring COVID-19 in <br> US Metropolitan Areas"){$(".sub_container:last-child")
            .attr('onclick', "window.open('https://nyumarron.github.io/covid_msa/','_blank')");}

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




