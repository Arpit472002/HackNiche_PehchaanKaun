from django.shortcuts import render
from rest_framework import generics
from .models import *
from .serializers import *
from rest_framework.response import Response
from datetime import date
import datetime
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
    serializer_class=EventDetailSerializer
    def get(self,request,pk):
        qs=Event.objects.get(id=pk)
        serializer=EventDetailSerializer(qs)
        return Response(serializer.data)    

class InterestedEventCreate(generics.CreateAPIView):
    queryset=Event_Interested.objects.all()
    serializer_class=InterestedEventSerializer
    def post(self,request):
        event_id=self.request.GET.get('event_id')
        event_details=Event.objects.get(id=event_id)
        Event_Interested.objects.create(event=event_details,interested_user=self.request.user)
        return Response("Interest Shown!")

class PensionCalculator(generics.ListAPIView):
    queryset=Event_Interested.objects.all()
    serializer_class=InterestedEventSerializer
    def post(self,request):
        type_of_retirement=request.data['type_of_retirement']
        try:
            date_of_birth=int(datetime.datetime.strptime(request.data['date_of_birth'],"%Y-%m-%d").date().year)
        except:
            pass
        try:
            date_of_joining=int(datetime.datetime.strptime(request.data['date_of_joining'],"%Y-%m-%d").date().year)
        except:
            pass
        try:
            date_of_retirement=int(datetime.datetime.strptime(request.data['date_of_retirement'],"%Y-%m-%d").date().year)
        except:
            pass
        try:
            sum_of_last_10_pay=int(request.data['sum_of_last_10_pay'])
        except:
            pass
        sum_of_last_month_pay=int(request.data['sum_of_last_month_pay'])
        if sum_of_last_month_pay:
            return Response(f"₹ {0.30*sum_of_last_month_pay}")
        else:
            if type_of_retirement=="Voluntary":
                if date.today().year-date_of_birth in range(0,33):
                    return Response("No Pension!")
                elif date.today().year-date_of_birth in range(33,39):
                    if date_of_retirement-date_of_joining in range(15,17):
                        return Response(f"₹ {0.30*sum_of_last_10_pay/10}")
                    elif date_of_retirement-date_of_joining in range(17,19):
                        return Response(f"₹ {0.32*sum_of_last_10_pay/10}")
                    else:
                        return Response(f"₹ {0.35*sum_of_last_10_pay/10}")
                elif date.today().year-date_of_birth in range(39,44):
                    if date_of_retirement-date_of_joining in range(21,23):
                        return Response(f"₹ {0.37*sum_of_last_10_pay/10}")
                    elif date_of_retirement-date_of_joining in range(23,25):
                        return Response(f"₹ {0.39*sum_of_last_10_pay/10}")
                    else:
                        return Response(f"₹ {0.40*sum_of_last_10_pay/10}")
                elif date.today().year-date_of_birth in range(44,49):
                    if date_of_retirement-date_of_joining in range(26,28):
                        return Response(f"₹ {0.42*sum_of_last_10_pay/10}")
                    elif date_of_retirement-date_of_joining in range(28,30):
                        return Response(f"₹ {0.44*sum_of_last_10_pay/10}")
                    else:
                        return Response(f"₹ {0.50*sum_of_last_10_pay/10}")
                else:
                    return Response(f"₹ {0.40*sum_of_last_10_pay/10}")
            elif type_of_retirement=="Superannuation":
                if date.today().year-date_of_birth in range(0,33):
                    return Response("No Pension:(")
                elif date.today().year-date_of_birth in range(33,39):
                    if date_of_retirement-date_of_joining in range(15,17):
                        return Response(f"₹ {0.33*sum_of_last_10_pay/10}")
                    elif date_of_retirement-date_of_joining in range(17,19):
                        return Response(f"₹ {0.35*sum_of_last_10_pay/10}")
                    else:
                        return Response(f"₹ {0.37*sum_of_last_10_pay/10}")
                elif date.today().year-date_of_birth in range(39,44):
                    if date_of_retirement-date_of_joining in range(21,23):
                        return Response(f"₹ {0.39*sum_of_last_10_pay/10}")
                    elif date_of_retirement-date_of_joining in range(23,25):
                        return Response(f"₹ {0.41*sum_of_last_10_pay/10}")
                    else:
                        return Response(f"₹ {0.44*sum_of_last_10_pay/10}")
                elif date.today().year-date_of_birth in range(44,49):
                    if date_of_retirement-date_of_joining in range(26,28):
                        return Response(f"₹ {0.45*sum_of_last_10_pay/10}")
                    elif date_of_retirement-date_of_joining in range(28,30):
                        return Response(f"₹ {0.47*sum_of_last_10_pay/10}")
                    else:
                        return Response(f"₹ {0.50*sum_of_last_10_pay/10}")
                else:
                    return Response(f"₹ {0.54*sum_of_last_10_pay/10}")
                
        

        

