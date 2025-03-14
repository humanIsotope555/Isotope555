from django.urls import path, re_path, include
from rest_framework.urlpatterns import format_suffix_patterns
from . import views
from . import api

urlpatterns = [
    path('trainer/', views.Trainer.as_view(), name="trainer"),
    path('trainer/requests', api.ExersiceList.as_view(), name="exercise_request"),
    path('trainer/requests/<int:pk>', api.ExersiceCompiler.as_view(), name="exercise_request_compiler"),
    path('compiler/<int:pk>/', views.Compiler.as_view(), name="compiler"),
    path('manual/', views.Handbook.as_view(), name="manual"),
    path('manual/requests/', api.ManualList.as_view(), name="manual_request"),
    path('manual/requests/<url>', api.ManualDetail.as_view(), name="manual_request_detail")

]