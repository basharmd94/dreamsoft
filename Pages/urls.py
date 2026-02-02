from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('fashion-shop-software/', views.fashion_shop_software, name='fashion_shop_software'),
]
