"""SQLAlchemy models for Warbler."""

from datetime import datetime

from flask_bcrypt import Bcrypt
from flask_sqlalchemy import SQLAlchemy

bcrypt = Bcrypt()
db = SQLAlchemy()


class User(db.Model):
    """User"""

    __tablename__ = 'users'

    username = db.Column(
        db.Text,
        primary_key=True
    )

    password = db.Column(
        db.Text,
        nullable=False
    )

    rating = db.Column(
        db.Integer,
        nullable=False,
        default=1500
    )

    @classmethod
    def authenticate(cls, username, password):
        user = cls.query.filter_by(username=username).first()
        if not user:
            return False
        else:
            is_same = bcrypt.check_password_hash(user.password, password)
            if is_same:
                return user
            return False

    @classmethod
    def register(cls, username, password):
        existing_user = cls.query.filter_by(username=username).first()
        if not existing_user:
            hashed_password = bcrypt.generate_password_hash(password)
            user = User(username=username,password=hashed_password)

            db.session.add(user)
            db.session.commit()
            return user
        return False

class Game(db.Model):
    """Game"""

    __tablename__='games'

    id = db.Column(
        db.Integer,
        primary_key=True,
    ) 

    white_username = db.Column(
        db.Text,
        db.ForeignKey('users.username', ondelete='cascade')
    )

    black_username = db.Column(
        db.Text,
        db.ForeignKey('users.username', ondelete='cascade')
    )

    time_started = db.Column(
        db.DateTime,
        nullable=False
    )

    user = db.relationship('User', backref='games', foreign_keys=white_username)

    moves = db.relationship('Move', cascade="all, delete-orphan")

class Move(db.Model):
    """Move"""

    __tablename__='moves'

    id = db.Column(
        db.Integer,
        primary_key=True,
    ) 

    game_id = db.Column(
        db.Integer,
        db.ForeignKey('games.id', ondelete='cascade')
    )

    move_name = db.Column(
        db.Text,
        nullable=False
    )

class Chatroom(db.Model):
    """Container Holding conversation between users in a chat"""

    __tablename__='chatrooms'

    id = db.Column(
        db.Integer,
        primary_key=True
    )

    from_username = db.Column(
        db.Text,
        db.ForeignKey('users.username', ondelete='cascade')
    )

    to_username = db.Column(
        db.Text,
        db.ForeignKey('users.username', ondelete='cascade')
    )


class Message(db.Model):
    """Message"""

    __tablename__='messages'
    
    id = db.Column(
        db.Integer,
        primary_key=True
    )

    chatroom_id = db.Column(
        db.Integer,
        db.ForeignKey('chatrooms.id', ondelete='cascade')
    )

    text = db.Column(
        db.Text,
        nullable=False
    )

    time_sent = db.Column(
        db.Time,
        nullable=False
    )

    user = (db.relationship('User', secondary='chatrooms', backref='messages',
    primaryjoin=(chatroom_id == Chatroom.id), secondaryjoin=(Chatroom.from_username == User.username)))

def connect_db(app):
    """Connect this database to provided Flask app.

    You should call this in your Flask app.
    """

    db.app = app
    db.init_app(app)



