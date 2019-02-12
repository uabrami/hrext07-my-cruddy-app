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
    $('.container-data-habit1').text('');
    $('.container-data-habit1-feelingwords').text('');
  });

//*********HABIT 1*********

  //Add Habit Button
  $('.btn-add-habit1').on('click', function(e){
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

//*********HABIT 1 ANIMATION*********


$('.container-data-habit1-checkbox').one('click', function(e){
    $('.container-data-habit1-checkbox').append('<div class="container-data-habit1-greatjob"><img src="GreatJob_1.png" alt="greatJob"/></div>');

    });


//*********HABIT 2*********

  //Add Habit Button
  $('.btn-add-habit2').on('click', function(e){
  var keyDataHabit2 = 'habit2'
  var valueDataHabit2 = $('.input-habit2').val();
    // write to db
    localStorage.setItem(keyDataHabit2, valueDataHabit2);
    // display from db
    $('.container-data-habit2').html('<div class="display-data-habit2" data-keyValue="'+keyDataHabit2+'">'+valueDataHabit2+'</div>');
    'habit2'
    $('.input-habit2').val('');
  });

  // delete item
  $('.btn-delete-habit2').on('click', function(e){

var habit2keyvalue = $('.display-data-habit2')
localStorage.removeItem('habit2');
$('.container-data-habit2').text('');
  });

//*********HABIT 2 FEELING WORDS*********
  //Add Habit FeelingWords Button
  $('.btn-add-habit2-feelingwords').on('click', function(e){
  var keyDataHabit2Fw = 'fw2'
  var valueDataHabit2Fw = $('.input-habit2-feelingwords').val();
    // write to db
    localStorage.setItem(keyDataHabit2Fw, valueDataHabit2Fw);
    // display from db
    $('.container-data-habit2-feelingwords').html('<div class="display-data-habit2-feelingwords" data-keyValue="'+keyDataHabit2Fw+'">'+valueDataHabit2Fw+'</div>');
    'fw2'
    $('.input-habit2-feelingwords').val('');
  });

  // delete item
  $('.btn-delete-habit2-feelingwords').on('click', function(e){

var habit2keyvalue = $('.display-data-habit2-feelingword')
localStorage.removeItem('fw2');
$('.container-data-habit2-feelingwords').text('');
  });


//*********HABIT 2 ANIMATION*********


$('.container-data-habit2-checkbox').one('click', function(e){
    $('.container-data-habit2-checkbox').append('<div class="container-data-habit2-greatjob"><img src="GreatJob_2.png" alt="greatJob"/></div>');

    })


//*********HABIT 3*********

  //Add Habit Button
  $('.btn-add-habit3').on('click', function(e){
  var keyDataHabit3 = 'habit3'
  var valueDataHabit3 = $('.input-habit3').val();
    // write to db
    localStorage.setItem(keyDataHabit3, valueDataHabit3);
    // display from db
    $('.container-data-habit3').html('<div class="display-data-habit3" data-keyValue="'+keyDataHabit3+'">'+valueDataHabit3+'</div>');
    'habit3'
    $('.input-habit3').val('');
  });

  // delete item
  $('.btn-delete-habit3').on('click', function(e){

var habit3keyvalue = $('.display-data-habit3')
localStorage.removeItem('habit3');
$('.container-data-habit3').text('');
  });

//*********HABIT 3 FEELING WORDS*********
  //Add Habit FeelingWords Button
  $('.btn-add-habit3-feelingwords').on('click', function(e){
  var keyDataHabit3Fw = 'fw3'
  var valueDataHabit3Fw = $('.input-habit3-feelingwords').val();
    // write to db
    localStorage.setItem(keyDataHabit3Fw, valueDataHabit3Fw);
    // display from db
    $('.container-data-habit3-feelingwords').html('<div class="display-data-habit3-feelingwords" data-keyValue="'+keyDataHabit3Fw+'">'+valueDataHabit3Fw+'</div>');
    'fw3'
    $('.input-habit3-feelingwords').val('');
  });

  // delete item
  $('.btn-delete-habit3-feelingwords').one('click', function(e){

var habit3keyvalue = $('.display-data-habit3-feelingword')
localStorage.removeItem('fw3');
$('.container-data-habit3-feelingwords').text('');
  });

//*********HABIT 3 ANIMATION*********


$('.container-data-habit3-checkbox').one('click', function(e){
    $('.container-data-habit3-checkbox').append('<div class="container-data-habit3-greatjob"><img src="GreatJob_3.png" alt="greatJob"/></div>');

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

