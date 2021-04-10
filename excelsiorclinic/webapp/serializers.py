from rest_framework import serializers
from .models import User, FeedbackArticles

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class FeedbackArticlesSerializer(serializers.ModelSerializer):
    class Meta:
        model = FeedbackArticles
        fields = '__all__'