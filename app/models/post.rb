class Post < ActiveRecord::Base
  belongs_to:user
  has_many:comentarios
  validates_presence_of :contenido
end
