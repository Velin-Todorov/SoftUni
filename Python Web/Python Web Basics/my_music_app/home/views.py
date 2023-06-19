from django.shortcuts import render


# Create your views here.
def home_page(request):
    user = request.user

    if not user.is_authenticated:
        return render(
            request,
            'home/home-no-profile.html',
            {'user': user}
        )
    