const express = require("express");
const app = express();

app.get("/", (req, res) =>{
    res.send("Hello world from NodeJs");
});

const port = 3000;
app.listen(port, () => {
    console.log(`A NodeJS API is listenig on port: ${port}`);
});