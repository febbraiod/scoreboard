Rails.application.routes.draw do

  root 'scoreboards#home'

  get '/game' => 'scoreboards#game'

end
