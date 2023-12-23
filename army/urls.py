from django.urls import path
from . import views

urlpatterns = [
    path('music', views.music, name='music'),
    path('seokjin', views.seokjin, name='seokjin'),
    path('idol', views.idol, name='idol'),
    path('artist', views.artist, name='artist'),
]