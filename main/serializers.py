from rest_framework import serializers
from .models import *
from accounts.models import *
from accounts.serializers import *
class BlogListSerializer(serializers.ModelSerializer):
    user=MyUserSerializer()
    blog_likes_count=serializers.SerializerMethodField('get_blog_likes_count')
    def get_blog_likes_count(self,obj):
        blog_likes=Blog_Likes.objects.filter(blog=obj).count()
        return blog_likes
    blog_comments_count=serializers.SerializerMethodField('get_blog_comments_count')
    def get_blog_comments_count(self,obj):
        blog_comments=Blog_Comments.objects.filter(blog=obj).count()
        return blog_comments
    class Meta:
        model=Blogs
        fields="__all__"

class BlogPostSerializer(serializers.ModelSerializer):
    blog_likes_count=serializers.SerializerMethodField('get_blog_likes_count')
    def get_blog_likes_count(self,obj):
        blog_likes=Blog_Likes.objects.filter(blog=obj).count()
    blog_comments_count=serializers.SerializerMethodField('get_blog_comments_count')
    def get_blog_comments_count(self,obj):
        blog_comments=Blog_Comments.objects.filter(blog=obj).count()
    class Meta:
        model=Blogs
        fields="__all__"