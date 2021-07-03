const express = require('express');
const app = express();


app.get("/",(req,res) => {
    res.send({
        hi:'there shnewpy',
        thegal: "is not moopy I hope"
})
})

const PORT = process.env.PORT || 5000;

app.listen(PORT);