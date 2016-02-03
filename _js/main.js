$(document).ready( function() {
  // When a primary nav link is clicked...
  // use the href # to figure out which secondary nav to show
  // If it's not active, hide all and show the relevant ID
  $('.primary-nav__link').click( function(e) {
    e.preventDefault();
    var id = $(this).attr('href');

    $('.cat-list').removeClass('is-visible');
    $(id).toggleClass('is-visible');
  });
});