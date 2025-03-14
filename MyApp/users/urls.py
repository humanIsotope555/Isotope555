from django.urls import path, include
from rest_framework.urlpatterns import format_suffix_patterns
from django.contrib.auth import views
from . import views
from . import api

urlpatterns = [
    path('authorization/', views.Authorization.as_view(), name="auth"),
    path('registration/', views.Registration.as_view(), name="reg"),
    path('users/', api.UserList.as_view(), name='user'),
    path('users/<int:pk>/', api.UserDetail.as_view(), name="user_detail")
]

urlpatterns = format_suffix_patterns(urlpatterns)