import express from "express";
import "dotenv/config";
import "express-async-errors";
import morgan from "morgan";
import cors from "cors";

// db
import db from "./db/database.js";

// routes
import authRoutes from "./routes/authRoutes.js";
import scoreRoutes from "./routes/scoreRoutes.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/score", scoreRoutes);
app.use(errorHandler.errorHandlerMiddleware);

app.get("/", (req, res) => {
  res.send("Server is up!");
});

const startServer = async () => {
  try {
    await db.authenticate().then(() => console.log("Database connected..."));
    app.listen(process.env.PORT, () => {
      console.log(`Listening on PORT ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
startServer();
