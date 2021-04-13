from django.urls import path
from . import views
from rest_framework import routers
from .api import UserViewSet, FeedbackArticlesViewSet, ServicesViewSet

router = routers.DefaultRouter()
router.register('api/users', UserViewSet, 'users')
router.register('api/articles', FeedbackArticlesViewSet, 'articles')
router.register('api/services',ServicesViewSet, 'services')

urlpatterns = router.urls

# urlpatterns = [
#     path('', views.home, name='index'),
# ]
