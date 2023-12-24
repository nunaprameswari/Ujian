from django.urls import path
from . import views

urlpatterns = [
    path('music', views.music, name='music'),
    path('seokjin', views.seokjin, name='seokjin'),
    path('yoongi', views.yoongi, name='yoongi'),
    path('idol', views.idol, name='idol'),
    path('artist', views.artist, name='artist'),
    path('data', views.data, name='data'),
    path('artist/<int:id_url>', views.data, name='data'),
]