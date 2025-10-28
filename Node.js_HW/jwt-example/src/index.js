import jwt from "jsonwebtoken";
import "dotenv/config";

const { JWT_SECRET } = process.env;

const payload = {
  email: "maksym@gmail.com",
};

const token = jwt.sign(payload, JWT_SECRET, {
  expiresIn: "24h",
});

const decodeToken = jwt.decode(token);

try {
  const { email } = jwt.verify(token, JWT_SECRET);
  console.log(email);
  const invalidToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJvZ2RhbkBnbWFpbC5jb20iLCJpYXQiOjE3NjAwMDM2NzUsImV4cCI6MTc2MDA5MDA3NX0.OdAX8Zt6CVQLkSMSQ8BAleqMJlu-dzWhV-dYwDrzo-f";
  jwt.verify(invalidToken, JWT_SECRET);
} catch (error) {
  console.log(error.message);
}
