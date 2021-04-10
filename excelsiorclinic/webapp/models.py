from django.db import models

class User(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=254)
    message = models.CharField(max_length=50)
    creted_at = models.DateTimeField(auto_now_add=True)


class FeedbackArticles(models.Model):
    title = models.CharField(max_length=50)
    message = models.CharField(max_length=256)
    user = models.CharField(max_length=20)
    creted_at = models.DateTimeField(auto_now_add=True)
    