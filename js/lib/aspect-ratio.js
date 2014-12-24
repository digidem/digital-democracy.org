// Loads responsive images as soon as it knows what size
// the image will be on the page.
// Requires `image-has-dim.js` which adds a custom event to images
// that fires as soon as they have a height and width.

;(function($, window, document, undefined) {

    function getWindowWidth() {
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    }

    var scriptName = 'fixAspectRatio',
        windowWidth = getWindowWidth(),
        elements;

    window[scriptName] = function() {

        if ($ && this instanceof $) elements = this;

        if (arguments[0] instanceof HTMLCollection || arguments[0] instanceof NodeList) {
            elements = arguments[0];
        } else if (arguments[0] instanceof Element) {
            elements = [arguments[0]];
        } else if (typeof arguments[0] === 'string') {
            elements = document.querySelectorAll(arguments[0]);
        } else {
            elements = elements || document.querySelectorAll('img');
        }

        var el;

        for (var i = 0; i < elements.length; i++) {
            el = elements[i];
            if (el.tagName.toLowerCase() !== 'img' || (el.clientWidth && el.clientHeight)) {
                fixAspectRatio.call(el);
            } else {
                el.addEventListener('hasdim', fixAspectRatio);
            }
        }

        function fixAspectRatio() {
            var el = this;
            var offsetParent = el.offsetParent;

            if (!offsetParent) return;

            if (el.clientHeight < offsetParent.clientHeight) {
                el.style.height = '100%';
                el.style.width = 'auto';
            }
            if (el.clientWidth < offsetParent.clientWidth) {
                el.style.height = 'auto';
                el.style.width = '100%';
            }
        }

        return this;
    };

    if ($) $.fn[scriptName] = window[scriptName];

    window.addEventListener('resize', onresize);

    function onresize() {
        if (Math.abs(getWindowWidth() - windowWidth) < 100) return;
        windowWidth = getWindowWidth();
        window[scriptName](elements);
    }

})($, window, document);
