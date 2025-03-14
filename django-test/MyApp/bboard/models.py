from django.db import models
from phonenumber_field.modelfields import PhoneNumberField


class Request(models.Model):
    """ Model of requests of person """

    email = models.CharField(max_length=30)
    first_name = models.CharField(max_length=30)
    tell_number = PhoneNumberField(max_length=30)
    date_add = models.DateTimeField(auto_now_add=True)


class Image(models.Model):
    img = models.ImageField(upload_to='image', null=True, blank=True, verbose_name='Изображение')
