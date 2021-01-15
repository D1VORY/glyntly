from django.db import models
from django.utils.translation import gettext_lazy as _
from django.contrib.auth import get_user_model
import uuid

from .brand import Brand

def sneaker_image_path(instance, filename):
    return f"images/sneakers/{instance.id}/{filename}"


class Sneaker(models.Model):
    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        unique=True,
        editable=False
    )
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=180, null=True)
    price = models.DecimalField(max_digits=9, decimal_places=2)
    picture = models.ImageField(upload_to=sneaker_image_path)

    brand = models.ForeignKey(to=Brand, on_delete=models.CASCADE, related_name='sneakers')
    seller = models.ForeignKey(to=get_user_model(), on_delete=models.CASCADE, related_name='sneakers_on_sale')

    class Meta:
        verbose_name = "Sneaker"
        indexes = [
            models.Index(fields=['id'], name='id_index')
        ]

    def __str__(self):
        return f"{self.name}"

    def __repr__(self):
        return self.__str__()