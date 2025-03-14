from rest_framework import generics
from . import serializers
from .models import Post


class PostList(generics.ListAPIView):
    queryset = Post.objects.all()
    serializer_class = serializers.PostSerializer


class PostDetail(generics.RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = serializers.PostDetailSerializer
