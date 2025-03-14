from django.urls import path, include
from django.views.generic import TemplateView
from rest_framework.urlpatterns import format_suffix_patterns
from . import views
from . import api

urlpatterns = [
    #path('blog/test/', TemplateView.as_view(template_name='blog_test.html'), name='app'),
    path('blog/', views.Blog.as_view(), name="blog"),
    path('blog/<int:pk>/', views.BlogDetail.as_view(), name="post_detail"),
    path('blog/requests/', views.PostListApiView.as_view(), name="blog_request"),
    path('blog/requests/<int:pk>/', views.PostDetailApiView.as_view(), name="blog_request_detail")
]