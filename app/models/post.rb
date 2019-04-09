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

    has_many :likes

    has_many :likers,
        through: :likes,
        source: :user

    has_many_attached :media

    def add_tags_from_strings(tagStrs)
        tags = Tag.where(:tag => tagStrs)
        self.tags += tags
    end

    def update_tags_from_strings(tagStrs)
        tags = Tag.where(:tag => tagStrs)
        self.tags = self.tags.select { |tag| tags.include?(tag) }
        tags = tags.reject { |tag| self.tags.include?(tag) }
        self.tags += tags
    end

end
