#!/usr/bin/env bash
# Exit on error
set -o errexit
# Apply any outstanding database migrations
python manage.py makemigrations
python manage.py migrate