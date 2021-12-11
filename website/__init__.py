from flask import Flask
import secrets

def create_app():

    app = Flask(__name__)
    #app.config['SESSION_TYPE'] = 'filesystem'
    secret = secrets.token_urlsafe(32)

    app.secret_key = secret
    #app.config['SQLALCHEMY_DATABASE_URI'] = f'sqlite:///{DB_NAME}'

    from .views import views
    from .auth import auth
    app.register_blueprint(views, url_prefix ='/')
    app.register_blueprint(auth, url_prefix ='/')

    from website import models
    #create_database(app)

    return app

