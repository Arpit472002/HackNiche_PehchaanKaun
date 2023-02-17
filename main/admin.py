from django.contrib import admin
from .models import *
# Register your models here.
admin.site.register(Blogs)
admin.site.register(Blog_Likes)
admin.site.register(Blog_Comments)
admin.site.register(Job_Posting)
admin.site.register(Applied_Jobs)