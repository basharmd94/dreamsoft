from django.shortcuts import render

# Create your views here.

def home(request):
    return render(request, 'Pages/index.html')

def fashion_shop_software(request):
    return render(request, 'Pages/fashion-shop-software.html')

def erp_software(request):
    return render(request, 'Pages/erp-software.html')


def about_us(request):
    return render(request, 'Pages/about-us.html')

def contact_us(request):
    return render(request, 'Pages/contact-us.html')
