$(document).ready(function() {

  var refreshMessages = function() {
    var url = 'https://secret-sea-1263.herokuapp.com/messages';
    $.get(url, {limit: 5}, function(messages) {
      $('#messages').html('');
      for (var i=0; i < messages.length; i+=1) {
        $('#messages').append("<li>" + messages[i].body + "</li>");
      }
    });
  };

  setInterval(refreshMessages, 5000);
  refreshMessages();

  $('#message-form').on('submit', function(event){
    event.preventDefault();

    var message = $(this).serialize();
    var bodyInput = $(this).find('input[name="body"]');
    bodyInput.val('');

    $.post('https://secret-sea-1263.herokuapp.com/messages', message);
  });

});