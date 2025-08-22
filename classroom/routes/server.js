const express = require("express");
const app = express();
const user = require("./routes/user.js");
const posts = require("./routes/posts.js");
const session = require("express-session");



app.listen(3000, () => {
    console.log("Server is running on port 3000");
});