from django.core.exceptions import ValidationError
import re

def validate_username(value):
    regex = re.compile('\w+$')
    MIN_LEN = 2
    MAX_LEN = 15

    if MAX_LEN < len(value) < MIN_LEN:
        raise ValidationError('The username must be a minimum of 2 symbols')
    
    elif regex.match(value) is None:
        raise ValidationError('Ensure this value contains only letters, numbers, and underscore.')
