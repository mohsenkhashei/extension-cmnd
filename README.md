# extension-cmnd

This project is built during the HACKATHON TRNC 2024

## Requirements

- Node JS
- NPM
- NPX (to manage the project)

To run the project, run the followings in order;

## Installation of the node module packages

<code>npm install</code>

## Create config file for DB

<code>npx sequelize-cli init</code>

## Edit your configuration file and set your credentials for the database

```json
{
  "development": {
    "username": "username",
    "password": "password@",
    "database": "hackathon",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

## Run the migrations to create database and required tables;

<code>npx sequelize-cli db:migrate</code>

## Run the seeders to seed the database and fill the tables;

<code>npx sequelize-cli db:seed:all</code>

## Run the application

<code>npm run start</code>
