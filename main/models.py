from django.db import models
from accounts.models import *
# Create your models here.
class Blogs(models.Model):
    user=models.ForeignKey(MyUser,on_delete=models.CASCADE,null=True,blank=True)
    blog_image=models.ImageField(upload_to='blog_images/',default='default_blog.jpg')
    blog_title=models.CharField(max_length=100)
    blog_body=models.TextField()
    create_date=models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.blog_title

class Blog_Likes(models.Model):
    blog=models.ForeignKey(Blogs,on_delete=models.CASCADE)
    liked_by=models.ForeignKey(MyUser,on_delete=models.CASCADE)
    like_date=models.DateTimeField(auto_now_add=True)
    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=['liked_by', 'blog'], name='blogs_liked_by_users'
            )
        ]
    def __str__(self):
        return self.blog.blog_title

class Blog_Comments(models.Model):
    blog=models.ForeignKey(Blogs,on_delete=models.CASCADE,null=True,blank=True)
    commented_by=models.ForeignKey(MyUser,on_delete=models.CASCADE,null=True,blank=True)
    comment_body=models.TextField()
    comment_date=models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.blog.blog_title

class Job_Posting(models.Model):
    job_post_date               = models.DateTimeField(auto_now_add=True)
    job_title                   = models.CharField(max_length=100, blank=True, null=True)
    company_name                = models.CharField(max_length=255, blank=True, null=True)
    salary_offered              = models.IntegerField(default=0)
    job_description             = models.TextField(blank=True, null=True)
    work_from_home              = models.BooleanField(default=False)
    def __str__(self):
        return self.job_title

class Applied_Jobs(models.Model):
    job = models.ForeignKey(Job_Posting,on_delete=models.CASCADE)
    applied_by = models.ForeignKey(MyUser,on_delete=models.CASCADE)
    applied_on = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.job.job_title
    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=['job', 'applied_by'], name='jobs_applied_by_users'
            )
        ]

class Event(models.Model):
    event_name=models.CharField(max_length=100)
    event_details=models.TextField()
    event_image=models.ImageField(upload_to='event_images/',default='default_event.jpg')
    event_date=models.DateField()
    event_venue=models.CharField(max_length=200)
    event_create_date=models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.event_name

class Event_Interested(models.Model):
    event=models.ForeignKey(Event,on_delete=models.CASCADE)
    interested_user=models.ForeignKey(MyUser,on_delete=models.CASCADE)
    