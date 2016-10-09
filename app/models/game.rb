class Game < ActiveRecord::Base

  def self.parse_game(game_id)
    JSON.parse(File.read('public/mlb.json'))['sports'][0]['leagues'][0]['events'].each do |i|
      if i['id'] == game_id
        game = serialize_game(i)
        return game
      end
    end
  end

  def self.serialize_game(game)
    parsed_game = {};

    parsed_game[:home_score] = game['competitions'][0]['competitors'][0]['score']
    parsed_game[:home_color] = game['competitions'][0]['competitors'][0]['team']['color']
    parsed_game[:home_team_location] = game['competitions'][0]['competitors'][0]['team']['location']
    parsed_game[:home_team_name] = game['competitions'][0]['competitors'][0]['team']['name']
    parsed_game[:home_team_record] = game['competitions'][0]['competitors'][0]['team']['record']['summary']

    
    parsed_game[:away_score] = game['competitions'][0]['competitors'][1]['score']
    parsed_game[:away_color] = game['competitions'][0]['competitors'][1]['team']['color']
    parsed_game[:away_team_location] = game['competitions'][0]['competitors'][1]['team']['location']
    parsed_game[:away_team_name] = game['competitions'][0]['competitors'][1]['team']['name']
    parsed_game[:away_team_record] = game['competitions'][0]['competitors'][1]['team']['record']['summary']
    
    parsed_game[:home_isWinner] = game['competitions'][0]['competitors'][0]['isWinner']

    if parsed_game[:home_isWinner] == true || parsed_game[:home_isWinner] == false
      parsed_game[:inning] = 'F'
    else
      game['competitions'][0]['period'] == 0 ? parsed_game[:inning] = 'N' : parsed_game[:inning] = game['competitions'][0]['period'].to_s + 'in'
    end

    if parsed_game[:home_isWinner] == true
      parsed_game[:home_team_pitcher] = [
        "#{game['competitions'][0]['stats']['winningPitcher']['athlete']['firstName']}" + ' ' + "#{game['competitions'][0]['stats']['winningPitcher']['athlete']['lastName']}",
        game['competitions'][0]['stats']['winningPitcher']['athlete']['id'].to_s
       ]
       parsed_game[:away_team_pitcher] = [
        "#{game['competitions'][0]['stats']['losingPitcher']['athlete']['firstName']}" + ' ' + "#{game['competitions'][0]['stats']['losingPitcher']['athlete']['lastName']}",
        game['competitions'][0]['stats']['losingPitcher']['athlete']['id'].to_s
       ]
    elsif parsed_game[:home_isWinner] == false
      parsed_game[:home_team_pitcher] = [
        "#{game['competitions'][0]['stats']['losingPitcher']['athlete']['firstName']}" + ' ' + "#{game['competitions'][0]['stats']['losingPitcher']['athlete']['lastName']}",
        game['competitions'][0]['stats']['losingPitcher']['athlete']['id'].to_s
       ]
       parsed_game[:away_team_pitcher] = [
        "#{game['competitions'][0]['stats']['winningPitcher']['athlete']['firstName']}" + ' ' + "#{game['competitions'][0]['stats']['winningPitcher']['athlete']['lastName']}",
        game['competitions'][0]['stats']['winningPitcher']['athlete']['id'].to_s
       ]
    else
      parsed_game[:home_team_pitcher] = [
        "#{game['competitions'][0]['stats']['homeStartingPitcher']['athlete']['firstName']}" + ' ' + "#{game['competitions'][0]['stats']['homeStartingPitcher']['athlete']['lastName']}",
        game['competitions'][0]['stats']['homeStartingPitcher']['athlete']['id'].to_s
       ]
       parsed_game[:away_team_pitcher] = [
        "#{game['competitions'][0]['stats']['awayStartingPitcher']['athlete']['firstName']}" + ' ' + "#{game['competitions'][0]['stats']['awayStartingPitcher']['athlete']['lastName']}",
        game['competitions'][0]['stats']['awayStartingPitcher']['athlete']['id'].to_s
       ]
    end

    parsed_game
  end

end
