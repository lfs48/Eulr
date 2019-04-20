user_list = [
    ["euler", "leuler@mathmail.com", "123456789", "https://upload.wikimedia.org/wikipedia/commons/d/d7/Leonhard_Euler.jpg"],
    ["fermat", "pfermat@mathmail.com", "123456789", "https://upload.wikimedia.org/wikipedia/commons/f/f3/Pierre_de_Fermat.jpg"],
    ["gauss", "cfgauss@mathmail.com", "123456789", "https://upload.wikimedia.org/wikipedia/commons/9/9b/Carl_Friedrich_Gauss.jpg"],
    ["leibniz", "gwleibniz@mathmail.com", "123456789", "https://www.college.columbia.edu/core/sites/core/files/styles/large/public/images/Gottfried_Wilhelm_von_Leibniz.jpg?itok=6vRJjb8w"],
    ["euclid", "euclid@mathmail.com", "123456789", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Euklid-von-Alexandria_1.jpg/220px-Euklid-von-Alexandria_1.jpg"],
    ["lovelace", "alovelace@mathmail.com", "123456789", "https://upload.wikimedia.org/wikipedia/commons/c/c0/Ada_Lovelace_Chalon_portrait.jpg"],
    ["turing", "aturing@mathmail.com", "123456789", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Alan_Turing_Aged_16.jpg/220px-Alan_Turing_Aged_16.jpg"],
    ["hilbert", "dhilbert@mathmail.com", "123456789", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Hilbert.jpg/220px-Hilbert.jpg"],
    ["riemann", "briemann@mathmail.com", "123456789", "https://www.sapaviva.com/wp-content/uploads/2017/06/24S.-Georg-Bernhard-Riemann-1826-1866-420x420.jpg"],
    ["germain", "sgermain@mathmail.com", "123456789", "https://www.thefamouspeople.com/profiles/images/sophie-germain-1.jpg"],
    ["fibonacci", "lfibonacci@mathmail.com", "123456789", "https://upload.wikimedia.org/wikipedia/commons/a/a2/Fibonacci.jpg"],
    ["noether", "enoether@mathmail.com", "123456789", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Noether_retusche_nachcoloriert.jpg/220px-Noether_retusche_nachcoloriert.jpg"],
    ["wiles", "awiles@mathmail.com", "123456789", "http://famous-mathematicians.org/wp-content/uploads/2013/07/Andrew-Wiles-300x208.jpg"],
    ["fourier", "jfourier@mathmail.com", "123456789", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Fourier2.jpg/250px-Fourier2.jpg"],
    ["galois", "egalois@mathmail.com", "123456789", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Evariste_galois.jpg/464px-Evariste_galois.jpg"],
    ["cantor", "gcantor@mathmail.com", "123456789", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Georg_Cantor2.jpg/220px-Georg_Cantor2.jpg"],
    ["ramanujan", "sramanujan@mathmail.com", "123456789", "http://trinitycollegechapel.com/media/imagestore/editable-box-images/Ramanujan.jpg"],
    ["newton", "inewton@mathmail.com", "123456789", "http://www-history.mcs.st-andrews.ac.uk/BigPictures/Newton_2.jpeg"],
    ["kovalevskaya", "skovalevskaya@mathmail.com", "123456789", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Sofja_Wassiljewna_Kowalewskaja_1.jpg/220px-Sofja_Wassiljewna_Kowalewskaja_1.jpg"],
    ["cartwright", "mcartwright@mathmail.com", "123456789", "http://www-history.mcs.st-and.ac.uk/BigPictures/Cartwright_4.jpeg"]
]

user_list.each do |username, email, pw, avatarUrl|
    user = User.create(username: username, email: email, password: pw)
    file = open(avatarUrl)
    user.avatar.attach(io: file, filename: 'avatar.jpg')
end

users = User.all

fermats_first_post = "{\"title\":\"\",\"body\":\"It is impossible to separate a cube into two cubes, or a fourth power into two fourth powers, or in general, any power higher than the second, into two like powers. I have discovered a truly marvelous proof of this, which the character limit on this post is too small to contain.\"}";

post_list = [
    [users[0].id, users[0].id, "{\"title\":\"\",\"body\":\"anyone else read ln as latural nogarithmn\"}", "text", ["math", "ln", "log"] ],
    [users[1].id, users[1].id, fermats_first_post, "text", ["proofs", "theorems"] ],
    [users[2].id, users[2].id, "{\"title\":\"Gauss is in the hauss\",\"body\":\"\"}", "text", [] ],
    [users[3].id, users[3].id, "{\"title\":\"Callout Post for Isaac Newton @ newton\",\"body\":\"Claims to have invented calculus even though I clearly did it first [pm me for receipts]\"}", "text", ["callout", "drama", "newton", "calculus"] ],
    [users[4].id, users[4].id, "{\"urls\":[\"https://brewminate.com/wp-content/uploads/2018/05/050918-10-Greek-Greece-Geometry-Astronomy-Mathematics.jpg\"],\"caption\":\"\"}", "photo", ["math", "truth", "beauty", "geometry"] ],
    [users[4].id, users[4].id, "{\"urls\":[\"https://static.interestingengineering.com/images/MARCH/sizes/Pi-Main_resize_md.jpg\"],\"caption\":\"\"}", "photo", ["math", "truth", "beauty", "geometry"] ],
    [users[5].id, users[5].id, "{\"urls\":[\"https://www.spiritblog.net/wp-content/uploads/2016/01/adaheader.gif\"],\"caption\":\"I was writing algorithms before it was cool\"}", "photo", ["algorithms", "compsci", "hipster"] ],
    [users[6].id, users[6].id, "{\"title\":\"The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.\",\"body\":\"Ada Lovelace\"}", "quote", [] ],
    [users[6].id, users[6].id, "{\"urls\":[\"https://cdncontribute.geeksforgeeks.org/wp-content/uploads/2222-1.png\", \"https://cdncontribute.geeksforgeeks.org/wp-content/uploads/2222-2.png\"],\"caption\":\"\"}", "photo", ["turing machine", "compsci"] ],
    [users[7].id, users[7].id, "{\"url\":\"https://www.cmi.ac.in/~smahanta/hilbert.html\",\"title\":\"Hilbert Problems\",\"summary\":\"23 Mathematical Problems\",\"body\":\"I just put out this really cool list of mathematics problems, check it out!\"}", "link", ["math"] ],
    [users[8].id, users[8].id, "{\"urls\":[\"https://3c1703fe8d.site.internapcdn.net/newman/csz/news/800/2017/58e7ac0b7b501.jpg\"],\"caption\":\"\"}", "photo", ["zeta function", "graphs", "beauty"] ],
    [users[8].id, users[8].id, "{\"urls\":[\"https://i2.wp.com/peterjamesthomas.com/wp-content/uploads/2017/03/solve-if-u-r-a-genius-w5001.png?resize=500%2C538&ssl=1\"],\"caption\":\"\"}", "photo", ["zeta function", "graphs", "beauty"] ],
    [users[9].id, users[9].id, "{\"title\":\"Logic is the foundation of the certainty of all the knowledge we acquire.\",\"body\":\"Leonard Euler\"}", "quote", ["euler", "truth", "logic"] ]
].shuffle

post_list.each do |author_id, poster_id, content, post_type, tags|
    post = Post.create(author_id: author_id, poster_id: poster_id, content: content, post_type: post_type)
    Tag.create_tags_from_strings(tags)
    post.add_tags_from_strings(tags)
end

posts = Post.all

follows_list = [
    [User.first.id, User.second.id],
    [User.first.id, User.third.id],
    [User.first.id, User.fourth.id],
    [User.first.id, User.fifth.id],
    [User.second.id, User.fourth.id],
    [User.third.id, User.fifth.id],
    [User.fourth.id, User.first.id],
    [User.fifth.id, User.first.id]
]

follows_list.each do |follower_id, followee_id|
    Follow.create(follower_id: follower_id, followee_id: followee_id)
end

likes_list = []

100.times do
    user_id = (0..19).to_a.sample
    post_id = (0..10).to_a.sample
    post = posts[post_id]
    like = [user_id, post_id]
    likes_list << like unless post.author_id == user_id || likes_list.include?(like)
end

likes_list.each do |user_id, post_id|
    Like.create(user_id: user_id, post_id: post_id)
end
