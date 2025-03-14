from django.shortcuts import render
from django.http import HttpResponse, JsonResponse, HttpRequest
from django.http import HttpResponseRedirect
from django.core.mail import send_mail
from django.views.decorators.csrf import csrf_exempt
from django.db import models
from django.views.generic import TemplateView
from .models import Post
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from .serializers import PostSerializer, PostDetailSerializer
from rest_framework.renderers import JSONRenderer, serializers
from rest_framework.parsers import JSONParser
from rest_framework import generics
from .api import PostList
import io
from datetime import datetime, timedelta
import re
import pytz


class UnitWord:
    """ Unit word class """

    @staticmethod
    def get_digit_word(num, index):

        date_time = [['час', 'часа', 'часов'],
                     ['минуту', 'минуты', 'минут'],
                     ['секунду', 'секунды', 'секунд'],
                     ['день', 'дня', 'дней']]

        digit = int(str(num)[-1])

        if 10 < int(num) < 15:
            return date_time[index][2]
        elif digit == 1:
            return date_time[index][0]
        elif digit == 0 or digit > 4:
            return date_time[index][2]
        elif 0 < digit < 5:
            return date_time[index][1]


class Blog(TemplateView):
    """ Blog site """
    template_name = "blog.html"

    def get_context_data(self, *arg, **kwargs):
        context = super().get_context_data(**kwargs)
        post_all = Post.objects.all()

        posts = []

        word = UnitWord
        unit = word.get_digit_word

        for item in post_all:
            time_diff = str(datetime.now(pytz.utc) - item.date)

            more_one_day = re.search("day", time_diff)

            if more_one_day:
                date_diff_arr = re.split("\sday,\s|\sdays,\s", time_diff)
                time_arr = date_diff_arr[1].split(':')
                """
                date_diff = "Добавлено " + date_diff_arr[0] + ""\
                            "  " + unit(date_diff_arr[0], 3) + " " + \
                            time_arr[0] + \
                            " " + unit(time_arr[0], 0) + " и " + \
                            time_arr[1] + \
                            " " + unit(time_arr[1], 1) + " назад"
                            """
                date_diff = "Добавлено " + date_diff_arr[0] + "" \
                            "  " + unit(date_diff_arr[0], 3) + " " + \
                            " назад"
            else:
                date_diff_arr = re.split("\:", time_diff)
                time_arr = date_diff_arr[0].split(':')
                date_diff = "Добавлено " + time_arr[0] + " час и " + \
                            time_arr[1] + " минуты " + " назад"

            posts.append([item, date_diff])

            posts.reverse()

        return {'context': posts}


class BlogDetail(TemplateView):
    """ Blog detail """
    template_name = "post_detail.html"

    def get_context_data(self, *arg, **kwargs):
        context = super().get_context_data(**kwargs)

    def get(self, request, *arg, **kwargs):
        months = {
            '01': 'Январь', '02': 'Февраль', '03': 'Март',
            '04': 'Апрель', '05': 'Май', '06': 'Июнь',
            '07': 'Июль', '08': 'Август', '09': 'Сентябрь',
            '10': 'Октябрь', '11': 'Ноябрь', '12': 'Декабрь'
        }

        post_detail = Post.objects.filter(**kwargs)
        print(post_detail[0].topic)
        date_time = post_detail[0].date

        form_date = [date_time.day, months[str(date_time.month)],
                     date_time.year, str(date_time.hour) + ":" + str(date_time.minute)]

        return render(request, "post_detail.html",
                      {'context': post_detail,
                       'date': form_date})


class PostListApiView(APIView):
    # permission_classes = [permissions.IsAuthenticated]

    def get(self, request, *args, **kwargs):
        posts = Post.objects.all()
        serializer = PostSerializer(posts, many=True)
        return JsonResponse(serializer.data, safe=False)


class PostDetailApiView(APIView):
    # permission_classes = [permissions.IsAuthenticated]

    def get(self, request, *args, **kwargs):
        months = {
            '01': 'Январь', '02': 'Февраль', '03': 'Март',
            '04': 'Апрель', '05': 'Май', '06': 'Июнь',
            '07': 'Июль', '08': 'Август', '09': 'Сентябрь',
            '10': 'Октябрь', '11': 'Ноябрь', '12': 'Декабрь'
        }

        post_detail = Post.objects.filter(**kwargs)

        date_time = post_detail[0].date

        form_date = [date_time.day, months[str(date_time.month)],
                     date_time.year, str(date_time.hour) + ":" + str(date_time.minute)]

        post = Post.objects.get(**kwargs)
        serializer = PostDetailSerializer(post, many=False)
        return JsonResponse(serializer.data, safe=False)
