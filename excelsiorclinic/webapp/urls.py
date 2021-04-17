from django.urls import path
from . import views
from rest_framework import routers
from .api import FeedbackArticleViewSet, ServiceViewSet, DoctorViewSet, NewsArticleViewSet, WriteUSFormViewSet, ContactUsFormViewSet

router = routers.SimpleRouter()
router.register('api/articles', FeedbackArticleViewSet, 'articles')
router.register('api/services',ServiceViewSet, 'services')
router.register('api/doctors',DoctorViewSet, 'doctors')
router.register('api/news',NewsArticleViewSet, 'news_articles')
router.register('api/write-us',WriteUSFormViewSet, 'write-us')
router.register('api/contact-us',ContactUsFormViewSet, 'contact-us')

urlpatterns = router.urls

