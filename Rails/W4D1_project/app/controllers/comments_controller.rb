class CommentsController < ApplicationController
  def create
    comment = Comment.new(comment_params)
    if comment.save
      render json: comment
    else
      render json: comment.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    comment = Comment.find(params[:id])
    comment.destroy
    render json: comment
  end

  def index
    if params[:user_id]
      author = User.find(params[:user_id])
      render json: author.comments
    elsif params[:artwork_id]
      artwork = Artwork.find(params[:artwork_id])
      render json: artwork.comments
    end
  end

  def comment_params
    params.require(:comment).permit(:author_id, :artwork_id, :body)
  end
end
