json.extract! user, :id, :username, :email
json.likes do
    json.array! user.liked_posts.map { |post| post.id }
end
json.avatar url_for(user.avatar)

if user.id == current_user.id
    json.followings do
        json.array! user.followings.map { |following| following.id }
    end

    json.followers do
        json.array! user.followers.map { |follower| follower.id }
    end
end