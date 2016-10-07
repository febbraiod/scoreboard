class EnableHstoreExtension < ActiveRecord::Migration
  execute 'create extension hstore'
  def change
    enable_extension 'hstore'
  end
end
