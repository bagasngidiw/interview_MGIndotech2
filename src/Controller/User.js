const {
    User
} = require('../Model/User')
const mongoose = require('mongoose')


const getUser = async (req, res)=> {
    const user = await User.find()

    res.status(200).json(user)
}

const createUser = async (req,res) => {
    const {
        name,
        hobby,
        address,
        phoneNumber
    } = req.body

    try {
        const user = await User.create({
            name: name,
            hobby: hobby,
            address: address,
            phoneNumber: phoneNumber
        })

        res.status(201).json({
            user,
            message: "Added New User"
        })

    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }

}

const updateUser = async (req, res) => {
    const {
        id
    } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({
            error: "Cant Find Category"
        })
    }

    const user = await User.findOneAndUpdate({
        _id: id
    }, {
        ...req.body
    })

    if (!user) {
        return res.status(400).json({
            error: "Cant Update"
        })
    }

    res.status(200).json(user)
}

const deleteUser = async (req, res) => {
    const {
        id
    } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({
            error: "Cant Find Category"
        })
    }

    const user = await User.findOneAndDelete({
        _id: id
    }, {
        ...req.body
    })

    if (!user) {
        return res.status(400).json({
            error: "Cant Update"
        })
    }

    res.status(200).json(user)
}

module.exports ={ 
    getUser,
    createUser,
    updateUser,
    deleteUser
}