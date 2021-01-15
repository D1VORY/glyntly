from django.db import models
from .sneaker import Sneaker


class SneakerVariant(models.Model):
    size = models.SmallIntegerField()
    sneaker = models.ForeignKey(to=Sneaker, on_delete=models.CASCADE, related_name='sneaker_variants')

    class Meta:
        verbose_name = "SneakerVariant"
        verbose_name_plural = "SneakerVariants"

    def __str__(self):
        return f"{self.size}"

    def __repr__(self):
        return self.__str__()