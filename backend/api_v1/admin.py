from django.contrib import admin

from api_v1.models import (
    Sneaker,
    SneakerVariant,
    Brand
)


class SneakerVariantInline(admin.TabularInline):
    model = SneakerVariant

class SneakerAdmin(admin.ModelAdmin):
    inlines = [
        SneakerVariantInline
    ]

    list_display = ("name", "brand",  "price", "seller" )



admin.site.register(Sneaker, SneakerAdmin)
admin.site.register(SneakerVariant)
admin.site.register(Brand)