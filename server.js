const express = require('express')

const app = express()
app.use(express.json())

app.use(express.static(`${__dirname}/client`))

app.listen(5500, () => {
    console.log('app is up on 5500')
})