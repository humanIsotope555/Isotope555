from rest_framework import serializers
from .models import Request


class RequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Request
        fields = ['id', 'email', 'first_name']


class RequestDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Request
        fields = ['id', 'email', 'first_name', 'tell_number', 'date_add']