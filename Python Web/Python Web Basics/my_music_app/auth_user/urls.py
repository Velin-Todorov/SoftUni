from django.urls import path
from .views import delete_profile, details_profile

urlpatterns = [
    path('details/', details_profile, name='profile_details'),
    path('delete/', delete_profile, name='delete_profile')
]