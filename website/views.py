from flask import Blueprint,render_template
from flask_login import login_required,current_user
views = Blueprint("views",__name__)
@views.route('/')
@login_required
def home():
  return render_template("home.html",user=current_user)
@views.route('/food')
@login_required
def food():
  return render_template("food.html",user=current_user)
@views.route('/experiences-and-events')
@login_required
def eande():
  return render_template("eande.html",user=current_user)
@views.route('/language-learning')
@login_required
def lang():
  return render_template("lang.html",user=current_user)
@views.route('/penpals')
@login_required
def penpals():
  return render_template("penpals.html",user=current_user)
@views.route('/about-us')
def about_us():
  return render_template("about-us.html",user=current_user)