from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

class User(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=254)
    message = models.CharField(max_length=50)
    creted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class FeedbackArticle(models.Model):
    title = models.CharField(max_length=50)
    message = models.CharField(max_length=256)
    user = models.CharField(max_length=20)
    stars = models.IntegerField(default=1, validators=[MaxValueValidator(5), MinValueValidator(1)])
    creted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class Service(models.Model):
    title = models.CharField(max_length=50)
    text = models.CharField(max_length=200)
    cover_image = models.ImageField(upload_to='service_images', blank=False, null=True)
    def __str__(self):
        return self.title


class Doctor(models.Model):
    name = models.CharField(max_length=50)
    title = models.CharField(max_length=50)
    about = models.CharField(max_length=250)
    doctor_image = models.ImageField(upload_to='doctor_images', blank=False, null=True)

    def __str__(self):
        return self.name


class NewsArticle(models.Model):
    title = models.CharField(max_length=100)
    text = models.CharField(max_length=500)
    cover_image = models.ImageField(upload_to='news_article_cover', blank=False, null=True)
    created_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.title


class WriteUSForm(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=254)
    phone = models.CharField(max_length=50)
    departament = models.CharField(max_length=50)
    adress = models.CharField(max_length=254)
    message = models.CharField(max_length=500)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.email


class ContactUsForm(models.Model):
    name = models.CharField(max_length=50)
    phone = models.CharField(max_length=50)
    messageOne = models.CharField(max_length=500)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.name
    