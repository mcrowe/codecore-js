$(document).ready(function() {
  $('#reset').click(function() {
    document.location.reload();
  });

  $('form').submit(function(event) {
    event.preventDefault()
  });
});