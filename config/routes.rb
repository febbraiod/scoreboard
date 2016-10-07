Rails.application.routes.draw do

  get 'import_json' => 'scoreboards#import'
  post 'parse' => 'scoreboards#parse'

  get '/home' => 'scoreboards#home'

end
