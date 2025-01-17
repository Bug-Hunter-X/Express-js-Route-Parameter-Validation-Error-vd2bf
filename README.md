# Express.js Route Parameter Validation Error

This repository demonstrates a common error in Express.js applications: failing to validate route parameters before using them.  The `bug.js` file shows vulnerable code, while `bugSolution.js` offers a solution.

## Description

When handling requests with route parameters (e.g., `/users/:id`), you should always validate the input to prevent errors.  Unvalidated parameters can lead to unexpected behavior or security vulnerabilities.

## How to reproduce the bug

1.  Clone this repository.
2.  Run `npm install` to install dependencies.
3.  Run `node bug.js`.
4.  Send a request to `/users/invalid` or `/users/123a`. The application will likely crash or behave unpredictably.

## Solution

The `bugSolution.js` file shows how to validate route parameters using a simple check.  For more complex validation scenarios, consider using middleware for better code organization and reusability.

## Additional Notes

This example demonstrates a simple validation scenario; however, consider more robust validation strategies that cover all potential issues in production environments.