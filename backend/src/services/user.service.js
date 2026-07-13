const Users = [
    {
        id: 1,
        login: 'admin',
        password: 'password'
    }
]



export default class UserService {
    async authorization(authorizationData) {
        const user = Users.find(u => u.login === authorizationData.login);

        if (!user) {
            return {
                success: false,
                status: 404,
                message: 'User with this login does not exist'
            };
        }

        if (user.password !== authorizationData.password) {
            return {
                success: false,
                status: 401,
                message: 'Incorrect password'
            };
        }

        console.log('success');

        return {
            success: true,
            status: 200,
            message: 'Authorization successful',
            data: {
                id: user.id,
                login: user.login
            }
        };
    }
}



