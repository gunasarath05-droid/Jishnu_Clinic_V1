from django.db import models

class Contact(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField()
    subject = models.CharField(max_length=200)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name} - {self.subject}"

class Appointment(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    phone = models.CharField(max_length=20)
    email = models.EmailField()
    department = models.CharField(max_length=100)
    preferred_doctor = models.CharField(max_length=100)
    preferred_date = models.DateField()
    preferred_time = models.TimeField()
    reason = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Appointment: {self.first_name} {self.last_name} on {self.preferred_date}"

class BlogPost(models.Model):
    title = models.CharField(max_length=200)
    category = models.CharField(max_length=100)
    catColor = models.CharField(max_length=50, default='bg-blue-100 text-blue-600')
    author = models.CharField(max_length=100)
    avatar = models.URLField(max_length=500, blank=True, null=True)
    image = models.URLField(max_length=500)
    content = models.TextField() # Rich text or HTML
    date = models.DateField()
    
    def __str__(self):
        return self.title
