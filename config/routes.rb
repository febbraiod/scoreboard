Rails.application.routes.draw do

  get '/home' => 'scoreboards#home'

  get '/game' => 'scoreboards#game'

end
