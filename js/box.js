// this part is for dropdown menu

/**
 * Created by Han on 2018-02-10.
 */

const square_making = function (list) {
  for (let i = 0; i < list.length; i++) {
    $('#main_body').append(sub_container);
    $('.sub_container:last-child').addClass(list[i].category);
    $('.sub_container:last-child').attr('id', list[i].title);
    switch (list[i].title) {
      case 'Transportation<br>Accessibility Dashboard':
        $('.sub_container:last-child').attr(
          'onclick',
          "window.open('http://www.han.codes/transport-accessibility/','_blank')"
        );
        break;
      case 'Github':
        $('.sub_container:last-child').attr(
          'onclick',
          "window.open('https://github.com/aete','_blank')"
        );
        break;
      case 'Medium':
        $('.sub_container:last-child').attr(
          'onclick',
          "window.open('https://medium.com/@seunggyunhan','_blank')"
        );
        break;
      case 'Make it Green<br>Dashboard':
        $('.sub_container:last-child').attr(
          'onclick',
          "window.open('http://www.han.codes/jc_datadashboard_prototype/','_blank')"
        );
        break;
      case 'Seoul Living-Pop<br>Dashboard':
        $('.sub_container:last-child').attr(
          'onclick',
          "window.open('http://www.han.codes/Data-in-Seoul/livingpop/','_blank')"
        );
        break;
      case 'Linkedin':
        $('.sub_container:last-child').attr(
          'onclick',
          "window.open('https://www.linkedin.com/in/seunggyunhancodes/','_blank')"
        );
        break;
      case 'KakaoTalk-Clone':
        $('.sub_container:last-child').attr(
          'onclick',
          "window.open('https://www.han.codes/Kakaotalk-clone/','_blank')"
        );
        break;
      case 'Momentum-Clone':
        $('.sub_container:last-child').attr(
          'onclick',
          "window.open('https://www.han.codes/Momentum_clone/','_blank')"
        );
        break;
      case 'Monitoring COVID-19 in <br> US Metropolitan Areas':
        $('.sub_container:last-child').attr(
          'onclick',
          "window.open('https://nyumarron.github.io/covid_msa/','_blank')"
        );
        break;
      case 'Interagency work zone<br>traffic data analysis':
        $('.sub_container:last-child').attr(
          'onclick',
          "window.open('https://workzone-collision-analysis.github.io/','_blank')"
        );
        break;
      case 'Interagency work zone<br>traffic data analysis (dashboard)':
        $('.sub_container:last-child').attr(
          'onclick',
          "window.open('https://workzone-collision-analysis.github.io/capstone/dashboard/','_blank')"
        );
        break;
      case 'D3 practice':
        $('.sub_container:last-child').attr(
          'onclick',
          "window.open('https://hancodesd3.netlify.app/','_blank')"
        );
        break;
      case 'Mini projects <br> InfoViz, Spring 2020':
        $('.sub_container:last-child').attr(
          'onclick',
          "window.open('https://hancodesinfoviz.netlify.app/','_blank')"
        );
        break;
      default:
        $('.sub_container:last-child').attr(
          'onclick',
          'location.href= ' + "'" + list[i].title + ".html';"
        );
    }

    $('.sub_container:last-child').append(square);
    $('.square:last-child').append(list[i].imgsrc);
    if (list[i].time !== null) {
      $('.sub_container:last-child').append(
        title.replace('%data', list[i].title + '<br>(' + list[i].time + ')')
      );
    } else {
      $('.sub_container:last-child').append(
        title.replace('%data', list[i].title)
      );
    }
  }
  $('#main_body').append(placeholder);
};

let placeholder =
  '<div class="square profile" id="placeholder" ></div>' +
  '<div class="square profile" id="placeholder" ></div>' +
  '<div class="square profile" id="placeholder" ></div>' +
  '<div class="square project" id="placeholder" ></div>' +
  '<div class="square project" id="placeholder" ></div>' +
  '<div class="square project" id="placeholder" ></div>' +
  '<div class="square idea" id="placeholder" ></div>' +
  '<div class="square idea" id="placeholder" ></div>' +
  '<div class="square idea" id="placeholder" ></div>';

square_making(projectList);
