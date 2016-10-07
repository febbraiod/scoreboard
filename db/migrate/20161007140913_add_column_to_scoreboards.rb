class AddColumnToScoreboards < ActiveRecord::Migration
  def change
    add_column :scoreboards, :games, :hstore, array: true, default: [], null: false
  end
end
