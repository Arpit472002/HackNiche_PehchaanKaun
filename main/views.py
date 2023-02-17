from django.shortcuts import render
from rest_framework import generics
from .models import *
from .serializers import *
from rest_framework.response import Response
# Create your views here.
class BlogListCreateView(generics.ListCreateAPIView):
    queryset=Blogs.objects.all()
    serializer_class=BlogListSerializer
    def get(self,request):
        query=Blogs.objects.all()
        serializer=BlogListSerializer(query,many=True)
        return Response(serializer.data)
    def post(self,request):
        serializer=BlogPostSerializer(data=request.data)
        print(request.headers)
        if serializer.is_valid():
            serializer.save(user=self.request.user)
            return Response(serializer.data)
        return Response(serializer.errors)

class BlogLikeView(generics.CreateAPIView):
    queryset=Blogs.objects.all()
    serializer_class=BlogListSerializer
    def post(self,request):
        blog_id=self.request.GET.get('blog_id')
        blog_instance=Blogs.objects.get(id=blog_id)
        Blog_Likes.objects.create(blog=blog_instance,liked_by=self.request.user)
        return Response("Blog Liked")

class BlogCommentView(generics.ListCreateAPIView):
    queryset=Blogs.objects.all()
    serializer_class=BlogListSerializer
    def post(self,request):
        blog_id=self.request.GET.get('blog_id')
        blog_detail=Blogs.objects.get(id=blog_id)
        serializer=BlogCommentPostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(commented_by=self.request.user,blog=blog_detail)
            return Response(serializer.data)
        return Response(serializer.errors)
    def get(self,request):
        blog_id=self.request.GET.get('blog_id')
        blog_detail=Blogs.objects.get(id=blog_id)
        query=Blog_Comments.objects.filter(blog=blog_detail)
        serializer=BlogCommentListSerializer(query,many=True)
        return Response(serializer.data)