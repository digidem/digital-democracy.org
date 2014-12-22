$(document)
  .foundation('dropdown')
  .foundation('topbar')
  .foundation('orbit', {
    bullets: false,
    timer_speed: 8000,
    animation_speed: 700,
    timer: true,
    slide_number: false,
    pause_on_hover: false
  });
$('.orbit-caption')
  .on('mouseenter mouseleave', function(e) {
    $('[data-orbit]').click();
  });
