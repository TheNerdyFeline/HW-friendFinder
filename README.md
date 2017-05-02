# HW-friendFinder
UCLA Week 13 Homework

## Technologies Used
* HTML
* NODEJS
* Javascript
* Express
* Heroku
* bodyParser

This is a friend finder app, designed to allow a user to fillout a survey and compare them to a list of friends and show them the closest match. I had trouble with the function to compare the user to th elist of friends, but it was ecause I was nesting 3 for loops together and needed to use forEach instead.  I also had trouble deploying to heroku because I forgot to add process.env.PORT to the port variable allowing heroku to use it's domain to find files.