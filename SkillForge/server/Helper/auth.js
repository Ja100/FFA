const bcrypt = require('bcrypt');

const hashPassword = (password) => {
    return new Promise( (resolve, reject) => {
        bcrypt.genSalt(10, (err, salt) => { //default value is 10... the hogher the value the higher the protection but the lower process
            if(err) {
                reject(err) //if there is erro, reject that error
            }
            bcrypt.hash(password, salt, (err, hash) => {
                if(err) {
                    reject(err)
                }
                resolve(hash)
            })
        })
    }) 
}

const comparePassword = (password, hashed) => {
    return bcrypt.compare(password, hashed);
}

module.exports = {
    hashPassword,
    comparePassword
}