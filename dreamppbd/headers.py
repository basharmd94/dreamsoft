# dreamppbd/headers.py  ← Create this file next to settings.py
import re

def add_cache_headers(headers, path, url):
    """
    Add efficient cache-control headers for static assets.
    
    - Versioned files (with hash): Cache forever (immutable)
    - Non-versioned files: Short cache for safety
    """
    # Pattern: files with content hash like main.abc123.js or style.def456.css
    VERSIONED_PATTERN = re.compile(r'\.[a-f0-9]{8,}\.(js|css|png|jpg|jpeg|webp|svg|gif|ico|woff|woff2|ttf|eot)$')
    
    if VERSIONED_PATTERN.search(path):
        # ✅ Versioned file: Cache forever, browser will re-request only if hash changes
        headers['Cache-Control'] = 'public, max-age=31536000, immutable'
    elif path.endswith(('.js', '.css', '.png', '.jpg', '.webp', '.svg', '.gif', '.ico')):
        # ⚠️ Non-versioned static asset: Cache for 1 day (safe fallback)
        headers['Cache-Control'] = 'public, max-age=86400'  # 1 day
    # Else: Let WhiteNoise use default headers