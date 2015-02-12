class SongsController < ApplicationController

  def index
    render json: Song.order(created_at: :desc).
      search(params[:q]).limit(params[:limit] || 20)
  end

  def create
    song = Song.new
    song.title = params[:title]
    song.notes = params[:notes]
    song.save!

    head :created
  end

  def destroy
    Song.find(params[:id]).destroy!
    head :ok
  end

end