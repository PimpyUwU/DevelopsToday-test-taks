import express from "express"
import {getCountriesRouter} from "./routes/CountryRouter";
const cors = require('cors');

export const app: express.Express = express()

//middleware
app.use(cors());
app.use(express.json())

app.use("/", getCountriesRouter())



