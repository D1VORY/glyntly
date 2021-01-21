from rest_framework import serializers
from api_v1.models import Sneaker


class SneakerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sneaker
        fields =['id', 'name',  'price',  'brand', 'available_sizes_list','picture', 'seller']