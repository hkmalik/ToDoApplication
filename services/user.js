const pool=require("../database")

module.exports = {
    create:(data, callBack) => {
        pool.query(
            `insert into users(id,name,username,email,password,isActiveKey) values(?,?,?,)) `,

            [
                data.id,
                data.name,
                data.username,
                data.email,
                data.password,
                data.isActiveKey
            ],
            (error , results, fields) => {
                if(error)
                {
                    return callBack(error)
                }
                return callBack(null, results)
            }
        );
    }

}
module.exports={

    getUsers: (callBack)=>{
        pool.query
        (
                `SELECT  * from users`,
                [],
                (error,result,field) =>
                {
                    if(error)
                    {
                        callBack(error)
                    }
                    return callBack(null, result[0]);
                
                }
        );
                
   }
}
