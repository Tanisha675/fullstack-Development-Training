import express from 'express'
import connectToDatabase from './db.js'
const app=express()
const port=3000
app.use(express.json())
let db;
app.listen(port,async()=>{
    console.log(`server is running at port ${port}`);
    db=await connectToDatabase('bank-db')
})

//API section

app.get('/test-api',(req,res)=>{
    res.send(`api is up!`)
})
app.post('/create-account',async(req,res)=>{
    try{
        let userAccountData=req.body;
        console.log(`request body ${JSON.stringify(userAccountData)}`)
        await db.collection('account').insertOne(userAccountData);
        res.status(201).json({
            msg:'account inserted successfully'
        })}catch(error){
            res.status(500).send({
                error:error.message
            })}
    
})
app.get('/read-all-account', async (req, res) => {
    
        const accounts = await db.collection('account').find().toArray();

        res.status(200).json(accounts); 
    
});