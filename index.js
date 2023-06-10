const express = require("express")
const app = express()
const products = require("./products")
const mongoose = require("mongoose")
const cors = require("cors")
const bodyParser = require("body-parser")
const Content = require("./schema")

app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(cors())
app.use(bodyParser.json())
mongoose.connect("mongodb+srv://ajaynagaraju32:<pwd to be replaced here>@codegnan.isbtslh.mongodb.net/firstdb?retryWrites=true&w=majority")
    .then(() => {
        console.log("MongoDB Connected Successfully")
    })
    .catch((err) => {
        console.log(err)
    })

app.post("/add",(req,res) => {
 const {name,passcode} = req.body
  const newData = new Content({
    name,passcode
  })
  newData.save()
  res.send("Successfully added into database")

})

app.get("/retrieve",(req,res)=>{
    Content.find()
    .then(found=>res.json(found))
})
app.get("/products",(req,res)=>{
    res.json(products)
})
app.get("/", (req, res) => {

    res.send("Server Started Successfully")

})

app.get("/name",(req,res)=>{
    res.send("Ajay IT Solutions")
})

app.listen(4000, () => {
    console.log("Server Started Successfully")
})
