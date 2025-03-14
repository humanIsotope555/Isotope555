from rest_framework import generics
from . import serializers
from .models import Manual
from .models import Exercise


class ManualList(generics.ListAPIView):
    queryset = Manual.objects.all()
    serializer_class = serializers.ManualSerializer


class ManualDetail(generics.RetrieveAPIView):
    queryset = Manual.objects.all()
    lookup_field = "url"
    serializer_class = serializers.ManualDetailSerializer


class ExersiceList(generics.ListAPIView):
    queryset = Exercise.objects.all()
    serializer_class = serializers.ExerciseSerializer


class ExersiceCompiler(generics.RetrieveAPIView):
    queryset = Exercise.objects.all()

    serializer_class = serializers.ExerciseCompilerSerializer
