class CreateGamesTables < ActiveRecord::Migration
  def change
    create_table :games_tables do |t|
      t.integer :game_id
      t.hstore :game_obj
    end
  end
end
