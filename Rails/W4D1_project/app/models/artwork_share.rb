class ArtworkShare < ApplicationRecord
  validates :artwork_id, uniqueness: { scope: :viewer_id }

  # Rails 5 automatically validates presence of belongs_to columns
  belongs_to :artwork
  belongs_to :viewer, foreign_key: :viewer_id, class_name: :User
end
