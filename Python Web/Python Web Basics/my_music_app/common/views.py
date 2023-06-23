from django.shortcuts import render, redirect
from auth_user.models import Profile
from auth_user.forms import ProfileForm
from albums.models import Album

# Create your views here.
def home_page(request):
    profile = Profile.objects.first()
    albums = Album.objects.all()
    context = {}

    print(albums)
    if not profile:
        form = ProfileForm(request.POST or None)
        context['form'] = form

        if form.is_valid():
            form.save()
            print('Form is valid')
            return redirect(request.path_info)
            
        
        return render(
                request,
                'home-no-profile.html',
                context
            )


    context = {'albums': albums}
    return render(request, 'home-with-profile.html', context)

