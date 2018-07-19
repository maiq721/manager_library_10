class CreateTags < ActiveRecord::Migration[5.2]
  def change
    create_table :tags do |t|
      t.string :tag

      t.timestamps
    end
    add_index :tags, :tag
  end
end
