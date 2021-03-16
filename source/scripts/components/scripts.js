// register service worker
if (navigator.serviceWorker) navigator.serviceWorker.register('/sw.js');

// variables
var wrapper = $('.wrapper'),
    body = $('html, body'),
    form = $('.form')

// set current year
document.getElementById('year').innerHTML = new Date().getFullYear();

// page preloader
$(window).on('load', function () {
  $('.preloader__background').delay(100).fadeOut('slow');
  $('.preloader__transition').delay(750).fadeOut('slow');
});

$(document).ready(function() {
  if (window.location.href.indexOf('about-me.html') < 1) {
    $('header > a').removeAttr('href').css('cursor', 'default');
  } else {
    $('.background').css('z-index', '1');
    document.documentElement.style.setProperty("--delay", "2s");
  };
});

// form
var opened = false;

$('#open').click(function() {
  if (!opened)
    form.delay(500).fadeIn(1000);
    body.css('overflow', 'hidden');
    wrapper.css('filter', 'blur(50px)');

  opened = !opened;
});

$('.form img').click(function() {
  close();
});

$(document).keyup(function(e) {
  if (opened && e.keyCode == 27) close();
});

function close() {
  form.fadeOut(500);
  body.css('overflow', 'initial');
  wrapper.delay(500).queue(function(next) {
    $(this).css('filter', 'blur(0)');
    next();
  });

  opened = !opened;
};
