import os
import django
from datetime import datetime

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'jishnu_clinic_backend.settings')
django.setup()

from api.models import BlogPost

# Clear existing blogs to ensure only seeded data exists
print("Purging existing blogs...")
BlogPost.objects.all().delete()
print("Purged.")

blogs = [
    {
        "id": 1,
        "title": 'Discover How AI-Powered Stethoscopes Are Transforming',
        "image": 'https://img.freepik.com/free-photo/stethoscope-medical-equipment_1150-14324.jpg',
        "date": '10 Feb 2025',
        "author": 'Dr. Hamida Jannat',
        "avatar": 'https://img.freepik.com/free-photo/portrait-smiling-handsome-male-doctor-man_171337-5055.jpg?w=100',
        "category": 'Medical Tech',
        "catColor": 'bg-blue-100 text-blue-600',
        "content": """
            <p>The stethoscope, a symbol of the medical profession for over two centuries, is undergoing a radical digital transformation. Artificial Intelligence (AI) is breathing new life into this classic tool, turning it into a powerful diagnostic device capable of detecting subtle cardiac abnormalities that the human ear might miss.</p>
            <br/>
            <h3 class="text-xl font-bold text-gray-900 mb-2">The Digital Revolution in Auscultation</h3>
            <p>Traditional stethoscopes rely entirely on the physician's hearing and experience. However, AI-powered digital stethoscopes amplify heart and lung sounds, filter out background noise, and use sophisticated algorithms to analyze audio waveforms in real-time. This allows for earlier detection of murmurs, arrhythmias, and valve diseases.</p>
            <br/>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Key Benefits</h3>
            <ul class="list-disc pl-5 space-y-2">
                <li><strong>Enhanced Precision:</strong> AI algorithms can identify specific sound patterns associated with different pathologies with high accuracy.</li>
                <li><strong>Remote Monitoring:</strong> Patients can record their own heart sounds at home and transmit the data to their cardiologist for analysis.</li>
                <li><strong>Visualizing Sound:</strong> Many digital stethoscopes pair with mobile apps that visualize sound waves (phonocardiograms), providing a visual aid for diagnosis.</li>
            </ul>
            <br/>
            <p>As this technology becomes more accessible, it promises to democratize cardiac care, making high-quality screening available even in remote and underserved areas.</p>
        """
    },
    {
        "id": 2,
        "title": 'The Role of Precision Medicine and Genomics',
        "image": 'https://img.freepik.com/free-photo/doctor-working-hospital-healthcare-medical-concept_1423-146.jpg',
        "date": '01 Jan 2025',
        "author": 'Dr. Hamida Jannat',
        "avatar": 'https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?w=100',
        "category": 'Genomics',
        "catColor": 'bg-indigo-100 text-indigo-600',
        "content": """
            <p>Precision medicine is shifting the paradigm of healthcare from a "one-size-fits-all" approach to one that is tailored to individual variability in genes, environment, and lifestyle. At the heart of this shift is genomics—the study of a person's complete set of DNA.</p>
            <br/>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Targeted Treatments</h3>
            <p>By analyzing a patient's genetic makeup, doctors can predict which treatments will be most effective and which might cause adverse reactions. This is particularly transformative in oncology, where genetic profiling of tumors helps oncologists select drugs that specifically target cancer cells while sparing healthy tissue.</p>
            <br/>
            <p>Furthermore, pharmacogenomics is helping to determine the optimal dosage of medications, reducing the risk of overdose or inefficacy. As the cost of DNA sequencing continues to drop, precision medicine is becoming a standard part of clinical practice.</p>
        """
    },
    {
        "id": 3,
        "title": 'How Technology-Enabled Support is Improving Life Quality',
        "image": 'https://img.freepik.com/free-photo/senior-woman-doctor-appointment_23-2148754160.jpg',
        "date": '24 Mar 2025',
        "author": 'Dr. Hamida Jannat',
        "avatar": 'https://img.freepik.com/free-photo/portrait-smiling-medical-worker-girl-doctor-white-coat-holding-clipboard-writing-notes-prescr_1258-88195.jpg?w=100',
        "category": 'Patient Care',
        "catColor": 'bg-green-100 text-green-600',
        "content": """
            <p>For patients with chronic conditions or those recovering from surgery, technology-enabled support systems are a lifeline. From wearable devices that monitor vital signs to mobile apps that remind patients to take their medication, technology is empowering individuals to take control of their health.</p>
            <br/>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Connecting Patients and Providers</h3>
            <p>Telehealth platforms allow for continuous communication between patients and their care teams. This constant loop of feedback ensures that any deterioration in a patient's condition is caught early, preventing hospital readmissions. Moreover, virtual support groups and mental health apps are addressing the psychological aspects of chronic illness, providing holistic care that improves overall quality of life.</p>
        """
    },
    {
        "id": 4,
        "title": 'Telemedicine Revolution: Healthcare Access for Everyone',
        "image": 'https://img.freepik.com/free-photo/doctor-using-digital-tablet-with-stethoscope_1423-3.jpg',
        "date": '15 Feb 2025',
        "author": 'Dr. Mehidi Hasan',
        "avatar": 'https://img.freepik.com/free-photo/portrait-smiling-handsome-male-doctor-man_171337-5055.jpg?w=100',
        "category": 'Telemedicine',
        "catColor": 'bg-purple-100 text-purple-600',
        "content": """
            <p>Telemedicine has emerged as a game-changer in modern healthcare, breaking down geographical barriers and making quality medical care accessible to patients regardless of their location. The COVID-19 pandemic accelerated the adoption of telehealth services, and it's now an integral part of healthcare delivery.</p>
            <br/>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Benefits of Telemedicine</h3>
            <ul class="list-disc pl-5 space-y-2">
                <li><strong>Convenience:</strong> Patients can consult doctors from the comfort of their homes, saving time and travel costs.</li>
                <li><strong>Access to Specialists:</strong> Rural patients can connect with specialists in urban centers without traveling long distances.</li>
                <li><strong>Continuity of Care:</strong> Regular follow-ups become easier, improving treatment adherence and outcomes.</li>
            </ul>
            <br/>
            <p>As technology continues to evolve, telemedicine will play an increasingly vital role in delivering personalized, efficient, and accessible healthcare to all.</p>
        """
    },
    {
        "id": 5,
        "title": 'Mental Health Awareness: Breaking the Stigma',
        "image": 'https://img.freepik.com/free-photo/therapist-listening-her-patient-talking_23-2149030925.jpg',
        "date": '08 Mar 2025',
        "author": 'Dr. Jenia',
        "avatar": 'https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?w=100',
        "category": 'Mental Health',
        "catColor": 'bg-pink-100 text-pink-600',
        "content": """
            <p>Mental health is as important as physical health, yet it's often overlooked or stigmatized. Depression, anxiety, and stress-related disorders are increasingly common, affecting millions worldwide. Raising awareness and promoting open conversations about mental health is crucial.</p>
            <br/>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Steps to Better Mental Health</h3>
            <ul class="list-disc pl-5 space-y-2">
                <li><strong>Seek Professional Help:</strong> Don't hesitate to consult a therapist or psychiatrist if you're struggling.</li>
                <li><strong>Practice Self-Care:</strong> Regular exercise, meditation, and adequate sleep can significantly improve mental well-being.</li>
                <li><strong>Build a Support Network:</strong> Talking to friends, family, or support groups can provide emotional relief.</li>
            </ul>
            <br/>
            <p>Remember, seeking help is a sign of strength, not weakness. Mental health matters, and everyone deserves support.</p>
        """
    },
    {
        "id": 6,
        "title": 'Nutrition and Wellness: The Foundation of Health',
        "image": 'https://img.freepik.com/free-photo/healthy-food-clean-eating-selection_1150-42854.jpg',
        "date": '20 Jan 2025',
        "author": 'Dr. Haseeb Hossain',
        "avatar": 'https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg?w=100',
        "category": 'Nutrition',
        "catColor": 'bg-orange-100 text-orange-600',
        "content": """
            <p>Good nutrition is the cornerstone of a healthy life. A balanced diet rich in fruits, vegetables, whole grains, and lean proteins provides the essential nutrients your body needs to function optimally.</p>
            <br/>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Key Nutritional Tips</h3>
            <ul class="list-disc pl-5 space-y-2">
                <li><strong>Stay Hydrated:</strong> Drink at least 8 glasses of water daily to maintain bodily functions.</li>
                <li><strong>Limit Processed Foods:</strong> Reduce intake of sugar, salt, and unhealthy fats to prevent chronic diseases.</li>
                <li><strong>Eat a Rainbow:</strong> Consume a variety of colorful fruits and vegetables for diverse nutrients.</li>
            </ul>
            <br/>
            <p>Combined with regular physical activity, proper nutrition can prevent obesity, diabetes, heart disease, and many other health conditions.</p>
        """
    },
    {
        "id": 7,
        "title": 'Preventive Care: Your Best Defense Against Disease',
        "image": 'https://img.freepik.com/free-photo/doctor-checking-blood-pressure-patient_23-2148817950.jpg',
        "date": '05 Feb 2025',
        "author": 'Dr. Hamida Jannat',
        "avatar": 'https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?w=100',
        "category": 'Preventive Care',
        "catColor": 'bg-teal-100 text-teal-600',
        "content": """
            <p>Preventive healthcare focuses on maintaining health and preventing diseases before they occur. Regular check-ups, screenings, and vaccinations are essential components of preventive care that can save lives.</p>
            <br/>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Why Preventive Care Matters</h3>
            <ul class="list-disc pl-5 space-y-2">
                <li><strong>Early Detection:</strong> Screenings can identify diseases like cancer and diabetes in their early, more treatable stages.</li>
                <li><strong>Cost-Effective:</strong> Preventing disease is far less expensive than treating advanced illness.</li>
                <li><strong>Improved Quality of Life:</strong> Regular health maintenance helps you stay active and healthy longer.</li>
            </ul>
            <br/>
            <p>Make preventive care a priority. Schedule regular check-ups and stay up-to-date with recommended screenings and vaccinations.</p>
        """
    },
    {
        "id": 8,
        "title": 'Pediatric Healthcare: Ensuring a Healthy Start',
        "image": 'https://img.freepik.com/free-photo/doctor-examining-baby-with-stethoscope_23-2148817635.jpg',
        "date": '18 Feb 2025',
        "author": 'Dr. Jenia',
        "avatar": 'https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?w=100',
        "category": 'Pediatrics',
        "catColor": 'bg-cyan-100 text-cyan-600',
        "content": """
            <p>Children's healthcare needs are unique and require specialized attention. From infancy through adolescence, regular pediatric care ensures proper growth, development, and disease prevention.</p>
            <br/>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Essential Pediatric Care</h3>
            <ul class="list-disc pl-5 space-y-2">
                <li><strong>Vaccinations:</strong> Immunizations protect children from serious diseases like measles, polio, and whooping cough.</li>
                <li><strong>Growth Monitoring:</strong> Regular check-ups track physical and developmental milestones.</li>
                <li><strong>Nutrition Guidance:</strong> Proper diet during childhood lays the foundation for lifelong health.</li>
            </ul>
            <br/>
            <p>Parents play a crucial role in their children's health. Working closely with pediatricians ensures a healthy, happy childhood.</p>
        """
    },
    {
        "id": 9,
        "title": 'Elder Care: Compassionate Support for Aging Gracefully',
        "image": 'https://img.freepik.com/free-photo/nurse-helping-elderly-patient-walk_23-2148817712.jpg',
        "date": '12 Mar 2025',
        "author": 'Dr. Mehidi Hasan',
        "avatar": 'https://img.freepik.com/free-photo/portrait-smiling-handsome-male-doctor-man_171337-5055.jpg?w=100',
        "category": 'Elder Care',
        "catColor": 'bg-amber-100 text-amber-600',
        "content": """
            <p>As our population ages, elder care has become increasingly important. Providing comprehensive, compassionate care for seniors involves addressing their unique medical, emotional, and social needs.</p>
            <br/>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Key Aspects of Elder Care</h3>
            <ul class="list-disc pl-5 space-y-2">
                <li><strong>Chronic Disease Management:</strong> Many seniors live with conditions like arthritis, diabetes, or heart disease that require ongoing care.</li>
                <li><strong>Fall Prevention:</strong> Simple home modifications and balance exercises can prevent dangerous falls.</li>
                <li><strong>Mental Stimulation:</strong> Engaging activities and social interaction help maintain cognitive function.</li>
            </ul>
            <br/>
            <p>Quality elder care focuses on maintaining dignity, independence, and quality of life for our senior community members.</p>
        """
    },
    {
        "id": 10,
        "title": 'Medical Innovation: The Future of Healthcare is Here',
        "image": 'https://img.freepik.com/free-photo/futuristic-medical-technology-concept_23-2149039845.jpg',
        "date": '25 Mar 2025',
        "author": 'Dr. Haseeb Hossain',
        "avatar": 'https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg?w=100',
        "category": 'Innovation',
        "catColor": 'bg-violet-100 text-violet-600',
        "content": """
            <p>Medical innovation is transforming healthcare at an unprecedented pace. From robotic surgery to personalized medicine, cutting-edge technologies are improving patient outcomes and revolutionizing treatment approaches.</p>
            <br/>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Emerging Medical Technologies</h3>
            <ul class="list-disc pl-5 space-y-2">
                <li><strong>Robotic Surgery:</strong> Precision instruments allow minimally invasive procedures with faster recovery times.</li>
                <li><strong>3D Bioprinting:</strong> Creating custom tissue and organs for transplantation is becoming a reality.</li>
                <li><strong>Nanotechnology:</strong> Tiny devices can deliver drugs directly to diseased cells, minimizing side effects.</li>
            </ul>
            <br/>
            <p>These innovations promise a future where diseases are detected earlier, treatments are more effective, and patient care is more personalized than ever before.</p>
        """
    }
]

for blog_data in blogs:
    try:
        date_obj = datetime.strptime(blog_data['date'], '%d %b %Y').date()
        
        if not BlogPost.objects.filter(title=blog_data['title']).exists():
            BlogPost.objects.create(
                title=blog_data['title'],
                image=blog_data['image'],
                date=date_obj,
                author=blog_data['author'],
                avatar=blog_data['avatar'],
                category=blog_data['category'],
                catColor=blog_data['catColor'],
                content=blog_data['content']
            )
            print(f"Created blog: {blog_data['title']}")
        else:
            print(f"Blog already exists: {blog_data['title']}")
    except Exception as e:
        print(f"Error seeding blog '{blog_data['title']}': {e}")

print("Seeding completed.")
