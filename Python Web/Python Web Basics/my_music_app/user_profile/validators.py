import re
from django.core.exceptions import ValidationError

def validate_username(value):
    regex = re.compile('[A-Za-z0-9_]+')
    search = regex.search(value)

    if search is None:
        raise ValidationError("Ensure this value contains only letters, numbers, and underscore.")
    