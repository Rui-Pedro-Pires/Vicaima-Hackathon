# Generated by Django 5.0.6 on 2024-05-15 23:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_alter_form_field1_alter_form_field2'),
    ]

    operations = [
        migrations.AlterField(
            model_name='form',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
