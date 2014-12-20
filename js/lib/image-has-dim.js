// This adds a new event to image elements that fires when they
// have dimensions (height and width > 0)
// This can happen before the image has loaded for large images

(function() {

  // Polyfill for creating CustomEvents on IE9/10/11

  // code pulled from:
  // https://github.com/d4tocchini/customevent-polyfill
  // https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent#Polyfill

  if (!window.CustomEvent || typeof window.CustomEvent !== 'function') {
    var CustomEvent = function(event, params) {
      var evt;
      params = params || {
        bubbles: false,
        cancelable: false,
        detail: undefined
      };

      evt = document.createEvent("CustomEvent");
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
    };

    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent; // expose definition to window
  }

  // The timeout before we give up.
  var timeout = 10000;

  var event = new window.CustomEvent('hasdim');

  var images = document.getElementsByTagName('IMG');

  for (var i = 0; i < images.length; i++) {
      monitor(images[i]);
  }

  function monitor(image) {
    if (!checkDim()) {
      var intervalID = window.setInterval(checkDim, 10);
      window.setTimeout(stopMonitoring, 10000);
      image.addEventListener('load', hasDim);
      image.addEventListener('error', stopMonitoring);
    }

    function stopMonitoring() {
      window.clearInterval(intervalID);
      image.removeEventListener('load', hasDim);
      image.removeEventListener('error', stopMonitoring);
    }

    function checkDim() {
      if (!image.clientWidth || !image.clientHeight) return;
      hasDim();
      return true;
    }

    function hasDim() {
      stopMonitoring();
      image.dispatchEvent(event);
    }
  }

})();
