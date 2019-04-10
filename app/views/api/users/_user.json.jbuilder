json.extract! user, :id, :username, :email
json.likes do
    json.array! user.liked_posts.map { |post| post.id }
end
json.avatar url_for(user.avatar)

if user.id == current_user.id
    json.followingIds do
        json.array! user.followings.map { |follow| follow.followee_id }
    end

    json.followerIds do
        json.array! user.followers.map { |follow| follow.follower_id }
    end
end