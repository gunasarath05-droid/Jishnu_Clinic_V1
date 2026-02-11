import os
import django
from django.contrib.auth import authenticate

def test_login():
    from django.contrib.auth.models import User
    
    # Try to get the admin user
    user = User.objects.filter(is_superuser=True).first()
    if not user:
        print("No superuser found. Please create one.")
        return

    print(f"Testing login for user: {user.username}")
    print(f"User PK: {user.pk}")
    print(f"User ID from dict: {user.__dict__.get('id')}")
    print(f"User _id from dict: {user.__dict__.get('_id')}")
    
    # Try to save the user to test the PK update check
    try:
        user.save()
        print("User.save() successful!")
    except Exception as e:
        print(f"User.save() failed: {e}")

if __name__ == "__main__":
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'jishnu_clinic_backend.settings')
    django.setup()
    
    # The fix_all_models should have run during setup/apps loading
    test_login()
