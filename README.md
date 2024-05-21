# GET_YouTube_Subscribers

Node.js MongoDB Subscriber Management Application
This project is a simple application developed with Node.js and MongoDB for managing a list of subscribers. It demonstrates fundamental operations such as creating, reading, updating, and deleting records in a MongoDB database, making it an ideal example of how to use a document-oriented NoSQL database in a modern application.

Key Features
Separation of Concerns: The application structure adheres to best practices by separating the server setup and database connection logic from the main application logic. The server is started, and the database connection is established in index.js, while app.js handles the request and response logic.


## API Endpoints

RESTful API Endpoints: The application exposes three main API endpoints to interact with the subscriber data:
GET /subscribers: Fetches an array of all subscriber objects.

GET /subscribers/names: Retrieves an array of subscriber objects containing only the name and subscribedChannel fields.

GET /subscribers/:id: Fetches a specific subscriber by their ID. Returns a status code 400 and an error message if the ID does not match any subscriber.

## Dependencies

The following dependencies are required to run the Get YouTube Subscribers :

```bash
NodeJs
ExpressJs
Mongoose
nodemon
```

  ## Installation

  To get started with the Project, you'll need to have Node.js and MongoDB installed on your machine. Once you have those installed, follow these steps:

```bash
Clone this repository to your local machine.
Install the required dependencies by running npm install in the project directory.
Start the server by running npm start. The server will be available at http://localhost:3000.
```

## Documentation

- [NodeJs](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)


## Demo

[Click here to Visit Site](https://get-youtube-subscribers-737a.onrender.com).