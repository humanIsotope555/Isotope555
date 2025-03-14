from django.shortcuts import render
from django.http import HttpResponse, JsonResponse, HttpRequest
from django.http import HttpResponseRedirect
from django.core.mail import send_mail
from django.views.decorators.csrf import csrf_exempt
from django.db import models
from django.views.generic import TemplateView
from rest_framework.renderers import JSONRenderer, serializers
from rest_framework.parsers import JSONParser
from rest_framework import generics
from .models import User

import io
import datetime
import re


class Authorization(TemplateView):
    """ Authorization page """
    template_name = "authorization.html"


class Registration(TemplateView):
    """ Registration page """
    template_name = "registration.html"

    def post(self, request):

        data_dict = {}

        for item in request.POST['form_data'].split("&"):
            data_dict[item.split("=")[0]] = item.split("=")[1]

        pass_len = re.search('\S{8,}', data_dict['password'])
        pass_lang = re.search('[a-zA-Z]', data_dict['password'])
        pass_up = re.search('[A-Z]', data_dict['password'])
        pass_num = re.search('[0-9]', data_dict['password'])
        pass_sym = re.search('[^a-zA-Z0-9]{1}', data_dict['password'])
        pass_repeat = True if data_dict['password'] == data_dict['repeat_password'] else None

        dict_reg_pass = {'length': [pass_len, 'Пароль состоять минимум из 8 символов'],
                         'lang': [pass_lang, 'Пароль должен быть полностью на английском'],
                         'upper': [pass_up, 'Пароль должен содержать минимум 1 заглавную букву'],
                         'number': [pass_num, 'Пароль должен содержать минимум 1 цифру'],
                         'symbol': [pass_sym, 'Пароль должен содержать не более 1 симвоа'],
                         'repeat': [pass_repeat, 'Пароли должны совпадать']}

        for item in dict_reg_pass:
            if dict_reg_pass[item] != None:
                print(dict_reg_pass[item][1])


        if data_dict['password'] == data_dict['repeat_password']:
            model = User()

            model.mail = data_dict['mail']
            model.name = data_dict['name']
            model.surname = data_dict['surname']
            model.password = data_dict['password']

            model.save()

            return JsonResponse({'context': 'Регистрация успешна'})
        else:
            return JsonResponse({'context': 'Ошибка'})


