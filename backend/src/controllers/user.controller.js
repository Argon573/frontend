import UserService from "../services/user.service.js";

const userService = new UserService();

export default class UserController {
    async authorization(req, res) {
        try {
            const user = req.body;
            const result = await userService.authorization(user);

            return res.status(result.status).json({
                status: result.status,
                message: result.message,
                ...(result.data ? { data: result.data } : {})
            })
        }
        catch (error) {
            console.error('Authorization error:', error);
            return res.status(500).json({
                success: false,
                message: 'Internal server error'
            })}
    }
}