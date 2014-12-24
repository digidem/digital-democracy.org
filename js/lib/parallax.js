;(function($, window, document, undefined) {

  function getWindowDim() {
    return [ window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, 
    window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight ];
  }

  var scriptName = 'parallax';
  var minWidth = 1024;

  window[scriptName] = function() {
    var options = arguments[1],
      windowDim = getWindowDim(),
      elements,
      scrollY,
      rqf,
      adjustFn;

    if ($ && this instanceof $) {
      elements = this;
      options = options || arguments[0];
    }

    if (arguments[0] instanceof HTMLCollection || arguments[0] instanceof NodeList) {
      elements = arguments[0];
    } else if (arguments[0] instanceof Element) {
      elements = [arguments[0]];
    } else if (typeof arguments[0] === 'string') {
      elements = document.querySelectorAll(arguments[0]);
    } else {
      elements = elements || document.querySelectorAll('img');
      options = options || arguments[0];
    }

    if (!elements.length) return this;
    options = options || {};

    adjustFn = (typeof options.adjustFn === 'function') ? options.adjustFn : function(y, h) {
      var offset = - 100 * (h - y) / h / 2;
      this.style[Modernizr.prefixed('transform')] = 'translateY(' + offset + '%)';
    };

    window.addEventListener('scroll', onScrollParallax);

    function onScrollParallax() {
      if (window.scrollY > windowDim[1] || windowDim[0] < minWidth) return;
      //if (rqf) window.cancelAnimationFrame(rqf);
      rqf = window.requestAnimationFrame(function() {
        for (var i = 0; i < elements.length; i++) {
          adjustFn.call(elements[i], window.scrollY, windowDim[1]);
        }
        rqf = undefined;
      });
    }

    onScrollParallax();

    // For images, once they have a height, re-adjust.
    for (var i = 0; i < elements.length; i++) {
      elements[i].addEventListener('hasdim', onScrollParallax);
    }

    window.addEventListener('resize', function onresize() {
      if (Math.abs(getWindowDim()[1] - windowDim[1]) < 10) return;
      windowDim = getWindowDim();
      onScrollParallax();
    });

    return this;
  };

  if ($) $.fn[scriptName] = window[scriptName];

})(window.$, window, document);
