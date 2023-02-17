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
    blog=models.ForeignKey(Blogs,on_delete=models.CASCADE)
    commented_by=models.ForeignKey(MyUser,on_delete=models.CASCADE)
    comment_body=models.TextField()
    comment_date=models.DateTimeField(auto_now_add=True)