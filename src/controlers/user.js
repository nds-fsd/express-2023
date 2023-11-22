const User = require("../data/schemas/user");

const getUsers = async (req, res) => {
    const queryStrings = req.query || {};
    const allUsers = await User.find(queryStrings);
    res.json(allUsers);
};

const getUser = async (req, res) => {
    const allUsers = await User.findById(req.params.id);
    res.json(allUsers);
};

const updateUser = async (req, res) => {
    const allUsers = await User.findByIdAndUpdate(req.params.id,req.body, {
        new: true
      });
    console.log(allUsers);
    res.json(allUsers);
};

const patchUser = async (req, res) => {
    const allUsers = await User.findByIdAndUpdate(req.params.id,req.body, {
        new: true,
        upsert: true // Make this update into an upsert
      });
    res.json(allUsers);
};

const deleteUser = async (req, res) => {
    const allUsers = await User.findByIdAndDelete(req.params.id);
    res.json(allUsers);
};

const createUser = async (req, res) => {
    const body = req.body;

    console.log(body);

    const data = {
        name: body.name,
        email: body.email,
        password: body.password
    };

    //creamos una nueva instancia de user,
    const newUser = new User(data);

    //lo guardamos en mongo
    try {
        await newUser.save();
        res.json(newUser);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }

};

module.exports = {
    getUser,
    getUsers,
    createUser,
    updateUser,
    deleteUser,
    patchUser
};
