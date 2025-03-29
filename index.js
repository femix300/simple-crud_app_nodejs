const express = require('express');
const { default: mongoose } = require('mongoose');
const Product = require('./models/product.model.js');
const app = express();
const productRoute = require("./routes/product.route.js");
require('dotenv').config();


// middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))


// routes
app.use("/api/products", productRoute);


// home route
app.get('/', (req, res) => {
    res.send('Hello World from nodejs updated');
});


// connect to the database and run the server
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
        console.log('server is running on port 3000');
    });
    
})
.catch((error) => {
    console.log("Connection failed!", error);
});
