from django.contrib import admin
from .models import Category, Item, Discount, ContactData, EmailsFromUsers
# Register your models here.

#* Modele bazy danych ktore sie dodaje do panelu Admina 

admin.site.register(Category)
admin.site.register(Item)
admin.site.register(Discount)
admin.site.register(ContactData)
admin.site.register(EmailsFromUsers)