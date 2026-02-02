import os
import sys

# Add the project directory to the Python path
sys.path.insert(0, os.path.dirname(__file__))

# Set the Django settings module
os.environ['DJANGO_SETTINGS_MODULE'] = 'dreamppbd.settings'

# Import the WSGI handler from Django
from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()