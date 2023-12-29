from django.urls import path
from . import views

urlpatterns = [
    path('delete/(?P<int:delete_id>[0-9]+)', views.delete, name='delete'),
    path('create',views.create, name='create'),
    path('list',views.list, name='list'),
    path('music', views.music, name='music'),
    path('album_1', views.album_1, name='album_1'),
    path('album_2', views.album_2, name='album_2'),
    path('album_3', views.album_3, name='album_3'),
    path('album_4', views.album_4, name='album_4'),
    path('seokjin', views.seokjin, name='seokjin'),
    path('yoongi', views.yoongi, name='yoongi'),
    path('hope', views.hope, name='hope'),
    path('namu', views.namu, name='namu'),
    path('jimin', views.jimin, name='jimin'),
    path('taehyung', views.taehyung, name='taehyung'),
    path('jungkook', views.jungkook, name='jungkook'),
    path('idol', views.idol, name='idol'),
    path('artist', views.artist, name='artist'),
    path('data', views.data, name='data'),
    path('artist/<int:id_url>', views.data, name='data'),
]