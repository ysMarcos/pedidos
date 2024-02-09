import express from "express";

import api from "./express";
import { PORT } from "./env";

const app = express();

app.use(express.json());
app.use(api);
const port = PORT;

app.listen(port, () => {
    console.log(`Listening on ${port}!`);
})
