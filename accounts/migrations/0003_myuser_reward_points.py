# Generated by Django 4.1.7 on 2023-02-17 22:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_myuser_is_retired_myuser_is_serviceman_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='myuser',
            name='reward_points',
            field=models.IntegerField(default=0),
        ),
    ]
