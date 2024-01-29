
# Notes API

This is a simple notes application built with Node.JS.

## Features

- Add a new note with a title, tags, and body.
- Retrieve all notes.
- Retrieve a specific note by ID.
- Edit an existing note by ID.
- Delete a note by ID.

## Installation

1. Clone the repository to your local machine:
	```bash
   git clone https://github.com/nrd141/Notes-API.git

2. Install the dependencies:
	```bash
   cd simple-note-app
   npm install

## Usage
1. Start the server:
	```bash
	npm start
The server will run at [http://localhost:5000](http://localhost:5000/).

2. Use preferred API testing tool to interact with the endpoints.

## Endpoints

 - **POST /notes**: Add a new note.
 Request body:
	 ```json
	  {
		  "title": "Sample Note",
		  "tags": ["tag1", "tag2"],
		  "body": "This is a sample note."
	  }
 - **GET /notes**: Retrieve all notes.
 - **GET /notes/{id}**: Retrieve a specific note by ID.
 - **PUT /notes/{id}**: Edit an existing note by ID.
  Request body:
	 ```json
	 {
		  "title": "Updated Note Title",
		  "tags": ["updated", "tag"],
		  "body": "This is the updated note."
	 }
 - **DELETE /notes/{id}**: Delete a note by ID.
