from django.shortcuts import render, get_object_or_404
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.db.models import Q, Count
from ..models import BlogPost, Category, Tag

def get_common_context():
    """Helper to get common sidebar content"""
    categories = Category.objects.annotate(post_count=Count('posts', filter=Q(posts__status='published'))).filter(post_count__gt=0).order_by('-post_count')
    recent_posts = BlogPost.objects.filter(status='published').order_by('-published_at')[:5]
    tags = Tag.objects.annotate(post_count=Count('posts', filter=Q(posts__status='published'))).filter(post_count__gt=0).order_by('-post_count')[:10]
    return {
        'categories': categories,
        'recent_posts': recent_posts,
        'tags': tags,
    }

def blog_list(request):
    search_query = request.GET.get('q')
    posts_list = BlogPost.objects.filter(status='published')

    if search_query:
        posts_list = posts_list.filter(
            Q(title__icontains=search_query) |
            Q(content__icontains=search_query) |
            Q(excerpt__icontains=search_query)
        ).distinct()

    paginator = Paginator(posts_list, 10) # 10 posts per page
    page = request.GET.get('page')
    
    try:
        posts = paginator.page(page)
    except PageNotAnInteger:
        posts = paginator.page(1)
    except EmptyPage:
        posts = paginator.page(paginator.num_pages)

    context = get_common_context()
    context.update({
        'posts': posts,
        'search_query': search_query,
        'is_search': bool(search_query),
        'page_title': f"Search Results for '{search_query}'" if search_query else "Latest Insights & Updates"
    })
    
    return render(request, 'Pages/blog/blog_list.html', context)

def blog_category(request, slug):
    category = get_object_or_404(Category, slug=slug)
    posts_list = BlogPost.objects.filter(status='published', category=category)
    
    paginator = Paginator(posts_list, 10)
    page = request.GET.get('page')
    
    try:
        posts = paginator.page(page)
    except PageNotAnInteger:
        posts = paginator.page(1)
    except EmptyPage:
        posts = paginator.page(paginator.num_pages)

    context = get_common_context()
    context.update({
        'posts': posts,
        'current_category': category,
        'page_title': f"Category: {category.name}"
    })
    
    return render(request, 'Pages/blog/blog_list.html', context)

def blog_tag(request, slug):
    tag = get_object_or_404(Tag, slug=slug)
    posts_list = BlogPost.objects.filter(status='published', tags=tag)
    
    paginator = Paginator(posts_list, 10)
    page = request.GET.get('page')
    
    try:
        posts = paginator.page(page)
    except PageNotAnInteger:
        posts = paginator.page(1)
    except EmptyPage:
        posts = paginator.page(paginator.num_pages)

    context = get_common_context()
    context.update({
        'posts': posts,
        'current_tag': tag,
        'page_title': f"Tag: {tag.name}"
    })
    
    return render(request, 'Pages/blog/blog_list.html', context)

def blog_detail(request, slug):
    post = get_object_or_404(BlogPost, slug=slug, status='published')
    
    # Increment view count
    # Use F expression to avoid race conditions, but session check is better to avoid refresh spam
    session_key = f'viewed_post_{post.id}'
    if not request.session.get(session_key, False):
        post.views_count += 1
        post.save(update_fields=['views_count'])
        request.session[session_key] = True

    # Similar posts logic: match category OR tags
    related_posts = BlogPost.objects.filter(
        status='published'
    ).exclude(id=post.id).filter(
        Q(category=post.category) | Q(tags__in=post.tags.all())
    ).distinct().order_by('-published_at')[:3]

    context = get_common_context()
    context.update({
        'post': post,
        'related_posts': related_posts,
        'meta_description': post.meta_description,
        'meta_keywords': post.meta_keywords,
    })
    
    return render(request, 'Pages/blog/blog_detail.html', context)
