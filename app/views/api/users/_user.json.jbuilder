json.extract! user, :id, :username, :email, :liked_posts
json.likes do
    json.array! user.liked_posts.do { |post| post.id }
end
json.avatar url_for(user.avatar)