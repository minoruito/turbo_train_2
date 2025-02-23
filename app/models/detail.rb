class Detail < ApplicationRecord

  validates :title, presence: true
  validates :date2, presence: true

  belongs_to :header, optional: true
end
