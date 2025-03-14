from django.contrib import admin
from .models import Manual
from .models import Exercise

admin.site.register(Manual)
admin.site.register(Exercise)