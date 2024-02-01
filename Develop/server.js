const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const sequelize = require('./config/connection');
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3306;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(routes);

// sync sequelize models to the database, then turn on the server

// app.listen(PORT, () => {
//   sequelize.sync({ force: false });
//   console.log(`App listening on port ${PORT}!`);
// });
sequelize.sync({force: false}).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
})
