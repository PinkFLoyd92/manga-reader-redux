import { User as userModel } from '../../db/models/User';

const resolver = {
    Query: {
        authenticate(obj, args, context, info) {
            let user = new Promise((resolve, reject) => {
                userModel.findOne({ user:args.user, password: args.password }, function (err, user) {
                    if (err) {
                        reject(err);
                    }
                    if(user) resolve(true);
                    resolve(false);
                });
            });
            return user;
        }
    }
}

export { resolver };
