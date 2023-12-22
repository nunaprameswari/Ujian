from django.db import models

# Create your models here.

class Artist(models.Model):
    Boutique = models.ForeignKey(Boutiq, on_delete=models.CASCADE)
    judul = models.CharField(max_length=100)
    isi_Tokoku = models.TextField()
    
    def __str__(self):
        return f"{self.judul} {self.isi_Tokoku}"