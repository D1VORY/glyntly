# Generated by Django 3.1.3 on 2021-01-21 16:15

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api_v1', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sneakervariant',
            name='sneaker',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='variants', to='api_v1.sneaker'),
        ),
    ]
