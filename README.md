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
- Once you have done the config as mentioned above then go to src from terminal and run the command `npz sequelize db:create`
and then execute 
` npx sequelize db:migrate`

## file structure  
-src/
  - index.js 
  - config/
  - controllers/
  - middleware/
  - models/
  - repository
  - services/
  - utils/
  -testing[later]

## DB Design
  - flight table
  - airplane table
  - city table
  - airport table

  - A flight belong to an airplane but an airplane can belongs to many flight
  - A city has many airport but Airport belong to one city only
  - A airport has many flight but a flight only belong to only one Airport

## Steps

1->create a basic express server
   - setup body parser

2->setup sequelize ,mysql2, sequelize cli 
   -update database name and database password in config file
   - create database by npx sequelize create:db // it will create database  


## Tables
  ### City table-> id , name , createdAt, UpdatedAt
  ### Airport -> id ,name, cityId, Address , createdAt, updatedAt
      Relationship -> City has many Airport and Airport belongs to One city(one to many )
      ```
      npx sequelize model:generate --name Airport --attributes name:string, cityId:integer, address:string
      ```
      this above command will create Airport model with these attributes name, cityId, address, createdAt, updatedAt 
      - after this do association in city to define city has many airports
  ```
          static associate(models) {
          // define association here
          this.hasMany(models.Airport,{
          foreignKey:'cityId',
         })
     }
  ```
    - in airport do this in static associate
  ```
    static associate(models) {
      // define association here
      this.belongsTo(models.city,{
        foreignKey:'cityId',
        onDelete:'CASCADE'
      })
    }
  }
  ```