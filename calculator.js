const express = require("express");
const app = express();

app.get("/add", (req, res) => {
    const numbers = req.query.numbers;
    let sum = 0;
    for (const number of numbers) {
        sum += parseInt(number);
    }
    res.send({ sum: sum });
});

app.get("/multiply", (req, res) => {
    const numbers = req.query.numbers;
    let product = 1;
    for (const number of numbers) {
        product *= parseInt(number);
    }
    res.send({ product: product });
});

app.listen(3000, () => {
    console.log("Calculator API running on port 3000");
});
