from django.http import HttpResponse
from django.template import loader
from django.shortcuts import render

def menu(request):
    context = {
        'page_title': 'Home',
    }
    return render(request, 'menu.html', context)