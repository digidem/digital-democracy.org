(function() {
  var body = document.body,
      offset = body.clientHeight / 3;

  if (body.clientWidth < 1024) return console.log('returning');
  window.scrollTo(0, offset);
})();
