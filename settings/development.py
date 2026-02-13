from .base import *  # NOQA
from dotenv import load_dotenv
load_dotenv()


INSTALLED_APPS += [
    # "debug_toolbar",
]

MIDDLEWARE += [
    # "debug_toolbar.middleware.DebugToolbarMiddleware",
]

# Replace the SQLite DATABASES configuration with PostgreSQL:
# DATABASES = {
#     'default': dj_database_url.config(
#         # Replace this value with your local database's connection string.
#         #default='postgresql://klimaathelpdeskdev_user:jRrv7yfoUkVI5Xt437CU43PS9SfXEHlo@dpg-cvr7nsvgi27c738n8log-a.frankfurt-postgres.render.com/klimaathelpdeskdev',
#         default='postgresql://klimaathelpdeskdev_user:jRrv7yfoUkVI5Xt437CU43PS9SfXEHlo@dpg-cvr7nsvgi27c738n8log-a/klimaathelpdeskdev',
#         conn_max_age=600
#     )
# }

ALLOWED_HOSTS = ['test.klimaathelpdesk.org', 'localhost' ]
RENDER_EXTERNAL_HOSTNAME = os.environ.get('RENDER_EXTERNAL_HOSTNAME')
if RENDER_EXTERNAL_HOSTNAME:
    ALLOWED_HOSTS.append(RENDER_EXTERNAL_HOSTNAME)

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = "CHANGEME!!!"

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

# Django should serve static, frontend service (npm run start) will auto rebuild
STORAGES["staticfiles"] = {  # noqa: F405
    "BACKEND": "django.contrib.staticfiles.storage.StaticFilesStorage"
}
STATIC_URL = "/static/"
STATIC_ROOT = "/static/"

# Project has no docker-compose, use filesystem for media
STORAGES["default"] = {  # noqa: F405
    "BACKEND": "django.core.files.storage.FileSystemStorage"
}
MEDIA_ROOT = BASE_DIR / "media"
MEDIA_URL = "/media/"


EMAIL_BACKEND = "django.core.mail.backends.console.EmailBackend"

