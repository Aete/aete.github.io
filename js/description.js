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

info_list[2].descript = '<div class = "row"><video controls src="image/Digtal%20Modeling.mp4">Your user agent does not support the HTML5 Video element.</video></div>';
info_list[1].descript = '<div class = "main">' +
    '<div class = "row">' +
    '<img class="whole" src = "image/theframe/theFrame1.jpg">' +
    '</div><div class = "row">' +
    '<div class="half">' +
    '<img src = "image/theframe/theFrame3.jpg">' +
    '</div>' +
    '<div class="half"' +
    '><img src = "image/theframe/theFrame2.jpg">' +
    '</div>' +
    '</div>' +
    '</div>';