# encoding: UTF-8
require 'sip/concerns/models/usuario'
#
class Usuario < ActiveRecord::Base
  include Sip::Concerns::Models::Usuario
  has_many :respusuario, dependent: :delete_all,
    class_name: 'Respusuario',
    foreign_key: 'usuario_id'
end
