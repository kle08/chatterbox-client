var MessagesView = {

  $chats: $('#chats'),
  $refresh: $('#refresh'),

  initialize: function() {
    // FormView.$form.on('submit', FormView.handleSubmit);
    // setInterval(() => {MessagesView.render()}, 5000);
    // setTimeout( () => MessagesView.render(), 200);
    // debugger;
    App.fetch();

    MessagesView.$refresh.on('click', function() {
      App.fetch();
    });
  },

  render: function() {
    
    // console.log(MessagesView.storage)
    $('#chats').empty();
    var html = '';
    // console.log(App.storage)
    if (App.storage) {
      for (let i = 0; i < App.storage.length; i++) {
        if (App.storage[i].username && App.storage[i].text && App.storage[i].roomname) {
          html += MessageView.render(App.storage[i]);
        }
      }
      $('#chats').append(html);
    }
    // $.getJSON(Parse.server, function(data) {
    //   for (let i = 0; i < data.results.length; i++) {
    //     if (data.results[i].username) {
    //       html += MessageView.render(data.results[i]);
    //     }
    //   }
    //   $('#chats').append(html);
    // });
  },

  renderMessage: function(msg) {
    $('#chats').append(MessageView.render(msg));
  },

  

};