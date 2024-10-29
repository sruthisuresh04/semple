const express=require('express')
const app=express();
const port=5000;

app.get('/',(req,res)=>{
        res.status(200).send('Home page');
    });

app.get('/about',(req,res)=>{
        res.status(200).send('About page')
});
  

app.listen(port,()=>{
    console.log(`server running on http://localhost:${port}`);
});