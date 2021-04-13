# Excelsior Clinic Web App
Informative web application for Excelsior Clinic.

## Screenshots
![image](https://user-images.githubusercontent.com/45295214/114600153-b460b500-9c9c-11eb-9188-1a8f29703e1f.png)

## Installation
### Back-end
 1. Clone the repo
 ```bash
 git clone https://github.com/justteshi/excelsiorclinic-new.git
 ```
 2. Create virtualenv
 ```bash
 cd my-project
 virtualenv --python C:\Path\To\Python\python.exe venv
 ```
 3. Activate virtualenv
 ```bash
 .\venv\Scripts\activate
 ```
 4. Add dependencies
 ```bash
 pip install -r requirements.txt
 ```
 5. Navigate to the inner folder
 ```bash
 cd excelsiorclinic\
 ```
 6. Run migrations
 ```bash
 python manage.py migrate
 python manage.py createsuperuser
 ```
 7. Start development server
 ```bash
 python manage.py runserver
 ```
 8. Open browser and go to ```http://localhost:8000 ```
### Front-end
 9. navigate to the main folder
 ```bash
 cd ..
 ```
 10. Install dependencies
 ```bash
 npm install
 ```
 11. Run watch
 ```bash
 npm run dev
 ```
