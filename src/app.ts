import express from "express";
import { routes } from "./routes";
import db from "./models";
import { JwtMiddleware } from "./middlewares/jwt.middleware";

db.sequelize.sync();

const app = express();

app.use(express.json());
app.use(JwtMiddleware);

app.use(routes);

app.listen(3000, () => {
  console.log("listening port 3000");
});
