// Create web server
// Create a web server that listens to incoming requests on port 3000. The server should respond to requests to the /comments URL path with a JSON object, containing a single key comments, which contains an array of comments (strings). You can use the comments array that is defined in the code template.

const express = require('express');
const app = express();
const port = 3000;

// Define comments array
const comments = [
  'This is the first comment!',
  'Here’s the second one!',
  'And this is one more.',
  'More comments to follow!'
];

// Define the route that sends the comments array
app.get('/comments', (req, res) => {
  res.json({ comments: comments });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});