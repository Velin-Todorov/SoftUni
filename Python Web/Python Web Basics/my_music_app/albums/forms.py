from .models import Album
from django import forms

class AlbumForm(forms.ModelForm):
    class Meta:
        model = Album
        fields = '__all__'
        widgets = {
            'album_name': forms.TextInput(
                attrs={'placeholder': 'Album Name'}
            ),

            'artist': forms.TextInput(
                attrs={'placeholder': 'Artist'}
            ),
            'genre': forms.Select(
                attrs={'placeholder': 'Album N'}
            ),
            'description': forms.TextInput(
                attrs={'placeholder': 'Description'}
            ),
            'image_url': forms.URLInput(
                attrs={'placeholder': 'Image URL'}
            ),
            'price': forms.NumberInput(
                attrs={'placeholder': 'Price'}
            )
        }
        exclude = ['profile']

class DeleteAlbumForm(AlbumForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        for (_, field) in self.fields.items():
            field.widget.attrs['disabled'] = 'disabled'
            field.widget.attrs['readonly'] = 'readonly'

