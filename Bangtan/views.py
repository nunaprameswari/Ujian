from django.http import HttpResponse
from django.template import loader
from django.shortcuts import render
from django.contrib.auth import authenticate, login
from .forms import LoginForm

def login(request):
    form = LoginForm()
    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return redirect('music')
    return render(request, 'login.html')