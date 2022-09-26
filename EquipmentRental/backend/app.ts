import express from 'express';
const app = express();
const port = 3000;

//middleware
import equipment from './routes/equipment';
import equipmentType from './routes/equipmentType';
import reservation from './routes/reservation';
import role from './routes/role';
import status from './routes/status';
import user from './routes/user';
import equipmentCategory from './routes/equipmentCategory';
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

//middleware binding
app.use('/equipments', equipment);
app.use('/equipmentTypes', equipmentType);
app.use('/reservations', reservation);
app.use('/roles', role);
app.use('/statuses', status);
app.use('/users', user);
app.use('/equipmentCategories', equipmentCategory);


app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
});

