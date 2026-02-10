"""
WSGI config for jishnu_clinic_backend project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/6.0/howto/deployment/wsgi/
"""

import os

# --- MongoDB Compatibility Patches ---
try:
    from django.db.models import Model
    def safe_hash(self):
        if not hasattr(self, 'pk') or self.pk is None:
            return id(self)
        try:
            return hash(self.pk)
        except TypeError:
            return id(self)
    Model.__hash__ = safe_hash

    _original_init = Model.__init__
    def safe_init(self, *args, **kwargs):
        _original_init(self, *args, **kwargs)
        if hasattr(self, '_id') and (not hasattr(self, 'pk') or self.pk is None):
            self.pk = self._id
    Model.__init__ = safe_init
except ImportError:
    pass
# ------------------------------------

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'jishnu_clinic_backend.settings')

application = get_wsgi_application()
