(function() {
  // Load larger images according to resolution & retina
  $('img').loadResponsiveImages();

  var offset;

  function onResize() {
    offset = $('body.full-header').height() / 3;
    // Size images to fill containers (like background-size: cover)
    $('.check-aspect-ratio').fixAspectRatio();
  }

  $(window).on('resize', onResize);
  onResize();

  var $context = $('html.no-touch body.full-header.affix');

  // Affix the header to the top of the page for full-size header image articles
  $('.site-header', $context).affix({
    offset: {
      top: function() {
        return offset;
      }
    }
  });

  // Scroll to fullpage image on click
  $('#header-image', $context).on('click', function() {
    var scrollTo = (window.scrollY > 3) ? 0 : document.body.clientHeight / 3;
    smoothScroll(scrollTo);
  });

  // $('.slideshow').on('init reInit', function(e, slideshow) {
  //   $('img', this).loadResponsiveImages().fixAspectRatio()
  //   $('.caption', this).on('mouseenter', function() {
  //     slideshow.slickPause();
  //   });
  // }).slick({
  //   autoplay: false,
  //   pauseOnHover: false
  // })




})();
