from rest_framework import viewsets

from api_v1.models import Sneaker
from api_v1.serializers import SneakerSerializer

class SneakerViewSet(viewsets.ModelViewSet):
    queryset = Sneaker.objects.all()
    serializer_class = SneakerSerializer