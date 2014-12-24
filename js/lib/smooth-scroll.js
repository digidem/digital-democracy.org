;(function(window, document, undefined) {

  function smoothScroll(endY, callback) {
    var startY = window.scrollY,
      startT = Date.now(),
      duration = Math.abs(endY - startY),
      t = 0,
      rqf;

    window.cancelAnimationFrame(rqf);
    rqf = window.requestAnimationFrame(scroll);

    function scroll() {
      var now = Date.now();

      if ((now - startT) > duration) {
        window.scrollTo(0, endY);
        if (callback) return callback();
        else return;
      }

      window.scrollTo(0, startY + (ease((now - startT) / duration) * (endY - startY)));
      rqf = window.requestAnimationFrame(scroll);
    }
  }

  function ease(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  window.smoothScroll = smoothScroll;

})(window, document);
