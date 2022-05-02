const express = require('express');
const routes = require('./routes');
const cors = require('cors');


const app = express();
app.use(cors());
const port = 3000;

routes(app);

app.listen(port, () =>{
    console.log(`servidor rodando na porta ${port}`)
})

module.exports = app;