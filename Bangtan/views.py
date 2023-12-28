from django.http import HttpResponse
from django.template import loader
from django.shortcuts import render
from django.contrib.auth.models import User, auth

def login(request):
    template = loader.get_template('login.html')
    return HttpResponse(template.render())

def signup(request):
    if request.method=='POST':
        first_name = request.POST['first_name']
        last_name = request.POST['last_name']
        email = request.POST['email']
        username = request.POST['username']
        password1 = request.POST['password1']
        password2 = request.POST['password2']

        data = User.objects.create_user(first_name=first_name, last_name=last_name, email=email, username=username, password1=password1)
        data.save()
    
    return render(request, 'signup.html')