from pymongo import MongoClient

client = MongoClient('mongodb+srv://gunasarath2_db_user:mvGNbDRdbithSvzA@cluster0.ffujos9.mongodb.net/?retryWrites=true&w=majority&connectTimeoutMS=5000&serverSelectionTimeoutMS=5000')
db = client['jishnu_clinic']

print("Collections in database:")
for coll_name in db.list_collection_names():
    count = db[coll_name].count_documents({})
    print(f"- {coll_name}: {count} documents")
    if count > 0 and 'blog' in coll_name.lower():
        print(f"  Example: {db[coll_name].find_one()}")
