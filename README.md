# Excelsior Clinic Web App
Informative web application for Excelsior Clinic where u can book your dental service online.

## About
[Django](https://www.djangoproject.com/) project with:
* [Django REST](https://www.django-rest-framework.org/) powerful and flexible toolkit for building Web APIs.
* [React](https://reactjs.org/) for building interactive UIs
* [React Bootstrap](https://react-bootstrap.github.io/) for responsive styling
* [Webpack](https://webpack.js.org/) for bundling static assets
* [Babel](https://babeljs.io/) JavaScript compiler.
* [axios](https://www.npmjs.com/package/axios) Promise based HTTP client 

## Screenshots
![image](https://user-images.githubusercontent.com/45295214/114600153-b460b500-9c9c-11eb-9188-1a8f29703e1f.png)

## Installation
 * Python 3.7
### Back-end
 1. Clone the repo
 ```bash
 git clone https://github.com/justteshi/excelsiorclinic-new.git
 ```
 2. Create virtualenv
 ```bash
 cd my-project
 virtualenv env
 ```
 3. Activate virtualenv
* Mac OS / Linux
 ```bash
 source env/bin/activate
 ```
* Windows
 ```bash
 env\Scripts\activate
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
 8. Open browser and go to ```bash  http://localhost:8000 ```
### Front-end
 9. navigate to the mai folder
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
