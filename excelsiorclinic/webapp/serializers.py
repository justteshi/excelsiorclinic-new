from rest_framework import serializers
from .models import Registration, FeedbackArticle, Service, Doctor, NewsArticle, WriteUSForm, ContactUsForm


class RegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Registration
        fields = '__all__'


class FeedbackArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = FeedbackArticle
        fields = '__all__'


class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = '__all__'


class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = '__all__'


class NewsArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewsArticle
        fields = '__all__'


class WriteUSFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = WriteUSForm
        fields = '__all__'


class ContactUsFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactUsForm
        fields = '__all__'