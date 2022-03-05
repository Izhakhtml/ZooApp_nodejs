const bcryptjs = require('bcryptjs');
const Users = require('../model/Users-model');
const jwt = require('jsonwebtoken')

module.exports = {
    register: async (req, res) => {
        try {
        if (await Users.exists({ email: req.body.email })) return res.status(500).send({ message: "the email exist in system" });
        bcryptjs.hash(req.body.password, 10, async (err, hashPassword) => {
            if (err) return res.status(500).send({ message: "error" });
            req.body.password = hashPassword;
            await Users.create(req.body)
                .then(() => res.status(200).send({message:"Added successfully"}))
                .catch((reject) => res.status(500).send(reject))
        })            
        } catch (error) {
            res.status(500).send(error);
        }

    },
    login: async (req, res) => {     
        try {
        const { password, email } = req.body;
            const user = await Users.findOne({email})           
             bcryptjs.compare(password, user.password, (err, isMatch) => {
                if (err) return res.status(500).send({ message: "error" });
                if (!isMatch) return res.status(500).send({ message: "password error" });
                jwt.sign({ user }, process.env.secretOrKey, { expiresIn: '30m' },(error,result)=>{
                if (error) return res.status(500).send({ message: "error tkn" });
                return res.status(200).send({message:true,result, isMatch});
                })
            })            
        } catch (error) {
            res.status(500).send({ message:"the email is not correct"})
        }
    },
}