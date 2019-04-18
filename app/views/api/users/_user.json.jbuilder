json.extract! user, :id, :username, :email

json.avatar "http://bestnycacupuncturist.com/wp-content/uploads/2016/11/anonymous-avatar-sm.jpg"

if logged_in? && user.id == current_user.id
    json.followingIds do
        json.array! user.followings.map { |follow| follow.followee_id }
    end

    json.followerIds do
        json.array! user.followers.map { |follow| follow.follower_id }
    end
    
    json.likes do
        json.array! user.liked_posts.map { |post| post.id }
    end
end