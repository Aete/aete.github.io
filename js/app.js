// this part is for dropdown menu
var drop_click = 0;
var drop2_click = 0;
var jc_counted_tree = 259758;
var jc_water_captured = 197416000;
var ranges = [0,1,2,3,4,5];
var percents = ['100~80', '80~60', '60~40', '40~20', '20~0'];

$('#num_tree').text(jc_counted_tree.toLocaleString());
$("#total_benefit_tree").text((Math.round((Math.round(jc_counted_tree*67.657)/100))*100).toLocaleString());
$('#water_captured_tree').text(jc_water_captured.toLocaleString());
$('#energy_conserved_tree').text((Math.round((Math.round(jc_counted_tree*969.025)/100))*100).toLocaleString());
$('#co2_removed_tree').text((Math.round((Math.round(jc_counted_tree*454.072)/100))*100).toLocaleString());
$('#air_improved_tree').text((Math.round((Math.round(jc_counted_tree*1.811)/100))*100).toLocaleString());




// This is about dropbox menus
var dropbox_making = function(dict_) {
    var keys = Object.keys(dict_);
    for (var i = 0; i < keys.length; i++) {
        $("#text_tract_box").append("<p>Census Tract "+keys[i]+" &nbsp</p>");
        $("#text_tract_box>p:last-child").attr('id',keys[i]);
    }
};

dropbox_making(tract_info);


