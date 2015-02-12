$(document).ready(function() {

  var refreshMessages = function() {
    $.get('https://secret-sea-1263.herokuapp.com/messages?limit=10', function(messages) {
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

    var bodyInput = $(this).find('input[name="body"]');

    var body = bodyInput.val();
    bodyInput.val('');

    $.post('https://secret-sea-1263.herokuapp.com/messages', {body: body});
  });

});