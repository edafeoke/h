const express = require('express')

const app = express()

app.get('/',(req,res)=>{
	res.send(`hello ${process.env.PORT}`)
});

app.listen(process.env.PORT,()=>console.log(`listening ${process.env.PORT}`));
