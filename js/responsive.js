;
(function($, window, document, undefined) {

    var scriptName = 'loadResponsiveImages'

    window[scriptName] = function() {
        var options = arguments[1],
            elements;

        if ($ && this instanceof $) elements = this;

        if (arguments[0] instanceof HTMLCollection || arguments[0] instanceof NodeList) {
            elements = arguments[0];
        } else if (arguments[0] instanceof Element) {
            elements = [arguments[0]];
        } else {
            elements = document.getElementsByTagName('IMG');
            options = options || arguments[0] || {};
        }

        var sizes = options.sizes || [200, 300, 400, 600, 800, 1000, 1200, 1600],
            hostname = options.hostname || 'http://images.digital-democracy.org',
            retina = window.devicePixelRatio > 1 ? '@2x' : '';

        var images = document.getElementsByTagName('IMG');

        for (var i = 0; i < images.length; i++) {
            onHasWidth(images[i], loadResponsive);
        }

        function loadResponsive(e) {
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
            url = url.replace(/(\.[^\.]{1,4})$/, '-' + responsiveWidth + retina + '$1');

            responsiveImage.onload = function() {
                this.onload = null;
                // console.log('setting source from %s to %s', image.src, url);
                image.src = url;
            };

            responsiveImage.onerror = function(e) {
                console.log("Error loading:", this.src);
                this.onload = null;
            };

            responsiveImage.src = url;
        }
    };

    if ($) $.fn[scriptName] = window[scriptName];

    function onHasWidth(img, callback) {
        if (img.clientWidth > 0) {
            hasWidth.call(img);
        } else {
            var intervalID = window.setInterval(monitor, 10);
            img.addEventListener('load', hasWidth);
            img.addEventListener('error', stopMonitoring);
        }

        function stopMonitoring() {
            window.clearInterval(intervalID);
            img.removeEventListener('load', hasWidth);
            img.removeEventListener('error', stopMonitoring);
        }

        function monitor() {
            if (!img.clientWidth) return;
            hasWidth.call(img);
        }

        function hasWidth() {
            stopMonitoring();
            callback.call(img);
        }
    }

})($, window, document);
