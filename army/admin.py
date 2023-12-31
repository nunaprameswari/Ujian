from django.contrib import admin
from .models import Artist, Idol, Image

# Register your models here.
@admin.register(Image)
class ImageAdmin(admin.ModelAdmin):
    list_display = ['id', 'photo', 'date']

class ArtistAdmin(admin.ModelAdmin):
    list_display = ("Idola", "Nama_Panggung", "Tanggal_Lahir", "Alamat", "Pesan_Moral",)

admin.site.register(Artist, ArtistAdmin)
admin.site.register(Idol)