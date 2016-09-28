# Test app  
This is a simple test application using nodejs created to test build server created for CSC-591 DevOps course at NCSU.
The app calculates fibonacci value for a given number. 
File app-test.js performs simple unit test of fibonacci function in app.js on mocha framework using grunt and chai.
Gruntfile.js specifies the unit test file and package.json contains all the required dependencies.  

##Usage  
```
npm install #to install all dependencies
node app.js #to run app.js
grunt test #to run unit test
```
