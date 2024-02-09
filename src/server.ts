import express from "express";

import api from "./express";

const app = express();

app.use(express.json());
app.use(api);
const port = 3000;

app.listen(port, () => {
    console.log(`Listening on ${port}!`);
})
