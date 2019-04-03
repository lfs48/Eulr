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

    has_many :post_tags

    has_many :tags,
        through: :post_tags,
        source: :tag

    has_many_attached :media

    def add_tags_from_strings(tagStrs)
        tagStrs.each do |tagStr|
            tags = Tag.where(:tag => tagStrs)
            self.tags << tags
        end
    end

end
