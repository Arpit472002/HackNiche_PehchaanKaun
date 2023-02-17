from django.shortcuts import render
from rest_framework import generics
from .models import *
from .serializers import *
from rest_framework.response import Response
from datetime import date
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

class PostJobView(generics.ListCreateAPIView):
    queryset=Job_Posting.objects.all()
    serializer_class=JobListSerializer
    def get(self,request):
        qs=Job_Posting.objects.all()
        serializer=JobListSerializer(qs,many=True)
        return Response(serializer.data)
    def post(self,request):
        serializer=JobListSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

class ApplyForJob(generics.ListCreateAPIView):
    queryset=Job_Posting.objects.all()
    serializer_class=JobListSerializer
    def get(self,request):
        qs=Applied_Jobs.objects.filter(applied_by=self.request.user)
        serializer=JobApplySerializer(qs,many=True)    
        return Response(serializer.data)
    def post(self,request):
        job_id=self.request.GET.get('job_id')
        job_detail=Job_Posting.objects.get(id=job_id)
        Applied_Jobs.objects.create(job=job_detail,applied_by=self.request.user)
        return Response("Applied for this job")


class EventListView(generics.ListCreateAPIView):
    queryset=Event.objects.all()
    serializer_class=EventSerializer
    def get(self,request):
        qs=Event.objects.filter(event_date__gte=date.today())
        serializer=EventSerializer(qs,many=True)
        return Response(serializer.data)
    def post(self,request):
        serializer=EventSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

class EventDetailView(generics.RetrieveAPIView):
    queryset=Event.objects.all()
    serializer_class=EventSerializer
    def get(self,request,pk):
        qs=Event.objects.get(id=pk)
        serializer=EventSerializer(qs)
        return Response(serializer.data)    

class InterestedEventCreate(generics.CreateAPIView):
    queryset=Event_Interested.objects.all()
    serializer_class=InterestedEventSerializer
    def post(self,request):
        event_id=self.request.GET.get('event_id')
        event_details=Event.objects.get(id=event_id)
        Event_Interested.objects.create(event=event_details,interested_user=self.request.user)
        return Response("Interest Shown!")

