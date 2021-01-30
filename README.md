# Ecommerce-2020
 This repository contains the code for a MERN based e-commerce webapp:
 
## Prerequisites:
- Install Mongodb & Robo3T
- Install React

## For the backend:
To get deeper insight of the Backend of our Project Ecommerce have a look at the following steps:
- Download the code folder from GitHub
- Create a .env file inside the backend folder having two variables - DATABASE & SECRET. Additionally, you can add "PORT" as well if you want to connect DB at some other port.
- Open cmd and go to the backend folder directory and run the "npm install" command
- Go to PowerShell and run command "mongod"
- Then "npm run".
Below will appear on command prompt:

![new](https://user-images.githubusercontent.com/61888364/106320543-08145280-6299-11eb-8034-bf1c99a7b0d0.png)

We'll see that the backend server is running at localhost:8000.
## For testing in postman:
- Write the route: http://localhost:8000/api/ route (Here, the route has to be taken from routes folder.)

## For the frontend:
- Firstly, go to Robo3T and connect to localhost:27017

![22](https://user-images.githubusercontent.com/61888364/106319849-14e47680-6298-11eb-9ba5-7ba9193595fd.jpeg)

- Now, open the command prompt for the frontend folder and run "npm install"
- Now, run "npm start"
- This will automatically start the deployment server
Below screen will show up automatically:

![deployment](https://user-images.githubusercontent.com/61888364/106319599-b0291c00-6297-11eb-962c-1a0d900d1e53.jpeg)

- Click on the little arrow button in right corner 
- Now, if not already registered then click on sign up and enter dummy details.
- Now, open Robo3T, on the left bar click on books and then on users as shown below:

![33](https://user-images.githubusercontent.com/61888364/106320014-48270580-6298-11eb-8703-401493cfa4a2.jpeg)

- Edit and change the highlighted row's value i.e. "role" : 1. Since "1" is for admin.

![44](https://user-images.githubusercontent.com/61888364/106320117-6c82e200-6298-11eb-8291-5d150bbc37c8.jpeg)

- Now, go to deployment and sign in and below screen will show up. Here you can add things to the cart, create categories, delete them etc.

![6](https://user-images.githubusercontent.com/61888364/106320225-963c0900-6298-11eb-86d3-d969b339ab7d.jpeg)
