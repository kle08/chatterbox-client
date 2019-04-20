var Rooms = {
  storage: {},
  add: function() {
    var roomName = prompt('New room name:');
    Rooms.storage[roomName] = roomName;
    RoomsView.render();
  }
};