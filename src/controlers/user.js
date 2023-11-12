const usersData = [{
    name: 'Pepe',
    password: '1234567'
}]

const getUser = (req, res) => {
    res.send({users: usersData, date: req.requestInstant});
};

module.exports = {
    getUser
};
