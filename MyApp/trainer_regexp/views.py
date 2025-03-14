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

import io
import datetime
import re
from urllib.parse import unquote

from .models import Manual
from .models import Exercise
from .serializers import ManualSerializer


class Trainer(TemplateView):
    """ Trainer RegExp """
    template_name = "trainer.html"

    def get(self, request):
        exercise_all = Exercise.objects.all()

        return render(request, "trainer.html", {"context": exercise_all})


class Compiler(TemplateView):
    """ Compiler RegExp"""
    template_name = "trainer_compiler.html"

    def get(self, request, *arg, **kwargs):

        exercise = Exercise.objects.get(**kwargs)

        return render(request, 'trainer_compiler.html', {'context': exercise})

    def post(self, request, **kwargs):
        exercise = Exercise.objects.get(**kwargs)

        form_answer = request.POST['form_data']

        find_regexp = re.findall('regexp=(.*)', form_answer)

        user_answer = unquote(find_regexp[0])
        print(request.POST['form_html'])

        answer_admin = 'mail'
        check = re.findall(answer_admin, exercise.example)
        print(check)

        res = ['Верно', 'Не подходит']

        if check:
            if check[0] == exercise.answer:
                """
                return render(request, 'trainer_compiler.html',
                              {'context': exercise,
                               'res': res})
                               """
                return JsonResponse({'answer': check[0], 'res': res[0]})
            else:
                """
                return render(request, 'trainer_compiler.html',
                              {'context': exercise,
                               'res': res})
                               """
                return JsonResponse({'answer': check[0], 'res': res[1]})
        else:
            return JsonResponse({'answer': check, 'res': res[1]})


class Handbook(TemplateView):
    """ Manual RegExp """
    template_name = "manual.html"

    def get(self, request, **kwargs):

        manual_all = Manual.objects.all()
        manual_first = Manual.objects.get(id=1)
        #item = Manual.objects.get(**kwargs)
        """
        serializer = ManualSerializer(manual_all, data=True)
        serializer.is_valid()
        print(serializer.data)
        """
        return render(request, "manual.html", {"context": manual_all,
                                               "element": manual_first})

    def post(self, request):
        item = request.POST['form_data']
        form_html = request.POST['form_html']
        manual_all = Manual.objects.all()
        object = Manual.objects.get(id=item)
        return render(request, "manual.html", {"context": manual_all,
                                               'element': object})
