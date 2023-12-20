from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
# Create your views here.

def music(request):
    template = loader.get_template('music.html')
    return HttpResponse(template.render())

def seokjin(request):
    template = loader.get_template('seokjin.html')
    return HttpResponse(template.render())