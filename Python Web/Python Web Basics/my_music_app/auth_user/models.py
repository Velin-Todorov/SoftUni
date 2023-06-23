from django.db import models
from django.core.validators import MinLengthValidator, MinValueValidator, RegexValidator


# Create your models here.
class Profile(models.Model):
    username = models.CharField(
        max_length=15,
        validators = [
            MinLengthValidator(
                2,
                'The username must be a minimum of 2 symbols'
            ),
            RegexValidator(
                '\w+$',
                'Ensure this value contains only letters, numbers, and underscore.'
            )
        ]
    )
    email = models.EmailField(blank=False, null=False)
    age = models.PositiveIntegerField(blank=True, null=True)
