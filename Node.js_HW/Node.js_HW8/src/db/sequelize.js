// const sequelize = new Sequelize({
//   dialect: process.env.DATABASE_DIALECT,
//   database: process.env.DATABASE_NAME,
//   username: process.env.DATABASE_USER,
//   password: process.env.DATABASE_PASSWORD,
//   host: process.env.DATABASE_HOST,
//   port: Number(process.env.DATABASE_PORT),
//   dialectOptions:
//     process.env.DATABASE_DIALECT_OPTIONS_SSL === "true"
//       ? {
//           ssl: {
//             require: true,
//             rejectUnauthorized: false,
//           },
//         }
//       : {},
// });

// const sequelize = new Sequelize({
//   dialect: "postgres",
//   host: "localhost",
//   port: 5432,
//   database: "contacts",
//   username: "user",
//   password: "pass",
// });

// export default sequelize;

import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  port: 5432,
  database: "contacts",
  username: "user",
  password: "pass",
});

export default sequelize;
