const express = require("express");

const app = express();

app.get('/sum', (req, res) => {
    const {a, b} = req.query;

    const inA = parseFloat(a);
    const inB = parseFloat(b);
    const c = inA + inB;

    const inRes = `The sum of ${inA} and ${inB} is ${c}`;

    if(Number.isNaN(inA) || Number.isNaN(inB)){
        return res.status(400).send(`Error! Why!`)
    }
    
    res.status(200).send(inRes);
})

app.get('/cipher', (req, res) => {

})

app.get('/lotto', (req, res) => {

})





app.listen(8080, () => {
    console.log('working')
})



