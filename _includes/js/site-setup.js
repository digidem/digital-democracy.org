(function() {
  // Load larger images according to resolution & retina
  $('img').loadResponsiveImages();

  // Size images to fill containers (like background-size: cover)
  $('.check-aspect-ratio').fixAspectRatio();

  var offset;

  function updateOffset() {
    offset = $('body.full-header').height() / 3;
  }

  $(window).on('resize', updateOffset);
  updateOffset();

  var $context = $('html.no-touch body.full-header');

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

  $('.slideshow').on('init reInit', function(e, slideshow) {
    $('img', this).loadResponsiveImages().fixAspectRatio()
    $('.caption', this).on('mouseenter', function() {
      slideshow.slickPause();
    }).on('mouseleave', function() {
      slideshow.slickPlay();
    });
  }).slick({
    autoplay: true,
    pauseOnHover: false
  })




})();
