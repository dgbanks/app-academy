class Artwork < ApplicationRecord

  validates :title, :img_url, presence: true
  validates :img_url, uniqueness: true
  validates :title, uniqueness: { scope: :artist_id }

  # Rails 5 automatically validates presence of belongs_to columns
  belongs_to :artist, foreign_key: :artist_id, class_name: :User

  has_many :artwork_shares, dependent: :destroy
  has_many :shared_viewers, through: :artwork_shares, source: :viewer
end
