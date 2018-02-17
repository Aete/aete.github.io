var category = ["Project","Idea","Profile"];

var subCategory = [
    {"Project" : ["All", "Architecture", "Competetion", "Others"]},
    {"Idea" : ["All", "Writing", "Timeline", "Others"]}
];

var projectList = [
    {"title":"The Frame", "time" : 2017, "category" : "project"},
    {"title":"Profile", "time" : null, "category" : "profile"},
    {"title":"QR-Driven City", "time" : 2013, "category" : "idea"},
    {"title":"Collaboration", "time" : 2015, "category" : "Project"},
    {"title":"Writing", "time" : null, "category" : "idea"},
    {"title":"Pengunticon", "time" : 2013, "category" : "project"},
    {"title":"Dwelling by Walling", "time" : 2017, "category" : "project"},
    {"title":"XS, S, M, L, XL", "time" : 2015, "category" : "project"}
    ];


var info_list=[
    {"title":"The Frame", "script" : "Graduation work in SKKU", "person" : "Design excellence award (1st prize) in SKKU spring semester, 2017"},
    {"title":"Profile", "script" : null, "person" : null},
    {"title":"QR-Driven City", "script" : "Final Project at SKKU Design Modeling Class(Spring Semester, 2013)", "person" : "Han Seung Gyun, Jung Tae Jung, Jae Jun Hyung and Bang Jun Gyu(Department of Architecture, SKKU)"},
    {"title":"Collaboration", "script" : "10th East Asia Urban Architecture Joint Studio 2015", "person" : "Han Seung Gyun, Lee Dong Yeong, Akira Ooka, Yuna Kinoshita"},
    {"title":"Writing", "script" : null, "person" : null},
    {"title":"Pengunticon", "script" : "GS Caltex Idea Competition", "person" : "Han Seung Gyun, Ryu Ho Jun, Lee Yong Mun, Kim Sang Min"},
    {"title":"Dwelling by Walling", "script" : "Bronze Prize in Gyeonggi Architecture Fair", "person" : "Han Seung Gyun, Choi Tae Won, Kim Ji Soo"},
    {"title":"XS, S, M, L, XL", "script" : "SKKU Design Studio(Fall Semester, 2015)", "person" : "Han Seung Gyun"}
];

for (var i = 0; i<projectList.length;i++){
    projectList[i].imgsrc = "<image src='image/"+projectList[i].title+".svg' class='logo'>";
    if(projectList[i].title==='QR-Driven City'){
        projectList[i].imgsrc = "<image src='image/"+projectList[i].title+".gif' class='logo' style='width:90%;'>";
    }
    else if(projectList[i].title==='Dwelling by Walling'){
        projectList[i].imgsrc = "<image src='image/"+projectList[i].title+".png' class='logo' style='width:95%;'>";
    }
    else if(projectList[i].title==='XS, S, M, L, XL'){
        projectList[i].imgsrc = "<image src='image/"+projectList[i].title+".png' class='logo' style='width:95%;'>";
    }
    else if(projectList[i].title==='Collaboration'){
        projectList[i].imgsrc = "<image src='image/"+projectList[i].title+".png' class='logo' style='width:75%;'>";
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