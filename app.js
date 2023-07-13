require('dotenv').config();
const ReactDOMServer = require('react-dom/server');
const React = require('react');
const session = require('express-session')
const FileStore = require('session-file-store')(session)
require('@babel/register')
const express = require('express');
const logger = require('morgan');
const path = require('path');
const { secureRoute } = require('./src/middlewares/common');
const regRouter = require('./src/routes/regRouter');
const loginRouter = require('./src/routes/loginRouter');
const indexRouter = require('./src/routes/index');


const app = express();
const PORT = 3005;

app.use(logger('dev'));
// Подключаем middleware, которое сообщает epxress, что в папке "ПапкаПроекта/public" будут
// находится статические файлы, т.е.файлы доступные для скачивания из других приложений.
app.use(express.static(path.join(__dirname, 'public')));
// Подключаем middleware, которое позволяет читать содержимое body из HTTP-запросов
// типа POST, PUT и DELETE.
app.use(express.urlencoded({ extended: true }));
// Подключаем middleware, которое позволяет читать переменные JavaScript, сохранённые
// в формате JSON в body HTTP - запроса.
app.use(express.json());

const sessionConfig = {
    name: 'AlkoCookie',
    store: new FileStore(),
    secret: process.env.SESSION_SECRET ?? 'Секретное слово',
    resave: false, // * если true, пересохранит сессию, даже если она не менялась
    saveUninitialized: false, // * если false, куки появятся только при установке req.session
    cookie: {
      maxAge: 9999999, // * время жизни в мс (ms)
      httpOnly: true,
    },
  };

app.use(session(sessionConfig));

app.use('/register', secureRoute, regRouter);
app.use('/login', secureRoute, loginRouter);
app.use('/', indexRouter)

app.listen(PORT, () => {
    console.log(`server started PORT: ${PORT}`);
  });