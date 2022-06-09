const config = {
  host: "localhost",
  username: "root",
  password: "spiderman.11",
  database: "todo",
  dialect: "mysql",
  pool: {
    max: 10,
    min: 0,
    idle: 10000,
    acquire: 30000,
  },
};

export default config;