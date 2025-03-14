from rest_framework import serializers
from .models import Manual


class ManualSerializer(serializers.ModelSerializer):
    class Meta:
        model = Manual
        fields = ["id", "symbol"]


class ManualDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Manual
        fields = ["id", "title", "body", "symbol", "example"]