$(document).ready(function() {

  $('#reset').click(function() {
    document.location.reload();
  });

  $('form').submit(function(event) {
    event.preventDefault()
  });


  $('#button-1').on('click', function() {
    $('#green-container').append('<div class="large red square shape"></div>');
  });

  // $('.shape').on('click', function() {
  //   $(this).remove();
  // });

  // Event delegation
  $(document).on('click', '.shape', function(){
    $(this).remove();
  });



});