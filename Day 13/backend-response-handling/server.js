//import express
import express from 'express'
//create app variable
const app=express()
//define port number
const port=3007
//define request passing
app.use(express.json())

//API section start
app.get('/test',(request,response)=>{
    response.send(`test sucessfully`)
})

app.get('/read-user',(request,response)=>{
    //let user=null
    let user={
        "name":"Chetanya"
    }
    if (user==null)
        response.status(404).send('data not found')
    else
        response.status(200).json(user)
})
//start server
app.listen(port,()=>{
    console.log(`server started at ${port}`);
})