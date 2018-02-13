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