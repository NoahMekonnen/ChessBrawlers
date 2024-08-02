import os

from flask import Flask, render_template, request, flash, redirect, session, g

from forms import UserForm
from models import db, connect_db, User, Game, Chatroom, Message, Move

app = Flask(__name__)

# Get DB_URI from environ variable (useful for production/testing) or,
# if not set there, use development local db.
app.app_context().push()
app.config['SQLALCHEMY_DATABASE_URI'] = (
    os.environ.get('DATABASE_URL', 'postgresql://zatawcfb:xt0oV2wtZ0oc4K9hUVYNHP_igJg4BEXk@mahmud.db.elephantsql.com/zatawcfb'))

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = False
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', "it's a secret")

connect_db(app)
db.drop_all()
db.create_all()

@app.before_request
def add_user():
    if 'username' in session:
        g.user = User.query.get(session['username'])
    else:
        g.user = None


@app.route('/signup', methods=['GET', 'POST'])
def signup():
    form = UserForm()
    if form.validate_on_submit():
        user = User.register(form.data['username'], form.data['password'])
        if not user:
            flash("Username already taken", "danger")
        else:
            session['username'] = form.data['username']
            return redirect('/')

    return render_template('signup.html',form=form)

@app.route('/login',  methods=['GET', 'POST'])
def login():
    form = UserForm()
    if form.validate_on_submit():
        user = User.authenticate(username, password)
        if not user:
            flash("Invalid Username/Password", "danger")
        else:
            session['username'] = user.username
            return redirect('/')
            
    return render_template('login.html',form=form)

@app.route('/', methods=['GET', 'POST'])
def show_homepage():
    if request.method == 'GET':
        return render_template('home.html',user=g.user)
    return render_template('game.html')
