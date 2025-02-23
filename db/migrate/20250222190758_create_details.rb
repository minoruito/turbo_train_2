class CreateDetails < ActiveRecord::Migration[7.0]
  def change
    create_table :details do |t|
      t.integer :header_id, index: true
      t.string :title
      t.datetime :date2
      t.timestamps
    end
  end
end
