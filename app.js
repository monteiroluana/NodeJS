const express = require("express");
const app = express();
const morgan = require("morgan");

// bring in routes
const { getPosts } = require("./routes/post");

const myOwnMiddleware = () => {
    console.log("middleware applied!");
};

// middleware
app.use(morgan("dev"));
app.use(myOwnMiddleware);

app.get("/", getPosts);

const port = 3000;
app.listen(port, () => {
    console.log(`A NodeJS API is listenig on port: ${port}`);
});