from rest_framework import serializers
from .models import Contact, Appointment, BlogPost

class ContactSerializer(serializers.ModelSerializer):
    id = serializers.CharField(read_only=True)
    class Meta:
        model = Contact
        fields = '__all__'

class AppointmentSerializer(serializers.ModelSerializer):
    id = serializers.CharField(read_only=True)
    class Meta:
        model = Appointment
        fields = '__all__'

class BlogPostSerializer(serializers.ModelSerializer):
    id = serializers.CharField(read_only=True)
    class Meta:
        model = BlogPost
        fields = '__all__'
