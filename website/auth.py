from flask import Blueprint, render_template, request , flash

auth = Blueprint('auth', __name__)

@auth.route('/login' , methods = ['GET', 'POST'])
def login():
    data = request.form
    print(data)
    return render_template("login.html")

@auth.route('/logout')
def logot():
    return render_template("base.html")
@auth.route('/signup' ,  methods = ['GET', 'POST'])
def sign_up():
    if request.method == 'POST':
        email = request.form.get('email')
        firstName = request.form.get('firstName')
        password1 = request.form.get('password1')
        password2 = request.form.get('password2')
        if len(email) < 4 :
            flash('email must be greater than 4 characters' , category= 'error')
        elif len(firstName) < 2:
            flash('firstname must be greater than 2 characters', category='error')
        elif password1 != password2:
            flash('password don\'t match', category='error')
        elif len(password1) < 7:
            flash('password length must be greater than 7 characters', category='error')
        else:
            flash('Account created' , category = 'success')

    return render_template("signup.html")


