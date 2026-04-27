from django.contrib.sitemaps import Sitemap
from django.db.models import Count, Q
from django.urls import reverse

from .models import BlogPost, Category, Tag


class StaticPageSitemap(Sitemap):
    # Core marketing and company pages change infrequently, so monthly is appropriate.
    changefreq = "monthly"
    priority = 0.8

    def items(self):
        # Keep only canonical destination URLs so redirects are not indexed as sitemap entries.
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
        # Reverse named URLs to avoid hard-coded paths and keep route changes safe.
        return reverse(item)


class BlogPostSitemap(Sitemap):
    # Blog details are updated more frequently than static pages.
    changefreq = "weekly"
    priority = 0.7

    def items(self):
        # Only include published posts to prevent indexing drafts and archived content.
        return BlogPost.objects.filter(status="published").order_by("-published_at")

    def lastmod(self, obj):
        # Use updated_at so search engines recrawl when an existing post is edited.
        return obj.updated_at


class BlogCategorySitemap(Sitemap):
    # Category listing pages are useful discovery pages but less important than detail pages.
    changefreq = "weekly"
    priority = 0.6

    def items(self):
        # Include only categories that currently have at least one published post.
        return Category.objects.annotate(
            published_count=Count("posts", filter=Q(posts__status="published"))
        ).filter(published_count__gt=0)

    def location(self, obj):
        # Category URLs are dynamic and need slug-based reversing.
        return reverse("blog_category", kwargs={"slug": obj.slug})


class BlogTagSitemap(Sitemap):
    # Tag listing pages can change frequently with editorial updates.
    changefreq = "weekly"
    priority = 0.5

    def items(self):
        # Include only tags that currently have at least one published post.
        return Tag.objects.annotate(
            published_count=Count("posts", filter=Q(posts__status="published"))
        ).filter(published_count__gt=0)

    def location(self, obj):
        # Tag URLs are dynamic and need slug-based reversing.
        return reverse("blog_tag", kwargs={"slug": obj.slug})


sitemaps = {
    # Group sitemap sections so Django automatically serves a combined sitemap index.
    "pages": StaticPageSitemap,
    "blog-posts": BlogPostSitemap,
    "blog-categories": BlogCategorySitemap,
    "blog-tags": BlogTagSitemap,
}
