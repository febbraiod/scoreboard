// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sprockets
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(function() {
    banner_click();
});


function banner_click(){
  $('.collapsed_board').click(function () {
      var defaultHeight = "66px";
      var expandHeight = "250px";
      $(this).css('background', '#3d4c49');
      $(this).html('');
      $(this).animate({'min-height': expandHeight}, 300);
      setTimeout(switch_boards, 300);

  });
}


function switch_boards(){
  $('.collapsed_board').hide();
  $('.league_scoreboard').show();
}

function getGame(game_id){
  $.get('/game', {game_id: game_id}).done(function(game_data){
      // $('#getNotes').hide();
      // $('#case_notes').css('display', 'block');
      // var notes = data.notes;
      // for(var i = 0; i < notes.length ; i++){
      //   var note = new Note(notes[i].id, notes[i].content, notes[i].user, new Date(notes[i].created_at));
      //   renderNote(note);  
      // }
  });
}

function setGameBinder(){
  $('#game_score').on('click', function(){
    var case_id = $(this).data('game_id');
    getGame(game_id);
  });
}