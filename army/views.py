from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.template import loader
from .models import Artist, Idol 

# Create your views here.


def index(request):
    template = loader.get_template('index.html')
    return HttpResponse(template.render())

def music(request):
    template = loader.get_template('music.html')
    return HttpResponse(template.render())

def user(request):
    template = loader.get_template('user.html')
    return HttpResponse(template.render())

def rekomended(request):
    template = loader.get_template('rekomended.html')
    return HttpResponse(template.render())

def album_1(request):
    template = loader.get_template('album_1.html')
    return HttpResponse(template.render())

def album_2(request):
    template = loader.get_template('album_2.html')
    return HttpResponse(template.render())

def album_3(request):
    template = loader.get_template('album_3.html')
    return HttpResponse(template.render())

def album_4(request):
    template = loader.get_template('album_4.html')
    return HttpResponse(template.render())

def album_5(request):
    template = loader.get_template('album_5.html')
    return HttpResponse(template.render())

def album_6(request):
    template = loader.get_template('album_6.html')
    return HttpResponse(template.render())

def album_7(request):
    template = loader.get_template('album_7.html')
    return HttpResponse(template.render())

def album_8(request):
    template = loader.get_template('album_8.html')
    return HttpResponse(template.render())

def album_9(request):
    template = loader.get_template('album_9.html')
    return HttpResponse(template.render())

def album_10(request):
    template = loader.get_template('album_10.html')
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

def taehyung(request):
    template = loader.get_template('taehyung.html')
    return HttpResponse(template.render())

def jungkook(request):
    template = loader.get_template('jungkook.html')
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
