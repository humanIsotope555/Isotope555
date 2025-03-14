from rest_framework import generics
from . import serializers
from .models import Request


class RequestList(generics.ListAPIView):
    queryset = Request.objects.all()
    serializer_class = serializers.RequestSerializer


class RequestDetail(generics.RetrieveAPIView):
    queryset = Request.objects.all()
    serializer_class = serializers.RequestDetailSerializer
