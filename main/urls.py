from django.urls import path
from .views import *
urlpatterns = [
    path('blogs/',BlogListCreateView.as_view(),name='blog'),
    path('blog_like/',BlogLikeView.as_view(),name='blog_like')
]