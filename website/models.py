from website import db
from flask_login import UserMixin
from sqlalchemy.sql import func


class Blood_and_plasma(db.Model):

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(150))
    phone_no = db.Column(db.String(150), unique=True)
    address = db.Column(db.String(150))
    blood_group = db.Column(db.String(150))
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))


class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key = True)
    email = db.Column(db.String(150), unique = True)
    password = db.Column(db.String(150), unique=True)
    first_name = db.Column(db.String(150))
    blood_and_plasma = db.relationship('Blood_and_plasma')