Features:

	1.	User Authentication:
	•	Users can register, log in, and log out.
	•	Passwords are securely hashed using Bcrypt.
	2.	Task Management:
	•	Users can add, edit, and delete tasks.
	•	Tasks are associated with individual users.

Technical Overview:

	•	Backend:
	  •	Built using Flask, a lightweight web framework for Python.
	  •	Utilizes Flask-Login for user session management.
	  •	SQLAlchemy is used as the ORM for database interactions.
	  •	The database is initialized and managed with SQLAlchemy and Flask-Migrate.
	•	Frontend:
	  •	HTML templates are styled with custom CSS and JavScript.
   
File Structure:

	•	app.py: Main Flask application file, containing routes and logic for handling user requests.
	•	models.py: Defines the database models for users and tasks.
	•	templates/: Contains HTML templates for rendering different pages.
	•	login.html: Template for the login page.
	•	register.html: Template for the registration page.
	•	todo.html: Template for the main todo list page.
	•	static/: Contains static files like CSS and JavaScript.
	•	style.css: Custom styles for the application.

Deployment:

	•	The app is deployed on PythonAnywhere, a platform for hosting Python applications.

Example Usage:

	1.	User Registration:
	•	Navigate to the registration page, enter a username and password to create an account.
	2.	User Login:
	•	Log in using the registered credentials to access the todo list.
	3.	Managing Tasks:
	•	Add new tasks using the input box and the “Add” button.
	•	Edit existing tasks using the “Edit” button, make changes, and save.
	•	Delete tasks using the “Delete” button.
	4.	Logout:
	•	Use the “Logout” button on the todo page to log out of the application.
