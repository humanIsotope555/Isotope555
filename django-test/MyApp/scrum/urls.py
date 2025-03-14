from django.urls import path, include
from rest_framework.urlpatterns import format_suffix_patterns
from . import views


urlpatterns = [
    path('scrum/', views.Scrum.as_view(), name="scrum"),

]