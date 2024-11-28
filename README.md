# Social-API

## Description
This project is a back-end API for a social network web application where users can:

Share thoughts,
React to friends' thoughts,
Create and manage a friend list.
Built with Node.js, Express.js, and MongoDB using the Mongoose ODM, this application demonstrates a NoSQL database's capability to handle large amounts of unstructured data.

### Table of Contents
Installation
Usage
API Endpoints
Technologies Used
Walkthrough Video
License

#### Installation
Clone the repository to your local machine:

bash
Copy code
git clone https://github.com/China0906/Social-API
cd social-network-api
Install dependencies:

bash
Copy code
npm install
Ensure MongoDB is installed and running on your local machine.

Start the server:

For development (with nodemon):
bash
Copy code
npm run dev
For production:
bash
Copy code
npm start
The API will run on http://localhost:3001.

#### Usage
You can use tools like Insomnia or Postman to interact with the API endpoints. Test CRUD operations for:

Users: Create, Read, Update, Delete users, and manage their friend lists.
Thoughts: Create, Read, Update, Delete thoughts and manage reactions.
API Endpoints
User Endpoints
Method	Endpoint	Description
GET	/api/users	Get all users
GET	/api/users/:id	Get a single user by ID
POST	/api/users	Create a new user
PUT	/api/users/:id	Update a user by ID
DELETE	/api/users/:id	Delete a user and their associated data
POST	/api/users/:userId/friends/:friendId	Add a friend to the user's friend list
DELETE	/api/users/:userId/friends/:friendId	Remove a friend from the user's friend list
Thought Endpoints
Method	Endpoint	Description
GET	/api/thoughts	Get all thoughts
GET	/api/thoughts/:id	Get a single thought by ID
POST	/api/thoughts	Create a new thought
PUT	/api/thoughts/:id	Update a thought by ID
DELETE	/api/thoughts/:id	Delete a thought by ID
POST	/api/thoughts/:thoughtId/reactions	Add a reaction to a thought
DELETE	/api/thoughts/:thoughtId/reactions	Remove a reaction from a thought
Sample Data
Create a User
json
Copy code
POST /api/users
{
  "username": "testUser",
  "email": "testUser@example.com"
}
Create a Thought
json
Copy code
POST /api/thoughts
{
  "thoughtText": "This is a test thought",
  "username": "testUser",
  "userId": "6410f123456789abc1234567"
}
#### Technologies Used
Node.js: JavaScript runtime for server-side development.
Express.js: Web framework for building API routes.
MongoDB: NoSQL database for data persistence.
Mongoose: ODM for MongoDB to structure and query data.
Nodemon: Development tool for automatically restarting the server.
##### Walkthrough Video
Watch a walkthrough video demonstrating the API's functionality:

Walkthrough Video Link "C:\Users\nramo\onedrive\desktop\Social-API\assets\Untitled Video November 28, 2024 6_48 AM.mp4"

### Future Enhancements
Add authentication for users.
Implement pagination for large datasets.
Deploy to a cloud hosting service like Heroku or AWS.
##### License
This project is licensed under the MIT License. See the LICENSE file for details.

##### Contributors
https://github.com/China0906
Used the help of MDM resources, and GOOGLE