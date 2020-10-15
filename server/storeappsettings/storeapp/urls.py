from . import views
from django.urls import path
from .views import GetCategorys, GetItems, GetItem, GetContactData

urlpatterns = [
    path('', GetCategorys.as_view()),
    path('shop/', GetItems.as_view()),
    path('item/', GetItem.as_view()),
    path('contact/', GetContactData.as_view())
]
