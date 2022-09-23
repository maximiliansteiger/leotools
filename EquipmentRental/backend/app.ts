//make nodejs express server
const express = require('express');
const app = express();
const port = 3000;
import { PrismaClient } from '@prisma/client'

//middleware
const equipment = require('./routes/equipment');
const equipmentType = require('./routes/equipmentType');
const reservation = require('./routes/reservation');
const role = require('./routes/role');
const status = require('./routes/status');
const user = require('./routes/user');


app.use(express.json());


// const prisma = new PrismaClient()

app.get('/', (req:any, res:any) => {
    res.send('Hello World!')
})


//middleware binding
app.use('/equipments', equipment);
app.use('/equipmentTypes', equipmentType);
app.use('/reservations', reservation);
app.use('/roles', role);
app.use('/states', status);
app.use('/users', user);





app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
});



