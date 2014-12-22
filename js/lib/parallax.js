;(function($, window, document, undefined) {

  function getWindowHeight() {
    return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  }

  var scriptName = 'parallax';

  window[scriptName] = function() {
    var options = arguments[1],
      windowHeight = getWindowHeight(),
      elements,
      scrollY,
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
      this.style.transform = 'translateY(' + offset + '%)';
    };

    window.addEventListener('scroll', onScrollParallax);

    function onScrollParallax() {
      scrollY = window.scrollY;
      if (scrollY > windowHeight) return;
      window.requestAnimationFrame(function() {
        adjustFn.call(elements[0], scrollY, windowHeight);
      });
    }

    onScrollParallax();

    window.addEventListener('resize', function onresize() {
      if (Math.abs(getWindowHeight() - windowHeight) < 10) return;
      windowHeight = getWindowHeight();
      window[scriptName](elements, options);
    });

    return this;
  };

  if ($) $.fn[scriptName] = window[scriptName];

})(window.$, window, document);
