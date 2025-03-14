from django.db import models


class User(models.Model):
    """ Account user model """

    name = models.CharField(max_length=30)
    surname = models.CharField(max_length=30)
    mail = models.CharField(max_length=30)
    password = models.CharField(max_length=30)
    date_reg = models.DateTimeField(auto_now_add=True)

