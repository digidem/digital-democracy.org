(function() {

    if (typeof $f === 'undefined') return;

    var player = $f('video-iframe'),
        $body = $('body');

    player.addEvent('ready', function() {
        player.addEvent('pause', onPause);
        player.addEvent('play', onPlay);
        player.addEvent('finish', onPause);
        $('.play-link').on('click', function() {
          smoothScroll(0, function() {
            $body.addClass('video-playing');
            $body.removeClass('video-paused');
          });
          player.api('play');
          $('#video-iframe').focus();
        });
    });

    function onPause() {
        $body.removeClass('video-playing');
        $body.addClass('video-paused');
        if ($body.width() < 1024) return;
        smoothScroll(document.body.clientHeight / 3);
    }

    function onPlay() {
        smoothScroll(0, function() {
            $body.addClass('video-playing');
            $body.removeClass('video-paused');
        });
    }
})();
