from django.db import models

# Create your models here.
class Instagram(models.Model):
    nama_depan      = models.CharField(max_length=100)
    nama_belakang   = models.CharField(max_length=100)
    username        = models.CharField(max_length=100)

    def __str__(self):
        return "{}.{}".format(self.id,self.username)

class Idol(models.Model):
    Nama_Idol = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.Nama_Idol}"

class Artist(models.Model):
    Idola = models.ForeignKey(Idol, on_delete=models.CASCADE)
    Nama_Panggung = models.CharField(max_length=100)
    Tanggal_Lahir = models.DateField(null=True)
    Alamat = models.CharField(max_length=100)
    Pesan_Moral = models.TextField()
    
    def __str__(self):
        return f"{self.Idola} {self.Nama_Panggung} {self.Tanggal_Lahir} {self.Alamat} {self.Pesan_Moral}"