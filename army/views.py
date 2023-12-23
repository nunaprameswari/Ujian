from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from .models import Artist, Idol
# Create your views here.

def music(request):
    template = loader.get_template('music.html')
    return HttpResponse(template.render())

def seokjin(request):
    template = loader.get_template('seokjin.html')
    return HttpResponse(template.render())

def artist(request):
    template = loader.get_template('seokjin.html')
    return HttpResponse(template.render())

def idol(request):
    Artis = Idol.objects.all() #manggil data dari database
    template = loader.get_template('idol.html')
    context = {
        'nama': 'Nama Member BTS',
        'member': Artis, #mengirim data ke view/template
    }
    return HttpResponse(template.render(context, request))
