$(function() {
    $('.no-touch .excerpt')
        .mouseenter(function() {
            var $this = $(this).addClass('hover'),
                $header = $('h3', $this),
                $excerpt = $('blockquote', $this),
                containerHeight = $this.height(),
                headerHeight = $header.height(),
                excerptHeight = $excerpt.height(),
                gradientOffset = 100 * containerHeight / excerptHeight - 100 * headerHeight / excerptHeight,
                headerToExcerpt = 100 * headerHeight / excerptHeight,
                gradient = 'gradient(to bottom, white ' + 
                    (gradientOffset - 45) +
                    '%, rgba(255,255,255,0) ' + (gradientOffset - 15) + '%)';

            $('.read-more').css('bottom', headerHeight + 'px');
            $header.css('bottom', containerHeight - headerHeight + 'px');
            $excerpt
                .css('top', 100 * headerHeight / containerHeight + '%')
                .css('background-image', '-webkit-' + gradient)
                .css('background-image', '-webkit-linear-' + gradient)
                .css('background-image', 'linear-' + gradient);
        }).mouseleave(function() {
            $(this).removeClass('hover');
            $('h3', this).css('bottom', '0px');
            $('blockquote', this).css('top', '100%');
        });
});
