/* this is related to navigation bar*/

let category;

$('#nav_button').click(function () {
  $('.nav_menu').css('left', 'calc(100vw - 230px)');
});

$('.nav_menu')
  .first()
  .click(function () {
    $('.nav_menu').css('left', '800px');
    $('.nav_menu a').css('animation', 'moveback 0.7s');
  });

$('.nav_menu_box').click(function () {
  if ($(this).attr('id') === 'project_nav') {
    category = 'project';
  } else if ($(this).attr('id') === 'idea_nav') {
    category = 'idea';
  } else {
    category = 'profile';
  }
  squareSelector();
  $('.sub_body').css('display', 'none');
  $('.nav_menu').css('left', '800px');
  $('.nav_menu a').css('animation', 'moveback 0.7s');
});

/* this is related to square selection*/
$('.nav_content').click(function () {
  if ($(this).attr('id') === 'project') {
    category = 'project';
  } else if ($(this).attr('id') === 'idea') {
    category = 'idea';
  } else {
    category = 'profile';
  }
  squareSelector();
});

$('#home').click(function () {
  category = 'all';
  squareSelector();
});

$('#category').change(function () {
  if ($('#category>option:selected').attr('value') === 'project') {
    category = 'project';
  } else if ($('#category>option:selected').attr('value') === 'idea') {
    category = 'idea';
  } else if ($('#category>option:selected').attr('value') === 'profile') {
    category = 'profile';
  } else {
    category = 'all';
  }
  squareSelector();
});

const squareSelector = function () {
  if (category === 'project') {
    $('.sub_container').css('display', 'none');
    $('.project').css('display', 'flex');
  } else if (category === 'idea') {
    $('.sub_container').css('display', 'none');
    $('.idea').css('display', 'flex');
  } else if (category === 'profile') {
    $('.sub_container').css('display', 'none');
    $('.profile').css('display', 'flex');
  } else if (category === 'all') {
    $('.sub_container').css('display', 'flex');
  }
};
