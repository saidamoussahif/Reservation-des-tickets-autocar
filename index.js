const express = require('express');
const { PORT } = require("./config");
const todoRouter = require("./routes/todo")

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use("/api/todos", todoRouter)

app.listen(PORT, () =>{
    console.log(`server runs at port ${PORT}`)
})
