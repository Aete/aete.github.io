var projectList = [
    {"title":'Seoul Living-Pop Dashboard', "time":'on-going', "category":"project"},
    {"title":'Make it Green Dashboard', "time":2019, "category":"project"},
    {"title":"Plan Generator", "time" : 2018, "category" : "idea"},
    {"title":"Dwelling by Walling", "time" : 2016, "category" : "project"},
    {"title":"The Frame", "time" : 2016, "category" : "project"},
    {"title":"XS, S, M, L, XL", "time" : 2015, "category" : "project"},
    {"title":"Collaboration", "time" : 2015, "category" : "project"},
    {"title":"QR City", "time" : 2013, "category" : "idea"},
    {"title":"Snowflake", "time" : null, "category" : "idea"},
    {"title":"Profile", "time" : null, "category" : "profile"},
    {"title":"Github", "time" : null, "category" : "profile"},
    {"title":"Linkedin", "time" : null, "category" : "profile"},
    {"title":"Medium","time":null,"category":"profile"}

    ];

for (var i = 0; i<projectList.length;i++){
    if(projectList[i].title==='QR City'){
        projectList[i].imgsrc = "<image src='image/"+projectList[i].title+".gif' class='logo' style='width:90%;'>";
    }
    else if(projectList[i].title==='Dwelling by Walling'){
        projectList[i].imgsrc = "<image src='image/"+projectList[i].title+".png' class='logo' style='width:95%;'>";
    }
    else if(projectList[i].title==='XS, S, M, L, XL'){
        projectList[i].imgsrc = "<image src='image/"+projectList[i].title+".png' class='logo' style='width:95%;'>";
    }
    else if(projectList[i].title==='Collaboration'){
        projectList[i].imgsrc = "<image src='image/"+projectList[i].title+".png' class='logo' style='width:95%;'>";
    }
    else if(projectList[i].title==='Profile'){
        projectList[i].imgsrc = "<image src='image/"+projectList[i].title+".jpg' class='logo' style='width:95%;'>";
    }
    else if(projectList[i].title==='The Frame'){
        projectList[i].imgsrc = "<image src='image/"+projectList[i].title+".jpg' class='logo' style='width:95%;'>";
    }
    else if(projectList[i].title==='Github'){
        projectList[i].imgsrc = "<image src='image/"+projectList[i].title+".jpg' class='logo' style='width:60%;'>";
    }
    else if(projectList[i].title==='Linkedin'){
        projectList[i].imgsrc = "<image src='image/Linkedin.png' class='logo' style='width:40%;'>";
    }
    else if(projectList[i].title==='Plan Generator'){
        projectList[i].imgsrc = "<image id = 'plan' src='image/plan.gif' class='logo' style='width:95%;'>";
    }
    else if(projectList[i].title==='Snowflake'){
        projectList[i].imgsrc = "<image src='image/snowflake.png' class='logo' style='width:60%;'>";
    }
    else if(projectList[i].title==='Make it Green Dashboard'){
        projectList[i].imgsrc = "<image id = 'jcdashboard' src='image/jc_dashboard.jpg' class='logo'>";
    }
    else if(projectList[i].title==='Medium'){
        projectList[i].imgsrc = "<image id = 'medium' src='image/medium.png' class='logo'>";
    }
    else if(projectList[i].title==='Seoul Living-Pop Dashboard'){
        projectList[i].imgsrc = "<image id = 'medium' src='image/livingpop_dash.png' class='logo'>";
    }
}

var placeholder = '<div class="square profile" id="placeholder" ></div>' +
                   '<div class="square profile" id="placeholder" ></div>' +
                  '<div class="square profile" id="placeholder" ></div>' +
                   '<div class="square project" id="placeholder" ></div>' +
                    '<div class="square project" id="placeholder" ></div>' +
                    '<div class="square project" id="placeholder" ></div>' +
                    '<div class="square idea" id="placeholder" ></div>' +
                    '<div class="square idea" id="placeholder" ></div>' +
                    '<div class="square idea" id="placeholder" ></div>';