const projectList = [
  {
    title: 'Transportation<br>Accessibility Dashboard',
    time: '2021',
    category: 'project',
  },
  {
    title: 'Interagency work zone<br>traffic data analysis',
    time: '2020',
    category: 'project',
  },
  { title: 'Seoul Living-Pop<br>Dashboard', time: '2020', category: 'project' },
  { title: 'Make it Green<br>Dashboard', time: 2019, category: 'project' },
  { title: 'Plan Generator', time: 2018, category: 'idea' },
  { title: 'Dwelling by Walling', time: 2016, category: 'project' },
  { title: 'The Frame', time: 2016, category: 'project' },
  { title: 'QR City', time: 2013, category: 'idea' },
  { title: 'KakaoTalk-Clone', time: 2020, category: 'project' },
  { title: 'Momentum-Clone', time: 2020, category: 'project' },
  { title: 'Github', time: null, category: 'profile' },
  { title: 'Linkedin', time: null, category: 'profile' },
];

//prettier-ignore
for (let i = 0; i < projectList.length; i++) {
  switch(projectList[i].title){
    case 'Transportation<br>Accessibility Dashboard':
      projectList[i].imgsrc = `<image src='image/transportation_accessiblity.png' class='logo' style='width:95%;'>`;
      break;
    case 'QR City':
      projectList[i].imgsrc = `<image src='image/${projectList[i].title}.gif' class='logo' style='width:90%;'>`;
      break;
    case 'Snowflake':
        projectList[i].imgsrc = `<image src='image/${projectList[i].title}.png' class='logo' style='width:60%;'>`;
        break;
    case 'Github':
      projectList[i].imgsrc = `<image src='image/${projectList[i].title}.jpg' class='logo' style='width:60%;'>`;
      break;
    case 'Linkedin':
      projectList[i].imgsrc = `<image src='image/${projectList[i].title}.png' class='logo' style='width:40%;'>`;
      break;
    case 'Plan Generator':
      projectList[i].imgsrc = "<image id = 'plan' src='image/plan.gif' class='logo' style='width:95%;'>";
      break;
    case 'Make it Green<br>Dashboard':
      projectList[i].imgsrc = "<image id = 'jcdashboard' src='image/jc_dashboard.jpg' style='width:95%;' class='logo'>";
      break;
    case 'Seoul Living-Pop<br>Dashboard':
      projectList[i].imgsrc = "<image id = 'living' src='image/livingpop_dash.png' class='logo' style='width:90%;'>";
      break;
    case 'Interagency work zone<br>traffic data analysis':
      projectList[i].imgsrc = "<image id = 'workzone' src='image/workzone.PNG' class='logo' style='width:95%;'>";
      break;
    default: 
      projectList[i].imgsrc = `<image src='image/${projectList[i].title}.png' class='logo' style='width:95%;'>`;
      break;
  }}
