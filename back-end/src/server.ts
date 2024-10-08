import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cookieSession from "cookie-session";


const app: express.Application = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// connect to the database
// eslint-disable-next-line no-console
mongoose.connect("mongodb://localhost:27017/jacobdanderson").then(() => console.log("Connected to MongoDB")).catch(err => console.error("Could not connect to MongoDB", err));

app.use(cookieParser());

app.use(cookieSession({
	name: "session",
	keys: ["secretValue"],
	maxAge: 24 * 60 * 60 * 1000,
}));

// eslint-disable-next-line node/prefer-global/process
const PORT: number | string = process.env.PORT || 3008;
// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));

