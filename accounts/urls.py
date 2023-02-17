from django.urls import path
from .views import *
urlpatterns = [
    path('register/',Registration.as_view(),name='register'),
    path('login/',LoginView.as_view(),name='login'),
    path('MyUser/<int:pk>/',MyUserView.as_view(),name='MyUser'),
]