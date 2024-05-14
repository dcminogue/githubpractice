const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World");
});
app.get("/hello/:name", (req, res) =>
    res.end(`
<!DOCTYPE html>
<html>
    <head>
        <title>Hello, ${req.params.name}!</title>
    </head>
    <body>
        <h1>Hello, ${req.params.name}!</h1>
    </body>
</html>
`)
);

app.listen(port, err => {
    console.log(err || `listening on port ${port} 😎`);
});
