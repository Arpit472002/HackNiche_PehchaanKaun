# Generated by Django 4.1.7 on 2023-02-17 05:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='myuser',
            name='is_retired',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='myuser',
            name='is_serviceman',
            field=models.BooleanField(default=True),
        ),
        migrations.AlterField(
            model_name='myuser',
            name='profile_pic',
            field=models.ImageField(default='default.jpg', upload_to='images/'),
        ),
    ]
