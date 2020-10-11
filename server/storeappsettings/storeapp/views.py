from django.shortcuts import render
from django.views import View
from .models import Category
from .serializers import CategorySerializer
from django.http import HttpResponse, HttpRequest
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
# Create your views here.


class GetCategorys(View):

    def get(self, request):
        get_categorys_name = Category.objects.all()
        list_of_categorys = []
        for item in list(get_categorys_name):
            query_for_category = Category.objects.get(category_name=item)
            category_obj = CategorySerializer(query_for_category)
            list_of_categorys.append(category_obj.data)
        
        json = JSONRenderer().render(list_of_categorys)
        return HttpResponse(json)


class GetItems(View):

    def get(self, request):
        item_category = request.GET.get('category')
        return HttpResponse('dupa')