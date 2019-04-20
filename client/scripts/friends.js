var Friends = {
  storage: {},

  toggleStatus: function(event) {
    var friend = event.target.innerHTML.trim();
    //    console.log(event.target.innerHTML) 
    if (Friends.storage.hasOwnProperty(friend)) {
      Friends.storage[friend] = !Friends.storage[friend];
    } else {
      Friends.storage[friend] = true;
    }
    //    $("." + friend).setAttribute('class', friend);
    // console.log("div:contains('" + friend + "')")
    for (let name in Friends.storage) {
      if (Friends.storage[name]){
        $("div:contains('" + name + "')").addClass('friend');
      } else {
        $("div:contains('" + name + "')").removeClass('friend');
      }
    }
  }  
};