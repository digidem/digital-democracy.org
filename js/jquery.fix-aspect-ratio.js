;(function($, window, document, undefined) {

    $.fn.fixAspectRatio = function() {
        console.log(this);
        this.find('img').each(function() {
            var img = this,
                $img = $(img),
                intervalID;

            if (!img.src) return;

            if (img.naturalHeight) {
                resizeImage.call(img);
            } else {
                intervalID = window.setInterval(monitor, 50);
                $img.on('load', resizeImage);
                $img.on('error', function() {
                    window.clearInterval(intervalID);
                });
            }

            function monitor() {
                if (!img.clientHeight) return;
                window.clearInterval(intervalID);
                $img.off('load error');
                resizeImage.call(img);
            }
        });
    };

    function resizeImage() {
        var $img = $(this);
        if ($img.height() < $img.offsetParent().innerHeight()) {
            $img.height('100%');
            $img.width('auto');
        }
    }

})($, window, document);
