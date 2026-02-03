#!/usr/bin/env bash
# Exit on error
set -o errexit
python manage.py collectstatic --no-input
# Apply any outstanding database migrations
python manage.py makemigrations
python manage.py migrate --settings=settings.render-test