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

def yoongi(request):
    template = loader.get_template('yoongi.html')
    return HttpResponse(template.render())

def hope(request):
    template = loader.get_template('hope.html')
    return HttpResponse(template.render())

def namu(request):
    template = loader.get_template('namu.html')
    return HttpResponse(template.render())

def jimin(request):
    template = loader.get_template('jimin.html')
    return HttpResponse(template.render())

def artist(request):
    bangtan = Idol.objects.all().values() 
    template = loader.get_template('artist.html')
    context = {
        'members': bangtan
    } #tipe data set memiliki key value
    return HttpResponse(template.render(context))

def idol(request):
    bangtan = Idol.objects.all() #manggil data dari database
    template = loader.get_template('idol.html')
    context = {
        'nama': 'Nama Member BTS',
        'member': bangtan, #mengirim data ke view/template
    }
    return HttpResponse(template.render(context, request))

def data(request, id_url):
    bangtan = Artist.objects.filter(id=id_url).first()
    template = loader.get_template('data.html')
    context = {
        'members': bangtan
    }
    #raise Exception(data)
    return HttpResponse(template.render(context))
