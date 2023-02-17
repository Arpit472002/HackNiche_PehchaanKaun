from django.urls import path
from .views import *
urlpatterns = [
    path('blogs/',BlogListCreateView.as_view(),name='blog'),
    path('blog_like/',BlogLikeView.as_view(),name='blog_like'),
    path('blog_comment/',BlogCommentView.as_view(),name='blog_comment'),
    path('job_post/',PostJobView.as_view(),name='job_post'),
    path('job_apply/',ApplyForJob.as_view(),name='job_apply'),
    path('event_list/',EventListView.as_view(),name='event_list'),
    path('event_detail/<int:pk>/',EventDetailView.as_view(),name='event_detail')
]