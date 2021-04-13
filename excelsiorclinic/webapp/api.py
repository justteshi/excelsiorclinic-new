from rest_framework import viewsets, permissions
from .models import User, FeedbackArticle, Service, Doctor, NewsArticle
from .serializers import UserSerializer, FeedbackArticleSerializer, ServiceSerializer, DoctorSerializer ,NewsArticleSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = UserSerializer


class FeedbackArticleViewSet(viewsets.ModelViewSet):
    queryset = FeedbackArticle.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = FeedbackArticleSerializer


class ServiceViewSet(viewsets.ModelViewSet):
    queryset = Service.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = ServiceSerializer


class DoctorViewSet(viewsets.ModelViewSet):
    queryset = Doctor.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = DoctorSerializer


class NewsArticleViewSet(viewsets.ModelViewSet):
    queryset = NewsArticle.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = NewsArticleSerializer
    

    