$(document).ready(function(){
    $("#home").hover(function(){
        $(this).css("color", "#00BCD4");
    }, function(){
        $(this).css("color", "black");
    });

    $("#design").hover(function(){
        $(this).css("border-top", "3px solid #F44336");
        $(this).css("font-weight", "700");
    }, function(){
        $(this).css("border-top", "3px solid white");
        $(this).css("font-weight", "400");
    });
    $("#data").hover(function(){
        $(this).css("border-top", "3px solid #4CAF50");
        $(this).css("font-weight", "700");
    }, function(){
        $(this).css("border-top", "3px solid white");
        $(this).css("font-weight", "400");
    });
    $("#paper").hover(function(){
        $(this).css("border-top", "3px solid #9C27B0");
        $(this).css("font-weight", "700");
    }, function(){
        $(this).css("border-top", "3px solid white");
        $(this).css("font-weight", "400");
    });
    $("#about").hover(function(){
        $(this).css("border-top", "3px solid #00BCD4");
        $(this).css("font-weight", "700");
    }, function(){
        $(this).css("border-top", "3px solid white");
        $(this).css("font-weight", "400");
    });
    $("#nav_button").hover(function(){
        $(this).css("color", "#00BCD4");
    }, function(){
        $(this).css("color", "black");
    });
    $(".button").hover(function(){
        $(this).css("color", "dimgray");
    }, function(){
        $(this).css("color", "black");
    });
});
