from . import views
from django.urls import path
from .views import GetCategorys, GetItems

urlpatterns = [
    path('', GetCategorys.as_view()),
    path('shop', GetItems.as_view()),
]
