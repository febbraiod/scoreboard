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
      alert('clicked');
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