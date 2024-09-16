import express from "express"
import "dotenv/config"
import cors from "cors"
import cookieParser from "cookie-parser"
import { connectDb } from "./db/connect.js"
import userRoutes from "./routes/user.routes.js"


const app = express()


app.use(express.json())
app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true
}))
app.use(cookieParser())


app.use("/api/v1/user", userRoutes)

app.get("/", (req, res) => {
    res.send("Hello World from backend")
})

const port = process.env.PORT || 1000
connectDb()
app.listen(port,()=>{
    console.log(`Server is running on port http://localhost:${port} `)
})