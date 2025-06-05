import dotenv from "dotenv";

const environment = "PRODUCTION";
dotenv.config({
  path:
    environment === "DEVELOPMENT" ? "./.env.DEVELOPMENT" : "./.env.PRODUCTION",
});

export default {
  port: process.env.PORT,
  MongoUrl: process.env.MONGO_URL,
  AdminName: process.env.ADMIN_NAME,
  AdminPassword: process.env.ADMIN_PASSWORD,
};
