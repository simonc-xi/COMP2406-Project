README
Description
This repository contains the source code for a Movie Database web application. Users can search for movies, view information about movies and directors, and follow other users.

Source Files
login.pug
This file includes the username and password input fields for users to log in or create a new account using the "Sign Up" button.

Signup.pug
This file contains the user registration page, where users can create a new account by entering their username and password.

Movie.pug
This file includes a top search bar for returning to the homepage and a search button for searching movies or people. It also displays movie information and other recommended movies for other users.

Other.pug
This file includes a "Follow" button for following other users, user information, a list of movie reviews by the user, and the list of people followed by this user. Users can click on a person's name to navigate to their page.

Profile.pug
This file displays the user's account information, a side bar navigation to the homepage and upgrade page.

Home.pug
This file is the homepage of the website. It provides a search bar, log in and register buttons, and a list of recommended movies.

View.pug
This file displays information about a director and includes a "Subscribe" button for subscribing to them.

login.js
This file checks whether the user has entered the correct form to log in.

logic.js
This file includes all the business logic of the project.

movie-server.js
This file is the new server using the Express application.

style.css
This file is the stylesheet for the webpage.

Project Information
Project Name
Movie Database

Partners
Sophia Luan #101035064
Yanxi Chen #101118360
OpenStack Instance Information
IP Address
134.117.133.188

Login Information
Username: student
Password: student
How to Run the Server on OpenStack Instance
Navigate to the COMP2406_finalProject directory.
Run the command /home/student/COMP2406_finalProject.
Run the command node movie-server.js.
Important: The application requires the users.JSON and movie-data.json files to function properly. Please ensure that these files are present in the correct directory before running the server.
