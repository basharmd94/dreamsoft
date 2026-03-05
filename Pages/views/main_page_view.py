from django.shortcuts import render

# Create your views here.

def home(request):
    return render(request, 'Pages/index.html')

def fashion_shop_software(request):
    return render(request, 'Pages/fashion-shop-software.html')


def resturant_pos_software(request):
    return render(request, 'Pages/resturant-pos-software.html')

def supershop_pos_software(request):
    return render(request, 'Pages/supershop-pos-software.html')

def electronics_shop_pos_software(request):
    return render(request, 'Pages/electronics-shop-pos-software.html')

def wholesale_shop_pos_software(request):
    return render(request, 'Pages/wholesale-shop-pos-software.html')

def hardware_shop_pos_software(request):
    return render(request, 'Pages/hardware-shop-pos-software.html')

def hotel_management_software(request):
    return render(request, 'Pages/hotel-management-software.html')

def tailor_software(request):
    return render(request, 'Pages/tailor-shop-software.html')

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
