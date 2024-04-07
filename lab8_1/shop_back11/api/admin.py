from django.contrib import admin
from .models import Product, Category

# Register your models here.
#admin.site.register(Product)

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('id','name', 'price', 'description', 'count', 'is_active', 'category',)
    search_fields = ('name', 'description')

#admin.site.register(Category)

@admin.register(Category)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('id','name')
    search_fields = ('name',)