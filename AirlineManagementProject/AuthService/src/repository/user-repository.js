const { User } = require('../models/index');

class UserRepository {

    async create(data) {
        try {
            const user = await User.create(data);
            return user;
        } catch (error) {
            console.log("Somethigh went wrong in repository layer");
            throw error;
        }
    }

    async destroyUser(userId) {
        try {
            await User.distroy({
                where: {
                    id: userId,
                }
            });
            return true;
        } catch (error) {
            console.log("Somethigh went wrong in repository layer");
            throw error;
        }
    }

}

module.exports = UserRepository