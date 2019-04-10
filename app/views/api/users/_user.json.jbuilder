json.extract! user, :id, :username, :email
json.likes do
    json.array! user.liked_posts.map { |post| post.id }
end
json.avatar "http://bestnycacupuncturist.com/wp-content/uploads/2016/11/anonymous-avatar-sm.jpg"