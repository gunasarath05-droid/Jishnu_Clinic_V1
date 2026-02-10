from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ContactViewSet, AppointmentViewSet, BlogPostViewSet

router = DefaultRouter()
router.register(r'contacts', ContactViewSet)
router.register(r'appointments', AppointmentViewSet)
router.register(r'blogs', BlogPostViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
