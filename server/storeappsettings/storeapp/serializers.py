from rest_framework import serializers
from .models import Category, Item


class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = ('id', 'category_name', 'category_desc')


class ItemsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Item
        fields = ('id', 'item_name', 'item_short_desc', 'is_item')


class ItemSerializer(serializers.ModelSerializer):

    class Meta:
        model = Item
        fields = ('item_name', 'item_desc', 'item_category', 'is_item')