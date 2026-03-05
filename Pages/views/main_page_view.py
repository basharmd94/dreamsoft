from django.shortcuts import render

# Create your views here.

def home(request):
    return render(request, 'Pages/index.html')

def fashion_shop_software(request):
    return render(request, 'Pages/fashion-shop-software.html')


def resturant_pos_software(request):
    return render(request, 'Pages/resturant-software.html')

def supershop_pos_software(request):
    return render(request, 'Pages/supershop-software.html')

def electronics_shop_pos_software(request):
    return render(request, 'Pages/electronics-software.html')

def wholesale_shop_pos_software(request):
    return render(request, 'Pages/wholesale-software.html')

def hardware_shop_pos_software(request):
    return render(request, 'Pages/hardware-software.html')

def hotel_management_software(request):
    return render(request, 'Pages/hotel-software.html')

def tailor_shop_software(request):
    return render(request, 'Pages/tailor-software.html')

def accounting_software(request):
    return render(request, 'Pages/accounting-software.html')

def inventory_software(request):
    return render(request, 'Pages/inventory-software.html')

def pos_software(request):
    return render(request, 'Pages/pos-software.html')

def erp_software(request):
    return render(request, 'Pages/erp-software.html')


def about_us(request):
    return render(request, 'Pages/about-us.html')

def contact_us(request):
    return render(request, 'Pages/contact-us.html')
