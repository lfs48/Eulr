class Tag < ApplicationRecord

    validates :tag, presence: true

    has_many :post_tags
    
    has_many :tagged_posts,
        through: :post_tags,
        source: :post

    def self.create_tags_from_strings(tagStrs)
        tags = Tag.where(:tag => tagStrs)
        tagStrs.each do |tagStr|
            unless ( tags.any? { |record| record.tag == tagStr } )
                tag = Tag.new({tag: tagStr})
                tag.save
            end
        end
    end

end
