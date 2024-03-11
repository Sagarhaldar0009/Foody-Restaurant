const express = require("express");
const app = express();

const dotenv = require("dotenv");
const cors = require("cors");
const database = require("./config/database");
// const { errorMiddleware } = require("./error/error");


// Import the Routes
const bookingRoutes = require("./routes/booking");


dotenv.config();
const PORT = process.env.PORT || 4000;

// Database Connection - by just calling the Function Name (i.e. "connect() )
database.connect();


app.use(
	cors({
		origin:[process.env.FRONTEND_URL,"*"],
        // Kon kon se Methods use Karne Wale hai hum.
        methods:["POST"],
		credentials:true,
	})
)

// add Middlewares
app.use(express.json());
    
app.use(express.urlencoded({extended:true})); // express.urlencoded() is a method inbuilt in express to recognize the incoming Request Object as strings or arrays. This method is called as a middleware in your application using the code: app.use(express.urlencoded());

// app.use(errorMiddleware);


// Mounting (Defining) Routes
app.use("/api/v1/booking", bookingRoutes);

app.get("/", (req,res) => {
    return res.json({
        success:true,
        message:'Your server is up and running....'
    })
})

app.listen(PORT, ()=>{
    console.log(`Server is Running at PORT : ${PORT}`)
})