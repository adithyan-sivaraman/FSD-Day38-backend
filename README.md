# To Do Tasks API

    This project provides APIs to Create and Manage Tasks

## API Documentation

### Add a new task

1. Endpoint: `/task/add` 

2. Method: POST

3. Request Parameters : Not required.

4. Sample request

   - Note
     - date is in the format of <input type = "datetime-local">
     - Please specify the key names exactly as mentioned below
   - example request :
     { title: 'learn something',
     date: '2023-09-13T22:52',
     status: 'pending'}

5. Example Response in json format

    - {
        "title": "learn something",
        "date": "2023-09-13T22:52",
        "status": "pending",
        "id": 9
        }

### Fetch list of tasks for

1. Endpoint: `/task/fetch/`

2. Method: GET

3. Request Parameters : Not required.

4. Example Response
    - {
        "complete": [
        {
        "id": 1,
        "title": "react js learning",
        "date": "2023-09-07T23:06",
        "status": "complete",
        "completed": "2023-08-30T13:37:42.208Z"
        }
        ],
        "pending": [
        {
        "id": 2,
        "title": "learn react native",
        "date": "2023-09-01T19:07",
        "status": "pending"
        }
        ]
        }

### Update Completed tasks

1. Endpoint: `/task/complete`

2. Method: PUT

3. Request Parameters : Not required.

4. Sample request

   - Note : Please specify the key names exactly as mentioned below
   - example request :
     - [{
        "id": 7,"title": "learn something","date":"2023-09-13T22:52","status":"pending"
        }]

5. Example Response in text format

task updated successfully

## Installation and Setup

1.  Clone this repository.
2.  Install dependencies using <pre>npm install</pre>
3.  Start the server using  <pre>npm run start</pre>
4.  In case of Development environment, start the server using `npm run dev'.
5. Clone the front end UI from this repository [frontend](https://github.com/adithyan-sivaraman/FSD-Day38-frontend)
6.  Create a .env file in root directory and set environment variables.

        - In case of local mongo db
                - MONGO_DB={your database name}
                - MONGO_URL={your database url}
        - In case of cloud mongo db
                - MONGO_DB={your database name}
                - MONGO_USER={username}
                - MONGO_PASSWORD={password}
                - MONGO_CLUSTER={cluster name} eg. `cluster.oaqy8cr.mongodb.net`

7.  in connection.js set local or cloud url in mongoose.connect function

## Usage

1. Make API requests using tools like postman
