from django.contrib.sitemaps import Sitemap
from django.db.models import Count, Q
from django.urls import reverse
from .models import BlogPost, Category


class StaticPageSitemap(Sitemap):
    changefreq = "weekly"
    priority = 0.9  

    def items(self):
        return [
            "home",
            "pos_software",
            "erp_software",
            "inventory_software",
            "accounting_software",
            "isp_billing_software",
            "fashion_shop_software",
            "resturant_pos_software",
            "supershop_pos_software",
            "electronics_shop_pos_software",
            "wholesale_shop_pos_software",
            "hardware_shop_pos_software",
            "hotel_management_software",
            "tailor_shop_software",
            "website_development",
            "software_development",
            "mobile_app_development",
            "ecommerce_development",
            "landing_page_development",
            "about_us",
            "contact_us",
            "blog_list",
        ]

    def location(self, item):
        return reverse(item)


class BlogPostSitemap(Sitemap):
    changefreq = "weekly"
    priority = 0.8

    def items(self):
        return BlogPost.objects.filter(status="published").order_by("-published_at")

    def lastmod(self, obj):
        return obj.updated_at


class BlogCategorySitemap(Sitemap):
    changefreq = "monthly"
    priority = 0.5

    def items(self):
        return Category.objects.annotate(
            published_count=Count("posts", filter=Q(posts__status="published"))
        ).filter(published_count__gt=0)

    def location(self, obj):
        return reverse("blog_category", kwargs={"slug": obj.slug})


sitemaps = {
    "pages": StaticPageSitemap,
    "blog-posts": BlogPostSitemap,
    "blog-categories": BlogCategorySitemap,
}