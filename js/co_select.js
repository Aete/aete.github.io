/**
 * Created by Han on 2018-11-26.
 */

$('#communStyle').change(function(){
    if($("#communStyle>option:selected").attr("value") ==="2"){
        $("#cosize").attr('src','image/XS/XS.png');
    }
    else if($("#communStyle>option:selected").attr("value") ==="3"){
        $("#cosize").attr('src','image/XS/S.png');
    }
    else if($("#communStyle>option:selected").attr("value") ==="4"){
        $("#cosize").attr('src','image/XS/M.png');
    }
    else if($("#communStyle>option:selected").attr("value") ==="5"){
        $("#cosize").attr('src','image/XS/L.png');
    }
    else if($("#communStyle>option:selected").attr("value") ==="6"){
        $("#cosize").attr('src','image/XS/XL.png');
    }
});

$('#plan_sel').change(function(){
    if($("#plan_sel>option:selected").attr("value") ==="2"){
        $("#drawings").attr('src','image/XS/plan.jpg');
    }
    else if($("#plan_sel>option:selected").attr("value") ==="3"){
        $("#drawings").attr('src','image/XS/model.jpg');
    }
});