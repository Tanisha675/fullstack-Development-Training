import express from 'express'
const app=express()
const port=3000
app.use(express.json())
//API section
//1

app.get('/create-todo',(request,response)=>{
    const todo={
        "title":"crafting",
        "status":"pending"
    }
    response.json(todo)
})
//2
app.get('/read-all-todo',(request,response)=>{
    response.send(`data readed sucessfully`)
})
//3
app.get('/read-todo',(request,response)=>{
    response.send(`data readed sucessfully`)
})
//4
app.get('/update-todo',(request,response)=>{
    response.send(`data updated sucessfully`)
})
//5
app.get('/delete-todo',(request,response)=>{
    response.send(`data deleted sucessfully`)
})
app.listen(port,()=>{
    console.log(`requested api is displayed at the port ${port}`);
})