class MessagesController < ApplicationController

  protect_from_forgery only: []

  def index
    render json: Message.order(created_at: :desc).limit(params[:limit] || 10)
  end

  # POST /messages
  # body=My body
  def create
    message = Message.new
    message.body = params[:body]
    message.save!

    head :created # render status 201
  end

end