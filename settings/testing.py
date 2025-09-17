from .base import *  # NOQA


SECRET_KEY = "CHANGEME!!!"

DATABASES["default"]["USER"] = "postgres"
DATABASES["default"]["PASSWORD"] = "postgres"
DATABASES["default"]["HOST"] = "localhost"
