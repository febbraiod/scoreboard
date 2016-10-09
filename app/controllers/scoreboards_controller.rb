class ScoreboardsController < ApplicationController

  def home
    @scoreboard = JSON.parse(File.read("public/mlb.json"))['sports'][0]['leagues'][0]['events']
  end

  def game
    game_id = params[:game_id].to_i
    @game = Game.find_game(game_id)
    render json: @game
  end

end
