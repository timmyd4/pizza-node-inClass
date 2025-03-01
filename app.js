//Import Express
import express from 'express';
//Import MariaDB
import mariadb from 'mariadb';

const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'pizza'
});

async function connect() {
    try {
        const conn = await pool.getConnection();
        console.log('Connected to the database!')
        return conn;
    } catch (err)
    {
        console.log(`Error connecting to the database ${err}`);
    }
}


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

app.get('/admin', async (req, res) => {

    const conn = await connect();

    const orders = await conn.query('SELECT * FROM ORDERS;');

    console.log(orders);

    res.render('admin', { orders });

})

//Tell the server to listen on our specified port
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

