import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";
import userRouter from './routes/user.routes.js' //routes import

const app = express()  

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16KB" })) 
app.use(express.urlencoded())
app.use(express.static("public"))   
app.use(cookieParser())


//routes declaration
app.use("/api/v1/users", userRouter)


export {app};   