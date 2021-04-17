
from django.conf.urls import url
from django.contrib import admin
from django.urls import include, path
from django.conf.urls.static import static
from . import settings


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^', include('webapp.urls')),
    url(r'^', include('accounts.urls')),
    url(r'^', include('frontend.urls')),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
