var category = ["Project","Idea","Profile"];

var subCategory = [
    {"Project" : ["All", "Architecture", "Competetion", "Others"]},
    {"Idea" : ["All", "Writing", "Timeline", "Others"]}
];

var projectList = [
    {"title":"The Frame", "time" : 2017, "category" : "project"},
    {"title":"Profile", "time" : null, "category" : "profile"},
    {"title":"Pengunticon", "time" : 2013, "category" : "idea"},
    {"title":"Writing", "time" : null, "category" : "idea"},
    {"title":"QR-Driven City", "time" : 2013, "category" : "idea"},
    {"title":"Dwelling by Walling", "time" : 2017, "category" : "project"},
    {"title":"XS, S, M, L, XL", "time" : 2015, "category" : "project"}
    ];

for (var i = 0; i<projectList.length;i++){
    projectList[i].imgsrc = "image/"+projectList[i].title+".svg"
}


var placeholder = '<div class="square profile" id="placeholder" ></div>' +
                   '<div class="square project" id="placeholder" ></div>' +
                    '<div class="square idea" id="placeholder" ></div>' +
                    '<div class="square idea" id="placeholder" ></div>' +
                    '<div class="square idea" id="placeholder" ></div>';