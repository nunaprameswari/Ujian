from django import forms
from django.contrib.auth.models import Instagram, User

class LoginForm(forms.Form):
    username = forms.CharField(
        widget = form.TextInput(attrs('class':'form-control', 'type':'text')),
    )
    password = form.CharField(
        widget = form.PasswordInput(attrs('class':'form-control'))
    )

class InstagramForm(forms.ModelForm):
    class Meta:
        model = Instagram
        fields = [
            'nama_depan',
            'nama_belakang',
            'username',
        ]