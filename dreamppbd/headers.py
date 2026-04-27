# dreamappbd/headers.py
import re

def add_cache_headers(headers, path, url):
    """
    Add efficient cache-control headers for static assets.
    - Versioned files (with hash): Cache forever (immutable)
    - Non-versioned files: Short cache for safety
    """
    # Matches files like: main.abc123.js, style.def456.css, logo.789.webp
    VERSIONED_PATTERN = re.compile(r'\.[a-f0-9]{8,}\.(js|css|png|jpg|jpeg|webp|svg|gif|ico|woff|woff2|ttf|eot)$')
    
    if VERSIONED_PATTERN.search(path):
        # ✅ Versioned file: Cache forever, never revalidate
        headers['Cache-Control'] = 'public, max-age=31536000, immutable'
    elif path.endswith(('.js', '.css', '.png', '.jpg', '.webp', '.svg', '.gif', '.ico')):
        # ⚠️ Non-versioned: Cache for 1 day
        headers['Cache-Control'] = 'public, max-age=86400'
    # Else: Let WhiteNoise use default headers