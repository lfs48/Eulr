json.extract! user, :id, :username, :email
json.likes do
    json.array! user.liked_posts.map { |post| post.id }
end
json.avatar url_for(user.avatar)