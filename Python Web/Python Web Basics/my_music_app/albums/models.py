from django.db import models
from django.core.validators import MinValueValidator

# Create your models here.
class Album:

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
        blank=False,
        null=False,
        choices = GENRES
    )

    description = models.TextField(blank=True, null=True)
    image_url = models.URLField(blank=False, null=False)
    price =  models.FloatField(blank=False, null=False, validators=[MinValueValidator(0)])