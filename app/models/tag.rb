class Tag < ApplicationRecord

    validates :tag, presence: true

    has_many :post_tags
    
    has_many :tagged_posts,
        through: :post_tags,
        source: :post

end
