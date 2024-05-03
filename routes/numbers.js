import express from "express"
import request from "request"
import dotenv from "dotenv"
const router = express.Router()

dotenv.config()

var prevState = []
var response;



router.get('/e', async (req, res) => {
    request.post({
        url: 'http://20.244.56.144/test/even',
        headers: {
            Authorization:"Bearer "+process.env.token,
            'Content-Type':'application/json'
        }
    },
        (err,response,body) => {
            prevState = body['numbers']
            res.json({
                "numbers": body['numbers'],
                "windowPrevState": prevState,
                "windowCurrState": body['numbers'],
                "avg":body['numbers']
            })
    })
})

router.get('/p', (req, res) => {
    request.get({
        url: 'http://20.244.56.144/test/primes',
        headers: {
            Authorization:"Bearer "+process.env.token,
            'Content-Type':'application/json'
        }
    },
        (err,response,body) => {
            prevState = body['numbers']
            res.json({
                "numbers": body['numbers'],
                "windowPrevState": prevState,
                "windowCurrState": body['numbers'],
                "avg":body['numbers']
            })
    })
})

router.get('/f', (req, res) => {
    request.get({
        url: 'http://20.244.56.144/test/fibo',
        headers: {
            Authorization:"Bearer "+process.env.token,
            'Content-Type':'application/json'
        }
    },
        (err,response,body) => {
            prevState = body['numbers']
            res.json({
                "numbers": body['numbers'],
                "windowPrevState": prevState,
                "windowCurrState": body['numbers'],
                "avg":body['numbers']
            })
    })
})

router.get('/r', (req, res) => {
    request.get({
        url: 'http://20.244.56.144/test/rand',
        headers: {
            Authorization:"Bearer "+process.env.token,
            'Content-Type':'application/json'
        }
    },
        (err,response,body) => {
            prevState = body['numbers']
            var val={
                "numbers": body.numbers,
                "windowPrevState": prevState,
                "windowCurrState": body.numbers,
                "avg":body.numbers
            }
            res.send(body['numbers'])
    })
})


export default router