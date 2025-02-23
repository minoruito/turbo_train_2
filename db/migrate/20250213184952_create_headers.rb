class CreateHeaders < ActiveRecord::Migration[7.0]
  def change
    create_table :headers do |t|
      t.datetime :date1
      t.timestamps
    end
  end
end
