from django.shortcuts import render
from django.shortcuts import redirect
from .forms import AlbumForm, DeleteAlbumForm
from auth_user.models import Profile
from .models import Album

# Create your views here.
def add_album(request):
    profile = Profile.objects.first()

    form = AlbumForm(request.POST or None)

    if form.is_valid():
        album = form.save(commit=False)
        album.profile = profile
        album.save()
        return redirect('home_page')

    context = {
        'form': form,
        'profile': profile  
    }


    return render(request, 'add-album.html', context)


def edit_album(request, id):
    album = Album.objects.get(pk=id)
    
    if request.method == 'GET':
   
        form = AlbumForm(instance=album)
        context = {'form': form}
        return render(request, 'edit-album.html', context)

    elif request.method == 'POST':
        form = AlbumForm(request.POST, instance=album)
        context = {'form': form}
        
        if form.is_valid():
            print('form is valid')
            form.save()
            return redirect('home_page')
        
        else:
            print('form is invalid')
            return render(request, 'edit-album.html', context)

def delete_album(request, id):

    album = Album.objects.get(pk=id)
    
    if request.method == 'GET':
        form = DeleteAlbumForm(instance=album)
        context = {'form': form}
        return render(request, 'delete-album.html', context)
    
    if request.method == 'POST':
        album.delete()
        return redirect('home_page')
        
    

def details_album(request, id):
    album = Album.objects.get(pk=id)
    
    context = {'album': album}
    return render(request, 'album-details.html', context)