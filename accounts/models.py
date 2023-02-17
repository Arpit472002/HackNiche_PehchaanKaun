from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token
# Create your models here.
class MyUser(AbstractUser):
    user_id           = models.AutoField(primary_key=True)
    username          = models.CharField(max_length=50,unique=True,blank=False)
    first_name        = models.CharField(max_length=50,blank=False)
    last_name         = models.CharField(max_length=50,blank=False)
    email             = models.EmailField(max_length=100,unique=True)
    bio               = models.TextField(null=True, blank=True)
    dob               = models.DateField(null=True, blank=True)
    profile_pic       = models.ImageField(upload_to='images/',default='default.jpg') 
    reward_points     = models.IntegerField(default=0)
    is_serviceman     = models.BooleanField(default=True)
    is_retired        = models.BooleanField(default=False)
    created_at        = models.DateTimeField(auto_now_add=True)
    USERNAME_FIELD='email'
    REQUIRED_FIELDS=['username']
    
    def __str__(self):
        return self.username

@receiver(post_save, sender = settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance = None, created = False, **kwargs):
    if created:
        token=Token.objects.create(user = instance)