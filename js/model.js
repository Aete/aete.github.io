var category = ["Project","Idea","Profile"];

var subCategory = [
    {"Project" : ["All", "Architecture", "Competetion", "Others"]},
    {"Idea" : ["All", "Writing", "Timeline", "Others"]}
];

var projectList = [
    {"title":"The Frame", "time" : 2017, "category" : "Project"},
    {"title":"Profile", "time" : null, "category" : "Profile"},
    {"title":"Pengunticon", "time" : 2013, "category" : "Idea"},
    {"title":"Writing", "time" : null, "category" : "Idea"},
    {"title":"Tangible Urban Design Tool", "time" : null, "category" : "Idea"},
    {"title":"Dwelling by Walling", "time" : 2017},
    {"title" : "S, M, L, XL", "time" : 2016}
    ];

for (var i = 0; i<projectList.length();i++){
    projectList[i].imgsrc = projectList[i].title+".jpg"
}
