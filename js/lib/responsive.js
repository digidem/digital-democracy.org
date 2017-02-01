// Loads responsive images as soon as it knows what size
// the image will be on the page.
// Requires `image-has-dim.js` which adds a custom event to images
// that fires as soon as they have a height and width.

;(function($, window, document, undefined) {

    function getWindowWidth() {
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    }

    var scriptName = 'loadResponsiveImages';
    var elements, options;
    var windowWidth = getWindowWidth();

    window[scriptName] = function() {
        options = arguments[1];

        if ($ && this instanceof $) elements = this;

        if (arguments[0] instanceof HTMLCollection || arguments[0] instanceof NodeList) {
            elements = arguments[0];
        } else if (arguments[0] instanceof Element) {
            elements = [arguments[0]];
        } else if (typeof arguments[0] === 'string') {
            elements = document.querySelectorAll(arguments[0]);
        } else {
            elements = elements || document.querySelectorAll('img');
            options = options || arguments[0] || {};
        }

        var sizes = options.sizes || [200, 300, 400, 600, 800, 1000, 1200, 1600],
            hostname = options.hostname || 'https://images.digital-democracy.org',
            retina = window.devicePixelRatio > 1 ? '@2x' : '',
            img;

        for (var i = 0; i < elements.length; i++) {
            el = elements[i];
            if (el.tagName.toLowerCase() !== 'img') continue;
            if (el.clientWidth && el.clientHeight) {
                loadResponsive.call(el);
            } else {
                el.addEventListener('hasdim', loadResponsive);
            }
        }

        function loadResponsive() {
            var image = this,
                responsiveImage = new Image(),
                responsiveWidth = sizes[0],
                i = 1,
                url;

            while (i < sizes.length && image.clientWidth > sizes[i - 1]) {
                responsiveWidth = sizes[i];
                i++;
            }

            url = image.src.replace(/^https?:\/\/[^\/]*/, hostname);
            url = url.split('?').shift();
            url = url.replace(/(?:-\d{3,4})?(?:@2x)?(\.[^\.]{1,4})$/, '-' + responsiveWidth + retina + '$1');

            responsiveImage.onload = function() {
                this.onload = null;
                image.src = url;
            };

            responsiveImage.onerror = function(e) {
                console.log("Error loading:", this.src);
                this.onload = null;
            };

            responsiveImage.src = url;
        }

        return this;
    };

    if ($) $.fn[scriptName] = window[scriptName];

    window.addEventListener('resize', onresize);

    function onresize() {
        if (Math.abs(getWindowWidth() - windowWidth) < 100) return;
        windowWidth = getWindowWidth();
        window[scriptName](elements, options);
    }

})(window.$, window, document);
