from django.http import HttpResponse
from django.template import loader

def music(request):
    template = loader.get_template('music.html')
    return HttpResponse(template.render())