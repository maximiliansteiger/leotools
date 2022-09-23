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

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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