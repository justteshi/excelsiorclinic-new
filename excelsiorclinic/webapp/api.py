from .models import User, FeedbackArticles
from rest_framework import viewsets, permissions
from .serializers import UserSerializer, FeedbackArticlesSerializer

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
    

    