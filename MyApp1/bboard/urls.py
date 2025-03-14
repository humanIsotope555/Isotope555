from django.urls import path, include
from rest_framework.urlpatterns import format_suffix_patterns
from . import views
from . import api

urlpatterns = [
    path('', views.Base.as_view(), name="base"),
    path('requests/', api.RequestList.as_view(), name="request"),
    path('requests/<int:pk>/', api.RequestDetail.as_view(), name="request_detail")
    ]

urlpatterns = format_suffix_patterns(urlpatterns)
