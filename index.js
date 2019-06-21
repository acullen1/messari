const express = require('express')
const path = require('path')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT || 3000
const dataObject = require('./messariRouter')
const viewsPath = path.join(__dirname, '../messari/view')

app.set('view engine', 'hbs')
app.set('views', viewsPath )

const staticPath = path.join(__dirname, 'public')
console.log(staticPath)
app.use(express.static(staticPath))
let newData = new Object()

const data = new Promise( (res, rej) =>{


   res(dataObject)
    
})
data.then((value)=> {
    newData = value.data[0]})


app.get('', async (req, res)=>{
    console.log('requesting')
   
    await res.render(('display'),{
      name : newData.name,
      metrics: newData.metrics.market_data.price_usd
             }
    )})

app.listen(port)
console.log('Server started on '+ port)
