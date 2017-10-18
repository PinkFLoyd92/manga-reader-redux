import { Manga as mangaModel } from '../../db/models/Manga';

const resolver = {
    Query: {
        mangas(obj, args, context, info) {
            let mangas = new Promise((resolve, reject) => {
                mangaModel.find({ name:args.name }, function (err, mangas) {
                    if (err) {
                        reject(err);
                    }

                    // console.info(mangas)
                    resolve(mangas);
                });
                
            });
            return mangas;
        },
    },
    Manga: {
        all: () => {
            return 'testing...';
        }
    }
};

export { resolver };
