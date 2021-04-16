from rest_framework import viewsets, permissions
from .models import Registration, FeedbackArticle, Service, Doctor, NewsArticle, WriteUSForm, ContactUsForm
from .serializers import RegistrationSerializer, FeedbackArticleSerializer, ServiceSerializer, DoctorSerializer ,NewsArticleSerializer, WriteUSFormSerializer, ContactUsFormSerializer


class RegistrationViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    
    serializer_class = RegistrationSerializer

    def get_queryset(self):
        return self.request.user.registration.all()
    
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
    


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


class WriteUSFormViewSet(viewsets.ModelViewSet):
    queryset = WriteUSForm.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = WriteUSFormSerializer


class ContactUsFormViewSet(viewsets.ModelViewSet):
    queryset = ContactUsForm.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = ContactUsFormSerializer

    