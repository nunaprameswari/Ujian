# Generated by Django 4.2.8 on 2023-12-31 12:02

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Idol',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Nama_Idol', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Instagram',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nama_depan', models.CharField(max_length=100)),
                ('nama_belakang', models.CharField(max_length=100)),
                ('username', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Artist',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Nama_Panggung', models.CharField(max_length=100)),
                ('Tanggal_Lahir', models.DateField(null=True)),
                ('Alamat', models.CharField(max_length=100)),
                ('Pesan_Moral', models.TextField()),
                ('Idola', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='army.idol')),
            ],
        ),
    ]
