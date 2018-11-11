/**
 Created by Han on 2018-11-04.
 */
$('#mapStyle').change(function(){
    if($("#mapStyle>option:selected").attr("value") ==="1"){
        $(".map").attr('src','subpages/map_on.html');
        console.log('check');
    }
    else{
        $(".map").attr('src','subpages/map_off.html');
    }
});

