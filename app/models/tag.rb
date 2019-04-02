class Tag < ApplicationRecord

    validates :tag, presence: true
    
    has_many :tagged_posts,
        class_name: :PostTag,
        primary_key: :id,
        foreign_key: :tag_id

end
