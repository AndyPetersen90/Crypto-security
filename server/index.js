const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const {
    login,
    register
} = require('./controllers/auth')

app.post(`/api/login`, login)
app.post(`/api/register`, register)

app.listen(5501, () => console.log(`running on 5501`))