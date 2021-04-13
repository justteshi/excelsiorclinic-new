from django.contrib import admin
from .models import FeedbackArticle, Service, Doctor, NewsArticle
# Register your models here.


admin.site.register(FeedbackArticle)
admin.site.register(Service)
admin.site.register(Doctor)
admin.site.register(NewsArticle)


