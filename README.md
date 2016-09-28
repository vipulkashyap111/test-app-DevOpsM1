# Test app - Fibonacci 
This is a simple test application using nodejs created to test build server created for CSC-591 DevOps course at NCSU.
The app calculates fibonacci value for a given number. 
File app-test.js performs simple unit test of fibonacci function in app.js on mocha framework using grunt and chai.
Gruntfile.js specifies the unit test file and package.json contains all the required dependencies.  

##Usage  
```
#Install all the dependencies
npm install

#Run app.js
node app.js

#Run unit test
grunt test
```
