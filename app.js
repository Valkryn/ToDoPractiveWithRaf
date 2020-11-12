const express = require ("express")
const bodyparser = require ("body-parser")

const app = express()

app.set("view engine", "ejs")

app.get("/",function(req,res){
  let today = new Date()
  let currentDay = today.getDay()
  const daysOfTheWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  let day = daysOfTheWeek[currentDay]

  res.render("list",{kindOfDay:day})
})

app.listen(3000, function(){
  console.log("server is active")
})
