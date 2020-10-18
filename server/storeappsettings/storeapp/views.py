from django.shortcuts import render
from .models import Category, Item, ContactData
from .serializers import CategorySerializer, ItemsSerializer, ItemSerializer, ContactSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
# Create your views here.

    
    #* Za pomoca Django Rest Framework tworze odpowiednie API dla frontendu.
    #* Uzywam do tego APIViews jako ze korzystam z obietkowego podejscia do Viewsow w Django
    #* Klucze Importy: APIView, Response
    #* APIView odpowiada za tworzenie widoku api w przegladarce i utworzenie samego API dla tego widoku
    #* Response jest lepszym HttpResponse
    #* W kazdej klasie "serializuje" dane z obiektow ktore mnie interesuja

class GetCategorys(APIView):

    def get(self, request):
        get_categorys_name = Category.objects.all()
        list_of_categorys = []

        for item in list(get_categorys_name):
            query_for_category = Category.objects.get(category_name=item)
            category_obj = CategorySerializer(query_for_category)
            list_of_categorys.append(category_obj.data)
        
        return Response(list_of_categorys)



class GetItems(APIView):

    def post(self, request):
        items_category = request.query_params.get('category')
        query_for_item_category = Item.objects.filter(item_category=items_category)
        items_obj = []

        for item in list(query_for_item_category):
            obj = ItemsSerializer(item)
            items_obj.append(obj.data)

        return Response(items_obj)


class GetItem(APIView):

    def post(self, request):
        item_id = request.GET.get('id')
        query_for_item = Item.objects.get(id=item_id)
        item_obj = ItemSerializer(query_for_item)
        return Response(item_obj.data)

class GetContactData(APIView):

    def get(self, request):
        contact = ContactData.objects.get(id=1)
        query_for_data = ContactSerializer(contact)
        return Response(query_for_data.data)