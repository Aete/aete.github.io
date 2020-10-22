let projectList = [
    {"title": "Interagency work zone<br>traffic data modeling and analysis", "time": "2020", "category": "project"},
    {"title": "Monitoring COVID-19 in <br> US Metropolitan Areas", "time": "~ Present", "category": "project"},
    {"title": "Seoul Living-Pop<br>Dashboard", "time": "2020", "category": "project"},
    {"title": "Make it Green<br>Dashboard", "time": 2019, "category": "project"},
    {"title": "Plan Generator", "time": 2018, "category": "idea"},
    {"title": "Dwelling by Walling", "time": 2016, "category": "project"},
    {"title": "The Frame", "time": 2016, "category": "project"},
    {"title": "XS, S, M, L, XL", "time": 2015, "category": "project"},
    {"title": "Collaboration", "time": 2015, "category": "project"},
    {"title": "QR City", "time": 2013, "category": "idea"},
    {"title": "KakaoTalk-Clone", "time": 2020, "category": "project"},
    {"title": "Momentum-Clone", "time": 2020, "category": "project"},
    {"title": "Snowflake", "time": null, "category": "idea"},
    {"title": "Profile", "time": null, "category": "profile"},
    {"title": "Github", "time": null, "category": "profile"},
    {"title": "Linkedin", "time": null, "category": "profile"},
    {"title": "Medium", "time": null, "category": "profile"}
];

for (let i = 0; i < projectList.length; i++) {
    if (projectList[i].title === 'QR City') {
        projectList[i].imgsrc = "<image src='image/" + projectList[i].title + ".gif' class='logo' style='width:90%;'>";
    } else if (projectList[i].title === 'Dwelling by Walling') {
        projectList[i].imgsrc = "<image src='image/" + projectList[i].title + ".png' class='logo' style='width:95%;'>";
    } else if (projectList[i].title === 'XS, S, M, L, XL') {
        projectList[i].imgsrc = "<image src='image/" + projectList[i].title + ".png' class='logo' style='width:95%;'>";
    } else if (projectList[i].title === 'Collaboration') {
        projectList[i].imgsrc = "<image src='image/" + projectList[i].title + ".png' class='logo' style='width:95%;'>";
    } else if (projectList[i].title === 'Profile') {
        projectList[i].imgsrc = "<image src='image/" + projectList[i].title + ".jpg' class='logo' style='width:95%;'>";
    } else if (projectList[i].title === 'The Frame') {
        projectList[i].imgsrc = "<image src='image/" + projectList[i].title + ".jpg' class='logo' style='width:95%;'>";
    } else if (projectList[i].title === 'Github') {
        projectList[i].imgsrc = "<image src='image/" + projectList[i].title + ".jpg' class='logo' style='width:60%;'>";
    } else if (projectList[i].title === 'Linkedin') {
        projectList[i].imgsrc = "<image src='image/Linkedin.png' class='logo' style='width:40%;'>";
    } else if (projectList[i].title === 'Plan Generator') {
        projectList[i].imgsrc = "<image id = 'plan' src='image/plan.gif' class='logo' style='width:95%;'>";
    } else if (projectList[i].title === 'Snowflake') {
        projectList[i].imgsrc = "<image src='image/snowflake.png' class='logo' style='width:60%;'>";
    } else if (projectList[i].title === "Make it Green<br>Dashboard") {
        projectList[i].imgsrc = "<image id = 'jcdashboard' src='image/jc_dashboard.jpg' class='logo'>";
    } else if (projectList[i].title === 'Medium') {
        projectList[i].imgsrc = "<image id = 'medium' src='image/medium.png' class='logo' >";
    } else if (projectList[i].title === "Seoul Living-Pop<br>Dashboard") {
        projectList[i].imgsrc = "<image id = 'living' src='image/livingpop_dash.png' class='logo' style='width:90%;'>";
    } else if (projectList[i].title === 'KakaoTalk-Clone') {
        projectList[i].imgsrc = "<image id = 'kakao' src='image/kakao.png' class='logo' style='width:70%;'>";
    } else if (projectList[i].title === 'Momentum-Clone') {
        projectList[i].imgsrc = "<image id = 'momentum' src='image/momentum.png' class='logo'>";
    } else if (projectList[i].title === "Monitoring COVID-19 in <br> US Metropolitan Areas") {
        projectList[i].imgsrc = "<image id = 'COVID' src='image/covid.jpg' class='logo' style='width:90%;'>";
    } else if (projectList[i].title === "Interagency work zone<br>traffic data modeling and analysis") {
        projectList[i].imgsrc = "<image id = 'workzone' src='image/workzone.png' class='logo' style='width:95%;'>";
    }
}

let placeholder = '<div class="square profile" id="placeholder" ></div>' +
    '<div class="square profile" id="placeholder" ></div>' +
    '<div class="square profile" id="placeholder" ></div>' +
    '<div class="square project" id="placeholder" ></div>' +
    '<div class="square project" id="placeholder" ></div>' +
    '<div class="square project" id="placeholder" ></div>' +
    '<div class="square idea" id="placeholder" ></div>' +
    '<div class="square idea" id="placeholder" ></div>' +
    '<div class="square idea" id="placeholder" ></div>';