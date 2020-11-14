1. List of Source files
		README.txt

		Static web page (HTML and PUG)
			login.html						This file include the username input and password input by using the log in button to log in to the account and create new account by using the sign up button
			login.pug						The pug file of the login.html
			SignUp.html           			The User registration page contains username and password
			Signup.pug						The pug file of the signup.pug
			movie.html						This file include the top search bar which can be using for return to home page and the search button for the movie or people searching, also include the movie information, and the other movie for the other user's viewing
			otherProfile.html				This file include the follow button which can follow the user, user's information, the list of movie review by user, and include the people followed by this user and click the people is able to navigate to that person’s page.
			profilepage.html				This file include the my account information, a side bar navigation to the home page and the upgrade page.
			Homepage.html					The homepage of the web, provide search bar, log in and register button. also provides a list of movie that is recommend to the users.
			Home.pug						The pug file of the homepage
			HomePage.js						Include some basic functions about the homepage, ex, navigation
			View.html						The web page that shows the information about the Director, also have subscribe button than can subscribe the Director

		Logic JS file	(the client side and some server side of programming was divided each corresponding web page)
			- View.js						The JavaScript file for people viewing page, which can let user subscribe the viewing person
			- login.js						This file for user to check having a correct form to login
			- movie.js						The JavaScript file for the movie which do recommend movie for similar genre.
			- otherProfile.js     			The JavaScript file for the other users, which can let users following the viewing users
			- profilepage.js				The JavaScript file for the user profile page which can change account level
			- SearchBar.js					The JavaScript file for the search bar, include searching people user or movie.
			- signUp.js						This is the sign up page for user to create account.
			- logic.js						(final version) This file include all the business logic part of the project.

		Sever JS file
			- server.js						
			- Express-server.js				The new server by using the express application.

		CSS style sheet
			style.css						Style sheet for webpage

		Demo picture
			ilovem.jpg						Website icon
			ilovemb.jpg						Website background
			jumanji.jpg						demo movie Poster pic
			Sabrina.jpg						demo movie Poster pic
			Sudden Death.jpg				demo movie Poster pic
			waiting.jpg						demo movie Poster pic

		JSON file
			users.JSON						demo-user-data store in json file
			movie-data-short.json 			demo-movie data in json file



2. The project we current working on
		Movie Database

3. The name of both partners
 	Sophia Luan #101035064,
	Yanxi Chen #101118360，

4. Summary of extensions have added to the system
	1. Using Express’ functionality to connect incoming requests to the business logic that writed at chechk in 2.
	2. Using sessions to authenticate the users log in account.
	3. 


5. Summary of any design decisions you have increased the quality of your system
	1. Combine all the separate logic function into one logic file for more conciseness
	2. Update the old logic function become more details and efficient.
	3.

6. OpenStack instance information
	ip: 134.117.133.188
	username: student
	password: student

7. How to run the server on OpenStack instance
	1. cd COMP2406_Project
	2. /home/student/COMP2406_Project
	3. node Exp-server.js
