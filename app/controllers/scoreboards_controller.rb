class ScoreboardsController < ApplicationController

  def import
  end

  def parse
    Scoreboard.parse_scoreboard_json(params[:file].path)
    redirect_to home_path
  end

  def home
    @scoreboard = JSON.parse( File.read("public/mlb.json"))['sports'][0]['leagues'][0]['events']
  end

end
