from django.http import HttpResponse
from django.template import loader
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login

def menu(request):
    context = {
        'page_title': 'Home',
    }
    
    return render(request, 'menu.html', context)

def loginView(request):
    context = {
        'page_title': 'LOGIN',
    }

    if request.method == "POST":
        
        username = request.POST['username']
        password = request.POST['password']
        
        user = authenticate(request, username=username, password=password)
        
        if user is not None:
            login(request, user)

        return redirect('menu')

    #username_nindia = 'admin'
    #password_nindia = 'admin123'

    #user = authenticate(request, username=username_nindia, password=password_nindia)
    #print(user)

    #ogin(request, user)

    return render(request, 'login.html', context)