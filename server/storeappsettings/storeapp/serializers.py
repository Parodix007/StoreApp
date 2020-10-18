from rest_framework import serializers
from .models import Category, Item, ContactData

    
    #* Tworze obiekty ktore pomagaja w serlizacji danych z Django Rest Framework
    #* Kluczowe Importy: serializers
    #* Kazdy z obiektowy dziedziczy ModelSerializer z serializers nastepnie posiada klase Meta ktora odpowiada za wybranie odpowiednich pol ktore potem sa wysylane w api
    

class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = ('id', 'category_name', 'category_desc')


class ItemsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Item
        fields = ('id', 'item_name', 'item_short_desc', 'is_item', 'item_img_url')


class ItemSerializer(serializers.ModelSerializer):

    class Meta:
        model = Item
        fields = ('item_name', 'item_price', 'item_desc', 'item_category', 'is_item', 'item_img_url')


class ContactSerializer(serializers.ModelSerializer):

    class Meta:
        model = ContactData
        fields = ('phone_number', 'email', 'street')