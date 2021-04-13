from django.db import models

class User(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=254)
    message = models.CharField(max_length=50)
    creted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class FeedbackArticles(models.Model):
    title = models.CharField(max_length=50)
    message = models.CharField(max_length=256)
    user = models.CharField(max_length=20)
    stars = models.IntegerField(default=1)
    creted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class Services(models.Model):
    title = models.CharField(max_length=50)
    text = models.CharField(max_length=200)

    def __str__(self):
        return self.title
    