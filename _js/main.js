$(document).ready( function() {

  $('.cat-list.should-show').css('display', 'block');

  // When a primary nav link is clicked...
  $('.primary-nav__link').click( function(e) {
    e.preventDefault();

    // Only do stuff is the category isn't already selected
    if( !$(this).hasClass( 'active' ) ) {

      // Reassign the active class to the thing you just clicked
      $('.primary-nav__link').removeClass( 'active' );
      $(this).addClass( 'active' );

      // targetList is the id of the list we want to be shown
      var targetList = $(this).attr('href').substring(1); // e.g. typography

      $('.cat-list').css('display', 'none');
      $('#' + targetList).show();

    };

    return false;
  });

});

// Twitter asynch JS
window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));
