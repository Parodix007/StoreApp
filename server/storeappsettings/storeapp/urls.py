from . import views
from django.urls import path
from .views import GetItems

urlpatterns = [
    path('', GetItems.as_view())
]
