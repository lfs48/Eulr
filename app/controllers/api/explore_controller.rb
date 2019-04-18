class Api::ExploreController < ApplicationController


    def index
        sql  = "
            SELECT
                posts.*, COUNT(likes.id)
            FROM
                posts
            JOIN
                likes
            ON 
                likes.post_id = posts.id
            GROUP BY
                posts.id
            ORDER BY
                COUNT(likes.id) desc
            LIMIT
                10
            ;
        "
        @posts = Post.includes(:author, :tags, :likers).with_attached_media.find_by_sql(sql);
        postIds = @posts.map { |post| post.id }
        tagIds = PostTag.where( :post_id => postIds).map { |postTag| postTag.tag_id }
        @tags = Tag.where( :id => tagIds )
        render "api/posts/index"
    end

end