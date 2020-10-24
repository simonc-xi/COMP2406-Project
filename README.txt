1. List of Source files
		README.txt

		login.html						This file include the username input and password input by using the log in button to log in to the account and create new account by using the sign up button
		login.js						This file for user to check having a correct form to login 
		login.pug						The pug file of the login.html
		signUp.html           			The User registration page contains username and password
		signUp.js						This is the sign up page for user to creat account
		Signup.pug						The pug file of the signup.pug
		movie.html						This file include the top search bar which can be using for return to home page and the search button for the movie or people searching, also include the movie information, and the other movie for the other user's viewing
		movie.js						The javascript file for the movie whcih do recommand movie for similar genre.
		otherProfile.html				This file include the follow button which can follow the user, user's information, the list of movie review by user, and include the people followed by this user and click the people is able to navigate to that person’s page.
		otherProfile.js					The javascript file for the other users, which can let users following the vewing users
		profilepage.html				This file include the my account information, a side bar navigation to the home page and the upgrade page.
		profilepage.js					The javascript file for the user profilepage which can change account level
		Homepage.html					The homepage of the web, provide search bar, log in and register button. also provides a list of movie that is recommend to the users.
		Home.pug						The pug file of the homepage
		HomePage.js						Include some basic functions about the homepage, ex,navigation
		View.html						The web page that shows the information about the Director, also have subscirbe button than can subscribe the Director
		View.js							The javascript file for people viewing page, which can let user subscirbe the viewing person
		searchBar.js					The javascript file for the search bar, include seaching people user or movie. 


		style.css						Style sheet for Homepage
		ilovem.jpg						Website icon
		ilovemb.jpg						Website background
		jumanji.jpg						demo movie Poster pic
		Sabrina.jpg						demo movie Poster pic
		Sudden Death.jpg				demo movie Poster pic
		waiting.jpg						demo movie Poster pic
		users.json						The json file include the user info, username, password, account level, review and following 
		movie-data-short.json			The json file include movie info and people 




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


5. Introduction of current working progress:
	- Create a basic node server that servers static html page about the project-in #1
		Allows users to redirect to different web page.

	- Support basic AJAX interaction between user and server,ex ,user can send the post 
	 	request ,and json files that contains username and password to the server through
		the login page. After the server receives the username and password, it will validate
		it, and stores user infor in the local. then send back the user page back to client.
	-
