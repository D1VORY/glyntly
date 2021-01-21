from rest_framework import serializers
from api_v1.models import SneakerVariant


class SneakerVariantSerializer(serializers.ModelSerializer):
    class Meta:
        model = SneakerVariant
        fields ='__all__'