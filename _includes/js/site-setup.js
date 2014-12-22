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

  // Add parallax to header images and videos
  $('#header-image', $context).parallax({
    adjustFn: function(y, h) {
      var imageOffset = 100 * (h - y) / h / 2;
      if (y <= 3) this.classList.remove('zoom-pointer');
      else this.classList.add('zoom-pointer');
      this.style.transform = 'translate3d(-50%, -' + imageOffset + '%, 0)';
    }
  }).on('click', function() {
    var scrollTo = (window.scrollY > 3) ? 0 : document.body.clientHeight / 3;
    smoothScroll(scrollTo);
  });
  $('#video-container', $context).parallax({
    adjustFn: function(y, h) {
      var offset = (100 * y / 2 / this.offsetHeight) - 50;
      this.style.transform = 'translate3d(0, ' + offset + '%, 0)';
    }
  });

})();
