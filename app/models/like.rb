class Like < ApplicationRecord

    validates :post_id, uniqueness: {scope: :user_id}

    belongs_to :post, inverse_of: :likes

    belongs_to :user, inverse_of: :likes

end
