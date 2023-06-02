const {createPool} =require('mysql');

const dbConnectionInfo=createPool({
    port :3306,
    host:"localhost",
    user:"root",
    password:"",
    database:"todo_database",  
    connectionLimit:10
});

/*
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:"todo_database",  
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});*/
module.exports =dbConnectionInfo