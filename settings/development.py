<<<<<<< HEAD
import os
import dj_database_url
=======
>>>>>>> origin/main
from .base import *  # NOQA
from dotenv import load_dotenv
load_dotenv() 
INSTALLED_APPS += [
    # "debug_toolbar",
]

MIDDLEWARE += [
    # "debug_toolbar.middleware.DebugToolbarMiddleware",
]

BASE_URL = WAGTAILADMIN_BASE_URL = "http://localhost:8000"

LOGGING = {
    "version": 1,
    "disable_existing_loggers": False,
    "handlers": {
        "console": {
            "class": "logging.StreamHandler",
        },
    },
}

DEBUG = True

# Django should serve static, frontend service (npm run start) will auto rebuild
STORAGES["staticfiles"] = {  # noqa: F405
    "BACKEND": "django.contrib.staticfiles.storage.StaticFilesStorage"
}

# Project has no docker-compose, use filesystem for media
STORAGES["default"] = {
    "BACKEND": "django.core.files.storage.FileSystemStorage"
}
STATIC_URL = "/static/"
STATIC_ROOT = "/static/"

# Project has no docker-compose, use filesystem for media
#STORAGES["default"] = {  # noqa: F405
#    "BACKEND": "django.core.files.storage.FileSystemStorage"
#}
MEDIA_ROOT = os.getenv("MEDIA_ROOT", BASE_DIR / "media")
MEDIA_URL = "/media/"


EMAIL_BACKEND = "django.core.mail.backends.console.EmailBackend"

<<<<<<< HEAD
# This production code might break development mode, so we check whether we're in DEBUG mode
if not DEBUG:
    # Tell Django to copy static assets into a path called `staticfiles` (this is specific to Render)
    STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')

    # Enable the WhiteNoise storage backend, which compresses static files to reduce disk use
    # and renames the files with unique names for each version to support long-term caching
    STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'

try:
    from .local import *  # NOQA
except ImportError:
    pass
=======
>>>>>>> origin/main
