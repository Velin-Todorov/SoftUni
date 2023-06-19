from django.db import models
from django.core.validators import MinLengthValidator, MaxLengthValidator, Mi
from validators import validate_username
# Create your models here.

class Profile:
    username = models.CharField(
        validators= [
            MinLengthValidator(
                limit_value=2,
                message="Username cannot be shorter than 2 characters"
            ),
            MaxLengthValidator(
                limit_value=15,
                message="Username cannot be longer than 15 characters"
            ),
            validate_username
        ]
    )
    email = models.EmailField(
        blank=False, 
        null=False
    )
    
    age = models.PositiveIntegerField(
        blank=True, 
        null=True,
    )