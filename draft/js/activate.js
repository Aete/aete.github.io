$(document).ready(function(){
    $("#home").hover(function(){
        $(this).css("color", "rgb(0,184,188)");
    }, function(){
        $(this).css("color", "black");
    });
    $("#design").hover(function(){
        $(this).css("color", "crimson");
    }, function(){
        $(this).css("color", "black");
    });
    $("#data").hover(function(){
        $(this).css("color", "MediumSeaGreen");
    }, function(){
        $(this).css("color", "black");
    });
    $("#paper").hover(function(){
        $(this).css("color", "purple");
    }, function(){
        $(this).css("color", "black");
    });
    $("#about").hover(function(){
        $(this).css("color", "rgb(0,184,188)");
    }, function(){
        $(this).css("color", "black");
    });
    $("#nav_button").hover(function(){
        $(this).css("color", "rgb(0,184,188)");
        $(this).css("cursor", "pointer");
    }, function(){
        $(this).css("color", "black");
    });
    $(".button").hover(function(){
        $(this).css("color", "dimgray");
        $(this).css("cursor", "pointer");
    }, function(){
        $(this).css("color", "black");
    });
});
