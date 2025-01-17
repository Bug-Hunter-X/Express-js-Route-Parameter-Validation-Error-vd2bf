const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  if (isNaN(parseInt(userId))) {
    return res.status(400).send('Invalid user ID');
  }
  const parsedUserId = parseInt(userId, 10);
  // ...rest of your code using parsedUserId
});