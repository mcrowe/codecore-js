class Song < ActiveRecord::Base

  validates_presence_of :title, :notes

  def self.search(query)
    if query.present?
      where("title like ?", "%#{query}%")
    else
      all
    end
  end

end
