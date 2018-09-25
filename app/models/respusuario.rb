# encoding: UTF-8

class Respusuario < ActiveRecord::Base

   belongs_to :usuario, validate: true, inverse_of: :respusuario


end
