from django.contrib import admin

from api_v1.models import (
    Sneaker,
    SneakerVariant,
    Brand
)

admin.site.register(Sneaker)
admin.site.register(SneakerVariant)
admin.site.register(Brand)