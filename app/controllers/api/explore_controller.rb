class Api::ExploreController < ApplicationController


    def index
        sql  = "
            SELECT
                *
            FROM
                posts
            JOIN
                users
            ON
                users.id = posts.author_id
            JOIN
                likes
            ON 
                likes.post_id = posts.id
            GROUP BY
                posts.id, users.id, likes.id
            ORDER BY
                COUNT(likes.id)
            LIMIT
                5
        "
        @posts = Post.with_attached_media.find_by_sql(sql);
        postIds = @posts.map { |post| post.id }
        tagIds = PostTag.where( :post_id => postIds).map { |postTag| postTag.tag_id }
        @tags = Tag.where( :id => tagIds )
        render "api/posts/index"
    end

end