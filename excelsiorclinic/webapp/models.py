from django.db import models

class User(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=254)
    message = models.CharField(max_length=50)
    creted_at = models.DateTimeField(auto_now_add=True)