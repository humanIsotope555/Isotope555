from rest_framework import generics
from . import serializers
from .models import Manual


class ManualList(generics.ListAPIView):
    queryset = Manual.objects.all()
    serializer_class = serializers.ManualSerializer


class ManualDetail(generics.RetrieveAPIView):
    queryset = Manual.objects.all()
    serializer_class = serializers.ManualDetailSerializer
