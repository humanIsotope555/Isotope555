from django.contrib import admin

from .models import Request
from .models import Image


admin.site.register(Request)
admin.site.register(Image)

