from django.contrib import admin
from .models import Contact, Appointment, BlogPost

@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'email', 'subject', 'created_at')
    search_fields = ('first_name', 'last_name', 'email', 'subject')

@admin.register(Appointment)
class AppointmentAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'preferred_date', 'preferred_time', 'department')
    list_filter = ('department', 'preferred_date')
    search_fields = ('first_name', 'last_name', 'email')

@admin.register(BlogPost)
class BlogPostAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'category', 'date')
    list_filter = ('category', 'author')
    search_fields = ('title', 'content')
