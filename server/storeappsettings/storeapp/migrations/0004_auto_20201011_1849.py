# Generated by Django 3.1.2 on 2020-10-11 16:49

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('storeapp', '0003_auto_20201011_1845'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='is_discount',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='storeapp.discount', verbose_name='Discount '),
        ),
    ]
