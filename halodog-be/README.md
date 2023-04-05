# Back-end Halodog

Written in JavaScript (Node.js + Express)

Before running:
- Install dependencies
```
npm install
```
- Fill out config.env file in halodog-be/config:
  - NODE_ENV = development or production
  - PORT = to your heart's desires
  - MONGO_URI = your MongoDB database connection string. Don't know what that is? Check this [MongoDB documentation.](https://www.mongodb.com/docs/atlas/driver-connection/)<br>
  Example: 'mongodb+srv://example:<password>@example.example.mongodb.net/<your_database_name>?retryWrites=true&w=majority'

- To run development build:
```
npm run dev
```
then go to http://localhost:5500 (change port accordingly)


- To run production build:
```
npm start
```
then go to http://localhost:5500 (change port accordingly)


#### Senior Project
#### DTETI FT UGM
