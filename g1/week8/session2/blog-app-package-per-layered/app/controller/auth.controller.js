const authService = require('../service/auth.service')

async function register(req, res, next) {
    try {
        const {userName, email, password} = req.body;
        const user = await authService.register(userName, email, password);
        res.status(201).json({message: 'User created successfully', success: true, data: user});
    } catch (error) {
        res.json({
            message: error.message,
            success: false
        });
    }
}

module.exports = {register};