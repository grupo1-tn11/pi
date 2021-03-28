const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const session = require('express-session')
const methodOverride = require('method-override')

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const languagesRouter = require('./routes/languages')
const authRouter = require('./routes/auth')
const adminRouter = require('./routes/admin')
const perfilRouter = require('./routes/perfil')
const cookieAuthentication = require('./middlewares/cookieAuth')

const { dirname } = require('path')

const app = express()

// view engine setup
// eslint-disable-next-line no-undef
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
// eslint-disable-next-line no-undef



app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'uploads')))
app.use(express.static(path.join(__dirname, 'database')))

app.use(
  session({
    secret: 'instalacao',
    resave: false,
    saveUninitialized: true,
  })
)
app.use(methodOverride('_method'))

app.use(cookieAuthentication) // cookie login

app.use('/', indexRouter)
app.use('/usuario', usersRouter)
app.use('/linguagem', languagesRouter)
app.use('/login', authRouter)
app.use('/admin', adminRouter)
app.use('/perfil', perfilRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
// eslint-disable-next-line no-unused-consts
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})


module.exports = app
