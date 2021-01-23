from django.db import models
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import AbstractUser

from .managers import CustomUserManager 

class CustomUser(AbstractUser):
    username = None
    email = models.EmailField(_('email address'), unique=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = CustomUserManager()

    class Role(models.TextChoices):
        seller = 'slr', _('seller')
        guarantor = 'grt', _('guarantor')
        admin = 'adm', _('admin')
        basic = 'bsc', _('basic')

    role = models.CharField(max_length=16, choices=Role.choices, default=Role.basic)
    rating = models.SmallIntegerField(null=True)


    def __str__(self):
        return self.email
    
