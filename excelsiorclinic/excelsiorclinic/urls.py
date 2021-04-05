
from django.conf.urls import url
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    url(r'^', include('frontend.urls')),
    url(r'^', include('webapp.urls')),
    url(r'^admin/', admin.site.urls),
]
