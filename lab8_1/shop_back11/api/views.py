from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from .models import Product, Category


def product_list(request):
    products = Product.objects.all()
    data = {'products': list(products.values())}
    return JsonResponse(data)


def product_detail(request, product_id=None):  
    try:
        product = Product.objects.get(id=product_id)
        data = {'product': {
            'name': product.name,
            'price': product.price,
            'description': product.description,
            'count': product.count,
            'is_active': product.is_active,
            'category': product.category.name
        }}
        return JsonResponse(data)
    except Product.DoesNotExist as e:
        return JsonResponse({
            'error': 'No such product'
        })

def category_list(request):
    categories = Category.objects.all()
    data = {'categories': list(categories.values())}
    return JsonResponse(data)


def category_detail(request, category_id=None): 
    #added propererror message
    try:
        category = Category.objects.get(id=category_id)
        return JsonResponse(category.to_json())
    except Category.DoesNotExist as e:
        return JsonResponse({
            'error': str(e) #or any message
        })
    #replaced creating dictionary here

def category_products(request, category_id):
    category = get_object_or_404(Category, id=category_id)
    products = category.product_set.all()
    data = {'products': list(products.values())}
    return JsonResponse(data)