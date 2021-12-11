from flask import Blueprint, render_template
from website import templates


views = Blueprint('views', __name__)


@views.route('/')


def home():
    return render_template("base.html")


@views.route('/join-us')


def support():
    return render_template("support.html")

@views.route('/home')
def home2():
    return render_template("base.html")
@views.route('/about')
def about():
    return render_template("about.html")
@views.route('/blood_donation')
def donate_blood():
    return render_template("bloodgroup.html")
@views.route('/vaccine')
def vaccine():
    return render_template("Vaccine.html")
@views.route('/medicine')
def medicine():
    return render_template("Medicines.html")
@views.route('/bed')
def bed():
    return render_template("Bed.html")
@views.route('/oxygen')
def oxygen():
    return render_template("Oxygencylinder.html")