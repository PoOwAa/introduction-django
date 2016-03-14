from django.contrib import admin
from .models import User, Question, Choice

# Register your models here.


admin.site.register(User)
admin.site.register(Question)
admin.site.register(Choice)