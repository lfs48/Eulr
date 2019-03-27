user_list = [
    ["euler", "leuler@mathmail.com", "123456"],
    ["fermat", "pfermat@mathmail.com", "123456"],
    ["gauss", "cfgauss@mathmail.com", "123456"],
    ["leibniz", "gwleibniz@mathmail.com", "123456"],
    ["euclid", "euclid@mathmail.com", "123456"]
]

user_list.each do |username, email, pw|
    User.create(username: username, email: email, password: pw)
end

# fermats_first_post = "It is impossible to separate a cube into two cubes, or a fourth power into two fourth powers, or in general, any power higher than the second, into two like powers. I have discovered a truly marvelous proof of this, which the character limit on this post is too small to contain."

# post_list = [
#     [User.first, User.first, "anyone else read ln as latural nogarithmn", "text"],
#     [User.second.id, User.second.id, fermats_first_post, "text"],
# ]

# post_list.each do |author_id, user_id, body, type|
#     Post.create(author_id: author_id, user_id: user_id, body: body, type: type)
# end

# tag_list = [
#     "math",
#     "proofs",
#     "calculus",
#     "mathisbeautiful",
#     "graphs",
#     "equations"
# ]

# tag_list.each do |tag|
#     Tag.create(tag: tag)
# end

# follows_list = [
#     [User..id, User.second.id, "user"],
#     [User..id, User.third.id, "user"],
#     [User.second.id, User.fourth.id, "user"],
#     [User.third.id, User.fifth.id, "user"],
#     [User.fourth.id, User.first.id, "user"],
#     [User.fifth.id, User.first.id, "user"],
#     [User.fifth.id, Tag.first.id, "tag"],
#     [User.first.id, Tag.second.id, "tag"],
#     [User.second.id, Tag.second.id, "tag"]
# ]

# follows_list.each do |follower_id, followee_id, type|
#     Follow.create(follower_id: follower_id, followee_id: followee_id, type: type)
# end

# likes_list = [
#     [User.second.id, Post.first.id],
#     [User.first.id, Post.second.id],
#     [User.third.id, Post.first.id],
#     [User.fourth.id, Post.first.id]
# ]

# likes_list.each do |user_id, post_id|
#     Like.create(user_id: user_id, post_id: post_id)
# end
