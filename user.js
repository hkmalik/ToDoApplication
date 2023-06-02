const pool = require("../database")

module.exports = {
    create: (data, callBack) => {

        pool.query(
            "INSERT INTO users (name,username,email, password,isactive_key) VALUES (?, ?, ?, ?,?)",
            [
                data.name,
                data.username,
                data.email,
                data.password,
                data.isActiveKey
            ],
            (error, results) => {
                if (error) {
                    return callBack(error)
                }
                return callBack(null, results)
            }
        );
    },
    getUsers: (callBack) => {
        pool.query
            (
                `SELECT  * from users`,
                [],
                (error, result, field) => {
                    if (error) {
                        callBack(error)
                    }
                    return callBack(null, result);

                }
            );

    },
    getLoginUser: (email, callBack) => {
        pool.query('SELECT * FROM users WHERE email= ?',
            [email],
            (error, results, field) => {
                if (error) {
                    return (error);
                }
                return callBack(null, results[0]);
            }
        )
    },
    createTask: (data, callBack) => {
        pool.query(
            "INSERT INTO tasks (user_id,task_name,description,status) VALUES (?, ?, ?, ?)",
            [
                data.user_id,
                data.task_name,
                data.description,
                data.status,
            ],
            (error, results) => {
                if (error) {
                    return callBack(error)
                }
                return callBack(null, results)
            }
        );
    },
    getTask: (callBack) => {
        pool.query(
            "SELECT * FROM tasks "
       ,
            [],
            (error, results, field) => {
                if (error) {
                    callBack(error)
                }
                else {
                    callBack(null, results)
                }
            }
            )



    },
}

