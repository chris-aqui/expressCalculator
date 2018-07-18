// Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// Create express app instance.
const app = express();

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//

// Routes
// What routes do you need to have? Which ones are optional?
// TODO Add your routes here

// retreive data from a server at the specified resource
app.get("/:operator/:var1/:var2", function(req, res) {

  // TODO parse out the variables from the request
  // operation = req.params.operator;

  // Parameters are received from the URL
  // num1 = req.params.var1;
  // num2 = req.params.var2;

  // destructuring the params
  // replace line 26, 29 and 30
  let { operator, var1, var2 } = req.params;

  // TODO make sure they're converted to integers (and not strings)
  // Parameters are converted to integers
  num1 = parseInt(var1);
  num2 = parseInt(var2);

  // Initialize the result variable to send later
  let result;
  // Switch statement chooses operation based on the operation parameter.
  switch (operation) {
  // BONUS - How could you use * + etc. inside the app.get()?
  case "add":
    // Add your logic here. Pun intended.
    result = num1 + num2;
    break;
  case "subtract":
    // Subtract logic
    result = num1 - num2;
    break;
  case "multiply":
    // Multiply
    result = num1 * num2;
    break;
  case "divide":
  result = num1 / num2;
    // Divide
    break;
  default:
    // Handle anything that isn't specified
    result =
        "Sorry! The only valid operations are add, subtract, multiply, and divide.";
  }

  // We return the result back to the user in the form of a string
  res.send(result.toString());
  // console.log('my GET responce ', result);
  // return res.json(result);
});

// send data to the API sever
app.post("/api/:operator/:var1/:var2", function(req, res) {
  console.log('posting data to the server');
  console.log('this is the request body ',req.body);

});




// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
