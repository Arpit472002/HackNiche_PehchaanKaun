# Generated by Django 4.1.7 on 2023-02-17 11:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0003_job_posting_applied_jobs'),
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('event_name', models.CharField(max_length=100)),
                ('event_details', models.TextField()),
                ('event_image', models.ImageField(default='default_event.jpg', upload_to='event_images/')),
                ('event_date', models.DateField()),
                ('event_venue', models.CharField(max_length=200)),
                ('event_create_date', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.AddConstraint(
            model_name='applied_jobs',
            constraint=models.UniqueConstraint(fields=('job', 'applied_by'), name='jobs_applied_by_users'),
        ),
    ]
