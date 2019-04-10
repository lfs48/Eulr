json.post do 
    json.partial! "api/posts/post", post: @post
end

json.tags do 
    @post.tags.each do |tag|
        json.set! tag.id do
            json.partial! "api/tags/tag", tag: tag
        end
    end
end