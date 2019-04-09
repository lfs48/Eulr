json.extract! post, :id, :author_id, :poster_id, :content, :post_type

json.tags do 
    json.array! post.tags.map { |tag| tag.id }
end

json.mediaUrls post.media.map { |file| url_for(file) }

json.likers do
    json.array! post.likers.map { |liker| liker.id }
end