var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  $refresh: $('#refresh'),

  initialize: function() {
    App.fetch();

    RoomsView.$refresh.on('click', function() {
      RoomsView.render();
    });
    RoomsView.$button.on('click', function() {
      // debugger;
      Rooms.add();
    });
    RoomsView.$refresh.on('click', function() {
      // $('#rooms select').empty();
      // for (let key in Rooms){
      //   var html = `<option value="${key}">${key}</option>`;
      //   $('#rooms select').append(html);
      // }
      RoomsView.render();
      
    });
    // $('select').change(function() {
    //   // console.log($('.username:not([value="'+ $(this).val() + '"])'))
    //   $('.username').not("[value=" + $(this).val() + "]").closest('.chat').hide();
    // });
  },

  render: function() {
    if (App.storage) {
      for (let i = 0; i < App.storage.length; i++) {
        // debugger;
        Rooms.storage[App.storage[i].roomname] = App.storage[i].roomname;
      }
    }

    $('#rooms select').empty();
    for (let key in Rooms.storage) {
      var html = `<option value="${key}">${key}</option>`;
      $('#rooms select').append(html);
    }



  },
  renderRoom: function(nameRoom) {
    var html = `<option value="${nameRoom}">${nameRoom}</option>`;
    $('#rooms select').append(html);
  }

};
