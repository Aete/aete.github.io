/**
 * Created by Han on 2018-11-26.
 */

var openLab = ' <h4 style = " margin-top : 0;">Open Lab</h4><p>Students or Researchers can use these open labs. This place is for the people who want to work with students(or researchers) in other major . This kind of collaboration will make many creative ideas and interesting theories.</p><p style = "margin-top:0;"> Open Lab is located on the ground floor which is nearby road and pilotis. Therefore passengers can see inside of Open Lab, and it will make an inspiring environment to other students and researchers.</p><img src="image/collaboration/new/6.jpg">';


$('#planStyle').change(function(){
    if($("#planStyle>option:selected").attr("value") ==="1"){
        $("#plans").html("");
    }
    else if($("#planStyle>option:selected").attr("value") ==="2"){
        $("#plans").html(openLab);
    }
    else if($("#planStyle>option:selected").attr("value") ==="3"){
        $("#plans").html(openLab);
    }
    else if($("#planStyle>option:selected").attr("value") ==="4"){
        $("#plans").html(openLab);
    }
    else if($("#planStyle>option:selected").attr("value") ==="5"){
        $("#plans").html(openLab);
    }
    else{
        $("#plans").html(openLab);
    }
});