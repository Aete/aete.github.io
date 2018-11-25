/**
 Created by Han on 2018-11-04.
 */
$('#mapStyle').change(function(){
    if($("#mapStyle>option:selected").attr("value") ==="1"){
        $(".map").attr('src','subpages/subway.html');
    }
    else if($("#mapStyle>option:selected").attr("value") ==="2"){
        $(".map").attr('src','subpages/Bus.html');
    }
    else{
        $(".map").attr('src','subpages/map_off.html');
    }
});

