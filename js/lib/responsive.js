;
(function($, window, document, undefined) {

    var scriptName = 'loadResponsiveImages';

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
            onHasDimensions(images[i], function() {
                fixAspectRatio.call(this);
                loadResponsive.call(this);
            });
        }

        function fixAspectRatio() {
            var img = this;
            var offsetParent = img.offsetParent;

            if (offsetParent.className.indexOf('aspect-ratio') === -1) return;

            if (img.clientHeight < offsetParent.clientHeight) {
                img.style.height = '100%';
                img.style.width = 'auto';
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

    function onHasDimensions(img, callback) {
        if (img.clientWidth && img.clientHeight) {
            hasDim.call(img);
        } else {
            var intervalID = window.setInterval(monitor, 10);
            img.addEventListener('load', hasDim);
            img.addEventListener('error', stopMonitoring);
        }

        function stopMonitoring() {
            window.clearInterval(intervalID);
            img.removeEventListener('load', hasDim);
            img.removeEventListener('error', stopMonitoring);
        }

        function monitor() {
            if (!img.clientWidth || !img.clientHeight) return;
            hasDim.call(img);
        }

        function hasDim() {
            stopMonitoring();
            callback.call(img);
        }
    }

})($, window, document);
