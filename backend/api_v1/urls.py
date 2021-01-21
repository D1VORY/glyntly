from django.urls import path, include
from rest_framework.routers import DefaultRouter
from api_v1.views import SneakerViewSet


router = DefaultRouter()
router.register(r'sneakers', SneakerViewSet)


urlpatterns = [
    path('', include(router.urls))
    
]