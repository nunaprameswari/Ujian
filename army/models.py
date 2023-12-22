from django.db import models

# Create your models here.

class Artist(models.Model):
    judul = models.CharField(max_length=100)
    isi_Tokoku = models.TextField()
    
    def __str__(self):
        return f"{self.judul} {self.isi_Tokoku}"