Basic backend project templete

`src` -> Inside the src folder all the actual source code reagarding the project will reside, this will not include any kind of tests. (You might want to make seprate tests folder)

Lets take a look inside the src folder

- `config` -> In this folder anything and everything regarding the configuration or setup of a library or module will be done. For example: setting up `dotenv` so that we can use the enviornment variables anywhere in a cleaner fashion, this is done in the `server-config.js` file

- `routes` -> In the routes folder, we register a route and the corresponding middleware and controllers to it.

- `middlewares` -> they are just going to intercept the incoming requests where we can write our validators, authenticators etc.

- `controllers` -> they are kind of the last middlewares as post them you call your business layer to execute the business logic. In controllers we just recieve the incoming requests and data and then pass it to the business layer, and once business layer returns an output, we structure the API response in controllers and send the output.

- `repositories` -> this folder contains all the logic using which we interact with the DB by writing queries, all the raw queries and ORM queries will go here.

- `services` -> contains the business logic and interact with respositories for data from the database

- `utils` -> contains helper methods, error classes etc.


Adding Sequelize cli
    cd src
    npx sequelize init