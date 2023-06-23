from django.shortcuts import render, redirect
from .models import Profile
from albums.models import Album
# Create your views here.

def delete_profile(request):
    profile = Profile.objects.first()
    profile.delete()
    return redirect('home_page')

def details_profile(request):
    profile = Profile.objects.first()
    albums = Album.objects.filter(profile_id=profile.pk)
    
    context = {
        'profile': profile,
        'album_count': len(albums)
    }
    return render(request, 'profile-details.html', context)