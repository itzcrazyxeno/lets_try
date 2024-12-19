const express=require("express")
const router=express.Router()
const db=require("../db/db")

router.get("/api/v1/tables",(req,res)=>{
    const sql = "Select * from tables";
    db.query(sql,(err,result)=>{
        if(err)return res.json(err);
        return res.json(result)
    })
})

router.post("/api/v1/tables",(req,res)=>{
    const sql = "insert into tables(`capacity`,`inoutdoor`,`available`) values (?,?,?)";

    db.query(sql,[req.body.capacity, req.body.inoutdoor, req.body.available],(err,result)=>{
        if(err)return res.json(err);
        return res.json(result)
    })
})


router.put("/api/v1/tables/:number",(req,res)=>{
    const sql = "update tables set `capacity`=?,`inoutdoor`=?,`available`=? where `number`=?";
    const number = Number(req.params.number);

    db.query(sql,[req.body.capacity, req.body.inoutdoor, req.body.available, number],(err,result)=>{
        if(err)return res.json(err);
        return res.json(result)
    })
})


router.delete("/api/v1/tables/:number",(req,res)=>{
    const sql = "delete from tables  where `number`=?";
    const number = Number(req.params.number);

    db.query(sql,[number],(err,result)=>{
        if(err)return res.json(err);
        return res.json(result)
    })
})

module.exports=router;