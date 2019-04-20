var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // FormView.$form.on('submit', FormView.handleSubmit);
    MessagesView.render();
  },

  render: function() {
    var html = '';
    $.getJSON(Parse.server, function(data) {
      for (let i = 0; i < data.results.length; i++) {
        if (data.results[i].username) {
          html += MessageView.render(data.results[i]);
        }
        // console.log(data.results[i])
      }
      $('#chats').append(html);
    });
    // console.log(allData)
  }

  // renderMessage: function() {

  // }

};