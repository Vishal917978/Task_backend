const mysql = require('../config/db');
const util = require('util');
const jwt = require('jsonwebtoken');
const query1 = util.promisify(mysql.query).bind(mysql);

const registration = async (req, res) => {
    const { username, email, password } = req.body
    const selectquery = `select * from user where email='${email}'`
    const record = await query1(selectquery);
    if (record.length > 0) {
        res.send({ message: "user already registered", data: data })
    }
    const insertquery = `insert into user(username,email,password)values(?,?,?)`
    let values = [username, email, password]
    const record1 = await query1(insertquery, values)
    res.send({ message: "User register successfully", data: record1 })
}

const login = async (req, res) => {
    const { email, password } = req.body
    console.log(email, password)
    const selquery = `select * from user where email='${email}' and password='${password}'`;
    let record = await query1(selquery)
    console.log(record)
    if (record.length > 0) {
        record = record[0];
        let secret_key = "tisnieore932428039hbfdkdsj89ewksdfsr34534234";
        let payload = {
            user_id: record.id,
            date: new Date()
        }
        let token = jwt.sign(payload, secret_key, { expiresIn: '7d' })
        record.token = token
        delete record.id
        res.send({ message: "login succesfully done", data: record })
    } else {
        res.send({ message: "invalid cradentials of login" })
    }

}

module.exports = { registration, login };