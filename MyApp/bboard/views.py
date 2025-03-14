from django.shortcuts import render
from django.http import HttpResponse, JsonResponse, HttpRequest
from django.http import HttpResponseRedirect
from django.core.mail import send_mail
from django.views.decorators.csrf import csrf_exempt
from django.db import models
from django.views.generic import TemplateView
from .models import Request
from .models import Image
from rest_framework.renderers import JSONRenderer, serializers
from rest_framework.parsers import JSONParser
from rest_framework import generics
import io
import datetime
import re


class Mail(TemplateView):
    """ Send email """

    def send_order(self, request):
        username = request['username']
        email = request['email']
        call = request['tel']
        from_mail = 'Lexa_163_96@mail.ru'
        to_mail = ["Lexa_163_96@mail.ru"]
        fail_silently = False

        order = {'user': username, 'mail': email, 'tel': call}

        send_mail(username, f"{email}\n{call}", from_mail, to_mail, fail_silently)

        return order


class Saving(TemplateView, HttpResponse):
    """ Save mail in data base """

    def save_order(self, request):

        model = Request()

        model.email = request['username']
        model.first_name = request['email']
        model.tell_number = request['tel']
        model.save()

        print(Request.objects.all())


class Base(TemplateView, HttpResponse, serializers.Serializer):
    """ Base site """
    template_name = 'base.html'

    def get_context_data(self, *arg, **kwargs):
        img = Image.objects.all()

        context = super().get_context_data(**kwargs)

    @csrf_exempt
    def post(self, request):
        data_dict = {}
        push_send = re.search('class="button-send', request.POST['form_html'])

        if request.method == "POST":
            print("Success")

        for item in request.POST['form_data'].split("&"):
            data_dict[item.split("=")[0]] = item.split("=")[1]

        if push_send:
            Mail().send_order(data_dict)
            Saving().save_order(data_dict)

        return HttpResponse(request.POST['form_html'])