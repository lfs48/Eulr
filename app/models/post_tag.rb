class PostTag < ApplicationRecord

    validates :post_id, uniqueness: {scope: :tag_id}

    belongs_to :post, inverse_of: :post_tags

    belongs_to :tag, inverse_of: :post_tags

end
