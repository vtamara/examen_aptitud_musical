class CreateRespusuario < ActiveRecord::Migration[5.2]
  def change
    create_table :respusuarios do |t|
      t.integer :usuario_id, null: false
      t.integer :index, null: false
      t.integer :ejercicio
      t.binary :audio, null: false
    end
  end
end
