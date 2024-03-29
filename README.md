# Excelsior Clinic Web App
Informative web application for Excelsior Clinic where you can book your dental service online.

## About
[Django](https://www.djangoproject.com/) project with:
* [Django REST](https://www.django-rest-framework.org/) powerful and flexible toolkit for building Web APIs.
* [Djano REST knox](https://pypi.org/project/django-rest-knox/) Authentication Module for django rest auth
* [React](https://reactjs.org/) for building interactive UIs
* [React Bootstrap](https://react-bootstrap.github.io/) for responsive styling
* [Webpack](https://webpack.js.org/) for bundling static assets
* [Babel](https://babeljs.io/) JavaScript compiler.
* [axios](https://www.npmjs.com/package/axios) Promise based HTTP client 
* [redux](https://redux.js.org/)A Predictable State Container
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
 8. Open browser and go to ```http://localhost:8000 ```
 9. Go to http://localhost:8000/admin , login and create 4-8 Services, 1-3 Doctors and some NewsArticles if you want.
### Front-end
 10. navigate to the main folder
 ```bash
 cd ..
 ```
 11. Install dependencies
 ```bash
 npm install
 ```
 12. Run watch
 ```bash
 npm run dev
 ```
