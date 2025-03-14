from django.core.mail import send_mail
from django.views.decorators.csrf import csrf_exempt
from django.db import models
from django.views.generic import TemplateView
from rest_framework.renderers import JSONRenderer, serializers
from rest_framework.parsers import JSONParser
from rest_framework import generics
import io
import datetime
import re


class Scrum(TemplateView):
    template_name = 'scrum_base.html'
