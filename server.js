import express, { json } from "express"
import numberRoute from "./routes/numbers.js"
const app = express()

app.use(json())

app.use('/numbers',numberRoute)

app.listen(5000, () => {
    console.log("Server is listening on port number 5000")
})