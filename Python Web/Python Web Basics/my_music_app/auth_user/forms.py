from .models import Profile
from django import forms

class ProfileForm(forms.ModelForm):
    class Meta:
        model = Profile
        fields = '__all__'
        widgets = {
            'username': forms.TextInput(
                attrs = {'placeholder': 'Username'}
            ),
            'email': forms.EmailInput(
                attrs = {'placeholder': 'Email'}
            ),
            'age': forms.NumberInput(
                attrs = {'placeholder': 'Age'}
            )
        }
