/*
Init app
interact with DOM
interact with localstorage

 */

$(document).ready(function(){
  // this is where we jquery
 //Clear all data
   $('.btn-clear').click(function(){
    localStorage.clear();
    $('.container-habit').text('');
  });

//*********HABIT 1*********

  //Add Habit Button
  $('.btn-add-habit1').on('click', function(e){
    console.log(e)
  var keyDataHabit1 = 'habit1'
  var valueDataHabit1 = $('.input-habit1').val();
    // write to db
    localStorage.setItem(keyDataHabit1, valueDataHabit1);
    // display from db
    $('.container-data-habit1').html('<div class="display-data-habit1" data-keyValue="'+keyDataHabit1+'">'+valueDataHabit1+'</div>');
    'habit1'
    $('.input-habit1').val('');
  });

  // delete item
  $('.btn-delete-habit1').on('click', function(e){

var habit1keyvalue = $('.display-data-habit1')
localStorage.removeItem('habit1');
$('.container-data-habit1').text('');
  });

//*********HABIT 1 FEELING WORDS*********
  //Add Habit FeelingWords Button
  $('.btn-add-habit1-feelingwords').on('click', function(e){
    console.log(e)
  var keyDataHabit1Fw = 'fw1'
  var valueDataHabit1Fw = $('.input-habit1-feelingwords').val();
    // write to db
    localStorage.setItem(keyDataHabit1Fw, valueDataHabit1Fw);
    // display from db
    $('.container-data-habit1-feelingwords').html('<div class="display-data-habit1-feelingwords" data-keyValue="'+keyDataHabit1Fw+'">'+valueDataHabit1Fw+'</div>');
    'fw1'
    $('.input-habit1-feelingwords').val('');
  });

  // delete item
  $('.btn-delete-habit1-feelingwords').on('click', function(e){

var habit1keyvalue = $('.display-data-habit1-feelingword')
localStorage.removeItem('fw1');
$('.container-data-habit1-feelingwords').text('');
  });




});


  // update db
    // need to expand when  more than 1 item is added
// display from db
    // var displayTextHabit1 = localStorage.getItem(keyDataHabit1);
    // this only displays the last one? might want to switch to html
    // and append a div
    // <div class="display-data-item" data-keyValue="keyData">valueData</div>
    // if you use backticks ` you can use ${templateLiterals}
    // TODO make this vars make sense across the app

