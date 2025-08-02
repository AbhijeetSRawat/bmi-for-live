const userModel = require("../model/user.model");

const userController = {
    userGet: async (req, res) => {
        const users = await userModel.find();
        res.json(users)
    },
    userCreate: async (req, res) => {
        try {
            const { name, email, password, city } = req.body;
            const newUser = new userModel({ name, email, password, city });
            await newUser.save()
            res.status(201).json({ message: "USer created", user: newUser })
        } catch (err) {
            console.error("Error user Created", err)
            res.status(500).json({ message: "User Error create" })
        }
    },
    confromPasswords: async (req, res) => {
        try {
            const { name, email, password, conformpasswors } = req.body;
            const newUserss = new userModel({ name, email, password, conformpasswors });
            await newUserss.save()
            res.status(201).json({ message: "success conform password", data: newUserss })
        } catch (err) {
            console.log("Error conform passsword", err)
            res.status(500).json({ message: "user Conform password" })
        }
    }
}

module.exports = userController