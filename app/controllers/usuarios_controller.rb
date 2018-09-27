# encoding: UTF-8
require 'sip/concerns/controllers/usuarios_controller'

class UsuariosController < Sip::ModelosController
  include Sip::Concerns::Controllers::UsuariosController

  def calificar
    render 'calificar', layout: 'application'
  end
end
