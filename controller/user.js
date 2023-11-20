const {userModel} = require("../models/user.model");

const createuser = async(req,res)=>{

    try
    {
        const{name,role,email,phone} = req.body;

        if(!name || !role || !email || !phone)
        {
            return res.status(400).send({msg:"Please fill all field"});

        }

        const newUser = new userModel({name,role,email,phone})

        await newUser.save()
        res.status(200).send({msg:"User created sucess"})
    }
    catch
    {
        res.status(500).send({msg:error.message})
    }
}


const getUser = async(req,res)=>{
    try
    {
        const getAllUser = await UserModel.find()
        if(getAllUser.length== "")
        {
            return res.status(401).send({msg:"No user found"})
        }

        res.status(200).send({msg:getAllUser})

    }

    catch(error)
    {
    
        res.status(500).send({msg:error.message})
    }
}


const getUserById = async(req,res) =>{

    try
    {
        const {id} = req.paramas;

        if(!id)
        {
            return res.status(403).send({msg:"No id provided"})
        }

        const getUser = await UserModel.findById(id);

        if(!getUser)
        {
            return res.status(403).send({msg:"No user found by this id"});
        }
        res.status(200).send({msg:getUser})
    }
    catch(error)
    {
        res.status(500).send({msg:error.message});
    }
}


const deleteUser = async(req,res)=>{
    try
    {
        const{id}= req.paramas;

        if(!id)
        {
            return res.status(403).send({msg:"No id provided"})
        }
        const deleteUser = await UserModel.findByIdAndDelete(id);

        if(!getUser)
        {
            return res.status(403).send({msg:"No user found by this id"});
        }

        res.status(200).send({msg:"User deleted"})
    }

    catch(error)
    {
        res.status(500).send({msg:error.message})
    }
}


const updateUser = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, role, email, phone } = req.body;
  
      if (!id) return res.status(403).send({ msg: "No id provided" });
  
      const updatedUser = await UserModel.findByIdAndUpdate(
        id,
        { name, role, email, phone },
        { new: true } 
      );
  
      if (!updatedUser)
        return res.status(403).send({ msg: "No user found by this id" });
  
      res.status(200).send({ msg: "User updated", user: updatedUser });
    } catch (error) {
      res.status(500).send({ msg: error.message });
    }
  };
  
  
  
  module.exports = {
      createuser,
      getUser,
      getUserById,
      deleteUser,
      updateUser
  }