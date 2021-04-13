from rest_framework import viewsets, permissions
from .models import User, FeedbackArticles, Services
from .serializers import UserSerializer, FeedbackArticlesSerializer, ServicesSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = UserSerializer

class FeedbackArticlesViewSet(viewsets.ModelViewSet):
    queryset = FeedbackArticles.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = FeedbackArticlesSerializer

class ServicesViewSet(viewsets.ModelViewSet):
    queryset = Services.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = ServicesSerializer
    

    