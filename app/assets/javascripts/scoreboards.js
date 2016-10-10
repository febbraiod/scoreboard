$(function() {
    banner_expander();
    setGameBinder();
    backToLeague();
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
    // rewrite DOM
    writeSingleGame(game_data);

    //toggle display
    leagueToSingleToggle();
  });
}

function writeSingleGame(game_data){
  $('.home_team').text(game_data.home_score);
    $('#home_team_name').text(game_data.home_team_name);
    $('#home_pitcher').attr("src", 'http://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/' + game_data.home_team_pitcher[1] + '.png');
    $('#popup_home_team_location').text(game_data.home_team_location);
    $('#popup_home_team_name').text(game_data.home_team_name);
    $('#home_team_record').text(game_data.home_team_record);
    $('#popup_home_team_title').css('color', '#' + game_data.home_color);

    if(game_data.home_isWinner === true){
      $('#home_pitcher_name').text(game_data.home_team_pitcher[0] + '(w)');
      $('#away_pitcher_name').text(game_data.away_team_pitcher[0] + '(l)');
    }else if(game_data.home_isWinner === false){
      $('#home_pitcher_name').text(game_data.home_team_pitcher[0] + '(l)');
      $('#away_pitcher_name').text(game_data.away_team_pitcher[0] + '(w)');
    }else{
      $('#home_pitcher_name').text(game_data.home_team_pitcher[0]);
      $('#away_pitcher_name').text(game_data.away_team_pitcher[0]);
    }
    

    $('.away_team').text(game_data.away_score);
    $('#away_team_name').text(game_data.away_team_name);
    $('#away_pitcher').attr("src", 'http://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/' + game_data.away_team_pitcher[1] + '.png');
    $('#popup_away_team_location').text(game_data.away_team_location);
    $('#popup_away_team_name').text(game_data.away_team_name);
    $('#away_team_record').text(game_data.away_team_record);
    $('#popup_away_team_title').css('color', '#' + game_data.away_color);

    $('#single_game_status').text(game_data.inning);
}

function leagueToSingleToggle(){
  if($('#full_league').is(':visible')){
    $('.mainscoreboard').css('background','url(https://s3.postimg.org/jyc1nakyr/single_game_background.jpg)');
    $('.mainscoreboard').css('background-size','100% 100%');
    $('#game_detail').show();
    $('#full_league').hide();
  }else{
    $('.mainscoreboard').css('background','url(https://s21.postimg.org/8v330itif/mainscoreboardwithbud.jpg');
    $('.mainscoreboard').css('background-size','100% 100%');
    $('#full_league').show(); 
    $('#game_detail').hide();
  }
}

function backToLeague(){
  $('#click_out').click(function(){leagueToSingleToggle();});
}

// get details on hover
function hover_home(){
  $('#home_hover').hover(
    function(){
      $('#home_popup').stop(true, true).show();
    },
    function(){
      $('#home_popup').stop(true, true).fadeOut(100);
    }
  );
}

function hover_away(){
  $('#away_hover').hover(
    function(){
      $('#away_popup').stop(true, true).show();
    },
    function(){
      $('#away_popup').stop(true, true).fadeOut(100);
    }
  );
}

