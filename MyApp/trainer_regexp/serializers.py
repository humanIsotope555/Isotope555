from rest_framework import serializers
from .models import Manual
from .models import Exercise


class ManualSerializer(serializers.ModelSerializer):
    class Meta:
        model = Manual
        fields = ["id", "url", "symbol"]


class ManualDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Manual
        fields = ["id", "title", "url", "body", "symbol", "example"]


class ExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exercise
        fields = ["id", "task"]


class ExerciseCompilerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exercise
        fields = ["id", "task", "solution", "example", "answer"]