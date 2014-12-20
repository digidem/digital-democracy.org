(function() {
  var body = document.body,
      offset = body.clientHeight / 3;

  if (body.clientWidth < 1024) return console.log('returning');
  console.log('scrolling to ', offset);
  window.scrollTo(0, offset);
})();
