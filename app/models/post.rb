class Post < ApplicationRecord

    validates :author_id, :user_id, :content, :type, presence: true

end
