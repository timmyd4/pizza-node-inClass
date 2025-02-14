//Import Express
import express from 'express';

//Instantiate an Express application
const app = express();

//Middleware
app.use(express.urlencoded({ extended: true}));

//Set view engine for app
app.set('view engine', 'ejs');

//Serve static files from the 'public' directory
app.use(express.static('public'));

//Define a port number for our server to listen on
const PORT = 3000;

//define array
const orders = [];

//Define a "default" route for our home page
app.get('/', (req, res) => {

    // Send our home page as a response to the client
    res.render('home');
});

//Define a "thank you" route
app.post('/thankyou', (req, res) => {
    
    const order = 
    {
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        method: req.body.method,
        toppings: req.body.toppings,
        size: req.body.size
    };

    orders.push(order);
    console.log(orders);
    // Send our thank you page
    res.render('thankyou.ejs', { order });
});

app.get('/admin', (req, res) => {
    res.render('admin', { orders });

})

//Tell the server to listen on our specified port
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

