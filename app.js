const express = require("express");
const app = express();
const morgan = require("morgan");

// bring in routes
const { getPosts } = require("./routes/post");

// middleware
app.use(morgan("dev"));

app.get("/", getPosts);

const port = 3000;
app.listen(port, () => {
    console.log(`A NodeJS API is listenig on port: ${port}`);
});