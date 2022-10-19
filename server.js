const express = require('express');
const app = express();

const port = process.env.PORT || 3100;

app.use(express.json({ limit: '15mb' }))
app.use(express.urlencoded({ limit: '15mb', extended: true })) // false = string object, true = json object

const Router = require('./src/app');
app.use('/api/v1', Router);

// alb health state check
app.use('/', (req, res) => {
    if (!req.header('user-agent') || req.header('user-agent') != "ELB-HealthChecker/2.0") {
        console.log(`attack : ${req.url}`)
        console.log(req.headers)
    }
    res.status(200).json('HTTP_OK')
})

//에러 호출 - 페이지 못찾을 경우 발생
app.use((req, res, next) => {
    const error = new Error('Not found');
    console.log(req.url)
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    console.log(error)
    res.json({
        error: {
            message: error.message
        }
    });
});

// http server
const server = require('http').createServer(app)

server.listen(port, err => {
    if (err) console.log(err)
    else console.log('서버가 가동되었습니다. 포트 : ' + port)
})