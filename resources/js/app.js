
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./material-kit');
require('./core/bootstrap-material-design.min');
require('./core/jquery.min');
require('./core/popper.min');
require('./plugins/jquery.sharrre');
require('./plugins/nouislider.min');

$(document).ready(function() {
  // Sliders Init
  materialKit.initSliders();
});


function scrollToDownload() {
  if ($('.section-download').length != 0) {
    $("html, body").animate({
      scrollTop: $('.section-download').offset().top
    }, 1000);
  }
}
