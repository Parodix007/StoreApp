from django.db import models

# Create your models here.


class Category(models.Model):
    
    category_name = models.CharField(max_length=50)
    category_desc = models.TextField()

    def __str__(self):
        return self.category_name
    
    def __repr__(self):
        return f'Model of Category: {self.category_name}'


class Item(models.Model):

    item_name = models.CharField(max_length=50)
    item_desc = models.CharField(max_length=255)
    item_category = models.ForeignKey("storeapp.category", verbose_name=("Category "), on_delete=models.CASCADE)
    is_item = models.BooleanField()

    def __str__(self):
        return self.item_name

    def __repr__(self):
        return f'Model of Item: {self.item_name}'
    