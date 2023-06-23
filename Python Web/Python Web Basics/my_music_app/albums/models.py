from django.db import models
from django.core.validators import MinValueValidator
from auth_user.models import Profile

# Create your models here.
class Album(models.Model):

    GENRES =(
        ('pop', 'Pop Music'),
        ('jazz', 'Jazz Music'),
        ('r&b', 'R&B Music'),
        ('rock', 'Rock Music'),
        ('country', 'Country Music'),
        ('dance', 'Dance Music'),
        ('hiphop', 'Hip Hop Music'),
        ('other', 'Other')
    )


    album_name = models.CharField(unique=True, max_length=30)
    artist = models.CharField(max_length=30, blank=False, null=False)
    genre = models.CharField(
        max_length=15,
        blank=False,
        null=False,
        choices = GENRES
    )

    description = models.TextField(blank=True, null=True)
    image_url = models.URLField(blank=False, null=False)
    price =  models.FloatField(blank=False, null=False, validators=[MinValueValidator(0)])
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE)