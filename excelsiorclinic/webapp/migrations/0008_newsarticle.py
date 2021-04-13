# Generated by Django 3.1.7 on 2021-04-13 13:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('webapp', '0007_auto_20210413_1532'),
    ]

    operations = [
        migrations.CreateModel(
            name='NewsArticle',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('text', models.CharField(max_length=500)),
                ('cover_image', models.ImageField(upload_to='news_article_cover')),
                ('created_at', models.DateField(auto_now_add=True)),
            ],
        ),
    ]
