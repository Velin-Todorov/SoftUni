from django.urls import path
from .views import add_album, details_album, edit_album, delete_album

urlpatterns = [
    path('add/', add_album, name='add_album'),
    path('details/<int:id>/', details_album, name='details_album'),
    path('delete/<int:id>/', delete_album, name='delete_album'),
    path('edit/<int:id>/', edit_album, name='edit_album')
]