class ScoreboardsController < ApplicationController

  def import
  end

  def parse
    Scoreboard.parse_scoreboard_json(params[:file].path)
    redirect_to home_path
  end

  def home
    @scoreboard = Scoreboard.first
  end

end
