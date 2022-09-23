//make nodejs express server
const express = require('express');
const app = express();
const port = 3000;
import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient()
/*
CHAT
backend mid nodemon starten daun wird beim speichern des backend neich gestartet 







*/

//repository
//make route
app.get('/', (req:any, res:any) => {
    res.send('Hello World!')
})



app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
});



