from django.urls import path
from . import views
from rest_framework import routers
from .api import UserViewSet

router = routers.DefaultRouter()
router.register('api/users', UserViewSet, 'users')

urlpatterns = router.urls

# urlpatterns = [
#     path('', views.home, name='index'),
# ]
