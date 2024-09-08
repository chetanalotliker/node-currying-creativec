const currying = require("currying-creativec");
const express = require("express");

const app = express();
const PORT = 8085;

// Middleware to parse JSON bodies
app.use(express.json());

app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}/`)
)

app.get('/', (req, res) => {
    return res.status(200).json("Welcome to node-currying project");
});

app.post('/currying', (req, res) => {
    const { number1, number2, number3 } = req.body;

    const value = currying(number1)(number2)(number3);

    return res.status(200).json(`Value of number1:${number1} number2:${number2} number3:${number3} = ${value}`);
});
