class Scoreboard < ActiveRecord::Base


  def self.parse_scoreboard_json(file)
    f = File.read(file)
    obj = JSON.parse(f)
    games = obj["sports"][0]["leagues"][0]["events"]

    s = Scoreboard.new(games: games)
    s.save

    games.each do |g|
      game = Game.new(game_id: g[:id], game_obj: g[:competitors])
      game.save
    end

  end

end
