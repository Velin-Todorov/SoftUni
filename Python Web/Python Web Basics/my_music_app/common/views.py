from django.shortcuts import render
from auth_user.models import Profile

# Create your views here.
def home_page(request):
    profile = Profile.objects.first()
    context = {'profile': profile}

    return render(
        request,
        'home_custom.html',
        context
    )

