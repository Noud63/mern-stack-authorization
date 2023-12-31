import express from 'express'
import path from 'path'
import dotenv from 'dotenv'
import colors from 'colors'
dotenv.config()
import cookieParser from 'cookie-parser'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
const PORT = process.env.PORT
import connectDB from './config/db.js'
import userRoutes from './routes/userRoutes.js'

connectDB()
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cookieParser())

app.use('/api/users', userRoutes)

if(process.env.NODE_ENV === 'production'){
    const __dirname = path.resolve()
    /* now you can run your app on localhost:5000 */
    app.use(express.static(path.join(__dirname, "frontend/dist")))
    /* if route is any other then api/users */
    app.get('*', (req, res) => sendFile(path.resolve(__dirname, "frontend", "dist", "index.html")))
}else{
app.get('/', (req, res) => {
    res.send('Server is ready')
})
}

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`.yellow))