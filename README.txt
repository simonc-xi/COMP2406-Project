1. List of Source files
		README.txt

		Dynamic web page (HTML and PUG)
			login.pug						This file include the username input and password input by using the log in button to log in to the account and
			 										create new account by using the sign up button

			SignUp.pug          			The User registration page contains username and password

			Movie.pug						This file include the top search bar which can be using for return to home page and the search button for the
			 										movie or people searching, also include the movie information, and the other movie for the other user's viewing

			otherProfile.html				This file include the follow button which can follow the user, user's information, the list of movie review by user,
			 												and include the people followed by this user and click the people is able to navigate to that person’s page.

		  Profile. pug				This file include the my account information, a side bar navigation to the home page and the upgrade page.

			Home.pug						The homepage of the web, provide search bar, log in and register button. also provides a list of movie
			 										that is recommend to the users.

			HomePage.js						Include some basic functions about the homepage, ex, navigation

			View.pug						The web page that shows the information about the Director, also have subscribe button than can subscribe the Director

		Logic JS file	(the client side and some server side of programming was divided each corresponding web page)
			- View.js						The JavaScript file for people viewing page, which can let user subscribe the viewing person
			- login.js						This file for user to check having a correct form to login
			- movie.js						The JavaScript file for the movie which do recommend movie for similar genre.
			- otherProfile.js     			The JavaScript file for the other users, which can let users following the viewing users
			- profilepage.js				The JavaScript file for the user profile page which can change account level
			- signUp.js						This is the sign up page for user to create account.
			- logic.js						(final version) This file include all the business logic part of the project.

		Sever JS file
			- Exp-server.js				The new server by using the express application.

		CSS style sheet
			style.css						Style sheet for webpage

		Demo picture
			ilovem.jpg						Website icon
			ilovemb.jpg						Website background

		JSON file
			users.JSON						demo-user-data store in json file
			movie-data-short.json 			demo-movie data in json file



2. The project we current working on
		Movie Database

3. The name of both partners
 	Sophia Luan #101035064,
	Yanxi Chen #101118360，

6. OpenStack instance information
	ip: 134.117.133.188
	username: student
	password: student

7. How to run the server on OpenStack instance
	1. cd COMP2406_FinalProject
	2. /home/student/COMP2406_FinalProject
	3. node Exp-server.js
