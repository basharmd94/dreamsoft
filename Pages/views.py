from django.shortcuts import render

# Create your views here.

def home(request):
    return render(request, 'Pages/index.html')

def fashion_shop_software(request):
    return render(request, 'Pages/fashion-shop-software.html')
