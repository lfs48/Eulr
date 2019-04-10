json.posts do
    @posts.each do |post|
        json.set! post.id do
            json.partial! "api/posts/post", post: post
        end
    end
end

json.tags do
    @tags.each do |tag|
        json.set! tag.id do
            json.partial! "api/tags/tag", tag: tag
        end
    end
end