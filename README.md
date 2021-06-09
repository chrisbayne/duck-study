#### FreshWorks Selection Test 2021 - Chris Bayne

<div align="center">

## :duck::duck::duck: Waterfowl Nutrition: A Global Study :duck::duck::duck:

</div>

## Project Description
A scientist is trying to understand how ducks are being fed in parks around the world. She wants to collect the following information:

- What time the ducks are fed
- What food the ducks are fed
- Where the ducks are fed
- How many ducks are fed
- How much food the ducks are fed

The scientist would like to crowdsource this information by creating a web application where
people can submit these data points. The scientist would like to be able to view all submissions
(please note that user management/authentication is not a requirement/expectation.)

Below you will find instructions on how to run the application from command line as well as my approach to the problem, technologies chosen,
and the amount of hours I spent working on the project.

## Learning objectives
- To design a Single page application using useState functionality to add, view, edit, and delete ficitonal data sets.

## Milestones
### Milestone 1
- Build out a table to view / collect data
    - ID
    - Name
    - Time of day
    - Location
    - Number of ducks
    - Amount of food
- Build out a form with input fields in accordance to the table view headings to submit data to table
- Add Edit and Delete functionality
- Successfully render submitted data to the table

### Milestone 2
- Choose colour palette
- Choose layout for entire page 
- Style table view
- Style form
- Complete full page layout and styling


# Installation and Run Instructions

To begin running this application, first clone it by copying this line into your command line

<i>git clone https://github.com/chrisbayne/duck-study.git</i>

Once the project has been cloned to your machine, cd into the folder titled 'duckfood' and <b>npm install</b> the necessary node modules to run the application.

Next run <b>npm install react-bootstrap bootstrap@4.6.0</b> to install React Bootstrap version 4.6

Next run <b>code .</b> to open up Visual Studio Code to view the code (if you use VSC)

Once those have both been installed successfully and the code is shown in your code editor, run <b>npm start</b> to view the application in your browser.



## Approach to the problem
My approach to the problem was found almost right away. After reading over the assignment once or twice I realized that what I needed to do was to be able to post fictional scientific data from an input form to a table so that the fictional scientist in question would be able to crowdsource global information for the study.

A simple input form and display table was the method of choice and the application was built in its simplest and most effective form.

I did not include a back end to this application because I felt that it was necessary for me to be able to display a Create, Read, Update, and Delete methodology first and foremost as a deliverable single person sprint to be able to produce and view the data required. 

With the amount of time given (7 days) and the amount of working time suggested (10 hours maximum), I strongly feel that the application you see before you is done to best of my ability while taking those time frames into account.

If this was a multi-week project, my next steps would be to first connect to a Mongo database where the data sets submitted by users would be stored for later viewing, and to make the application fully responsive. This I believe could be completed in another 7 days time.

## Technologies chosen
The technologies chosen were ReactJS, Bootstrap, and CSS all done within Visual Studio Code. 

I chose React because I truly enjoy working within it as a framework, because FreshWorks uses it almost exclusively, and simply because of how flexible it is. Because it prevents constant updating of DOM it is able to deliver faster and better UX for the developer and the user.

I chose Bootstrap because I've had nothing but good experiences with it and it's very easy to manipulate. Bootstrap is a framework that makes it easy to build responsive web applications, which would be one of the next steps in this application, time pending.

## Hours spent
I spent roughly 9 - 10 hours on this project because I felt that I wanted to put my best foot forward. I wanted to build something that I could learn from and something that I liked and found helpful to use. It was important to me that it was visually appealing to another user and I believe I succeeded in that.
