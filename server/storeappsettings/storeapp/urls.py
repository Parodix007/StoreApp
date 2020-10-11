from . import views
from django.urls import path
from .views import GetCategorys, GetItems, GetItem

urlpatterns = [
    path('', GetCategorys.as_view()),
    path('shop/', GetItems.as_view()),
    path('item/', GetItem.as_view()),
]
