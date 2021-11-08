const crypto = require('crypto');


const createSalt = () =>{
    new Promise((resolve, reject) =>{
        crypto.randomBytes(64, (err, buf) =>{
            if (err) reject(err);
            resolve(buf,toString('base64'))
        })
    })
}

const createHashedPassword = (plainPassword) =>{
    new Promise(async (resolve, reject) => {
        const salt = await createSalt();
        console.log("salt : ", salt);
        crypto.pbkdf2(plainPassword, salt, 12342, 64, 'sha512', (err, key) =>{
            if (err) reject(err);
            resolve ({
                password: key.toString('base64')
                , salt
            });
        })

    })
}

module.exports = {
    "createHashedPassword" : createHashedPassword,
};