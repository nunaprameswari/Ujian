from django.contrib import admin
from .models import Artist

# Register your models here.

class ArtistAdmin(admin.ModelAdmin):
    list_display = ("judul", "isi_Tokoku",)

admin.site.register(Tokoku, TokokuAdmin)