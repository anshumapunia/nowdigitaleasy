const express= require("express")
const {connection} = require ("./db")
const {userRoute} = require("./routes/user.routes");


const app = express()

app.use(express.json())


app.use("/user",userRoute)



app.listen(8000, async()=>{
    try
    {
        await connection
        console.log("db is connected")
    }
    catch
    {
        console.log(error)
    }

    console.log("Server is running at 8000");
})