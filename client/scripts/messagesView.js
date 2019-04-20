var MessagesView = {

  $chats: $('#chats'),
  $refresh: $('#refresh'),

  initialize: function() {
    // FormView.$form.on('submit', FormView.handleSubmit);
    // setInterval(() => {MessagesView.render()}, 5000);
    MessagesView.$refresh.on('click', function() {
      MessagesView.render();
    });
  },

  render: function() {
    // console.log(MessagesView.storage)
    var html = '';
    if (MessagesView.storage) {
      for (let i = 0; i < MessagesView.storage.length; i++) {
        if (MessagesView.storage[i].username && MessagesView.storage[i].text) {
          html += MessageView.render(MessagesView.storage[i]);
        }
        $('#chats').append(html);
      }
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

  renderMessage: function() {
    MessagesView.render();
  },

  

};