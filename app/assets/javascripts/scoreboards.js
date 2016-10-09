$(function() {
    banner_expander();
    setGameBinder();
    hover_home();
    hover_away();
});

// banner to fullboard
function banner_expander(){
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
  $('.scoreboard').show();
}

 // full board to single game
function setGameBinder(){
  $('.score').on('click', function(){
    var game_id = $(this).data('id');
    getGame(game_id);
  });
}

function getGame(game_id){
  var w = $('.mainscoreboard').width();
  $.get('/game', {game_id: game_id}).done(function(game_data){

      debugger

      $('.mainscoreboard').css('background','url(https://s10.postimg.org/wkxm9n5eh/single_game_background.jpg)');
      $('.mainscoreboard').css('background-size','100% 100%');
      $('#game_detail').show();
      $('#full_league').hide();
      // $('#getNotes').hide();
      // $('#case_notes').css('display', 'block');
      // var notes = data.notes;
      // for(var i = 0; i < notes.length ; i++){
      //   var note = new Note(notes[i].id, notes[i].content, notes[i].user, new Date(notes[i].created_at));
      //   renderNote(note);  
      // }
  });
}

// get details on hover
function hover_home(){
  $('.home_team').hover(
    function(){
      $('#home_popup').fadeIn(200);
    },
    function(){
      $('#home_popup').fadeOut(100);
    }
  );
}

function hover_away(){
  $('.away_team').hover(
    function(){
      $('#away_popup').fadeIn(200);
    },
    function(){
      $('#away_popup').fadeOut(100);
    }
  );
}

