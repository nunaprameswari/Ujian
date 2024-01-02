from django import forms
from .models import ArmyMember

class ArmyMemberForm(forms.ModelForm):
    class Meta:
        model = ArmyMember
        fields = [
            'first_name',
            'last_name',
            'instagram',
            'twitter',
            'negara',
        ]