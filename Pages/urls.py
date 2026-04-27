from django.urls import path, include
from django.contrib.sitemaps.views import sitemap
from django.views.generic import RedirectView
from .views import main_page_view, blog_view
from .sitemap import sitemaps

urlpatterns = [

    # =========================
    # HOME
    # =========================
    path('', main_page_view.home, name='home'),


    # =========================
    # SOFTWARE (ALL PAGES)
    # =========================
    

    path('software/pos-software-bangladesh/', main_page_view.pos_software, name='pos_software'),
    path('software/erp-software-bangladesh/', main_page_view.erp_software, name='erp_software'),
    path('software/inventory-management-software-bangladesh/', main_page_view.inventory_software, name='inventory_software'),
    path('software/accounting-software-bangladesh/', main_page_view.accounting_software, name='accounting_software'),
    path('software/isp-billing-software-bangladesh/', main_page_view.isp_billing_software, name='isp_billing_software'),

    path('software/fashion-shop-software-bangladesh/', main_page_view.fashion_shop_software, name='fashion_shop_software'),
    path('software/restaurant-pos-software-bangladesh/', main_page_view.resturant_pos_software, name='resturant_pos_software'),
    path('software/supershop-pos-software-bangladesh/', main_page_view.supershop_pos_software, name='supershop_pos_software'),
    path('software/electronics-shop-pos-software-bangladesh/', main_page_view.electronics_shop_pos_software, name='electronics_shop_pos_software'),
    path('software/wholesale-shop-pos-software-bangladesh/', main_page_view.wholesale_shop_pos_software, name='wholesale_shop_pos_software'),
    path('software/hardware-shop-pos-software-bangladesh/', main_page_view.hardware_shop_pos_software, name='hardware_shop_pos_software'),
    path('software/hotel-management-software-bangladesh/', main_page_view.hotel_management_software, name='hotel_management_software'),
    path('software/tailor-shop-software-bangladesh/', main_page_view.tailor_shop_software, name='tailor_shop_software'),


    # =========================
    # SERVICES
    # =========================

    path('services/website-development-bangladesh/', main_page_view.website_development, name='website_development'),
    path('services/software-development-bangladesh/', main_page_view.software_development, name='software_development'),
    path('services/mobile-app-development-bangladesh/', main_page_view.mobile_app_development, name='mobile_app_development'),
    path('services/ecommerce-development-bangladesh/', main_page_view.ecommerce_development, name='ecommerce_development'),
    path('services/landing-page-development-bangladesh/', main_page_view.landing_page_development, name='landing_page_development'),


    # =========================
    # COMPANY
    # =========================

    path('about-us/', main_page_view.about_us, name='about_us'),
    path('contact-us/', main_page_view.contact_us, name='contact_us'),


    # =========================
    # BLOG
    # =========================

    path('blog/', blog_view.blog_list, name='blog_list'),
    path('blog/category/<slug:slug>/', blog_view.blog_category, name='blog_category'),
    path('blog/tag/<slug:slug>/', blog_view.blog_tag, name='blog_tag'),
    path('blog/<slug:slug>/', blog_view.blog_detail, name='blog_detail'),
    # XML sitemap endpoint for search engines.
    path('sitemap.xml', sitemap, {'sitemaps': sitemaps}, name='django.contrib.sitemaps.views.sitemap'),
    # Plain-text robots endpoint with absolute sitemap URL for production crawlers.
    path('robots.txt', main_page_view.robots_txt, name='robots_txt'),


    # =========================
    # FULL 301 REDIRECTS (COMPLETE OLD → NEW MAP)
    # =========================

    # CORE SOFTWARE
    path('pos-software/', RedirectView.as_view(url='/software/pos-software-bangladesh/', permanent=True)),
    path('erp-software/', RedirectView.as_view(url='/software/erp-software-bangladesh/', permanent=True)),
    path('inventory-software/', RedirectView.as_view(url='/software/inventory-management-software-bangladesh/', permanent=True)),
    path('accounting-software/', RedirectView.as_view(url='/software/accounting-software-bangladesh/', permanent=True)),
    path('isp-billing-software/', RedirectView.as_view(url='/software/isp-billing-software-bangladesh/', permanent=True)),


    # INDUSTRY SOFTWARE
    path('fashion-shop-software/', RedirectView.as_view(url='/software/fashion-shop-software-bangladesh/', permanent=True)),
    path('restaurant-pos-software/', RedirectView.as_view(url='/software/restaurant-pos-software-bangladesh/', permanent=True)),
    path('supershop-pos-software/', RedirectView.as_view(url='/software/supershop-pos-software-bangladesh/', permanent=True)),
    path('electronics-shop-pos-software/', RedirectView.as_view(url='/software/electronics-shop-pos-software-bangladesh/', permanent=True)),
    path('wholesale-shop-pos-software/', RedirectView.as_view(url='/software/wholesale-shop-pos-software-bangladesh/', permanent=True)),
    path('hardware-shop-pos-software/', RedirectView.as_view(url='/software/hardware-shop-pos-software-bangladesh/', permanent=True)),
    path('hotel-management-software/', RedirectView.as_view(url='/software/hotel-management-software-bangladesh/', permanent=True)),
    path('tailor-shop-software/', RedirectView.as_view(url='/software/tailor-shop-software-bangladesh/', permanent=True)),


    # SERVICES (OLD → NEW CLEAN STRUCTURE)
    path('website-development/', RedirectView.as_view(url='/services/website-development-bangladesh/', permanent=True)),
    path('software-development/', RedirectView.as_view(url='/services/software-development-bangladesh/', permanent=True)),
    path('mobile-app-development/', RedirectView.as_view(url='/services/mobile-app-development-bangladesh/', permanent=True)),
    path('ecommerce-development/', RedirectView.as_view(url='/services/ecommerce-development-bangladesh/', permanent=True)),
    path('landing-page-development/', RedirectView.as_view(url='/services/landing-page-development-bangladesh/', permanent=True)),
]
