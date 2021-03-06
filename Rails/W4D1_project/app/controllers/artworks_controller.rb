class ArtworksController < ApplicationController
  def create
    artwork = Artwork.new(artwork_params)
    if artwork.save
      render json: artwork
    else
      render json: artwork.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    artwork = Artwork.find(params[:id])
    artwork.destroy!
    render json: artwork
  end

  def index
    user = User.find(params[:user_id])
    artworks = [].concat(user.artworks).concat(user.shared_artworks)
    render json: artworks
  end

  def show
    artwork = Artwork.find(params[:id])
    render json: artwork
  end

  def update
    artwork = Artwork.find(params[:id])
    if artwork.update_attributes(artwork_params)
      render json: artwork
    else
      render json: artwork.errors.full_messages, status: :unprocessable_entity
    end
  end

  private
  def artwork_params
    params.require(:artwork).permit(:title, :img_url, :artist_id)
  end
end
