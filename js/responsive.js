;(function(root) {

    var loadResponsiveImages = root.loadResponsiveImages = function(options) {
        options = options || {};

        var sizes = options.sizes || [200, 300, 400, 600, 800, 1000, 1200, 1600],
            retina = window.devicePixelRatio > 1 ? '@2x' : '',
            width;

        var images = document.getElementsByTagName('IMG');

        for (var i = 0; i < images.length; i++) {
            width = images[i].clientWidth;
            if (width > 0) {
                loadResponsive.call(images[i]);
            } else {
                images[i].addEventListener('load', loadResponsive);
            }
        }

        function loadResponsive(e) {
            var image = this,
                width = image.clientWidth,
                responsiveImage = new Image(),
                responsiveWidth = 0,
                i = 0,
                hostname,
                url;

            if (e) console.log("loaded", this.src, width);

            image.removeEventListener('load', loadResponsive);

            while (i < sizes.length && width > sizes[i]) {
                responsiveWidth = sizes[i];
                i++;
            }

            hostname = 'http://images.digital-democracy.org';
            url = image.src.replace(/^https?:\/\/[^\/]*/, hostname);
            url = url.split('?').shift();
            url = url.replace(/(\.[^\.]{1,4})$/,'-' + responsiveWidth + retina + '$1');

            responsiveImage.onload = function() {
                this.onload = null;
                console.log('setting source from %s to %s', image.src, url);
                image.src = url;
            };

            responsiveImage.onerror = function(e) {
                console.log("Error loading:", this.src);
                this.onload = null;
            };

            responsiveImage.src = url;
        }
    };

})(this);
