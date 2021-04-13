from django.urls import path
from . import views
from rest_framework import routers
from .api import UserViewSet, FeedbackArticleViewSet, ServiceViewSet, DoctorViewSet

router = routers.DefaultRouter()
router.register('api/users', UserViewSet, 'users')
router.register('api/articles', FeedbackArticleViewSet, 'articles')
router.register('api/services',ServiceViewSet, 'services')
router.register('api/doctors',DoctorViewSet, 'doctors')


urlpatterns = router.urls

# urlpatterns = [
#     path('', views.home, name='index'),
# ]
