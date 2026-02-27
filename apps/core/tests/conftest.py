import pytest
from wagtail.models import Site

from .factories import HomePageFactory


@pytest.fixture()
def home_page():
    site = Site.objects.get()
    home_page = HomePageFactory()
    site.root_page = home_page
    site.save()
    return home_page

@pytest.fixture(scope="session", autouse=True)
def django_db_setup():
    """Set up temporary PostgreSQL credentials for the test session."""
    from settings.base import DATABASES
    from django.conf import settings

    settings.DATABASES["default"].update(DATABASES["default"])
