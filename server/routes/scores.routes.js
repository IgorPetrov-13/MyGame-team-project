const router = require("express").Router();
const { User} = require("../db/models");
router.route("/:id")
.put(async(req, res)=>{
    try {
        const {id} =req.params
        const {name, email, password, score}= req.body
        const userUpdate = await User.update({name, email, password, score}, {where:{id}})

        res.status(201).json(userUpdate)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})



module.exports=router