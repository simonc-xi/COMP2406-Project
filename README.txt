1. List of Source files
		README.txt

		Static web page (HTML and PUG)
			login.html						This file include the username input and password input by using the log in button to log in to the account and create new account by using the sign up button
			login.pug							The pug file of the login.html
			SignUp.html           The User registration page contains username and password
			Signup.pug						The pug file of the signup.pug
			movie.html						This file include the top search bar which can be using for return to home page and the search button for the movie or people searching, also include the movie information, and the other movie for the other user's viewing
			otherProfile.html			This file include the follow button which can follow the user, user's information, the list of movie review by user, and include the people followed by this user and click the people is able to navigate to that person’s page.
			profilepage.html			This file include the my account information, a side bar navigation to the home page and the upgrade page.
			Homepage.html					The homepage of the web, provide search bar, log in and register button. also provides a list of movie that is recommend to the users.
			Home.pug							The pug file of the homepage
			HomePage.js						Include some basic functions about the homepage, ex, navigation
			View.html							The web page that shows the information about the Director, also have subscribe button than can subscribe the Director

		Logic JS file	(the client side and some server side of programming was divided each corresponding web page)
			- View.js							The JavaScript file for people viewing page, which can let user subscribe the viewing person
			- login.js						This file for user to check having a correct form to login
			- movie.js						The JavaScript file for the movie which do recommend movie for similar genre.
			- otherProfile.js     The JavaScript file for the other users, which can let users following the viewing users
			- profilepage.js			The JavaScript file for the user profile page which can change account level
			- SearchBar.js				The JavaScript file for the search bar, include searching people user or movie.
			- signUp.js						This is the sign up page for user to create account

		Sever JS file
			- server.js

		CSS style sheet
			style.css							Style sheet for webpage

		Demo picture
			ilovem.jpg						Website icon
			ilovemb.jpg						Website background
			jumanji.jpg						demo movie Poster pic
			Sabrina.jpg						demo movie Poster pic
			Sudden Death.jpg			demo movie Poster pic
			waiting.jpg						demo movie Poster pic

		JSON file
			users.JSON						demo-user-data store in json file
			movie-data-short.json demo-movie data in json file



2. The project we current working on
		Movie Database

3. The name of both partners
 	Sophia Luan #101035064,
	 Yanxi Chen #101118360，

4. Install instruction:
	- type <npm install pug> in the terminal at the same directly of the server.js
	-	type node server.js in the terminal
	- after seeing the <Server running at http://127.0.0.1:3000/> in the terminal,
		then you can copy the address and run on the browser
	- The html page can be directly run in the common browser(chrome, Firefox ,etc.)
	- by testing the logical JS File ,you can type node <test>.js in the terminal to test it.

		Special compilations for login.js : By accidently, the client-side and server-side JavaScript was combined,
		 																		Therefore, if you were run from the server side , there is no need to change anything.
																				but, if you wants to test the function in cmd, ex node login.js. Please uncomment the
																				first line of the login.js ,and comment all lines that above line 60(which is most used
																				for redirection the webpage)


5. Introduction of current working progress:
	- Create a basic node server that servers static html page about the project-in #1
		Allows users to redirect to different web page.

	- use pug(template) engine to dynamic render the page

	- Support basic AJAX interaction between user and server,ex ,user can send the post
	 	request ,and json files that contains username and password to the server through
		the login page. After the server receives the username and password, it will validate
		it, and stores user infor in the local. then send back the user page back to client.


	-The majority of the business logic has add into the project and made the background of the
		html more useful and functional, by adding the check users, search bar, following the
		person and recommend some similar movie, all of these function made the project getting
		more powerful.
