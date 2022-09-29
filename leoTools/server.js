const path = require('path')
const express = require('express')

const app = express()

const port = process.env.PORT || 12515  // LEO : 12 5 15
const publicDirectoryPath = path.join(__dirname, './public')

app.use(express.static(publicDirectoryPath))

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`)
})

