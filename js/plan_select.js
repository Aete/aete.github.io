/**
 * Created by Han on 2018-11-26.
 */

var openLab = ' <h4 style = " margin-top : 0;">Open Lab</h4>'+
                '<p>This place is for the people who want to work with students(or researchers) in other major.'+
                'This kind of collaboration will make many creative ideas and interesting theories.</p>'+
                '<p style = "margin-top:0;"> Open Lab is located on the ground floor which is nearby road and pilotis.'+
                'Passengers can see inside of Open Lab, and it will make an inspiring environment to other students and researchers.</p>'+
                '<img src="image/collaboration/new/6.jpg">';

var Courtyard = ' <h4 style = " margin-top : 0;">Courtyard of Engineering Buildings</h4>'+
    '<p>To activae the place which is not used frequently, we assign the characteristic in each center of Engineering Building.</p>'+
    '<p style = "margin-top:0;">  In case of Engineering Building 2, there is atrium for pleasant envioronment. In that place people can take a rest and have some culturalactivity in atrium.</p>'+
    '<img src="image/collaboration/new/7.jpg">';

var cafe = ' <h4 style = " margin-top : 0;">Cafe & Restaurant</h4>'+
    '<p>Cafe & restaurant is the space for communication. This communication has some'+
    'posibilities which can make more collaboration and exchanging of opinions.</p>'+
    '<img src="image/collaboration/new/8.jpg">';

var sport = ' <h4 style = " margin-top : 0;">Sport Facilities</h4>'+
    '<p>This place can make some communities. In sport facility, people who have different ' +
        'major can communicate each other, and there are some possibilities to make creative thinking.</p><p></p>';

var eng3 = ' <h4 style = " margin-top : 0;">Engineering Building 3</h4>'+
    '<p>This place is for the new departments ; Energy technology, Bio technology and nano technology.' +
    'These three part is new topics of R&D science part. With R&D Science Park, University can make collaboration more easily with companies and research labs.' +
    'The location of 3rd Engineering Building is parking lot now, but we think it is best location to make collaboration between departments because it is a center of all of department.' +
    'There are also workshops, open lecture rooms and seminar rooms in lower part of building, and it is place for some exchanging program. We can bring professors and students who is in other universities and it is will be another type of collaboration.</p>'+
    '<img src="image/collaboration/new/9.jpg">';

var gate = ' <h4 style = " margin-top : 0;">New Entrance from South-East Side</h4>'+
    '<p>This Bridge is connecting for university and near residences. It can make another collaboration between people and researchers.</p>' +
    '<img src="image/collaboration/new/10.jpg">';

$('#planStyle').change(function(){
    if($("#planStyle>option:selected").attr("value") ==="1"){
        $("#plans").html(openLab);
    }
    else if($("#planStyle>option:selected").attr("value") ==="2"){
        $("#plans").html(Courtyard);
    }
    else if($("#planStyle>option:selected").attr("value") ==="3"){
        $("#plans").html(cafe);
    }
    else if($("#planStyle>option:selected").attr("value") ==="4"){
        $("#plans").html(sport);
    }
    else if($("#planStyle>option:selected").attr("value") ==="5"){
        $("#plans").html(eng3);
    }
    else{
        $("#plans").html(gate);
    }
});