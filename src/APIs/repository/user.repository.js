const User = require("../../../models/user.model");

module.exports = {
    findUser: async (id) => {
        try {
            let user = await User.findOne(id);

            user = JSON.parse(JSON.stringify(user));

            return user;
        } catch (err) {
            throw new Error(err.message)
        }
    },

    createUser: async (body) => {
        try {
            let user = await User.create(body);
            user = JSON.parse(JSON.stringify(user));
            return user;
        } catch (err) {
            throw new Error(err.message)
        }
    }
}