const express = require("express");
const app = express();
const port = 3000;

app.listen(port, err => {
    console.log(err || `listening on port ${port} 😎`);
});
