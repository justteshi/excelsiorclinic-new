from django.contrib import admin
from .models import FeedbackArticle, Service, Doctor, NewsArticle, WriteUSForm, ContactUsForm
# Register your models here.


class FeedbackArticleAdmin(admin.ModelAdmin):
    list_display = ('title','user',)


class ContactUsFormAdmin(admin.ModelAdmin):
    list_display = ('name','phone')


admin.site.register(FeedbackArticle, FeedbackArticleAdmin)
admin.site.register(Service)
admin.site.register(Doctor)
admin.site.register(NewsArticle)
admin.site.register(WriteUSForm)
admin.site.register(ContactUsForm,ContactUsFormAdmin)



