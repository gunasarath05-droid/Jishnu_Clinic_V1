#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys

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

def main():
    """Run administrative tasks."""
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'jishnu_clinic_backend.settings')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)


if __name__ == '__main__':
    main()
