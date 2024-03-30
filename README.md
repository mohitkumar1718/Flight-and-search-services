# welcome to Flight search service

## Project Setup
- Clone the project on your local
- Execute `npm install` on the same path where you clone the project
- create .env file in the root directory and add the following environment variable
  - `PORT=3000`
-Inside the src/config folder create a new file config.json and add the following piece of json
  ```
  {
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR MYSQL PASSWORD>,
    "database": "Flight_Search_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }

  ``` 
## file structure  
  #src/
      - index.js 
      - config/
      - controllers/
      - middleware/
      - models/
      - repository
      - services/
      - utils/
  #testing[later]

## Steps

1->create a basic express server
   - setup body parser

2->setup sequelize ,mysql2, sequelize cli 
   -update database name and database password in config file
   - create database by npx sequelize create:db // it will create database  


