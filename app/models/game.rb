class Game < ActiveRecord::Base

  def self.find_game(game_id)
    JSON.parse(File.read("public/mlb.json"))['sports'][0]['leagues'][0]['events'].each do |i|
      if i["id"] == game_id
        return i
      end
    end
  end

end
