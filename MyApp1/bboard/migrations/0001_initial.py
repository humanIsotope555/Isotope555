# Generated by Django 4.1.3 on 2022-12-22 09:00

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Request',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.CharField(max_length=30)),
                ('first_name', models.CharField(max_length=30)),
                ('tell_number', models.CharField(max_length=30)),
            ],
        ),
    ]
