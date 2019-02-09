/*
Init app
interact with DOM
interact with localstorage

 */

$(document).ready(function(){
  // this is where we jquery
  //var keyData = 'ourKey'; // going to need to make this dynamic?

//HABIT 1
  //Add Button
  $('.btn-add-habit1').on('click', function(e){
    console.log(e);
    var keyDataHabit1 = 'habit1' + $('.input-habit1').val();
    var valueDataHabit1 = $('.input-habit1').val();
    // write to db
    localStorage.setItem(keyDataHabit1, valueDataHabit1);
    // read from db
    var displayTextHabit1 = localStorage.getItem(keyDataHabit1);
    // this only displays the last one? might want to switch to html
    // and append a div
    // <div class="display-data-item" data-keyValue="keyData">valueData</div>
    // if you use backticks ` you can use ${templateLiterals}
    // TODO make this vars make sense across the app
    $('.container-data-habit1').html('<div class="display-data-habit1" data-keyValue="'+displayTextHabit1+'</div>');
    $('.input-habit1').val('');
  });


  // update db
    // need to expand when  more than 1 item is added

  // delete item
  $('.container-data').on('click', '.display-data-item', function(e){
    console.log(e.currentTarget.dataset.keyvalue);
    var keyData = e.currentTarget.dataset.keyvalue;
    localStorage.removeItem(keyData);
    $('.container-data').text('');
  });
  // delete all?
  $('.btn-clear').click(function(){
    localStorage.clear();
    $('.container-data').text('');
  });

});