module.exports = (db) => {

    const resolver = {
        User: {
            auth: (password) => {
                db.collection('users').find().toArray(function (err, result) {
                    if (err) throw err;
                    console.info(result);
                    return result;
                });
            }
        }
    };
    return resolver;
};
