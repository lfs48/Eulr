# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string           not null
#  email           :string           not null
#  avatar_url      :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord

    after_initialize :ensure_session_token

    validates :username, :email, :password_digest, :session_token, presence: true
    validates :username, :email, :session_token, uniqueness: true
    validates :password, allow_nil: true, length: {minimum: 8}

    has_many :authored_posts,
        class_name: :Post,
        primary_key: :id,
        foreign_key: :author_id

    has_many :posts,
        class_name: :Post,
        primary_key: :id,
        foreign_key: :poster_id

    has_many :followings,
        class_name: :Follow,
        primary_key: :id,
        foreign_key: :follower_id

    has_many :followers,
        class_name: :Follow,
        primary_key: :id,
        foreign_key: :followee_id

    has_many :likes

    has_many :liked_posts,
        through: :likes,
        source: :post

    has_one_attached :avatar

    attr_reader :password

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        if user && user.is_password?(password)
            return user
        else
            return nil
        end
    end

    def self.generate_session_token
        token = SecureRandom.urlsafe_base64(16)
        user = User.find_by(session_token: token)
        while user
            token = SecureRandom.urlsafe_base64(16)
            user = User.find_by(session_token: token)
        end
        return token
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end

    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save!
        return self.session_token
    end

    def password=(password)
        @password = password
        digest = BCrypt::Password.create(password)
        self.password_digest = digest
    end

    def is_password?(password)
        digest = BCrypt::Password.new(self.password_digest)
        return digest.is_password?(password)
    end

    def ensure_avatar
        unless self.avatar.attached?
            file = File.open('app/assets/images/default-avatar.png')
            self.avatar.attach(io: file, filename: 'avatar.png')
        end
    end

end
