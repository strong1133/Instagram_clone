const createUser = `
    CREATE TABLE USER (
        USER_ID INT(5) NOT NULL AUTO_INCREMENT,
        USERNAME VARCHAR(255) NOT NULL,
        PASSWORD VARCHAR(255) NOT NULL,
        NAME VARCHAR(255) NOT NULL,
        TIMESTAMPED TIMESTAMP NOT NULL,
        PRIMARY KEY (USER_ID)
    ) DEFAULT CHARSET=utf8
`

const SelectAllUser = `SELECT USER_ID, USERNAME, NAME, TIMESTAMPED TOTAL_COUNT FROM USER;`

const Register = (userName, password, name) =>{
    return `INSERT INTO USER (USERNAME, PASSWORD, NAME) VALUES ('${userName}', '${password}', '${name}');`
} 


module.exports = {createUser, SelectAllUser, Register} 