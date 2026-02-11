from django.apps import AppConfig


class ApiConfig(AppConfig):
    default_auto_field = 'django_mongodb_backend.fields.ObjectIdAutoField'
    name = 'api'

    def ready(self):
        from jishnu_clinic_backend.settings import fix_all_models
        fix_all_models()
