from rest_framework import serializers
from .models import User, FeedbackArticles, Services

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class FeedbackArticlesSerializer(serializers.ModelSerializer):
    class Meta:
        model = FeedbackArticles
        fields = '__all__'


class ServicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Services
        fields = '__all__'