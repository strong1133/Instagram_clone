const createUser = `
    CREATE TABLE USER (
        USER_ID INT(5) NOT NULL AUTO_INCREMENT,
        USERNAME VARCHAR(255) NOT NULL,
        PASSWORD VARCHAR(255) NOT NULL,
        NAME VARCHAR(255) NOT NULL,
        TIMESTAMPED DATETIME NOT NULL,
        PRIMARY KEY (USER_ID)
    );
`

const SelectAllUser = `
    SELECT USER_ID, USERNAME, NAME, TIMESTAMPED TOTAL_COUNT FROM USER;
`

const Register = (userName, password, name) =>{
    let ts = new Date()
    return `
    INSERT INTO USER (USERNAME, PASSWORD, NAME, TIMESTAMPED) VALUES
    (${userName}, ${password}, ${name}, ${ts});
`
} 


module.exports = {createUser, SelectAllUser, Register} 