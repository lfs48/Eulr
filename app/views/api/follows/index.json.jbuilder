@followings.each do |follow|
    json.set! follow.id do
        json.partial! "api/follows/follow", follow: follow
    end
 end

 @followers.each do |follow|
    json.set! follow.id do
        json.partial! "api/follows/follow", follow: follow
    end
 end