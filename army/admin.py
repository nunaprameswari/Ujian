from django.contrib import admin
from .models import Artist, Idol, Instagram

# Register your models here.

class ArtistAdmin(admin.ModelAdmin):
    list_display = ("Idola", "Nama_Panggung", "Tanggal_Lahir", "Alamat", "Pesan_Moral",)

admin.site.register(Artist, ArtistAdmin)
admin.site.register(Idol)
admin.site.register(Instagram)