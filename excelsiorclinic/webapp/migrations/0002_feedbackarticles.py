# Generated by Django 3.2 on 2021-04-09 16:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('webapp', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='FeedbackArticles',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('message', models.CharField(max_length=256)),
                ('user', models.CharField(max_length=20)),
                ('creted_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
