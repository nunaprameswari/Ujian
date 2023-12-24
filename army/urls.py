from django.urls import path
from . import views

urlpatterns = [
    path('music', views.music, name='music'),
    path('seokjin', views.seokjin, name='seokjin'),
    path('yoongi', views.yoongi, name='yoongi'),
    path('hope', views.hope, name='hope'),
    path('namu', views.namu, name='namu'),
    path('jimin', views.jimin, name='jimin'),
    path('taehyung', views.taehyung, name='taehyung'),
    path('idol', views.idol, name='idol'),
    path('artist', views.artist, name='artist'),
    path('data', views.data, name='data'),
    path('artist/<int:id_url>', views.data, name='data'),
]