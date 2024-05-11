// Main file for the application
const express = require('express');
const app = express();
const port = process.env.port || 3100;

const ehbs = require('express-handlebars');
app.use(express.static(__dirname + '/html'));

app.engine('hbs', 
ehbs.engine({
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials",
    "extname": "hbs",
    defaultLayout: "layout"
}));

app.set('view engine', 'hbs');

app.get('/', (req, res) => res.render('index'));

app.use('/task1', require('./routes/task1_route'));
app.use('/task2', require('./routes/task2_route'));
app.use('/task3', require('./routes/task3_route'));
app.use('/task4', require('./routes/task4_route'));
app.use('./task4-details', require('./routes/task4_route'));



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    }
);
