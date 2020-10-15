from django.db import models

# Create your models here.


class Category(models.Model):
    
    category_name = models.CharField(max_length=50)
    category_desc = models.TextField()

    def __str__(self):
        return self.category_name
    
    def __repr__(self):
        return f'{self.category_name}'


class Item(models.Model):

    item_name = models.CharField(max_length=50)
    item_desc = models.TextField()
    item_short_desc = models.CharField(max_length=120)
    item_img_url = models.URLField(max_length=200)
    item_category = models.ForeignKey("storeapp.category", verbose_name=("Category "), on_delete=models.CASCADE)
    is_discount = models.ForeignKey("storeapp.discount", verbose_name=("Discount "), null=True, blank=True, on_delete=models.CASCADE)
    item_price = models.FloatField(default=0)
    is_item = models.BooleanField(default=True)

    def __str__(self):
        return self.item_name

    def __repr__(self):
        return f'{self.item_name}'


class Discount(models.Model):

    discount_value = models.FloatField()

    def __str__(self):
        return str(self.discount_value)
    
    def __repr__(self):
        return f'{self.discount_value}'


class ContactData(models.Model):

    phone_number = models.CharField(max_length=50)
    email = models.EmailField(max_length=100)
    street = models.CharField(max_length=50)

    def __str__(self):
        return f'Contact {self.phone_number}, {self.email}, {self.street}'

    def __repr__(self):
        return f'Contact data'
    

class EmailsFromUsers(models.Model):

    user_name = models.CharField(max_length=25)
    user_email = models.EmailField(max_length=255)
    message = models.TextField()

    def __str__(self):
        return self.user_email

    def __repr__(self):
        return self.user_email