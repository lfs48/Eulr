class Post < ApplicationRecord

    validates :content, :post_type, presence: true

    belongs_to :author,
        class_name: :User,
        primary_key: :id,
        foreign_key: :author_id

    belongs_to :poster,
        class_name: :User,
        primary_key: :id,
        foreign_key: :poster_id

end
