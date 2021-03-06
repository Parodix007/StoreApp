# Generated by Django 3.1.2 on 2020-10-11 16:45

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('storeapp', '0002_auto_20201011_1839'),
    ]

    operations = [
        migrations.CreateModel(
            name='Discount',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('discount_value', models.FloatField()),
            ],
        ),
        migrations.DeleteModel(
            name='Costam',
        ),
        migrations.AddField(
            model_name='item',
            name='is_discount',
            field=models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, to='storeapp.discount', verbose_name='Discount '),
        ),
    ]
