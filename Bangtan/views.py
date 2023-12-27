from django.http import HttpResponse
from django.template import loader
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout

def menu(request):
    context = {
        'page_title': 'Home',
    }

    print(request.user.is_authenticated())

    if request.user.is_authenticated():

    else:
    
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
        else:
            return redirect('login')

    return render(request, 'login.html', context)

def logoutView(request):
    context = {
        'page_title':'logout'
    }

    if request.method == "POST":
        if request.POST["logout"] == "Submit":
            logout(request)

        return redirect(menu)

    return render(request, 'logout.html', context)