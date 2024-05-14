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


app.use((_, res) => res.status(404).end(`
<!DOCTYPE html>
<html>
    <head>
        <title>404: Page Not Found</title>
    </head>
    <body>
        <h1>404: Page Not Found</h1>
        <p>
            Please try again or visit the home page,
            <a href="/">
                here.
            </a>
        </p>
    </body>
</html>
`));

app.get("/about", (req, res) => {
    res.send(
        "Our goal in this project is to develop a basic Express application."
    );
});


app.listen(port, err => {
    console.log(err || `listening on port ${port} 😎`);
});
