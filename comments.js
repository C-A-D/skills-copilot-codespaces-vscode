// Create web server
// 1. Import express package
const express = require('express');
// 2. Create an express application
const app = express();
// 3. Create a route to handle GET requests on the URL /comments
app.get('/comments', (req, res) => {
  // 4. Set the Content-Type header to application/json
  res.setHeader('Content-Type', 'application/json');
  // 5. Set the response body to a JSON string of an array of objects
  res.send(JSON.stringify([
    { name: 'John', comment: 'Hello!' },
    { name: 'Mary', comment: 'Hi!' },
    { name: 'Sue', comment: 'Good morning!' },
  ]));
});
// 6. Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000/');
});
// 7. Run the server
// $ node comments.js
// 8. Open a web browser and go to http://localhost:3000/comments
// [{"name":"John","comment":"Hello!"},{"name":"Mary","comment":"Hi!"},{"name":"Sue","comment":"Good morning!"}]
// 9. Stop the server by pressing Ctrl+C