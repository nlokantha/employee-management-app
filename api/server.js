require("dotenv").config()
const express = require("express")
const connectToDB = require("./database/db")
const authRoutes = require("./routes/auth-routes")

connectToDB()

const PORT = process.env.PORT || 3000
const app = express()


app.use(express.json())

app.use("/auth",authRoutes)
// app.use("/api/add",authRoutes)



app.listen(PORT,()=>{
    console.log(`Server is Running in port ${PORT}`)
})
