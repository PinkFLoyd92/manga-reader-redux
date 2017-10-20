import { User as userModel } from '../../db/models/User';
const jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens

const resolver = {
    Query: {
        authenticate(obj, args, context, info) {
            let user = new Promise((resolve, reject) => {
                userModel.findOne({ user:args.user, password: args.password }, function (err, user) {
                    if (err) {
                        reject(err);
                    }
                    if(user) {
                        const payload = { user: user.name };
                        const token = jwt.sign(payload, 'secretKey', {
                            expiresIn : 60*60*24
                        });
                        resolve({
                            user: user.user,
                            token,
                            authenticated: true
                        });
                    }

                    resolve({
                        token: null,
                        authenticated: false
                    });
                });
            });
            return user;
        }
    }
};

export { resolver };
