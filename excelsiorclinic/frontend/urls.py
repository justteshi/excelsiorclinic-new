from django.urls import path, re_path
from .views import index

urlpatterns = [
    re_path('.*/',index),
    path('', index),
    path('about', index),
    path('services', index),
    path('gallery', index),
    path('news', index),
    path('contacts', index),
    path('registration', index),
    path('feedback', index),
]
