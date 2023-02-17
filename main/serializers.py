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
        return blog_likes
    blog_comments_count=serializers.SerializerMethodField('get_blog_comments_count')
    def get_blog_comments_count(self,obj):
        blog_comments=Blog_Comments.objects.filter(blog=obj).count()
        return blog_comments
    class Meta:
        model=Blogs
        fields="__all__"

class BlogCommentListSerializer(serializers.ModelSerializer):
    commented_by=MyUserSerializer()
    class Meta:
        model=Blog_Comments
        fields=["commented_by","comment_body"]

class BlogCommentPostSerializer(serializers.ModelSerializer):
    class Meta:
        model=Blog_Comments
        fields=["comment_body"]

class JobListSerializer(serializers.ModelSerializer):
    class Meta:
        model=Job_Posting
        fields="__all__"

class JobApplySerializer(serializers.ModelSerializer):
    job=JobListSerializer()
    class Meta:
        model=Applied_Jobs
        fields="__all__"

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model=Event
        fields="__all__"

class InterestedEventSerializer(serializers.ModelSerializer):
    class Meta:
        model=Event_Interested
        fields="__all__"
