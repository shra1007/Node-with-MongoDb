    const express = require("express");
const { main } = require("./mangoose");
// var bodyParser = require('body-parser');
const { MasterTable } = require("./models/MasterTable");


let app = express();
app.use(express.json())

    app.listen(8000,()=>{
        main();

        console.log("Server Started")
    })

    app.get("/",async (req,res)=>{

        // main();
        try{
        let data = await MasterTable.find()
        
        res.status(200).json(data.map(d=>{return ({key:d.key,value:d.value})}))
        }
        catch(error){
        
            console.log(error)
            res.status(500).json({"Message":"error"})
        }
    })  

    app.post("/add", async (req,res)=>{
        console.log("route reached")
        console.log(req.body)
        let key  =req.body.key
        let value = req.body.value

        try{
       let data=  new MasterTable({
            key:key,
            value:value
        })

        await data.save();


        res.status(201).json({"message":"record Inserted"})
    }
    catch (error){
        console.log(error)
        res.status(500).json({"Message":"error"})
    }

    })
 