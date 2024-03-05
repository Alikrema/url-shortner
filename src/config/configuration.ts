import { config } from 'dotenv';
config();

export default () => ({
  port: parseInt(process.env.PORT, 10),
  databaseConnection: process.env.MONGO_DB_CONNECTION,
  baseurl: process.env.BASE_URL,
});
