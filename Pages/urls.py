from django.urls import path
from .views import main_page_view

urlpatterns = [
    path('', main_page_view.home, name='home'),
    path('fashion-shop-software/', main_page_view.fashion_shop_software, name='fashion_shop_software'),
    path('erp-software/', main_page_view.erp_software, name='erp_software'),
]
