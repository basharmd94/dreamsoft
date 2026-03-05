from django.urls import path
from .views import main_page_view

urlpatterns = [
    path('', main_page_view.home, name='home'),
    # isp billing software
    path('isp-billing-software/', main_page_view.isp_billing_software, name='isp_billing_software'),
    # fashion shop post software
    path('fashion-shop-software/', main_page_view.fashion_shop_software, name='fashion_shop_software'),
    # resturant post software
    path('resturant-pos-software/', main_page_view.resturant_pos_software, name='resturant_pos_software'),
    # supershop post software
    path('supershop-pos-software/', main_page_view.supershop_pos_software, name='supershop_pos_software'),
    # electronics shop post software
    path('electronics-shop-pos-software/', main_page_view.electronics_shop_pos_software, name='electronics_shop_pos_software'),
    # wholesale shop post software
    path('wholesale-shop-pos-software/', main_page_view.wholesale_shop_pos_software, name='wholesale_shop_pos_software'),
    # hardware shop post software
    path('hardware-shop-pos-software/', main_page_view.hardware_shop_pos_software, name='hardware_shop_pos_software'),
    # hotel management post software
    path('hotel-management-software/', main_page_view.hotel_management_software, name='hotel_management_software'),
    # tailor post software
    path('tailor-shop-software/', main_page_view.tailor_shop_software, name='tailor_shop_software'),
    # accounting post software
    path('accounting-software/', main_page_view.accounting_software, name='accounting_software'),
    # inventory post software
    path('inventory-software/', main_page_view.inventory_software, name='inventory_software'),
    # pos post software
    path('pos-software/', main_page_view.pos_software, name='pos_software'),
    path('erp-software/', main_page_view.erp_software, name='erp_software'),




    path('about-us/', main_page_view.about_us, name='about_us'),
    path('contact-us/', main_page_view.contact_us, name='contact_us'),
]
