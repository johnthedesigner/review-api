require("dotenv").config();

module.exports = {
  db: {
    connector: "postgresql",
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    ssl: true,
    debug: true
  }
};
