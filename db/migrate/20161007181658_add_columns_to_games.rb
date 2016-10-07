class AddColumnsToGames < ActiveRecord::Migration
  def change
      add_column :games, :game_id, :integer
      add_column :games, :game_obj, :hstore
  end
end
