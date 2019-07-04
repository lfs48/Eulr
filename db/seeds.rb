user_list = [
    ["euler", "leuler@mathmail.com", "123456789", "https://coertvonk.com/wp-content/uploads/Leonhard_Euler.jpg"],
    ["fermat", "pfermat@mathmail.com", "123456789", "https://upload.wikimedia.org/wikipedia/commons/f/f3/Pierre_de_Fermat.jpg"],
    ["gauss", "cfgauss@mathmail.com", "123456789", "https://upload.wikimedia.org/wikipedia/commons/9/9b/Carl_Friedrich_Gauss.jpg"],
    ["leibniz", "gwleibniz@mathmail.com", "123456789", "https://www.college.columbia.edu/core/sites/core/files/styles/large/public/images/Gottfried_Wilhelm_von_Leibniz.jpg?itok=6vRJjb8w"],
    ["euclid", "euclid@mathmail.com", "123456789", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Euklid-von-Alexandria_1.jpg/220px-Euklid-von-Alexandria_1.jpg"],
    ["lovelace", "alovelace@mathmail.com", "123456789", "https://upload.wikimedia.org/wikipedia/commons/c/c0/Ada_Lovelace_Chalon_portrait.jpg"],
    ["turing", "aturing@mathmail.com", "123456789", "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE5NDg0MDU1MTUzMTE2Njg3/alan-turing-9512017-1-402.jpg"],
    ["hilbert", "dhilbert@mathmail.com", "123456789", "https://i.pinimg.com/originals/65/2e/61/652e61131b989bb05b22db7ede9480f8.jpg"],
    ["riemann", "briemann@mathmail.com", "123456789", "https://www.sapaviva.com/wp-content/uploads/2017/06/24S.-Georg-Bernhard-Riemann-1826-1866-420x420.jpg"],
    ["germain", "sgermain@mathmail.com", "123456789", "https://www.thefamouspeople.com/profiles/images/sophie-germain-1.jpg"],
    ["fibonacci", "lfibonacci@mathmail.com", "123456789", "https://www.trendspider.com/blog/wp-content/uploads/2018/11/Fibonacci-300x300.jpg"],
    ["noether", "enoether@mathmail.com", "123456789", "https://pbs.twimg.com/profile_images/862667273940717568/QXQJw6Ye_400x400.jpg"],
    ["wiles", "awiles@mathmail.com", "123456789", "https://www.famousbirthdays.com/faces/wiles-andrew-image.jpg"],
    ["fourier", "jfourier@mathmail.com", "123456789", "https://www.sapaviva.com/wp-content/uploads/2017/06/87S.-Jean-Baptiste-Joseph-Fourier-1768-1830-506x506.jpg"],
    ["galois", "egalois@mathmail.com", "123456789", "https://i.pinimg.com/originals/2a/26/cd/2a26cdf1ad9ce1de490d1b69d7ca94af.jpg"],
    ["cantor", "gcantor@mathmail.com", "123456789", "http://qt.azureedge.net/resources/authors-images-large/georg-cantor.jpg"],
    ["ramanujan", "sramanujan@mathmail.com", "123456789", "https://www.imsc.res.in/~rao/ramanujan/images/round.jpg"],
    ["newton", "inewton@mathmail.com", "123456789", "http://www-history.mcs.st-andrews.ac.uk/BigPictures/Newton_2.jpeg"],
    ["kovalevskaya", "skovalevskaya@mathmail.com", "123456789", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Sofja_Wassiljewna_Kowalewskaja_1.jpg/220px-Sofja_Wassiljewna_Kowalewskaja_1.jpg"],
    ["cartwright", "mcartwright@mathmail.com", "123456789", "http://www-history.mcs.st-and.ac.uk/BigPictures/Cartwright_4.jpeg"],
    ["mandelbrot", "bmandelbrot@mathmail.com", "123456789", "https://pbs.twimg.com/profile_images/723270264864153600/D7l71SY-_400x400.jpg"]
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
    [users[8].id, users[8].id, "{\"urls\":[\"https://i2.wp.com/peterjamesthomas.com/wp-content/uploads/2017/03/solve-if-u-r-a-genius-w5001.png?resize=500%2C538&ssl=1\"],\"caption\":\"\"}", "photo", ["zeta function", "memes", "funny"] ],
    [users[9].id, users[9].id, "{\"title\":\"Logic is the foundation of the certainty of all the knowledge we acquire.\",\"body\":\"Leonard Euler\"}", "quote", ["euler", "truth", "logic"] ],
    [users[10].id, users[10].id, "{\"urls\":[\"https://cdn-images-1.medium.com/max/1200/1*32QmDBSjVMdChC7pM58oEg.jpeg\"],\"caption\":\"\"}", "photo", ["math", "truth", "beauty"] ],
    [users[10].id, users[10].id, "{\"urls\":[\"https://i0.wp.com/braungardt.trialectics.com/wp-content/uploads/2012/02/fibonacci-sunflower.jpg\"],\"caption\":\"\"}", "photo", ["math", "truth", "beauty"] ],
    [users[10].id, users[10].id, "{\"urls\":[\"https://blogs.unimelb.edu.au/sciencecommunication/files/2018/09/fibonacci-spiral-galaxy-1pbbryd.jpg\"],\"caption\":\"\"}", "photo", ["math", "truth", "beauty"] ],
    [users[10].id, users[10].id, "{\"urls\":[\"http://www.zlechien.ca/uploads/2/2/7/1/22716436/fibonacci-3_orig.jpg\"],\"caption\":\"\"}", "photo", ["math", "truth", "beauty"] ],
    [users[10].id, users[10].id, "{\"urls\":[\"https://www.ashley-spencer.com/ArtIsEverywhere/wp-content/uploads/2016/04/Golden-Ratio-shell-1.jpg\"],\"caption\":\"\"}", "photo", ["math", "truth", "beauty"] ],
    [users[10].id, users[10].id, "{\"urls\":[\"https://cdn-images-1.medium.com/max/2600/1*Fd_-KG39nKRljWkGHYHQQQ.jpeg\"],\"caption\":\"\"}", "photo", ["math", "truth", "beauty"] ],
    [users[10].id, users[10].id, "{\"urls\":[\"https://static.boredpanda.com/blog/wp-content/uploads/2016/02/fibonacci-composition-cats-furbonacci-url-4__700.jpg\"],\"caption\":\"\"}", "photo", ["cat", "kitty"] ],
    [users[11].id, users[11].id, "{\"urls\":[\"https://i.ytimg.com/vi/CxlHLqJ9I0A/maxresdefault.jpg\"],\"caption\":\"\"}", "photo", ["theorem", "physics"] ],
    [users[12].id, users[12].id, "{\"url\":\"https://www.math.wisc.edu/~boston/869.pdf\",\"title\":\"Proof of Fermat's Last Theorem\",\"summary\":\"A brilliant proof to a centuries-long problem in mathematics\",\"body\":\"I hear the guy who came up with this proof is really cool and smart\"}", "link", ["proofs"] ],
    [users[13].id, users[13].id, "{\"urls\":[\"http://www.continuummechanics.org/images/fourier/cartoon_fourier_cat.jpg\"],\"caption\":\"\"}", "photo", ["funny", "cats", "kitty"] ],
    [users[14].id, users[14].id, "{\"urls\":[\"https://ai2-s2-public.s3.amazonaws.com/figures/2017-08-08/2d92621cbd54787ead8766cf51a046062c902469/24-Figure1-1.png\"],\"caption\":\"\"}", "photo", ["math","theory","groups"] ], 
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

200.times do
    user_id = (0..19).to_a.sample
    post_id = (0..23).to_a.sample
    post = posts[post_id]
    like = [user_id, post_id]
    likes_list << like unless (post.author_id == user_id || likes_list.include?(like) )
end

likes_list.each do |user_id, post_id|
    Like.create(user_id: user_id, post_id: post_id)
end

messages_list = [
    [User.first.id, User.second.id, "Testing"],
    [User.first.id, User.third.id, "Testing"],
    [User.fourth.id, User.first.id, "Testing"],
    [User.second.id, User.first.id, "responding to testing"],
    [User.first.id, User.second.id, "third message testing"],
];

messages_list.each do |sender_id, receiver_id, body|
    Message.create(sender_id: sender_id, receiver_id: receiver_id, body: body)
end