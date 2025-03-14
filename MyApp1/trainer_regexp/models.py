from django.db import models


class Manual(models.Model):
    """ Manual of RegExp """

    content = [
        'Основы',
        'Метасимволы',
        'Подвыражения',
        'Обратные ссылки',
        'Просмотр вперед и назад',
        'Условия',
        'POSIX',
    ]

    title = models.CharField(max_length=100)
    body = models.TextField(max_length=200)
    symbol = models.CharField(max_length=10)
    example = models.TextField(max_length=200)


class Exercise(models.Model):
    """ RegExp tasks """

    task = models.CharField(max_length=200)
    solution = models.CharField(max_length=200)
    example = models.CharField(max_length=200)
    answer = models.CharField(max_length=200)