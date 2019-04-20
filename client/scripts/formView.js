var FormView = {

  $form: $('form'),
  $userName: $('.username'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
    // FormView.$userName.on('click', Friends.toggleStatus);
    $('body').on('click', '.username', Friends.toggleStatus);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    Messages.username = App.username;
    Messages.text = $('#message').val();
    Messages.roomname = $('select').val();
    // console.log($('#message').val(), Messages.text)
    Parse.create(Messages);
    
    console.log(event);
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};