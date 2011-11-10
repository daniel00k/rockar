class HomeController < ApplicationController
$current_post
  def inicio
  end

  def perfil
      @post = @post=Post.new(:contenido=>params[:contenido],:user_id => current_user.id )
      @post.save
    if $current_post
      @comentario=Comentario.new(:content=>params[:content],:user_id => current_user.id,:post_id=>$current_post.id)      
      @comentario.save
    end
  end

  def muro
  end

  def posts
    @posts=Post.where("user_id = ? and created_at > ?", current_user.id, Time.at(params[:afterp].to_i + 1))
  end

  def comentarios
    if params[:post_id].to_i>0
    @comentarios=Comentario.where("post_id = ? and created_at > ?", params[:post_id], Time.at(params[:after].to_i + 1))
    $current_post=Post.find(params[:post_id])
    else
      @comentarios=Comentario.where("post_id = ? and created_at > ?",$current_post.id , Time.at(params[:after].to_i + 1))
    end
  end

end
