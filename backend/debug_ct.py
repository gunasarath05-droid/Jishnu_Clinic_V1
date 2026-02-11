import os
import django

def check_content_type():
    from django.contrib.contenttypes.models import ContentType
    from django.contrib.auth.models import Permission
    import pymongo
    
    print("--- ContentType Inspection ---")
    ct = ContentType.objects.first()
    
    if not ct:
        print("No ContentType found in Django.")
        # Check raw Mongo
        client = pymongo.MongoClient('mongodb+srv://gunasarath2_db_user:mvGNbDRdbithSvzA@cluster0.ffujos9.mongodb.net/?retryWrites=true&w=majority')
        db = client['jishnu_clinic']
        raw_ct = db['django_content_type'].find_one()
        print(f"Raw CT from Mongo: {raw_ct}")
        return

    print(f"CT: {ct}")
    print(f"PK: {ct.pk}")
    print(f"ADDING: {ct._state.adding}")
    print(f"PK Field Type: {type(ct._meta.pk)}")
    print(f"PK Field DB Column: {ct._meta.pk.db_column}")
    print(f"Dict keys: {ct.__dict__.keys()}")
    
    if 'id' in ct.__dict__:
        print(f"id in dict: {ct.id}")
    if '_id' in ct.__dict__:
        print(f"_id in dict: {ct._id}")

    # Simulate the failing filter
    try:
        print("\nAttempting to filter Permission with CT...")
        p = Permission.objects.filter(content_type=ct).first()
        print(f"Filter success: {p}")
    except Exception as e:
        print(f"Filter failed: {e}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'jishnu_clinic_backend.settings')
    django.setup()

    from jishnu_clinic_backend.settings import fix_all_models
    fix_all_models()
    
    check_content_type()
