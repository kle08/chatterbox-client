var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  $refresh: $('#refresh'),

  initialize: function() {
    RoomsView.$refresh.on('click', function() {
      RoomsView.render();
    });
    RoomsView.$button.on('click', function() {
      var roomName = prompt('New room name:');
      Rooms[roomName] = roomName;
    });
    RoomsView.$refresh.on('click', function() {
      $('#rooms select').empty();
      for (let key in Rooms){
        var html = `<option value="${key}">${key}</option>`;
        $('#rooms select').append(html);
      }
      
    });
  },

  render: function() {
    if (MessagesView.storage) {
      for (let i = 0; i < MessagesView.storage.length; i++) {
        Rooms[MessagesView.storage[i].roomname] = MessagesView.storage[i].roomname;
      }
    }
  }

};
