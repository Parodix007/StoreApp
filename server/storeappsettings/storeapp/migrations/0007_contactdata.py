# Generated by Django 3.1.2 on 2020-10-15 19:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('storeapp', '0006_auto_20201011_1857'),
    ]

    operations = [
        migrations.CreateModel(
            name='ContactData',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('phone_number', models.CharField(max_length=50)),
                ('email', models.EmailField(max_length=100)),
                ('street', models.CharField(max_length=50)),
            ],
        ),
    ]