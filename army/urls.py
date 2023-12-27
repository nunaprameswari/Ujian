from django.urls import path
from . import views

urlpatterns = [
    path('delete/(?P<int:delete_id>[0-9]+)', views.delete, name='delete'),
    path('create',views.create, name='create'),
    path('list',views.list, name='list'),
    path('music', views.music, name='music'),
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