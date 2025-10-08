import sequelize from "./sequelize.js";

const connectDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Successfully connected to database");

    await sequelize.sync();
    console.log("Database tables synced successfully");
  } catch (error) {
    console.error(`Error connecting database: ${error.message}`);
    throw error;
  }
};

export default connectDatabase;
