from django.shortcuts import render
from django.http import HttpResponse, JsonResponse, HttpRequest
from django.http import HttpResponseRedirect
from django.core.mail import send_mail
from django.views.decorators.csrf import csrf_exempt
from django.db import models
from django.views.generic import TemplateView
from .models import Post
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from .serializers import PostSerializer, PostDetailSerializer
from rest_framework.renderers import JSONRenderer, serializers
from rest_framework.parsers import JSONParser
from rest_framework import generics
from .api import PostList
import io
import datetime
import re


class Blog(TemplateView):
    """ Blog site """
    template_name = "blog.html"

    def get_context_data(self, *arg, **kwargs):
        context = super().get_context_data(**kwargs)
        model = Post

        return {'context': model.objects.all()}


class BlogDetail(TemplateView):
    """ Blog detail """
    template_name = "post_detail.html"

    def get_context_data(self, *arg, **kwargs):
        context = super().get_context_data(**kwargs)

    def get(self, request, *arg, **kwargs):
        post_detail = Post.objects.filter(**kwargs)
        return render(request, "post_detail.html", {'context': post_detail})


class PostListApiView(APIView):
    #permission_classes = [permissions.IsAuthenticated]

    def get(self, request, *args, **kwargs):
        posts = Post.objects.all()
        serializer = PostSerializer(posts, many=True)
        return JsonResponse(serializer.data, safe=False)


class PostDetailApiView(APIView):
    #permission_classes = [permissions.IsAuthenticated]

    def get(self, request, *args, **kwargs):
        post = Post.objects.get(**kwargs)
        serializer = PostDetailSerializer(post, many=False)
        return JsonResponse(serializer.data, safe=False)