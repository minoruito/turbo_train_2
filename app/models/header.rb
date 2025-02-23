class Header < ApplicationRecord

  validates :date1, presence: true

  has_many :details, autosave: true
  accepts_nested_attributes_for :details, allow_destroy: true

end
