from django.db import models


class Brand(models.Model):
    name = models.CharField(max_length=40)


    def __str__(self):
        return f"{self.name}"

    def __repr__(self):
        return self.__str__()