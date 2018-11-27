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
        console.log(1);
    }
    else if($("#communStyle>option:selected").attr("value") ==="5"){
        $("#cosize").attr('src','image/XS/L.png');
    }
    else if($("#communStyle>option:selected").attr("value") ==="6"){
        $("#cosize").attr('src','image/XS/XL.png');
    }
});