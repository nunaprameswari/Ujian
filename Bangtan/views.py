from django.http import HttpResponse
from django.template import loader
from django.shortcuts import render

def music(request):
    template = loader.get_template('music.html')
    return HttpResponse(template.render())