user_list = [
    ["euler", "leuler@mathmail.com", "123456789"],
    ["fermat", "pfermat@mathmail.com", "123456789"],
    ["gauss", "cfgauss@mathmail.com", "123456789"],
    ["leibniz", "gwleibniz@mathmail.com", "123456789"],
    ["euclid", "euclid@mathmail.com", "123456789"],
    ["lovelace", "alovelace@mathmail.com", "123456789"],
    ["turing", "aturing@mathmail.com", "123456789"],
    ["hilbert", "dhilbert@mathmail.com", "123456789"],
    ["riemann", "briemann@mathmail.com", "123456789"],
    ["germain", "sgermain@mathmail.com", "123456789"],
    ["fibonacci", "lfibonacci@mathmail.com", "123456789"],
    ["noether", "enoether@mathmail.com", "123456789"],
    ["wiles", "awiles@mathmail.com", "123456789"],
    ["fourier", "jfourier@mathmail.com", "123456789"],
    ["galois", "egalois@mathmail.com", "123456789"],
    ["cantor", "gcantor@mathmail.com", "123456789"],
    ["ramanujan", "sramanujan@mathmail.com", "123456789"],
    ["newton", "inewton@mathmail.com", "123456789"],
    ["kovalevskaya", "skovalevskaya@mathmail.com", "123456789"],
    ["cartwright", "mcartwright@mathmail.com", "123456789"],
]

user_list.each do |username, email, pw|
    User.create(username: username, email: email, password: pw)
end

fermats_first_post = "{\"title\":\"\",\"body\":\"It is impossible to separate a cube into two cubes, or a fourth power into two fourth powers, or in general, any power higher than the second, into two like powers. I have discovered a truly marvelous proof of this, which the character limit on this post is too small to contain.\"}";

post_list = [
    [User.first.id, User.first.id, "{\"title\":\"\",\"body\":\"anyone else read ln as latural nogarithmn\"}", "text"],
    [User.second.id, User.second.id, fermats_first_post, "text"],
    [User.third.id, User.third.id, "{\"title\":\"Gauss is in the hauss\",\"body\":\"\"}", "text"],
    [User.fourth.id, User.fourth.id, "{\"title\":\"Callout Post for Isaac Newton @ newton\",\"body\":\"Claims to have invented calculus even though I clearly did it first [pm me for receipts]\"}", "text"]
]

post_list.each do |author_id, poster_id, content, post_type|
    Post.create(author_id: author_id, poster_id: poster_id, content: content, post_type: post_type)
end

tag_list = [
    "math",
    "proofs",
    "calculus",
    "mathisbeautiful",
    "graphs",
    "equations"
]

tag_list.each do |tag|
    Tag.create(tag: tag)
end

follows_list = [
    [User.first.id, User.second.id],
    [User.first.id, User.third.id],
    [User.second.id, User.fourth.id],
    [User.third.id, User.fifth.id],
    [User.fourth.id, User.first.id],
    [User.fifth.id, User.first.id]
]

follows_list.each do |follower_id, followee_id|
    Follow.create(follower_id: follower_id, followee_id: followee_id)
end

likes_list = [
    [User.second.id, Post.first.id],
    [User.first.id, Post.second.id],
    [User.third.id, Post.first.id],
    [User.fourth.id, Post.first.id]
]

likes_list.each do |user_id, post_id|
    Like.create(user_id: user_id, post_id: post_id)
end
