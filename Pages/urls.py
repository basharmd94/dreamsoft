from django.urls import path
from .views import main_page_view

urlpatterns = [
    path('', main_page_view.home, name='home'),
    path('fashion-shop-software/', main_page_view.fashion_shop_software, name='fashion_shop_software'),
    path('erp-software/', main_page_view.erp_software, name='erp_software'),
    path('about-us/', main_page_view.about_us, name='about_us'),
    path('contact-us/', main_page_view.contact_us, name='contact_us'),
]
