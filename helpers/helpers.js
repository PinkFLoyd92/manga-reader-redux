var fs = require('fs');

export function fetchImage(name, root_path){
    var img = null;
    const files = fs.readdirSync(`${root_path}`);
    if(files.length > 0) {
        img = fs.readFileSync(`${root_path}/${files[0]}/${name}1.jpg`);
    }
    return img;
}
