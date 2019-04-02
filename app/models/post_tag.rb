class PostTag < ApplicationRecord

    validates :post_id, uniqueness: {scope: :tag_id}

    belongs_to :post

    belongs_to :tag

end
