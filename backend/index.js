require("dotenv").config();
const express = require('express');
const app = express();
const cors = require('cors');
const authRoute = require("./router/auth-router")
const contactRoute = require("./router/contact-router")
const PORT = 8001;
const serviceRoute = require("./router/service-router")
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

const corsOptions ={
    origin:"http://localhost:5173",
    method:"GET,POST,PUT,DELETE,HEAD,PATCH",
    credentials:true
}
app.use(cors(corsOptions));

app.use(express.json()); //express middleware
app.use("/api/auth", authRoute)
app.use("/api/form", contactRoute)
app.use("/api/data",serviceRoute)

app.use(errorMiddleware);
connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`server is listening on http://localhost:${PORT}`)
    })

})
