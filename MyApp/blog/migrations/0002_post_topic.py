# Generated by Django 4.1.3 on 2023-05-24 01:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='topic',
            field=models.CharField(default='Новости', max_length=50),
        ),
    ]
