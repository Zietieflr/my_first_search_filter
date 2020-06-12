class CreateBones < ActiveRecord::Migration[6.0]
  def change
    create_table :bones do |t|
      t.string :name
      t.integer :quality
      t.references :dog

      t.timestamps
    end
  end
end
