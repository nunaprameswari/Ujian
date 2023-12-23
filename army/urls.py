from django.urls import path
from . import views

urlpatterns = [
    path('music', views.music, name='music'),
    path('seokjin', views.seokjin, name='seokjin'),
    path('Idol', views.Idol, name='Idol'),
    path('Artist', views.Artist, name='artist'),
]