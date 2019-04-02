json.extract! post, :id, :author_id, :poster_id, :content, :post_type
json.mediaUrls post.media.map { |file| url_for(file) }